// LiDAR-style point cloud: concentric scan rings over rolling ground with a few
// object clusters. Reacts to the cursor (parallax + local highlight).
// Pauses when hidden, offscreen, or under prefers-reduced-motion.
type P = { x: number; y: number; z: number; h: number };

export function startPointCloud(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = innerWidth < 640;
  const pts: P[] = [];
  const rings = small ? 22 : 34;
  for (let i = 1; i <= rings; i++) {
    const r = 0.5 + i * 0.28;
    const n = Math.floor((small ? 30 : 46) + i * (small ? 4 : 7));
    for (let j = 0; j < n; j++) {
      const a = (j / n) * Math.PI * 2 + Math.random() * 0.03;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const h = Math.sin(x * 0.9) * 0.18 + Math.cos(z * 0.7) * 0.15;
      pts.push({ x, y: h, z, h });
    }
  }
  const blob = (cx: number, cy: number, cz: number, sx: number, sy: number, sz: number, n: number) => {
    for (let i = 0; i < n; i++)
      pts.push({
        x: cx + (Math.random() - 0.5) * sx,
        y: cy + (Math.random() - 0.5) * sy,
        z: cz + (Math.random() - 0.5) * sz,
        h: cy + 0.6,
      });
  };
  blob(2.2, 0.5, 1.2, 0.9, 1.0, 0.9, 90);
  blob(-2.6, 0.4, -1.5, 0.7, 0.8, 1.4, 80);
  blob(0.4, 1.7, -2.4, 0.5, 0.12, 0.5, 40);

  let w = 0;
  let h = 0;
  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();

  let mx = 0, my = 0, tx = 0, ty = 0, cx = -999, cy = -999;
  addEventListener(
    'pointermove',
    (e) => {
      const r = canvas.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      cx = e.clientX - r.left;
      cy = e.clientY - r.top;
    },
    { passive: true },
  );

  const root = document.documentElement;
  const draw = (t: number) => {
    const css = getComputedStyle(root);
    const accent = css.getPropertyValue('--accent').trim() || '#5eead4';
    const muted = css.getPropertyValue('--muted').trim() || '#9aa7b4';
    ctx.clearRect(0, 0, w, h);
    mx += (tx - mx) * 0.05;
    my += (ty - my) * 0.05;
    const yaw = t * 0.00006 + mx * 0.35;
    const pitch = 0.62 + my * 0.12;
    const cyw = Math.cos(yaw), syw = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    const scale = Math.min(w, h * 1.5) * 0.11;
    const ox = w * (small ? 0.5 : 0.64);
    const oy = h * 0.55;
    for (const p of pts) {
      const x = p.x * cyw - p.z * syw;
      const z0 = p.x * syw + p.z * cyw;
      const y = p.y * cp - z0 * sp;
      const z = p.y * sp + z0 * cp + 6;
      const k = (scale * 6) / z;
      const sx = ox + x * k;
      const sy = oy - y * k;
      const d = Math.hypot(sx - cx, sy - cy);
      const near = d < 90 ? 1 - d / 90 : 0;
      const depth = Math.max(0.15, Math.min(1, 1.25 - z / 12));
      ctx.globalAlpha = Math.min(1, depth * (0.35 + Math.max(0, p.h) * 0.5) + near * 0.6);
      ctx.fillStyle = near > 0.2 || p.h > 0.55 ? accent : muted;
      const s = 1 + depth * 1.1 + near * 1.6;
      ctx.fillRect(sx, sy, s, s);
    }
    ctx.globalAlpha = 1;
  };

  addEventListener('resize', () => {
    resize();
    if (reduce) draw(0);
  });
  document.addEventListener('themechange', () => reduce && draw(0));

  if (reduce) {
    draw(0);
    return;
  }
  let raf = 0, running = false, visible = true;
  const loop = (t: number) => {
    draw(t);
    raf = requestAnimationFrame(loop);
  };
  const sync = () => {
    const go = visible && !document.hidden;
    if (go && !running) { running = true; raf = requestAnimationFrame(loop); }
    if (!go && running) { running = false; cancelAnimationFrame(raf); }
  };
  new IntersectionObserver((e) => { visible = e[0].isIntersecting; sync(); }).observe(canvas);
  document.addEventListener('visibilitychange', sync);
  sync();
}
