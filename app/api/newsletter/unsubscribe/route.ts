import type { NextRequest } from 'next/server';

import { escapeHtml } from '@/lib/email/escape-html';
import { verifyUnsubscribeToken } from '@/lib/email/unsubscribe-link';
import { redis } from '@/lib/rate-limit/upstash-client';

export const dynamic = 'force-dynamic';

const responseHeaders = {
  'Cache-Control': 'no-store',
  'Content-Security-Policy':
    "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
  'Content-Type': 'text/html; charset=utf-8',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
};

function generateUnsubscribePage(title: string, message: string): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} — Arizonix</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #0a0a12; color: #e2e8f0; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; }
    .card { background: #111827; border: 1px solid rgba(255,255,255,.1); border-radius: 16px; padding: 40px; max-width: 480px; text-align: center; box-shadow: 0 24px 80px rgba(0,0,0,.35); }
    h1 { color: #fff; font-size: 24px; line-height: 1.3; margin: 0 0 12px; }
    p { color: #94a3b8; line-height: 1.6; margin: 0 0 24px; }
    a { color: #60a5fa; text-underline-offset: 3px; }
    a:focus-visible { outline: 2px solid #22d3ee; outline-offset: 4px; }
  </style>
</head>
<body>
  <main class="card">
    <h1>${escapeHtml(title)}</h1>
    <p>${escapeHtml(message)}</p>
    <a href="https://arizonix.com">Return to Arizonix</a>
  </main>
</body>
</html>`;
}

function htmlResponse(title: string, message: string, status = 200) {
  return new Response(generateUnsubscribePage(title, message), {
    headers: responseHeaders,
    status,
  });
}

async function unsubscribe(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email')?.trim().toLowerCase();
  const token = request.nextUrl.searchParams.get('token');

  if (!email || !token) {
    return htmlResponse(
      'Invalid link',
      'This unsubscribe link is incomplete or invalid.',
      400,
    );
  }

  let tokenIsValid = false;
  try {
    tokenIsValid = verifyUnsubscribeToken(email, token);
  } catch (error) {
    console.error('Newsletter unsubscribe configuration error:', error);
    return htmlResponse(
      'Unable to unsubscribe',
      'We could not process your request. Please contact privacy@arizonix.com.',
      500,
    );
  }

  if (!tokenIsValid) {
    return htmlResponse(
      'Invalid link',
      'This unsubscribe link is invalid.',
      400,
    );
  }

  try {
    const removed = await redis.srem('newsletter:subscribers', email);
    const operations: Promise<unknown>[] = [
      redis.zrem('newsletter:subscribers:ordered', email),
      redis.del(`newsletter:subscriber:${email}`),
      redis.sadd('newsletter:suppression', email),
      redis.hset(`newsletter:unsubscribed:${email}`, {
        email,
        status: 'unsubscribed',
        unsubscribedAt: new Date().toISOString(),
        source: 'email_unsubscribe_link',
      }),
    ];
    if (removed === 1) operations.push(redis.decr('newsletter:total_count'));
    await Promise.all(operations);

    return htmlResponse(
      "You've been unsubscribed",
      `${email} has been removed from the Arizonix newsletter. You will not receive further newsletter emails unless you subscribe again.`,
    );
  } catch (error) {
    console.error('Newsletter unsubscribe failed:', error);
    return htmlResponse(
      'Unable to unsubscribe',
      'We could not process your request. Please try again or contact privacy@arizonix.com.',
      500,
    );
  }
}

export async function GET(request: NextRequest) {
  return unsubscribe(request);
}

export async function POST(request: NextRequest) {
  return unsubscribe(request);
}
