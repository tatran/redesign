# Alpha Omega Mobile Security services redesign

[English preview](https://livingpixelstudios.com/redesign/aosltd-redesign/services.html) · [Aperçu en français](https://livingpixelstudios.com/redesign/aosltd-redesign/fr/services.html) · [Bilingual promotional email](promotional-email.md)

The static pages need no build step or external scripts. Open `services.html` in a browser or serve this directory with any static file server. Language links work without JavaScript. The theme follows the device until the visitor chooses light or dark mode. The browser remembers that choice across both language pages when served from the same origin.

For production, publish `services.html`, `fr/services.html`, `styles.css`, `theme.js`, and the `assets/` directory at the corresponding paths on `www.aosltd.ca`. This preserves the existing English URL. `index.html` is an entry point for the GitHub Pages preview. Merge the two entries in `sitemap.xml` into the production sitemap so existing pages stay listed. The canonical, language-alternate, Open Graph, and structured-data URLs already point to the proposed production paths. If those paths change, update the metadata and sitemap together.

Services and service areas are based on [Alpha Omega’s services page](https://www.aosltd.ca/services.html). Direct dial and email details come from its [contact page](https://www.aosltd.ca/contact.html). The patrol photo is an ImageGen illustration. Manrope is bundled under the [SIL Open Font License](assets/Manrope-OFL.txt).
