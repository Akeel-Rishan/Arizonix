# Security Notes

## Dependency audit

The production dependency audit has zero critical and zero high-severity findings. Six moderate findings remain in the Sanity visual-editing dependency chain. The available npm remediation requires major upgrades to Next.js 16, React 19, Sanity 6, and next-sanity 13, so those upgrades are deferred to a separately tested migration.

Run the production audit with:

```powershell
npm audit --omit=dev
```

## Embedded Studio

`/studio` is open during local development. In production, edge middleware requires HTTP Basic authentication using `STUDIO_USERNAME` and `STUDIO_PASSWORD`. If either variable is missing, access fails closed with HTTP 503. The route also sends `X-Robots-Tag: noindex, nofollow`.

For defense in depth, enable Vercel Deployment Protection or an identity-aware proxy for the production Studio route.

## Newsletter administration

`GET /api/newsletter` and `GET /api/admin/failed-leads` require the server-only `NEWSLETTER_ADMIN_TOKEN`. If it is absent, the endpoints return HTTP 503. The newsletter endpoint returns only the subscriber count; email addresses must be exported from Upstash directly. The failed-leads endpoint returns contact submissions whose team notification could not be delivered, so treat its response as sensitive client data.

Generate secrets with:

```bash
openssl rand -hex 32
```
