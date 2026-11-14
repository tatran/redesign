/**
 * DOPTECH, s.r.o. — Interactive Portal Engine
 * Handles quad-lingual switching (SK/DE/EN/HU), Light/Dark theme,
 * Fleet cards with Crane Load Charts, 2025 Price & Crane Reach Calculator,
 * Project Portfolio Filtering, and Dispatch Inquiry Form pre-filling.
 */

(function () {
  "use strict";

  const state = {
    lang: localStorage.getItem("doptech_lang") || "sk",
    theme: localStorage.getItem("doptech_theme") || "light",
    projectFilter: "all",
    selectedVehicleId: "volvo-fm9"
  };

  function init() {
    applyTheme(state.theme);
    bindThemeToggle();
    bindLanguageSwitcher();
    bindMobileMenu();
    bindPriceListModal();
    bindProjectFilters();
    bindCalculatorInputs();
    bindBookingForm();
    applyLanguage(state.lang);
  }

  /* ------------------------------------------------------------------------
   * Theme Management (Light + Dark)
   * ------------------------------------------------------------------------ */
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("doptech_theme", theme);
    const iconEl = document.getElementById("theme-icon");
    if (iconEl) {
      iconEl.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  function bindThemeToggle() {
    const btn = document.getElementById("theme-toggle-btn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });
  }

  /* ------------------------------------------------------------------------
   * Language Management (SK / DE / EN / HU)
   * ------------------------------------------------------------------------ */
  function applyLanguage(lang) {
    if (!window.DOPTECH_I18N || !window.DOPTECH_I18N[lang]) {
      lang = "sk";
    }
    state.lang = lang;
    localStorage.setItem("doptech_lang", lang);
    document.documentElement.setAttribute("lang", lang);

    const dict = window.DOPTECH_I18N[lang];
    if (dict.meta_title) {
      document.title = dict.meta_title;
    }

    // Update active state on language buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // Translate all static [data-i18n] elements
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Render dynamic components in current language
    renderFleetGrid();
    populateCalculatorVehicles();
    updateCalculator();
    renderProjectsGrid();
    renderTimeline();
  }

  function bindLanguageSwitcher() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        applyLanguage(lang);
      });
    });
  }

  /* ------------------------------------------------------------------------
   * Fleet Grid & Crane Load Chart Rendering
   * ------------------------------------------------------------------------ */
  function renderFleetGrid() {
    const container = document.getElementById("fleet-grid");
    if (!container || !window.DOPTECH_DATA) return;

    const dict = window.DOPTECH_I18N[state.lang];
    const fleet = window.DOPTECH_DATA.fleet;

    container.innerHTML = fleet
      .map((item) => {
        const title = item.title[state.lang] || item.title.sk;
        const subtitle = item.subtitle[state.lang] || item.subtitle.sk;
        const specs = item.specs[state.lang] || item.specs.sk;

        const loadChartHtml =
          item.loadChart && item.loadChart.length > 0
            ? `<div class="load-chart-box">
                 <div class="load-chart-title">${dict.fleet_load_chart_title}</div>
                 <div class="load-pills">
                   ${item.loadChart
                     .map(
                       (pt) =>
                         `<span class="load-pill">${pt.radiusM} m: <strong>${pt.capacityKg.toLocaleString(
                           "sk-SK"
                         )} kg</strong></span>`
                     )
                     .join("")}
                 </div>
               </div>`
            : "";

        const rateText =
          item.rateSoloKm === item.rateComboKm
            ? `${item.rateSoloKm.toFixed(2)} € / km`
            : `${item.rateSoloKm.toFixed(2)} € (sólo) / ${item.rateComboKm.toFixed(2)} € (súprava)`;

        return `
          <article class="fleet-card">
            <div class="fleet-media">
              <img src="${item.image}" alt="${title}" loading="lazy" />
              <span class="fleet-badge">${item.badge}</span>
              <span class="fleet-crane-tag">${item.craneModel}</span>
            </div>
            <div class="fleet-body">
              <h3>${title}</h3>
              <p class="fleet-subtitle">${subtitle}</p>
              <ul class="fleet-specs-list">
                ${specs.map((s) => `<li>${s}</li>`).join("")}
              </ul>
              ${loadChartHtml}
              <div class="fleet-pricing-strip">
                <div><strong>${dict.fleet_rate_km_lbl}</strong> ${rateText}</div>
                <div><strong>${dict.fleet_rate_hr_lbl}</strong> ${item.rateCraneHourText}</div>
              </div>
              <div class="fleet-actions">
                <button type="button" class="btn btn-outline btn-sm select-calc-vehicle-btn" data-id="${item.id}">
                  🧮 ${dict.fleet_Select_btn}
                </button>
                <button type="button" class="btn btn-primary btn-sm book-vehicle-btn" data-id="${item.id}">
                  🚛 ${dict.fleet_inquire_btn}
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    // Bind buttons
    container.querySelectorAll(".select-calc-vehicle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        state.selectedVehicleId = id;
        const selectEl = document.getElementById("calc-vehicle-select");
        if (selectEl) selectEl.value = id;
        updateCalculator();
        document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
      });
    });

    container.querySelectorAll(".book-vehicle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const vehicle = fleet.find((v) => v.id === id);
        const formSelect = document.getElementById("form-vehicle-select");
        if (formSelect && vehicle) {
          formSelect.value = id;
        }
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* ------------------------------------------------------------------------
   * 2025 Price & Hydraulic Crane Load Calculator
   * ------------------------------------------------------------------------ */
  function populateCalculatorVehicles() {
    const calcSelect = document.getElementById("calc-vehicle-select");
    const formSelect = document.getElementById("form-vehicle-select");
    if (!window.DOPTECH_DATA) return;

    const fleet = window.DOPTECH_DATA.fleet;
    const dict = window.DOPTECH_I18N[state.lang];

    if (calcSelect) {
      calcSelect.innerHTML = fleet
        .map((v) => {
          const t = v.title[state.lang] || v.title.sk;
          return `<option value="${v.id}" ${v.id === state.selectedVehicleId ? "selected" : ""}>${t}</option>`;
        })
        .join("");
    }

    if (formSelect) {
      const currentVal = formSelect.value;
      formSelect.innerHTML =
        `<option value="any">${dict.form_vehicle_any}</option>` +
        fleet
          .map((v) => {
            const t = v.title[state.lang] || v.title.sk;
            return `<option value="${v.id}">${t}</option>`;
          })
          .join("");
      if (currentVal) formSelect.value = currentVal;
    }
  }

  function interpolateMaxCapacity(loadChart, radiusM) {
    if (!loadChart || loadChart.length === 0) return 0;
    const minPt = loadChart[0];
    const maxPt = loadChart[loadChart.length - 1];
    if (radiusM <= minPt.radiusM) return minPt.capacityKg;
    if (radiusM > maxPt.radiusM) return 0;

    for (let i = 0; i < loadChart.length - 1; i++) {
      const a = loadChart[i];
      const b = loadChart[i + 1];
      if (radiusM >= a.radiusM && radiusM <= b.radiusM) {
        const ratio = (radiusM - a.radiusM) / (b.radiusM - a.radiusM);
        return Math.round(a.capacityKg - ratio * (a.capacityKg - b.capacityKg));
      }
    }
    return 0;
  }

  function bindCalculatorInputs() {
    const ids = [
      "calc-vehicle-select",
      "calc-mode-select",
      "calc-distance-input",
      "calc-crane-hours-input",
      "calc-wait-hours-input",
      "calc-radius-range",
      "calc-weight-input"
    ];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", () => {
          if (id === "calc-vehicle-select") {
            state.selectedVehicleId = el.value;
          }
          updateCalculator();
        });
      }
    });

    const transferBtn = document.getElementById("calc-transfer-btn");
    if (transferBtn) {
      transferBtn.addEventListener("click", transferCalculationToForm);
    }
  }

  function updateCalculator() {
    if (!window.DOPTECH_DATA) return;
    const dict = window.DOPTECH_I18N[state.lang];
    const fleet = window.DOPTECH_DATA.fleet;

    const vehicle =
      fleet.find((v) => v.id === state.selectedVehicleId) || fleet[0];
    const mode = document.getElementById("calc-mode-select")?.value || "combo";
    const distanceKm = Math.max(
      0,
      parseFloat(document.getElementById("calc-distance-input")?.value) || 0
    );
    const craneHours = Math.max(
      0,
      parseFloat(document.getElementById("calc-crane-hours-input")?.value) || 0
    );
    const waitHours = Math.max(
      0,
      parseFloat(document.getElementById("calc-wait-hours-input")?.value) || 0
    );
    const radiusM = Math.max(
      2,
      parseFloat(document.getElementById("calc-radius-range")?.value) || 6
    );
    const weightKg = Math.max(
      0,
      parseFloat(document.getElementById("calc-weight-input")?.value) || 0
    );

    const radiusBadge = document.getElementById("calc-radius-badge");
    if (radiusBadge) {
      radiusBadge.textContent = `${radiusM.toFixed(1)} m`;
    }

    // Calculate rates
    const kmRate = mode === "combo" ? vehicle.rateComboKm : vehicle.rateSoloKm;
    const transportCost = distanceKm * kmRate;
    const craneCost =
      vehicle.maxLiftKg > 0 ? craneHours * vehicle.rateCraneHourCalc : 0;
    const waitingCost = waitHours * 30;
    const totalCost = transportCost + craneCost + waitingCost;

    // Update UI numbers
    const setElText = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    setElText(
      "res-transport-val",
      `${transportCost.toFixed(2)} € (${distanceKm} km × ${kmRate.toFixed(2)} €)`
    );
    setElText(
      "res-crane-val",
      vehicle.maxLiftKg > 0
        ? `${craneCost.toFixed(2)} € (${craneHours} h × ${vehicle.rateCraneHourCalc} €)`
        : "0.00 € (bez HR)"
    );
    setElText("res-waiting-val", `${waitingCost.toFixed(2)} € (${waitHours} h × 30 €)`);
    setElText("res-total-val", `${totalCost.toFixed(2)} €`);

    // Load Chart Verification
    const statusBox = document.getElementById("calc-load-status");
    if (!statusBox) return;

    if (!vehicle.loadChart || vehicle.loadChart.length === 0) {
      statusBox.className = "load-status-box load-status-info";
      statusBox.innerHTML = `${dict.calc_check_nocrane}`;
    } else {
      const maxAtRadius = interpolateMaxCapacity(vehicle.loadChart, radiusM);
      if (maxAtRadius >= weightKg && maxAtRadius > 0) {
        statusBox.className = "load-status-box load-status-ok";
        statusBox.innerHTML = `
          <div>${dict.calc_check_ok}</div>
          <div style="margin-top:6px; font-size:0.84rem;">
            ${dict.calc_max_at_radius} <strong>${maxAtRadius.toLocaleString("sk-SK")} kg @ ${radiusM.toFixed(1)} m</strong> (${vehicle.craneModel})
          </div>
        `;
      } else {
        statusBox.className = "load-status-box load-status-warn";
        statusBox.innerHTML = `
          <div>${dict.calc_check_warn}</div>
          <div style="margin-top:6px; font-size:0.84rem;">
            ${dict.calc_max_at_radius} <strong>${maxAtRadius.toLocaleString("sk-SK")} kg @ ${radiusM.toFixed(1)} m</strong> (Požadované: ${weightKg.toLocaleString("sk-SK")} kg)
          </div>
        `;
      }
    }
  }

  function transferCalculationToForm() {
    if (!window.DOPTECH_DATA) return;
    const fleet = window.DOPTECH_DATA.fleet;
    const vehicle =
      fleet.find((v) => v.id === state.selectedVehicleId) || fleet[0];
    const mode = document.getElementById("calc-mode-select")?.value || "combo";
    const distanceKm = document.getElementById("calc-distance-input")?.value || 80;
    const craneHours = document.getElementById("calc-crane-hours-input")?.value || 2;
    const waitHours = document.getElementById("calc-wait-hours-input")?.value || 0;
    const radiusM = document.getElementById("calc-radius-range")?.value || 6;
    const weightKg = document.getElementById("calc-weight-input")?.value || 2500;
    const totalText = document.getElementById("res-total-val")?.textContent || "";

    const formSelect = document.getElementById("form-vehicle-select");
    if (formSelect) formSelect.value = vehicle.id;

    const cargoTextarea = document.getElementById("form-cargo-textarea");
    if (cargoTextarea) {
      const title = vehicle.title[state.lang] || vehicle.title.sk;
      cargoTextarea.value =
        `[Kalkulácia DOPTECH 2025]\n` +
        `• Vozidlo: ${title} (${mode === "combo" ? "Súprava" : "Sólo"})\n` +
        `• Trasa: cca ${distanceKm} km | Práca s HR: ${craneHours} hod. | Čakanie bez HR: ${waitHours} hod.\n` +
        `• Bremeno: ${weightKg} kg na vyloženie ${radiusM} m\n` +
        `• Orientačný odhad: ${totalText} bez DPH\n\n` +
        `Doplňujúce detaily nákladu a termín: `;
    }

    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    cargoTextarea?.focus();
  }

  /* ------------------------------------------------------------------------
   * Project Portfolio Grid & Chronological Timeline
   * ------------------------------------------------------------------------ */
  function bindProjectFilters() {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.projectFilter = btn.getAttribute("data-filter") || "all";
        document.querySelectorAll(".filter-btn").forEach((b) => {
          b.classList.toggle("active", b === btn);
        });
        renderProjectsGrid();
      });
    });
  }

  function renderProjectsGrid() {
    const container = document.getElementById("projects-grid");
    if (!container || !window.DOPTECH_DATA) return;

    const projects = window.DOPTECH_DATA.projects.filter(
      (p) => state.projectFilter === "all" || p.category === state.projectFilter
    );

    container.innerHTML = projects
      .map((p) => {
        const title = p.title[state.lang] || p.title.sk;
        const desc = p.desc[state.lang] || p.desc.sk;
        return `
          <article class="project-card">
            <div class="project-img-wrap">
              <img src="${p.image}" alt="${title}" loading="lazy" />
              <span class="project-year-badge">${p.year}</span>
            </div>
            <div class="project-body">
              <div class="project-loc">📍 ${p.location} · ${p.client}</div>
              <h3>${title}</h3>
              <p>${desc}</p>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderTimeline() {
    const container = document.getElementById("timeline-grid");
    if (!container || !window.DOPTECH_DATA) return;

    container.innerHTML = window.DOPTECH_DATA.milestones
      .map((m) => {
        const title = m.title[state.lang] || m.title.sk;
        const text = m.text[state.lang] || m.text.sk;
        return `
          <div class="timeline-item">
            <div class="timeline-year">${m.year}</div>
            <h4>${title}</h4>
            <p>${text}</p>
          </div>
        `;
      })
      .join("");
  }

  /* ------------------------------------------------------------------------
   * Mobile Menu, 2025 Price List Modal & Booking Form
   * ------------------------------------------------------------------------ */
  function bindMobileMenu() {
    const toggleBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links");
    if (!toggleBtn || !navLinks) return;

    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  function bindPriceListModal() {
    const trigger = document.getElementById("open-pricelist-modal");
    const modal = document.getElementById("pricelist-modal");
    const closeBtn = document.getElementById("close-pricelist-modal");
    if (!trigger || !modal) return;

    trigger.addEventListener("click", () => {
      modal.classList.add("open");
    });

    closeBtn?.addEventListener("click", () => {
      modal.classList.remove("open");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("open");
      }
    });
  }

  function bindBookingForm() {
    const form = document.getElementById("dispatch-booking-form");
    const feedback = document.getElementById("form-feedback");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const dict = window.DOPTECH_I18N[state.lang];
      const name = document.getElementById("form-name-input")?.value || "";
      const phone = document.getElementById("form-phone-input")?.value || "";
      const email = document.getElementById("form-email-input")?.value || "";
      const route = document.getElementById("form-route-input")?.value || "";
      const cargo = document.getElementById("form-cargo-textarea")?.value || "";

      if (feedback) {
        feedback.style.display = "block";
        feedback.textContent = dict.form_success;
      }

      // Open mailto so client can immediately dispatch if desired
      const subject = encodeURIComponent(`Dopyt na prepravu s HR | ${name} (${phone})`);
      const body = encodeURIComponent(
        `Meno / Spoločnosť: ${name}\nTelefón: ${phone}\nE-mail: ${email}\nTrasa: ${route}\n\nDetaily prepravy:\n${cargo}`
      );
      window.location.href = `mailto:latinak@doptech.sk?subject=${subject}&body=${body}`;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
