/* ==========================================================================
   Tiny Treasures Kelowna — Interactive Engine
   Handles: EN/FR i18n, Light/Dark Theme, Program Cards, BC CCFRI/ACCB Estimator,
   Child Adaptation Advisor, and Pre-Filled Registration Inquiry Form
   ========================================================================== */

(function () {
  'use strict';

  const state = {
    lang: localStorage.getItem('tinytreasures_lang') || 'en',
    theme: localStorage.getItem('tinytreasures_theme') || 'light',
    filter: 'all',
    advisorTopic: 'separation',
    selectedProgram: 'infant',
    scheduleRatio: 1.0,
    ccfriEnabled: true,
    accbAmount: 0
  };

  function t(key) {
    const dict = window.TINYTREASURES_I18N[state.lang] || window.TINYTREASURES_I18N.en;
    return dict[key] || window.TINYTREASURES_I18N.en[key] || key;
  }

  function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(window.__ttToastTimer);
    window.__ttToastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tinytreasures_theme', theme);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  function applyLanguage(lang) {
    if (!window.TINYTREASURES_I18N[lang]) lang = 'en';
    state.lang = lang;
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('tinytreasures_lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) el.innerHTML = val;
    });

    renderPrograms();
    renderSubsidyProgramOptions();
    updateSubsidyCalculator();
    renderAdvisor();
  }

  function renderPrograms() {
    const grid = document.getElementById('programGrid');
    if (!grid) return;

    const list = window.TINYTREASURES_PROGRAMS.filter(item => {
      if (state.filter === 'all') return true;
      return item.category === state.filter;
    });

    grid.innerHTML = list.map(item => {
      const title = item.title[state.lang] || item.title.en;
      const desc = item.desc[state.lang] || item.desc.en;
      const features = item.features[state.lang] || item.features.en;
      const ageBadge = item.ageBadge[state.lang] || item.ageBadge.en;
      const highlight = item.highlight[state.lang] || item.highlight.en;
      const ratio = item.ratio[state.lang] || item.ratio.en;

      return `
        <article class="program-card">
          <div class="program-media">
            <img src="${item.image}" alt="${title}" loading="lazy" />
            <div class="program-badges">
              <span class="badge-pill badge-age">${ageBadge}</span>
              <span class="badge-pill badge-highlight">✨ ${highlight}</span>
            </div>
          </div>
          <div class="program-body">
            <h3 class="program-title">${title}</h3>
            <p class="program-desc">${desc}</p>
            <div class="program-features">${features}</div>
            <div class="program-footer">
              <span class="program-ratio">💚 ${ratio}</span>
              <button type="button" class="btn btn-primary btn-sm" data-inquire-program="${item.id}">
                ${t('card.inquireBtn')}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    grid.querySelectorAll('[data-inquire-program]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-inquire-program');
        const prog = window.TINYTREASURES_PROGRAMS.find(p => p.id === id);
        if (!prog) return;
        state.selectedProgram = id;
        const selectEl = document.getElementById('calcProgramSelect');
        if (selectEl) selectEl.value = id;
        updateSubsidyCalculator();

        const notesEl = document.getElementById('regNotes');
        if (notesEl) {
          const title = prog.title[state.lang] || prog.title.en;
          const prefix = state.lang === 'fr'
            ? `Programme souhaité : ${title}. `
            : `Interested in Program: ${title}. `;
          if (!notesEl.value.includes(title)) {
            notesEl.value = prefix + notesEl.value;
          }
        }
        const regSection = document.getElementById('register');
        if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
        showToast(`🌱 ${prog.title[state.lang] || prog.title.en}`);
      });
    });
  }

  function renderSubsidyProgramOptions() {
    const selectEl = document.getElementById('calcProgramSelect');
    if (!selectEl) return;
    const currentVal = state.selectedProgram;
    selectEl.innerHTML = window.TINYTREASURES_PROGRAMS.map(p => {
      const label = p.title[state.lang] || p.title.en;
      return `<option value="${p.id}" ${p.id === currentVal ? 'selected' : ''}>${label}</option>`;
    }).join('');
  }

  function updateSubsidyCalculator() {
    const prog = window.TINYTREASURES_PROGRAMS.find(p => p.id === state.selectedProgram) || window.TINYTREASURES_PROGRAMS[0];
    const ratio = state.scheduleRatio;

    const baseVal = Math.round(prog.baseMonthlyEstimate * ratio);
    const ccfriReduction = state.ccfriEnabled ? Math.round(prog.ccfriMaxReduction * ratio) : 0;
    const afterCcfri = Math.max(200, baseVal - ccfriReduction);
    const accbSaving = Math.min(afterCcfri, Math.round(state.accbAmount * ratio));
    const finalNet = Math.max(0, afterCcfri - accbSaving);

    const baseEl = document.getElementById('calcBaseVal');
    const ccfriEl = document.getElementById('calcCcfriVal');
    const accbEl = document.getElementById('calcAccbVal');
    const finalEl = document.getElementById('calcFinalVal');

    if (baseEl) baseEl.textContent = `$${baseVal} CAD / mo`;
    if (ccfriEl) ccfriEl.textContent = `-$${ccfriReduction} CAD / mo`;
    if (accbEl) accbEl.textContent = `-$${accbSaving} CAD / mo`;
    if (finalEl) finalEl.textContent = `~$${finalNet} CAD / mo`;
  }

  function renderAdvisor() {
    const item = window.TINYTREASURES_ADVISOR[state.advisorTopic] || window.TINYTREASURES_ADVISOR.separation;
    const box = document.getElementById('advisorOutput');
    if (!box) return;

    const title = item.title[state.lang] || item.title.en;
    const desc = item.desc[state.lang] || item.desc.en;
    const steps = item.steps[state.lang] || item.steps.en;

    box.innerHTML = `
      <h4>${title}</h4>
      <p>${desc}</p>
      <ul class="advisor-steps">
        ${steps.map(s => `<li><span>${s}</span></li>`).join('')}
      </ul>
      <button type="button" class="btn btn-outline btn-sm" id="advisorApplyBtn">
        ${t('adv.applyBtn')}
      </button>
    `;

    const applyBtn = document.getElementById('advisorApplyBtn');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        const notesEl = document.getElementById('regNotes');
        if (notesEl) {
          const line = state.lang === 'fr'
            ? `Priorité d’adaptation : ${title}. `
            : `Care & Adaptation Focus: ${title}. `;
          if (!notesEl.value.includes(title)) {
            notesEl.value = (notesEl.value ? notesEl.value + '\n' : '') + line;
          }
        }
        const regSection = document.getElementById('register');
        if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
        showToast(`💚 Added "${title}" to your inquiry form`);
      });
    }
  }

  function initEvents() {
    // Theme toggle
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      });
    }

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
      });
    });

    // Mobile Menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (mobileBtn && mainNav) {
      mobileBtn.addEventListener('click', () => {
        mainNav.classList.toggle('open');
      });
      mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mainNav.classList.remove('open'));
      });
    }

    // Program filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.filter = btn.getAttribute('data-filter') || 'all';
        renderPrograms();
      });
    });

    // Subsidy calculator controls
    const progSelect = document.getElementById('calcProgramSelect');
    if (progSelect) {
      progSelect.addEventListener('change', e => {
        state.selectedProgram = e.target.value;
        updateSubsidyCalculator();
      });
    }

    const schedSelect = document.getElementById('calcScheduleSelect');
    if (schedSelect) {
      schedSelect.addEventListener('change', e => {
        state.scheduleRatio = parseFloat(e.target.value) || 1.0;
        updateSubsidyCalculator();
      });
    }

    const ccfriCheck = document.getElementById('calcCcfriCheck');
    if (ccfriCheck) {
      ccfriCheck.addEventListener('change', e => {
        state.ccfriEnabled = e.target.checked;
        updateSubsidyCalculator();
      });
    }

    const accbSelect = document.getElementById('calcAccbSelect');
    if (accbSelect) {
      accbSelect.addEventListener('change', e => {
        state.accbAmount = parseInt(e.target.value, 10) || 0;
        updateSubsidyCalculator();
      });
    }

    const sendEstimateBtn = document.getElementById('sendEstimateBtn');
    if (sendEstimateBtn) {
      sendEstimateBtn.addEventListener('click', () => {
        const prog = window.TINYTREASURES_PROGRAMS.find(p => p.id === state.selectedProgram) || window.TINYTREASURES_PROGRAMS[0];
        const finalEl = document.getElementById('calcFinalVal');
        const notesEl = document.getElementById('regNotes');
        if (notesEl && finalEl) {
          const summary = `BC Subsidy Estimate — Program: ${prog.title[state.lang] || prog.title.en}, CCFRI: ${state.ccfriEnabled ? 'Yes' : 'No'}, Est. Net: ${finalEl.textContent}. Please send current custom rates & availability.`;
          notesEl.value = summary;
        }
        const regSection = document.getElementById('register');
        if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
        showToast('🧮 Estimate copied to your registration inquiry below!');
      });
    }

    // Advisor tabs
    document.querySelectorAll('.advisor-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.advisor-tab').forEach(b => b.classList.remove('active'));
        tab.classList.add('active');
        state.advisorTopic = tab.getAttribute('data-topic') || 'separation';
        renderAdvisor();
      });
    });

    // Registration Form Submit (mailto compose + confirmation)
    const regForm = document.getElementById('registrationForm');
    if (regForm) {
      regForm.addEventListener('submit', e => {
        e.preventDefault();
        const firstName = (document.getElementById('regFirstName')?.value || '').trim();
        const lastName = (document.getElementById('regLastName')?.value || '').trim();
        const email = (document.getElementById('regEmail')?.value || '').trim();
        const phone = (document.getElementById('regPhone')?.value || '').trim();
        const address = (document.getElementById('regAddress')?.value || '').trim();
        const childName = (document.getElementById('regChildName')?.value || '').trim();
        const childDob = (document.getElementById('regChildDob')?.value || '').trim();
        const startDate = (document.getElementById('regStartDate')?.value || '').trim();
        const daysHours = (document.getElementById('regDaysHours')?.value || '').trim();
        const notes = (document.getElementById('regNotes')?.value || '').trim();

        const subject = encodeURIComponent(`Daycare Inquiry & Tour Request: ${childName} (${firstName} ${lastName})`);
        const bodyLines = [
          `Hello Mrs. Tammy & Tiny Treasures Kelowna Team,`,
          ``,
          `We would love to inquire about childcare availability / schedule a visit at 1310 Graham Road:`,
          ``,
          `• Parent Name: ${firstName} ${lastName}`,
          `• Email: ${email}`,
          `• Phone: ${phone}`,
          `• Address / Area: ${address || 'Kelowna, BC'}`,
          `• Child's Name: ${childName}`,
          `• Child's Birthday / Age: ${childDob}`,
          `• Preferred Start Date: ${startDate}`,
          `• Days & Hours Needed: ${daysHours}`,
          `• Additional Notes / Exceptional Needs / Subsidy:`,
          `${notes || 'None specified'}`,
          ``,
          `Thank you!`,
          `${firstName} ${lastName}`
        ];
        const mailtoUrl = `mailto:tinytreasureskelowna@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
        window.location.href = mailtoUrl;
        showToast('✉️ Opening email inquiry to tinytreasureskelowna@gmail.com...');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(state.theme);
    applyLanguage(state.lang);
    initEvents();
  });
})();
