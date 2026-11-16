# A&D Asphalt Solutions website redesign

A static landing-page redesign for the Armstrong, British Columbia paving contractor. The English Canadian page is at `/` and the French Canadian page is at `/fr/`. Both contain their own HTML content and metadata. The colour theme follows the device by default. Visitors can choose light or dark mode and carry that preference between languages.

[English preview](https://livingpixelstudios.com/redesign/asphaltsolutions-redesign/) · [French preview](https://livingpixelstudios.com/redesign/asphaltsolutions-redesign/fr/)

Serve this directory as the root of any static web server. The site requires no installation or build. For example, from this directory run `python -m http.server 8080` and open `http://localhost:8080/`.

The quote button links to A&D’s existing contact form. The company’s service detail pages, gallery and privacy policy also link to the current site. The quote section includes the company’s published estimator email and telephone number.

## SEO and production deployment

- The HTML includes localized page titles, descriptions, canonical URLs, reciprocal `hreflang`, Open Graph data and business structured data.
- Canonical URLs are configured for `https://www.asphaltsolutions.ca/` and `https://www.asphaltsolutions.ca/fr/`. Deploy the photos and fonts under `/assets/`. Redirect duplicate HTML entry points to the corresponding directory URL if the host serves both.
- Merge the entries in `sitemap.xml` into the existing production sitemap and keep the existing indexable routes. Verify both language URLs on the production host before submitting the updated sitemap.
- Restrict access or apply `noindex` to preview copies. Use the production canonical URLs only when both localized pages are ready to serve on the business domain.

Photography and branding come from the [original A&D Asphalt Solutions website](https://www.asphaltsolutions.ca/). The bundled [Barlow Condensed](assets/barlow-OFL.txt) and [Inter](assets/inter-OFL.txt) fonts are distributed under the SIL Open Font License.

The promotional outreach draft is available in [plain text](promotional-email.txt) and [HTML](promotional-email.html).
