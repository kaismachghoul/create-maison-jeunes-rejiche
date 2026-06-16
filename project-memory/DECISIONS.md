# DECISIONS — Architecture & Art Direction

Record of meaningful decisions and the reasoning behind them (ADR-lite).

---

## D-001 — Raw Three.js instead of React Three Fiber for the hero shader
**Date:** 2026-06-16 · **Status:** Accepted

The brief lists React Three Fiber + drei. In practice the R3F (`@react-three/fiber`)
/ drei / three version triplet is the single most fragile part of a React 19 install
and a common cause of a project that *looks* built but won't boot.

**Decision:** Implement the WebGL sea with **raw `three`** inside a self-contained
client component (`components/webgl/SeaCanvas.tsx`). This keeps the GLSL artistry the
brief asks for while removing dependency-hell risk and shrinking the bundle.

**Consequence:** If we later want declarative 3D scenes, we can add R3F in an isolated
route without destabilising the core experience.

---

## D-002 — Lenis + GSAP ScrollTrigger as the motion backbone
**Date:** 2026-06-16 · **Status:** Accepted

Lenis owns the scroll position (inertial, "cinematic" feel). GSAP ScrollTrigger is
driven from Lenis's `scroll` event so both share one source of truth — no jitter from
two scroll systems fighting. Framer Motion handles component-local enter/exit and
micro-interactions where its declarative API is cleaner.

---

## D-003 — Media-optional architecture
**Date:** 2026-06-16 · **Status:** Accepted

No media folders existed at build time. Rather than block, the site renders fully with
**generated placeholders** (gradient + Tunisian pattern + caption). A single manifest
(`lib/media.ts`) maps each story slot to an optional file under `public/media/**`.
Drop real assets in and they replace placeholders automatically — no code changes.

---

## D-004 — Bilingual cultural accents (FR + AR), French primary
**Date:** 2026-06-16 · **Status:** Accepted

Tunisia is francophone with Arabic as the cultural mother tongue. Copy is primarily
French (the register of Maisons des Jeunes) with deliberate Arabic accent lines set in
IBM Plex Sans Arabic, to feel authentically Tunisian rather than translated-from-English.

---

## D-005 — No traditional navbar/footer
**Date:** 2026-06-16 · **Status:** Accepted

Per brief. Navigation is a floating chapter index (left rail on desktop, hidden until
intent on mobile) plus progressive scroll discovery. The "footer" is reframed as
Chapter 08 — *Join the Story* — a call to participate, not a sitemap.

<!-- Append new decisions above. Never rewrite history; supersede with a new entry. -->
