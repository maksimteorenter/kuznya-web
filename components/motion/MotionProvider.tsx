"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Framer Motion drives transforms in JS, so the `prefers-reduced-motion` block
 * in globals.css does not reach it — that CSS only stops CSS animations and
 * transitions. `reducedMotion="user"` makes every motion component in the tree
 * honor the OS setting for real.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
