"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Fade-up reveal on enter. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Chapter <section> with theme-aware colours. */
export function ChapterSection({
  id,
  theme,
  children,
  className = "",
}: {
  id: string;
  theme: "light" | "deep";
  children: ReactNode;
  className?: string;
}) {
  const tone =
    theme === "deep"
      ? "bg-sea-deep text-foam"
      : "bg-limestone text-ink";
  return (
    <section
      id={id}
      data-theme={theme}
      className={`relative w-full overflow-hidden ${tone} ${className}`}
    >
      {children}
    </section>
  );
}

/** The numbered intro lockup shared by every chapter. */
export function ChapterIntro({
  index,
  kicker,
  arabic,
  muted = false,
}: {
  index: string;
  kicker: string;
  arabic: string;
  muted?: boolean;
}) {
  const sub = muted ? "opacity-60" : "opacity-80";
  return (
    <div className="flex items-center gap-4">
      <span className={`font-sans text-sm tabular-nums tracking-[0.3em] ${sub}`}>
        {index}
      </span>
      <span className="h-px w-10 bg-current opacity-30" />
      <span className={`eyebrow ${sub}`}>{kicker}</span>
      <span
        className="font-arabic text-lg opacity-70"
        dir="rtl"
        lang="ar"
      >
        {arabic}
      </span>
    </div>
  );
}

/** Oversized editorial pull-quote. */
export function PullQuote({
  children,
  accent = "text-terracotta",
}: {
  children: ReactNode;
  accent?: string;
}) {
  return (
    <Reveal>
      <p className="display-md max-w-[18ch] font-serif">
        <span className={accent}>“</span>
        {children}
        <span className={accent}>”</span>
      </p>
    </Reveal>
  );
}
