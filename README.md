<div align="center">
  <a href="https://www.andytsai.com">
      <img alt="Andy Portfolio Logo" style="border-radius: 9999px" src="https://www.andytsai.com/_next/image?url=web-app-manifest-512x512.png&w=640&q=75" height="128">
  </a>
  <h1>Andy - Portfolio</h1>
</div>

A multilingual, themeable portfolio built with Next.js App Router. It showcases projects and experience with smooth interactions, localized content, and an accessible UI.

Live site: https://www.andytsai.com

---

## Features

- App Router (Next.js 15) with server components
- Internationalization via next-intl: `en`, `fr`, `zh-cn`, `zh-tw`
- Theme switching with light/dark/system (next-themes)
- Tailwind CSS v4 with CSS variables and animations
- Accessible UI built on Radix primitives (Dropdown, Select, Dialog, etc.)
- Project showcase (e.g., Deep Learning) with animated content and media
- Smooth UX polish: GSAP/Motion animations, Lenis scroll
- Deployed-friendly to Vercel, includes @vercel/analytics and Speed Insights

---

## Tech Stack

- Next.js 15, React 19, TypeScript
- next-intl (routing + messages), next-themes
- Tailwind CSS 4, tailwindcss-animate, tw-animate-css
- Radix UI + class-variance-authority for components
- Lucide Icons
- Motion, GSAP, Lenis, Embla Carousel, OGL

---

## Getting Started

Prerequisites:

- Node.js 18.18+ (Node 20+ recommended)
- pnpm/yarn/npm/bun (any works)

Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Run the dev server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000.

Build and start:

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

---

## Internationalization

- Localized routes follow the pattern: `/{locale}/...` (e.g., `/en/about`, `/fr/showcase`).
- Supported locales are configured in `src/i18n/routing.ts`:
  - `en` (default), `fr`, `zh-cn`, `zh-tw`
- Server-side locale resolution is handled in `src/i18n/request.ts`.
- A Locale Switcher component is provided in the footer for quick switching.

---

## Theming

- Theme is managed by `next-themes` with light/dark/system modes.
- Use the Theme Switcher in the header to toggle modes.
- Design tokens are defined as CSS variables in `src/app/global.css` and mapped to Tailwind via the `@theme` block.

---

## Project Structure

- `src/app/[locale]/*` – localized routes and pages
- `src/app/[locale]/@header` and `/@footer` – parallel routes for layout parts
- `src/components/*` – feature components (e.g., theme-switcher, locale-switcher, showcase)
- `src/ui/*` – reusable UI primitives (button, dropdown-menu, select, icons, animations)
- `src/i18n/*` – next-intl routing, navigation and request config
- `src/app/global.css` – Tailwind v4 entry and design tokens

---

## Environment

This project works without special environment variables. Optional services:

- @vercel/analytics and @vercel/speed-insights integrate automatically on Vercel. No keys required by default.

---

## Deployment

- Vercel is recommended. Push to your repo and import on https://vercel.com.
- Ensure the default locale and domains are set as desired. The site is designed for edge-friendly, static-first routes where possible.

---

## Contributing

- Issues and PRs are welcome for improvements and bug fixes.
- Follow the existing code style (ESLint + Prettier with Tailwind plugin). Keep components accessible and localized.

---

## License

No explicit license is provided in this repository. All rights reserved unless stated otherwise.
