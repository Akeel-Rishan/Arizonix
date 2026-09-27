import type { NextRequest } from 'next/server';

import { EMAIL_CONFIG, resend } from '@/lib/email/resend-client';
import { contactConfirmationTemplate } from '@/lib/email/templates/contact-confirmation';
import { contactNotificationTemplate } from '@/lib/email/templates/contact-notification';
import { getClientIP } from '@/lib/rate-limit/get-ip';
import { contactFormRateLimit } from '@/lib/rate-limit/upstash-client';
import { ctaFormSchema } from '@/lib/schemas/contact';

export const dynamic = 'force-dynamic';
const success = () => Response.json({ success: true, message: "Thank you! We'll be in touch within 48 hours." });

export async function POST(request: NextRequest) {
  if (!request.headers.get('content-type')?.includes('application/json')) return Response.json({ success: false, error: 'Content-Type must be application/json' }, { status: 415 });
  const ip = getClientIP(request);
  try {
    const rate = await contactFormRateLimit.limit(ip);
    if (!rate.success) {
      const retryAfter = Math.max(1, Math.ceil((rate.reset - Date.now()) / 1000));
      return Response.json({ success: false, error: 'Too many submissions. Please wait before trying again.', retryAfter }, { status: 429, headers: { 'X-RateLimit-Limit': String(rate.limit), 'X-RateLimit-Remaining': String(rate.remaining), 'X-RateLimit-Reset': String(rate.reset), 'Retry-After': String(retryAfter) } });
    }
    let body: unknown;
    try { body = await request.json(); } catch { return Response.json({ success: false, error: 'Invalid JSON body' }, { status: 400 }); }
    const raw = body as Record<string, unknown>;
    const honeypot = process.env.CONTACT_FORM_HONEYPOT_FIELD ?? 'website_url';
    if (raw[honeypot] && String(raw[honeypot]).length) { console.warn(`Honeypot triggered from IP: ${ip}`); return success(); }
    const validation = ctaFormSchema.safeParse(body);
    if (!validation.success) return Response.json({ success: false, error: 'Validation failed', fieldErrors: validation.error.flatten().fieldErrors }, { status: 400 });
    const data = validation.data;
    const patterns = [/https?:\/\//i, /\b(viagra|casino|crypto|bitcoin|forex|loan|weight loss)\b/i, /(.)\1{10,}/i];
    const score = [data.fullName, data.companyName, data.description].reduce(
      (sum, field) => sum + (patterns[0].test(field) ? 2 : 0) + patterns.slice(1).filter((pattern) => pattern.test(field)).length,
      0,
    );
    if (score >= 2) { console.warn(`Suspicious submission from IP: ${ip}, score: ${score}`); return success(); }
    const submittedAt = `${new Date().toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'full', timeStyle: 'short' })} UTC`;
    const [notification, confirmation] = await Promise.allSettled([
      resend.emails.send({ from: EMAIL_CONFIG.from, to: [EMAIL_CONFIG.teamInbox], replyTo: data.businessEmail, subject: `New Project Inquiry from ${data.fullName} — ${data.companyName}`, html: contactNotificationTemplate({ ...data, submittedAt, ipAddress: ip }) }),
      resend.emails.send({ from: EMAIL_CONFIG.from, to: [data.businessEmail], replyTo: EMAIL_CONFIG.replyTo, subject: `We received your inquiry, ${data.fullName.split(' ')[0]} — Arizonix`, html: contactConfirmationTemplate(data) }),
    ]);
    if (notification.status === 'rejected') console.error('Team notification email failed');
    if (confirmation.status === 'rejected') console.error('Client confirmation email failed');
    return Response.json({ success: true, message: "Thank you! We'll be in touch within 48 hours.", emailSent: notification.status === 'fulfilled' });
  } catch { return Response.json({ success: false, error: 'Failed to send your message. Please try again or email us directly at support@arizonix.tech' }, { status: 500 }); }
}
