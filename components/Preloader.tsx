"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FACTS } from "@/lib/content";

/** A brief cinematic curtain — the tide pulling back to reveal the experience. */
export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-sea-deep"
          initial={{ opacity: 1 }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="flex flex-col items-center gap-4 text-foam"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="font-arabic text-2xl text-foam/80"
              dir="rtl"
              lang="ar"
            >
              {FACTS.arabicName}
            </span>
            <span className="eyebrow text-foam/50">Rejiche · Mahdia · Tunisie</span>
            <motion.span
              className="mt-2 h-px bg-foam/60"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
