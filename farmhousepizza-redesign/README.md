# Farmhouse Pizza & Donair redesign

Responsive English/French static redesign, with light/dark themes, menu category filters and local SEO. No build dependencies. Content was reviewed against the official restaurant site on November 19, 2026.

## Preview

Serve this directory using a static HTTP server. English: `/`; French: `/fr/`. Relative assets support deployment in a subdirectory.

Expected URLs under the repository’s existing hosting convention:
- https://livingpixelstudios.com/redesign/farmhousepizza-redesign/
- https://livingpixelstudios.com/redesign/farmhousepizza-redesign/fr/

To regenerate the localized HTML after editing copy: `node build.mjs`.

## Features

- Complete, indexable HTML in both languages, usable without JavaScript.
- Theme follows the system preference until overridden, with local storage shared by both pages.
- Menu filters, accessible mobile navigation with Escape support, tap-to-call and map directions.
- Localized metadata, canonical and reciprocal hreflang links, Open Graph/Twitter cards, Restaurant JSON-LD, sitemap and robots.txt.
- Self-hosted fonts, explicit image dimensions, lazy-loaded secondary image and reduced-motion support.

## Sources and assets

- Business details, ingredient claims, hours, delivery rate and lunchtime slices: https://www.farmhousepizzaanddonair.com/
- Pizza names and ingredients, wider categories: https://www.farmhousepizzaanddonair.com/menus
- Ordering handoff: https://www.farmhousepizzaanddonair.com/online-ordering (linked by the official site; automated retrieval timed out). Telephone ordering remains available throughout.
- `assets/donair.jpg`: original restaurant photograph, https://static.wixstatic.com/media/7d8000_c5a89375c6454a28b42e3be7bc813c9b~mv2.jpg
- `assets/original-logo.png`: original restaurant logo retained for reference, https://static.wixstatic.com/media/7d8000_17f67b8942f1493fbdf046c55ee98b73~mv2.png
- `assets/pizza.jpg`: illustrative Unsplash atmosphere photography, https://images.unsplash.com/photo-1579751626657-72bc17010498. It is not a photograph of Farmhouse food and does not imply a wood-fired cooking method.
- Manrope font is self-hosted under its included SIL Open Font License. House mark is an original SVG.

## Production SEO and deployment

SEO URLs target the intended production domain `https://www.farmhousepizzaanddonair.com/`. Deploy this directory at that domain’s root before submitting the sitemap. Keep the current Wix menu, ordering, rewards and other live routes available through a proxy or explicit redirects; the redesign hands customers to the current `/menus` and `/online-ordering` paths. A static replacement that removes those services would break ordering.

Publishing this folder to GitHub does not replace the live restaurant website. Set an `X-Robots-Tag: noindex` header on concept preview hosting. Do not submit the preview sitemap. Open Graph image URLs will work on the production domain only after deployment of its assets. Confirm hours, delivery rates and operational handoffs with the restaurant before production launch.

`promo-email.md` contains English/French outreach drafts. No email was sent. Verify the preview URLs before sending.
