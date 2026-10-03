import { timingSafeEqual } from 'node:crypto';

import type { NextRequest } from 'next/server';

import { redis } from '@/lib/rate-limit/upstash-client';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const adminToken = process.env.NEWSLETTER_ADMIN_TOKEN;
  if (!adminToken) {
    return Response.json(
      { error: 'Failed-lead retrieval is not configured' },
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

  try {
    const leads = await redis.lrange<unknown>('contact:failed_leads', 0, -1);
    return Response.json(
      {
        leads: leads.map((lead) =>
          typeof lead === 'string' ? (JSON.parse(lead) as unknown) : lead,
        ),
      },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    console.error('Failed to retrieve undelivered leads:', error);
    return Response.json(
      { error: 'Unable to retrieve failed leads' },
      { status: 500 },
    );
  }
}
