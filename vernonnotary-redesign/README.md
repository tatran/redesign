# Charlene Silvester Notary Public redesign

Static English/French website with a forest green and ivory visual identity, responsive layouts and persistent light/dark themes. No dependencies or external font requests.

## Files and editing

- English: `index.html`; French: `fr/index.html`.
- Edit bilingual content in `scripts/build.mjs`, then run `node scripts/build.mjs` from this directory.
- `styles.css`, `theme-init.js` and `app.js` implement the layout, theme and mobile navigation.
- Run `node scripts/check.mjs` for static validation.
- Serve this directory using any static HTTP server. Relative asset URLs support root and subdirectory hosting.
- `promo-email.md` contains English and French promotional email drafts. Neither has been sent.

## SEO and deployment

Configured preview URLs:

- https://livingpixelstudios.com/redesign/vernonnotary-redesign/
- https://livingpixelstudios.com/redesign/vernonnotary-redesign/fr/

Both pages contain localized titles and descriptions, canonical URLs, reciprocal hreflang with x-default, Open Graph and Twitter metadata, a local social sharing image and Notary/WebPage structured data. Sitemap entries mirror the language alternates.

The current canonical and sitemap URLs target the redesign preview. Before deploying at the business domain, update `base` in `scripts/build.mjs`, rebuild and update absolute image URLs through the same build. Add redirects for existing WordPress paths; retain old content or map it to the corresponding new section. Configure the domain-root robots.txt to reference the deployed sitemap. The robots.txt in this subdirectory does not control the preview host. Do not overwrite the shared preview host's root robots.txt.

Pushing to GitHub does not by itself replace the live business website or confirm preview hosting deployment. No new hosting service or external account is required.

## Content and assets

Source reviewed November 18, 2026:

- https://www.vernonnotary.com/ — services, business name, address and phone.
- https://www.vernonnotary.com/about-charlene/ — biography and May 2009 commission.
- https://www.vernonnotary.com/contact/ — email, hours, accessibility and payment methods.
- https://www.vernonnotary.com/faq/ — appointment preparation and signing guidance.

Outdated tax calculations, statute references, affiliations and legal advice from the source site have not been reproduced. Confirm contact details, hours, fees, current service scope and translated terminology with the practice before a business-domain launch. Website translation does not claim the office offers French-language appointments.

The portrait is the practice's existing photograph, downloaded from https://www.vernonnotary.com/wp-content/uploads/2017/03/charlene-silvester-notary-public.jpg. Rights remain with the original owner. The document illustration is built in HTML/CSS and is decorative. The CS monogram references the initials used by the existing brand. Social artwork and favicon were created for the concept. Manrope and Instrument Serif are bundled locally with their SIL Open Font Licenses.

Phone, email and directions links are functional. There is no intake form collecting confidential information. Appointment requests use the visitor's email client; no booking confirmation or submission is implied.
