# Final QA Checklist - Arizonix Website

Verification date: 2026-09-21

## Automated Local Checks

- [x] `npx tsc --noEmit`
- [x] `npm run lint`
- [x] `npm run build`
- [x] `npm run html:validate` - zero errors
- [x] axe CLI on six primary pages - zero violations
- [x] Desktop Lighthouse on six primary pages - Accessibility and SEO 100
- [x] Production smoke test - all nine public routes returned HTTP 200
- [x] Newsletter admin endpoint fails closed with HTTP 503 when unconfigured
- [x] Studio route fails closed with HTTP 503 and sends `X-Robots-Tag: noindex, nofollow`
- [x] Placeholder phone, Calendly, WhatsApp, and `href="#"` values absent from rendered home HTML
- [x] Development server starts with Turbopack and serves all six primary routes
- [x] Production dependency audit has zero critical and zero high findings

## Verified Public Routes

`/`, `/about`, `/services`, `/ai-automation`, `/blog`, `/contact`,
`/robots.txt`, `/sitemap.xml`, and `/blog/rss.xml`.

## Manual Browser And Device QA

- [ ] Chrome and Edge desktop interaction pass
- [ ] Firefox desktop interaction pass
- [ ] Safari macOS interaction pass
- [ ] Safari iOS interaction pass on iPhone and iPad
- [ ] Android Chrome interaction pass
- [ ] 320px reflow and 200% zoom pass across representative templates
- [ ] Keyboard-only navigation and focus-order pass
- [ ] Screen-reader pass with NVDA and VoiceOver
- [ ] Mobile menu, lightbox, carousels, filters, and form behavior on real devices

## Production Integration QA

- [ ] Contact and confirmation emails arrive through the production Resend domain
- [ ] Newsletter storage and confirmation email work with production Upstash/Resend
- [ ] Rate limiting and honeypot behavior verified against production infrastructure
- [ ] Real Calendly, mailbox, social profile, and optional WhatsApp details configured
- [ ] Final Sanity content reviewed; test content removed or unpublished
- [ ] Sanity webhook, GA4, Sentry, Search Console, and uptime alerts verified
- [ ] Vercel domain, redirects, TLS, environment variables, and deployment protection verified
- [ ] Privacy Policy and Terms approved by qualified legal counsel

## Sign-Off

Code and local automated QA: passed.

Production launch: pending the external account, real-device, content, legal,
and assistive-technology checks above.
