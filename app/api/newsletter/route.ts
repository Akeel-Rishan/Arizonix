import { timingSafeEqual } from 'node:crypto';

import type { NextRequest } from 'next/server';
import { z } from 'zod';

import { getCompanyPostalAddress } from '@/lib/email/compliance';
import { EMAIL_CONFIG, resend } from '@/lib/email/resend-client';
import { newsletterConfirmationTemplate } from '@/lib/email/templates/newsletter-confirmation';
import {
  getNewsletterEmailHeaders,
  getUnsubscribeLink,
} from '@/lib/email/unsubscribe-link';
import { getClientIP } from '@/lib/rate-limit/get-ip';
import { newsletterRateLimit, redis } from '@/lib/rate-limit/upstash-client';

export const dynamic = 'force-dynamic';

const newsletterSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address'),
});

const subscriptionSuccess = () =>
  Response.json({ success: true, message: 'Thank you for subscribing!' });

export async function POST(request: NextRequest) {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return Response.json(
      { success: false, error: 'Content-Type must be application/json' },
      { status: 415 },
    );
  }

  try {
    const ip = getClientIP(request);
    const rate = await newsletterRateLimit.limit(ip);
    if (!rate.success) {
      return Response.json(
        {
          success: false,
          error: 'Too many attempts. Please wait before trying again.',
        },
        { status: 429 },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { success: false, error: 'Invalid request body' },
        { status: 400 },
      );
    }

    const validation = newsletterSchema.safeParse(body);
    if (!validation.success) {
      return Response.json(
        { success: false, error: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    const email = validation.data.email.toLowerCase();
    const [isSubscriber, wasSuppressed] = await Promise.all([
      redis.sismember('newsletter:subscribers', email),
      redis.sismember('newsletter:suppression', email),
    ]);
    if (isSubscriber) {
      return subscriptionSuccess();
    }

    // Resolve compliance configuration before storing the subscription. This
    // prevents collecting addresses when required unsubscribe/address settings
    // are missing.
    const unsubscribeUrl = getUnsubscribeLink(email);
    const postalAddress = getCompanyPostalAddress();
    const timestamp = Date.now();
    const added = await redis.sadd('newsletter:subscribers', email);
    if (added === 0) return subscriptionSuccess();

    try {
      const operations: Promise<unknown>[] = [
        redis.zadd('newsletter:subscribers:ordered', {
          score: timestamp,
          member: email,
        }),
        redis.hset(`newsletter:subscriber:${email}`, {
          email,
          subscribedAt: new Date(timestamp).toISOString(),
          consentBasis: 'consent',
          consentSource: 'website_newsletter_form',
          ip,
        }),
        redis.incr('newsletter:total_count'),
        redis.srem('newsletter:suppression', email),
      ];
      if (wasSuppressed) {
        operations.push(
          redis.hset(`newsletter:unsubscribed:${email}`, {
            resubscribedAt: new Date(timestamp).toISOString(),
            status: 'resubscribed',
          }),
        );
      }
      await Promise.all(operations);
    } catch (error) {
      await redis.srem('newsletter:subscribers', email).catch(console.error);
      throw error;
    }

    try {
      const emailResult = await resend.emails.send({
        from: EMAIL_CONFIG.from,
        to: [email],
        replyTo: EMAIL_CONFIG.replyTo,
        subject: "You're subscribed to Arizonix updates",
        headers: getNewsletterEmailHeaders(unsubscribeUrl),
        html: newsletterConfirmationTemplate({
          email,
          postalAddress,
          unsubscribeUrl,
        }),
      });
      if (emailResult.error) {
        console.error(
          'Newsletter confirmation email failed:',
          emailResult.error,
        );
      }
    } catch (error) {
      console.error('Newsletter confirmation email failed:', error);
    }

    return subscriptionSuccess();
  } catch (error) {
    console.error('Newsletter subscription failed:', error);
    return Response.json(
      {
        success: false,
        error: 'Unable to subscribe right now. Please try again later.',
      },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  const adminToken = process.env.NEWSLETTER_ADMIN_TOKEN;
  if (!adminToken) {
    return Response.json(
      { error: 'Newsletter export is not configured' },
      { status: 503 },
    );
  }

  const providedToken =
    request.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ?? '';
  const providedBuffer = Buffer.from(providedToken);
  const expectedBuffer = Buffer.from(adminToken);
  const authorized =
    providedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(providedBuffer, expectedBuffer);

  if (!authorized) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const count = (await redis.get<number>('newsletter:total_count')) ?? 0;
    return Response.json({
      count,
      message: 'Use the Upstash dashboard for subscriber exports.',
    });
  } catch {
    return Response.json(
      { error: 'Unable to retrieve subscribers' },
      { status: 500 },
    );
  }
}
