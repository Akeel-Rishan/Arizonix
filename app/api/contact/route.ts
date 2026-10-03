import type { NextRequest } from 'next/server';

import { EMAIL_CONFIG, resend } from '@/lib/email/resend-client';
import { contactConfirmationTemplate } from '@/lib/email/templates/contact-confirmation';
import { contactNotificationTemplate } from '@/lib/email/templates/contact-notification';
import { getClientIP } from '@/lib/rate-limit/get-ip';
import { contactFormRateLimit, redis } from '@/lib/rate-limit/upstash-client';
import { ctaFormSchema, type CTAFormValues } from '@/lib/schemas/contact';

export const dynamic = 'force-dynamic';
const success = () =>
  Response.json({
    success: true,
    message: "Thank you! We'll be in touch within 48 hours.",
  });

function calculateSpamScore(data: CTAFormValues): number {
  let score = 0;

  // URLs are normal in a project description. Only treat them as suspicious in
  // fields where a legitimate URL is unlikely to appear.
  if (/https?:\/\//i.test(data.fullName)) score += 3;
  if (/https?:\/\//i.test(data.companyName)) score += 3;

  const spamKeywords =
    /\b(viagra|casino|bitcoin|forex|gambling|crypto currency|weight.?loss)\b/i;
  const identityFields = `${data.fullName} ${data.companyName}`;
  if (spamKeywords.test(identityFields)) score += 2;

  if (/(.)\1{10,}/i.test(data.fullName)) score += 2;

  return score;
}

async function sendEmailOrThrow(
  options: Parameters<typeof resend.emails.send>[0],
) {
  const result = await resend.emails.send(options);
  if (result.error) throw result.error;
  return result.data;
}

export async function POST(request: NextRequest) {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return Response.json(
      { success: false, error: 'Content-Type must be application/json' },
      { status: 415 },
    );
  }

  const ip = getClientIP(request);
  try {
    const rate = await contactFormRateLimit.limit(ip);
    if (!rate.success) {
      const retryAfter = Math.max(
        1,
        Math.ceil((rate.reset - Date.now()) / 1000),
      );
      return Response.json(
        {
          success: false,
          error: 'Too many submissions. Please wait before trying again.',
          retryAfter,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': String(rate.limit),
            'X-RateLimit-Remaining': String(rate.remaining),
            'X-RateLimit-Reset': String(rate.reset),
            'Retry-After': String(retryAfter),
          },
        },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { success: false, error: 'Invalid JSON body' },
        { status: 400 },
      );
    }

    const raw = body as Record<string, unknown>;
    const honeypot = process.env.CONTACT_FORM_HONEYPOT_FIELD ?? 'website_url';
    if (raw[honeypot] && String(raw[honeypot]).length) {
      console.warn(`Honeypot triggered from IP: ${ip}`);
      return success();
    }

    const validation = ctaFormSchema.safeParse(body);
    if (!validation.success) {
      return Response.json(
        {
          success: false,
          error: 'Validation failed',
          fieldErrors: validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = validation.data;
    const spamScore = calculateSpamScore(data);
    if (spamScore >= 5) {
      console.warn(`Spam detected (score: ${spamScore}) from IP: ${ip}`);
      return success();
    }

    const submittedAt = `${new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'full',
      timeStyle: 'short',
    })} UTC`;
    const [notification, confirmation] = await Promise.allSettled([
      sendEmailOrThrow({
        from: EMAIL_CONFIG.from,
        to: [EMAIL_CONFIG.teamInbox],
        replyTo: data.businessEmail,
        subject: `New Project Inquiry from ${data.fullName} — ${data.companyName}`,
        html: contactNotificationTemplate({
          ...data,
          submittedAt,
          ipAddress: ip,
        }),
      }),
      sendEmailOrThrow({
        from: EMAIL_CONFIG.from,
        to: [data.businessEmail],
        replyTo: EMAIL_CONFIG.replyTo,
        subject: `We received your inquiry, ${data.fullName.split(' ')[0]} — Arizonix`,
        html: contactConfirmationTemplate(data),
      }),
    ]);

    if (notification.status === 'rejected') {
      console.error('CRITICAL: Team notification failed:', notification.reason);
      await redis
        .lpush(
          'contact:failed_leads',
          JSON.stringify({
            data,
            ip,
            timestamp: new Date().toISOString(),
            error: String(notification.reason),
          }),
        )
        .catch((error) =>
          console.error('CRITICAL: Failed to store undelivered lead:', error),
        );

      return Response.json(
        {
          success: false,
          error:
            'We encountered a technical issue sending your message. Please email us directly at hello@arizonix.com',
        },
        { status: 500 },
      );
    }

    if (confirmation.status === 'rejected') {
      console.error(
        'Client confirmation email failed (non-critical):',
        confirmation.reason,
      );
    }

    return success();
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return Response.json(
      {
        success: false,
        error:
          'Failed to send your message. Please try again or email us directly at support@arizonix.tech',
      },
      { status: 500 },
    );
  }
}
