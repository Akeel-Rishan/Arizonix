import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

function secureCompare(left: string, right: string) {
  if (left.length !== right.length) return false;
  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) {
    mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return mismatch === 0;
}

function restrictedResponse(status: 401 | 503) {
  return new NextResponse(
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><title>Access Restricted</title></head><body><main><h1>Access Restricted</h1><p>This area requires production authorization.</p><a href="/">Return to website</a></main></body></html>',
    {
      headers: {
        'Cache-Control': 'no-store',
        'Content-Type': 'text/html; charset=utf-8',
        'WWW-Authenticate': 'Basic realm="Arizonix Studio", charset="UTF-8"',
        'X-Robots-Tag': 'noindex, nofollow',
      },
      status,
    },
  );
}

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== 'production') return NextResponse.next();

  const expectedUsername = process.env.STUDIO_USERNAME;
  const expectedPassword = process.env.STUDIO_PASSWORD;
  if (!expectedUsername || !expectedPassword) return restrictedResponse(503);

  const authorization = request.headers.get('authorization');
  if (!authorization?.startsWith('Basic ')) return restrictedResponse(401);

  try {
    const decoded = atob(authorization.slice(6));
    const separator = decoded.indexOf(':');
    const username = separator >= 0 ? decoded.slice(0, separator) : '';
    const password = separator >= 0 ? decoded.slice(separator + 1) : '';

    if (
      !secureCompare(username, expectedUsername) ||
      !secureCompare(password, expectedPassword)
    ) {
      return restrictedResponse(401);
    }
  } catch {
    return restrictedResponse(401);
  }

  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'no-store');
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}

export const config = {
  matcher: ['/studio/:path*'],
};
