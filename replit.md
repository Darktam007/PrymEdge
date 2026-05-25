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

- `artifacts/prymedge/src/pages/` — HomePage, ServicesPage, ContactPage, not-found
- `artifacts/prymedge/src/components/layout/` — Navbar, Footer
- `artifacts/prymedge/src/components/ui/AnimatedSection.tsx` — AnimatedSection, AnimatedLine, ParallaxImage
- `artifacts/prymedge/src/components/ui/WhatsAppButton.tsx` — floating WhatsApp button
- `artifacts/prymedge/src/index.css` — full theme (HSL variables, Google Fonts, PrymEdge custom classes)
- `attached_assets/` — logo images (referenced via @assets alias in vite.config.ts)

## Pages

- `/` — Homepage: looping hotel video hero, problem statement, 3-card how-we-do-it, PrymEdge system, services accordion, partnership (with image), 3 lead magnet sections (each with image), final CTA, FAQ
- `/services` — Services: image hero, positioning statement, 3-image gallery break, 7-service deep accordion, full-width banner image, engagement tiers
- `/contact` — Contact: image hero, what-happens-next steps, application form (Formspree), reassurance section

## Architecture decisions

- Pure frontend, no API or database
- Contact form posts to Formspree (https://formspree.io/f/xdkozwdz) — owner must verify email at formspree.io
- ScrollToTop in App.tsx resets page position on every route change (instant scroll, no jank)
- framer-motion `useInView` with `once: true` on all scroll animations
- WhatsApp floating button appears after 2s delay, pulses on a 2.5s loop
- Google Fonts @import MUST be the very first line in index.css (before Tailwind)
- @assets alias in vite.config.ts points to `../../attached_assets/`
- Dark-only site — both :root and .dark CSS classes have identical dark palette

## User preferences

- Orange accent: #F05A00 (logo orange)
- Black: #0a0a0a background, #080808 footer
- Headlines: Playfair Display (serif, editorial)
- Body: Inter
- Logos: `IMG_20260525_155551_052_*.png` (black/orange) used in both Navbar and Footer

## Gotchas

- Google Fonts @import MUST be the very first line in index.css
- react-icons v5: use `FaInstagram`, `FaLinkedin`, `FaWhatsapp` from `react-icons/fa`
- The vite.config.ts has `@assets` alias pointing to `../../attached_assets/`
- Formspree form ID is `xdkozwdz` — owner needs to confirm their email on formspree.io to activate it
