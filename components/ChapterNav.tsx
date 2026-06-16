"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { CHAPTERS } from "@/lib/content";
import { scrollToId } from "./SmoothScroll";

export default function ChapterNav() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  // Track which chapter is in view.
  useEffect(() => {
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      Boolean
    ) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = CHAPTERS.findIndex((c) => c.id === e.target.id);
            if (i >= 0) setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      {/* Top hairline scroll progress */}
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-sea-azure mix-blend-difference"
        style={{ scaleX: progress }}
      />

      {/* Wordmark — quiet, top-left */}
      <button
        onClick={() => go("horizon")}
        className="fixed left-5 top-5 z-50 text-left mix-blend-difference sm:left-8 sm:top-7"
        aria-label="Rejiche — Maison des Jeunes, retour au début"
      >
        <span className="block font-serif text-base leading-none tracking-tight text-white">
          Rejiche
        </span>
        <span className="block font-sans text-[0.58rem] uppercase tracking-[0.3em] text-white/70">
          Maison des Jeunes
        </span>
      </button>

      {/* Desktop: floating vertical chapter rail */}
      <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <ul className="flex flex-col items-end gap-3">
          {CHAPTERS.map((c, i) => (
            <li key={c.id}>
              <button
                onClick={() => go(c.id)}
                className="group flex items-center gap-3"
                aria-label={`Chapitre ${c.index} — ${c.nav}`}
                aria-current={active === i ? "true" : undefined}
              >
                <span
                  className={`font-sans text-[0.7rem] tabular-nums tracking-widest transition-all duration-500 ${
                    active === i
                      ? "text-ink opacity-100"
                      : "translate-x-2 text-ink/50 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  } mix-blend-difference`}
                >
                  <span className="mix-blend-normal text-white">
                    {c.index} · {c.nav}
                  </span>
                </span>
                <span
                  className={`block rounded-full bg-white transition-all duration-500 ${
                    active === i ? "h-6 w-[3px]" : "h-[3px] w-[3px] opacity-50"
                  }`}
                  style={{ mixBlendMode: "difference" }}
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: floating index button + overlay */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-sea-deep text-foam shadow-lg lg:hidden"
        aria-label="Index des chapitres"
        aria-expanded={open}
      >
        <span
          aria-hidden="true"
          className="font-sans text-[0.6rem] tabular-nums tracking-widest"
        >
          {CHAPTERS[active].index}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] bg-sea-deep/95 px-6 py-20 backdrop-blur lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex flex-col gap-1">
              {CHAPTERS.map((c, i) => (
                <li key={c.id}>
                  <button
                    onClick={() => go(c.id)}
                    className="flex w-full items-baseline gap-4 border-b border-white/10 py-3 text-left"
                  >
                    <span className="font-sans text-xs tabular-nums text-foam/50">
                      {c.index}
                    </span>
                    <span
                      className={`font-serif text-2xl ${
                        active === i ? "text-foam" : "text-foam/60"
                      }`}
                    >
                      {c.nav}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
