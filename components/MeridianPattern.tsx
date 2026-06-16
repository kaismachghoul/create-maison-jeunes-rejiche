"use client";

import { useId } from "react";

/**
 * Generative Tunisian motif — the eight-pointed star ("khatem") and woven-fish lozenge
 * that recur in Mahdia silk weaving, tile and ironwork (see project-memory/DELIVERABLES.md §1).
 * Used as a quiet texture / section punctuation, never as wallpaper.
 */
export default function MeridianPattern({
  color = "#1C7FA8",
  opacity = 0.12,
  size = 88,
  className = "",
}: {
  color?: string;
  opacity?: number;
  size?: number;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      aria-hidden
      className={className}
      width="100%"
      height="100%"
      style={{ opacity }}
    >
      <defs>
        <pattern
          id={`star-${id}`}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(0)"
        >
          {/* eight-pointed star = two overlaid squares */}
          <g
            fill="none"
            stroke={color}
            strokeWidth={1}
            transform={`translate(${size / 2} ${size / 2})`}
          >
            <rect
              x={-size * 0.26}
              y={-size * 0.26}
              width={size * 0.52}
              height={size * 0.52}
            />
            <rect
              x={-size * 0.26}
              y={-size * 0.26}
              width={size * 0.52}
              height={size * 0.52}
              transform="rotate(45)"
            />
            <circle r={size * 0.06} fill={color} stroke="none" />
            {/* connecting woven lines toward the next tile */}
            <line x1={-size / 2} y1={0} x2={-size * 0.26} y2={0} />
            <line x1={size * 0.26} y1={0} x2={size / 2} y2={0} />
            <line x1={0} y1={-size / 2} x2={0} y2={-size * 0.26} />
            <line x1={0} y1={size * 0.26} x2={0} y2={size / 2} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#star-${id})`} />
    </svg>
  );
}
