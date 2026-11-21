import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const manifest=JSON.parse(await fs.readFile(path.join(root,'asset-replacements.json'),'utf8'));
for(const entry of manifest) await fs.access(path.join(root,entry.path));
for(const site of ['exequatur','bidnox','shoal','skech','liquid','erebuz']) {
 async function scan(dir){for(const item of await fs.readdir(dir,{withFileTypes:true})) {if(['node_modules','.next','.source'].includes(item.name))continue; const p=path.join(dir,item.name); if(item.isDirectory())await scan(p);else if(/\.(mp4|webm|mp3|wav|woff2?|ttf|otf)$/i.test(p))throw Error('Unexpected bundled media/font: '+p);}}
 await scan(path.join(root,'sites',site));
}
console.log(`Asset policy passed: ${manifest.length} replacement paths present; no bundled audio/video/font binaries outside Unwallet.`);
