"use client";

import Frame from "../Frame";
import KineticTitle from "../KineticTitle";
import MeridianPattern from "../MeridianPattern";
import { ChapterIntro, Reveal } from "../primitives";
import { CHAPTERS } from "@/lib/content";

const meta = CHAPTERS[1];

export default function Chapter02House() {
  return (
    <section
      id={meta.id}
      data-theme="light"
      className="relative w-full overflow-hidden bg-limestone text-ink"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 opacity-100">
        <MeridianPattern color="#1C7FA8" opacity={0.1} size={80} />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <Reveal>
          <ChapterIntro index={meta.index} kicker={meta.kicker} arabic={meta.arabic} />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <KineticTitle text={meta.title} />
            <Reveal delay={0.1}>
              <p className="lede mt-10 max-w-xl text-ink/75">
                La Maison des Jeunes de Rejiche n'est pas un bâtiment. C'est un atelier
                à ciel ouvert où une génération apprend à dire <em>je</em> et à
                construire <em>nous</em>. Sur l'Avenue Farhat Hached, elle fait partie
                d'un réseau pionnier dans le monde arabe depuis 1963 — et ici, la petite
                ville a vu grand.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:pt-16">
            <Frame slot="house.exterior" className="aspect-[3/4] w-full" from="up" />
          </div>
        </div>

        {/* Pride strip — verified facts */}
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-md bg-ink/10 sm:grid-cols-3">
          {[
            {
              k: "Distinction nationale",
              v: "1ʳᵉ",
              d: "Couronnée premier « meilleur projet d'établissement » à l'échelle nationale.",
            },
            {
              k: "Sur les ondes",
              v: "Radio Web",
              d: "Dar Chabab Rejiche diffuse sa propre radio — la voix des jeunes, depuis le rivage.",
            },
            {
              k: "Réseau",
              v: "1963",
              d: "Membre d'un réseau de Maisons des Jeunes pionnier dans le monde arabe.",
            },
          ].map((f, i) => (
            <Reveal key={f.k} delay={i * 0.08}>
              <div className="h-full bg-limestone p-7">
                <p className="eyebrow text-sea">{f.k}</p>
                <p className="mt-3 font-serif text-5xl leading-none text-terracotta">
                  {f.v}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Frame slot="house.radio" className="aspect-[16/10] w-full" from="left" />
          </div>
          <div className="md:col-span-6">
            <PullQuoteLocal />
          </div>
        </div>
      </div>
    </section>
  );
}

function PullQuoteLocal() {
  return (
    <Reveal>
      <p className="display-md max-w-[16ch] font-serif">
        Un lieu façonné par des <span className="text-sea italic">idées</span>, des
        voix et du <span className="text-terracotta italic">mouvement</span>.
      </p>
    </Reveal>
  );
}
