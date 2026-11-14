# SANAE – Modern QA & Software Testing Portal Redesign
**Built on the Lovable.dev "Expense It" Mobile-First PWA Architecture**  
Original Source: [https://sanae.sk/](https://sanae.sk/)  
Template Reference: [Lovable Expense It Template](https://lovable.dev/templates/apps/finance/expense-it-mobile-expense-reimbursement-template)

---

## 🎯 Concept & Design Synthesis

**SANAE** (`sanae.sk`) is Slovakia's premier Software Testing and Quality Assurance solutions company (Bratislava HQ, with branches in Ireland and the USA), an official **ISTQB® Gold Partner**, member of the **Robot Framework Foundation**, **Copado Robotic Testing** partner, and organizers of the renowned **SANAE Software Testing BEER & BEER.EX** community conferences.

This redesign reimagines SANAE's corporate web presence through the lens of Lovable.dev's **"Expense It"** mobile-first expense reimbursement template, transforming traditional B2B service pages into an **interactive, high-velocity QA Portal & PWA**:

| ExpenseIt Original Feature | SANAE QA Redesign Adaptation |
| :--- | :--- |
| **Mobile-First PWA Shell** | Dual-mode viewport: interactive smartphone simulator with Dynamic Island or responsive fullscreen desktop portal |
| **Camera-First Receipt Scanner** | **AI Requirements & Spec Scanner**: Snap, upload, or pick a spec to automatically extract test cases, QA effort, and automation feasibility |
| **Company Policy Engine** | **Pre-Release Quality Policy Gatekeeper**: Checks builds against 5 quality rules (zero Sev-1 blockers, >80% regression coverage, OWASP security) |
| **Expense & Reimbursement Tracker** | **Interactive QA Budget & ROI Calculator**: Live cost estimation, bugs caught, production cost saved, and projected net ROI |
| **Trips & Claims Grouping** | **Active QA Engagements & Sprints**: Track ongoing client projects (Tatra Banka, Emerson, Healthcare) with live pass-rate pills |
| **"Ask AI" Assistant** | **Ask SANAE AI Advisor**: Slide-over drawer answering questions about Robot Framework, Copado, and ISTQB compliance |
| **Persona Workflows** | **Executive Persona Switcher**: Tailors the dashboard for CTOs, QA Leads, or Product Managers |

---

## ✨ Interactive Features & Components

### 1. 📱 Dual Viewport Mode (Mobile App Simulator vs. Desktop Portal)
- **Mobile Mode (Default)**: Renders inside a sleek smartphone chassis complete with status bar (09:41, 5G, battery), dynamic island notch, and docked bottom navigation bar.
- **Portal Mode**: Expands with one click into a full-width responsive dashboard portal for desktop screens.

### 2. 📸 AI Requirements & Spec Scanner (Center Action Button)
- Directly mirrors ExpenseIt’s camera receipt scanning flow.
- Tap the center camera button or viewfinder to scan requirements.
- Choose between interactive presets (*Fintech Payment Gateway*, *Telehealth EHR*, *E-Commerce Checkout*, *Cloud ERP*).
- An animated laser scan runs and returns:
  - Generated Test Scenarios (Happy path, edge cases, negative tests)
  - Estimated QA Hours
  - Automation Feasibility Score (Robot Framework / Playwright)
  - One-click export to a formal QA proposal.

### 3. 🛡️ Pre-Release Policy Gatekeeper
- Validates 5 critical release criteria:
  1. *Zero Sev-1 Blocker Defects* (`0 Blocker - PASSED`)
  2. *Automated Regression Coverage* (`86.4% - PASSED`)
  3. *Multi-Device & Browser Matrix* (`14 Devices Verified - PASSED`)
  4. *OWASP Top 10 Security Scan* (`Clean Scan - PASSED`)
  5. *ISTQB Gold Lead Sign-off* (`Certified - PASSED`)

### 4. 🧮 Interactive QA Budget & ROI Calculator
- Sliders for project duration (weeks) and number of dedicated QA engineers.
- Select testing focus (*Automation Framework*, *Full-Cycle QA*, *Functional Manual*, *Security & Pen Test*) and engineer seniority.
- Computes total investment, estimated defects caught in QA, and production bug cost savings based on industry defect cost-amplification metrics.

### 5. 🤖 "Ask AI QA Advisor" Slide-Over Sheet
- Accessible via the top header or quick action chips.
- Interactive AI chat with pre-set prompt chips explaining:
  - *Copado vs. Robot Framework*
  - *SANAE’s ISTQB Gold compliance process*
  - *Typical QA rates and pricing models*

### 6. 🍺 BEER.EX & Community Spotlight
- Dedicated section for the annual **SANAE Software Testing BEER.EX** conference held at the Waterworks Museum in Bratislava.
- Partner logos: ISTQB Gold Partner, Robot Framework Foundation, Copado, and Aiviro.
- Client endorsements from **Tatra Banka** and **Emerson Network Power**.

---

## 📂 Project Structure

```text
sanae-redesign/
├── css/
│   └── style.css            # Lovable / shadcn-style dark/light design system
├── js/
│   └── app.js               # Application logic (tabs, AI scanner, calculator, persona switcher, AI chat)
├── images/                  # Official SANAE logos and partner accreditations
│   ├── sanae-logo.png
│   ├── istqb-gold-partner-logo.jpg
│   ├── rbtfrm1200_300-e1716898617705.png
│   ├── Copado-Logo-2.png
│   ├── aiviro-logo-v01-basic-fullcolour-RGB.png
│   └── cropped-services.jpg
├── favicon.svg              # Custom SANAE shield favicon
├── index.html               # Main application document
└── README.md                # Project documentation
```

---

## 🚀 How to Run & Preview

Open `index.html` directly in your browser, or spin up a local development server:

```powershell
cd C:\VS\AI\AI_School\sanae-redesign
python -m http.server 8081
```

Visit `http://localhost:8081` in your browser to experience the mobile simulation and desktop portal.
