# SEO Setup Guide — Arizonix

## Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add the URL-prefix property `https://arizonix.com`.
3. Verify ownership using DNS TXT or the HTML verification token.
4. Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` to the supplied token.
5. Submit `https://arizonix.com/sitemap.xml`.
6. Review indexing and Core Web Vitals weekly.

## Bing Webmaster Tools

Import the verified property from Google Search Console, or add and verify `https://arizonix.com` manually at Bing Webmaster Tools.

## Validation

- Test homepage, blog article, service, industry, FAQ, and careers URLs with Google Rich Results Test.
- Validate the global Organization and WebSite graph at Schema.org Validator.
- Preview Open Graph and Twitter cards after deployment.

## Weekly monitoring

- [ ] Crawl errors and excluded URLs
- [ ] Core Web Vitals
- [ ] Indexed-page growth
- [ ] Article, FAQ, JobPosting, and Service rich results
- [ ] Security and manual actions
