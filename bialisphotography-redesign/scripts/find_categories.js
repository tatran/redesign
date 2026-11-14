const fs = require('fs');

const media = JSON.parse(fs.readFileSync('bialisphotography-redesign/raw_data/all_media.json', 'utf-8'));

function findMatches(keyword) {
  return media.filter(m => {
    const s = (m.title.rendered + ' ' + m.source_url + ' ' + (m.alt_text || '')).toLowerCase();
    return s.includes(keyword.toLowerCase());
  });
}

console.log('=== LOGO SEARCH ===');
findMatches('logo').forEach(m => console.log(`[${m.id}] ${m.source_url}`));

console.log('=== HOCHZEIT / WEDDING ===');
const weddings = findMatches('hochzeit');
console.log(`Found ${weddings.length} wedding images. Sample 5:`);
weddings.slice(0, 5).forEach(m => console.log(`[${m.id}] ${m.title.rendered}: ${m.source_url}`));

console.log('=== UNTERNEHMEN / BAUDER / INDUSTRY ===');
const corp = findMatches('bauder').concat(findMatches('industrie')).concat(findMatches('unternehmen'));
console.log(`Found ${corp.length} corporate images. Sample 5:`);
corp.slice(0, 5).forEach(m => console.log(`[${m.id}] ${m.title.rendered}: ${m.source_url}`));

console.log('=== FOTOALBEN / PRODUKTE ===');
const albums = findMatches('album').concat(findMatches('fotobox')).concat(findMatches('wanddeko'));
console.log(`Found ${albums.length} album images. Sample 5:`);
albums.slice(0, 5).forEach(m => console.log(`[${m.id}] ${m.title.rendered}: ${m.source_url}`));
