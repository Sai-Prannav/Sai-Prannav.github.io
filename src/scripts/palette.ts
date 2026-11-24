// Ctrl/Cmd+K command palette: jump to pages and projects, or copy the email address.
interface Item { label: string; hint: string; href?: string; copy?: string; ext?: boolean }
const dataEl = document.getElementById('pal-data');
if (dataEl) {
  const items: Item[] = JSON.parse(dataEl.textContent || '[]');
  const dlg = document.createElement('dialog');
  dlg.className = 'pal';
  dlg.setAttribute('aria-label', 'Command menu');
  dlg.innerHTML = `<input class="pal-in" type="text" placeholder="Jump to a page or project…" aria-label="Search" role="combobox" aria-expanded="true" aria-controls="pal-list" autocomplete="off" spellcheck="false"><ul id="pal-list" class="pal-list" role="listbox"></ul><p class="pal-foot mono" aria-live="polite"><span data-msg>↑↓ move · Enter open · Esc close</span></p>`;
  document.body.appendChild(dlg);
  const input = dlg.querySelector<HTMLInputElement>('input')!;
  const list = dlg.querySelector<HTMLUListElement>('ul')!;
  const msg = dlg.querySelector<HTMLElement>('[data-msg]')!;
  const idle = msg.textContent!;
  let shown: Item[] = [], sel = 0;

  const draw = () => {
    const q = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    shown = items.filter((i) => q.every((w) => (i.label + ' ' + i.hint).toLowerCase().includes(w)));
    sel = Math.min(sel, Math.max(0, shown.length - 1));
    list.replaceChildren(...shown.map((it, i) => {
      const li = document.createElement('li');
      li.id = `pal-${i}`; li.setAttribute('role', 'option'); li.setAttribute('aria-selected', String(i === sel));
      li.innerHTML = `<span></span><span class="mono"></span>`;
      (li.children[0] as HTMLElement).textContent = it.label; (li.children[1] as HTMLElement).textContent = it.hint;
      li.addEventListener('click', () => run(it));
      li.addEventListener('pointermove', () => { if (sel !== i) { sel = i; mark(); } });
      return li;
    }));
    if (!shown.length) { const li = document.createElement('li'); li.className = 'pal-none'; li.textContent = 'Nothing matches.'; list.append(li); }
    input.setAttribute('aria-activedescendant', shown.length ? `pal-${sel}` : '');
  };
  const mark = () => {
    [...list.children].forEach((c, i) => c.setAttribute('aria-selected', String(i === sel)));
    list.children[sel]?.scrollIntoView({ block: 'nearest' });
    input.setAttribute('aria-activedescendant', `pal-${sel}`);
  };
  const run = async (it: Item) => {
    if (it.copy) {
      try { await navigator.clipboard.writeText(it.copy); }
      catch { const t = document.createElement('textarea'); t.value = it.copy; document.body.append(t); t.select(); document.execCommand('copy'); t.remove(); }
      msg.textContent = `Copied ${it.copy}`;
      setTimeout(() => { msg.textContent = idle; }, 1800);
      return;
    }
    if (it.href) { dlg.close(); if (it.ext) window.open(it.href, '_blank', 'noopener'); else location.href = it.href; }
  };
  const open = () => { if (dlg.open) return; input.value = ''; sel = 0; msg.textContent = idle; draw(); dlg.showModal(); input.focus(); };
  input.addEventListener('input', () => { sel = 0; draw(); });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(shown.length - 1, sel + 1); mark(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); mark(); }
    else if (e.key === 'Enter' && shown[sel]) { e.preventDefault(); run(shown[sel]); }
  });
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); dlg.open ? dlg.close() : open(); }
  });
  document.querySelectorAll('[data-open-palette]').forEach((b) => b.addEventListener('click', open));
}
if (/Mac|iPhone|iPad/.test(navigator.platform)) document.querySelectorAll('.kbd-btn kbd').forEach((k) => (k.textContent = '⌘ K'));
