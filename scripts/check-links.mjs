// Offline check of the built site: every internal href / src / srcset in dist/**/*.html must point at a file that
// exists in dist (pages, media, the resume). External links are not fetched (CI stays deterministic).
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function htmlFiles(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...htmlFiles(p));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

export function internalRefs(html) {
  const refs = [];
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) refs.push(m[1]);
  for (const m of html.matchAll(/\ssrcset="([^"]+)"/g)) for (const part of m[1].split(',')) refs.push(part.trim().split(/\s+/)[0]);
  return refs.filter((r) => r.startsWith('/') && !r.startsWith('//')).map((r) => decodeURI(r.split('#')[0].split('?')[0])).filter(Boolean);
}

export function resolves(dist, ref) {
  const p = path.join(dist, ref);
  if (ref.endsWith('/')) return existsSync(path.join(p, 'index.html'));
  if (existsSync(p) && statSync(p).isFile()) return true;
  return existsSync(path.join(p, 'index.html')) || existsSync(`${p}.html`);
}

export function check(dist) {
  const missing = [];
  for (const f of htmlFiles(dist)) {
    for (const ref of new Set(internalRefs(readFileSync(f, 'utf8')))) {
      if (!resolves(dist, ref)) missing.push(`${path.relative(dist, f).split(path.sep).join('/')}: ${ref}`);
    }
  }
  return missing;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const dist = path.resolve(process.argv[2] ?? 'dist');
  const missing = check(dist);
  if (missing.length) {
    console.error(`[links] ${missing.length} broken internal link(s):\n${missing.map((m) => `  - ${m}`).join('\n')}`);
    process.exit(1);
  }
  console.log(`[links] ok: every internal link in ${htmlFiles(dist).length} page(s) resolves`);
}
