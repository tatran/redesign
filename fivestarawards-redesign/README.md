# Five Star Awards redesign

A responsive, buildless English/French recognition and awards website with locally bundled fonts, light/dark themes, collection enquiries, a custom work section, FAQs and direct contact links. No dependencies or backend required.

- English: `index.html`; French: `fr/index.html`.
- Content generator: `scripts/build.mjs`. Run `node scripts/build.mjs` after content changes.
- Checks: `node scripts/check.mjs` and `node --check app.js`.
- Serve this directory with any static HTTP server, or publish it as a subdirectory. Relative asset paths work in either location.
- `promo-email.md` contains English and French outreach email drafts. Neither was sent.

## Interactions

Theme follows the system preference initially and persists a manual choice in localStorage. Native dialogs support Escape and focus management. Collection buttons preselect the collection in an enquiry dialog. Required name, valid email and project details are validated by the browser; the action opens a prefilled email for the visitor to review and send. Nothing is submitted to a server or stored by the site. No shopping cart, payment or live inventory is implied.

## SEO and hosting

Preview base: https://livingpixelstudios.com/redesign/fivestarawards-redesign/

Both languages have localized titles/descriptions, self-canonical URLs, reciprocal en-CA/fr-CA/x-default alternates, Open Graph/Twitter metadata, image descriptions and Store/WebPage JSON-LD. Sitemap entries include language alternates. Business facts are based on the sources below.

The preview address is the intended repository hosting path; a GitHub push alone does not verify it is deployed. This request uses the existing GitHub destination and does not register separate hosting.

Before a business-domain launch, change `base` in the build script and regenerate pages and sitemap. Configure redirects from legacy URLs to the relevant new content, confirm contact information and product scope, and review French copy. The bundled robots.txt applies only when served at the domain root; configure the host’s root robots.txt to reference this sitemap when hosting under a subdirectory. Do not overwrite the shared host’s robots.txt.

## Sources reviewed November 19, 2026

- https://www.fivestarawards.ca/ — categories, service focus and toll-free phone.
- https://www.fivestarawards.ca/about-us — 25+ years of experience and Canada-wide delivery.
- https://www.fivestarawards.ca/contact-us — legal business name and Vernon address.
- https://www.fivestarawards.ca/custom-made — custom medals, shapes, finishes and artwork preview.
- https://fivestarawards.ca/faq — engraving and artwork services.
- https://www.okanagan-local.ca/biz/8674/five-star-awards-ltd — info@fivestarawards.ca (the official site masks email in retrieved text).

No prices, shipping promotions, production deadlines or testimonials were invented. Current website and privacy links point to the original domain. The translated website does not promise French-speaking staff.

## Assets

`assets/awards-hero.jpg` is an AI-generated illustrative still life created with the built-in ImageGen tool and compressed to JPEG. It is not a photograph of the company’s stock. The page caption labels it as illustrative. The custom medal is a decorative CSS illustration. Category symbols and favicon are original SVG. Manrope and Instrument Serif fonts are bundled with their SIL Open Font Licenses.

Final image prompt: “Use case: product-mockup. Asset type: premium awards company website hero, landscape 1536x1024. Photorealistic editorial still life of three unbranded recognition awards on dark charcoal stone plinths: a tall faceted transparent optical crystal obelisk, an elegant gold metal trophy cup with handles on a black base, and a round antique gold medal with dark ribbon lying in foreground. Dramatic warm side lighting, believable crystal refractions, restrained luxury, subtle grain, dark graphite studio backdrop, warm gold highlights. Objects occupy center and right of composition, ample breathing room. No text, logos, letters, people, watermarks. This is illustrative concept imagery, no specific real products.”
