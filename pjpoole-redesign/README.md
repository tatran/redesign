# Dr. PJ Poole — bilingual website redesign

A static English/French redesign for Dr. Phebe-Jane Poole’s practice in Vernon, BC. Forest green styling, locally bundled type, responsive layouts, accessible native FAQ disclosures and persistent light/dark themes. No build dependencies or form backend.

## Run and edit

- Serve this folder with a static HTTP server. English is `index.html`; French is `fr/index.html`.
- Edit page content and SEO configuration in `scripts/build.cjs`; rebuild with `node scripts/build.cjs`.
- Edit presentation in `styles.css` and interactions in `script.js`.
- Run `node scripts/check.cjs` to verify pages, local links, structured data, theme persistence, navigation and language switching.
- Rebuild HTML email drafts with `node scripts/email.cjs`; regenerate the social card on Windows with `powershell -File scripts/social.ps1`.
- `promo-email.md` contains English/French outreach drafts. `promotional-email.html` and `promotional-email-fr.html` contain matching HTML versions. No email has been sent.

## SEO and hosting

Configured preview base: https://livingpixelstudios.com/redesign/pjpoole-redesign/

Localized titles and descriptions, canonical URLs, reciprocal en-CA/fr-CA/x-default alternates, Open Graph/Twitter cards, a 1200×630 social image, WebSite/WebPage/ProfessionalService JSON-LD, sitemap and robots file are included. French pages render full content without JavaScript. Booking and extended service information link to the original website; English destinations are labelled on the French page where applicable.

Pushing to GitHub main does not itself verify deployment or replace pjpoole.com. Before launch on the practice’s domain, change `base` in `scripts/build.cjs`, regenerate the pages, update the sitemap URL in the domain-root robots.txt and map old WordPress URLs to appropriate new destinations. The robots.txt in this project subdirectory does not control the shared preview host; do not overwrite its root robots.txt. Confirm practice hours, credentials and translated terminology with the practice before a business-domain launch.

## Content sources and assets

Reviewed November 19, 2026:

- https://pjpoole.com/ — practice approach and current session categories.
- https://pjpoole.com/pj-poole/ — practitioner biography and education. The Ph.D. is explicitly identified as Sociology.
- https://pjpoole.com/contact-us/ — public phone, email, address, hours, remote appointments and cancellation policy.
- https://pjpoole.com/booking/ — existing booking destination.

French is a website translation and does not assert that French-language sessions are available. Complementary approaches are presented as exploration options without outcome promises. There are no invented testimonials or statistics, analytics, trackers, or forms collecting personal health information.

- Portrait: https://pjpoole.com/wp-content/uploads/Phebe.jpeg — existing practice photo; rights remain with the original owner. The available source is only 160×200; replace with an approved higher-resolution portrait before launch.
- Forest: https://images.unsplash.com/photo-1441974231531-c6227db76b6e — stock nature image from Unsplash, used decoratively; it is not represented as the practice location. License: https://unsplash.com/license.
- DM Sans and Instrument Serif are bundled locally with their SIL Open Font Licenses in `assets/`.
- Favicon and social artwork are code-created for this concept.

## Verification

All 94 static integrity and interaction checks passed via `scripts/check.cjs`. The six linked service destinations and the booking page returned HTTP 200. Browser visual QA could not be completed in this session: the in-app browser could not reach the local server, and Windows Computer Use was not approved to use Chrome. Review the desktop and mobile layouts in a browser before a production-domain launch.
