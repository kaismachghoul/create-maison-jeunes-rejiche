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

<!-- Append new entries above this line. Keep each entry short and scannable. -->
