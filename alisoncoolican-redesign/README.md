# Alison Coolican website redesign

A static English and French Canadian redesign for Alison Coolican’s registered massage therapy practice in Vernon, BC.

- [English preview](https://livingpixelstudios.com/redesign/alisoncoolican-redesign/)
- [French preview](https://livingpixelstudios.com/redesign/alisoncoolican-redesign/fr/)
- [Promotional email in English and French](promo-email.md)

Serve this directory with any static HTTP server to preview locally. The English page is at `/` and the French page is at `/fr/`. Both pages are rendered as HTML. The theme follows the system preference until a visitor selects light or dark, and the choice is stored locally.

The canonical URLs, social metadata, structured data, and sitemap target `https://alisoncoolican.com`. For production, serve the new pages, assets, `robots.txt`, and `sitemap.xml` at the domain root. Keep the existing WordPress biography, contact form, resources, workshops, and journal paths available. If the existing sitemap is in use, merge the two localized URLs into it so the legacy pages remain discoverable. Appointment availability is managed by Cliniko.

Alison’s portrait is sourced from [her existing biography](https://alisoncoolican.com/about/). The hero is illustrative photography generated with built-in ImageGen from a prompt for an editorial close-up of manual therapy, with olive sleeves, oatmeal linen, and soft directional window light. The locally hosted fonts include their license files in `assets/`.
