/* ==========================================================================
   AZIMUT ES, s.r.o. — Interactive Portal Engine (i18n, Theme, Catalog, Calc)
   ========================================================================== */

(function () {
  "use strict";

  let currentLang = localStorage.getItem("azimut_lang") || "sk";
  let currentTheme = localStorage.getItem("azimut_theme") || "light";
  let currentFilter = "all";

  function applyTheme(theme) {
    currentTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("azimut_theme", currentTheme);
    const iconEl = document.getElementById("theme-icon");
    if (iconEl) {
      iconEl.textContent = currentTheme === "dark" ? "☀️" : "🌙";
    }
  }

  function applyLanguage(lang) {
    if (!window.AZIMUT_TRANSLATIONS[lang]) lang = "sk";
    currentLang = lang;
    localStorage.setItem("azimut_lang", currentLang);
    document.documentElement.setAttribute("lang", currentLang);

    const dict = window.AZIMUT_TRANSLATIONS[currentLang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });

    renderProducts(currentFilter);
    calculatePowerAndRental();
  }

  function renderProducts(filter) {
    currentFilter = filter || "all";
    const grid = document.getElementById("catalog-grid");
    if (!grid || !window.AZIMUT_PRODUCTS) return;

    const dict = window.AZIMUT_TRANSLATIONS[currentLang];
    const filtered = window.AZIMUT_PRODUCTS.filter((item) => {
      if (currentFilter === "all") return true;
      return item.phase === currentFilter;
    });

    grid.innerHTML = filtered
      .map(
        (p) => `
      <article class="product-card">
        <div class="product-img-wrap">
          <span class="product-Voltage-badge">${p.voltage}</span>
          <img src="${p.image}" alt="${p.model}" loading="lazy" />
          <span class="product-gift-badge">${p.bonus[currentLang]}</span>
        </div>
        <div class="product-body">
          <h3 class="product-title">Elektrocentrála ${p.model}</h3>
          <p class="product-sub">${p.tech[currentLang]}</p>
          <ul class="product-specs">
            <li><span>${dict.spec_voltage}</span> <strong>${p.voltage}</strong></li>
            <li><span>${dict.spec_power}</span> <strong>${p.powerMax}</strong></li>
            <li><span>${dict.spec_tank}</span> <strong>${p.tank} (${p.consumption})</strong></li>
            <li><span>${dict.spec_weight}</span> <strong>${p.weight} · ${p.dimensions}</strong></li>
          </ul>
          <div class="product-price-box">
            <div>
              <span class="price-excl">${p.priceExcl} €</span>
              <span class="price-incl">${dict.price_excl_label}</span>
            </div>
            <div class="price-incl">${p.priceIncl} € ${dict.price_incl_label}</div>
          </div>
          <button type="button" class="btn btn-primary btn-sm select-model-btn" data-model="${p.model}" data-price="${p.priceExcl} €">
            ⚡ ${dict.btn_order_model}
          </button>
        </div>
      </article>
    `
      )
      .join("");

    grid.querySelectorAll(".select-model-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const model = btn.getAttribute("data-model");
        const price = btn.getAttribute("data-price");
        prefillContactForm(
          `Akciová elektrocentrála ${model} (${price} bez DPH)`,
          `Dobrý deň,\n\nmám záujem o akciovú elektrocentrálu ${model} (${price} bez DPH + 5 l akrylátový benzín ako darček).\nProsím o informáciu o aktuálnej dostupnosti a možnosti odberu / doručenia.`
        );
      });
    });
  }

  function calculatePowerAndRental() {
    const modeEl = document.getElementById("calc-mode");
    const appEl = document.getElementById("calc-app");
    const kwEl = document.getElementById("calc-kw");
    const phaseEl = document.getElementById("calc-phase");
    const daysEl = document.getElementById("calc-days");

    if (!modeEl || !appEl || !kwEl || !phaseEl || !daysEl) return;

    const mode = modeEl.value;
    const headroomFactor = parseFloat(appEl.value) || 1.25;
    const rawKw = Math.max(1, parseFloat(kwEl.value) || 5);
    const phase = phaseEl.value;
    const days = Math.max(1, parseInt(daysEl.value, 10) || 3);

    // Apparent power kVA calculation (assuming cos phi = 0.8)
    const recommendedKw = +(rawKw * headroomFactor).toFixed(1);
    const recommendedKva = +(recommendedKw / 0.8).toFixed(1);

    let categoryText = "";
    let budgetText = "";

    if (mode === "rent") {
      // Rental estimation
      let dailyRate = 45;
      if (recommendedKva > 15 && recommendedKva <= 40) dailyRate = 75;
      else if (recommendedKva > 40 && recommendedKva <= 100) dailyRate = 120;
      else if (recommendedKva > 100) dailyRate = 195;

      const discount = days >= 7 ? 0.85 : 1.0;
      const totalRent = Math.round(dailyRate * days * discount);

      categoryText =
        recommendedKva <= 15
          ? "Mobilný agregát Azimut Rental (3 – 15 kVA)"
          : `Stacionárny / Prívesný Dieselagregát (${Math.ceil(recommendedKva)} kVA)`;
      budgetText = `Prenájom na ${days} dní (individuálna ponuka s dovozom)`;
    } else {
      // Purchase / Turnkey recommendation
      if (phase === "1f" && recommendedKw <= 3.0) {
        categoryText = "CGM 3000SE (377 €) alebo Invertor CGM 3300IE (824 €)";
        budgetText = "od 377 € do 824 € bez DPH (skladom)";
      } else if (recommendedKva <= 9.5 && phase !== "3f_ats") {
        categoryText = "CGM 9000STE (9,5 kVA · 694 € bez DPH)";
        budgetText = "694 € bez DPH + 5 l benzín darček";
      } else if (recommendedKva <= 12.5 && phase !== "3f_ats") {
        categoryText = "CGM C13000TE Briggs & Stratton (12 kVA · 2 588 €)";
        budgetText = "2 588 € bez DPH + 5 l benzín darček";
      } else {
        categoryText = `Priemyselný dieselagregát ELCOS / HIMOINSA / CGM (${Math.ceil(recommendedKva)} kVA) + ATS`;
        budgetText = "Projekt na kľúč (individuálna kalkulácia)";
      }
    }

    const kpiKva = document.getElementById("res-kva");
    const kpiKw = document.getElementById("res-kw");
    const kpiModel = document.getElementById("res-model");
    const kpiBudget = document.getElementById("res-budget");
    const recNote = document.getElementById("res-note");

    if (kpiKva) kpiKva.textContent = `${recommendedKva} kVA`;
    if (kpiKw) kpiKw.textContent = `${recommendedKw} kW`;
    if (kpiModel) kpiModel.textContent = categoryText;
    if (kpiBudget) kpiBudget.textContent = budgetText;

    if (recNote) {
      recNote.innerHTML = `<strong>⚡ Odporúčanie Azimut ES:</strong> Pre zadaný príkon <strong>${rawKw} kW</strong> odporúčame záložný zdroj s výkonom min. <strong>${recommendedKva} kVA (${recommendedKw} kW)</strong>: <em>${categoryText}</em>.`;
    }
  }

  function prefillContactForm(subject, message) {
    const subjInput = document.getElementById("contact-subject");
    const msgInput = document.getElementById("contact-message");
    if (subjInput) subjInput.value = subject;
    if (msgInput) msgInput.value = message;

    const contactSec = document.getElementById("contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        applyTheme(currentTheme === "dark" ? "light" : "dark");
      });
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });

    const mobileBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links");
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
      navLinks.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => navLinks.classList.remove("open"));
      });
    }

    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderProducts(btn.getAttribute("data-filter"));
      });
    });

    ["calc-mode", "calc-app", "calc-kw", "calc-phase", "calc-days"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", calculatePowerAndRental);
        el.addEventListener("change", calculatePowerAndRental);
      }
    });

    const transferBtn = document.getElementById("calc-transfer-btn");
    if (transferBtn) {
      transferBtn.addEventListener("click", () => {
        const mode = document.getElementById("calc-mode").value;
        const kw = document.getElementById("calc-kw").value;
        const kvaText = document.getElementById("res-kva").textContent;
        const modelText = document.getElementById("res-model").textContent;
        const days = document.getElementById("calc-days").value;

        const modeLabel = mode === "rent" ? `Prenájom generátora (${days} dní)` : "Kúpa / Projekt na kľúč";
        prefillContactForm(
          `Dopyt z kalkulátora: ${kvaText} – ${modeLabel}`,
          `Dobrý deň,\n\nprosím o vypracovanie ponuky podľa výpočtu z kalkulátora Azimut ES:\n- Režim: ${modeLabel}\n- Požadovaný príkon spotrebičov: ${kw} kW\n- Odporúčaný výkon s rezervou: ${kvaText}\n- Odporúčané riešenie: ${modelText}\n\nProsím o kontaktovanie pre upresnenie technických detailov.`
        );
      });
    }

    const contactForm = document.getElementById("azimut-contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const phone = document.getElementById("contact-phone").value.trim();
        const subject = document.getElementById("contact-subject").value.trim();
        const message = document.getElementById("contact-message").value.trim();

        const statusBox = document.getElementById("form-status");
        if (statusBox) {
          statusBox.classList.add("success");
        }

        const mailtoBody = encodeURIComponent(
          `Meno / Spoločnosť: ${name}\nE-mail: ${email}\nTelefón: ${phone}\n\nSpráva:\n${message}`
        );
        window.location.href = `mailto:azimut@azimut-es.com?cc=info@azimut-es.com&subject=${encodeURIComponent(
          subject || "Dopyt z webu Azimut ES"
        )}&body=${mailtoBody}`;
      });
    }
  });
})();
