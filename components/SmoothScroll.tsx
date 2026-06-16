"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * One scroll truth (project-memory/DECISIONS.md D-002): Lenis owns inertial scroll,
 * GSAP ScrollTrigger reads from it. Disabled under prefers-reduced-motion so the page
 * scrolls natively and nothing relies on smoothing.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.registerPlugin(ScrollTrigger);

    if (reduce) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // expose for programmatic navigation (ChapterNav)
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 300);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      window.removeEventListener("load", refresh);
      clearTimeout(t);
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}

/** Smoothly scroll to a selector, honouring Lenis when present. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.6 });
  else el.scrollIntoView({ behavior: "smooth" });
}
