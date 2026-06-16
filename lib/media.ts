// Media manifest. The site is media-optional (project-memory/DECISIONS.md D-003).
//
// HOW TO ADD REAL MEDIA:
//   1. Drop files into  public/media/<folder>/  (see project-memory/ASSETS_MAP.md)
//   2. Set the slot's `src` below to "/media/<folder>/<file>"
//   Until then, every slot renders a generated placeholder — the site is complete now.

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
  "horizon.shore": { caption: "3,2 km de sable — la plage de Rejiche", tone: "sand" },
  "horizon.light": { caption: "La lumière du Sahel sur la Méditerranée", tone: "copper" },

  // — Chapter 02 · The House —————————————————————————————
  "house.exterior": { caption: "La Maison des Jeunes — Avenue Farhat Hached", tone: "sand" },
  "house.interior": { caption: "À l'intérieur : où tout commence", tone: "olive" },
  "house.radio": { caption: "Radio Web Dar Chabab Rejiche — la voix des jeunes", tone: "terracotta" },

  // — Chapter 03 · Creative ——————————————————————————————
  "creative.workshop": { caption: "Atelier — les mains apprennent", tone: "terracotta" },
  "creative.art": { caption: "Arts plastiques — un dessin parti jusqu'au Japon", tone: "copper" },
  "creative.making": { caption: "Fabriquer, essayer, recommencer", tone: "olive" },
  "creative.wide": { caption: "L'énergie d'un après-midi de création", tone: "night" },

  // — Chapter 04 · Community (memory wall) ———————————————
  "community.1": { caption: "Visages, instant partagé", tone: "sand" },
  "community.2": { caption: "Ensemble, au bord de l'eau", tone: "sea" },
  "community.3": { caption: "Un éclat de rire", tone: "terracotta" },
  "community.4": { caption: "Génération après génération", tone: "olive" },
  "community.5": { caption: "Le camp d'été", tone: "copper" },
  "community.6": { caption: "Appartenir", tone: "sea" },

  // — Chapter 05 · Expression —————————————————————————————
  "expression.stage": { caption: "Sur scène — la première fois", tone: "night" },
  "expression.music": { caption: "Musique : une langue commune", tone: "terracotta" },
  "expression.dance": { caption: "Danse, corps, mouvement", tone: "copper" },

  // — Chapter 06 · Movement ——————————————————————————————
  "movement.beach": { caption: "Beach-volley sur la plage de Rejiche", tone: "sea" },
  "movement.sport": { caption: "Le sport, première passion des Maisons des Jeunes", tone: "olive" },

  // — Chapter 07 · Future ————————————————————————————————
  "future.portrait": { caption: "Celles et ceux qui inventent la suite", tone: "copper" },
  "future.dusk": { caption: "Le crépuscule sur le port de Mahdia", tone: "night" },

  // — Chapter 08 · Join ——————————————————————————————————
  "join.poster": { caption: "Le prochain rendez-vous", tone: "terracotta" },
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
