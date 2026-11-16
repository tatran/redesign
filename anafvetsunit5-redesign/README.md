# ANAF Spitfire Unit 5 redesign

[English preview](https://livingpixelstudios.com/redesign/anafvetsunit5-redesign/) · [Aperçu en français](https://livingpixelstudios.com/redesign/anafvetsunit5-redesign/fr/)

The English page lives at `index.html` and the Canadian French page at `fr/index.html`. Both share local assets, CSS and a small script for the navigation and theme. Serve this directory with any static HTTP server, using a server that serves `index.html` for directory URLs. The two pages and their links work with JavaScript disabled. The theme follows the system setting until the visitor chooses a preference.

## Publishing on the club domain

Serve this directory at the root of `https://anafvetsunit5.ca/` with `/fr/` serving the French page. The canonical URLs, alternate-language links, social tags, structured data and sitemap already point to the club domain. Serve `robots.txt` and `sitemap.xml` at the domain root. The script adds a noindex directive on the known preview hosts.

Keep the linked WordPress routes available when installing the redesign. The preview links to the club’s maintained menu, event listings, membership criteria, hall details and contact form. If the WordPress installation moves, update those links or redirect the existing paths before replacing the home page.

## Sources and credits

- Club information, badge and local photos are from the [Unit 5 site](https://anafvetsunit5.ca/). Current event listings, hours and menu details are kept on the linked club pages.
- Contact details are also listed by [ANAVETS Dominion Command](https://anavets.ca/british-columbia-unit-locations-addresses/). The [Vernon Museum](https://vernonmuseum.ca/spitfire/) documents the local unit and its replica.
- Hero photograph by SAC Scott Lewis RAF/MOD, [via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Air_to_air_image_of_a_Spitfire,_taken_over_RAF_Coningsby._MOD_45147974.jpg), under the [Open Government Licence v1.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/1/). Resized for the website.
- DM Sans and Instrument Serif are bundled with their SIL Open Font Licenses in `assets/`.

The [bilingual outreach email](promotional-email.txt) is addressed to the Unit 5 team. Choose the recipient’s preferred language and replace the signature placeholders before sending.
