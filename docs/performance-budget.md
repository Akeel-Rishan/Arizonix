# Arizonix Performance Budget

Measured locally on 2026-09-21 against the optimized production server.

## Targets

| Metric | Target | CI floor |
| --- | ---: | ---: |
| Desktop Lighthouse Performance | 95 | 90 |
| Accessibility | 100 | 100 |
| SEO | 100 | 100 |
| Best Practices | 95 | 90 |
| LCP | < 2.0s | < 3.0s |
| CLS | < 0.05 | < 0.1 |
| TBT | < 150ms | < 400ms |
| Individual JS chunk | < 150KB gzip | < 200KB gzip |

## Desktop Lighthouse Results

| Page | Perf | A11y | Best Practices | SEO | FCP | LCP | TBT | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Home | 96 | 100 | 100 | 100 | 425ms | 1336ms | 70ms | 0 |
| About | 97 | 100 | 100 | 100 | 378ms | 1292ms | 20ms | 0 |
| Services | 96 | 100 | 100 | 100 | 389ms | 1379ms | 23ms | 0 |
| AI Automation | 96 | 100 | 100 | 100 | 380ms | 1353ms | 5ms | 0 |
| Blog | 96 | 100 | 100 | 100 | 380ms | 1353ms | 3ms | 0 |
| Contact | 97 | 100 | 100 | 100 | 382ms | 1274ms | 13ms | 0 |

Lighthouse completed and wrote valid reports on Windows, but its CLI sometimes
exited nonzero while deleting a locked temporary Chrome profile. The scores
above were read from the completed JSON reports.

## Bundle Results

The bundle gate parses the Next.js app build manifest. Every individual route
chunk is below 200KB gzip; the largest shared chunk is 116KB gzip.

Total route JavaScript remains above the aspirational 150KB budget on every
page (175-310KB gzip). This does not fail the individual-chunk CI gate, but it
is the clearest remaining performance opportunity.

## Mobile Finding

The local mobile Lighthouse run for the homepage scored 58 Performance with
LCP 5789ms and TBT 848ms. Accessibility, Best Practices, and SEO were 100.
Before calling mobile performance complete, reduce the shared client payload
and retest on production with a representative mobile connection.

## Next Performance Work

- Reduce global client-side hydration and shared Framer Motion usage.
- Load analytics, consent, and nonessential global widgets later where practical.
- Audit the 118KB shared chunk and isolate route-specific code.
- Retest representative detail pages and real-user Core Web Vitals after launch.
