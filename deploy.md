# Production deployment

The website is built here and published to Firebase project and Hosting site `appointik-9500d` (`https://appointik.in`). The separate Clinic Web App site, `appointik-clinic`, is not part of this release.

## Build and stage

Run from `Appointik-Official-Website`:

```bash
npm run build
python3 scripts/prepare-release.py --hosting-source /Users/rajeshmatta/Projects/AppointikWebsite
```

The build runs lint and TypeScript checks. Development uses `.next-dev`; production builds use `.next` and export into `out`.

The preparation script creates a new `.release/marketing-<UTC timestamp>/` directory. It copies the existing production `public` assets, overlays the latest export, and checks file hashes. It never modifies the existing hosting source or publishes anything. `.release/latest.txt` records the resulting path.

The release contains:

- `public/`: the latest marketing pages plus preserved active clinic portals, privacy policy and assets.
- `firebase.json`: explicit marketing Hosting site only, with no functions or deployment hooks.
- `.firebaserc`: the real project ID.
- `manifest.json`: hashes of all exported and preserved files.

Do not deploy the Next.js `out` folder by itself: active clinic portals and `/privacy.html` live outside this repository. Do not run the old `firebase deploy` command from the legacy project, which also contains backend functions.

## Preview and publish

Change into the prepared release directory. Preview locally:

```bash
firebase serve --only hosting --port 5055 --project appointik-9500d
```

After approving the prepared release, publish from that same directory:

```bash
firebase deploy --only hosting --project appointik-9500d
```

Its Hosting configuration explicitly selects `site: appointik-9500d`. It cannot deploy the separate Clinic Web App or backend functions.

## Expected behavior

- Six sitemap pages: Home, Features, Pricing, Success Stories, Support and Careers.
- Page routes use trailing slashes. Let Firebase's `trailingSlash` setting handle normalization; explicit `/page` → `/page/` rules can match the destination and create a redirect loop.
- `/demo`, `/demofree` and `/demotimeslot`, with trailing slash or `/index.html`, redirect permanently to `https://book.appointik.in/c/appointik-team-clinic`.
- The four `/specialties/` pages and retired clinic pages `arogyavardhini`, `shatayuphysio`, `jayamclinic`, `kdham-DrSanthosh`, and `drkphysioplusclinic` return 404. Their old files are excluded from the release.
- Unknown URLs return a real 404; there is no homepage fallback rewrite.
- Coming Soon and Payment Success remain `noindex` and outside the sitemap.
- Clinic app login canonical changes from the earlier SEO work belong to the separate `Appointik_WebApp_Antigravity` project and are not deployed with this marketing release.

After publishing, verify the live pages, prices, registration links and redirect behavior. Submit `https://appointik.in/sitemap.xml` in Search Console and request inspection of updated canonical URLs. Search results update after recrawling; indexing is not guaranteed.
