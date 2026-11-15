/* ==========================================================================
   TGP Kids (tgpkids.ca) — Interactive Portal Engine
   Handles: EN/FR i18n, Light/Dark Theme, Program Cards, Interactive Program
   & Campus Matcher, 5 Developmental Domains Tabs, Holiday Calendar, Team Grid,
   FAQ Accordion, and Pre-Filled Waitlist / Tour Inquiry
   ========================================================================== */

(function () {
  'use strict';

  const state = {
    lang: localStorage.getItem('tgpkids_lang') || 'en',
    theme: localStorage.getItem('tgpkids_theme') || 'light',
    programFilter: 'all',
    domain: 'emotional',
    matcherAge: 'toddler',
    matcherCampus: 'hollydell'
  };

  function t(key) {
    const dict = window.TGPKIDS_I18N[state.lang] || window.TGPKIDS_I18N.en;
    return dict[key] || window.TGPKIDS_I18N.en[key] || key;
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tgpkids_theme', theme);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      );
    }
  }

  function applyLanguage(lang) {
    if (!window.TGPKIDS_I18N[lang]) lang = 'en';
    state.lang = lang;
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('tgpkids_lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) el.innerHTML = val;
    });

    renderPrograms();
    renderMatcher();
    renderDomains();
    renderHolidays();
    renderTeam();
  }

  function renderPrograms() {
    const grid = document.getElementById('programGrid');
    if (!grid) return;

    const list = window.TGPKIDS_PROGRAMS.filter(item => {
      if (state.programFilter === 'all') return true;
      return item.category === state.programFilter;
    });

    grid.innerHTML = list
      .map(item => {
        const title = item.title[state.lang] || item.title.en;
        const desc = item.desc[state.lang] || item.desc.en;
        const ageBadge = item.ageBadge[state.lang] || item.ageBadge.en;
        const ratioBadge = item.ratioBadge[state.lang] || item.ratioBadge.en;
        const highlights = item.highlights[state.lang] || item.highlights.en;

        return `
          <article class="program-card">
            <div>
              <div class="program-card-top">
                <div class="program-icon" aria-hidden="true">${item.icon}</div>
                <div style="display:flex; gap:6px; flex-wrap:wrap; justify-content:flex-end;">
                  <span class="badge-pill badge-age">${ageBadge}</span>
                  <span class="badge-pill badge-ratio">${ratioBadge}</span>
                </div>
              </div>
              <h3>${title}</h3>
              <p>${desc}</p>
            </div>
            <div>
              <ul class="program-highlights">
                ${highlights.map(h => `<li>${h}</li>`).join('')}
              </ul>
              <button type="button" class="btn btn-outline btn-sm" style="width:100%;" data-program-inquire="${title}">
                ${t('card.inquireBtn')}
              </button>
            </div>
          </article>
        `;
      })
      .join('');

    grid.querySelectorAll('[data-program-inquire]').forEach(btn => {
      btn.addEventListener('click', () => {
        const progTitle = btn.getAttribute('data-program-inquire');
        const msgEl = document.getElementById('inquiryMessage');
        if (msgEl) {
          msgEl.value =
            state.lang === 'fr'
              ? `Bonjour l'équipe TGP Kids, je souhaite me renseigner sur le programme « ${progTitle} » et planifier une visite.`
              : `Hi TGP Kids team, I would love to inquire about availability for the "${progTitle}" program and schedule a campus tour.`;
        }
        const contactSec = document.getElementById('contact');
        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
        showToast(`🍎 ${progTitle}`);
      });
    });
  }

  function renderMatcher() {
    const out = document.getElementById('matcherOutput');
    if (!out) return;

    const ageKey = state.matcherAge || 'toddler';
    const campusKey = state.matcherCampus || 'hollydell';
    const data = window.TGPKIDS_MATCHER_DATA[ageKey] || window.TGPKIDS_MATCHER_DATA.toddler;

    const campusInfo = {
      hollydell: {
        name: '875 Hollydell Road, Kelowna, BC',
        manager: 'Haley Houda (Center Manager) & Hunter Eskritt (Assistant Manager)',
        phone: '778-484-6565 / 250-863-6565'
      },
      matt: {
        name: '645 Matt Road, Kelowna, BC',
        manager: 'Erin Emde (Center Manager)',
        phone: '778-484-6565 / 250-863-6565'
      },
      either: {
        name:
          state.lang === 'fr'
            ? '875 Hollydell Rd OU 645 Matt Rd (Première place disponible)'
            : '875 Hollydell Rd OR 645 Matt Rd (First Available Classroom)',
        manager: 'Haley Houda (Hollydell) & Erin Emde (Matt Rd)',
        phone: '778-484-6565 / Director: 250-863-6565'
      }
    }[campusKey];

    const title = data.title[state.lang] || data.title.en;
    const summary = data.summary[state.lang] || data.summary.en;
    const ratio = data.ratio[state.lang] || data.ratio.en;
    const schedule = data.schedule[state.lang] || data.schedule.en;

    out.innerHTML = `
      <div class="finder-result-header">
        <h4>${title}</h4>
        <span class="badge-pill badge-ratio">${ratio}</span>
      </div>
      <p style="font-size:0.9rem; color:var(--text-secondary);">${summary}</p>
      <div class="finder-meta-grid">
        <div class="finder-meta-item">
          <span style="color:var(--text-muted);">${state.lang === 'fr' ? 'Centre sélectionné' : 'Selected Campus'}</span>
          <strong>📍 ${campusInfo.name}</strong>
        </div>
        <div class="finder-meta-item">
          <span style="color:var(--text-muted);">${state.lang === 'fr' ? 'Responsable ECE' : 'Lead Center Manager'}</span>
          <strong>👩‍🏫 ${campusInfo.manager}</strong>
        </div>
        <div class="finder-meta-item">
          <span style="color:var(--text-muted);">${state.lang === 'fr' ? 'Heures d’ouverture' : 'Operating Hours'}</span>
          <strong>🕒 ${schedule}</strong>
        </div>
        <div class="finder-meta-item">
          <span style="color:var(--text-muted);">${state.lang === 'fr' ? 'Contact direct' : 'Direct Line'}</span>
          <strong>📞 ${campusInfo.phone}</strong>
        </div>
      </div>
    `;
  }

  function renderDomains() {
    const tabsWrap = document.getElementById('domainTabs');
    const out = document.getElementById('domainOutput');
    if (!tabsWrap || !out) return;

    const keys = Object.keys(window.TGPKIDS_DOMAINS);
    tabsWrap.innerHTML = keys
      .map(k => {
        const item = window.TGPKIDS_DOMAINS[k];
        const label = item.label[state.lang] || item.label.en;
        const activeClass = k === state.domain ? 'active' : '';
        return `<button type="button" class="domain-tab ${activeClass}" data-domain="${k}">${label}</button>`;
      })
      .join('');

    const current = window.TGPKIDS_DOMAINS[state.domain] || window.TGPKIDS_DOMAINS.emotional;
    out.innerHTML = `
      <h4>${current.title[state.lang] || current.title.en}</h4>
      <p>${current.text[state.lang] || current.text.en}</p>
      <div class="domain-activity-box">
        ✨ ${current.activity[state.lang] || current.activity.en}
      </div>
    `;

    tabsWrap.querySelectorAll('[data-domain]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.domain = btn.getAttribute('data-domain');
        renderDomains();
      });
    });
  }

  function renderHolidays() {
    const tbody = document.getElementById('holidayTableBody');
    if (!tbody) return;

    tbody.innerHTML = window.TGPKIDS_HOLIDAYS.map(row => {
      const name = row.name[state.lang] || row.name.en;
      return `
        <tr>
          <td><strong>${name}</strong></td>
          <td>${row.d2026}</td>
          <td>${row.d2027}</td>
        </tr>
      `;
    }).join('');
  }

  function renderTeam() {
    const grid = document.getElementById('teamGrid');
    if (!grid) return;

    grid.innerHTML = window.TGPKIDS_TEAM.map(member => {
      const role = member.role[state.lang] || member.role.en;
      const cred = member.cred[state.lang] || member.cred.en;
      const bio = member.bio[state.lang] || member.bio.en;

      return `
        <article class="team-card">
          <div class="team-photo-wrap">
            <img src="${member.photo}" alt="${member.name} – ${role}" loading="lazy" />
            <span class="team-role-badge">${role}</span>
          </div>
          <div class="team-body">
            <h3>${member.name}</h3>
            <div class="team-cred">${cred}</div>
            <p class="team-bio">${bio}</p>
          </div>
        </article>
      `;
    }).join('');
  }

  function showToast(message) {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(window.__tgpToastTimer);
    window.__tgpToastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  function initEvents() {
    // Theme toggle
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      });
    }

    // Language buttons
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

    // Program Filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.programFilter = btn.getAttribute('data-filter');
        renderPrograms();
      });
    });

    // Matcher Selects
    const ageSel = document.getElementById('matcherAge');
    const campusSel = document.getElementById('matcherCampus');
    if (ageSel) {
      ageSel.addEventListener('change', () => {
        state.matcherAge = ageSel.value;
        renderMatcher();
      });
    }
    if (campusSel) {
      campusSel.addEventListener('change', () => {
        state.matcherCampus = campusSel.value;
        renderMatcher();
      });
    }

    // Pre-fill waitlist button from Matcher
    const applyBtn = document.getElementById('matcherApplyBtn');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        const formCampus = document.getElementById('inquiryCampus');
        const formMsg = document.getElementById('inquiryMessage');
        const data = window.TGPKIDS_MATCHER_DATA[state.matcherAge] || window.TGPKIDS_MATCHER_DATA.toddler;
        if (formCampus) formCampus.value = state.matcherCampus;
        if (formMsg) {
          const title = data.title[state.lang] || data.title.en;
          formMsg.value =
            state.lang === 'fr'
              ? `Bonjour, nous souhaitons planifier une visite ou rejoindre la liste d'attente (${title}).`
              : `Hello TGP Kids team, we would love to schedule a campus tour and check availability (${title}).`;
        }
        const contactEl = document.getElementById('contact');
        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
        showToast(
          state.lang === 'fr'
            ? '✨ Formulaire pré-rempli avec votre sélection !'
            : '✨ Tour & Waitlist form pre-filled below!'
        );
      });
    }

    // Campus specific tour buttons
    document.querySelectorAll('[data-campus-select]').forEach(btn => {
      btn.addEventListener('click', () => {
        const c = btn.getAttribute('data-campus-select');
        const formCampus = document.getElementById('inquiryCampus');
        if (formCampus) formCampus.value = c;
        const contactEl = document.getElementById('contact');
        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        if (item) item.classList.toggle('open');
      });
    });

    // Inquiry Form Submission -> Mailto to info@tgpkids.ca & manager@tgpkids.ca
    const inquiryForm = document.getElementById('waitlistForm');
    if (inquiryForm) {
      inquiryForm.addEventListener('submit', e => {
        e.preventDefault();
        const parentName = document.getElementById('inquiryName').value.trim();
        const email = document.getElementById('inquiryEmail').value.trim();
        const phone = document.getElementById('inquiryPhone').value.trim();
        const childAge = document.getElementById('inquiryChild').value.trim();
        const campus = document.getElementById('inquiryCampus').value;
        const startDate = document.getElementById('inquiryStart').value.trim();
        const message = document.getElementById('inquiryMessage').value.trim();
        const okgn = document.getElementById('inquiryOkgn').checked;

        const campusLabel =
          campus === 'hollydell'
            ? 'Location 1: 875 Hollydell Road, Kelowna'
            : campus === 'matt'
              ? 'Location 2: 645 Matt Road, Kelowna'
              : 'Either Campus (875 Hollydell Rd / 645 Matt Rd)';

        const subject = encodeURIComponent(
          `TGP Kids Tour / Waitlist Inquiry — ${childAge} (${campusLabel})`
        );
        const bodyLines = [
          `Parent / Guardian Name: ${parentName}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Child Name & Age: ${childAge}`,
          `Preferred Campus: ${campusLabel}`,
          `Desired Start / Tour Preference: ${startDate || 'Flexible'}`,
          `OKGN Sports & Cultural Society Camp Updates: ${okgn ? 'Yes, please subscribe me' : 'No'}`,
          '',
          'Notes / Questions:',
          message || '(None)'
        ];

        window.location.href = `mailto:info@tgpkids.ca?cc=manager@tgpkids.ca&subject=${subject}&body=${encodeURIComponent(
          bodyLines.join('\n')
        )}`;

        showToast(
          state.lang === 'fr'
            ? '🍎 Ouverture de votre client courriel vers info@tgpkids.ca...'
            : '🍎 Opening your email client to info@tgpkids.ca & manager@tgpkids.ca...'
        );
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(state.theme);
    applyLanguage(state.lang);
    initEvents();
  });
})();
