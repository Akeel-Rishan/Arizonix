# Arizonix Performance Budget

## Targets

| Metric | Target | Maximum |
|--------|--------|---------|
| Lighthouse Performance | 95+ | 90 minimum |
| LCP | < 2.0s | < 2.5s |
| CLS | < 0.05 | < 0.1 |
| TBT | < 150ms | < 300ms |
| FCP | < 1.2s | < 1.8s |
| JS Bundle page | < 150KB gzipped | < 200KB gzipped |
| Total Page Weight | < 500KB | < 800KB |

## Baseline Scores

Local Lighthouse could not be collected inside this restricted Codex run because it requires a browser/server sweep. Fill these after running `npm run lighthouse:local` on your machine.

| Page | Perf | LCP | CLS | TBT |
|------|------|-----|-----|-----|
| Homepage | Pending local run | Pending | Pending | Pending |
| AI Automation | Pending local run | Pending | Pending | Pending |
| Blog Post | Pending local run | Pending | Pending | Pending |
| Service Detail | Pending local run | Pending | Pending | Pending |
| Industry Detail | Pending local run | Pending | Pending | Pending |

## Post-Optimization Scores

| Page | Perf | LCP | CLS | TBT |
|------|------|-----|-----|-----|
| Homepage | Pending local Lighthouse | Pending | Pending | Pending |
| AI Automation | Pending local Lighthouse | Pending | Pending | Pending |
| Blog Post | Pending local Lighthouse | Pending | Pending | Pending |
| Service Detail | Pending local Lighthouse | Pending | Pending | Pending |
| Industry Detail | Pending local Lighthouse | Pending | Pending | Pending |

## Bundle Analysis Notes

- Run `npm run analyze` to generate the Next.js client/server bundle treemaps.
- Analyzer artifacts were generated at `.next/analyze/client.html`, `.next/analyze/nodejs.html`, and `.next/analyze/edge.html` during this pass. The analyzer build then exited during route collection, while the normal production build passed.
- Homepage below-fold sections are dynamically imported with SSR retained.
- Sanity Studio remains isolated to `/studio`.
- Blog syntax highlighting is lazy-loaded in the client content renderer.

## Latest Next.js Build Snapshot

| Route | First Load JS |
|-------|---------------|
| Homepage `/` | 348 kB |
| AI Automation `/ai-automation` | 259 kB |
| Blog Post `/blog/[slug]` | 329 kB |
| Portfolio Detail `/portfolio/[slug]` | 302 kB |
| Service Detail `/services/[slug]` | 302 kB |
| Industry Detail `/industries/[slug]` | 298 kB |
| Sanity Studio `/studio/[[...tool]]` | 1.7 MB isolated route |

The shared app bundle is currently 174 kB. The homepage is above the aggressive 150 kB target, so the next performance pass should focus on reducing shared client dependencies and auditing which global client components are included on every route.
