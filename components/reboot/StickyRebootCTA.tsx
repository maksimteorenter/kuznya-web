"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

/**
 * Bottom bar with the one door on the page, shown once the hero's own button
 * has scrolled away — same pattern as StickyForgeCTA. Seven principles is a
 * long read; without this the only way out is at the very end.
 */
export function StickyRebootCTA({ label, href }: { label: string; href: string }) {
  const external = /^https?:/.test(href);
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > window.innerHeight * 0.9);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(224,192,120,0.24)] bg-[#0A0706]/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur"
        >
          <div className="mx-auto max-w-sm">
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              data-track="reboot_sticky_cta_click"
              className="flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#E0C078] px-6 text-center font-display text-[14px] font-semibold uppercase leading-tight tracking-[0.08em] text-[#0A0706]"
            >
              {label}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
