# Perfect Walk Productions redesign

A static English and Canadian French redesign for the Kelowna live music agency. It includes five artist profiles, a photo gallery, Eventbrite tickets, and direct booking by email or phone. Dark and light mode follow the device theme until the visitor makes a choice, which is stored in the browser.

Serve this folder with any static web server. The English page is at `/` and the French page is at `/fr/`. The site has no build step. Photos and the original logo come from the [agency’s current website](https://www.perfectwalkproductions.com/). Barlow Condensed and DM Sans are bundled under their respective [Barlow Condensed](assets/Barlow-Condensed-OFL.txt) and [DM Sans](assets/DM-Sans-OFL.txt) font licenses.

The canonical, language-alternate, social card, and sitemap URLs point to the [published preview](https://livingpixelstudios.com/redesign/perfectwalkproductions-redesign/). For a cutover to the company domain, update the preview URLs in both pages and `sitemap.xml`, publish it from the site root, and add the sitemap URL to the hosting domain’s root `robots.txt`. Redirect the current Wix `/info`, `/contact`, and `/book-online` paths to the corresponding agency and booking sections.

The [English email](promotional-email.html), [French email](promotional-email-fr.html), and [plain-text copy](promotional-email.txt) are outreach drafts for Shawna Whitney.
