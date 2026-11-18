import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, resolve, sep, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
const server = createServer(async (request,response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url,'http://localhost').pathname);
    let file = resolve(root, '.' + pathname);
    if (file !== root && !file.startsWith(root + sep)) throw new Error('Not found');
    if ((await stat(file)).isDirectory()) file = resolve(file,'index.html');
    if (!types[extname(file)]) throw new Error('Not found');
    const content = await readFile(file);
    response.writeHead(200,{'Content-Type':types[extname(file)],'Cache-Control':'no-store'});
    response.end(content);
  } catch {
    response.writeHead(404,{'Content-Type':'text/plain'});
    response.end('Not found');
  }
});
server.listen(Number(process.env.PORT || 4197),'127.0.0.1',() => console.log(`Local: http://127.0.0.1:${server.address().port}/`));
