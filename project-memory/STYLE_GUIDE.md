# STYLE GUIDE — Visual Language

> "A living Mediterranean space where youth, culture, creativity and community meet."

## Palette

The light of the Tunisian Sahel: whitewashed limestone, the blue of the sea, sand
warmed by sun, and the earth of terracotta and copper.

| Token        | Hex       | Role |
|--------------|-----------|------|
| `sea`        | `#0E5A78` | Primary Mediterranean blue |
| `sea.deep`   | `#08293B` | Night sea / dark backgrounds |
| `sea.azure`  | `#1C7FA8` | Bright water, links, focus |
| `sea.foam`   | `#E8F3F2` | Cool off-white, foam |
| `limestone`  | `#F4EEE3` | Primary light background, walls |
| `sand`       | `#E7D6BC` | Warm beige, sunlit surfaces |
| `terracotta` | `#C2643D` | Accent, heat, craft |
| `olive`      | `#6E7A4F` | Secondary accent, land |
| `copper`     | `#B87333` | Highlights, metallic detail |
| `ink`        | `#10202A` | Primary text on light |

**Pairing rule:** never pure black, never pure white. Text is `ink` on `limestone`,
or `foam` on `sea.deep`. Terracotta/copper are spice — small doses only.

## Typography

- **Display serif — Fraunces** (variable, high optical contrast). Oversized chapter
  titles, pull-quotes. Tracking `-0.04em` at large sizes. Used expressively, italics
  welcome.
- **Sans — Space Grotesk.** UI, labels, body, eyebrows. Uppercase + wide tracking for
  eyebrows/labels.
- **Arabic accent — IBM Plex Sans Arabic.** One-line cultural accents (e.g. «دار الشباب»).
  Never machine-translated filler; curated phrases only.

Scale: fluid `clamp()` everywhere. Chapter titles reach `clamp(3rem, 12vw, 13rem)`.

## Texture & space

- Generous negative space; asymmetry over grids.
- Grain/limestone texture overlay at low opacity on flat fills.
- Generative Tunisian pattern (`MeridianPattern`) as a quiet motif, not wallpaper.
- Large-scale imagery with masked reveals; images bleed off-canvas intentionally.

## Motion tone

Slow, weighted, inevitable — like a tide. Easing `cubic-bezier(0.16,1,0.3,1)`
("ease-sea"). Nothing bounces. See `ANIMATION_NOTES.md`.

## Voice

Cultural-magazine register. Emotional, spare, confident. French primary.
> "Where the sea meets imagination." / "Every generation leaves a trace."
Never: "Welcome to our youth center."
