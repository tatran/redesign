# Blue Whale Communications redesign

A static English and Canadian French website with responsive layouts, accessible navigation and FAQs, and persistent light/dark themes. All page content and metadata are rendered in HTML; JavaScript is only used for the menu and theme controls. No dependencies, analytics, contact-form backend, or build tooling are required to serve the committed pages.

Expected preview locations follow this repository’s hosting convention:

- English: https://livingpixelstudios.com/redesign/bluewhalecommunications-redesign/
- French: https://livingpixelstudios.com/redesign/bluewhalecommunications-redesign/fr/

## Preview and edit

Run `node serve.mjs` and open the printed local URL. Stop with Ctrl+C. Any static server also works. `build.mjs` holds the shared markup and English/French copy; run `node build.mjs` after edits to regenerate both pages, email drafts, robots.txt, and sitemap.xml. The committed output can be hosted directly from this directory.

## Content and assets

The [live Blue Whale website](https://bluewhalecommunications.ca/) was reviewed on November 18, 2026. Its live content describes advisory, execution, and training services, Nikki Gillingham’s leadership, Jessica Walley’s role, and the 15-month Your Tide Chart product. The French site is a proposed translation, not a claim that the firm delivers services in French. Existing external resources and the booking service remain under the firm’s control. French footer links identify English-language resources.

The existing [TidyCal booking page](https://tidycal.com/nikkigillingham/30-minute-meeting), [Your Tide Chart](https://bluewhalecommunications.ca/tide-chart-annual-communications-and-marketing-roadmap), and [blog](https://bluewhalecommunications.ca/blog/) are preserved. No contact email, street address, prices, awards, statistics, or results have been invented. The short Candace Froese testimonial comes from the original website; its French rendering is identified as a translation.

Original photography, retained from the current site:

- `assets/nikki-working.webp`: https://static.showit.co/v2/178774/b11L6yYnKjYu7nFeH6otcQ/dsc_2574-enhanced-nr.jpg/variant/1600/webp
- `assets/team.webp`: https://static.showit.co/v2/178774/rp58BqovLBVNhBrLwvLsaA/dsc_4534-enhanced-nr.jpg/variant/1600/webp

The original whale-tail-inspired mark is an SVG concept for the redesign. Manrope and Instrument Serif are bundled with their SIL Open Font License files. The ocean image is an illustrative asset generated with built-in ImageGen, saved in the project as `assets/blue-whale.jpg`; a branded social card is at `assets/social-card.jpg`.

ImageGen prompt: “Use case: photorealistic-natural. Asset type: atmospheric hero photography for Blue Whale Communications marketing and communications advisory website. Primary request: create a premium editorial aerial photograph of a solitary blue whale swimming just beneath the clear deep teal ocean surface, in a vertical 4:5 composition. The whale is seen from directly above, gracefully pointing diagonally towards upper right, the whole body visible but naturally refracted beneath the water, with long subtle wake lines, tiny seafoam details and blue-green caustic ripples. Mostly dark deep petrol turquoise water with a gradient towards lighter sea-glass teal at top right, softly lit and peaceful, real textured ocean water, tasteful film grain, no coast or people. Main whale occupies center 45 percent of frame, generous ocean negative space around it. This is an illustrative brand image, not a portrait. High-end nature magazine photographic realism, calm and expansive, no lettering, no text, no logos, no border, no graphic overlays. Output a portrait image at 1200x1500 or similar aspect ratio.”

## SEO and deployment

Includes unique titles and descriptions, canonical URLs, reciprocal `en-CA`/`fr-CA`/`x-default` alternates, Open Graph and Twitter cards, Organization/WebSite/WebPage/Service JSON-LD, semantic sections, image dimensions and alt text, font preloads, lazy-loaded secondary photography, and a multilingual sitemap.

The default canonical and sitemap URLs use the expected preview location above. The GitHub push does not itself verify that the separate LivingPixel hosting pipeline has deployed the preview. For deployment on the business domain, set `SITE_URL=https://bluewhalecommunications.ca/` in the environment and rerun `node build.mjs`. Publish at the domain root, merge or retain existing site routes, and preserve the current blog and Tide Chart URLs. The included robots.txt only controls crawling when served at the hosting origin’s root. For subdirectory hosting, add this sitemap URL to the origin’s existing root robots.txt and submit it through the site owner’s search console. This project does not change the original business website.

## Outreach drafts

[promo-email.md](promo-email.md) contains English and French outreach copy, with formatted versions in [promotional-email.html](promotional-email.html) and [promotional-email-fr.html](promotional-email-fr.html). They are drafts from LivingPixel Studios to Nikki Gillingham. No recipient email address was verified and nothing was sent. Verify the deployed preview before sending.
