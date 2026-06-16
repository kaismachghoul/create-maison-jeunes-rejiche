# Maison des Jeunes de Rejiche — Immersive Digital Experience

> « Là où la mer rencontre l'imagination. »

An ultra-modern, cinematic, scroll-driven experience for the **Maison des Jeunes de
Rejiche** (Dar Chabab Rejiche · دار الشباب رجيش), Mahdia, Tunisia — built as eight
chapters that move from the Mediterranean horizon, into the House and its creative,
communal life, and out toward the future and an invitation to belong.

It is **not** a traditional institutional website: no navbar, no classic footer, no
template aesthetics — a living Mediterranean atmosphere instead.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion ·
GSAP + ScrollTrigger · Lenis (smooth scroll) · raw Three.js + GLSL (WebGL sea).

> Note: the brief listed React Three Fiber; we use **raw Three.js** for the hero shader
> for reliability — see `project-memory/DECISIONS.md` (D-001).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

Requires Node 18.18+ (developed on Node 22).

## Adding real media

The site is **media-optional**: it renders fully today with generated placeholders.
Drop photos/videos into `public/media/<chapter>/` and point the matching slot in
`lib/media.ts` at them — they replace placeholders automatically. Full guide in
`project-memory/ASSETS_MAP.md`.

## Project memory (mandatory per brief)

Living documentation in [`project-memory/`](./project-memory):

- `DELIVERABLES.md` — research summary, creative direction, moodboard, architecture,
  animation philosophy, technical strategy.
- `CHANGELOG.md` · `DECISIONS.md` · `IDEAS.md` · `STYLE_GUIDE.md` · `ASSETS_MAP.md` ·
  `ANIMATION_NOTES.md` · `KNOWN_ISSUES.md`.

## Structure

```
app/                 layout, page (composes the 8 chapters), globals
components/
  SmoothScroll       Lenis ↔ GSAP ScrollTrigger sync
  ChapterNav         floating chapter index + scroll progress (no navbar)
  Frame              universal media slot (real asset or generated placeholder)
  KineticTitle       masked line-reveal titles
  MeridianPattern    generative eight-pointed Mahdia star motif
  Preloader          cinematic intro curtain
  primitives         Reveal / ChapterSection / ChapterIntro / PullQuote
  webgl/SeaCanvas    raw Three.js GLSL Mediterranean sea
  chapters/          Chapter01..08
lib/
  content.ts         all copy + chapter registry + verified facts
  media.ts           media manifest
public/media/        drop-in folders per chapter
```

## Accessibility & performance

Full `prefers-reduced-motion` path (WebGL + parallax disabled, content still revealed),
keyboard-reachable chapter nav, semantic landmarks, fluid `clamp()` type, WebGL paused
off-screen, lazy media.
