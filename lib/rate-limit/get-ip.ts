import type { NextRequest } from 'next/server';

export function getClientIP(request: NextRequest): string {
  const cloudflareIP = request.headers.get('cf-connecting-ip');
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  if (cloudflareIP) return cloudflareIP;
  if (forwarded) return forwarded.split(',')[0].trim();
  return realIP ?? '127.0.0.1';
}
