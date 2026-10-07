# Tamara and Friends

Marketing website for Tamara and Friends (Beobot) — Vue 3 + TypeScript + Vite + Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Runs at `http://localhost:5190` by default (set `PORT` to override).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check (`vue-tsc`) and build for production
- `npm run lint` — run oxlint
- `npm run preview` — preview the production build locally

## Structure

- `src/types/` — shared TypeScript types (content shape, icons, nav, agents)
- `src/data/` — site config and bilingual copy (`data/copy/id.ts`, `data/copy/en.ts`)
- `src/composables/` — `useLanguage` (locale state) and `useCopy` (locale-aware copy)
- `src/components/{layout,shared,sections,legal}/` — Vue SFCs
- `src/pages/` — route-level page components
- `src/router/` — vue-router setup
