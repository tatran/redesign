# TGP Kids (tgpkids.ca) — Modern Bilingual Childcare & Parent Portal Redesign

Modern, mobile-first bilingual (EN / FR) website redesign with **Orchard Sunlight Light Mode + Cozy Storytime Dark Mode** for **TGP Kids – The Gathering Place Childcare Center** in Kelowna, British Columbia, Canada.

## 🍎 Project Overview

- **Client:** TGP Kids – The Gathering Place Childcare Center
- **Founder / Owner / Director:** Indy Dhial (*Licensed Early Childhood Educator & ECEBC Sue Fraser Award Recipient*)
- **Kelowna Campuses:**
  - **Location 1 (Hollydell Campus):** 875 Hollydell Road, Kelowna, BC (*Center Manager: Haley Houda · Assistant Manager: Hunter Eskritt*)
  - **Location 2 (Matt Road Campus):** 645 Matt Road, Kelowna, BC (*Center Manager: Erin Emde*)
- **Hours of Operation:** Monday – Friday, 7:30 AM – 5:00 PM
- **Classroom Size:** Maximum **8 children per classroom** (Ages 18 months to School Age)
- **Contacts:**
  - Office: `778-484-6565`
  - Director: `250-863-6565`
  - General Inbox: `info@tgpkids.ca`
  - Center Manager: `manager@tgpkids.ca`
  - Careers: `careers@tgpkids.ca`
  - Brightwheel Parent Portal: `https://schools.mybrightwheel.com/sign-in`
- **Original Website:** [tgpkids.ca](https://www.tgpkids.ca/)

---

## 🚀 Key Redesign Features

1. **Orchard Sunlight Light Theme + Cozy Storytime Dark Theme**
   - **Light Mode:** Warm cream background (`#fdfaf5`), TGP Apple Red (`#d7262e`), Orchard Nature Green (`#387c35`), and Okanagan Lake Blue (`#2563eb`).
   - **Dark Mode:** Soothing evening slate (`#0f141c` / `#1b2432`) with soft coral-red (`#f87171`) and mint-green (`#4ade80`) accents for parents browsing after bedtime.

2. **Bilingual Architecture (EN / FR)**
   - Complete English (`EN`) and Canadian French (`FR`) localization with instant client-side switching and `localStorage` persistence.

3. **Interactive Program & Campus Matcher**
   - Parents select their child's age cohort (**18–36 Months Toddler**, **3–5 Years Preschool**, or **5–12 Years School-Age & Summer Care**) and preferred Kelowna campus (**875 Hollydell Rd**, **645 Matt Rd**, or **Either Campus**) to view tailored classroom details, lead manager info, and pre-fill the Tour / Waitlist form with 1 click.

4. **5 Developmental Domains Explorer & Full-Day Rhythm (7:30 AM – 5:00 PM)**
   - Interactive tabs showcasing TGP Kids' support across **Emotional, Social, Physical, Intellectual/Cognitive, and Language** development, paired with a clear daily schedule (*Arrival, Circle Time, Indoor Free Play & Loose Parts, Outdoor Play, Lunch & Rest, Afternoon Yoga/Music*).

5. **Authentic Educator Team Showcase & 2026–2027 Holiday / Closure Calendar**
   - Full educator cards with original photos and bios for **Indy Dhial**, **Haley Houda**, **Erin Emde**, **Hunter Eskritt**, **Jen Stajduhar**, and **Ashley**, plus direct `careers@tgpkids.ca` application CTA.
   - Complete 2026 & 2027 BC Statutory Holiday table and 2026 Center Closure schedule (*Pro-D Days: March 27 & August 28; Summer Break: July 13–17; Winter Break: Dec 24 – Jan 4*).

6. **Ready-to-Send Client Outreach Offer (`promotional-email.html` & `promotional-email.txt`)**
   - Responsive HTML email and plain-text pitch addressed to `info@tgpkids.ca` and `manager@tgpkids.ca`.

---

## 📁 Directory Structure

```text
tgpkids-redesign/ (and /tgpkids/)
├── index.html               # Main responsive bilingual portal (Light + Dark mode)
├── favicon.svg              # Custom TGP Kids Apple & Family SVG icon
├── README.md                # Project documentation & audit summary
├── promotional-email.html   # Responsive HTML outreach email offer
├── promotional-email.txt    # Plain-text version of the email offer
├── css/
│   └── style.css            # Light & Dark mode design system
├── js/
│   ├── app.js               # Interactive engine: i18n, theme, matcher, domains, holidays, form
│   └── translations.js      # Bilingual dictionaries (EN, FR), team bios & holiday data
└── images/                  # Authentic TGP Kids logo, educator portraits & community graphics
```
