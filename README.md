# Sai Prannav Murali: portfolio site

Live at **https://sai-prannav.github.io**. Astro 7 (static), Tailwind v4, TypeScript, deployed to GitHub Pages.

```
npm ci
npm run dev           # http://localhost:4321
npm run build         # static site in dist/
npm test              # tests for the link checker
npm run check:links   # after a build: every internal link and asset in dist/ resolves
```

Node 22 (≥ 22.23.4, see `.nvmrc`; Astro 7 refuses older versions).

## Where things live

- Identity, links, resume path, repo URLs, hero media, skills: `src/config.ts`.
- Projects and case studies: one Markdown file each in `src/content/projects/` (copy `dynagence-thrust-rig.md`).
- Labs and papers: `src/content/research/`.
- Media: `public/media/` (each folder's `MANIFEST.md` says where every file came from).
- Where each number on the site comes from: [docs/PROVENANCE.md](docs/PROVENANCE.md). Update it with the number.

## Checks

| Workflow | When | What |
|---|---|---|
| `ci.yml` | every PR and push to `main` | build, link check, link-checker tests, `npm audit` (moderate+) |
| `privacy.yml` | every PR and push to `main` | no local machine paths, secret tokens or local artifacts in the repo |
| `deploy.yml` | push to `main` | build and publish to GitHub Pages |
