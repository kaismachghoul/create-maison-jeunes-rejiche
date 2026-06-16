"use client";

import Frame from "../Frame";
import KineticTitle from "../KineticTitle";
import { ChapterIntro, Reveal } from "../primitives";
import { CHAPTERS } from "@/lib/content";

const meta = CHAPTERS[5];

const STATS = [
  { v: "N°1", k: "Le sport, l'activité la plus pratiquée des Maisons des Jeunes" },
  { v: "3,2 km", k: "de plage à Rejiche — terrain de jeu grandeur nature" },
  { v: "Plein air", k: "beach-volley, natation, camps et sorties au bord de l'eau" },
];

export default function Chapter06Movement() {
  return (
    <section
      id={meta.id}
      data-theme="light"
      className="relative w-full overflow-hidden bg-limestone text-ink"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <Reveal>
              <ChapterIntro
                index={meta.index}
                kicker={meta.kicker}
                arabic={meta.arabic}
              />
            </Reveal>
            <KineticTitle text={meta.title} className="display mt-6" />
          </div>
          <div className="md:col-span-6">
            <Reveal delay={0.1}>
              <p className="lede max-w-md text-ink/75">
                Le corps aussi est une manière d'apprendre. À Rejiche, la mer n'est pas
                un décor : c'est un terrain. On y court, on y nage, on y gagne et on y
                recommence — ensemble.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12">
          <Frame
            slot="movement.beach"
            from="up"
            className="aspect-[16/10] w-full md:col-span-8"
          />
          <Frame
            slot="movement.sport"
            from="up"
            className="aspect-square w-full md:col-span-4"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.v} delay={i * 0.08}>
              <div className="border-t-2 border-olive pt-5">
                <p className="font-serif text-5xl leading-none text-olive">{s.v}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{s.k}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
