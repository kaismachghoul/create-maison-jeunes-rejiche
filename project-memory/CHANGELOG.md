# CHANGELOG — Maison des Jeunes de Rejiche

A running, human-readable log of what changed and when. Newest first.

## 2026-06-16 — Foundation

- **Scaffolded** Next.js 15 (App Router) + React 19 + TypeScript project.
- **Design system** committed: Mediterranean palette + editorial type pairing
  (Fraunces serif / Space Grotesk sans / IBM Plex Sans Arabic accent). See
  `STYLE_GUIDE.md`.
- **Smooth scroll** wired with Lenis (`components/SmoothScroll.tsx`) feeding GSAP
  ScrollTrigger.
- **WebGL sea** hero built with raw Three.js + custom GLSL (gerstner-like wave +
  caustic light), with reduced-motion / no-WebGL fallback. See `DECISIONS.md`.
- **Eight-chapter cinematic narrative** implemented as scroll-driven scenes
  (`components/chapters/*`). Floating, invisible navigation with live chapter
  progress (`components/ChapterNav.tsx`).
- **Generative Tunisian pattern** system (SVG/canvas) for texture overlays
  (`components/MeridianPattern.tsx`).
- **Media pipeline**: `lib/media.ts` manifest + `components/Frame.tsx` graceful
  placeholder so the site renders fully with zero assets, then auto-upgrades when
  real photos/videos are dropped into `public/media/**`. See `ASSETS_MAP.md`.
- **Project-memory system** created (this folder).
- **Deliverables** written: research summary, creative direction, moodboard logic,
  architecture, animation philosophy, technical strategy → `DELIVERABLES.md`.
- **Verified:** `npm run build` passes clean (no type/lint errors, 203 kB first load);
  production server returns 200 and all eight chapters render server-side.

## 2026-06-16 — Polish pass (post code-review)

- **Brand assets:** eight-pointed-star favicon (`app/icon.svg`) + dynamic, on-brand
  Open Graph image (`app/opengraph-image.tsx`); `metadataBase` set. OG kept Latin-only
  (the bundled @vercel/og font can't shape Arabic ligatures).
- **Fix (critical):** `foam` was nested under `sea` in the Tailwind theme, so bare
  `text-foam`/`bg-foam`/`border-foam` (used across the dark chapters) generated no CSS —
  light text rendered dark-on-dark. Promoted `foam` to a top-level color token. Build
  can't catch this (Tailwind drops unknown classes silently); caught in review.
- **Fix:** `SeaCanvas` froze rendering off-screen but the clock kept advancing, so the
  sea jumped phase on scroll-back. Now accumulates delta only while visible.
- **Fix:** `Chapter04` horizontal-scroll pin rebuilt with `gsap.matchMedia` so it
  builds/reverts cleanly across the 768px breakpoint and reduced-motion changes.
- Initialised git; verified `npm run build` clean after fixes.

<!-- Append new entries above this line. Keep each entry short and scannable. -->
