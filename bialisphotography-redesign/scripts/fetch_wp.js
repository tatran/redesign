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
    console.log('Fetching pages...');
    const pages = await fetchJson('https://bialisphotography.at/wp-json/wp/v2/pages?per_page=50');
    fs.writeFileSync('bialisphotography-redesign/raw_data/pages.json', JSON.stringify(pages, null, 2));
    console.log(`Saved ${pages.length} pages.`);
    
    pages.forEach(p => console.log(`- [${p.id}] ${p.slug} : ${p.title.rendered}`));

    console.log('Fetching posts...');
    const posts = await fetchJson('https://bialisphotography.at/wp-json/wp/v2/posts?per_page=50');
    fs.writeFileSync('bialisphotography-redesign/raw_data/posts.json', JSON.stringify(posts, null, 2));
    console.log(`Saved ${posts.length} posts.`);

    console.log('Fetching media (first 100)...');
    const media = await fetchJson('https://bialisphotography.at/wp-json/wp/v2/media?per_page=100');
    fs.writeFileSync('bialisphotography-redesign/raw_data/media.json', JSON.stringify(media, null, 2));
    console.log(`Saved ${media.length} media items.`);

  } catch (err) {
    console.error('Error:', err.message);
  }
}

run();
