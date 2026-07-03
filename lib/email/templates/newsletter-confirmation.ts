import { escapeHtml } from '@/lib/email/escape-html';

export interface NewsletterConfirmationData { email: string }
export function newsletterConfirmationTemplate(data: NewsletterConfirmationData): string {
  return `<!doctype html><html><body style="font-family:Arial;background:#0a0a12;color:#e2e8f0;padding:32px"><main style="max-width:560px;margin:auto;background:#111827;padding:32px;border-radius:12px;text-align:center"><h1 style="color:#fff">You're subscribed!</h1><p>Welcome to Arizonix updates on AI, software engineering, case studies, and industry trends.</p><p style="color:#64748b">Subscribed as ${escapeHtml(data.email)}</p></main></body></html>`;
}
