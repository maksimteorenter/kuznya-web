"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * The numeral becomes a window: a solid numeral is always underneath as a
 * fallback, and a second copy — clipped to the same glyph shapes, filled
 * with a real photo — fades and settles into place as it scrolls through
 * the viewport. Scroll-linked rather than a one-shot load animation, so it
 * keeps feeling alive on the way past, not just on arrival.
 */
export function PhotoMaskNumber({
  value,
  photoSrc,
  photoPosition = "center",
  className = "",
  style,
}: {
  value: string;
  photoSrc: string;
  photoPosition?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.35"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <span ref={ref} className={`relative inline-block ${className}`} style={style}>
      <span aria-hidden="true" className="invisible block">
        {value}
      </span>
      <span aria-hidden="true" className="absolute inset-0 block">
        {value}
      </span>
      <motion.span
        aria-hidden="true"
        style={{
          opacity,
          scale,
          backgroundImage: `url(${photoSrc})`,
          backgroundSize: "cover",
          backgroundPosition: photoPosition,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        className="absolute inset-0 block"
      >
        {value}
      </motion.span>
    </span>
  );
}
