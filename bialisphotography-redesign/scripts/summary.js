const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('bialisphotography-redesign/raw_data/pages.json', 'utf-8'));
const media = JSON.parse(fs.readFileSync('bialisphotography-redesign/raw_data/media.json', 'utf-8'));

console.log('=== PAGES SUMMARY ===');
for (const p of pages) {
  const cleanContent = p.content.rendered.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`\n--- [${p.slug}] ${p.title.rendered} ---`);
  console.log(`Length: ${cleanContent.length} chars`);
  console.log(`Excerpt: ${cleanContent.slice(0, 300)}...`);
}
