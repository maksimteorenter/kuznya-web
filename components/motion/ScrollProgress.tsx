"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin red reading-progress line pinned under the header. Driven by a motion
 * value outside React state, so it never re-renders anything while scrolling.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-16 z-50 h-[3px] origin-left bg-blood motion-reduce:hidden"
    />
  );
}
