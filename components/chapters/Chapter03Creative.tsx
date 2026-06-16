"use client";

import Frame from "../Frame";
import KineticTitle from "../KineticTitle";
import { ChapterIntro, Reveal } from "../primitives";
import { CHAPTERS } from "@/lib/content";

const meta = CHAPTERS[2];

export default function Chapter03Creative() {
  return (
    <section
      id={meta.id}
      data-theme="deep"
      className="relative w-full overflow-hidden bg-sea-deep text-foam"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <Reveal>
          <ChapterIntro
            index={meta.index}
            kicker={meta.kicker}
            arabic={meta.arabic}
            muted
          />
        </Reveal>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <KineticTitle text={meta.title} className="display text-foam" />
          <Reveal delay={0.1}>
            <p className="lede max-w-sm text-foam/70">
              Des mains qui apprennent. Une radio qui s'allume. Un dessin qui traverse
              le monde. À Rejiche, la création n'attend pas la permission.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric mosaic */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-12 md:grid-rows-2">
          <Frame
            slot="creative.wide"
            from="up"
            className="col-span-2 aspect-[16/9] md:col-span-7 md:row-span-2 md:aspect-auto"
          />
          <Frame
            slot="creative.workshop"
            from="right"
            className="aspect-square md:col-span-5"
          />
          <Frame
            slot="creative.making"
            from="left"
            className="aspect-square md:col-span-2"
          />
          <Frame
            slot="creative.art"
            from="up"
            className="aspect-square md:col-span-3"
          />
        </div>

        {/* The drawing that reached Japan — a true story */}
        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-foam/15 pt-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-sand">Une histoire vraie</p>
            <p className="mt-4 font-serif text-3xl leading-tight text-foam">
              Un dessin parti de Rejiche jusqu'au Japon.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <p className="lede text-foam/75">
              Une théière tunisienne, un <em>kanoun</em> en terre cuite, un{" "}
              <em>couffin</em> tressé. Le dessin d'un élève de la Maison des Jeunes de
              Rejiche a été exposé au Japon et distingué par un <em>Prix Kanagawa</em>.
              Entre un volontaire japonais venu partager son savoir et une délégation
              sud-coréenne reçue ici, Rejiche apprend une chose simple :{" "}
              <span className="text-sand">
                la créativité parle toutes les langues.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
