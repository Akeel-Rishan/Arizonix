import { getCalendlyUrl } from '@/lib/contact-links';
import { escapeHtml } from '@/lib/email/escape-html';

export interface ContactConfirmationData { fullName: string; companyName: string; service: string }
export function contactConfirmationTemplate(raw: ContactConfirmationData): string {
  const fullName = escapeHtml(raw.fullName); const companyName = escapeHtml(raw.companyName); const service = escapeHtml(raw.service); const firstName = fullName.split(' ')[0]; const calendlyUrl = getCalendlyUrl(process.env.NEXT_PUBLIC_CALENDLY_URL); const calendlyLink = calendlyUrl ? `<a href="${escapeHtml(calendlyUrl)}" style="color:#60a5fa">Schedule a call</a>` : '';
  return `<!doctype html><html><body style="font-family:Arial;background:#0a0a12;color:#e2e8f0;padding:32px"><main style="max-width:600px;margin:auto;background:#111827;padding:32px;border-radius:12px"><h1 style="color:#fff">Hi ${firstName}, we got your message!</h1><p>We received your inquiry about <b>${service}</b> for <b>${companyName}</b>.</p><p>A senior engineer will review it within 24 hours, and we will contact you within 48 hours.</p>${calendlyLink}</main></body></html>`;
}
