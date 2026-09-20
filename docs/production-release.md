# Production release ready — 19 September 2026

Status: published on 19 September 2026 at 14:03 UTC. Firebase Hosting version: `67782d33e917d5ae`.

Release directory: `/Users/rajeshmatta/Projects/AppointikNextJSWebsite/Appointik-Official-Website/.release/marketing-20260919T134620Z`

Firebase project and Hosting site: `appointik-9500d`.

## Current validation

- Latest production build passed compilation, lint and TypeScript checks.
- Six sitemap pages have unique titles, descriptions, matching self-canonical and Open Graph URLs, social images and exactly one H1.
- Exported local links and referenced assets resolve, with the legacy privacy policy verified in the combined release. Rendered images have alt attributes.
- JSON-LD parses successfully; pricing FAQs share the visible FAQ content source.
- Coming Soon and Payment Success have noindex directives and are absent from the sitemap.
- All 31 local Firebase HTTP checks passed: six marketing pages, privacy policy, robots, sitemap, social image, nine legacy demo redirects, five retired clinic 404s, a specialty 404, an unknown-page 404 and five slash-normalization redirects.
- 61 export files and 396 preserved files verified by SHA-256 during staging. Active legacy clinic files and privacy policy retained; retired clinic and specialty folders excluded.
- Current release includes the mobile menu colour correction, compact Features layout, and clinical visit and patient case summaries.

This check validates the local export and Hosting configuration. It does not certify live indexing, rich-result eligibility, Core Web Vitals or current browser rendering. The earlier browser checks were performed on the September 8 release.

## Manual publication

The latest marketing export is in `out/`. If copying it into an existing hosting folder, preserve the active clinic portals and privacy policy. The complete prepared release above already combines these files and includes the tested Firebase configuration.

To publish the prepared release:

```bash
cd /Users/rajeshmatta/Projects/AppointikNextJSWebsite/Appointik-Official-Website/.release/marketing-20260919T134620Z
firebase deploy --only hosting --project appointik-9500d
```

Published successfully to https://appointik.in. Live homepage, Features, Pricing, Careers, sitemap, privacy policy and a preserved clinic portal returned 200 and matched release files byte-for-byte. Demo and time-slot demo redirects returned 301 to the new booking portal; the retired Arogyavardhini page returned 404. The separate Clinic Web App and backend functions were not deployed.

Evidence: `manifest.json` and `http-checks.json` in the release directory. After publication, verify live routes and submit `https://appointik.in/sitemap.xml` in Search Console.

Reference: [Google canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) and [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
