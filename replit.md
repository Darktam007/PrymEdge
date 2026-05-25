# PrymEdge

A full marketing website for PrymEdge — a hospitality growth systems company that builds brand, acquisition, and conversion systems for hotels.

## Run & Operate

- `pnpm --filter @workspace/prymedge run dev` — run the frontend (port assigned by workflow)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, wouter (routing), framer-motion (animations)
- Styling: Tailwind CSS v4, custom CSS variables, Playfair Display + Inter fonts
- No backend — pure static frontend

## Where things live

- `artifacts/prymedge/src/pages/` — Homepage, ServicesPage, ContactPage, not-found
- `artifacts/prymedge/src/components/layout/` — Navbar, Footer (shared across all pages)
- `artifacts/prymedge/src/components/ui/AnimatedSection.tsx` — shared scroll animation wrapper
- `artifacts/prymedge/src/index.css` — full theme (HSL variables, Google Fonts, PrymEdge custom classes)
- `attached_assets/` — logo images (referenced via @assets alias in vite.config.ts)

## Pages

- `/` — Homepage: hero, problem statement, 3-card how-we-do-it, PrymEdge system, services accordion, partnership, lead magnets, final CTA, FAQ
- `/services` — Services: hero, positioning statement, 7-service deep accordion, engagement tiers (3)
- `/contact` — Contact: hero, what-happens-next steps, full application form with validation + confirmation state, reassurance section

## Architecture decisions

- Pure frontend, no API or database needed — the contact form simulates submission client-side
- framer-motion `useInView` with `once: true` on all scroll animations — no element animates twice
- Google Fonts imported as first line of index.css (before Tailwind) to avoid PostCSS silent failures
- @assets alias in vite.config.ts points to attached_assets/ directory for logo imports
- Dark-only site — both :root and .dark CSS classes have identical dark palette

## Product

PrymEdge is a hospitality growth agency website with three pages: a rich homepage, a deep services page with full service detail accordions and engagement tiers, and a contact/application page with form validation.

## User preferences

- Orange accent: #F05A00
- Headlines: Playfair Display (serif, editorial)
- Body: Inter
- Background: near-black #0a0a0a / section alt #0d0d0d / #111

## Gotchas

- Google Fonts @import MUST be the very first line in index.css
- react-icons v5: use `FaInstagram`, `FaLinkedin` from `react-icons/fa` (not `SiInstagram`/`SiLinkedin` from `react-icons/si`)
- The vite.config.ts has `@assets` alias pointing to `../../attached_assets/`
