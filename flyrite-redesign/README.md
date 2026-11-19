# FlyRite bilingual redesign

A dependency-free English and Canadian French redesign for FlyRite Accessory Overhauls Ltd. Includes responsive layouts, persistent light/dark themes, mobile navigation, native accessible FAQs, rental/exchange part numbers, and direct phone/email/map links.

## Preview and maintain

Run `node serve.mjs` and open http://127.0.0.1:8187. The committed HTML can also be served by any static host. Run `node build.mjs` after editing the bilingual source, `node build-emails.mjs` after editing HTML email copy, and `node check.mjs` to validate HTML, SEO, local assets/links, and menu/theme behavior. There are no packages to install.

Expected repository-hosted preview URLs:

- English: https://livingpixelstudios.com/redesign/flyrite-redesign/
- French: https://livingpixelstudios.com/redesign/flyrite-redesign/fr/

A GitHub push does not itself establish that this separate hosting pipeline has deployed. These are the expected URLs under the repository’s existing convention. This project does not replace the original flyrite.ca website.

## SEO

Both languages have server-readable content, unique titles and descriptions, canonical URLs, reciprocal en-CA/fr-CA/x-default alternates, Open Graph and Twitter metadata, a 1200×630 social image, semantic headings, image alt text and dimensions, font preloads, and Organization/WebSite/WebPage/Service JSON-LD. The sitemap contains both language routes and reciprocal alternates.

For production on the original domain, set `SITE_URL=https://www.flyrite.ca/` and run `node build.mjs`. Coordinate redirects for existing `/about`, `/services1` and `/contact` routes before replacing the original site. At the preview host, add the project sitemap to the origin’s root robots.txt; this directory’s robots.txt only applies automatically if served from a domain root. Search indexing and ranking depend on deployment and search engines.

## Verified content and provenance

Content was reviewed on November 19, 2026:

- https://www.flyrite.ca/ — specialist focus, AMO 90-97, contact details and service approach.
- https://www.flyrite.ca/services1 — five services and rental/exchange part numbers. Availability and compatibility require confirmation by FlyRite.
- https://www.flyrite.ca/about — Peter Jenkins, founding in 1996, Hal Hobenshield and his aviation background.

French is a proposed website translation; it does not establish that FlyRite provides customer service in French. No prices, turnaround promises, testimonials, or additional certifications have been invented. Contact actions use the verified public phone and email. There is no form backend or simulated submission.

Original business photography retained for this concept:

- `assets/component.jpg`: https://static.wixstatic.com/media/21f668_374be6d5ba024c2491515d0cc81a31e7~mv2.jpeg
- `assets/workshop.jpg`: https://static.wixstatic.com/media/21f668_78d59ec1ee884f368ba266bf0ab44afd~mv2.jpeg

The plane-inspired SVG mark and typographic social card are redesign concepts. `social-card.ps1` generates the social card using Windows System.Drawing. Bundled Manrope and Barlow Condensed fonts include their SIL Open Font Licenses. Photography remains the original rights holders’ property.

## Promotional emails

`promo-email.md` contains English and French plain-text outreach drafts addressed to Hal and the FlyRite team. `promotional-email.html` and `promotional-email-fr.html` are table-based HTML versions. Sender: Luboš Kostroš, LivingPixel Studios, info@livingpixelstudios.com. The public FlyRite email is info@flyrite.ca. Nothing was sent. Verify the preview URLs before sending.

## Validation

`node check.mjs` passes 96 checks covering bilingual metadata/schema, local files, anchors, image attributes, persistent theme updates, localized button labels, mobile menu closing and Escape focus restoration, and email drafts. Browser QA covers English/French pages, light/dark themes, mobile menu, FAQs, and responsive desktop/tablet/phone layouts. Secondary photography is lazy-loaded.
