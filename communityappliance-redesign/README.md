# Community Appliance — bilingual website redesign

A responsive, buildless concept for [Community Appliance Parts & Service](https://communityappliance.ca/) in Vernon, BC. English is at `index.html`; French Canadian is at `fr/index.html`. Includes light/dark themes that follow the system until manually selected, then persist between pages.

Expected preview URLs after the repository’s hosting deployment:

- [English](https://livingpixelstudios.com/redesign/communityappliance-redesign/)
- [Français](https://livingpixelstudios.com/redesign/communityappliance-redesign/fr/)

## Run and edit

Serve this directory with any static HTTP server. No package installation is required. Edit the localized content in `build.mjs`, then run `node build.mjs` to regenerate both HTML files, the sitemap and robots file. Styling and behavior live in `styles.css` and `site.js`.

## Working contact flow

The request helper validates the fields and opens the visitor’s email application with a prefilled message to `communityapplianceparts@gmail.com`. Visitors must send that email themselves; this does not book an appointment. No form data is stored or sent to a server by this concept. Phone links, directions, a direct email link and the original website form are also available. The French interface does not imply the business offers French-speaking technicians.

## SEO and launch

Both static language pages include localized titles, descriptions, canonical URLs, reciprocal `en-CA`, `fr-CA` and `x-default` alternates, Open Graph and Twitter cards, image descriptions, and JSON-LD for LocalBusiness, WebSite, WebPage and visible FAQs. The site includes a bilingual XML sitemap, a social image, and a robots file. FAQ markup does not guarantee a search rich result.

URLs currently match the expected LivingPixel preview path. To launch on the business domain, run `$env:SITE_URL='https://communityappliance.ca/'; node build.mjs` in PowerShell and deploy all generated files and assets. Set the environment variable only for that build, or remove it afterward. Preserve any existing URLs, handle redirects, and merge sitemap/robots rules into the domain’s root configuration; a robots file in a subdirectory does not govern the host. No changes to the original domain are included in this concept.

## Promotional email drafts

- `promotional-email.txt` — English and French plain-text drafts, recipient and subjects.
- `promotional-email.html` — English HTML email.
- `promotional-email-fr.html` — French HTML email.

Emails are drafts and have not been sent. Check that the preview link is available before sending.

## Sources and assets

Business name, contact information, hours, appliance categories, brands and service areas were checked against [the current business website](https://communityappliance.ca/) on November 18, 2026. The address and phone are also listed by the [Greater Vernon Chamber of Commerce](https://business.vernonchamber.ca/list/searchalpha/c). Hours follow the business website, which differs from some directory listings. No reviews, discounts, years in business, repair guarantees, same-day service promises or brand partnerships have been invented.

The hero is an AI-generated illustrative kitchen, not a photograph of the business or its work. Created with the built-in ImageGen tool and optimized into local JPEGs. Prompt: “A sunlit contemporary Okanagan home kitchen with warm off-white cabinetry, pale oak island, stainless steel refrigerator, dishwasher, a dark green tea towel, a small ceramic vase with leafy branches, and a compact technician’s tool bag on the counter. Authentic editorial interiors photograph, warm sage palette, no people, text, logos or watermark.” The model-number label is visibly marked as illustrative. The new house/appliance mark is a concept mark drawn in SVG. Manrope fonts are self-hosted under the [SIL Open Font License](assets/Manrope-OFL.txt).
