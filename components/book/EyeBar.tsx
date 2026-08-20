"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.2, 0.9, 0.3, 1];

/**
 * The red censor bar, anchored to the *eyes in the photograph* rather than to
 * the section. Percent-of-container positioning drifted off the face whenever
 * the viewport ratio changed; this mirrors the browser's object-cover math for
 * the same image + object-position, so the bar lands on the eyes at any size.
 *
 * Eye coordinates were read off a measurement grid over hero-portrait.jpg:
 * eye band 19%–25% of image height, face 48%–72% of image width.
 */
export function EyeBar({
  imageW = 940,
  imageH = 1120,
  objectX = 0.52,
  objectY = 0.12,
  band = { top: 0.19, height: 0.06, left: 0.34, width: 0.58 },
  delay = 1.15,
  className = "",
}: {
  imageW?: number;
  imageH?: number;
  /** Must match the Image's object-position fractions. */
  objectX?: number;
  objectY?: number;
  /** Bar rectangle in image-fraction coordinates. */
  band?: { top: number; height: number; left: number; width: number };
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function compute() {
      if (!el) return;
      const cw = el.clientWidth;
      const ch = el.clientHeight;
      if (!cw || !ch) return;
      // object-fit: cover — scale to fill, crop the excess per object-position.
      const scale = Math.max(cw / imageW, ch / imageH);
      const dw = imageW * scale;
      const dh = imageH * scale;
      const ox = (cw - dw) * objectX;
      const oy = (ch - dh) * objectY;
      setRect({
        top: oy + band.top * dh,
        height: band.height * dh,
        left: ox + band.left * dw,
        width: band.width * dw,
      });
    }

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, [imageW, imageH, objectX, objectY, band.top, band.height, band.left, band.width]);

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {rect && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.55, delay, ease }}
          className="absolute origin-left bg-blood mix-blend-multiply"
          style={rect}
        />
      )}
    </div>
  );
}
