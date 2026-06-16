"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { HERO, QUOTES } from "@/lib/content";
import Frame from "../Frame";

// WebGL is client-only; never SSR it.
const SeaCanvas = dynamic(() => import("../webgl/SeaCanvas"), { ssr: false });

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Chapter01Horizon() {
  return (
    <section
      id="horizon"
      data-theme="deep"
      className="relative w-full overflow-hidden bg-sea-deep text-foam"
    >
      {/* Full-viewport sea */}
      <div className="relative flex min-h-[100svh] w-full flex-col justify-between">
        <div className="absolute inset-0">
          <SeaCanvas />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sea-deep/40 via-transparent to-sea-deep/70" />
        </div>

        {/* Hero lockup */}
        <div className="relative z-10 flex flex-1 flex-col justify-center px-5 pt-24 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.3 }}
            className="mb-6 flex items-center gap-4"
          >
            <span
              className="font-arabic text-xl text-foam/80"
              dir="rtl"
              lang="ar"
            >
              {HERO.arabic}
            </span>
            <span className="h-px w-12 bg-foam/40" />
            <span className="eyebrow text-foam/70">{HERO.kicker}</span>
          </motion.div>

          <h1 className="display text-foam">
            {HERO.title.map((line, i) => (
              <span key={i} className="line-mask">
                <motion.span
                  className={`block ${i === 1 ? "italic font-normal text-sand" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.2, ease: EASE, delay: 0.5 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="lede mt-8 max-w-xl text-foam/85"
          >
            {HERO.sub}
          </motion.p>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="relative z-10 flex items-center justify-between px-5 pb-8 sm:px-8"
        >
          <span className="eyebrow text-foam/60">{HERO.scrollHint}</span>
          <motion.span
            className="block h-10 w-px bg-foam/50"
            animate={{ scaleY: [0.3, 1, 0.3], transformOrigin: "top" }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Editorial coda — establishes place, hands off to The House */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-end gap-10 px-5 py-24 sm:px-8 md:grid-cols-12 md:py-32">
        <div className="md:col-span-7">
          <p className="display-md max-w-[15ch] font-serif text-foam">
            {QUOTES.horizon}
          </p>
          <p className="lede mt-8 max-w-md text-foam/70">
            Au bord du Sahel tunisien, là où trois kilomètres de sable rencontrent
            une eau turquoise, une ville respire au rythme de la mer. C'est ici, à
            Rejiche, que commence notre histoire.
          </p>
        </div>
        <div className="md:col-span-5">
          <Frame slot="horizon.shore" from="up" className="aspect-[4/5] w-full" />
        </div>
      </div>
    </section>
  );
}
