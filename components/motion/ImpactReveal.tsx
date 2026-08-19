"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * "Stamped" reveal for a single high-weight word or number: a brief vertical
 * drop + compress, then a thin accent line snaps in underneath. Restrained —
 * one strong impact, not a bounce. Use sparingly on the single most
 * important element per section.
 */
export function ImpactReveal({
  children,
  delay = 0,
  className = "",
  lineClassName = "bg-ember-bright",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  lineClassName?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: -14, scaleY: 1.08 }}
        animate={{ opacity: 1, y: 0, scaleY: 1 }}
        transition={{ duration: 0.5, delay, ease: [0.2, 0.9, 0.3, 1] }}
        className="inline-block"
        style={{ transformOrigin: "bottom" }}
      >
        {children}
      </motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.16, delay: delay + 0.42, ease: "easeOut" }}
        className={`absolute -bottom-2 left-0 h-[3px] w-full origin-left ${lineClassName}`}
        aria-hidden="true"
      />
    </span>
  );
}
