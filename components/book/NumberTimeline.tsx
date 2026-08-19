"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { TIMELINE_DAYS } from "@/lib/content";

export function NumberTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(
      TIMELINE_DAYS.length - 1,
      Math.floor(v * TIMELINE_DAYS.length)
    );
    setIndex((prev) => (prev === next ? prev : next));
  });

  const current = TIMELINE_DAYS[index];
  const isFinal = index === TIMELINE_DAYS.length - 1;

  return (
    <div ref={trackRef} className="relative h-[380vh] bg-void">
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden">
        <span className="kicker">Масштаб времени</span>

        <div className="relative mt-6 flex h-[14rem] items-center justify-center md:h-[18rem]">
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`font-display font-bold leading-none ${
                isFinal ? "text-flame" : "text-bone"
              }`}
              style={{ fontSize: "clamp(4.5rem, 15vw, 10rem)" }}
            >
              {current}
            </motion.span>
          </AnimatePresence>
        </div>

        <span className="font-display text-sm uppercase tracking-[0.16em] text-mist">
          {isFinal ? "дней в изоляции" : "дней"}
        </span>

        <div className="mt-10 flex gap-2">
          {TIMELINE_DAYS.map((d, i) => (
            <span
              key={d}
              className={`h-1 w-6 rounded-full transition-colors duration-300 ${
                i <= index ? "bg-ember-bright" : "bg-steel"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
