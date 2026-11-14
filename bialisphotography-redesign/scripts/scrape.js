const fs = require('fs');

const html = fs.readFileSync('bialisphotography-redesign/raw_data/homepage.html', 'utf-8');
const regex = /href=["'](https?:\/\/bialisphotography\.at\/[^"'#]*)["']/g;
const links = new Set();
let match;
while ((match = regex.exec(html)) !== null) {
  links.add(match[1]);
}

console.log("Found links:");
for (const link of Array.from(links).sort()) {
  console.log(link);
}
