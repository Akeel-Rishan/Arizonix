# Deployment Guide — Arizonix Website

## Architecture Overview

- Frontend: Next.js 15 App Router on Vercel
- CMS: Sanity hosted CMS, CDN reads
- Email: Resend
- Rate limiting/storage: Upstash Redis
- Error monitoring: Sentry
- Analytics: Google Analytics 4

## Deployment Process

1. Push code to GitHub `main`.
2. Vercel detects the push and runs `npm ci` then `npm run build`.
3. Successful builds are promoted to production.
4. Previous deployments remain available for rollback.

## Vercel setup

- Framework: Next.js
- Root directory: `./`
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `.next`
- Node.js: 20.x

## Environment Variables

Add all variables listed in [environment-variables.md](./environment-variables.md) to Vercel for Production and Preview.

## Custom Domain

Add both domains in Vercel:

- `arizonix.com`
- `www.arizonix.com`

DNS:

- `A @ 76.76.21.21`
- `CNAME www cname.vercel-dns.com`

The app already includes a permanent redirect from `www.arizonix.com` to `arizonix.com`.

## Sanity CORS

Add these origins in Sanity project settings:

- `https://arizonix.com`
- `https://www.arizonix.com`
- `https://arizonix-*.vercel.app`
- `http://localhost:3000`

## Resend domain verification

Configure SPF, DKIM, and DMARC DNS records from Resend before using `hello@arizonix.com` in production.

## Sanity revalidation webhook

Create a Sanity webhook:

- URL: `https://arizonix.com/api/revalidate?secret=YOUR_SANITY_REVALIDATE_SECRET`
- Method: `POST`
- Dataset: `production`
- Trigger: create, update, delete

## Protecting `/studio` in production

Set strong `STUDIO_USERNAME` and `STUDIO_PASSWORD` server-side environment variables. Edge middleware protects every `/studio` route with HTTP Basic authentication and fails closed if the variables are absent. Also enable Vercel Deployment Protection or an identity-aware proxy when available.

## Rollback

Vercel Dashboard → Deployments → select previous healthy deployment → Promote to Production.

## Post-deployment checks

- [ ] `https://arizonix.com` loads
- [ ] `https://www.arizonix.com` redirects
- [ ] SSL is active
- [ ] Contact form sends email
- [ ] Newsletter signup works
- [ ] Sanity Studio opens
- [ ] GA4 realtime receives pageviews
- [ ] Sentry receives test error
- [ ] Sitemap, robots, and RSS are available
