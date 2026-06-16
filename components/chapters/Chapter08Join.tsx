"use client";

import KineticTitle from "../KineticTitle";
import MeridianPattern from "../MeridianPattern";
import { ChapterIntro, Reveal } from "../primitives";
import { CHAPTERS, FACTS } from "@/lib/content";
import { scrollToId } from "../SmoothScroll";

const meta = CHAPTERS[7];

const LINKS = [
  { label: "Adresse", value: FACTS.address, href: undefined },
  { label: "Téléphone", value: FACTS.phone, href: `tel:${FACTS.phone.replace(/\s/g, "")}` },
  { label: "Facebook", value: "facebook.com/MJ.Rejiche", href: FACTS.facebook },
  { label: "Radio Web", value: "radiorajiche.net", href: FACTS.radio },
];

export default function Chapter08Join() {
  return (
    <section
      id={meta.id}
      data-theme="light"
      className="relative w-full overflow-hidden bg-sand text-ink"
    >
      <div className="pointer-events-none absolute inset-0">
        <MeridianPattern color="#0E5A78" opacity={0.08} size={96} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <Reveal>
          <ChapterIntro index={meta.index} kicker={meta.kicker} arabic={meta.arabic} />
        </Reveal>

        <KineticTitle text={meta.title} className="display mt-8" italicLast />

        <Reveal delay={0.1}>
          <p className="lede mt-10 max-w-2xl text-ink/75">
            La créativité est notre langue commune, et chaque génération laisse une
            trace. La prochaine est la tienne. Pousse la porte, prends le micro, monte
            sur scène, plonge — l'histoire de Rejiche s'écrit ensemble.
          </p>
        </Reveal>

        {/* Contact card */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-md bg-ink/15 sm:grid-cols-2">
          {LINKS.map((l) => {
            const inner = (
              <div className="flex h-full flex-col bg-sand p-7 transition-colors duration-300 group-hover:bg-limestone">
                <span className="eyebrow text-sea">{l.label}</span>
                <span className="mt-3 font-serif text-2xl leading-tight text-ink">
                  {l.value}
                </span>
              </div>
            );
            return l.href ? (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group"
              >
                {inner}
              </a>
            ) : (
              <div key={l.label} className="group">
                {inner}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={FACTS.facebook}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-sea-deep px-7 py-4 font-sans text-sm uppercase tracking-[0.2em] text-foam transition-transform duration-300 ease-sea hover:scale-[1.03]"
          >
            Suivre la Maison des Jeunes
            <span aria-hidden>→</span>
          </a>
          <button
            onClick={() => scrollToId("horizon")}
            className="inline-flex items-center gap-3 rounded-full border border-ink/30 px-7 py-4 font-sans text-sm uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink"
          >
            Revivre l'histoire <span aria-hidden>↑</span>
          </button>
        </div>

        {/* Colophon — the only "footer-like" matter, kept editorial */}
        <div className="mt-24 flex flex-col gap-3 border-t border-ink/15 pt-8 font-sans text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p dir="rtl" lang="ar" className="font-arabic text-sm text-ink/60">
            {FACTS.arabicName}
          </p>
          <p>{FACTS.network}</p>
          <p>« Là où la mer rencontre l'imagination »</p>
        </div>
      </div>
    </section>
  );
}
