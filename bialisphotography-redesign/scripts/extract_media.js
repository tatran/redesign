const fs = require('fs');

const media = JSON.parse(fs.readFileSync('bialisphotography-redesign/raw_data/media.json', 'utf-8'));

console.log(`Total media: ${media.length}`);
const sample = media.map(m => ({
  id: m.id,
  title: m.title.rendered,
  alt: m.alt_text,
  url: m.source_url,
  width: m.media_details?.width,
  height: m.media_details?.height,
  mime: m.mime_type
}));

fs.writeFileSync('bialisphotography-redesign/raw_data/media_summary.json', JSON.stringify(sample, null, 2));

console.log('Sample 10 items:');
sample.slice(0, 10).forEach(m => console.log(`- [${m.id}] ${m.title} (${m.width}x${m.height}): ${m.url}`));
