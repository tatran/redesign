# Bean Scene Coffee House redesign

A responsive, buildless English/French redesign with light and dark themes, based on https://beanvernon.ca/ (reviewed November 18, 2026).

## Preview

Serve this directory with a static HTTP server. English is at `/`; French is at `/fr/`. All asset links are relative, so the same pages also work below `/redesign/beanvernon-redesign/`.

Expected preview URLs after the repository's normal hosting deployment:
- https://livingpixelstudios.com/redesign/beanvernon-redesign/
- https://livingpixelstudios.com/redesign/beanvernon-redesign/fr/

## Features

- Complete HTML content in both languages, usable without JavaScript.
- System theme preference with a persistent light/dark override shared across languages.
- Responsive layouts, visible keyboard focus, skip link, reduced-motion support, labelled controls, and descriptive image alternatives.
- Localized titles/descriptions, canonical URLs, reciprocal hreflang links, Open Graph/Twitter metadata, CafeOrCoffeeShop JSON-LD, sitemap and robots.txt.
- Working directions, telephone and Facebook links. No invented prices, reviews, offers or dated event listings.

## Production SEO

Metadata and sitemap target the intended production domain, `https://beanvernon.ca/`, rather than the design preview. Deploy this directory at the domain root, including `/fr/` and `/assets/`, before submitting its sitemap to search engines. Configure the preview host with an `X-Robots-Tag: noindex` response header. Retain any existing domain-level redirects or other live paths when switching hosting. This repository change does not itself replace the current beanvernon.ca website.

Address, hours, phone, Facebook and directions were taken from the current official website. Holiday hours may vary; regular hours should be confirmed with the business before launch. No menu was published because the source did not provide a verifiable menu or prices.

## Assets and email

Photographs and original logo were downloaded from the existing official site's `assets.cdn.filesafe.space/USofhByGh0xR5l1mZQu1/media/` assets. Copyright and visible photographer credits are retained. `bean-6.jpg` is the courtyard; `bean-5.jpg` the storefront; `bean-4.jpg` the live music photo; `bean-1.jpg` the autumn courtyard; `bean-0.jpg` the original logo. Fonts are hosted locally under the included SIL Open Font Licenses. The favicon is an original vector coffee cup.

`promo-email.md` contains English and French outreach drafts. The email has not been sent. Verify that the preview URL is live before sending.
