# Final QA Checklist — Arizonix Website

## Local automated checks

- [x] `npm run lint`
- [x] `npx tsc --noEmit`
- [x] `npm run build`
- [ ] `npm run a11y:axe` against a running local server — attempted in Codex; Chrome/ChromeDriver crashed before returning results
- [ ] `npm run lighthouse:local`
- [ ] `npm run html:validate` after build

## Browser and device QA

- [ ] Chrome desktop
- [ ] Edge desktop
- [ ] Firefox desktop
- [ ] Safari macOS
- [ ] Safari iOS
- [ ] Android Chrome
- [ ] 320px viewport: no horizontal scroll
- [ ] 200% zoom: no clipped text or unusable controls
- [ ] Touch targets at least 44px on mobile interactive elements

## Functional QA

- [ ] Header navigation links work
- [ ] Footer navigation links work
- [ ] Mobile menu opens, closes, and navigates
- [ ] Services mega menu works with mouse and keyboard
- [ ] Contact form validates invalid input
- [ ] Contact form sends email in production
- [ ] Newsletter form stores subscribers
- [ ] Cookie consent accept/decline stores localStorage value
- [ ] Sanity Studio loads at `/studio`
- [ ] Sitemap loads at `/sitemap.xml`
- [ ] Robots loads at `/robots.txt`
- [ ] RSS feed loads at `/blog/rss.xml`

## Content QA

- [ ] No lorem ipsum
- [ ] Placeholder phone number replaced
- [ ] Placeholder Calendly URL replaced
- [ ] Real social links added
- [ ] Real service content reviewed
- [ ] Real portfolio/case-study content reviewed
- [ ] Legal review completed for Privacy Policy and Terms

## Launch sign-off

Owner: Arizonix team

Status: Ready for external deployment tasks after final manual QA and production environment configuration.
