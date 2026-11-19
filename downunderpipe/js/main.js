/* ==========================================================================
   Down Under Pipe Inspection Ltd. — Main Interactive Script
   Theme Toggle, Bilingual EN/FR Switcher, Mobile Menu & Pipe Diagnostic Tool
   ========================================================================== */

(function () {
  "use strict";

  const STATE = {
    lang: "en",
    theme: "dark",
    sector: "res",
    size: "small",
    issue: "backup"
  };

  /* ------------------------------------------------------------------------
     1. Language Detection & Application
     ------------------------------------------------------------------------ */
  function detectInitialLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang === "fr" || urlLang === "en") return urlLang;
      const saved = localStorage.getItem("downunder_lang");
      if (saved === "fr" || saved === "en") return saved;
    } catch (e) {}
    return "en";
  }

  function applyLanguage(lang) {
    const dict = window.DOWNUNDER_I18N && window.DOWNUNDER_I18N[lang];
    if (!dict) return;

    STATE.lang = lang;
    document.documentElement.lang = lang === "fr" ? "fr-CA" : "en-CA";
    document.title = dict.meta_title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict.meta_desc);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update language buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    // Update Google Maps embed language
    const mapFrame = document.getElementById("vernon-map");
    if (mapFrame) {
      mapFrame.src = `https://www.google.com/maps?q=7654%20Baker%20Hogg%20Rd%2C%20Vernon%2C%20BC%20V1B%203S3&output=embed&hl=${lang}`;
    }

    updateThemeLabel();
    updateDiagnosticOutput();

    try {
      localStorage.setItem("downunder_lang", lang);
    } catch (e) {}
  }

  /* ------------------------------------------------------------------------
     2. Theme Toggle (Dark / Light)
     ------------------------------------------------------------------------ */
  function updateThemeLabel() {
    const dict = window.DOWNUNDER_I18N[STATE.lang] || window.DOWNUNDER_I18N.en;
    const themeLabel = document.getElementById("theme-label");
    const themeIcon = document.getElementById("theme-icon");
    if (!themeLabel || !themeIcon) return;

    if (STATE.theme === "dark") {
      themeLabel.textContent = dict.theme_light;
      themeIcon.textContent = "☀";
    } else {
      themeLabel.textContent = dict.theme_dark;
      themeIcon.textContent = "☾";
    }
  }

  function applyTheme(theme) {
    STATE.theme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", STATE.theme);
    updateThemeLabel();
    try {
      localStorage.setItem("downunder_theme", STATE.theme);
    } catch (e) {}
  }

  /* ------------------------------------------------------------------------
     3. Interactive Pipe Diagnostic & Equipment Matcher
     ------------------------------------------------------------------------ */
  function getDiagnosticRecommendation() {
    const isFr = STATE.lang === "fr";
    const useCrawler =
      STATE.size === "large" ||
      (STATE.sector === "mun" && STATE.size !== "small");

    const camName = useCrawler
      ? (isFr ? "Caméra Robotisée Rovver" : "Rovver Robotic Crawler")
      : (isFr ? "Caméra Poussée Vivax" : "Vivax Push Camera");

    const reach = useCrawler
      ? (isFr ? "Jusqu'à 200 m (656 pi) · 150–900 mm" : "Up to 200 m (656 ft) · 150–900 mm")
      : (isFr ? "Jusqu'à 120 m (400 pi) · 50–150 mm" : "Up to 120 m (400 ft) · 50–150 mm");

    const issueMap = {
      backup: {
        titleEn: "CCTV Inspection + Obstruction Clearing",
        titleFr: "Inspection CCTV + Dégagement d'Obstruction",
        descEn: "Start with a high-definition camera run to locate the exact cause of recurring backups, followed by targeted pipe cleaning to restore full flow.",
        descFr: "Commencez par une inspection vidéo HD pour repérer la cause exacte des refoulements, suivie d'un nettoyage ciblé pour rétablir le débit.",
        actionEn: "CCTV Video + Pipe Cleaning",
        actionFr: "Vidéo CCTV + Nettoyage",
        surfaceEn: "Zero Digging (Access via Cleanout)",
        surfaceFr: "Aucune Excavation (Via Regard)"
      },
      roots: {
        titleEn: "Mechanical Root Cutting + CCTV Verification",
        titleFr: "Coupe de Racines + Vérification CCTV",
        descEn: "Clear invasive roots and hard scale buildup, then inspect the host pipe joints to evaluate whether a CIPP spot patch can seal entry points.",
        descFr: "Éliminez les racines envahissantes et le tartre, puis inspectez les joints pour évaluer si une manchette CIPP peut sceller les infiltrations.",
        actionEn: "Root Cutting + Descaling + CCTV",
        actionFr: "Coupe de Racines + Détartrage + CCTV",
        surfaceEn: "Trees & Lawn Protected",
        surfaceFr: "Arbres et Pelouse Préservés"
      },
      crack: {
        titleEn: "CCTV Assessment + Trenchless CIPP Relining",
        titleFr: "Évaluation CCTV + Chemisage Sans Tranchée CIPP",
        descEn: "Inspect structural condition and measure affected footage to determine if full-length CIPP relining or a sectional patch can restore the pipe without trenching.",
        descFr: "Inspectez l'état structural et mesurez la section touchée pour déterminer si un chemisage CIPP complet ou ponctuel convient sans creuser.",
        actionEn: "CCTV + CIPP Liner / Spot Patch",
        actionFr: "CCTV + Chemisage / Manchette CIPP",
        surfaceEn: "No-Dig Driveway & Garden Safe",
        surfaceFr: "Sans Tranchée — Allée & Jardin Intacts"
      },
      locate: {
        titleEn: "Camera Run + Precision Sonde Locating",
        titleFr: "Passage Caméra + Localisation par Sonde",
        descEn: "Deploy our transmitter-equipped camera to trace underground pipe routing, junctions, and exact depth markings prior to renovation or civil work.",
        descFr: "Déployez notre caméra à sonde intégrée pour tracer le parcours souterrain, les jonctions et la profondeur exacte avant vos travaux.",
        actionEn: "Underground Locating & Mapping",
        actionFr: "Localisation & Cartographie",
        surfaceEn: "Surface Flags / Paint Markings Only",
        surfaceFr: "Marquage de Surface Uniquement"
      },
      buy: {
        titleEn: "Pre-Purchase Sewer Camera Inspection & Report",
        titleFr: "Inspection Préachat par Caméra & Rapport",
        descEn: "Avoid costly underground surprises before closing. Receive digital video footage and clear condition findings for your Vernon or Okanagan property.",
        descFr: "Évitez les mauvaises surprises souterraines avant l'achat. Recevez une vidéo numérique et un constat clair pour votre propriété dans l'Okanagan.",
        actionEn: "CCTV Diagnostic + Digital Report",
        actionFr: "Diagnostic CCTV + Rapport Numérique",
        surfaceEn: "Non-Invasive Inspection",
        surfaceFr: "Inspection Non Invasive"
      }
    };

    const chosen = issueMap[STATE.issue] || issueMap.backup;
    return {
      title: isFr ? chosen.titleFr : chosen.titleEn,
      desc: isFr ? chosen.descFr : chosen.descEn,
      cam: camName,
      reach: reach,
      action: isFr ? chosen.actionFr : chosen.actionEn,
      surface: isFr ? chosen.surfaceFr : chosen.surfaceEn
    };
  }

  function updateDiagnosticOutput() {
    const rec = getDiagnosticRecommendation();
    const set = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    set("diag-out-title", rec.title);
    set("diag-out-desc", rec.desc);
    set("diag-out-cam", rec.cam);
    set("diag-out-reach", rec.reach);
    set("diag-out-action", rec.action);
    set("diag-out-surface", rec.surface);

    const mailBtn = document.getElementById("diag-email-btn");
    if (mailBtn) {
      const subject = encodeURIComponent(
        STATE.lang === "fr"
          ? `Demande d'inspection — ${rec.title}`
          : `Pipe Inspection Inquiry — ${rec.title}`
      );
      const body = encodeURIComponent(
        STATE.lang === "fr"
          ? `Bonjour l'équipe Down Under,\n\nJe souhaite discuter d'une intervention :\n- Plan recommandé : ${rec.title}\n- Équipement estimé : ${rec.cam}\n- Ville / Adresse :\n- Détails supplémentaires :\n`
          : `Hello Down Under team,\n\nI would like to discuss a project:\n- Recommended path: ${rec.title}\n- Estimated equipment: ${rec.cam}\n- Property location:\n- Additional details:\n`
      );
      mailBtn.href = `mailto:downunderpi@gmail.com?subject=${subject}&body=${body}`;
    }
  }

  /* ------------------------------------------------------------------------
     4. Event Binding & Initialization
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    // Sync initial theme from DOM (already bootstrapped in <head>)
    const domTheme = document.documentElement.getAttribute("data-theme");
    STATE.theme = domTheme === "light" ? "light" : "dark";

    // Language switch buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });

    // Theme toggle button
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        applyTheme(STATE.theme === "dark" ? "light" : "dark");
      });
    }

    // Mobile menu toggle
    const menuBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links");
    if (menuBtn && navLinks) {
      menuBtn.addEventListener("click", () => {
        const expanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", String(!expanded));
        navLinks.classList.toggle("open", !expanded);
      });

      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          menuBtn.setAttribute("aria-expanded", "false");
          navLinks.classList.remove("open");
        });
      });
    }

    // Diagnostic option buttons
    document.querySelectorAll(".opt-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const group = btn.getAttribute("data-group");
        const val = btn.getAttribute("data-value");
        if (!group || !val) return;

        STATE[group] = val;
        document
          .querySelectorAll(`.opt-btn[data-group="${group}"]`)
          .forEach((b) => {
            const active = b === btn;
            b.classList.toggle("active", active);
            b.setAttribute("aria-pressed", String(active));
          });

        updateDiagnosticOutput();
      });
    });

    // Apply initial language & render diagnostic
    applyLanguage(detectInitialLang());
  });
})();
