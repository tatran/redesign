const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
for(const [file,lang] of [['index.html','en'],['fr/index.html','fr']]){
 const html=fs.readFileSync(path.join(__dirname,file),'utf8');
 assert(html.includes(`<html lang="${lang}">`),'Correct document language');
 assert.equal((html.match(/<h1>/g)||[]).length,1,'One primary heading');
 assert(html.includes('rel="canonical"'),'Canonical URL');
 for(const code of ['en-CA','fr-CA','x-default'])assert(html.includes(`hreflang="${code}"`),'Language alternate '+code);
 assert(html.includes('name="description"'),'Meta description');
 const schema=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
 assert.equal(schema['@type'],'Organization');assert.equal(schema.telephone,'+1-250-549-1883');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
 assert.equal(ids.length,new Set(ids).size,'Unique element IDs');
 for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const link=m[1];if(link.startsWith('#')){assert(ids.includes(link.slice(1)),'Fragment exists: '+link);continue}
  if(/^(https?:|mailto:|tel:)/.test(link))continue;
  assert(fs.existsSync(path.resolve(__dirname,path.dirname(file),link)),'Local resource exists: '+link);
 }
 console.log(file+': language, headings, SEO, schema, anchors, and local resources passed');
}
const xml=fs.readFileSync(path.join(__dirname,'sitemap.xml'),'utf8');
assert.equal((xml.match(/<url>/g)||[]).length,2);assert(xml.includes('https://vernonelks.com/fr/'));
assert(fs.readFileSync(path.join(__dirname,'robots.txt'),'utf8').includes('Sitemap: https://vernonelks.com/sitemap.xml'));
console.log('Sitemap and robots checks passed');
