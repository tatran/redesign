const fs = require('fs');
const path = require('path');

const baseDir = 'bialisphotography-redesign';
const files = ['index.html', 'js/app.js'];

let allGood = true;

for (const relFile of files) {
  const content = fs.readFileSync(path.join(baseDir, relFile), 'utf-8');
  const imgMatches = content.match(/images\/[a-zA-Z0-9_\-\.]+\.(jpg|png|svg|webp)/g) || [];
  
  for (const img of imgMatches) {
    const fullPath = path.join(baseDir, img);
    if (!fs.existsSync(fullPath)) {
      console.error(`Missing image: ${fullPath} (referenced in ${relFile})`);
      allGood = false;
    }
  }
}

if (allGood) {
  console.log('✓ All image paths referenced in HTML & JS exist locally on disk!');
}
