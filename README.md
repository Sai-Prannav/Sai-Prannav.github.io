# Portfolio website

Astro (static), Tailwind v4, TypeScript. Target: `https://sai-prannav.github.io` on GitHub Pages.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Edit content

- All links and identity strings: `src/config.ts` (GitHub, LinkedIn, email, resume path, repo URLs, "Now" strip, skills).
- Add a project: new `.md` file in `src/content/projects/`. Copy `stocksnap.md`.
- Add a lab or paper: `src/content/research/`.
- Visual slots: see `VISUALS_NEEDED.md`.

## Before first deploy (TODO)

1. Set your real email in `src/config.ts` (`links.email`). It's a placeholder on purpose.
2. Drop the resume at `public/resume.pdf` and delete `public/resume.PLACEHOLDER.txt`.
3. When the HeartBridge and StockSnap repos are public, set `repos.published` to `true` in `src/config.ts`.

## Deploy (GitHub Pages, user site)

1. On GitHub, create a repo named exactly `Sai-Prannav.github.io` (public).
2. In this folder:
   ```
   git branch -M main
   git remote add origin https://github.com/Sai-Prannav/Sai-Prannav.github.io.git
   git push -u origin main
   ```
3. In the repo: Settings, Pages, Source: **GitHub Actions**.
4. The `Deploy to GitHub Pages` workflow runs on push. The site appears at https://sai-prannav.github.io.

The output is plain static files, so moving to Cloudflare Pages or Netlify later only needs the build command `npm run build` and the output directory `dist`.
