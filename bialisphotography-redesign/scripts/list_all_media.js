const fs = require('fs');

const media = JSON.parse(fs.readFileSync('bialisphotography-redesign/raw_data/media.json', 'utf-8'));

console.log('--- ALL MEDIA TITLES & URLS ---');
media.forEach(m => {
  console.log(`[${m.id}] ${m.title.rendered} -> ${m.source_url}`);
});
