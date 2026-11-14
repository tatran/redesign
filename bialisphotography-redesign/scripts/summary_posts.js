const fs = require('fs');

const posts = JSON.parse(fs.readFileSync('bialisphotography-redesign/raw_data/posts.json', 'utf-8'));
console.log('=== POSTS SUMMARY ===');
for (const p of posts) {
  const cleanContent = p.content.rendered.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`\n--- [${p.slug}] ${p.title.rendered} (date: ${p.date}) ---`);
  console.log(`Excerpt: ${cleanContent.slice(0, 300)}...`);
}
