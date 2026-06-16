"use client";

import Frame from "../Frame";
import KineticTitle from "../KineticTitle";
import { ChapterIntro, Reveal } from "../primitives";
import { CHAPTERS, QUOTES } from "@/lib/content";

const meta = CHAPTERS[6];

export default function Chapter07Future() {
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

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <Frame slot="future.portrait" from="up" className="aspect-[4/5] w-full" />
          </div>
          <div className="md:col-span-7">
            <KineticTitle text={meta.title} className="display text-foam" />
            <Reveal delay={0.1}>
              <p className="lede mt-10 max-w-xl text-foam/75">
                Une Maison des Jeunes ne se mesure pas à ses murs, mais à ce que
                deviennent celles et ceux qui la traversent. Des projets, des idées,
                des voix qui s'élèvent — et une jeunesse qui ne demande pas l'avenir :
                elle le fabrique.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 font-serif text-3xl italic text-sand">
                {QUOTES.future}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20">
          <Frame
            slot="future.dusk"
            from="up"
            rounded
            className="aspect-[21/9] w-full"
          />
        </div>
      </div>
    </section>
  );
}
