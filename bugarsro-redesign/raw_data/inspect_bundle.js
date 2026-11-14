const fs = require('fs');
const code = fs.readFileSync('bugarsro-redesign/raw_data/page.js', 'utf8');

const paths = [...new Set(code.match(/['"`](\/[a-zA-Z0-9_.\-\/]+|https?:\/\/[^'"`\s]+)['"`]/g) || [])]
  .map(s => s.slice(1, -1))
  .filter(s => !s.startsWith('/_app') && !s.includes('w3.org'));

console.log('=== PATHS & URLS ===');
console.log(paths.join('\n'));

const strings = [...new Set(code.match(/"[^"\n\\]{3,160}"|'[^'\n\\]{3,160}'/g) || [])]
  .map(s => s.slice(1, -1))
  .filter(s => /[áäčďéíĺľňóôŕšťúýžÁÄČĎÉÍĹĽŇÓÔŔŠŤÚÝŽ]|BUG|IČO|DIČ|Bratislav|Šamorín|Voda|Kúren|Plyn|@|\+421|SLUŽBY|PRODUKT|OTVÁRAC|SKLAD|PREDAJ|E-SHOP|KÚPEĽ|KOTOL|SERVIS|MONTÁŽ|REALIZ/i.test(s));

console.log('\n=== SK & BUSINESS STRINGS (' + strings.length + ') ===');
console.log(strings.join('\n'));
