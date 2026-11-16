/**
 * Strechy Medo - Interactive Roof Cost Calculator
 * Real-time estimation with parametric multipliers and direct inquiry handoff
 */

const baseRates = {
  tile: { min: 55, max: 75, name: "Pálená / Betónová škridla" },
  titanzinc: { min: 90, max: 130, name: "Falcovaný titánzinok / hliník" },
  shingle: { min: 60, max: 85, name: "Plastový / Asfaltový šindeľ" },
  flatpvc: { min: 45, max: 65, name: "PVC fólia Fatrafol" },
  sheetmetal: { min: 42, max: 58, name: "Plechová krytina" }
};

const complexityMultipliers = {
  pitched: 1.0,
  hipped: 1.25,
  flat: 0.95,
  cottage: 1.15
};

const addOnRates = {
  gutter: { min: 1100, max: 1600 },
  snow: { min: 650, max: 950 },
  chimney: { min: 450, max: 750 },
  insulationPerM2: { min: 30, max: 45 },
  disposalPerM2: { min: 14, max: 20 }
};

let calcState = {
  roofType: "pitched",
  area: 160,
  material: "tile",
  addons: {
    gutter: true,
    snow: true,
    chimney: false,
    insulation: false,
    disposal: false
  }
};

function initCalculator() {
  const areaSlider = document.getElementById('calcAreaSlider');
  const areaValue = document.getElementById('calcAreaValue');
  const roofTypeCards = document.querySelectorAll('.calc-type-card');
  const materialSelect = document.getElementById('calcMaterialSelect');
  const addonCheckboxes = document.querySelectorAll('.calc-addon-input');
  const prefillBtn = document.getElementById('calcPrefillBtn');

  if (areaSlider && areaValue) {
    areaSlider.addEventListener('input', (e) => {
      calcState.area = parseInt(e.target.value, 10);
      areaValue.textContent = `${calcState.area} m²`;
      updateCalculation();
    });
  }

  roofTypeCards.forEach(card => {
    card.addEventListener('click', () => {
      roofTypeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      calcState.roofType = card.getAttribute('data-type');
      updateCalculation();
    });
  });

  if (materialSelect) {
    materialSelect.addEventListener('change', (e) => {
      calcState.material = e.target.value;
      updateCalculation();
    });
  }

  addonCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const addonKey = cb.getAttribute('data-addon');
      calcState.addons[addonKey] = cb.checked;
      updateCalculation();
    });
  });

  if (prefillBtn) {
    prefillBtn.addEventListener('click', () => {
      prefillInquiryForm();
    });
  }

  updateCalculation();
}

function updateCalculation() {
  const mat = baseRates[calcState.material] || baseRates.tile;
  const multiplier = complexityMultipliers[calcState.roofType] || 1.0;

  // Base roof cost
  let minCost = calcState.area * mat.min * multiplier;
  let maxCost = calcState.area * mat.max * multiplier;

  // Add-ons
  if (calcState.addons.gutter) {
    minCost += addOnRates.gutter.min;
    maxCost += addOnRates.gutter.max;
  }
  if (calcState.addons.snow) {
    minCost += addOnRates.snow.min;
    maxCost += addOnRates.snow.max;
  }
  if (calcState.addons.chimney) {
    minCost += addOnRates.chimney.min;
    maxCost += addOnRates.chimney.max;
  }
  if (calcState.addons.insulation) {
    minCost += calcState.area * addOnRates.insulationPerM2.min;
    maxCost += calcState.area * addOnRates.insulationPerM2.max;
  }
  if (calcState.addons.disposal) {
    minCost += calcState.area * addOnRates.disposalPerM2.min;
    maxCost += calcState.area * addOnRates.disposalPerM2.max;
  }

  // Round to nearest 50
  const finalMin = Math.round(minCost / 50) * 50;
  const finalMax = Math.round(maxCost / 50) * 50;

  const minEl = document.getElementById('calcPriceMin');
  const maxEl = document.getElementById('calcPriceMax');
  const detailsEl = document.getElementById('calcSummaryDetails');

  if (minEl && maxEl) {
    minEl.textContent = `${finalMin.toLocaleString()} €`;
    maxEl.textContent = `${finalMax.toLocaleString()} €`;
  }

  if (detailsEl) {
    const selectedAddonsList = [];
    if (calcState.addons.gutter) selectedAddonsList.push("Odkvapy");
    if (calcState.addons.snow) selectedAddonsList.push("Snehové zábrany");
    if (calcState.addons.chimney) selectedAddonsList.push("Oplechovanie komína");
    if (calcState.addons.insulation) selectedAddonsList.push("Zateplenie");
    if (calcState.addons.disposal) selectedAddonsList.push("Likvidácia");

    const addonsText = selectedAddonsList.length > 0 ? selectedAddonsList.join(", ") : "Bez doplnkov";
    detailsEl.textContent = `${calcState.area} m² • ${mat.name} • ${addonsText}`;
  }
}

function prefillInquiryForm() {
  const serviceMap = {
    tile: "serviceOption1",
    titanzinc: "serviceOption2",
    flatpvc: "serviceOption3",
    shingle: "serviceOption4",
    sheetmetal: "serviceOption1"
  };

  const serviceSelect = document.getElementById('contactService');
  if (serviceSelect) {
    const targetVal = serviceMap[calcState.material] || "serviceOption1";
    serviceSelect.value = targetVal;
  }

  const messageBox = document.getElementById('contactMessage');
  if (messageBox) {
    const minText = document.getElementById('calcPriceMin')?.textContent || '';
    const maxText = document.getElementById('calcPriceMax')?.textContent || '';
    const activeLang = window.currentActiveLang || 'sk';

    let prefillText = "";
    if (activeLang === 'sk') {
      prefillText = `Dobrý deň pán Medvec, mal(a) by som záujem o nezáväznú cenovú ponuku a obhliadku.\n\nParametre strechy z kalkulačky:\n- Typ strechy: ${calcState.roofType}\n- Rozloha: ${calcState.area} m²\n- Preferovaná krytina: ${calcState.material}\n- Orientačný rozpočet z webu: ${minText} – ${maxText}\n\nProsím o kontaktovanie ohľadom termínu obhliadky.`;
    } else if (activeLang === 'en') {
      prefillText = `Hello Mr. Medvec, I would like to request a non-binding quotation and on-site survey.\n\nRoof parameters from calculator:\n- Roof architecture: ${calcState.roofType}\n- Area: ${calcState.area} m²\n- Material: ${calcState.material}\n- Estimated web budget: ${minText} – ${maxText}\n\nPlease contact me regarding an inspection date.`;
    } else if (activeLang === 'de') {
      prefillText = `Guten Tag Herr Medvec, ich interessiere mich für ein unverbindliches Angebot und eine Vor-Ort-Besichtigung.\n\nDachdaten aus dem Kalkulator:\n- Dachform: ${calcState.roofType}\n- Fläche: ${calcState.area} m²\n- Material: ${calcState.material}\n- Richtwert aus dem Web: ${minText} – ${maxText}\n\nIch bitte um Kontaktaufnahme zwecks Terminvereinbarung.`;
    } else if (activeLang === 'pl') {
      prefillText = `Dzień dobry Panie Medvec, jestem zainteresowany(a) bezpłatną wyceną i oględzinami.\n\nParametry dachu z kalkulatora:\n- Typ dachu: ${calcState.roofType}\n- Powierzchnia: ${calcState.area} m²\n- Preferowane pokrycie: ${calcState.material}\n- Szacunkowy kosztorys: ${minText} – ${maxText}\n\nProszę o kontakt w sprawie terminu spotkania.`;
    } else if (activeLang === 'hu') {
      prefillText = `Jó napot kívánok Medvec úr, szeretnék kötelezettségmentes árajánlatot és helyszíni felmérést kérni.\n\nA tető adatai a kalkulátorból:\n- Tetőforma: ${calcState.roofType}\n- Felület: ${calcState.area} m²\n- Kívánt fedőanyag: ${calcState.material}\n- Becsült irányár: ${minText} – ${maxText}\n\nKérem keressen a felmérés időpontjával kapcsolatban.`;
    }

    messageBox.value = prefillText;
  }

  // Smooth scroll to contact section
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    messageBox?.focus();
  }
}

window.initCalculator = initCalculator;
