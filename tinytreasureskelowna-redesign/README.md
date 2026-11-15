# Tiny Treasures Kelowna — Licensed Attachment-Based Home Daycare Redesign

Modern, responsive bilingual (EN / FR) website redesign and interactive family portal for **Tiny Treasures Kelowna** (*Mrs. Tammy & Jamal*), located at **1310 Graham Road, Kelowna, BC, V1X 1J9**.

## 🌱 Project Overview

- **Client:** Tiny Treasures Kelowna (Licensed Home Daycare — *“Nurturing hearts, Growing minds”*)
- **Founder & Lead Educator:** Mrs. Tammy (16+ years of experience in Early Childhood Education, child development, Autism support, ASL, and occupational therapy practices)
- **Co-Educator & Team:** Jamal + support educator (3 dedicated educators on team for low ratios, field trips, and uninterrupted care)
- **Address:** 1310 Graham Road, Kelowna, BC V1X 1J9 (Rutland area)
- **Phone:** `236-795-8172`
- **Email:** `tinytreasureskelowna@gmail.com`
- **Partner Service:** [Growing Together Potty Training](https://sites.google.com/kelownasgrowingtogetherpottytraining.com/growingtogetherpottytraining/home)
- **Original Website:** [tinytreasureskelow.wixsite.com/tiny-treasures-kelow](https://tinytreasureskelow.wixsite.com/tiny-treasures-kelow)

---

## 🚀 Key Redesign Features

1. **Warm Okanagan Sunlight (Light) + Cozy Storytime (Dark) Theme**
   - **Light Mode:** Soft parchment cream (`#fdfaf5`), botanical forest sage (`#2d6a4f`), warm terracotta clay (`#d96b43`), and golden honey highlights.
   - **Dark Mode:** Deep evening pine (`#0f1714`) with luminous mint-sage (`#52b788`) and warm peach accents (`#f4845f`) for parents browsing after bedtime.
   - Persistent `localStorage` theme toggle.

2. **Fixes All Technical & UX Bugs from the Original Wix Site**
   - Eliminates the severe overlapping text collision on `/costs`.
   - Fixes the broken email typo (`tinytreasureskelowna.com` → `tinytreasureskelowna@gmail.com`) and broken Wix template placeholder `+` links on `/about1-c1x1t`.
   - Replaces messy Wix URLs (`/about1-c1x1t`, `/about1-c1z94`, `/about`) and third-party Wix banner ads with a unified, fast-loading responsive architecture.

3. **Interactive BC CCFRI & ACCB Tuition Subsidy Estimator**
   - Allows Kelowna parents to select their child's program (*Infant 12–24m, Toddler 2–3y, Preschool 3–5y, Before/After School Care, Inclusive Care*), choose full-time or part-time schedules, and preview estimated savings from the **BC Child Care Fee Reduction Initiative (CCFRI)** and **Affordable Child Care Benefit (ACCB)**.

4. **Interactive Child Adaptation & Care Advisor**
   - Tailored guidance tabs for *Separation Anxiety*, *Special Needs / Autism / ASL*, *ESL / Non-English Newcomers*, *Kindergarten Readiness*, and *Growing Together Potty Training*.

5. **Bilingual (English / French) Support & 18+ Authentic Photos**
   - Instant client-side EN / FR language switcher for Canadian and Francophone Okanagan families.
   - Preserves all authentic playroom, backyard playground, nature study, STEAM experiment, and field trip photography plus verified Kelowna parent testimonials.

6. **Ready-to-Send Client Outreach Offer (`promotional-email.html` & `.txt`)**
   - Personalized HTML and plain-text email offer addressed to Mrs. Tammy & Jamal (`tinytreasureskelowna@gmail.com`).

---

## 📁 Directory Structure

```text
tinytreasureskelowna-redesign/ (and /tinytreasureskelowna/)
├── index.html               # Main responsive Light + Dark daycare portal
├── favicon.svg              # Custom nurturing heart & sprout SVG icon
├── README.md                # Project documentation & audit summary
├── promotional-email.html   # Responsive HTML email offer for the client
├── promotional-email.txt    # Plain-text version of the email offer
├── css/
│   └── style.css            # Light & Dark mode design system
├── js/
│   ├── app.js               # Interactive engine: theme, EN/FR i18n, BC subsidy calculator, advisor, form
│   └── translations.js      # Bilingual dictionaries (EN/FR) & program database
└── images/                  # 20 authentic photos & preview image
```
