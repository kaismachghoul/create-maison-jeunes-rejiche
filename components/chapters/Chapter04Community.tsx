"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Frame from "../Frame";
import { ChapterIntro, Reveal } from "../primitives";
import { CHAPTERS, QUOTES } from "@/lib/content";

const meta = CHAPTERS[3];
const WALL = [
  "community.1",
  "community.2",
  "community.3",
  "community.4",
  "community.5",
  "community.6",
];

export default function Chapter04Community() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const track = trackRef.current;
    const section = sectionRef.current;
    if (reduce || !track || !section || window.innerWidth < 768) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id={meta.id}
      data-theme="light"
      className="relative w-full overflow-hidden bg-limestone text-ink"
    >
      <div ref={sectionRef} className="relative">
        <div className="flex h-[100svh] flex-col justify-center">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <Reveal>
              <ChapterIntro
                index={meta.index}
                kicker={meta.kicker}
                arabic={meta.arabic}
              />
            </Reveal>
          </div>

          {/* Horizontal memory wall */}
          <div
            ref={trackRef}
            className="mt-10 flex w-max items-center gap-5 px-5 will-change-transform sm:gap-8 sm:px-8 md:mt-14"
          >
            <div className="w-[78vw] shrink-0 sm:w-[40vw] md:w-[34vw]">
              <h2 className="display-md font-serif">{meta.title}</h2>
              <p className="lede mt-6 max-w-sm text-ink/70">
                Un repas partagé. Un éclat de rire. Le camp d'été. La communauté n'est
                pas un programme — c'est ce qui reste quand les activités s'arrêtent.
              </p>
              <p className="mt-8 font-serif text-2xl italic text-sea">
                {QUOTES.community}
              </p>
            </div>

            {WALL.map((slot, i) => (
              <div
                key={slot}
                className={`shrink-0 ${
                  i % 2 === 0
                    ? "h-[52vh] w-[72vw] sm:w-[34vw]"
                    : "h-[40vh] w-[60vw] translate-y-8 sm:w-[26vw]"
                }`}
              >
                <Frame slot={slot} from="up" className="h-full w-full" />
              </div>
            ))}

            <div className="flex w-[60vw] shrink-0 items-center sm:w-[24vw]">
              <p className="font-serif text-3xl leading-tight text-ink/80">
                Appartenir,
                <br />
                <span className="text-terracotta italic">c'est déjà créer.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
