/**
 * SANAE - Quality Assurance & Software Testing Portal
 * Interactive Logic inspired by Lovable.dev "Expense It" Mobile Template
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Viewport & Device Mode Switcher (Mobile App View vs Desktop Portal)
  // --------------------------------------------------------------------------
  const appViewport = document.getElementById('appViewport');
  const viewMobileBtn = document.getElementById('viewMobileBtn');
  const viewDesktopBtn = document.getElementById('viewDesktopBtn');

  function setViewMode(mode) {
    if (mode === 'desktop') {
      appViewport.classList.add('desktop-mode');
      viewDesktopBtn.classList.add('active');
      viewMobileBtn.classList.remove('active');
      showToast('Switched to Desktop Portal view');
    } else {
      appViewport.classList.remove('desktop-mode');
      viewMobileBtn.classList.add('active');
      viewDesktopBtn.classList.remove('active');
      showToast('Switched to Mobile App view');
    }
    localStorage.setItem('sanae_view_mode', mode);
  }

  if (viewMobileBtn) viewMobileBtn.addEventListener('click', () => setViewMode('mobile'));
  if (viewDesktopBtn) viewDesktopBtn.addEventListener('click', () => setViewMode('desktop'));

  // Restore saved view mode if present
  const savedView = localStorage.getItem('sanae_view_mode');
  if (savedView === 'desktop') setViewMode('desktop');

  // --------------------------------------------------------------------------
  // 2. Theme Toggle (Dark Mode / Light Mode)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  function toggleTheme() {
    const isLight = document.body.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('sanae_theme', 'dark');
      showToast('Dark mode enabled');
    } else {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('sanae_theme', 'light');
      showToast('Light mode enabled');
    }
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (localStorage.getItem('sanae_theme') === 'light') {
    document.body.setAttribute('data-theme', 'light');
  }

  // --------------------------------------------------------------------------
  // 3. Persona Switcher (CTO / QA Engineer / Product Manager)
  // --------------------------------------------------------------------------
  const personaSelect = document.getElementById('personaSelect');
  const personaBannerNote = document.getElementById('personaBannerNote');

  const personaNotes = {
    cto: 'Viewing as CTO / Executive: Quality gates, ROI analytics, ISTQB compliance and budget approvals.',
    qa: 'Viewing as Lead QA Engineer: Active automation runs, Robot Framework suites and Copado integration.',
    pm: 'Viewing as Product Manager: Sprint test velocity, defect escape rate and release readiness.'
  };

  if (personaSelect) {
    personaSelect.addEventListener('change', (e) => {
      const role = e.target.value;
      if (personaBannerNote && personaNotes[role]) {
        personaBannerNote.innerText = personaNotes[role];
        showToast(`Switched persona to ${role.toUpperCase()}`);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. Bottom Navigation & Tab Routing (PWA Navigation)
  // --------------------------------------------------------------------------
  const navTabs = document.querySelectorAll('.nav-tab-item, .floating-scan-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  function switchTab(targetTabId) {
    // Deactivate all nav tabs
    document.querySelectorAll('.nav-tab-item').forEach(tab => {
      if (tab.getAttribute('data-tab') === targetTabId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Hide all tab panes
    tabPanes.forEach(pane => pane.classList.remove('active'));

    // Show target pane
    const targetPane = document.getElementById(`tab-${targetTabId}`);
    if (targetPane) {
      targetPane.classList.add('active');
      // Scroll app body to top
      const appBody = document.querySelector('.app-body');
      if (appBody) appBody.scrollTop = 0;
    }
  }

  navTabs.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.getAttribute('data-tab');
      if (tab) switchTab(tab);
    });
  });

  // Action pills that trigger tab switches
  document.querySelectorAll('[data-action-tab]').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.getAttribute('data-action-tab');
      if (target) switchTab(target);
    });
  });

  // --------------------------------------------------------------------------
  // 5. AI Requirements & Spec Scanner (ExpenseIt Camera Simulation)
  // --------------------------------------------------------------------------
  const scannerViewfinder = document.getElementById('scannerViewfinder');
  const scannerResults = document.getElementById('scannerResults');
  const presetChips = document.querySelectorAll('.preset-chip');
  const resSpecTitle = document.getElementById('resSpecTitle');
  const resCasesCount = document.getElementById('resCasesCount');
  const resHoursEst = document.getElementById('resHoursEst');
  const resAutoFeasible = document.getElementById('resAutoFeasible');
  const resCasesList = document.getElementById('resCasesList');

  const presetData = {
    fintech: {
      title: 'Fintech Payment Gateway & 3D-Secure 2.0',
      casesCount: '28 Cases',
      hoursEst: '44 Hrs',
      autoFeasible: '96% (High)',
      cases: [
        'Happy Path: Credit Card tokenization & instant 3DS challenge',
        'Edge Case: Partial network drop during PSD2 biometric auth',
        'Security: SQLi & sensitive cardholder PAN masking in logs',
        'Negative: Expired CVV & fraudulent card BIN rejection',
        'Regression: Robot Framework automated regression suite'
      ]
    },
    telehealth: {
      title: 'Telehealth EHR & Prescription Dispatch',
      casesCount: '34 Cases',
      hoursEst: '52 Hrs',
      autoFeasible: '88% (Med-High)',
      cases: [
        'E-Prescription cryptographic signature verification',
        'Video consultation WebRTC packet loss & bandwidth throttling',
        'HIPAA/GDPR patient history access control audit',
        'Cross-platform iOS/Android push notification delivery'
      ]
    },
    ecommerce: {
      title: 'E-Commerce One-Page Checkout with Klarna/Stripe',
      casesCount: '22 Cases',
      hoursEst: '32 Hrs',
      autoFeasible: '98% (Very High)',
      cases: [
        'Multi-currency dynamic VAT and shipping surcharge calculation',
        'Coupon code race condition handling under high concurrency',
        'Aiviro visual regression testing across 8 screen resolutions',
        'End-to-End order fulfillment webhook verification'
      ]
    },
    erp: {
      title: 'Enterprise ERP & Salesforce Cloud Migration',
      casesCount: '65 Cases',
      hoursEst: '120 Hrs',
      autoFeasible: '92% (High)',
      cases: [
        'Copado Robotic Testing automated pipeline verification',
        'Legacy Oracle DB to Salesforce schema reconciliation',
        'Role-based multi-tier approval matrix validation',
        'High-volume stress test: 10,000 invoices batched concurrently'
      ]
    }
  };

  function runScannerSimulation(presetKey) {
    const data = presetData[presetKey] || presetData.fintech;

    if (scannerViewfinder) {
      scannerViewfinder.style.borderColor = '#06b6d4';
      const hintTitle = scannerViewfinder.querySelector('.scanner-hint-title');
      if (hintTitle) hintTitle.innerText = 'AI Scanning & Extracting Test Cases...';
    }

    setTimeout(() => {
      if (scannerViewfinder) {
        scannerViewfinder.style.borderColor = 'rgba(255, 59, 48, 0.4)';
        const hintTitle = scannerViewfinder.querySelector('.scanner-hint-title');
        if (hintTitle) hintTitle.innerText = 'Scan Complete! Tap to analyze another spec';
      }

      if (resSpecTitle) resSpecTitle.innerText = data.title;
      if (resCasesCount) resCasesCount.innerText = data.casesCount;
      if (resHoursEst) resHoursEst.innerText = data.hoursEst;
      if (resAutoFeasible) resAutoFeasible.innerText = data.autoFeasible;

      if (resCasesList) {
        resCasesList.innerHTML = '';
        data.cases.forEach(c => {
          const item = document.createElement('div');
          item.className = 'extracted-case-item';
          item.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>${c}</span>`;
          resCasesList.appendChild(item);
        });
      }

      if (scannerResults) {
        scannerResults.classList.add('active');
        scannerResults.scrollIntoView({ behavior: 'smooth' });
      }

      showToast('AI Spec parsed: Test cases & effort generated!');
    }, 900);
  }

  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const preset = chip.getAttribute('data-preset');
      runScannerSimulation(preset);
    });
  });

  if (scannerViewfinder) {
    scannerViewfinder.addEventListener('click', () => {
      runScannerSimulation('fintech');
    });
  }

  // --------------------------------------------------------------------------
  // 6. QA Budget & ROI Calculator
  // --------------------------------------------------------------------------
  const calcWeeks = document.getElementById('calcWeeks');
  const calcWeeksVal = document.getElementById('calcWeeksVal');
  const calcEngineers = document.getElementById('calcEngineers');
  const calcEngineersVal = document.getElementById('calcEngineersVal');
  const calcType = document.getElementById('calcType');
  const calcSeniority = document.getElementById('calcSeniority');

  const outTotalBudget = document.getElementById('outTotalBudget');
  const outBugsCaught = document.getElementById('outBugsCaught');
  const outCostSaved = document.getElementById('outCostSaved');
  const outRoiPercent = document.getElementById('outRoiPercent');

  function calculateQABudget() {
    if (!calcWeeks || !calcEngineers || !calcType) return;

    const weeks = parseInt(calcWeeks.value) || 6;
    const engineers = parseInt(calcEngineers.value) || 2;
    const type = calcType.value; // 'automation', 'manual', 'fullcycle', 'security'
    const seniority = calcSeniority ? calcSeniority.value : 'mid';

    if (calcWeeksVal) calcWeeksVal.innerText = `${weeks} Weeks`;
    if (calcEngineersVal) calcEngineersVal.innerText = `${engineers} QA Engineer${engineers > 1 ? 's' : ''}`;

    // Rate calculation (approx standard Central Europe / Slovakia hourly blended rate)
    // 40 hours per week per engineer
    let baseWeeklyRate = 2200; // EUR per engineer per week
    if (type === 'automation') baseWeeklyRate = 2600;
    if (type === 'security') baseWeeklyRate = 3200;
    if (type === 'fullcycle') baseWeeklyRate = 2800;

    if (seniority === 'senior') baseWeeklyRate *= 1.25;
    if (seniority === 'lead') baseWeeklyRate *= 1.4;

    const totalCost = weeks * engineers * baseWeeklyRate;

    // Industry metrics: Average 18 defects caught per sprint per engineer
    const estimatedBugs = Math.round(weeks * engineers * 8.5);

    // Cost to fix bug in production vs testing (NIST benchmark: ~$2,500 in prod vs $250 in QA)
    const productionFixCost = estimatedBugs * 2200;
    const netSavings = Math.max(0, productionFixCost - totalCost);
    const roi = Math.round((netSavings / totalCost) * 100);

    if (outTotalBudget) outTotalBudget.innerText = `€ ${totalCost.toLocaleString('de-DE')}`;
    if (outBugsCaught) outBugsCaught.innerText = `${estimatedBugs} Defects`;
    if (outCostSaved) outCostSaved.innerText = `€ ${netSavings.toLocaleString('de-DE')}`;
    if (outRoiPercent) outRoiPercent.innerText = `+${roi}% ROI`;
  }

  [calcWeeks, calcEngineers, calcType, calcSeniority].forEach(el => {
    if (el) {
      el.addEventListener('input', calculateQABudget);
      el.addEventListener('change', calculateQABudget);
    }
  });

  calculateQABudget();

  // --------------------------------------------------------------------------
  // 7. "Ask AI QA Advisor" Assistant Sheet (ExpenseIt AI Assistant)
  // --------------------------------------------------------------------------
  const openAiBtn = document.querySelectorAll('.open-ai-btn');
  const aiDrawer = document.getElementById('aiDrawer');
  const aiOverlay = document.getElementById('aiOverlay');
  const aiCloseBtn = document.getElementById('aiCloseBtn');
  const aiChatInput = document.getElementById('aiChatInput');
  const aiSendBtn = document.getElementById('aiSendBtn');
  const aiChatMessages = document.getElementById('aiChatMessages');
  const aiPromptChips = document.querySelectorAll('.ai-prompt-chip');

  function openAiAssistant() {
    if (aiDrawer) aiDrawer.classList.add('open');
    if (aiOverlay) aiOverlay.classList.add('open');
  }

  function closeAiAssistant() {
    if (aiDrawer) aiDrawer.classList.remove('open');
    if (aiOverlay) aiOverlay.classList.remove('open');
  }

  openAiBtn.forEach(btn => btn.addEventListener('click', openAiAssistant));
  if (aiCloseBtn) aiCloseBtn.addEventListener('click', closeAiAssistant);
  if (aiOverlay) aiOverlay.addEventListener('click', closeAiAssistant);

  const aiResponses = {
    copado: "Copado Robotic Testing delivers cloud-based, AI-powered test automation designed for low-code and complex enterprise ecosystems like Salesforce. SANAE specializes in building resilient Copado suites with self-healing tests and CI/CD triggers.",
    robot: "Robot Framework is a keyword-driven open-source framework perfect for end-to-end acceptance test-driven development (ATDD). As members of the Robot Framework Foundation, SANAE creates highly reusable test libraries for web, mobile, and API testing.",
    istqb: "SANAE is an official ISTQB® Gold Partner. 100% of our test engineers are ISTQB certified, ensuring your software passes international quality, traceability, and defect management standards.",
    pricing: "Our engagement models include Dedicated QA Teams (staff augmentation), Project-Based Fixed Price Audits, and Quality-as-a-Service (QaaS). Typical blended rates range from €45 to €75/hour depending on technical seniority and automation requirements."
  };

  function sendAiMessage(text) {
    if (!text.trim() || !aiChatMessages) return;

    // User message
    const userMsg = document.createElement('div');
    userMsg.className = 'ai-msg user';
    userMsg.innerText = text;
    aiChatMessages.appendChild(userMsg);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;

    if (aiChatInput) aiChatInput.value = '';

    // Generate AI response
    setTimeout(() => {
      let reply = "Thank you for asking! SANAE provides customized QA solutions backed by ISTQB standards, Robot Framework automation, and enterprise test governance. Our team in Bratislava is ready to audit your system.";
      const lower = text.toLowerCase();
      if (lower.includes('copado')) reply = aiResponses.copado;
      else if (lower.includes('robot') || lower.includes('automation')) reply = aiResponses.robot;
      else if (lower.includes('istqb') || lower.includes('certif')) reply = aiResponses.istqb;
      else if (lower.includes('cost') || lower.includes('price') || lower.includes('rate')) reply = aiResponses.pricing;

      const botMsg = document.createElement('div');
      botMsg.className = 'ai-msg bot';
      botMsg.innerText = reply;
      aiChatMessages.appendChild(botMsg);
      aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    }, 450);
  }

  if (aiSendBtn && aiChatInput) {
    aiSendBtn.addEventListener('click', () => sendAiMessage(aiChatInput.value));
    aiChatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendAiMessage(aiChatInput.value);
    });
  }

  aiPromptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      sendAiMessage(chip.innerText);
    });
  });

  // --------------------------------------------------------------------------
  // 8. Contact & Project Request Modal
  // --------------------------------------------------------------------------
  const hireModal = document.getElementById('hireModal');
  const hireModalClose = document.getElementById('hireModalClose');
  const openHireBtns = document.querySelectorAll('.open-hire-modal');
  const hireForm = document.getElementById('hireForm');

  openHireBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (hireModal) hireModal.classList.add('open');
    });
  });

  if (hireModalClose && hireModal) {
    hireModalClose.addEventListener('click', () => hireModal.classList.remove('open'));
    hireModal.addEventListener('click', (e) => {
      if (e.target === hireModal) hireModal.classList.remove('open');
    });
  }

  if (hireForm) {
    hireForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (hireModal) hireModal.classList.remove('open');
      showToast('Thank you! Your QA request has been submitted to SANAE.');
      hireForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 9. Toast Notification Helper
  // --------------------------------------------------------------------------
  function showToast(msg) {
    let toast = document.getElementById('appToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'appToast';
      toast.className = 'app-toast';
      toast.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span class="toast-text"></span>`;
      document.body.appendChild(toast);
    }
    const textEl = toast.querySelector('.toast-text');
    if (textEl) textEl.innerText = msg;

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  window.showToast = showToast;
});
