# ANIMATION NOTES — Motion Philosophy

> Every animation must support emotion, storytelling, cultural identity, immersion.
> No effects for their own sake.

## Principles

1. **Tide, not bounce.** Global easing `cubic-bezier(0.16, 1, 0.3, 1)` ("ease-sea").
   Durations 0.8–1.6s for hero gestures; 0.4–0.7s for UI.
2. **One scroll truth.** Lenis drives everything; GSAP ScrollTrigger reads Lenis. See
   `DECISIONS.md` D-002.
3. **Reveal, don't slide-in.** Titles and images appear through masks/clip-paths
   (light revealing form), not generic translate-fades.
4. **Pacing is editorial.** Stagger lines of a title by 60–90ms. Let big moments
   breathe with empty scroll distance before/after.
5. **Respect the user.** `prefers-reduced-motion` disables the WebGL loop, parallax,
   and large transforms — content stays fully legible and revealed.

## Signature moves

- **Hero sea:** GLSL wave displacement + animated caustic light; subtle parallax on
  pointer. Falls back to a static gradient if WebGL/reduced-motion.
- **Chapter intro:** numeral + Arabic accent fade up; serif title clip-reveals line by
  line; eyebrow draws a thin rule.
- **Image reveal:** `clip-path` inset wipe in the scroll direction + slight scale
  settle (1.08 → 1.0).
- **Memory wall:** horizontal scroll mapped from vertical scroll via ScrollTrigger
  (`x` tween), images parallax at differing depths.
- **Sunlight sweep (planned):** warm radial light angle tied to global scroll progress.

## Performance budget

- WebGL paused when hero off-screen (IntersectionObserver).
- `will-change` only on actively animating elements; removed after.
- Target 60fps on a mid laptop; degrade particle counts on small viewports.
- No layout-thrashing reads in scroll handlers — transforms only.
