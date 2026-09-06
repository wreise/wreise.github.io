# wreise.github.io

Personal website, built with [SvelteKit](https://svelte.dev/docs/kit) and prerendered to a
static site with `@sveltejs/adapter-static`.

## Develop

```bash
npm install     # first time only
npm run dev     # http://localhost:5173, with hot reload
```

## Build

```bash
npm run build   # static output in build/
npm run preview # serve the production build locally
```

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes `build/` to GitHub Pages. No manual step needed.

## Layout

| Path | Contents |
| --- | --- |
| `src/routes/+page.svelte` | The homepage — publications, talks, links |
| `src/routes/cv/+page.svelte` | The CV at `/cv`, composed from `src/lib/cv/` |
| `src/routes/+layout.svelte` | Shared page shell |
| `src/lib/` | Components: `Publication`, `Talk`, `CollapsibleSection` |
| `src/lib/cv/` | CV building blocks, its content in `cv-data.js` and its styles in `cv.css` |
| `src/app.css`, `src/app.html` | Global styles and HTML template |
| `static/` | Copied verbatim to the site root: PDFs, fonts, images |

Anything that should be downloadable from the site (slides, CV, papers) goes in `static/`.
