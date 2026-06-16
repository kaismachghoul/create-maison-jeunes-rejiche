# DELIVERABLES — Research, Creative Direction & Strategy

*Prepared 2026-06-16, before and alongside development. Grounded in real research
(see Sources at the end). Where facts are thin online, copy is written to be
emotionally true and non-specific rather than invented — flagged in `KNOWN_ISSUES.md`.*

---

## 1. Research Summary

**The institution is real and quietly remarkable.** *Dar Chabab Rejiche*
(دار الشباب رجيش) is a youth house in Tunisia's national network under the **Ministry
of Youth & Sports**, at **Avenue Farhat Hached, 5121 Rejiche – Mahdia** (tel. 73 687 980;
Facebook: `MJ.Rejiche`). Three facts make it special and become narrative anchors:

1. It was **crowned first nationally for "best institutional project"** — a small
   coastal center punching far above its weight.
2. It runs its **own web radio** — *Radio Web Dar Chabab Rejiche* (radiorajiche.net) —
   youth broadcasting from the edge of the Mediterranean.
3. It lives **culturally outward** — a JICA (Japanese) volunteer worked there; pupil
   **Shahyne Ben Salem** won a *Kanagawa Prize* in Japan for a drawing of a Tunisian
   teapot, a terracotta *kanoun* and a *couffin* basket; a **South Korean delegation
   visited**. Rejiche talks to the world.

**The network it belongs to.** Tunisia's youth-house experience has been **pioneering
in the Arab world since 1963**. Today ~**518 youth institutions** serve the country;
the most-practiced activities are **sport**, then **fine arts**, **computing/internet**,
and the staple offer of **music, theatre, dance, clubs, workshops, web radio and
summer camps**. These houses are the grassroots backbone of youth culture — often the
first place a young Tunisian in a small town meets art, a stage, or a microphone.

**Place.** Rejiche is a coastal town in **Mahdia Governorate** (pop. ~8,900), ~0.8 km
from **Rejiche Plage** — **3.2 km of sand and famously turquoise, clear water**
(swimming, fishing, camping, beach volley). Its anchor city **Mahdia** is **Tunisia's
first Fatimid capital (founded 921 CE)** on a narrow peninsula, crowned by the
**Borj el-Kebir** fortress, with a working **fishing port**, a seaside cemetery, and a
four-century **silk-weaving tradition**. The Roman amphitheatre of **El Jem** (UNESCO)
is ~43 km away and hosts a summer **symphonic festival**; Mahdia itself holds the
**Fête de la Mer** every July.

**Visual identity (authentic, not decorative cliché).** The Sahel coast's signature is
**whitewashed lime + cobalt blue** — a palette with a *functional* origin (lime cools
walls; blue paint resists sea-and-sun corrosion), heritage-protected since 1915. Mahdia's
silk weavers set **bands of colour with thin gold/silver lines and geometric motifs
particular to Mahdia — small fish and eight-pointed stars.** That **eight-pointed star**
recurs across tile, textile and ironwork and becomes our generative motif. Terracotta,
basketry and bougainvillea magenta are the warm accents.

**Tonal references.** **MUCEM** (Marseille) frames the Mediterranean as a *shared, plural
civilisation* behind a concrete veil that filters sea-light — kinship across shores.
**La Friche Belle de Mai** — a tobacco factory turned living "fabrique d'art et de
culture," scrappy, multidisciplinary, participatory — is the closer spiritual cousin to
a Maison des Jeunes: open, grassroots, alive.

---

## 2. Creative Direction

**Concept:** *Le Phare* — "the lighthouse." The Maison des Jeunes de Rejiche as a beacon
on the Mediterranean edge: a place that gathers light and sends it outward (a national
award, a web radio, a child's drawing reaching Japan). The site is not a brochure; it is
a **cinematic tide** the visitor falls into — eight chapters that move from the horizon,
into the House, through its creative and communal life, and back out toward the future
and an invitation to belong.

**Posture:** cultural magazine × architecture publication × immersive documentary.
Asymmetric, confident, spare. The sea is the protagonist; youth are the light.

---

## 3. Moodboard Logic

- **Light:** Sahel midday glare → golden hour → dusk. Global scroll = a day passing.
- **Surface:** whitewashed limestone, cobalt doors, wet sand, woven silk, terracotta.
- **Motif:** the **eight-pointed Mahdia star** and the **woven fish**, abstracted into a
  generative line pattern used as quiet texture and section punctuation.
- **People:** candid, warm, mid-gesture — never posed institutional headshots.
- **Type:** oversized Fraunces serif against quiet Space Grotesk; Arabic accents in IBM
  Plex Sans Arabic («دار الشباب», «البحر», «نحن»).

---

## 4. Storytelling Structure (mapped to research)

| Ch | Title | Spine | Real hook woven in |
|----|-------|-------|--------------------|
| 01 | The Horizon | Rejiche, the sea, the light | 3.2 km turquoise beach; Sahel light |
| 02 | The House | The Maison, its mission & pride | #1 national project; network since 1963; web radio |
| 03 | Creative Energy | Workshops, learning, art, web radio | fine arts; radiorajiche.net; Kanagawa Prize drawing |
| 04 | Community | Shared moments, belonging | grassroots role; camps/colonies |
| 05 | Expression | Music, dance, theatre | music/theatre/dance offer; Fête de la Mer |
| 06 | Movement | Sport, outdoor, sea | sport = most-practiced; beach volley, swimming |
| 07 | The Future | Projects, youth leadership | culture outward (Japan/Korea); dreams |
| 08 | Join the Story | Participate, events, contact | real address, FB, web radio link |

---

## 5. Visual References

MUCEM (filtered sea-light, the veil) · La Friche (living fabrique, reuse, grassroots) ·
Google Arts & Culture (zoomable archive) · Awwwards/SiteInspire cultural sites
(kinetic editorial, scroll cinema). Local truth over global gloss at every fork.

---

## 6. Animation Philosophy

See `ANIMATION_NOTES.md`. In one line: **tide, not bounce** — slow, weighted, inevitable
motion; reveals as *light disclosing form*; one scroll truth (Lenis→GSAP); motion always
in service of emotion; full `prefers-reduced-motion` path.

---

## 7. Website Architecture

Single immersive route (`app/page.tsx`) composed of eight chapter scenes
(`components/chapters/Chapter0X.tsx`) under a shared `ExperienceShell`:
- `SmoothScroll` (Lenis) wraps everything and feeds GSAP ScrollTrigger.
- `SeaCanvas` (raw Three.js GLSL) sits behind Chapter 01.
- `ChapterNav` — floating, invisible-until-intent index with live progress.
- `Frame` — universal media slot (real asset or generated placeholder).
- `MeridianPattern` — generative eight-pointed-star texture.
- `lib/content.ts` — all copy in one editable place; `lib/media.ts` — media manifest.

No navbar, no classic footer (D-005). Chapter 08 *is* the close.

---

## 8. Interaction Concepts (shipped vs. planned)

Shipped: WebGL sea + caustics; kinetic masked titles; generative star pattern; floating
chapter index w/ progress; horizontal memory wall; clip-path image reveals; pointer
parallax. Planned (see `IDEAS.md`): sea-spray cursor particles, ambient sea+oud audio,
sunlight-angle-by-scroll, activity map, history timeline scrubber, live FB events feed.

---

## 9. Technical Strategy

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind · Framer Motion · GSAP +
ScrollTrigger · Lenis · raw Three.js (D-001). Performance: WebGL paused off-screen,
transforms-only scroll, reduced motion respected, fluid `clamp()` type, media lazy and
optional. Accessibility: semantic landmarks, keyboard-reachable chapter nav, legible
contrast from the palette, motion opt-out.

---

## Sources (high-signal)
Ministry of Youth & Sports (mjs.tn) — Rejiche #1 national project · ween.tn fiche
(address/phone) · facebook.com/MJ.Rejiche · radiorajiche.net · Jawhara FM gallery
(Korean delegation) · Tunisie Numérique (Kanagawa Prize; most-practiced activities) ·
WMC (518 institutions; 2025 targets) · Britannica/Carthage Magazine (Mahdia, silk,
Fatimid) · Sandee (Rejich Plage 3.2 km) · CIOFF/Petit Futé (Fête de la Mer) · MUCEM ·
La Friche Belle de Mai. Full URLs captured in research log.
