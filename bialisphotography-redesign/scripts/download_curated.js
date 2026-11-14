const fs = require('fs');
const https = require('https');
const path = require('path');

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

const imagesToDownload = [
  // Official Logo
  { name: 'logo-alexandru-bialis.png', url: 'https://bialisphotography.at/wp-content/uploads/2023/08/alexandru-Bialis-logo-2018-03-site-AT-01.png' },
  { name: 'favicon.png', url: 'https://bialisphotography.at/wp-content/uploads/2023/07/cropped-favicon-bialisphotograhy-2023-512-px-192x192.jpg' },

  // Alexandru Bialis Profile & Studio
  { name: 'alexandru-bialis.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2026/10/Alexandru-Bialis-fotograf-osterreich-00001-20250928.jpg' },
  { name: 'studio-interior.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2026/10/Fotostudio-mit-professioneller-Beleuchtung-1.jpg' },

  // Weddings
  { name: 'wedding-hero-sunset.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2026/10/Alexandru-Bialis-fotograf-oesterreich-01254.jpg' },
  { name: 'wedding-couple-sunglasses.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2026/01/hochzeitsfotografie-burgenland-brautpaar-sonnenbrille-schwarzweiss.jpg' },
  { name: 'wedding-reportage-oesterreich.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2026/10/hochzeitsfotografie-oesterreich-545.jpg' },
  { name: 'wedding-album-leather.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2026/10/hochzeit-fotoalbum-osterreich-R-D-02-6786-2.jpg' },
  { name: 'wedding-album-detail.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2026/10/hochzeit-fotoalbum-osterreich-R-D-02-6763-3.jpg' },

  // Corporate & Industry
  { name: 'industry-bauder-facility.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2025/10/industriefotografie-bauder-oesterreich-alexandru-bialis-002.jpg' },
  { name: 'corporate-worker-production.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2023/10/werbefotografie-8951-Bauder-02-EdRed-2.jpg' },
  { name: 'behind-the-scenes-commercial.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2023/10/hinter-den-kulissen-werbefotograf-oesterreich-Alexandru-Bialis-00588-2.jpg' },
  { name: 'industry-plant-bruck.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2023/09/werbefotografie-8678-Bauder-02-a.jpg' },

  // Portraits & Fine Art
  { name: 'portrait-studio-lady.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2026/10/Portraitfotografie-osterreich-Pi-420.jpg' },
  { name: 'portrait-art-bw.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2026/01/zwischen-sinnlichkeit-und-licht-001-schwarzweiss-2.jpg' },
  { name: 'portrait-vintage-dog.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2026/02/vintage-fotoshooting-hund-blick-zur-kamera-fotostudio-purbach.jpg' },
  { name: 'portrait-vintage-model.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2026/02/vintage-fotoshooting-hund-frauchen-seitenprofil-studio-purbach.jpg' },
  { name: 'portrait-fitness-power.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2026/02/fitness-shooting-on-location-alexandru-bialis-792.jpg' },
  { name: 'portrait-classic-beauty.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2026/02/studiofotografie-alexandru-bialis-738.jpg' },

  // Albums & Fine Art Products
  { name: 'album-taufe-box.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2023/07/fotoalbum-taufe-119.jpg' },
  { name: 'album-handcrafted-binding.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2023/07/fotoalbum-taufe-118.jpg' },

  // Graphic Design & Branding
  { name: 'design-branding-showcase.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2023/08/grafikdesign-printdesign-oesterreich-287551-a.jpg' },
  { name: 'logo-design-grid.jpg', url: 'https://bialisphotography.at/wp-content/uploads/2023/07/grafikdesign-printdesign-by-bialisphotography-759.jpg' }
];

async function run() {
  for (const item of imagesToDownload) {
    const dest = path.join(imgDir, item.name);
    if (!fs.existsSync(dest)) {
      try {
        console.log(`Downloading ${item.name}...`);
        await downloadFile(item.url, dest);
        console.log(`✓ ${item.name}`);
      } catch (e) {
        console.warn(`✗ ${item.name}: ${e.message}`);
      }
    } else {
      console.log(`- Exists: ${item.name}`);
    }
  }
  console.log('All images ready.');
}

run();
