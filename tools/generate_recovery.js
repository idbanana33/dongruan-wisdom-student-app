#!/usr/bin/env node
/** Generate a complete human-readable recovery tree from all split webpack modules. */
'use strict';
const fs = require('fs'), path = require('path');
const beautify = require('js-beautify').js;
const { compile } = require('./devue2.js');
const root = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(__dirname, '..');
const deob = path.join(root, 'evidence', 'modules');
const outRoot = path.join(root, 'app', 'recovered');
const packets = JSON.parse(fs.readFileSync(path.join(root, 'indexes', 'packets.json'), 'utf8'));
const routes = JSON.parse(fs.readFileSync(path.join(root, 'indexes', 'routes.json'), 'utf8'));

function feature(info) {
  const p = (info.routes && info.routes[0] && info.routes[0].path) || '';
  if (p.startsWith('/student/')) return 'student';
  if (p.startsWith('/teacher/')) return 'teacher';
  if (p.startsWith('/maintainer/')) return 'maintainer';
  if (p.startsWith('/user/')) return 'auth';
  return 'core';
}
function routeFor(chunk) {
  const x = routes.filter(r => r.chunks.includes(String(chunk)) && r.path !== '/');
  return x.map(r => r.path).join(', ') || '(shared/core)';
}
function ownName(src, fallback) {
  const m = src.match(/name:\s*["']([A-Za-z][A-Za-z0-9_]{2,60})["']\s*,(?:data\(|props:|components:|computed:|methods:)/);
  return m ? m[1] : fallback;
}
function safe(s) { return String(s).replace(/[^A-Za-z0-9_.-]+/g, '_'); }
function mkdir(p) { fs.mkdirSync(p, { recursive: true }); }

const receipts = [];
for (const [chunk, info] of Object.entries(packets)) {
  if (chunk === 'vendor') continue;
  const dir = path.join(deob, chunk);
  if (!fs.existsSync(dir)) continue;
  for (const mid of info.modules) {
    const input = path.join(dir, mid + '.js');
    if (!fs.existsSync(input)) continue;
    const raw = fs.readFileSync(input, 'utf8');
    let compiled = null;
    try { compiled = compile(raw); } catch (e) { compiled = { error: e.message }; }
    const base = ownName(raw, `${chunk}_${mid}`);
    const feat = feature(info);
    const dst = path.join(outRoot, feat);
    mkdir(dst);
    const stem = safe(`${chunk}_${mid}_${base}`);
    const logicPath = path.join(dst, stem + '.logic.js');
    const vuePath = path.join(dst, stem + '.vue');

    // Beautified module source is retained as the exact logic evidence.
    const pretty = beautify(raw, { indent_size: 2, e4x: true, max_preserve_newlines: 1 });
    const logic = `/**\n * Webpack module logic recovery\n * Source: assets/www/js/${chunk}.js -> module "${mid}"\n * Route: ${routeFor(chunk)}\n * Component guess: ${base}\n * Fidelity: exact module body, beautified only (webpack wrapper retained)\n * Note: variable names inside the original production module are preserved as evidence.\n */\n${pretty}\n`;
    fs.writeFileSync(logicPath, logic, 'utf8');

    if (compiled && compiled.template) {
      const header = `<!--\n  Source: assets/www/js/${chunk}.js -> webpack module "${mid}"\n  Route: ${routeFor(chunk)}\n  Component: ${base}\n  Restoration: template decompiled from Vue render function; logic in sibling .logic.js\n  Confidence: high for DOM structure / medium for expression quoting\n-->\n`;
      const vue = `${header}<template>\n${compiled.template}\n</template>\n\n<script>\n// Analysis draft only: component options are extracted into a sibling .options.js file.\n// Webpack imports/module aliases are unresolved; this is not a standalone SFC.\nexport default {};\n</script>\n`;
      fs.writeFileSync(vuePath, vue, 'utf8');
    }
    receipts.push({ chunk, module: mid, component: base, feature: feat, route: routeFor(chunk),
      rawBytes: raw.length, template: !!(compiled && compiled.template),
      logic: path.relative(root, logicPath).split(path.sep).join('/'),
      vue: fs.existsSync(vuePath) ? path.relative(root, vuePath).split(path.sep).join('/') : null,
      error: compiled && compiled.error || null });
  }
}
fs.writeFileSync(path.join(root, 'indexes', 'recovery-index.json'), JSON.stringify(receipts, null, 2), 'utf8');
console.log('recovered modules:', receipts.length);
console.log('templates:', receipts.filter(x => x.template).length);
console.log('logic files:', receipts.filter(x => x.logic).length);
console.log('compile errors:', receipts.filter(x => x.error).length);
for (const x of receipts.filter(x => x.error).slice(0, 20)) console.log(x.chunk, x.module, x.error);
