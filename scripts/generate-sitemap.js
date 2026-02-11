import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, '../dist');
const SITE_URL = 'https://jonathan-gatard.fr';

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else {
      if (file.endsWith('.html')) {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
}

const htmlFiles = getHtmlFiles(DIST_DIR);
const urls = htmlFiles.map(file => {
  const relativePath = path.relative(DIST_DIR, file);
  let urlPath = relativePath.replace(/index\.html$/, '').replace(/\.html$/, '');
  if (urlPath.endsWith('/')) {
      urlPath = urlPath.slice(0, -1);
  }
  // root
  if (urlPath === '') return SITE_URL;
  
  return `${SITE_URL}/${urlPath}`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap);
console.log(`Sitemap generated with ${urls.length} URLs at dist/sitemap.xml`);
