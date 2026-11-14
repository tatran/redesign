const https = require('https');
const fs = require('fs');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  try {
    let allMedia = JSON.parse(fs.readFileSync('bialisphotography-redesign/raw_data/media.json', 'utf-8'));
    for (let page = 2; page <= 5; page++) {
      console.log(`Fetching media page ${page}...`);
      try {
        const m = await fetchJson(`https://bialisphotography.at/wp-json/wp/v2/media?per_page=100&page=${page}`);
        if (Array.isArray(m) && m.length > 0) {
          allMedia = allMedia.concat(m);
          console.log(`Got ${m.length} items from page ${page}`);
        } else {
          break;
        }
      } catch (err) {
        console.log(`Page ${page} ended:`, err.message);
        break;
      }
    }
    fs.writeFileSync('bialisphotography-redesign/raw_data/all_media.json', JSON.stringify(allMedia, null, 2));
    console.log(`Total media collected: ${allMedia.length}`);
  } catch (e) {
    console.error(e);
  }
}

run();
