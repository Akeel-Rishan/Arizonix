# Accessibility Audit - Arizonix Website

Audit date: 2026-09-21

Target: WCAG 2.1 Level AA and Lighthouse Accessibility 100 on primary pages.

## Automated Results

The production build was tested at `/`, `/about`, `/services`,
`/ai-automation`, `/blog`, and `/contact`.

- axe-core 4.12.1: zero violations on all six pages.
- Lighthouse Accessibility: 100 on all six pages.
- `html-validate`: zero errors in all generated static HTML files.
- TypeScript, ESLint, and the production build pass.

Automated tools cannot establish full WCAG conformance. The manual tests listed
below remain launch gates.

## Remediation Completed

- Added the first-focus skip link and one shared `main#main-content` landmark.
- Added route-change focus handling, global visible focus styles, and sticky-header scroll offset.
- Added form autocomplete, error associations, live status messages, and higher-contrast borders.
- Updated brand colors and normal body copy to AA-compatible contrast tokens.
- Removed small gradient text and ambiguous AI capability link names.
- Added complete ARIA tab behavior and arrow-key navigation to AI view tabs.
- Added a modal dialog pattern, focus trap, Escape handling, and focus restoration to the screenshot lightbox.
- Added pause controls for testimonials and site animations, including stored reduced-motion preference.
- Prevented animated counters from announcing intermediate values.
- Increased audited icon and social controls to at least 44 by 44 CSS pixels.
- Removed nested main/banner landmarks, interactive controls inside `role="img"`, and invalid legal-page landmarks.
- Corrected semantic lists, testimonial figure markup, headings, labels, and status announcements.

## Manual Launch Gates

- [ ] Complete a keyboard-only session across every production page.
- [ ] Test NVDA on Windows and VoiceOver on macOS/iOS.
- [ ] Test 200% zoom and 320px reflow on all representative page templates.
- [ ] Verify orientation changes and mobile virtual-keyboard behavior on physical devices.
- [ ] Run the axe DevTools browser extension on the deployed production URL.
- [ ] Verify the mobile menu and screenshot dialog with real assistive technology.
- [ ] Review final Sanity content for alt text, heading order, and descriptive links.

## Future Enhancement

A light color scheme may help some low-vision users. Treat this as a post-launch
enhancement; it is not required for WCAG 2.1 AA when the existing dark theme
meets contrast and user-preference requirements.

## Status

Automated accessibility gates pass. Final WCAG sign-off is pending the manual
assistive-technology and device tests above.
