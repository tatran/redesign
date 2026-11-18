# CMD Accounting Services redesign

A responsive, buildless English and Canadian French website concept for CMD Accounting Services Inc., Vernon, BC. English lives at `/` and French at `/fr/`. Both are complete HTML documents, with content available without JavaScript. Light/dark themes follow the system until a visitor chooses; that choice persists across pages. The mobile menu and theme switch require JavaScript. FAQs use native HTML disclosures.

The six services, founder information and contact details are based on the [current homepage](https://www.cmdasrv.com/), [services](https://www.cmdasrv.com/services.php), [about](https://www.cmdasrv.com/about.php) and [contact](https://www.cmdasrv.com/contact.php) pages, checked November 18, 2026. The French content is a translated website concept and does not assert that the team provides service in French. No testimonials, prices or performance guarantees have been invented. Inquiry links open the visitor’s email app; phone links call the published office numbers. There is no form backend or collection of financial documents.

## Preview and editing

Serve this directory with a static HTTP server. There are no runtime dependencies. To regenerate the HTML after editing the content/template:

```sh
node build.mjs
node build-emails.mjs
```

Commit the generated HTML and sitemap along with source changes. `node verify.mjs` checks both languages, structured data, SEO, local assets, anchors and theme/menu behavior.

## SEO and deployment

Canonical links, reciprocal `en-CA`/`fr-CA`/`x-default` alternates, localized titles/descriptions, Open Graph/Twitter cards, `AccountingService` JSON-LD and sitemap URLs target `https://livingpixelstudios.com/redesign/cmdasrv-redesign/`, following this repository’s existing preview structure.

The sitemap can be submitted directly to search engines. A robots file is only effective at the domain root; this folder’s `robots.txt` is a deployment reference. Add its sitemap directive to the hosting domain’s existing root robots file without replacing other rules. Email HTML drafts are marked noindex.

For a launch on `cmdasrv.com`, change `base` in `build.mjs`, regenerate the pages/sitemap, update `robots.txt`, and publish at the domain root. Plan redirects from existing `.php` routes to the relevant new sections. Keep the external original careers/privacy pages or migrate those pages before retiring the original hosting. The existing domain is not changed by this preview. GitHub push and public-host deployment are separate operations.

## Assets and email

Jenny’s portrait comes from the original site: `https://www.cmdasrv.com/images/jenny1_250x250.png`. The forest is a decorative stock photograph from [Unsplash’s image CDN](https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=85); it does not depict or claim to depict the CMD office or Vernon. Fonts are bundled under the included Manrope and Instrument Serif SIL Open Font Licenses. The forest image is also used for social sharing.

`promotional-email.txt`, `promotional-email.html` and `promotional-email-fr.html` are English/French outreach drafts addressed to Jenny McCrea and signed by Luboš Kostroš of LivingPixel Studios. They have not been sent. Confirm the public preview URL is live before sending.
