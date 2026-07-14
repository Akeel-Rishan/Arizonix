# Accessibility Audit — Arizonix Website

## Scope

Target standard: WCAG 2.1 AA. Target Lighthouse Accessibility score: 100.

Pages in scope:

- `/`
- `/about`
- `/services`
- `/ai-automation`
- `/blog`
- `/contact`
- Representative detail pages: `/services/ai-automation-solutions`, `/industries/healthcare`, `/blog/[slug]`, `/portfolio/[slug]`

## Automated tooling

Installed tools:

- `@axe-core/cli`
- `html-validate`
- Lighthouse CI

Commands:

```powershell
npm run build
npm run dev -- -H 0.0.0.0
npm run a11y:axe
npm run lighthouse:local
```

Local limitation: the Codex environment cannot complete manual browser-extension, screen-reader, or production-domain checks. Those are tracked below as launch-gate tasks.

## Fixes completed in Phase 5.4

- Added first-focus skip link targeting `#main-content`.
- Added a focusable `#main-content` skip target while preserving each page's native `<main>` landmark.
- Added route-change focus handling for the main content region.
- Added global `:focus-visible` outline.
- Added `scroll-padding-top: 88px` for sticky-header anchor/focus offset.
- Increased `.glass-panel` and CTA form input border contrast to `border-white/20`.
- Replaced `text-slate-600` usages with `text-slate-500`.
- Added a visible keyboard-accessible testimonials pause/resume button.
- Added site-level pause/resume animations toggle.
- Added focus-pause plumbing for technology marquee rows.
- Added `role="tablist"`, `role="tab"`, `role="tabpanel"`, and `aria-selected` to AI use-case tabs.
- Kept blog search label as `sr-only` with `htmlFor="blog-search"`.
- Updated AnimatedCounter to avoid live announcements during animation and announce politely only after completion.

## Manual audit checklist

### Perceivable

- [x] Decorative images/icons are hidden or empty-alt where audited in modified components.
- [x] Primary form fields include autocomplete for name, email, organization, and telephone.
- [x] Body copy avoids `text-slate-600`.
- [x] Gradient text remains headline-scale, not body-copy scale.
- [ ] Verify 200% zoom across all key pages in browser.
- [ ] Verify 320px viewport reflow across all key pages.

### Operable

- [x] Skip link added.
- [x] Global focus-visible style added.
- [x] Testimonials have a pause/resume control.
- [x] Site-level animation pause/resume control added.
- [ ] Keyboard-only 30-minute session across all key pages.
- [ ] Verify no focus traps in mobile nav and screenshot lightbox.

### Understandable

- [x] Page language is `en`.
- [x] Contact form errors are associated with fields and use `role="alert"`.
- [x] Blog search input has an accessible label.
- [ ] Review production content for ambiguous link text after final CMS content entry.

### Robust

- [x] CI added for lint, typecheck, and build.
- [x] Lighthouse CI workflow added.
- [ ] Run axe DevTools browser extension on production URL.
- [ ] Run NVDA on Windows for homepage, contact page, blog post, and AI automation page.

## Local verification notes

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed.
- `npx axe` attempted against a local production server on port 3020; Chrome/ChromeDriver crashed before reporting results in this Windows Codex environment. Re-run `npm run a11y:axe` locally with a stable browser session before production sign-off.
- `npm run html:validate` should be run after `npm run build`; the validator is configured to ignore React/Next static-render serialization noise and focus on meaningful document issues.

## Sign-off status

Code-level accessibility remediation is complete for this pass. Final WCAG sign-off requires manual browser, keyboard, and screen-reader testing on the deployed production URL.
