# ASSETS MAP — Media Pipeline

## How it works

The site is **media-optional**. Every visual slot in the story is declared in
`lib/media.ts`. Each slot points to an *optional* file under `public/media/**`.

- If the file exists → it is shown (image or video, with cinematic masked reveal).
- If not → `components/Frame.tsx` renders a generated placeholder (palette gradient +
  Tunisian pattern + the slot's caption + a "drop media here" hint in dev).

So the experience is complete today with zero assets, and upgrades automatically as
real photos/videos arrive — **no code changes required**.

## Drop your media here

```
public/media/
  horizon/      # Ch01 — sea, light, shoreline, Rejiche town, golden hour
  house/        # Ch02 — the building, exterior, interior, signage, archival
  creative/     # Ch03 — workshops, learning, art, makers, hands, classes
  community/    # Ch04 — groups, faces, shared meals, candid gatherings
  expression/   # Ch05 — music, dance, theatre, performance, stage
  movement/     # Ch06 — sport, outdoor, beach, training, games
  future/       # Ch07 — youth leaders, projects, dusk, portraits
  join/         # Ch08 — events, posters, calls to action
```

Accepted: `.jpg .jpeg .png .webp .avif` (images) · `.mp4 .webm` (video).
Name files freely; then list them in the matching slot in `lib/media.ts`
(or use the `auto` glob note in that file).

## Classification intent (for when real media lands)

When sorting incoming media into the folders above, prioritise:
- **Strongest visual** per chapter → that chapter's `hero` slot.
- **Emotional moments** (faces, candid joy) → `community` / `expression`.
- **Architecture shots** → `house`.
- **Sea & landscape** → `horizon`.
- Wide cinematic frames → fullscreen slots; detail/portrait → mosaic slots.

## Current state

- 0 real assets present (2026-06-16). All slots rendering placeholders.
- Optional: a few royalty-free Unsplash URLs are allow-listed in `next.config.mjs`
  for demo only — replace with authentic Rejiche media before any public launch.
