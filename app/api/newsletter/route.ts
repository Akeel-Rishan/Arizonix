import { timingSafeEqual } from 'node:crypto';

import type { NextRequest } from 'next/server';
import { z } from 'zod';

import { EMAIL_CONFIG, resend } from '@/lib/email/resend-client';
import { newsletterConfirmationTemplate } from '@/lib/email/templates/newsletter-confirmation';
import { getClientIP } from '@/lib/rate-limit/get-ip';
import { newsletterRateLimit, redis } from '@/lib/rate-limit/upstash-client';

export const dynamic = 'force-dynamic';
const newsletterSchema = z.object({ email: z.string().trim().email('Please enter a valid email address') });

export async function POST(request: NextRequest) {
  if (!request.headers.get('content-type')?.includes('application/json')) return Response.json({ success: false, error: 'Content-Type must be application/json' }, { status: 415 });
  try {
    const ip = getClientIP(request); const rate = await newsletterRateLimit.limit(ip);
    if (!rate.success) return Response.json({ success: false, error: 'Too many attempts. Please wait before trying again.' }, { status: 429 });
    let body: unknown; try { body = await request.json(); } catch { return Response.json({ success: false, error: 'Invalid request body' }, { status: 400 }); }
    const validation = newsletterSchema.safeParse(body);
    if (!validation.success) return Response.json({ success: false, error: validation.error.issues[0].message }, { status: 400 });
    const email = validation.data.email.toLowerCase();
    if (await redis.sismember('newsletter:subscribers', email)) return Response.json({ success: true, message: 'Thank you for subscribing!' });
    const timestamp = Date.now();
    await Promise.all([redis.sadd('newsletter:subscribers', email), redis.zadd('newsletter:subscribers:ordered', { score: timestamp, member: email }), redis.hset(`newsletter:subscriber:${email}`, { email, subscribedAt: new Date(timestamp).toISOString(), ip, source: 'website_footer' }), redis.incr('newsletter:total_count')]);
    try { await resend.emails.send({ from: EMAIL_CONFIG.from, to: [email], replyTo: EMAIL_CONFIG.replyTo, subject: "You're subscribed to Arizonix updates", html: newsletterConfirmationTemplate({ email }) }); } catch { console.error('Newsletter confirmation email failed'); }
    return Response.json({ success: true, message: 'Thank you for subscribing!' });
  } catch { return Response.json({ success: false, error: 'Unable to subscribe right now. Please try again later.' }, { status: 500 }); }
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

  try { const count = (await redis.get<number>('newsletter:total_count')) ?? 0; return Response.json({ count, message: 'Use the Upstash dashboard for subscriber exports.' }); }
  catch { return Response.json({ error: 'Unable to retrieve subscribers' }, { status: 500 }); }
}
