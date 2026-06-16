"use client";

import { motion } from "framer-motion";
import { getMedia, TONE_GRADIENT } from "@/lib/media";
import MeridianPattern from "./MeridianPattern";

type Props = {
  /** key into the media manifest, e.g. "house.exterior" */
  slot: string;
  className?: string;
  /** reveal wipe direction */
  from?: "left" | "right" | "up" | "down";
  rounded?: boolean;
  /** show the caption as a figcaption under the frame */
  showCaption?: boolean;
  priority?: boolean;
};

const CLIP: Record<NonNullable<Props["from"]>, string> = {
  left: "inset(0 100% 0 0)",
  right: "inset(0 0 0 100%)",
  up: "inset(100% 0 0 0)",
  down: "inset(0 0 100% 0)",
};

export default function Frame({
  slot,
  className = "",
  from = "up",
  rounded = true,
  showCaption = false,
  priority = false,
}: Props) {
  const media = getMedia(slot);
  const [c1, c2, c3] = TONE_GRADIENT[media.tone];

  return (
    <figure className={`relative ${className}`}>
      <motion.div
        className={`relative h-full w-full overflow-hidden ${
          rounded ? "rounded-[2px] sm:rounded-md" : ""
        }`}
        initial={{ clipPath: CLIP[from], scale: 1.08 }}
        whileInView={{ clipPath: "inset(0 0 0 0)", scale: 1 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {media.src ? (
          media.kind === "video" ? (
            <video
              className="h-full w-full object-cover"
              src={media.src}
              autoPlay
              muted
              loop
              playsInline
              preload={priority ? "auto" : "metadata"}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="h-full w-full object-cover"
              src={media.src}
              alt={media.caption}
              loading={priority ? "eager" : "lazy"}
            />
          )
        ) : (
          // Generated placeholder — the site is complete without assets (D-003).
          <div
            className="grain relative h-full w-full"
            style={{
              backgroundImage: `radial-gradient(120% 120% at 20% 10%, ${c3} 0%, ${c1} 45%, ${c2} 100%)`,
            }}
          >
            <div className="absolute inset-0">
              <MeridianPattern color="#ffffff" opacity={0.1} size={72} />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7">
              <span className="eyebrow text-white/70">{media.tone}</span>
              <span className="mt-1 max-w-[26ch] font-serif text-base leading-tight text-white/90 sm:text-xl">
                {media.caption}
              </span>
              <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                Espace média · {slot}
              </span>
            </div>
          </div>
        )}
      </motion.div>

      {showCaption && (
        <figcaption className="mt-3 font-sans text-xs uppercase tracking-[0.18em] text-ink/45">
          {media.caption}
          {media.credit ? ` — ${media.credit}` : ""}
        </figcaption>
      )}
    </figure>
  );
}
