const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('bialisphotography-redesign/raw_data/pages.json', 'utf-8'));

function cleanText(html) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi, '\n### $1\n')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&#038;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();
}

let report = '# Bialis Photography Content Extraction\n\n';

for (const p of pages) {
  if (['ygstesten', 'preise'].includes(p.slug)) continue;
  report += `\n\n## Page: ${p.title.rendered} (/${p.slug}/)\n\n`;
  report += cleanText(p.content.rendered);
}

fs.writeFileSync('bialisphotography-redesign/raw_data/site-content.md', report);
console.log('Saved site-content.md, size:', report.length);
