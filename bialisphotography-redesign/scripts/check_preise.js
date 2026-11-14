const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('bialisphotography-redesign/raw_data/pages.json', 'utf-8'));
const pr = pages.find(p => p.slug === 'preise');
console.log('Preise page:', pr);
