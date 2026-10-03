# Environment Variables — Arizonix Website

## Sanity

| Variable | Required | Scope | Description |
|---|---:|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes | Client/server | Sanity project ID. |
| `NEXT_PUBLIC_SANITY_DATASET` | Yes | Client/server | Sanity dataset, usually `production`. |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Yes | Client/server | Sanity API version, currently `2024-01-01`. |
| `SANITY_API_TOKEN` | Recommended | Server | Token for authenticated preview/editor reads if needed. |
| `SANITY_REVALIDATE_SECRET` | Yes | Server | Secret used by `/api/revalidate`. |

## Email and Forms

| Variable | Required | Scope | Description |
|---|---:|---|---|
| `RESEND_API_KEY` | Yes | Server | Resend API key. |
| `RESEND_FROM_EMAIL` | Yes | Server | Verified sender, e.g. `support@arizonix.tech`. |
| `RESEND_TO_EMAIL` | Yes | Server | Internal recipient for contact form notifications. |
| `COMPANY_POSTAL_ADDRESS` | Yes for newsletter | Server | Valid physical postal address, P.O. box, or registered private mailbox shown in commercial email footers. |
| `NEWSLETTER_UNSUBSCRIBE_SECRET` | Yes for newsletter | Server | Random secret of at least 32 characters used to sign unsubscribe links. |
| `NEXT_PUBLIC_SITE_URL` | Yes | Client/server | Canonical HTTPS site origin used to generate unsubscribe links. |
| `CONTACT_FORM_HONEYPOT_FIELD` | Recommended | Server | Honeypot field name, currently `website_url`. |
| `NEXT_PUBLIC_CALENDLY_URL` | Optional | Client/server | Real booking URL. Scheduling UI is hidden when empty. |
| `NEXT_PUBLIC_WHATSAPP_URL` | Optional | Client/server | Full `https://wa.me/...` URL. WhatsApp UI is hidden when empty. |

## Upstash Redis

| Variable | Required | Scope | Description |
|---|---:|---|---|
| `UPSTASH_REDIS_REST_URL` | Yes | Server | Upstash Redis REST URL. |
| `UPSTASH_REDIS_REST_TOKEN` | Yes | Server | Upstash Redis REST token. |
| `NEWSLETTER_ADMIN_TOKEN` | Yes for admin access | Server | Dedicated bearer token for `GET /api/newsletter` and `GET /api/admin/failed-leads`. Never expose as `NEXT_PUBLIC_`. |

## Studio protection

| Variable | Required | Scope | Description |
|---|---:|---|---|
| `STUDIO_USERNAME` | Yes in production | Edge/server | HTTP Basic Auth username for `/studio`. |
| `STUDIO_PASSWORD` | Yes in production | Edge/server | Strong HTTP Basic Auth password for `/studio`. Missing credentials fail closed. |

## Analytics and Monitoring

| Variable | Required | Scope | Description |
|---|---:|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Client | GA4 measurement ID. GA stays disabled when empty. |
| `NEXT_PUBLIC_SENTRY_DSN` | Optional | Client/server | Public Sentry DSN. |
| `SENTRY_DSN` | Optional | Server | Server-side Sentry DSN. |
| `SENTRY_ORG` | Optional | Build | Sentry organization slug for source map upload. |
| `SENTRY_PROJECT` | Optional | Build | Sentry project slug for source map upload. |
| `SENTRY_AUTH_TOKEN` | Optional | Build | Sentry auth token for source map upload. |

## SEO

| Variable | Required | Scope | Description |
|---|---:|---|---|
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Client/server | Google Search Console verification token. |

## Local development

Copy `.env.example` to `.env.local` and fill real values. Never commit `.env.local`.
