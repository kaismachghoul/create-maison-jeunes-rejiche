// Central content + chapter registry.
// Copy is primarily French (the register of the Maisons des Jeunes) with curated
// Arabic accents. Real, verified facts are woven in — see project-memory/DELIVERABLES.md.

export type ChapterMeta = {
  id: string;
  index: string;
  /** short label for the floating nav */
  nav: string;
  /** eyebrow / kicker */
  kicker: string;
  /** Arabic accent line */
  arabic: string;
  /** oversized serif title (may contain a line break with \n) */
  title: string;
  /** theme: "light" (limestone bg, ink text) or "deep" (night sea bg, foam text) */
  theme: "light" | "deep";
  /** media folder under public/media used by this chapter */
  folder: string;
};

export const CHAPTERS: ChapterMeta[] = [
  {
    id: "horizon",
    index: "01",
    nav: "L'Horizon",
    kicker: "Rejiche · Mahdia · Tunisie",
    arabic: "البحر",
    title: "L'Horizon",
    theme: "deep",
    folder: "horizon",
  },
  {
    id: "house",
    index: "02",
    nav: "La Maison",
    kicker: "Dar Chabab · دار الشباب",
    arabic: "دار الشباب",
    title: "La Maison",
    theme: "light",
    folder: "house",
  },
  {
    id: "creative",
    index: "03",
    nav: "Création",
    kicker: "Ateliers · Radio · Arts",
    arabic: "الإبداع",
    title: "Énergie\nCréative",
    theme: "deep",
    folder: "creative",
  },
  {
    id: "community",
    index: "04",
    nav: "Communauté",
    kicker: "Ensemble",
    arabic: "نحن",
    title: "Communauté",
    theme: "light",
    folder: "community",
  },
  {
    id: "expression",
    index: "05",
    nav: "Expression",
    kicker: "Musique · Danse · Scène",
    arabic: "تعبير",
    title: "Expression",
    theme: "deep",
    folder: "expression",
  },
  {
    id: "movement",
    index: "06",
    nav: "Mouvement",
    kicker: "Sport · Mer · Plein air",
    arabic: "حركة",
    title: "Mouvement",
    theme: "light",
    folder: "movement",
  },
  {
    id: "future",
    index: "07",
    nav: "Le Futur",
    kicker: "Projets · Jeunesse · Idées",
    arabic: "المستقبل",
    title: "Le Futur",
    theme: "deep",
    folder: "future",
  },
  {
    id: "join",
    index: "08",
    nav: "Rejoindre",
    kicker: "Participer",
    arabic: "انضمّ إلينا",
    title: "Rejoins\nl'histoire",
    theme: "light",
    folder: "join",
  },
];

// Verified institutional facts (project-memory/DELIVERABLES.md §1).
export const FACTS = {
  name: "Maison des Jeunes de Rejiche",
  arabicName: "دار الشباب رجيش",
  network: "Réseau des Maisons des Jeunes · Ministère de la Jeunesse et des Sports",
  address: "Avenue Farhat Hached, 5121 Rejiche — Mahdia, Tunisie",
  phone: "+216 73 687 980",
  facebook: "https://www.facebook.com/MJ.Rejiche",
  radio: "https://radiorajiche.net",
  founded: "Réseau pionnier dans le monde arabe depuis 1963",
};

// Hero opening — Chapter 01.
export const HERO = {
  arabic: "دار الشباب رجيش",
  kicker: "Une expérience méditerranéenne",
  title: ["Là où la mer", "rencontre", "l'imagination"],
  sub: "Maison des Jeunes de Rejiche — un phare de culture, de création et de jeunesse sur le rivage de Mahdia.",
  scrollHint: "Laissez-vous porter",
};

// Pull-quotes used across the experience (copywriting direction in the brief).
export const QUOTES = {
  horizon: "Chaque génération laisse une trace.",
  house: "Un lieu façonné par des idées, des voix et du mouvement.",
  creative: "La créativité est notre langue commune.",
  community: "L'avenir grandit là où les gens se rassemblent.",
  expression: "Ici, les histoires commencent.",
  future: "Les rêves prennent forme au bord de l'eau.",
};
