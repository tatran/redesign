/**
 * Neumayer BAU Ges.m.b.H. — Interactive Application Controller
 * Features: Light/Dark Theme, 4-Language Switcher (DE/EN/HU/CS), Interactive
 * Cost Estimator, 11-Project Gallery & Collage Lightbox, Timeline, Careers,
 * Interactive Leaflet Service-Region Map, Dual Inquiry/Application Form & Modals.
 */

(function () {
  "use strict";

  const SUPPORTED_LANGS = ["de", "en", "hu", "cs"];
  const LOCALE_MAP = {
    de: "de-AT",
    en: "en-IE",
    hu: "hu-HU",
    cs: "cs-CZ"
  };

  const state = {
    lang: "de",
    theme: "light",
    projectFilter: "all",
    activeProjectId: null,
    lightboxTab: "photo",
    activeModalLegalType: null,
    activeFormTab: "project",
    estimator: {
      category: "efh",
      scope: "turnkey",
      area: 160,
      region: "burgenland",
      extras: {
        basement: false,
        exterior: false,
        demolition: false,
        planning: false
      }
    }
  };

  let leafletMap = null;
  let leafletMarkers = [];
  let mapTileLayer = null;
  let mapFallbackDrawn = false;

  const TILE_URLS = {
    light: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    dark: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
  };

  /* ------------------------------------------------------------------------
     Helpers
     ------------------------------------------------------------------------ */
  function getDict() {
    const all = window.NEUMAYER_I18N || {};
    return all[state.lang] || all.de;
  }

  function getByPath(obj, path) {
    return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatEuro(amount) {
    const locale = LOCALE_MAP[state.lang] || "de-AT";
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    }).format(Math.round(amount / 500) * 500);
  }

  /* ------------------------------------------------------------------------
     Theme Initialization & Switching
     ------------------------------------------------------------------------ */
  function applyTheme(theme) {
    state.theme = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", state.theme);
    try {
      localStorage.setItem("neumayer_theme", state.theme);
    } catch (_) {
      // Ignore storage errors in restricted browsing modes
    }

    const iconChar = state.theme === "dark" ? "\u2600" : "\u263E";
    const dict = getDict();
    const labelText = state.theme === "dark" ? dict.theme.toLight : dict.theme.toDark;

    ["theme-icon", "header-theme-icon"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = iconChar;
    });

    ["theme-toggle-btn", "theme-toggle-header"].forEach((id) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.setAttribute("title", dict.theme.toggleTitle);
        btn.setAttribute("aria-label", labelText);
        btn.setAttribute("aria-pressed", String(state.theme === "dark"));
      }
    });

    if (mapTileLayer && !mapFallbackDrawn) {
      mapTileLayer.setUrl(state.theme === "dark" ? TILE_URLS.dark : TILE_URLS.light);
    }
  }

  function toggleTheme() {
    applyTheme(state.theme === "light" ? "dark" : "light");
  }

  function initTheme() {
    let saved = "light";
    try {
      const stored = localStorage.getItem("neumayer_theme");
      if (stored === "dark" || stored === "light") saved = stored;
    } catch (_) {
      saved = "light";
    }
    applyTheme(saved);

    ["theme-toggle-btn", "theme-toggle-header"].forEach((id) => {
      const btn = document.getElementById(id);
      if (btn) btn.addEventListener("click", toggleTheme);
    });
  }

  /* ------------------------------------------------------------------------
     Multilingual Translation Engine (DE / EN / HU / CS)
     ------------------------------------------------------------------------ */
  function applyTranslations() {
    const dict = getDict();
    document.documentElement.setAttribute("lang", state.lang);
    document.title = dict.meta.title;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getByPath(dict, key);
      if (typeof val === "string") {
        el.textContent = val;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = getByPath(dict, key);
      if (typeof val === "string") {
        el.setAttribute("placeholder", val);
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      const val = getByPath(dict, key);
      if (typeof val === "string") {
        el.setAttribute("title", val);
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const val = getByPath(dict, key);
      if (typeof val === "string") {
        el.setAttribute("aria-label", val);
      }
    });

    document.querySelectorAll(".lang-btn[data-lang]").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === state.lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    const mobileSelect = document.getElementById("mobile-lang-select");
    if (mobileSelect && mobileSelect.value !== state.lang) {
      mobileSelect.value = state.lang;
    }

    // Refresh form category/position options + dynamic sections
    syncFormOptions();
    syncFormTabUI();
    updateEstimator();
    renderProjects();
    renderTimeline();
    renderTeam();
    renderJobs();
    updateMapPopups();

    // Update theme ARIA label for current language
    applyTheme(state.theme);

    // Refresh open modals if active
    if (state.activeProjectId) {
      renderLightboxContent();
    }
    if (state.activeModalLegalType) {
      renderLegalModalContent(state.activeModalLegalType);
    }
  }

  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    state.lang = lang;
    try {
      localStorage.setItem("neumayer_lang", lang);
    } catch (_) {
      // Ignore storage failures
    }
    applyTranslations();
  }

  function initLanguage() {
    let saved = "de";
    try {
      const stored = localStorage.getItem("neumayer_lang");
      if (SUPPORTED_LANGS.includes(stored)) saved = stored;
    } catch (_) {
      saved = "de";
    }
    state.lang = saved;

    document.querySelectorAll(".lang-btn[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLanguage(btn.getAttribute("data-lang"));
      });
    });

    const mobileSelect = document.getElementById("mobile-lang-select");
    if (mobileSelect) {
      mobileSelect.addEventListener("change", (e) => {
        setLanguage(e.target.value);
      });
    }
  }

  /* ------------------------------------------------------------------------
     Mobile Navigation Drawer
     ------------------------------------------------------------------------ */
  function initMobileDrawer() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const closeBtn = document.getElementById("mobile-drawer-close");
    const drawer = document.getElementById("mobile-nav-drawer");
    const overlay = document.getElementById("mobile-drawer-overlay");

    if (!toggleBtn || !drawer || !overlay) return;

    function openDrawer() {
      drawer.classList.add("is-open");
      overlay.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      toggleBtn.setAttribute("aria-expanded", "true");
    }

    function closeDrawer() {
      drawer.classList.remove("is-open");
      overlay.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      toggleBtn.setAttribute("aria-expanded", "false");
    }

    toggleBtn.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);

    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });
  }

  /* ------------------------------------------------------------------------
     Interactive Building Cost Estimator
     ------------------------------------------------------------------------ */
  const ESTIMATOR_RATES = {
    efh: { baseMin: 1650, baseMax: 2150, monthsBase: 8 },
    mfh: { baseMin: 1550, baseMax: 2050, monthsBase: 11 },
    hall: { baseMin: 980, baseMax: 1420, monthsBase: 7 },
    reno: { baseMin: 1050, baseMax: 1680, monthsBase: 5 },
    civil: { baseMin: 240, baseMax: 420, monthsBase: 2 }
  };

  const SCOPE_MULTIPLIER = {
    shell: 0.48,
    belag: 0.78,
    turnkey: 1.0
  };

  const REGION_MULTIPLIER = {
    burgenland: 1.0,
    noe: 1.03,
    wien: 1.09
  };

  function getEstimatorSummaryData() {
    const dict = getDict();
    const { category, scope, area, region, extras } = state.estimator;
    const rate = ESTIMATOR_RATES[category] || ESTIMATOR_RATES.efh;
    const scopeFactor = category === "civil" ? (scope === "shell" ? 0.65 : scope === "belag" ? 0.85 : 1.0) : (SCOPE_MULTIPLIER[scope] || 1.0);
    const regionFactor = REGION_MULTIPLIER[region] || 1.0;

    let minCost = area * rate.baseMin * scopeFactor * regionFactor;
    let maxCost = area * rate.baseMax * scopeFactor * regionFactor;
    let minMonths = rate.monthsBase * (0.75 + area / 600);
    let maxMonths = minMonths + 2.5;

    if (category === "civil") {
      minMonths = Math.max(1, 0.5 + area / 550);
      maxMonths = minMonths + 1.5;
    }

    if (scope === "shell") {
      minMonths *= 0.55;
      maxMonths *= 0.6;
    } else if (scope === "belag") {
      minMonths *= 0.8;
      maxMonths *= 0.82;
    }

    if (extras.basement && category !== "civil") {
      minCost += area * 280 + 18000;
      maxCost += area * 390 + 26000;
      minMonths += 1.2;
      maxMonths += 1.8;
    }
    if (extras.exterior) {
      minCost += 12000 + area * 45;
      maxCost += 19000 + area * 75;
      minMonths += 0.6;
      maxMonths += 1.0;
    }
    if (extras.demolition) {
      minCost += 9500;
      maxCost += 21000;
      minMonths += 0.5;
      maxMonths += 0.8;
    }
    if (extras.planning) {
      minCost += 4800;
      maxCost += 9500;
      minMonths += 0.5;
      maxMonths += 1.0;
    }

    const catLabelMap = {
      efh: dict.estimator.catEfh,
      mfh: dict.estimator.catMfh,
      hall: dict.estimator.catHall,
      reno: dict.estimator.catReno,
      civil: dict.estimator.catCivil
    };
    const scopeLabelMap = {
      shell: dict.estimator.scopeShell,
      belag: dict.estimator.scopeBelag,
      turnkey: dict.estimator.scopeTurnkey
    };
    const regionLabelMap = {
      burgenland: dict.estimator.regionBurgenland,
      noe: dict.estimator.regionNoe,
      wien: dict.estimator.regionVienna
    };

    let timelineText;
    if (maxMonths < 3.5) {
      const wMin = Math.max(2, Math.round(minMonths * 4.3));
      const wMax = Math.max(wMin + 2, Math.round(maxMonths * 4.3));
      timelineText = `${wMin} – ${wMax} ${dict.estimator.weeksUnit}`;
    } else {
      const mMin = Math.max(2, Math.round(minMonths));
      const mMax = Math.max(mMin + 1, Math.round(maxMonths));
      timelineText = `${mMin} – ${mMax} ${dict.estimator.monthsUnit}`;
    }

    return {
      costRange: `${formatEuro(minCost)} – ${formatEuro(maxCost)}`,
      timelineText,
      catLabel: catLabelMap[category] || dict.estimator.catEfh,
      scopeLabel: scopeLabelMap[scope] || dict.estimator.scopeTurnkey,
      regionLabel: regionLabelMap[region] || dict.estimator.regionBurgenland,
      areaText: `${area} ${dict.estimator.areaUnit}`
    };
  }

  function updateEstimator() {
    const summary = getEstimatorSummaryData();
    const costEl = document.getElementById("est-cost-output");
    const timeEl = document.getElementById("est-time-output");
    const areaBadge = document.getElementById("est-area-value");
    const sumScope = document.getElementById("est-sum-scope");
    const sumRegion = document.getElementById("est-sum-region");
    const sumArea = document.getElementById("est-sum-area");

    if (costEl) costEl.textContent = summary.costRange;
    if (timeEl) timeEl.textContent = summary.timelineText;
    if (areaBadge) areaBadge.textContent = summary.areaText;
    if (sumScope) sumScope.textContent = `${summary.catLabel} · ${summary.scopeLabel}`;
    if (sumRegion) sumRegion.textContent = summary.regionLabel;
    if (sumArea) sumArea.textContent = summary.areaText;
  }

  function initEstimator() {
    document.querySelectorAll("[data-est-category]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.estimator.category = btn.getAttribute("data-est-category");
        document.querySelectorAll("[data-est-category]").forEach((b) => {
          b.classList.toggle("is-selected", b === btn);
          b.setAttribute("aria-pressed", String(b === btn));
        });
        updateEstimator();
      });
    });

    document.querySelectorAll("[data-est-scope]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.estimator.scope = btn.getAttribute("data-est-scope");
        document.querySelectorAll("[data-est-scope]").forEach((b) => {
          b.classList.toggle("is-selected", b === btn);
          b.setAttribute("aria-pressed", String(b === btn));
        });
        updateEstimator();
      });
    });

    const areaInput = document.getElementById("est-area-range");
    if (areaInput) {
      areaInput.addEventListener("input", () => {
        state.estimator.area = Number(areaInput.value) || 160;
        updateEstimator();
      });
    }

    const regionSelect = document.getElementById("est-region-select");
    if (regionSelect) {
      regionSelect.addEventListener("change", () => {
        state.estimator.region = regionSelect.value;
        updateEstimator();
      });
    }

    const extraIds = [
      ["extra-basement", "basement"],
      ["extra-exterior", "exterior"],
      ["extra-demolition", "demolition"],
      ["extra-planning", "planning"]
    ];
    extraIds.forEach(([id, key]) => {
      const box = document.getElementById(id);
      if (box) {
        box.addEventListener("change", () => {
          state.estimator.extras[key] = box.checked;
          updateEstimator();
        });
      }
    });

    const applyBtn = document.getElementById("apply-estimate-btn");
    if (applyBtn) {
      applyBtn.addEventListener("click", () => {
        const summary = getEstimatorSummaryData();
        const dict = getDict();
        setFormTab("project");

        const catMap = {
          efh: dict.estimator.catEfh,
          mfh: dict.estimator.catMfh,
          hall: dict.estimator.catHall,
          reno: dict.estimator.catReno,
          civil: dict.estimator.catCivil
        };

        const projCatSelect = document.getElementById("project-category-select");
        if (projCatSelect) {
          projCatSelect.value = state.estimator.category;
        }
        const regionField = document.getElementById("contact-region");
        if (regionField) {
          regionField.value = summary.regionLabel;
        }

        const msgField = document.getElementById("contact-message");
        if (msgField) {
          const extrasSelected = [];
          if (state.estimator.extras.basement) extrasSelected.push(dict.estimator.extraBasement);
          if (state.estimator.extras.exterior) extrasSelected.push(dict.estimator.extraExterior);
          if (state.estimator.extras.demolition) extrasSelected.push(dict.estimator.extraDemolition);
          if (state.estimator.extras.planning) extrasSelected.push(dict.estimator.extraPlanning);

          const lines = [
            `${dict.estimator.summaryTitle}:`,
            `- ${dict.estimator.catLabel}: ${catMap[state.estimator.category]}`,
            `- ${dict.estimator.scopeLabel}: ${summary.scopeLabel}`,
            `- ${dict.estimator.areaLabel}: ${summary.areaText}`,
            `- ${dict.estimator.regionLabel}: ${summary.regionLabel}`,
            `- ${dict.estimator.summaryCostLabel}: ${summary.costRange}`,
            `- ${dict.estimator.summaryTimeLabel}: ${summary.timelineText}`
          ];
          if (extrasSelected.length) {
            lines.push(`- ${dict.estimator.extrasLabel}: ${extrasSelected.join(", ")}`);
          }
          msgField.value = lines.join("\n");
        }

        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     Project Portfolio & Fullscreen Collage Lightbox
     ------------------------------------------------------------------------ */
  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid || !window.NEUMAYER_DATA) return;

    const dict = getDict();
    const projects = window.NEUMAYER_DATA.projects.filter(
      (p) => state.projectFilter === "all" || p.category === state.projectFilter
    );

    grid.innerHTML = projects
      .map((p) => {
        const title = p.title[state.lang] || p.title.de;
        const cat = p.catLabel[state.lang] || p.catLabel.de;
        const summary = p.summary[state.lang] || p.summary.de;
        const loc = p.location[state.lang] || p.location.de;
        return `
          <article class="project-card" data-project-id="${escapeHtml(p.id)}">
            <div class="project-thumb">
              <img src="${escapeHtml(p.mainImg)}" alt="${escapeHtml(title)}" loading="lazy" />
              <span class="project-cat-badge">${escapeHtml(cat)}</span>
            </div>
            <div class="project-body">
              <h3>${escapeHtml(title)}</h3>
              <p>${escapeHtml(summary)}</p>
              <div class="project-footer">
                <span>${escapeHtml(loc)}</span>
                <button type="button" class="project-open-btn" data-open-project="${escapeHtml(p.id)}">
                  ${escapeHtml(dict.projects.openDetails)} &#8594;
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    grid.querySelectorAll("[data-open-project]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openLightbox(btn.getAttribute("data-open-project"));
      });
    });

    grid.querySelectorAll(".project-thumb").forEach((thumb) => {
      thumb.style.cursor = "pointer";
      thumb.addEventListener("click", () => {
        const card = thumb.closest("[data-project-id]");
        if (card) openLightbox(card.getAttribute("data-project-id"));
      });
    });
  }

  function renderLightboxContent() {
    const backdrop = document.getElementById("project-lightbox");
    if (!backdrop || !window.NEUMAYER_DATA) return;
    const project = window.NEUMAYER_DATA.projects.find((p) => p.id === state.activeProjectId);
    if (!project) return;

    const dict = getDict();
    const title = project.title[state.lang] || project.title.de;
    const cat = project.catLabel[state.lang] || project.catLabel.de;
    const loc = project.location[state.lang] || project.location.de;
    const details = project.details[state.lang] || project.details.de;
    const imgSrc = state.lightboxTab === "collage" ? project.collageImg : project.mainImg;

    const titleEl = document.getElementById("lightbox-title");
    const imgEl = document.getElementById("lightbox-img");
    const metaEl = document.getElementById("lightbox-meta");
    const descEl = document.getElementById("lightbox-desc");

    if (titleEl) titleEl.textContent = title;
    if (imgEl) {
      imgEl.src = imgSrc;
      imgEl.alt = `${title} (${state.lightboxTab})`;
    }
    if (metaEl) {
      metaEl.textContent = `${dict.lightbox.locationLabel}: ${loc}  ·  ${dict.lightbox.categoryLabel}: ${cat}`;
    }
    if (descEl) descEl.textContent = details;

    document.querySelectorAll("[data-lightbox-tab]").forEach((tabBtn) => {
      const isAct = tabBtn.getAttribute("data-lightbox-tab") === state.lightboxTab;
      tabBtn.classList.toggle("is-active", isAct);
    });
  }

  function openLightbox(projectId) {
    const backdrop = document.getElementById("project-lightbox");
    if (!backdrop) return;
    state.activeProjectId = projectId;
    state.lightboxTab = "photo";
    renderLightboxContent();
    backdrop.classList.add("is-open");
    backdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    const backdrop = document.getElementById("project-lightbox");
    if (!backdrop) return;
    state.activeProjectId = null;
    backdrop.classList.remove("is-open");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function initProjects() {
    document.querySelectorAll("[data-project-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.projectFilter = btn.getAttribute("data-project-filter");
        document.querySelectorAll("[data-project-filter]").forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-pressed", String(b === btn));
        });
        renderProjects();
      });
    });

    document.querySelectorAll("[data-lightbox-tab]").forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
        state.lightboxTab = tabBtn.getAttribute("data-lightbox-tab");
        renderLightboxContent();
      });
    });

    const closeBtn = document.getElementById("lightbox-close-btn");
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);

    const backdrop = document.getElementById("project-lightbox");
    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closeLightbox();
      });
    }

    const inquireBtn = document.getElementById("lightbox-inquire-btn");
    if (inquireBtn) {
      inquireBtn.addEventListener("click", () => {
        const project = window.NEUMAYER_DATA?.projects.find((p) => p.id === state.activeProjectId);
        const projectName = project ? (project.title[state.lang] || project.title.de) : "";
        closeLightbox();
        setFormTab("project");
        const msgField = document.getElementById("contact-message");
        if (msgField && projectName) {
          msgField.value = `${getDict().lightbox.inquireBtn}: ${projectName}\n`;
        }
        const contactSection = document.getElementById("contact");
        if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  }

  /* ------------------------------------------------------------------------
     History Timeline (1960–2024)
     ------------------------------------------------------------------------ */
  function renderTimeline() {
    const list = document.getElementById("timeline-list");
    if (!list || !window.NEUMAYER_DATA) return;

    list.innerHTML = window.NEUMAYER_DATA.timeline
      .map((item) => {
        const title = item.title[state.lang] || item.title.de;
        const text = item.text[state.lang] || item.text.de;
        return `
          <article class="timeline-item">
            <span class="timeline-dot" aria-hidden="true"></span>
            <span class="timeline-year">${escapeHtml(item.year)}</span>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(text)}</p>
          </article>
        `;
      })
      .join("");
  }

  /* ------------------------------------------------------------------------
     Team Roster
     ------------------------------------------------------------------------ */
  function renderTeam() {
    const grid = document.getElementById("team-grid");
    if (!grid || !window.NEUMAYER_DATA) return;

    grid.innerHTML = window.NEUMAYER_DATA.team
      .map((member) => {
        const role = member.role[state.lang] || member.role.de;
        const bio = member.bio[state.lang] || member.bio.de;
        return `
          <article class="team-card">
            <div class="team-card-img">
              <img src="${escapeHtml(member.img)}" alt="${escapeHtml(member.name)}" loading="lazy" />
            </div>
            <div class="team-card-body">
              <h3>${escapeHtml(member.name)}</h3>
              <p>${escapeHtml(role)}</p>
              <span class="team-card-bio">${escapeHtml(bio)}</span>
            </div>
          </article>
        `;
      })
      .join("");
  }

  /* ------------------------------------------------------------------------
     Careers & Expandable Job Postings
     ------------------------------------------------------------------------ */
  function renderJobs() {
    const grid = document.getElementById("jobs-grid");
    if (!grid || !window.NEUMAYER_DATA) return;
    const dict = getDict();

    grid.innerHTML = window.NEUMAYER_DATA.jobs
      .map((job) => {
        const title = job.title[state.lang] || job.title.de;
        const badge = job.badge[state.lang] || job.badge.de;
        const salary = job.salary[state.lang] || job.salary.de;
        const summary = job.summary[state.lang] || job.summary.de;
        const reqs = job.requirements[state.lang] || job.requirements.de;

        return `
          <article class="job-card" data-job-id="${escapeHtml(job.id)}">
            <span class="job-salary-badge">${escapeHtml(badge)}</span>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(summary)}</p>
            <div class="job-salary-line">
              <strong>${escapeHtml(dict.careers.salaryLabel)}:</strong> ${escapeHtml(salary)}
            </div>
            <button type="button" class="job-details-toggle" aria-expanded="false">
              + ${escapeHtml(dict.careers.detailsShow)}
            </button>
            <div class="job-extra">
              <p class="job-extra-heading">${escapeHtml(dict.careers.requirementsTitle)}</p>
              <ul class="job-list">
                ${reqs.map((r) => `<li>${escapeHtml(r)}</li>`).join("")}
              </ul>
            </div>
            <button type="button" class="btn btn--primary btn--sm" data-apply-job="${escapeHtml(job.id)}">
              ${escapeHtml(dict.careers.applyBtn)}
            </button>
          </article>
        `;
      })
      .join("");

    grid.querySelectorAll(".job-details-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".job-card");
        const extra = card?.querySelector(".job-extra");
        if (!extra) return;
        const isOpen = extra.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(isOpen));
        btn.textContent = isOpen ? `- ${dict.careers.detailsHide}` : `+ ${dict.careers.detailsShow}`;
      });
    });

    grid.querySelectorAll("[data-apply-job]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const jobId = btn.getAttribute("data-apply-job");
        setFormTab("career");
        const posSelect = document.getElementById("career-position-select");
        if (posSelect) posSelect.value = jobId;
        const contactSection = document.getElementById("contact");
        if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* ------------------------------------------------------------------------
     Interactive Leaflet Regional Map
     ------------------------------------------------------------------------ */
  const REGION_PINS = [
    {
      coords: [47.9158, 16.6933],
      primary: true,
      name: "Purbach am Neusiedler See (HQ)",
      text: {
        de: "Neumayer BAU Ges.m.b.H. · Fellnergasse 101a, 7083 Purbach · Firmenzentrale & Bauhof",
        en: "Neumayer BAU Ges.m.b.H. · Fellnergasse 101a, 7083 Purbach · Headquarters & Yard",
        hu: "Neumayer BAU Ges.m.b.H. · Fellnergasse 101a, 7083 Purbach · Központ és telephely",
        cs: "Neumayer BAU Ges.m.b.H. · Fellnergasse 101a, 7083 Purbach · Sídlo a zázemí"
      }
    },
    {
      coords: [47.8456, 16.5233],
      name: "Eisenstadt & Umgebung",
      text: {
        de: "Einsatzgebiet Eisenstadt & Nordburgenland · Wohnbau, Sanierung & Tiefbau",
        en: "Eisenstadt & Northern Burgenland service zone · Residential, Renovation & Civil",
        hu: "Kismarton és Észak-Burgenland működési terület · Lakó- és mélyépítés",
        cs: "Oblast Eisenstadt a severní Burgenland · Bytové i inženýrské stavby"
      }
    },
    {
      coords: [47.949, 16.8417],
      name: "Neusiedl am See",
      text: {
        de: "Bezirk Neusiedl am See · Ein- & Mehrfamilienhäuser, Tourismus- & Hotelbau",
        en: "Neusiedl am See District · Custom Homes, Apartments & Hospitality",
        hu: "Nezsider járás · Családi házak, társasházak és szállodaépítés",
        cs: "Okres Neusiedl am See · Rodinné domy, apartmány a hotelnictví"
      }
    },
    {
      coords: [48.0254, 16.7789],
      name: "Bruck/Leitha & Fischamend",
      text: {
        de: "Bruck an der Leitha & Fischamend (NÖ) · Kommunal- und Gewerbebau",
        en: "Bruck/Leitha & Fischamend (Lower Austria) · Public & Commercial Builds",
        hu: "Bruck/Leitha és Fischamend · Közintézményi és ipari beruházások",
        cs: "Bruck/Leitha a Fischamend (Dolní Rakousko) · Obecní a komerční stavby"
      }
    },
    {
      coords: [48.148, 16.435],
      name: "Wien & Himberg",
      text: {
        de: "Großraum Wien, Himberg & NÖ-Süd · Logistikzentren, Sanierungen & Wohnbau",
        en: "Vienna, Himberg & Southern Basin · Logistics Hubs, Renovation & Housing",
        hu: "Bécs, Himberg és vonzáskörzet · Logisztikai csarnokok és felújítások",
        cs: "Vídeň, Himberg a okolí · Logistická centra, sanace a bytová výstavba"
      }
    }
  ];

  function updateMapPopups() {
    leafletMarkers.forEach(({ marker, pin }) => {
      const desc = pin.text[state.lang] || pin.text.de;
      marker.bindPopup(`<strong>${escapeHtml(pin.name)}</strong><br>${escapeHtml(desc)}`);
    });
  }

  function drawVectorCorridorFallback() {
    if (!leafletMap || mapFallbackDrawn || typeof window.L === "undefined") return;
    mapFallbackDrawn = true;
    if (mapTileLayer) {
      leafletMap.removeLayer(mapTileLayer);
      mapTileLayer = null;
    }

    // Neusiedler See approximate shoreline so regional orientation remains clear offline
    window.L.polygon(
      [
        [47.965, 16.825],
        [47.935, 16.875],
        [47.87, 16.84],
        [47.76, 16.78],
        [47.66, 16.73],
        [47.65, 16.67],
        [47.73, 16.65],
        [47.83, 16.69],
        [47.91, 16.74],
        [47.95, 16.79]
      ],
      { color: "#4d8ac9", weight: 1.5, fillColor: "#8ec0eb", fillOpacity: 0.4 }
    ).addTo(leafletMap);

    REGION_PINS.slice(1).forEach((pin) => {
      window.L.polyline([[47.9158, 16.6933], pin.coords], {
        color: "#b87e3d",
        weight: 2,
        dashArray: "6 6",
        opacity: 0.8
      }).addTo(leafletMap);
    });
  }

  function initMap() {
    const mapContainer = document.getElementById("neumayer-map");
    if (!mapContainer) return;
    if (typeof window.L === "undefined") {
      mapContainer.innerHTML = `<div class="map-fallback">47.9158° N, 16.6933° E · Fellnergasse 101a, 7083 Purbach am Neusiedler See</div>`;
      return;
    }

    leafletMap = window.L.map(mapContainer, {
      center: [47.96, 16.65],
      zoom: 10,
      scrollWheelZoom: false
    });

    const initialUrl = state.theme === "dark" ? TILE_URLS.dark : TILE_URLS.light;
    mapTileLayer = window.L.tileLayer(initialUrl, {
      attribution: "&copy; Esri, HERE, Garmin, OpenStreetMap contributors",
      maxZoom: 18
    }).addTo(leafletMap);

    let tileErrors = 0;
    mapTileLayer.on("tileerror", () => {
      tileErrors += 1;
      if (tileErrors >= 3) {
        drawVectorCorridorFallback();
      }
    });

    window.L.circle([47.9158, 16.6933], {
      color: "#0f5c3e",
      fillColor: "#147a52",
      fillOpacity: 0.1,
      radius: 28000,
      weight: 1.5
    }).addTo(leafletMap);

    leafletMarkers = REGION_PINS.map((pin) => {
      const marker = window.L.circleMarker(pin.coords, {
        radius: pin.primary ? 10 : 7,
        fillColor: pin.primary ? "#c94426" : "#0f5c3e",
        color: "#ffffff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.92
      }).addTo(leafletMap);

      return { marker, pin };
    });

    updateMapPopups();
    if (leafletMarkers[0]) {
      leafletMarkers[0].marker.openPopup();
    }
  }

  /* ------------------------------------------------------------------------
     Dual Contact & Application Form
     ------------------------------------------------------------------------ */
  function syncFormOptions() {
    const dict = getDict();
    const catSelect = document.getElementById("project-category-select");
    if (catSelect) {
      const prev = catSelect.value || "efh";
      const opts = [
        ["efh", dict.estimator.catEfh],
        ["mfh", dict.estimator.catMfh],
        ["hall", dict.estimator.catHall],
        ["reno", dict.estimator.catReno],
        ["civil", dict.estimator.catCivil]
      ];
      catSelect.innerHTML = opts.map(([val, label]) => `<option value="${val}">${escapeHtml(label)}</option>`).join("");
      catSelect.value = prev;
    }

    const posSelect = document.getElementById("career-position-select");
    if (posSelect && window.NEUMAYER_DATA) {
      const prev = posSelect.value || window.NEUMAYER_DATA.jobs[0].id;
      posSelect.innerHTML = window.NEUMAYER_DATA.jobs
        .map((job) => `<option value="${escapeHtml(job.id)}">${escapeHtml(job.title[state.lang] || job.title.de)}</option>`)
        .join("");
      posSelect.value = prev;
    }
  }

  function syncFormTabUI() {
    const dict = getDict();
    const projectFields = document.getElementById("project-only-fields");
    const careerFields = document.getElementById("career-only-fields");
    const submitBtn = document.getElementById("contact-submit-btn");

    document.querySelectorAll(".form-tab-btn[data-form-tab]").forEach((btn) => {
      const active = btn.getAttribute("data-form-tab") === state.activeFormTab;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", String(active));
    });

    if (projectFields) projectFields.style.display = state.activeFormTab === "project" ? "block" : "none";
    if (careerFields) careerFields.style.display = state.activeFormTab === "career" ? "block" : "none";
    if (submitBtn) {
      submitBtn.textContent = state.activeFormTab === "career" ? dict.contact.submitCareer : dict.contact.submitProject;
    }
  }

  function setFormTab(tab) {
    state.activeFormTab = tab === "career" ? "career" : "project";
    syncFormTabUI();
  }

  function initContactForm() {
    document.querySelectorAll(".form-tab-btn[data-form-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setFormTab(btn.getAttribute("data-form-tab"));
      });
    });

    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");
    if (!form || !feedback) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const dict = getDict();

      const name = (document.getElementById("contact-name")?.value || "").trim();
      const email = (document.getElementById("contact-email")?.value || "").trim();
      const phone = (document.getElementById("contact-phone")?.value || "").trim();
      const region = (document.getElementById("contact-region")?.value || "").trim();
      const message = (document.getElementById("contact-message")?.value || "").trim();
      const consent = Boolean(document.getElementById("contact-consent")?.checked);
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailValid || !message || !consent) {
        feedback.className = "form-feedback is-visible form-feedback--error";
        feedback.innerHTML = `<p>${escapeHtml(dict.contact.errorRequired)}</p>`;
        return;
      }

      const categorySelect = document.getElementById("project-category-select");
      const posSelect = document.getElementById("career-position-select");
      const selectedContext = state.activeFormTab === "career"
        ? (posSelect?.options[posSelect.selectedIndex]?.text || "")
        : (categorySelect?.options[categorySelect.selectedIndex]?.text || "");

      const subjectPrefix = state.activeFormTab === "career" ? dict.contact.tabCareer : dict.contact.tabProject;
      const mailSubject = encodeURIComponent(`${subjectPrefix}: ${selectedContext} – ${name}`);
      const mailBody = encodeURIComponent(
        [
          `${subjectPrefix} (${selectedContext})`,
          `Name: ${name}`,
          `E-Mail: ${email}`,
          phone ? `Tel: ${phone}` : "",
          region ? `Ort/Region: ${region}` : "",
          "",
          message
        ]
          .filter(Boolean)
          .join("\n")
      );

      feedback.className = "form-feedback is-visible";
      feedback.innerHTML = `
        <strong>${escapeHtml(dict.contact.successTitle)}</strong>
        <p>${escapeHtml(dict.contact.successBody)}</p>
        <p style="margin-top:10px;">
          <a class="btn btn--secondary btn--sm" href="mailto:office@neumayer-bau.at?subject=${mailSubject}&body=${mailBody}">
            ${escapeHtml(dict.contact.mailtoBtn)}
          </a>
        </p>
      `;
    });
  }

  /* ------------------------------------------------------------------------
     Legal Modals (Impressum & DSGVO Datenschutz)
     ------------------------------------------------------------------------ */
  function renderLegalModalContent(type) {
    const dict = getDict();
    const titleEl = document.getElementById("legal-modal-title");
    const bodyEl = document.getElementById("legal-modal-body");
    if (!titleEl || !bodyEl || !window.NEUMAYER_DATA) return;

    titleEl.textContent = type === "privacy" ? dict.modals.privacyTitle : dict.modals.impressumTitle;
    const htmlMap = type === "privacy" ? window.NEUMAYER_DATA.legal.privacy : window.NEUMAYER_DATA.legal.impressum;
    bodyEl.innerHTML = htmlMap[state.lang] || htmlMap.de;
  }

  function openLegalModal(type) {
    const backdrop = document.getElementById("legal-modal");
    if (!backdrop) return;
    state.activeModalLegalType = type === "privacy" ? "privacy" : "impressum";
    renderLegalModalContent(state.activeModalLegalType);
    backdrop.classList.add("is-open");
    backdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLegalModal() {
    const backdrop = document.getElementById("legal-modal");
    if (!backdrop) return;
    state.activeModalLegalType = null;
    backdrop.classList.remove("is-open");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function initModals() {
    document.querySelectorAll("[data-open-legal]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openLegalModal(btn.getAttribute("data-open-legal"));
      });
    });

    const closeBtn = document.getElementById("legal-modal-close");
    if (closeBtn) closeBtn.addEventListener("click", closeLegalModal);

    const backdrop = document.getElementById("legal-modal");
    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closeLegalModal();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (state.activeProjectId) closeLightbox();
        if (state.activeModalLegalType) closeLegalModal();
      }
    });
  }

  /* ------------------------------------------------------------------------
     Bootstrap Application
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLanguage();
    initMobileDrawer();
    initEstimator();
    initProjects();
    initContactForm();
    initModals();
    initMap();
    applyTranslations();
  });
})();
