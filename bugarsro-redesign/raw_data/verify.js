const fs = require('fs');
const path = require('path');

global.window = {};
require('../js/data.js');
require('../js/translations.js');

const data = global.window.BUGAR_DATA;
const i18n = global.window.BUGAR_TRANSLATIONS;

function flattenKeys(obj, prefix = '') {
  return Object.entries(obj).flatMap(([k, v]) => {
    const p = prefix ? `${prefix}.${k}` : k;
    return v && typeof v === 'object' && !Array.isArray(v) ? flattenKeys(v, p) : [p];
  });
}

const baseKeys = flattenKeys(i18n.sk);
console.log('Total SK keys:', baseKeys.length);

let keyErrors = 0;
for (const lang of ['de', 'en', 'hu']) {
  const keys = new Set(flattenKeys(i18n[lang]));
  const missing = baseKeys.filter(k => !keys.has(k));
  const extra = [...keys].filter(k => !baseKeys.includes(k));
  console.log(`Lang ${lang}: missing=${missing.length}, extra=${extra.length}`);
  if (missing.length) { console.error('Missing:', missing); keyErrors++; }
}

for (const group of ['services', 'categories', 'catalogItems', 'portfolio']) {
  for (const item of data[group]) {
    for (const lang of ['sk', 'de', 'en', 'hu']) {
      for (const field of ['title', 'desc', 'summary', 'caption', 'spec', 'badge', 'priceHint', 'bullets']) {
        if (item[field] && !item[field][lang]) {
          console.error(`Missing ${lang} in ${group}.${item.id}.${field}`);
          keyErrors++;
        }
      }
    }
  }
}

const imgPaths = [
  'images/bugar-emblem.png',
  'images/favicon.png',
  'favicon.svg',
  ...data.services.map(s => s.image),
  ...data.categories.map(c => c.icon),
  ...data.catalogItems.map(p => p.icon),
  ...data.partners.map(p => p.logo),
  ...data.portfolio.map(p => p.image)
];
let missingFiles = 0;
for (const rel of new Set(imgPaths)) {
  const full = path.join(__dirname, '..', rel);
  if (!fs.existsSync(full)) {
    console.error('MISSING FILE:', full);
    missingFiles++;
  }
}
console.log(`Checked ${new Set(imgPaths).size} unique assets. Missing: ${missingFiles}`);

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const htmlKeys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
const missingHtmlKeys = htmlKeys.filter(k => !baseKeys.includes(k));
console.log(`Checked ${htmlKeys.length} data-i18n refs in index.html. Missing: ${missingHtmlKeys.length}`);
if (missingHtmlKeys.length) console.error('Missing HTML keys:', missingHtmlKeys);

if (keyErrors || missingFiles || missingHtmlKeys.length) process.exit(1);
console.log('ALL STATIC CHECKS PASSED!');
