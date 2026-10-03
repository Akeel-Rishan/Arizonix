import { createHmac, timingSafeEqual } from 'node:crypto';

const MINIMUM_SECRET_LENGTH = 32;

function getUnsubscribeSecret(): string {
  const secret = process.env.NEWSLETTER_UNSUBSCRIBE_SECRET;
  if (!secret || secret.length < MINIMUM_SECRET_LENGTH) {
    throw new Error(
      `NEWSLETTER_UNSUBSCRIBE_SECRET must contain at least ${MINIMUM_SECRET_LENGTH} characters`,
    );
  }
  return secret;
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function generateUnsubscribeToken(email: string): string {
  return createHmac('sha256', getUnsubscribeSecret())
    .update(normalizeEmail(email))
    .digest('hex');
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  const expected = Buffer.from(generateUnsubscribeToken(email), 'hex');
  const provided = Buffer.from(token, 'hex');
  return (
    expected.length === provided.length && timingSafeEqual(expected, provided)
  );
}

export function getUnsubscribeLink(email: string): string {
  const baseUrl = new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://arizonix.com',
  );
  if (process.env.NODE_ENV === 'production' && baseUrl.protocol !== 'https:') {
    throw new Error('NEXT_PUBLIC_SITE_URL must use HTTPS in production');
  }

  const normalizedEmail = normalizeEmail(email);
  const url = new URL('/api/newsletter/unsubscribe', baseUrl);
  url.searchParams.set('email', normalizedEmail);
  url.searchParams.set('token', generateUnsubscribeToken(normalizedEmail));
  return url.toString();
}

export function getNewsletterEmailHeaders(
  unsubscribeUrl: string,
): Record<string, string> {
  return {
    'List-Unsubscribe': `<${unsubscribeUrl}>`,
    'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
  };
}
