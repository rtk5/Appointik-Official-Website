# Image and SEO audit — 8 September 2026

The current source and production export were checked. No deployment was performed.

## Images

- Visually checked both Appointik logos, the WhatsApp icon and the social-preview image. The white WhatsApp icon displays correctly on its green background.
- Updated the SVG and PNG social previews to show the ₹249 starting price, Android Clinic and Patient Apps in 20 languages, and pricing per clinic without per-doctor or per-staff charges.
- Embedded the logo in the preview SVG so it remains visible when the SVG is used as an image or shared independently.
- Added a version query to social-image metadata to distinguish the updated preview from previously cached versions.
- Copied the existing Google Play badge from its original Wikimedia URL into `public/google-play-badge.svg`; retained the badge artwork and added app-specific alt text.
- Removed the zero-byte, unused WhatsApp SVG. The working WhatsApp PNG remains in use.
- Every image rendered on the six public pages is now local and loaded successfully at desktop and mobile widths. No image was missing alt text or layout dimensions.
- The stock photos in the unused testimonial carousel and case-study component are not rendered by current pages. They were not substituted for customer photos or reintroduced.

## SEO fixes

- Added shared page metadata generation for the homepage, Features, Pricing, Success Stories, Support and Careers.
- Each page has its own title, description, canonical URL, Open Graph URL/title/description, and Twitter title/description. Social images use absolute production URLs with size and alt metadata.
- Updated descriptions to reflect current pricing, Android localization, Pro portals and Max staff access where relevant.
- Centralized the 22 visible pricing FAQ entries and their JSON-LD markup so changes no longer leave search metadata behind.
- Corrected the FAQ's old Enterprise-plan wording and its implication that every plan includes a booking portal. Current copy states that booking and Aggregator Portals are included from Pro.
- Clarified that the SoftwareApplication offer is the ₹249 monthly Lite subscription per clinic.
- Updated the language trust badge to mention Android apps and documents.

## Validation

- Production build and full lint passed.
- Checked all six pages in Chrome at 1440px and 390px: no broken images, no horizontal overflow, and one H1 per page.
- Parsed all six exported HTML pages: unique titles/descriptions, correct canonicals, matching page-specific Open Graph/Twitter fields, and valid JSON-LD.
- Verified current rupee annual totals, undiscounted dollar annual totals, 20-language app information, Aggregator Portal inclusion and unlimited staff details in FAQ markup.
- Verified the six sitemap URLs have exported pages. Careers is included; specialty pages are absent.
- Verified that Coming Soon and Payment Success retain `noindex` and remain outside the sitemap.
- Verified all root-relative page links and rendered image paths resolve in the export.

## Production state and limits

- The live homepage checked during this audit still contains the old ₹179 price and Appointik G reference. The source/export changes need publishing before they affect the live site or search results.
- `https://appointik.in/privacy.html` works live and is managed in the separate `AppointikWebsite/public` hosting directory. It is not part of this Next.js export; preserve it and other active legacy pages when publishing.
- This was a browser, content and technical SEO audit, not a Search Console validation, Lighthouse performance score or guarantee of indexing/rich results. Existing review totals and broader product claims were not independently recertified.
- Google limits FAQ rich results to eligible authoritative government and health sites; matching FAQ markup is not a promise of a visible FAQ result.

## References

- [Google image SEO best practices](https://developers.google.com/search/docs/appearance/google-images)
- [Google structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [SoftwareApplication structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- [FAQ rich-result eligibility](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
