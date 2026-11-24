import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// User site: https://sai-prannav.github.io (repo Sai-Prannav.github.io), so no `base`.
export default defineConfig({
  site: 'https://sai-prannav.github.io',
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
