const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  // TODO Phase 5: replace unsafe-inline/unsafe-eval with nonces or hashes.
  { key: 'Content-Security-Policy', value: ["default-src 'self'", "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.sanity.io https://www.googletagmanager.com", "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", "img-src 'self' data: blob: https://cdn.sanity.io", "font-src 'self' https://fonts.gstatic.com", "connect-src 'self' https://*.sanity.io https://api.resend.com https://*.upstash.io wss://*.sanity.io", "frame-ancestors 'self'"].join('; ') },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() { return [{ source: '/:path*', has: [{ type: 'host', value: 'www.arizonix.com' }], destination: 'https://arizonix.com/:path*', permanent: true }]; },
  async headers() { return [{ source: '/(.*)', headers: securityHeaders }]; },
  images: { formats: ['image/avif', 'image/webp'], deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], minimumCacheTTL: 2592000, remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }] },
};

module.exports = nextConfig;
