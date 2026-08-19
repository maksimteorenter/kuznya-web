"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BOOK } from "@/lib/content";

// Archival / mechanical date-counter: 1 → 13 → 134 → 1341. Plays once on
// mount, ~1.3s total, then hands off to the caller via onDone. Respects
// prefers-reduced-motion by jumping straight to the final value.
const STAGES = ["1", "13", "134", String(BOOK.days)];
const STAGE_MS = 320;

export function DayCounter({ onDone }: { onDone?: () => void }) {
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setStage(STAGES.length - 1);
      onDone?.();
      return;
    }
    if (stage >= STAGES.length - 1) {
      const t = setTimeout(() => onDone?.(), 250);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStage((s) => s + 1), STAGE_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, reduceMotion]);

  return (
    <motion.span
      key={stage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.08 }}
      className="tabular-nums"
      aria-live="off"
    >
      {STAGES[stage]}
    </motion.span>
  );
}
