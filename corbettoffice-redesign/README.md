# Corbett Office Plus redesign

Static English and Canadian French website concept with responsive layouts, accessible navigation, persistent light/dark themes, furniture and catalogue links, a contact section, and expandable FAQs. No installation or build is required. Serve this folder with any static web server; English is at `/`, French at `/fr/`.

## SEO

Both pages contain unique titles and descriptions, canonical URLs, reciprocal language alternates, Open Graph and Twitter cards, and store structured data. `sitemap.xml` lists both languages. Canonicals use the intended preview location: https://livingpixelstudios.com/redesign/corbettoffice-redesign/ . A Git push alone does not verify that this preview has deployed.

For deployment at corbettoffice.com, replace the preview base URL in the HTML, sitemap and robots file. A robots file in a subdirectory is not authoritative: add the sitemap to the hosting domain's root robots.txt. The French page explains that catalogue and account destinations are currently in English. Purchases, accounts and furniture inquiries use Corbett's existing website; no customer information is collected by this concept.

## Content and assets

- Business categories and furniture services: https://corbettoffice.com/ and https://corbettoffice.com/office-furniture-vernon-kelowna-okanagan
- Local ownership, founding year and business account details: https://corbettoffice.com/content.aspx?l=0%2C1%2C782%2C814
- Vernon phone and address cross-checked against https://www.bbb.org/ca/bc/vernon/profile/office-furniture/corbett-office-equipment-ltd-0037-109780
- Direct retrieval of the existing site is protected by a 403 challenge; indexed content was used for research. Catalogue destination availability must be confirmed by the business before launch.
- Illustrative workspace photographs, not Corbett premises or project claims: Downloaded image source URLs: https://images.unsplash.com/photo-1497366811353-6870744d04b2 and https://images.unsplash.com/photo-1497215728101-856f4ea42174 .
- Manrope fonts are bundled with the SIL Open Font License in `assets/Manrope-OFL.txt`. Icons and favicon are local SVG artwork.

## Promotional email

`promotional-email.html`, `promotional-email-fr.html` and `promotional-email.txt` contain English and French outreach drafts from LivingPixel Studios to the Corbett team. They have not been sent. Confirm the preview is live and choose a verified recipient before sending.

## Verification

JavaScript syntax, local links and anchors, HTML language/metadata, structured data, sitemap consistency, asset presence, and theme/navigation event behavior were checked. A local HTTP server started, but sandbox networking prevented an HTTP readiness check. Visual browser verification was unavailable: the in-app browser could not reach the local host, and Windows browser automation stopped because URL-policy enforcement is unsupported.

