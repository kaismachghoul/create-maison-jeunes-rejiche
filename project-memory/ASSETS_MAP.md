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

## Current mapping (real photo set, 2026-06-16)

Source archive: **`./media-source/`** (the original `allimages` folder, moved out of
`public/` so the raw set isn't served/bundled). Working copies live in
`public/media/<chapter>/`. Classification was done by **viewing each image**.

| Slot | File (`public/media/…`) | Source | What it shows |
|------|--------------------------|--------|---------------|
| horizon.shore | horizon/dusk-harbour.jpg | gallery-2 | fishing boats at dusk, the coast |
| house.exterior | house/exterior-signage.jpg | event-art | whitewashed wall painted « شباب » |
| house.interior | house/art-studio.jpg | gallery-10 | the arts atelier interior |
| house.radio | house/web-radio.jpg | coding | computers + mixing console = web radio |
| creative.workshop | creative/media-workshop.jpg | gallery-3 | youth setting up a video camera |
| creative.art | creative/mural-art.jpg | art | painting a mural close-up |
| creative.making | creative/wall-painting.jpg | gallery-14 | abstract calligraphy mural |
| creative.wide | creative/mural-day.jpg | gallery-13 | wide collective mural day |
| community.1 | community/art-class.jpg | gallery-1 | art-class group portrait |
| community.2 | community/mural-together.jpg | gallery-12 | painting the mural together |
| community.3 | community/cooking-workshop.jpg | event-cuisine | traditional-cooking workshop |
| community.4 | community/mural-wide.jpg | gallery-16 | mural day, building + flag |
| community.5 | community/kitchen.jpg | cuisine-traditionnelle | preparing food in the kitchen |
| community.6 | community/painting-hands.jpg | gallery-11 | two women painting letters |
| expression.stage | expression/bendir-troupe.jpg | gallery-6 | folk bendir troupe on stage |
| expression.music | expression/young-drummer.jpg | gallery-7 | a young percussionist |
| expression.dance | expression/dance.jpg | gallery-4 | girls dancing, Chabeb Show |
| future.portrait | future/portrait.jpg | theatre | solo youth performer (headset mic) |
| future.dusk | future/dusk-port.jpg | gallery-2 | dusk harbour (bookends Ch01) |
| join.poster | join/chebeb-show-2015.jpg | event-music | the "Chebeb Show 2015" poster |
| brand logo | brand/logo.png | logo | official Maison des Jeunes mark (preloader) |

**Spares in `./media-source/` not yet placed:** gallery-5 (recitation), gallery-8
(theatre tableau), gallery-9 (drums on grass), gallery-15 (sea mural), music (rap duo).
Good alternates if you want to vary Expression/Community.

### Gap — Chapter 06 · Movement
No sport / beach-activity photos were in the set, so `movement.beach` and
`movement.sport` render generated placeholders (sea/olive tone). Drop beach-volley,
swimming or training photos into `public/media/movement/` and set their `src` in
`lib/media.ts` to complete the chapter.
