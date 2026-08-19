"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Every block opens the same way: a short red bar, an optional label, then the
 * headline. Repeating the device is what makes the red read as one system
 * rather than scattered decoration.
 */
export function SectionHead({
  label,
  children,
  center = false,
  className = "",
}: {
  label?: string;
  children: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "flex flex-col items-center text-center" : ""} ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.5, ease }}
        className="blood-rule origin-left"
      />
      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="kicker mt-5"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.85, delay: 0.15, ease }}
        className="mt-4 max-w-3xl text-balance font-display font-bold uppercase leading-[1.08]"
        style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.9rem)", letterSpacing: "-0.005em" }}
      >
        {children}
      </motion.h2>
    </div>
  );
}
