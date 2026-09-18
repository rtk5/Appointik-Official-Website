# Production release ready — 8 September 2026

Status: prepared and tested locally; not deployed.

Release directory: `/Users/rajeshmatta/Projects/AppointikNextJSWebsite/Appointik-Official-Website/.release/marketing-20260908T124214Z`

Firebase project and Hosting site: `appointik-9500d`.

The release contains 61 current build files and 676 preserved hosting files, including the privacy policy and active clinic portals. Its configuration contains only Hosting, targets the marketing site explicitly, and includes no functions or deployment hooks. The separate Clinic Web App is not included.

## Validation passed

- Production build with lint and TypeScript checks enabled.
- Six exported pages checked for canonical URLs, unique metadata, image metadata, sitemap coverage and current structured data (23 pricing FAQs).
- All six pages tested in Chrome at 1440px and 390px; no broken images or horizontal overflow.
- Monthly and Annual tab interactions verified: ₹249/349/449 monthly, ₹2,689/3,769/4,849 annually; $3.5/4.5/5.5 monthly and $42/54/66 annually.
- 33 Firebase HTTP route/asset checks passed, including nine legacy demo redirects and retired/specialty-page 404s.
- Preserved clinic HTML responses and every staged file verified against hashes.
- Careers registration contact links and letterhead, Aggregator Portal, localization and unlimited-staff content included.

A redirect loop was discovered in the previous slash-adding rules and fixed. The staged release relies on Firebase's `trailingSlash` setting instead.

## Preview

The staged release is available locally at http://localhost:5055 while the preview server is running.

## Deploy when approved

Run these commands exactly from the prepared release directory:

```bash
cd /Users/rajeshmatta/Projects/AppointikNextJSWebsite/Appointik-Official-Website/.release/marketing-20260908T124214Z
firebase deploy --only hosting --project appointik-9500d
```

Do not deploy the standalone `out` directory or use the legacy project configuration for this release. The prepared folder preserves the active clinic files and has the tested redirect configuration.

Evidence is saved beside the release as `manifest.json`, `http-checks.json` and `browser-checks.json`. After deployment, check the live site and resubmit the sitemap in Search Console. Earlier Clinic Web App canonical changes require a separate deployment of that application.
