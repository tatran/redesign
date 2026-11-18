import fs from 'node:fs';
import path from 'node:path';
for(const file of ['index.html','fr/index.html']){
 const html=fs.readFileSync(file,'utf8');
 const schema=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
 if(schema.startDate!=='2027-06-04T10:00:00-07:00')throw Error('Event date');
 if((html.match(/<h1>/g)||[]).length!==1)throw Error('Heading count');
 for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const target=m[1];if(/^(https?:|mailto:|tel:|#)/.test(target))continue;
  let local=path.resolve(path.dirname(file),target);
  if(fs.existsSync(local)&&fs.statSync(local).isDirectory())local=path.join(local,'index.html');
  if(!fs.existsSync(local))throw Error('Missing '+target);
 }
 if(!html.includes('hreflang="fr-CA"')||!html.includes('hreflang="en-CA"'))throw Error('Missing languages');
 console.log(file+': event schema, language metadata, heading and local links passed');
}
if((fs.readFileSync('creative-chaos-2027.ics','utf8').match(/BEGIN:VEVENT/g)||[]).length!==3)throw Error('Calendar');
console.log('Calendar: all three days present');
