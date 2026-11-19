# Vernon Elks #45 redesign

A responsive, buildless English/French website concept with light/dark themes. Based on the official site reviewed November 19, 2026.

Serve this directory with a static HTTP server. English: `/`. French: `/fr/`. Relative asset links also support hosting under `/redesign/vernonelks-redesign/`.

Expected repository-hosting preview URLs (verify deployment before sharing):
- https://livingpixelstudios.com/redesign/vernonelks-redesign/
- https://livingpixelstudios.com/redesign/vernonelks-redesign/fr/

## Features

- Complete server-readable HTML in English and French, including practical hall details, membership and charity resources, FAQs, and contact links.
- Persistent theme toggle, system preference support, responsive mobile menu, keyboard focus indicators, native FAQ disclosures, skip link, reduced-motion support, and image alternatives.
- Unique titles and descriptions, canonical URLs, reciprocal hreflang links, Open Graph/Twitter metadata, Organization JSON-LD, sitemap, and robots.txt.
- Direct telephone, email, directions, membership PDF, rental information, and event links. External application and event pages remain in English and are labelled accordingly in French.

## Production SEO and deployment

Canonical URLs, social image URLs, JSON-LD, sitemap, and robots.txt target `https://vernonelks.com/`. Deploy the directory at that domain's root, including `/fr/` and `/assets/`, before submitting its sitemap. This GitHub push does not replace the original website or change its domain configuration. Use an `X-Robots-Tag: noindex` response header on the design preview host. Preserve existing WordPress URLs with suitable redirects or retained pages when launching the redesign; application and rental links currently use those original URLs.

Confirm rates, availability, event schedules, catering, capacity for the intended layout, and contact details with the lodge before launch. No dated events, unverified testimonials, or prices were invented. French copy is a website translation; visitors are asked to confirm service languages with the lodge. The hall information is an overview, not a replacement rental agreement.

## Sources and assets

- https://vernonelks.com/ — lodge history and community mission.
- https://vernonelks.com/community-hall-rentals/ — address, rental uses, capacities, and catering guidance.
- https://vernonelks.com/contact/ — public phone and email.
- https://vernonelks.com/membership-application/ — linked membership document.
- https://vernonelks.com/charity-application/ and https://vernonelks.com/events/ — original application and event resources.
- `assets/hall.jpg`: official photograph, `/wp-content/uploads/2025/01/Hall-1536x1024.jpg`.
- `assets/gathering.jpg`: official photograph, `/wp-content/uploads/2025/12/Hall-1024x768.jpg`.
- `assets/elks-logo.png`: official logo, `/wp-content/uploads/2025/01/cropped-Elks_Logo_Pantone_Colours-1.png`.

Original photos and logo remain the property of their respective owners. Confirm reuse permission before commercial launch. Instrument Serif and Manrope are bundled with their SIL Open Font Licenses. The favicon is an original monogram.

`promo-email.md` includes English and French outreach drafts. No email was sent.
