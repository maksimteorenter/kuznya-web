"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ElementType, ReactNode } from "react";

/**
 * Masked line-reveal for large editorial headlines.
 * Wraps children in an overflow-hidden mask and slides them up into view.
 * Intended for one short phrase per instance — stack multiple RevealText
 * blocks with a `delay` offset to build a slow, sequential title card.
 */
export function RevealText({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <Tag className={className} style={style}>
          {children}
        </Tag>
      </motion.div>
    </div>
  );
}
