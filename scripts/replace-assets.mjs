import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const root=path.resolve(import.meta.dirname,'..');
const assets=JSON.parse(await fs.readFile(path.join(root,'asset-replacements.json'),'utf8'));
const colors={exequatur:['#16121e','#ceb4ec'],bidnox:['#f06b32','#2f180f'],shoal:['#dfeef3','#193d53'],skech:['#e8efcf','#253a2e'],liquid:['#d4c0ec','#3a2353'],erebuz:['#10281e','#a7edc0']};
for (const a of assets) {
 const target=path.join(root,a.path);let width=1200,height=800;
 try {const m=await sharp(target).metadata();width=m.width||width;height=m.height||height;} catch{}
 width=Math.min(width,1600);height=Math.min(height,1200);
 const [bg,ink]=colors[a.site];
 const name=path.basename(a.path).replace(/\.[^.]+$/,'').replace(/[-_]/g,' ').replace(/[&<>"']/g,'');
 const label=a.action==='replace-with-neutral-label'?name.split(' ').map(x=>x[0]).join('').slice(0,3).toUpperCase():'';
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 1200 800"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="${bg}"/><stop offset="1" stop-color="${ink}" stop-opacity=".5"/></linearGradient><pattern id="p" width="48" height="48" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="${ink}" opacity=".2"/></pattern></defs><rect width="1200" height="800" fill="url(#g)"/><rect width="1200" height="800" fill="url(#p)"/><g stroke="${ink}" fill="none" opacity=".5"><circle cx="600" cy="400" r="220"/><circle cx="600" cy="400" r="170"/><path d="M-40 600C150 660 200 130 400 350S700 640 850 300 1120 360 1250 100" stroke-width="3"/></g><text x="600" y="425" text-anchor="middle" fill="${ink}" font-family="system-ui,sans-serif" font-size="80">${label}</text></svg>`;
 if(target.endsWith('.svg'))await fs.writeFile(target,svg);
 else if(target.endsWith('.ico'))await sharp(Buffer.from(svg)).resize(48,48).png().toFile(target+'.png').then(()=>fs.rename(target+'.png',target));
 else {let image=sharp(Buffer.from(svg));if(/\.jpe?g$/i.test(target))image=image.jpeg({quality:84});else if(target.endsWith('.webp'))image=image.webp({quality:84});else image=image.png();await image.toFile(target+'.replacement');await fs.rename(target+'.replacement',target);}
}
console.log(`Replaced ${assets.length} images with original procedural artwork.`);

// Original generated background, with its prompt recorded in artwork/provenance.json.
const original=path.join(root,'artwork/exequatur-original.png');
try {
 for (const name of ['abstract-1.jpg','abstract-2.jpg','abstract-3.jpg','abstract-5.jpg','abstract-6.jpg']) await sharp(original).resize(1200,800,{fit:'cover'}).jpeg({quality:86}).toFile(path.join(root,'sites/exequatur/public/assets',name));
} catch (error) { if(error.code!=='ENOENT') throw error; }
