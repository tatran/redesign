/* ==========================================================================
   FEROLL GRASS s.r.o. — Interactive Application Logic
   Features: Multilingual Switcher (SK/EN/HU), Light+Dark Mode, Turf Calculator,
             Filterable Portfolio Lightbox, FAQ Accordion, Quote Form
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_LANG_KEY = "feroll_lang";
  const STORAGE_THEME_KEY = "feroll_theme";

  let currentLang = "sk";
  let currentCalcMode = "turnkey"; // 'rolls', 'laying', 'turnkey'

  /* ------------------------------------------------------------------------
     1. LANGUAGE SWITCHER (SK / EN / HU)
     ------------------------------------------------------------------------ */
  function detectInitialLang() {
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get("lang");
    if (queryLang && window.FEROLL_TRANSLATIONS[queryLang]) {
      return queryLang;
    }
    const saved = localStorage.getItem(STORAGE_LANG_KEY);
    if (saved && window.FEROLL_TRANSLATIONS[saved]) {
      return saved;
    }
    return "sk";
  }

  function applyLanguage(lang) {
    if (!window.FEROLL_TRANSLATIONS || !window.FEROLL_TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_LANG_KEY, lang);
    document.documentElement.lang = lang;

    const dict = window.FEROLL_TRANSLATIONS[lang];

    if (dict.metaTitle) document.title = dict.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.metaDesc) {
      metaDesc.setAttribute("content", dict.metaDesc);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    updateCalculator();
  }

  /* ------------------------------------------------------------------------
     2. THEME SWITCHER (LIGHT + DARK)
     ------------------------------------------------------------------------ */
  function detectInitialTheme() {
    const saved = localStorage.getItem(STORAGE_THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME_KEY, theme);
    const toggleBtn = document.getElementById("themeToggle");
    if (toggleBtn) {
      toggleBtn.innerHTML =
        theme === "dark"
          ? '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
          : '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    }
  }

  /* ------------------------------------------------------------------------
     3. TURF ROLL & LOGISTICS CALCULATOR
     ------------------------------------------------------------------------ */
  function updateCalculator() {
    const slider = document.getElementById("calcAreaSlider");
    if (!slider) return;

    const area = parseInt(slider.value, 10) || 200;
    const areaBadge = document.getElementById("calcAreaDisplay");
    if (areaBadge) areaBadge.textContent = area + " m²";

    // 1 roll = 1 m2 + 5% cutting reserve
    const rollsWithReserve = Math.ceil(area * 1.05);
    // Average 20 kg per roll
    const weightKg = rollsWithReserve * 20;
    const weightDisplay =
      weightKg >= 1000
        ? (weightKg / 1000).toFixed(1).replace(".", ",") + " t"
        : weightKg + " kg";

    // Approx 50 m2 per EUR pallet
    const pallets = Math.max(1, Math.ceil(rollsWithReserve / 50));

    // Estimated installation duration
    let daysText = "1 deň";
    if (currentLang === "en") daysText = "1 day";
    if (currentLang === "hu") daysText = "1 nap";

    if (currentCalcMode === "rolls") {
      if (currentLang === "sk") daysText = "Odber ihneď";
      if (currentLang === "en") daysText = "Same-day pickup";
      if (currentLang === "hu") daysText = "Azonnali átvétel";
    } else if (currentCalcMode === "laying") {
      const days = Math.max(1, Math.ceil(area / 350));
      if (currentLang === "sk") daysText = days === 1 ? "1 deň" : days + " dni";
      if (currentLang === "en") daysText = days === 1 ? "1 day" : days + " days";
      if (currentLang === "hu") daysText = days + " nap";
    } else {
      const days = Math.max(1, Math.ceil(area / 220));
      if (currentLang === "sk") daysText = days === 1 ? "1 – 2 dni" : days + " – " + (days + 1) + " dni";
      if (currentLang === "en") daysText = days === 1 ? "1 – 2 days" : days + " – " + (days + 1) + " days";
      if (currentLang === "hu") daysText = days === 1 ? "1 – 2 nap" : days + " – " + (days + 1) + " nap";
    }

    const elRolls = document.getElementById("resRollsVal");
    const elWeight = document.getElementById("resWeightVal");
    const elPallets = document.getElementById("resPalletsVal");
    const elTime = document.getElementById("resTimeVal");

    if (elRolls) elRolls.textContent = rollsWithReserve + " ks";
    if (currentLang === "en" && elRolls) elRolls.textContent = rollsWithReserve + " rolls";
    if (currentLang === "hu" && elRolls) elRolls.textContent = rollsWithReserve + " db";

    if (elWeight) elWeight.textContent = weightDisplay;
    if (elPallets) elPallets.textContent = pallets + " EUR";
    if (elTime) elTime.textContent = daysText;
  }

  function transferCalculatorToForm() {
    const slider = document.getElementById("calcAreaSlider");
    const area = slider ? parseInt(slider.value, 10) : 200;
    const rolls = Math.ceil(area * 1.05);
    const pallets = Math.max(1, Math.ceil(rolls / 50));

    const extra1 = document.getElementById("extraEdging")?.checked;
    const extra2 = document.getElementById("extraFertilizer")?.checked;
    const extra3 = document.getElementById("extraDelivery")?.checked;

    let summary = "";
    if (currentLang === "sk") {
      const modeMap = {
        rolls: "Len odber trávnych roliek",
        laying: "Dodanie roliek + odborná pokládka",
        turnkey: "Kompletná realizácia s úpravou terénu"
      };
      const extras = [];
      if (extra1) extras.push("neviditeľné obrubníky");
      if (extra2) extras.push("štartovacie hnojivo");
      if (extra3) extras.push("doprava do 3,5 t");
      summary = `Rozloha trávnika: ${area} m² (${rolls} roliek s 5 % rezervou, cca ${pallets} paliet).\nRozsah prác: ${modeMap[currentCalcMode]}.\nDoplnky: ${extras.length ? extras.join(", ") : "bez doplnkov"}.\nProsím o vypracovanie orientačnej cenovej ponuky.`;
    } else if (currentLang === "en") {
      const modeMap = {
        rolls: "Turf rolls supply only",
        laying: "Turf rolls + professional laying",
        turnkey: "Turnkey lawn with ground preparation"
      };
      const extras = [];
      if (extra1) extras.push("hidden edging");
      if (extra2) extras.push("starter fertilizer");
      if (extra3) extras.push("3.5 t truck delivery");
      summary = `Lawn Area: ${area} m² (${rolls} rolls incl. 5% buffer, approx. ${pallets} pallets).\nScope: ${modeMap[currentCalcMode]}.\nExtras: ${extras.length ? extras.join(", ") : "none"}.\nPlease send me a price quote.`;
    } else {
      const modeMap = {
        rolls: "Csak gyeptekercsek átvétele",
        laying: "Gyeptekercsek + szakszerű fektetés",
        turnkey: "Kulcsrakész kivitelezés tereprendezéssel"
      };
      const extras = [];
      if (extra1) extras.push("rejtett szegély");
      if (extra2) extras.push("indító műtrágya");
      if (extra3) extras.push("kiszállítás 3,5 t teherautóval");
      summary = `Gyepfelület: ${area} m² (${rolls} tekercs 5% ráhagyással, kb. ${pallets} raklap).\nKivitelezés: ${modeMap[currentCalcMode]}.\nKiegészítők: ${extras.length ? extras.join(", ") : "nincs"}.\nKérem, küldjenek árajánlatot.`;
    }

    const msgField = document.getElementById("inquiryMessage");
    if (msgField) {
      msgField.value = summary;
    }
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => msgField?.focus(), 600);
    }
  }

  /* ------------------------------------------------------------------------
     4. GALLERY FILTER & LIGHTBOX
     ------------------------------------------------------------------------ */
  function initGallery() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".gallery-card");

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-filter");
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        cards.forEach((card) => {
          const itemCat = card.getAttribute("data-category");
          if (cat === "all" || itemCat === cat) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });

    const lightbox = document.getElementById("lightboxModal");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxClose = document.getElementById("lightboxClose");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const img = card.querySelector("img");
        const titleEl = card.querySelector("h4");
        if (img && lightbox && lightboxImg) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          if (lightboxTitle && titleEl) {
            lightboxTitle.textContent = titleEl.textContent;
          }
          lightbox.classList.add("open");
        }
      });
    });

    function closeLightbox() {
      lightbox?.classList.remove("open");
    }

    lightboxClose?.addEventListener("click", closeLightbox);
    lightbox?.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* ------------------------------------------------------------------------
     5. FAQ ACCORDION
     ------------------------------------------------------------------------ */
  function initFaq() {
    const items = document.querySelectorAll(".faq-item");
    items.forEach((item) => {
      const btn = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      btn?.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        items.forEach((other) => {
          other.classList.remove("open");
          const otherAns = other.querySelector(".faq-answer");
          if (otherAns) otherAns.style.maxHeight = null;
        });
        if (!isOpen && answer) {
          item.classList.add("open");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. CONTACT FORM SUBMISSION
     ------------------------------------------------------------------------ */
  function initContactForm() {
    const form = document.getElementById("quoteForm");
    const statusBox = document.getElementById("formStatus");

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("inquiryName")?.value.trim() || "";
      const phone = document.getElementById("inquiryPhone")?.value.trim() || "";
      const email = document.getElementById("inquiryEmail")?.value.trim() || "";
      const loc = document.getElementById("inquiryLocation")?.value.trim() || "";
      const msg = document.getElementById("inquiryMessage")?.value.trim() || "";

      const subject = encodeURIComponent(`Dopyt na rolovaný trávnik – ${name} (${loc})`);
      const body = encodeURIComponent(
        `Meno: ${name}\nTelefón: ${phone}\nE-mail: ${email}\nLokalita: ${loc}\n\nŠpecifikácia:\n${msg}`
      );

      if (statusBox) {
        statusBox.style.display = "block";
      }
      window.location.href = `mailto:gyufe@azet.sk?subject=${subject}&body=${body}`;
    });
  }

  /* ------------------------------------------------------------------------
     7. INITIALIZE ALL
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    // Theme
    applyTheme(detectInitialTheme());
    document.getElementById("themeToggle")?.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });

    // Language
    applyLanguage(detectInitialLang());
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang) applyLanguage(lang);
      });
    });

    // Mobile Menu
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.getElementById("navLinks");
    mobileBtn?.addEventListener("click", () => {
      navLinks?.classList.toggle("open");
    });
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks?.classList.remove("open");
      });
    });

    // Calculator
    const slider = document.getElementById("calcAreaSlider");
    slider?.addEventListener("input", updateCalculator);

    document.querySelectorAll(".calc-option-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".calc-option-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentCalcMode = btn.getAttribute("data-mode") || "turnkey";
        updateCalculator();
      });
    });

    document.querySelectorAll(".calc-check-item input").forEach((chk) => {
      chk.addEventListener("change", updateCalculator);
    });

    document.getElementById("calcTransferBtn")?.addEventListener("click", transferCalculatorToForm);

    updateCalculator();
    initGallery();
    initFaq();
    initContactForm();
  });
})();
