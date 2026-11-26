import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { check, internalRefs, resolves } from './check-links.mjs';

const site = () => {
  const d = mkdtempSync(path.join(tmpdir(), 'dist-'));
  const w = (rel, text) => { mkdirSync(path.dirname(path.join(d, rel)), { recursive: true }); writeFileSync(path.join(d, rel), text); };
  w('index.html', '<a href="/projects/">p</a><a href="/resume.pdf">r</a><img src="/media/a.webp" srcset="/media/a.webp 1x, /media/a@2x.webp 2x"><a href="https://x.dev">e</a><a href="//cdn.x/y">c</a><a href="/about#team">a</a>');
  w('projects/index.html', '<a href="/projects/heartbridge">hb</a><a href="/gone/">x</a><img src="/media/missing.png">');
  w('projects/heartbridge/index.html', '<a href="/">home</a><a href="/media/My%20Poster.pdf">poster</a>');
  w('about.html', '');
  w('resume.pdf', '%PDF');
  w('media/a.webp', '');
  w('media/a@2x.webp', '');
  w('media/My Poster.pdf', '');
  return d;
};

test('internal refs: href, src and every srcset candidate; external and protocol-relative skipped', () => {
  assert.deepEqual(internalRefs('<a href="/x/?q=1#h"> <img src="//cdn/y"> <img srcset="/a.png 1x, /b.png 2x"> <a href="mailto:me">'), ['/x/', '/a.png', '/b.png']);
});

test('pages resolve as folder/index.html, name.html or a real file', () => {
  const d = site();
  for (const ok of ['/', '/projects/', '/projects/heartbridge', '/about', '/resume.pdf', '/media/My Poster.pdf']) assert.ok(resolves(d, ok), ok);
  for (const bad of ['/gone/', '/media/missing.png', '/media']) assert.ok(!resolves(d, bad), bad);
});

test('check() lists exactly the broken links with their page', () => {
  assert.deepEqual(check(site()).sort(), ['projects/index.html: /gone/', 'projects/index.html: /media/missing.png']);
});
