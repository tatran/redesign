/* ==========================================================================
   REALE LANDSCAPE INC. — INTERACTIVE APPLICATION LOGIC
   Theme Toggle, Language Switcher, Hero Showcase, Estimator, Lightbox, FAQ
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const htmlEl = document.documentElement;

  /* --------------------------------------------------------------------------
     1. LIGHT / DARK THEME TOGGLE
     -------------------------------------------------------------------------- */
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("reale_theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    localStorage.setItem("reale_theme", theme);
  }
  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(current);
    });
  }

  /* --------------------------------------------------------------------------
     2. STICKY HEADER & MOBILE MENU
     -------------------------------------------------------------------------- */
  const siteHeader = document.getElementById("siteHeader");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    if (siteHeader) {
      siteHeader.classList.toggle("scrolled", window.scrollY > 24);
    }
  });

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --------------------------------------------------------------------------
     3. TRILINGUAL LOCALIZATION (EN / FR / IT)
     -------------------------------------------------------------------------- */
  const langBtns = document.querySelectorAll(".lang-btn");
  const urlParams = new URLSearchParams(window.location.search);
  let currentLang = urlParams.get("lang") || localStorage.getItem("reale_lang") || "en";
  if (!["en", "fr", "it"].includes(currentLang)) currentLang = "en";

  function applyLanguage(lang) {
    currentLang = lang;
    htmlEl.setAttribute("lang", lang);
    localStorage.setItem("reale_lang", lang);

    langBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    const dict = (window.REALE_TRANSLATIONS && window.REALE_TRANSLATIONS[lang]) || window.REALE_TRANSLATIONS.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    updateEstimator();
  }

  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang);
    });
  });

  /* --------------------------------------------------------------------------
     4. HERO SHOWCASE SLIDER
     -------------------------------------------------------------------------- */
  const heroSlides = [
    {
      src: "images/hero-3.jpg",
      title: "Verano Interlocking Paver & Fire Feature Courtyard",
      sub: "Custom Hardscape & Outdoor Living · Kelowna, BC"
    },
    {
      src: "images/hero-1.jpg",
      title: "Custom Cedar Pergola & Slate Tile Sanctuary",
      sub: "Architectural Carpentry & Stonework · Okanagan Valley"
    },
    {
      src: "images/hero-4.jpg",
      title: "Okanagan Lakefront Turf & Timber Staircase",
      sub: "Lakeview Slope Grading & Build · Kelowna Waterfront"
    },
    {
      src: "images/hero-2.jpg",
      title: "Natural Flagstone Walkway & Boxwood Border",
      sub: "Front Yard Elegance & Rock Detailing · Kelowna, BC"
    }
  ];

  const heroMainImg = document.getElementById("heroMainImg");
  const heroSlideTitle = document.getElementById("heroSlideTitle");
  const heroSlideSub = document.getElementById("heroSlideSub");
  const heroThumbBtns = document.querySelectorAll(".hero-thumb-btn");
  let activeSlideIdx = 0;

  function setHeroSlide(index) {
    activeSlideIdx = index;
    const slide = heroSlides[index];
    if (heroMainImg && slide) {
      heroMainImg.src = slide.src;
      if (heroSlideTitle) heroSlideTitle.textContent = slide.title;
      if (heroSlideSub) heroSlideSub.textContent = slide.sub;
    }
    heroThumbBtns.forEach((btn, idx) => {
      btn.classList.toggle("active", idx === index);
    });
  }

  heroThumbBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => setHeroSlide(idx));
  });

  setInterval(() => {
    setHeroSlide((activeSlideIdx + 1) % heroSlides.length);
  }, 6500);

  /* --------------------------------------------------------------------------
     5. INTERACTIVE OKANAGAN LANDSCAPE & HARDSCAPE ESTIMATOR
     -------------------------------------------------------------------------- */
  const scopePills = document.querySelectorAll("#scopePills .choice-pill");
  const terrainPills = document.querySelectorAll("#terrainPills .choice-pill");
  const areaSlider = document.getElementById("areaSlider");
  const areaReadout = document.getElementById("areaReadout");
  const extraChecks = document.querySelectorAll(".extra-input");

  const calcPriceRange = document.getElementById("calcPriceRange");
  const metricAreaVal = document.getElementById("metricAreaVal");
  const metricTonVal = document.getElementById("metricTonVal");
  const metricTimeVal = document.getElementById("metricTimeVal");
  const calcTransferBtn = document.getElementById("calcTransferBtn");

  let selectedScope = "patio";
  let selectedTerrain = "flat";

  const scopeRates = {
    patio: { ratePerSqFt: 24, tonFactor: 0.022, daysPer500: 3.5, label: "Paver / Flagstone Patio & Walkway" },
    wall: { ratePerSqFt: 32, tonFactor: 0.035, daysPer500: 4.5, label: "Retaining Wall & Slope Terracing" },
    fullbuild: { ratePerSqFt: 16, tonFactor: 0.018, daysPer500: 4.0, label: "Complete Yard Design & Build" },
    irrigation: { ratePerSqFt: 7.5, tonFactor: 0.008, daysPer500: 2.0, label: "Irrigation & Grounds Refresh" }
  };

  const terrainMultipliers = {
    flat: { mult: 1.0, label: "Flat / Easy Access" },
    sloped: { mult: 1.18, label: "Moderate Slope" },
    lakeview: { mult: 1.35, label: "Steep / Lakeview Hillside" }
  };

  function updateEstimator() {
    if (!areaSlider) return;
    const sqFt = parseInt(areaSlider.value, 10) || 650;
    const sqM = Math.round(sqFt * 0.0929);

    if (areaReadout) {
      areaReadout.textContent = `${sqFt.toLocaleString()} sq.ft (${sqM} m²)`;
    }

    const scopeCfg = scopeRates[selectedScope] || scopeRates.patio;
    const terrainCfg = terrainMultipliers[selectedTerrain] || terrainMultipliers.flat;

    let baseCost = sqFt * scopeCfg.ratePerSqFt * terrainCfg.mult;
    let extraCost = 0;
    let extraDays = 0;

    extraChecks.forEach((chk) => {
      if (chk.checked) {
        extraCost += parseInt(chk.dataset.cost || "0", 10);
        extraDays += parseFloat(chk.dataset.days || "0");
      }
    });

    const totalMid = baseCost + extraCost;
    const lowEst = Math.round((totalMid * 0.9) / 100) * 100;
    const highEst = Math.round((totalMid * 1.12) / 100) * 100;

    const estTons = Math.max(2, Math.round(sqFt * scopeCfg.tonFactor * terrainCfg.mult));
    const estDaysMin = Math.max(1, Math.round((sqFt / 500) * scopeCfg.daysPer500 * terrainCfg.mult + extraDays));
    const estDaysMax = estDaysMin + 2;

    if (calcPriceRange) {
      calcPriceRange.textContent = `$${lowEst.toLocaleString()} – $${highEst.toLocaleString()}`;
    }
    if (metricAreaVal) {
      metricAreaVal.textContent = `${sqFt.toLocaleString()} sq.ft (${sqM} m²)`;
    }
    if (metricTonVal) {
      metricTonVal.textContent = `~${estTons} tonnes (Okanagan rock / road-crush)`;
    }
    if (metricTimeVal) {
      metricTimeVal.textContent = `${estDaysMin} – ${estDaysMax} working days`;
    }
  }

  scopePills.forEach((pill) => {
    pill.addEventListener("click", () => {
      scopePills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      selectedScope = pill.dataset.scope;
      updateEstimator();
    });
  });

  terrainPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      terrainPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      selectedTerrain = pill.dataset.terrain;
      updateEstimator();
    });
  });

  if (areaSlider) {
    areaSlider.addEventListener("input", updateEstimator);
  }

  extraChecks.forEach((chk) => {
    chk.addEventListener("change", updateEstimator);
  });

  if (calcTransferBtn) {
    calcTransferBtn.addEventListener("click", () => {
      const sqFt = areaSlider ? areaSlider.value : "650";
      const scopeCfg = scopeRates[selectedScope] || scopeRates.patio;
      const terrainCfg = terrainMultipliers[selectedTerrain] || terrainMultipliers.flat;
      const selectedExtras = [];
      extraChecks.forEach((chk) => {
        if (chk.checked) {
          const span = chk.parentElement.querySelector("span");
          if (span) selectedExtras.push(span.textContent.trim());
        }
      });

      const msgField = document.getElementById("quoteMessage");
      const serviceSelect = document.getElementById("quoteService");
      if (serviceSelect) {
        if (selectedScope === "patio" || selectedScope === "wall") serviceSelect.value = "Hardscaping & Retaining Walls";
        else if (selectedScope === "fullbuild") serviceSelect.value = "Complete Landscape Design & Build";
        else serviceSelect.value = "Irrigation & Grounds Maintenance";
      }

      if (msgField && calcPriceRange) {
        msgField.value =
          `[Okanagan Project Estimator Summary]\n` +
          `• Primary Scope: ${scopeCfg.label}\n` +
          `• Footprint: ${sqFt} sq.ft\n` +
          `• Site Terrain: ${terrainCfg.label}\n` +
          `• Custom Add-Ons: ${selectedExtras.length ? selectedExtras.join(", ") : "None selected"}\n` +
          `• Ballpark Estimate: ${calcPriceRange.textContent} CAD\n\n` +
          `Hello Angelo & Reale Landscape team, I would like to schedule an on-site walkthrough in Kelowna for this project.`;
      }

      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  /* --------------------------------------------------------------------------
     6. PORTFOLIO FILTERING & LIGHTBOX MODAL
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDesc = document.getElementById("lightboxDesc");
  const lightboxClose = document.getElementById("lightboxClose");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      galleryItems.forEach((item) => {
        const cats = item.dataset.category || "";
        if (filter === "all" || cats.includes(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const title = item.querySelector("h3");
      const desc = item.querySelector("p");
      if (lightbox && img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        if (lightboxTitle && title) lightboxTitle.textContent = title.textContent;
        if (lightboxDesc && desc) lightboxDesc.textContent = desc.textContent;
        lightbox.classList.add("open");
      }
    });
  });

  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener("click", () => lightbox.classList.remove("open"));
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.classList.remove("open");
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox && lightbox.classList.contains("open")) {
      lightbox.classList.remove("open");
    }
  });

  /* --------------------------------------------------------------------------
     7. FAQ ACCORDION
     -------------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    if (btn) {
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        faqItems.forEach((other) => other.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      });
    }
  });

  /* --------------------------------------------------------------------------
     8. QUOTE FORM SUBMISSION
     -------------------------------------------------------------------------- */
  const quoteForm = document.getElementById("quoteForm");
  const formStatus = document.getElementById("formStatus");

  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (formStatus) {
        formStatus.style.display = "block";
      }
      quoteForm.reset();
    });
  }

  // Initialize language & estimator on load
  applyLanguage(currentLang);
});
