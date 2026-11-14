const fs = require('fs');
const TRANSLATIONS = require('../js/translations.js');

const html = fs.readFileSync('bialisphotography-redesign/index.html', 'utf-8');
const regex = /data-i18n=["']([^"']+)["']/g;
const keysInHtml = new Set();
let match;
while ((match = regex.exec(html)) !== null) {
  keysInHtml.add(match[1]);
}

const langs = ['de', 'en', 'hu', 'cs'];
let hasErrors = false;

for (const lang of langs) {
  const dict = TRANSLATIONS[lang];
  const missing = [];
  for (const k of keysInHtml) {
    if (!dict[k]) {
      missing.push(k);
    }
  }
  if (missing.length > 0) {
    console.error(`Language [${lang}] is missing keys:`, missing);
    hasErrors = true;
  } else {
    console.log(`Language [${lang}] has ALL ${keysInHtml.size} keys!`);
  }
}

if (!hasErrors) {
  console.log('✓ All i18n keys are 100% matched across all 4 languages!');
}
