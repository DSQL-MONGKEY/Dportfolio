# AGENTS.md

Personal portfolio built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 3, TypeScript, pnpm.

## Commands

- `pnpm install`, `pnpm dev` (port 3000)
- `pnpm build` requires `DOMAIN` or it fails with `Invalid URL` while collecting page data (`src/app/layout.tsx:20` does `new URL(process.env.DOMAIN || '')`). Use `DOMAIN=https://example.com pnpm build`. If Node crashes with an allocation error, retry with `NODE_OPTIONS=--max-old-space-size=4096`.
- Typecheck: `npx tsc --noEmit` — currently passes; this is the only working verification step.
- `pnpm lint` is broken: Next 16 removed `next lint` (`script: "lint": "next lint"` in package.json resolves to the `lint` directory error), and running ESLint directly crashes with `Converting circular structure to JSON` (ESLint 8 legacy config vs `eslint-config-next` 16). Do not assume lint output is available.
- No test framework or test script exists in this repo.

## Architecture

- Routes in `src/app/<route>/page.tsx` are thin wrappers holding `metadata`/JSON-LD that render a module from `src/modules/<name>/` (barrel `index.ts` → `components/`), usually inside `<Container data-aos="fade-left">`.
- Editable site content/data lives in `src/common/constants/`: `constants.tsx` (~1500 lines: nav, services, projects, journeys, tech), `music.ts`, `questions.ts`, `metadata.ts`, `feeds.ts` (socials, featured TikTok videos), `contact.ts` (email, LinkedIn, mail templates).
- `/feeds` is ISR (`revalidate = 3600`) and fetches GitHub profile/contributions via `src/common/lib/github.ts` plus TikTok thumbnails/view counts via `src/common/lib/tiktok.ts` (scrapes the embed page, has retries and `fallbackViews`); on failure it renders without live data. The global `<audio>`/analyser engine is `src/components/layouts/audio-player/AudioEngine.tsx`, mounted in layouts so playback survives page changes.
- Global chrome (sidebar, mobile nav, audio player, AOS init) is in `src/components/layouts/index.tsx`; the theme provider is `src/stores/theme.tsx`, mounted in `src/app/layout.tsx`.
- State/client providers live in `src/stores/*.tsx` (Zustand + provider components; `.tsx` even when there is no JSX).
- Images destined for bundling live in `src/assets` and are imported through `@assets/index`; raw files (music, sfx, logos) live in `public/`.

## Conventions and gotchas

- Path aliases (`tsconfig.json`): `@/*` → `src/*`, `@assets/*` → `src/assets/*`, `@components/*` → `src/components/*`, `@constants/*` → `src/common/constants/*`. Helper utilities are at `src/common/lib/utils.ts` (`@/common/lib/utils`), not `@/lib/utils`.
- `components.json` (shadcn, new-york style, RSC) has stale aliases pointing to `@/lib` / `@/lib/utils`, but no `src/lib` exists. Fix generated imports to `@/common/lib/utils` when adding shadcn components.
- Dark mode is class-based via `next-themes`; custom Tailwind tokens are in `tailwind.config.ts` (`bg`/`text`, `darkBg`/`darkText`, `main`/`mainDark`, 4px `shadow-light`/`shadow-dark`). Prefer these over arbitrary values.
- The only environment variable used is `DOMAIN` (metadataBase, per-page canonicals, `sitemap.ts`, `robots.ts`); `.env*` is gitignored.
- Commit messages follow `type<>: description` (e.g. `feat<>: change color`, `deps<>: update nextjs version`).
- `Dockerfile.dev`/`Dockerfile.prod` call `pnpm` directly on `node:20.9.0` with no `corepack enable` step and do not copy `pnpm-lock.yaml`; verify before relying on them.
- No CI workflows, husky hooks, or `vercel.json` in the repo.
