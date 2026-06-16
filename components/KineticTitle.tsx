"use client";

import { motion } from "framer-motion";

/**
 * Oversized serif title revealed line-by-line through a mask — "light disclosing form"
 * rather than a generic fade (project-memory/ANIMATION_NOTES.md).
 */
export default function KineticTitle({
  text,
  className = "display",
  as = "h2",
  delay = 0,
  italicLast = false,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2";
  delay?: number;
  italicLast?: boolean;
}) {
  const lines = text.split("\n");
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15%" }}
    >
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <motion.span
            className={`block ${
              italicLast && i === lines.length - 1 ? "italic font-normal" : ""
            }`}
            variants={{
              hidden: { y: "110%" },
              show: { y: "0%" },
            }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.09,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
