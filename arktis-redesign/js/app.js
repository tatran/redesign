/* ==========================================================================
   ARKTIS s.r.o. — Interactive Application Engine
   Handles:
   - Quad-lingual i18n (SK, DE, EN, HU)
   - Light + Dark Theme with OS Detection & Persistence
   - 16-Category HVAC/R Product Catalog Search & Filtering
   - Cooling Capacity & Refrigerant Piping Sizing Calculator
   - 15-Point Engineering Support Checklist Renderer
   - Legacy Controller Manual Finder (Carel, Dixell, Elreha, Tecnologic, Hansa)
   - One-Click Inquiry Pre-fill & Contact Form
   ========================================================================== */

(function () {
  "use strict";

  let currentLang = localStorage.getItem("arktis_lang") || "sk";
  let currentCategoryFilter = "all";
  let currentManualBrand = "all";

  const langFlags = {
    sk: "🇸🇰 SK",
    de: "🇩🇪 DE",
    en: "🇬🇧 EN",
    hu: "🇭🇺 HU"
  };

  // =========================================================================
  // 1. THEME MANAGEMENT (LIGHT / DARK)
  // =========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem("arktis_theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    applyTheme(initialTheme);

    const toggleBtn = document.getElementById("themeToggleBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        localStorage.setItem("arktis_theme", next);
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const toggleBtn = document.getElementById("themeToggleBtn");
    if (!toggleBtn) return;
    if (theme === "dark") {
      toggleBtn.innerHTML = `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    } else {
      toggleBtn.innerHTML = `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
  }

  // =========================================================================
  // 2. LANGUAGE SWITCHER (SK, DE, EN, HU)
  // =========================================================================
  function initLanguageSwitcher() {
    const langBtn = document.getElementById("langBtn");
    const langMenu = document.getElementById("langMenu");
    const langItems = document.querySelectorAll(".lang-item");

    if (langBtn && langMenu) {
      langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        langMenu.classList.toggle("open");
      });

      document.addEventListener("click", () => {
        langMenu.classList.remove("open");
      });
    }

    langItems.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selected = btn.getAttribute("data-lang");
        if (selected && window.ARKTIS_I18N[selected]) {
          currentLang = selected;
          localStorage.setItem("arktis_lang", currentLang);
          applyTranslations();
          langMenu.classList.remove("open");
        }
      });
    });

    applyTranslations();
  }

  function applyTranslations() {
    const dict = window.ARKTIS_I18N[currentLang] || window.ARKTIS_I18N.sk;
    document.documentElement.lang = currentLang;
    document.title = dict.pageTitle;

    const currentLabel = document.getElementById("langCurrentLabel");
    if (currentLabel) {
      currentLabel.textContent = langFlags[currentLang] || "🇸🇰 SK";
    }

    document.querySelectorAll(".lang-item").forEach((item) => {
      item.classList.toggle("active", item.getAttribute("data-lang") === currentLang);
    });

    // Translate text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    renderCatalog();
    renderSupportChecklist();
    renderManuals();
    updateCalculator();
  }

  // =========================================================================
  // 3. INTERACTIVE PRODUCT CATALOG (16 CATEGORIES)
  // =========================================================================
  function initCatalog() {
    const searchInput = document.getElementById("catalogSearchInput");
    const filterButtons = document.querySelectorAll("[data-cat-filter]");

    if (searchInput) {
      searchInput.addEventListener("input", () => {
        renderCatalog();
      });
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategoryFilter = btn.getAttribute("data-cat-filter") || "all";
        renderCatalog();
      });
    });
  }

  function renderCatalog() {
    const grid = document.getElementById("catalogGrid");
    if (!grid || !window.ARKTIS_CATALOG) return;

    const dict = window.ARKTIS_I18N[currentLang] || window.ARKTIS_I18N.sk;
    const searchInput = document.getElementById("catalogSearchInput");
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();

    const filtered = window.ARKTIS_CATALOG.filter((item) => {
      if (currentCategoryFilter !== "all" && item.group !== currentCategoryFilter) {
        return false;
      }
      if (!query) return true;

      const titleStr = (item.title[currentLang] || item.title.sk).toLowerCase();
      const subStr = (item.subitems[currentLang] || item.subitems.sk).join(" ").toLowerCase();
      const brandStr = item.brands.join(" ").toLowerCase();
      return titleStr.includes(query) || subStr.includes(query) || brandStr.includes(query);
    });

    grid.innerHTML = filtered
      .map((item) => {
        const title = item.title[currentLang] || item.title.sk;
        const subs = item.subitems[currentLang] || item.subitems.sk;
        const groupBadge = (dict.groupLabels && dict.groupLabels[item.group]) || item.group;

        const subsHtml = subs
          .map((s) => `<li class="product-subitem">${s}</li>`)
          .join("");

        const brandsHtml = item.brands
          .map((b) => `<span class="brand-chip">${b}</span>`)
          .join("");

        return `
          <article class="product-card">
            <div>
              <div class="product-card-top">
                <div class="product-icon-wrap">
                  <div class="product-icon" aria-hidden="true">${item.icon}</div>
                  <h3>${title}</h3>
                </div>
                <span class="product-group-badge">${groupBadge}</span>
              </div>
              <ul class="product-sublist">
                ${subsHtml}
              </ul>
            </div>
            <div>
              <div class="product-brands">
                ${brandsHtml}
              </div>
              <div class="product-card-footer">
                <button type="button" class="inquire-item-btn" data-inquire-title="${title.replace(/"/g, "&quot;")}" data-inquire-brands="${item.brands.slice(0, 4).join(", ")}">
                  <span>${dict.btnInquireItem}</span>
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    // Attach click events to inquire buttons
    grid.querySelectorAll(".inquire-item-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const catTitle = btn.getAttribute("data-inquire-title");
        const brands = btn.getAttribute("data-inquire-brands");
        prefillInquiry(
          "part",
          `Dopyt na kategóriu: ${catTitle} (Značky: ${brands}) — Prosím o overenie dostupnosti a veľkoobchodnej ceny pre: `
        );
      });
    });
  }

  // =========================================================================
  // 4. COOLING CAPACITY & REFRIGERANT SIZING CALCULATOR
  // =========================================================================
  function initCalculator() {
    const appSelect = document.getElementById("calcAppType");
    const volRange = document.getElementById("calcVolumeRange");
    const insSelect = document.getElementById("calcInsulation");
    const refSelect = document.getElementById("calcRefrigerant");
    const sendBtn = document.getElementById("calcSendBtn");

    [appSelect, volRange, insSelect, refSelect].forEach((el) => {
      if (el) {
        el.addEventListener("input", updateCalculator);
        el.addEventListener("change", updateCalculator);
      }
    });

    if (sendBtn) {
      sendBtn.addEventListener("click", () => {
        const kwText = document.getElementById("calcKwOutput")?.textContent || "";
        const compText = document.getElementById("calcOutComp")?.textContent || "";
        const pipeText = document.getElementById("calcOutPipe")?.textContent || "";
        const vol = volRange ? volRange.value : "25";
        const appName = appSelect ? appSelect.options[appSelect.selectedIndex].text : "";
        const refName = refSelect ? refSelect.options[refSelect.selectedIndex].text : "";

        const summary = `[Kalkulátor výkonu ARKTIS]\n- Aplikácia: ${appName}\n- Objem boxu: ${vol} m³\n- Preferované chladivo: ${refName}\n- Odhadovaný chladiaci výkon Q₀: ${kwText}\n- Odporúčaný kompresor: ${compText}\n- Orientačné Cu potrubie: ${pipeText}\n\nProsím o presný prepočet tepelnej záťaže a cenovú ponuku kompletnej zostavy.`;
        prefillInquiry("calc", summary);
      });
    }

    updateCalculator();
  }

  function updateCalculator() {
    const appSelect = document.getElementById("calcAppType");
    const volRange = document.getElementById("calcVolumeRange");
    const volValueDisplay = document.getElementById("calcVolumeVal");
    const insSelect = document.getElementById("calcInsulation");
    const refSelect = document.getElementById("calcRefrigerant");

    if (!appSelect || !volRange || !insSelect || !refSelect) return;

    const volume = parseFloat(volRange.value) || 25;
    if (volValueDisplay) {
      volValueDisplay.textContent = `${volume} m³`;
    }

    const appType = appSelect.value;
    const insFactor = parseFloat(insSelect.value) || 1.0;

    // Specific cooling load calculation (W/m3) with non-linear volume scaling
    let baseWPerM3 = 85;
    if (appType === "chiller") baseWPerM3 = 82;
    else if (appType === "freezer") baseWPerM3 = 115;
    else if (appType === "wine") baseWPerM3 = 58;
    else if (appType === "blast") baseWPerM3 = 175;

    // Scale factor (smaller rooms have higher surface-to-volume ratio)
    const scaleFactor = Math.pow(volume / 20, -0.18);
    const totalWatts = volume * baseWPerM3 * scaleFactor * insFactor;
    const kw = Math.max(0.6, totalWatts / 1000);

    const kwOutput = document.getElementById("calcKwOutput");
    if (kwOutput) {
      kwOutput.textContent = `${kw.toFixed(2)} kW`;
    }

    // Recommend compressor family
    let compRec = "";
    if (kw < 2.2) {
      compRec = "Hermetický piestový (Embraco Aspera / Danfoss / Tecumseh)";
    } else if (kw < 7.5) {
      compRec = "Hermetický Scroll / Maneurop (Copeland Scroll / Danfoss)";
    } else {
      compRec = "Polohermetický piestový / skrutkový (Bitzer / Frascold / GEA Bock)";
    }

    // Recommend Cu pipe sizes (Suction / Liquid)
    let pipeRec = "";
    if (kw < 1.8) {
      pipeRec = "Cu Ø 10 mm (3/8\") sanie · Ø 6 mm (1/4\") kvapalina";
    } else if (kw < 4.5) {
      pipeRec = "Cu Ø 12–16 mm (1/2\"–5/8\") sanie · Ø 10 mm (3/8\") kvapalina";
    } else if (kw < 10) {
      pipeRec = "Cu Ø 18–22 mm (3/4\"–7/8\") sanie · Ø 12 mm (1/2\") kvapalina";
    } else {
      pipeRec = "Cu Ø 28–35 mm (1 1/8\"–1 3/8\") sanie · Ø 16 mm (5/8\") kvapalina";
    }

    const ctrlRec = kw < 3.0
      ? "Rozvádzač 230V + Dixell XR60C / Carel IR32"
      : "Chladiarenský rozvádzač 400V + Dixell XW270L / Carel Microchiller";

    const valveRec = kw < 6.0
      ? "Termostatický expanzný ventil Danfoss/Alco + Filterdehydrátor + Priezorník"
      : "Elektronický expanzný ventil (EEV) + Zberač chladiva Bitzer/Frigomec + Odlučovač oleja";

    const outComp = document.getElementById("calcOutComp");
    const outPipe = document.getElementById("calcOutPipe");
    const outCtrl = document.getElementById("calcOutCtrl");
    const outValve = document.getElementById("calcOutValve");

    if (outComp) outComp.textContent = compRec;
    if (outPipe) outPipe.textContent = pipeRec;
    if (outCtrl) outCtrl.textContent = ctrlRec;
    if (outValve) outValve.textContent = valveRec;
  }

  // =========================================================================
  // 5. SUPPORT 15-POINT CHECKLIST RENDERER
  // =========================================================================
  function renderSupportChecklist() {
    const container = document.getElementById("supportChecklistGrid");
    if (!container) return;
    const dict = window.ARKTIS_I18N[currentLang] || window.ARKTIS_I18N.sk;
    const items = dict.supItems || [];

    container.innerHTML = items
      .map(
        (text) => `
        <div class="checklist-item">
          <span class="check-icon">✔</span>
          <span>${text}</span>
        </div>
      `
      )
      .join("");
  }

  // =========================================================================
  // 6. LEGACY CONTROLLER MANUALS FINDER (CAREL, DIXELL, ELREHA, TECNOLOGIC, HANSA)
  // =========================================================================
  function initManuals() {
    const searchInput = document.getElementById("manualSearchInput");
    const brandPills = document.querySelectorAll("[data-manual-brand]");
    const autoAcBtn = document.getElementById("autoAcRequestBtn");

    if (searchInput) {
      searchInput.addEventListener("input", renderManuals);
    }

    brandPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        brandPills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        currentManualBrand = pill.getAttribute("data-manual-brand") || "all";
        renderManuals();
      });
    });

    if (autoAcBtn) {
      autoAcBtn.addEventListener("click", () => {
        prefillInquiry(
          "manual",
          "Žiadosť o informáciu o náplni chladiva a oleja do autoklimatizácie (model auta a rok výroby do 2008): "
        );
      });
    }
  }

  function renderManuals() {
    const grid = document.getElementById("manualsGrid");
    if (!grid || !window.ARKTIS_MANUALS) return;

    const dict = window.ARKTIS_I18N[currentLang] || window.ARKTIS_I18N.sk;
    const searchInput = document.getElementById("manualSearchInput");
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();

    const filtered = window.ARKTIS_MANUALS.filter((m) => {
      if (currentManualBrand !== "all" && m.brand.toLowerCase() !== currentManualBrand.toLowerCase()) {
        return false;
      }
      if (!query) return true;
      return (
        m.code.toLowerCase().includes(query) ||
        m.brand.toLowerCase().includes(query) ||
        m.type.toLowerCase().includes(query)
      );
    });

    grid.innerHTML = filtered
      .map(
        (m) => `
        <div class="manual-chip-card">
          <div>
            <div class="manual-brand">${m.brand}</div>
            <div class="manual-code">${m.code}</div>
          </div>
          <button type="button" class="manual-req-btn" data-manual-code="${m.brand} ${m.code}">
            📄 ${dict.manBtnRequest}
          </button>
        </div>
      `
      )
      .join("");

    grid.querySelectorAll(".manual-req-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const code = btn.getAttribute("data-manual-code");
        prefillInquiry(
          "manual",
          `Prosím o zaslanie archívneho návodu / schémy zapojenia pre regulátor: ${code}.`
        );
      });
    });
  }

  // =========================================================================
  // 7. CONTACT FORM & PREFILL HELPER
  // =========================================================================
  function prefillInquiry(type, messageText) {
    const contactSection = document.getElementById("kontakt");
    const topicSelect = document.getElementById("inquiryTopic");
    const msgBox = document.getElementById("inquiryMessage");

    if (topicSelect) {
      if (type === "calc") topicSelect.value = "calc";
      else if (type === "manual") topicSelect.value = "manual";
      else topicSelect.value = "part";
    }

    if (msgBox) {
      msgBox.value = messageText;
    }

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        if (msgBox) msgBox.focus();
      }, 650);
    }
  }

  function initContactForm() {
    const form = document.getElementById("arktisContactForm");
    const feedback = document.getElementById("formFeedback");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (feedback) {
          feedback.style.display = "block";
        }
      });
    }
  }

  // =========================================================================
  // 8. MOBILE NAVIGATION
  // =========================================================================
  function initMobileNav() {
    const toggle = document.getElementById("mobileNavToggle");
    const nav = document.getElementById("mainNav");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
      });
      nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("open");
        });
      });
    }
  }

  // Initialize on DOM Ready
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMobileNav();
    initCatalog();
    initCalculator();
    initManuals();
    initContactForm();
    initLanguageSwitcher();
  });
})();
