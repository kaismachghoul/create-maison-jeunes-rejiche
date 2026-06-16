"use client";

import Frame from "../Frame";
import KineticTitle from "../KineticTitle";
import { ChapterIntro, Reveal } from "../primitives";
import { CHAPTERS, QUOTES } from "@/lib/content";

const meta = CHAPTERS[4];

export default function Chapter05Expression() {
  return (
    <section
      id={meta.id}
      data-theme="deep"
      className="relative w-full overflow-hidden bg-sea-deep text-foam"
    >
      {/* Fullscreen stage moment */}
      <div className="relative h-[88svh] w-full">
        <Frame
          slot="expression.stage"
          from="up"
          rounded={false}
          className="absolute inset-0 h-full w-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sea-deep via-sea-deep/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8">
            <Reveal>
              <ChapterIntro
                index={meta.index}
                kicker={meta.kicker}
                arabic={meta.arabic}
              />
            </Reveal>
            <KineticTitle text={meta.title} className="display mt-6 text-foam" />
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-24 sm:px-8 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <p className="display-md font-serif text-foam">
            {QUOTES.expression}
          </p>
          <p className="lede mt-8 max-w-md text-foam/70">
            La musique, le théâtre, la danse : trois des passions les plus vivantes des
            Maisons des Jeunes. Une scène, c'est une première fois — la première fois
            qu'une voix porte, qu'un corps ose, qu'un public se tait pour écouter.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:col-span-7">
          <Frame slot="expression.music" from="up" className="aspect-[3/4] w-full" />
          <Frame
            slot="expression.dance"
            from="up"
            className="aspect-[3/4] w-full translate-y-10"
          />
        </div>
      </div>
    </section>
  );
}
