import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) throw new Error('Missing RESEND_API_KEY environment variable');

export const resend = new Resend(process.env.RESEND_API_KEY);
export const EMAIL_CONFIG = {
  from: process.env.RESEND_FROM_EMAIL ?? 'support@arizonix.tech',
  replyTo: process.env.RESEND_FROM_EMAIL ?? 'support@arizonix.tech',
  teamInbox: process.env.RESEND_TO_EMAIL ?? 'team@arizonix.com',
} as const;
