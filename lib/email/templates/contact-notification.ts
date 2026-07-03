import { escapeHtml } from '@/lib/email/escape-html';

export interface ContactNotificationData { fullName: string; businessEmail: string; companyName: string; phone?: string; service: string; budget: string; description: string; referral?: string; submittedAt: string; ipAddress: string }
export function contactNotificationTemplate(raw: ContactNotificationData): string {
  const data = Object.fromEntries(Object.entries(raw).map(([key, value]) => [key, escapeHtml(value ?? '')])) as Record<keyof ContactNotificationData, string>;
  return `<!doctype html><html><body style="font-family:Arial;background:#0a0a12;color:#e2e8f0;padding:32px"><main style="max-width:600px;margin:auto;background:#111827;padding:32px;border-radius:12px"><h1 style="color:#fff">New Project Inquiry</h1><p><b>Received:</b> ${data.submittedAt}</p><p><b>Name:</b> ${data.fullName}</p><p><b>Company:</b> ${data.companyName}</p><p><b>Email:</b> <a href="mailto:${data.businessEmail}">${data.businessEmail}</a></p><p><b>Phone:</b> ${data.phone || 'Not provided'}</p><p><b>Service:</b> ${data.service}</p><p><b>Budget:</b> ${data.budget}</p><p><b>Description:</b><br>${data.description}</p><p><b>Referral:</b> ${data.referral || 'Not specified'}</p><p><b>IP:</b> ${data.ipAddress}</p></main></body></html>`;
}
