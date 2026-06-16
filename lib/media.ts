// Media manifest. The site is media-optional (project-memory/DECISIONS.md D-003).
//
// HOW TO ADD / CHANGE MEDIA:
//   1. Drop files into  public/media/<folder>/  (see project-memory/ASSETS_MAP.md)
//   2. Set the slot's `src` below to "/media/<folder>/<file>"
//   Slots without a `src` render a generated placeholder, so the site is always complete.
//
// Current state: wired to the real Maison des Jeunes de Rejiche photo set
// (classified by content — see project-memory/ASSETS_MAP.md for the full mapping).

export type MediaKind = "image" | "video";
export type Tone = "sea" | "night" | "sand" | "terracotta" | "olive" | "copper";

export type MediaSlot = {
  src?: string; // "/media/.." path or remote URL; undefined => placeholder
  kind?: MediaKind; // inferred from extension when omitted
  caption: string; // figcaption + placeholder label
  credit?: string;
  tone: Tone; // placeholder gradient palette
};

function inferKind(src?: string): MediaKind {
  if (!src) return "image";
  return /\.(mp4|webm|mov)$/i.test(src) ? "video" : "image";
}

const SLOTS: Record<string, MediaSlot> = {
  // — Chapter 01 · Horizon ——————————————————————————————
  "horizon.hero": { caption: "Le rivage de Rejiche, eau turquoise au matin", tone: "sea" },
  "horizon.shore": {
    src: "/media/horizon/dusk-harbour.jpg",
    caption: "Barques de pêche au crépuscule, le rivage de Rejiche",
    tone: "sea",
  },
  "horizon.light": { caption: "La lumière du Sahel sur la Méditerranée", tone: "copper" },

  // — Chapter 02 · The House —————————————————————————————
  "house.exterior": {
    src: "/media/house/exterior-signage.jpg",
    caption: "Les murs de la Maison des Jeunes — « شباب », jeunesse",
    tone: "sand",
  },
  "house.interior": {
    src: "/media/house/art-studio.jpg",
    caption: "L'atelier d'arts plastiques, où tout commence",
    tone: "olive",
  },
  "house.radio": {
    src: "/media/house/web-radio.jpg",
    caption: "Le studio — ordinateurs, console, micro : la web radio des jeunes",
    tone: "terracotta",
  },

  // — Chapter 03 · Creative ——————————————————————————————
  "creative.workshop": {
    src: "/media/creative/media-workshop.jpg",
    caption: "Atelier vidéo : régler la caméra, capter l'instant",
    tone: "terracotta",
  },
  "creative.art": {
    src: "/media/creative/mural-art.jpg",
    caption: "Peindre à même le mur — la fresque prend vie",
    tone: "copper",
  },
  "creative.making": {
    src: "/media/creative/wall-painting.jpg",
    caption: "Calligraphie et formes : fabriquer, essayer, recommencer",
    tone: "olive",
  },
  "creative.wide": {
    src: "/media/creative/mural-day.jpg",
    caption: "Une journée de fresque collective sur les murs blancs",
    tone: "night",
  },

  // — Chapter 04 · Community (memory wall) ———————————————
  "community.1": {
    src: "/media/community/art-class.jpg",
    caption: "L'atelier d'art, tous ensemble",
    tone: "sand",
  },
  "community.2": {
    src: "/media/community/mural-together.jpg",
    caption: "Peindre la fresque, à plusieurs mains",
    tone: "sea",
  },
  "community.3": {
    src: "/media/community/cooking-workshop.jpg",
    caption: "Atelier de cuisine traditionnelle",
    tone: "terracotta",
  },
  "community.4": {
    src: "/media/community/mural-wide.jpg",
    caption: "La fresque, le drapeau, le quartier",
    tone: "olive",
  },
  "community.5": {
    src: "/media/community/kitchen.jpg",
    caption: "Préparer le repas, transmettre les gestes",
    tone: "copper",
  },
  "community.6": {
    src: "/media/community/painting-hands.jpg",
    caption: "Des lettres, des couleurs, des mains",
    tone: "sea",
  },

  // — Chapter 05 · Expression —————————————————————————————
  "expression.stage": {
    src: "/media/expression/bendir-troupe.jpg",
    caption: "La troupe de bendir sur scène — العرض النهائي",
    tone: "night",
  },
  "expression.music": {
    src: "/media/expression/young-drummer.jpg",
    caption: "Un jeune percussionniste, son premier solo",
    tone: "terracotta",
  },
  "expression.dance": {
    src: "/media/expression/dance.jpg",
    caption: "Danse sur scène — Chabeb Show",
    tone: "copper",
  },

  // — Chapter 06 · Movement ——————————————————————————————
  // No sport/beach photos in the provided set — placeholders, flagged in ASSETS_MAP.md.
  "movement.beach": { caption: "La mer de Rejiche, terrain grandeur nature", tone: "sea" },
  "movement.sport": { caption: "Le sport, première passion des Maisons des Jeunes", tone: "olive" },

  // — Chapter 07 · Future ————————————————————————————————
  "future.portrait": {
    src: "/media/future/portrait.jpg",
    caption: "Celle qui prend le micro et invente la suite",
    tone: "copper",
  },
  "future.dusk": {
    src: "/media/future/dusk-port.jpg",
    caption: "Crépuscule sur le port — retour vers la mer",
    tone: "night",
  },

  // — Chapter 08 · Join ——————————————————————————————————
  "join.poster": {
    src: "/media/join/chebeb-show-2015.jpg",
    caption: "Chebeb Show — l'affiche du rendez-vous",
    tone: "terracotta",
  },
};

export function getMedia(key: string): MediaSlot & { kind: MediaKind } {
  const slot = SLOTS[key] ?? { caption: key, tone: "sea" as Tone };
  return { ...slot, kind: slot.kind ?? inferKind(slot.src) };
}

export const TONE_GRADIENT: Record<Tone, [string, string, string]> = {
  sea: ["#0E5A78", "#08293B", "#1C7FA8"],
  night: ["#08293B", "#06121C", "#0E5A78"],
  sand: ["#E7D6BC", "#C9B084", "#F4EEE3"],
  terracotta: ["#C2643D", "#7E3B22", "#E7D6BC"],
  olive: ["#6E7A4F", "#3E4A2C", "#C9B084"],
  copper: ["#B87333", "#7E4A1E", "#E7D6BC"],
};

/** Brand mark (official Maison des Jeunes logo). */
export const LOGO_SRC = "/media/brand/logo.png";
