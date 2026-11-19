# Down Under Pipe Inspection redesign

Static English/French website with responsive layouts, locally bundled Manrope, persistent dark/light themes and a custom SVG inspection-camera illustration. The revised visual system uses forest green, pale lime, larger reading text, a dedicated equipment specification panel and a full-width contact section with a map. No installation or runtime dependencies required.

Rebuild from this directory with `node scripts/build.mjs`. Layout and visual copy are in `scripts/layout.mjs`; source business content is in `scripts/build.mjs` and `scripts/details.mjs`. Serve with `node scripts/serve.mjs` and open http://127.0.0.1:8196. English is `index.html`; French is `fr/index.html`.

## SEO

Localized titles/descriptions, canonical URLs, reciprocal en-CA/fr-CA/x-default alternates, Open Graph/Twitter metadata, local social card, LocalBusiness/WebPage JSON-LD and bilingual XML sitemap. Canonicals target the expected repository preview at https://livingpixelstudios.com/redesign/downunderpipe-redesign/. A GitHub push does not confirm hosting deployment. Before business-domain launch, change `base` in the build script and rebuild; configure redirects and domain-root robots.txt. The subdirectory robots.txt does not control the shared host.

## Content and provenance

Reviewed November 19, 2026:

- Requested reference: https://www.facebook.com/downunderpipe/ and /about — browser access succeeded after dismissing the login overlay. Verified current email `downunderpi@gmail.com`, phone and linked website `https://www.downunderpipeinspection.com/`.
- https://www.downunderpipeinspection.com/ — family-owned business, founding in Vernon in 1998, owner Mark Tishenko and Okanagan service audience.
- https://www.downunderpipeinspection.com/cctv — Rovver crawler and Vivax push-camera capacities, digital reports, video documentation and locating capabilities.
- https://www.downunderpipeinspection.com/cipp — full CIPP relining and sectional spot repairs.
- https://www.facebook.com/photo.php?fbid=2088754188082696 — April 2, 2019 post on trenchless repair and reduced disturbance to gardens and driveways. No absolute no-dig or lifespan guarantees reproduced.
- https://www.yellowpages.ca/bus/British-Columbia/Vernon/Down-Under-Pipe-Inspection/7930916.html — service categories and Vernon location.
- https://www.bbb.org/ca/bc/vernon/profile/pipe-inspection/down-under-pipe-inspection-ltd-0037-1216664 — legal business name, 1998 establishment, phone and address.
- https://business.vernonchamber.ca/list/searchalpha/d — phone and business identity.

Contact actions use the published phone 250-938-1213 and Facebook-confirmed email. The old downunderpipe.com domain is superseded by downunderpipeinspection.com. No invented reviews, certifications, project photos or emergency availability claims. Confirm current service scope and street address with the business before official launch. French translates the website and does not promise French-speaking staff.

Facebook cover, profile and historical service images were located and inspected. Browser photo-download permission was declined; the user then explicitly requested text updates only. No Facebook photographs were downloaded, embedded or added to the repository. The site links to the original Facebook photo collection.

`assets/inspection-camera.svg`, favicon and social artwork are original illustrations for this concept. The pipe and camera illustration is conceptual, not an actual inspection image. Manrope uses the bundled SIL Open Font License.

Verification: static link, anchor, metadata, structured-data and sitemap checks; browser review of desktop and phone layouts, English/French navigation, theme switching, mobile menu and FAQ expansion. No horizontal overflow observed at 1440px and 390px viewport widths. Google Maps loaded its embedded UI, but map tiles were unavailable in the preview environment; the external directions link remains available.

`promo-email.md` contains English and French outreach drafts, not sent. Confirm preview hosting before sharing its URL.
