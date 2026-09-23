#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const acorn = require('acorn');
const prettier = require('prettier');
const root = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(__dirname, '..');
const deob = path.join(root, 'evidence', 'modules');
const index = JSON.parse(fs.readFileSync(path.join(root, 'indexes', 'recovery-index.json'), 'utf8'));
function wrap(src) {
  const m = src.match(/^\s*(?:"[0-9a-zA-Z_$]+"|'[0-9a-zA-Z_$]+'|[A-Za-z_$][\w$]*|\d+)\s*:\s*/);
  return '(' + (m ? src.slice(m[0].length) : src) + ')';
}
function walk(n, cb) {
  if (!n || typeof n.type !== 'string') return;
  cb(n);
  for (const [k,v] of Object.entries(n)) {
    if (k === 'type' || k === 'start' || k === 'end') continue;
    if (Array.isArray(v)) { for (const x of v) if (x && typeof x.type === 'string') walk(x,cb); }
    else if (v && typeof v.type === 'string') walk(v,cb);
  }
}
function key(p) { return p.key && (p.key.name !== undefined ? p.key.name : p.key.value); }
function isOptions(n) {
  if (n.type !== 'ObjectExpression') return false;
  const ks = new Set(n.properties.map(key));
  return ks.has('name') && ['data','props','methods','computed','created','mounted','watch','render'].some(x => ks.has(x));
}
(async function main() {
let extracted=0;
for (const rec of index) {
  const f=path.join(deob,rec.chunk,rec.module+'.js');
  if (!fs.existsSync(f)) continue;
  const src=fs.readFileSync(f,'utf8');
  let ast, w;
  try { w=wrap(src); ast=acorn.parse(w,{ecmaVersion:2022,sourceType:'script'}); } catch { continue; }
  const found=[];
  walk(ast,n=>{if(isOptions(n))found.push(n);});
  if (!found.length) continue;
  found.sort((a,b)=>b.properties.length-a.properties.length||a.start-b.start);
  const node=found[0];
  const objectSource=w.slice(node.start,node.end);
  let code;
  try { code=await prettier.format('const componentOptions = '+objectSource+';\nexport default componentOptions;\n',{parser:'babel',printWidth:100}); }
  catch { code='const componentOptions = '+objectSource+';\nexport default componentOptions;\n'; }
  const out=path.join(root,'app','recovered',rec.feature,rec.chunk+'_'+rec.module+'_'+rec.component+'.options.js');
  const header='/**\n * Vue options object recovered from webpack module AST.\n * Source: assets/www/js/'+rec.chunk+'.js -> module "'+rec.module+'"\n * Route: '+rec.route+'\n * Component: '+rec.component+'\n * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.\n */\n';
  fs.writeFileSync(out,header+code,'utf8'); extracted++;
}
console.log('Vue option objects extracted:',extracted);
})();
