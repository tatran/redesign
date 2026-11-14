const fs = require('fs');
const https = require('https');
const path = require('path');

const media = JSON.parse(fs.readFileSync('bialisphotography-redesign/raw_data/media.json', 'utf-8'));

// Filter top quality photos across categories
const selected = [
  // Studio & Portraits
  { name: 'alexandru-bialis-portrait.jpg', id: 13189 }, // Alexandru Bialis portrait
  { name: 'fotostudio-purbach.jpg', id: 13243 }, // Studio interior
  { name: 'portrait-studio-lady.jpg', id: 13111 }, // Portrait
  { name: 'portrait-female-dramatic.jpg', id: 13088 },
  { name: 'portrait-fitness-model.jpg', id: 13087 },
  { name: 'portrait-fineart-vintage.jpg', id: 13085 },
  { name: 'portrait-outdoor-natural.jpg', id: 13084 },
  
  // Weddings
  { name: 'wedding-couple-sunset.jpg', id: 12852 },
  { name: 'wedding-ceremony-moment.jpg', id: 12850 },
  { name: 'wedding-emotional-bride.jpg', id: 12849 },
  { name: 'wedding-details-rings.jpg', id: 12847 },
  { name: 'wedding-reception-dance.jpg', id: 12846 },
  
  // Corporate & Industry
  { name: 'corporate-bauder-industry.jpg', id: 12860 },
  { name: 'corporate-team-meeting.jpg', id: 12859 },
  { name: 'corporate-medical-practice.jpg', id: 12858 },
  { name: 'corporate-gastronomy-food.jpg', id: 12857 },
  
  // Albums & Products
  { name: 'album-luxury-leather.jpg', id: 12870 },
  { name: 'album-acrylic-box.jpg', id: 12869 },
  { name: 'album-wooden-memorybox.jpg', id: 12868 },
  { name: 'wallart-canvas-print.jpg', id: 12867 }
];

console.log(`Checking ${media.length} media items...`);
const imgDir = path.join('bialisphotography-redesign', 'images');
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

async function run() {
  const mapById = new Map(media.map(m => [m.id, m]));
  
  // Also collect top images if specific ids don't match
  const toDownload = [];
  for (const s of selected) {
    if (mapById.has(s.id)) {
      toDownload.push({ name: s.name, url: mapById.get(s.id).source_url });
    }
  }

  // If we need more, grab from media list
  let count = 0;
  for (const m of media) {
    if (toDownload.length >= 24) break;
    const url = m.source_url;
    if (url && (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png'))) {
      const ext = path.extname(url.split('?')[0]);
      const base = `photo-${m.id}${ext}`;
      if (!toDownload.some(x => x.url === url)) {
        toDownload.push({ name: base, url: url });
      }
    }
  }

  console.log(`Downloading ${toDownload.length} images...`);
  for (const item of toDownload) {
    const dest = path.join(imgDir, item.name);
    if (!fs.existsSync(dest)) {
      try {
        console.log(`Downloading ${item.name}...`);
        await downloadFile(item.url, dest);
        console.log(`✓ ${item.name}`);
      } catch (e) {
        console.warn(`✗ Failed ${item.name}: ${e.message}`);
      }
    } else {
      console.log(`- Exists: ${item.name}`);
    }
  }
  console.log('Finished downloading images.');
}

run();
