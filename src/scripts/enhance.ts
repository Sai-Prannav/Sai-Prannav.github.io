// Small site-wide enhancements. Everything here is optional: pages work without it.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Reveal-on-scroll for cards.
const rv = document.querySelectorAll<HTMLElement>('.rv');
if (!('IntersectionObserver' in window) || reduce) rv.forEach((e) => e.classList.add('in'));
else {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  rv.forEach((e) => io.observe(e));
}

// Count-up on card badges (final number is already in the HTML).
document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
  if (reduce || !('IntersectionObserver' in window)) return;
  const to = Number(el.dataset.count);
  const io = new IntersectionObserver((es) => {
    if (!es[0].isIntersecting) return;
    io.disconnect();
    const t0 = performance.now();
    const f = (now: number) => { const k = Math.min(1, (now - t0) / 1000); el.textContent = String(Math.round(to * (1 - (1 - k) ** 3))); if (k < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  }, { threshold: 0.6 });
  io.observe(el);
});

// Scroll-progress hairline on case studies.
const bar = document.querySelector<HTMLElement>('[data-progress]');
if (bar) {
  let ticking = false;
  const upd = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, h.scrollTop / max) : 0})`;
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
  upd();
}
