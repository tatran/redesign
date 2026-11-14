const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('bialisphotography-redesign/raw_data/pages.json', 'utf-8'));
const imp = pages.find(p => p.slug === 'impressum');
console.log(imp ? imp.content.rendered.replace(/<[^>]+>/g, '\n').replace(/\n\s*\n/g, '\n') : 'Not found');
