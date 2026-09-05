"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";
import { KUZNYA_LANDING } from "@/lib/content";

/**
 * Sticky CTA bar on every breakpoint, appears once the Hero's own button has
 * scrolled away (same pattern as `components/book/StickyMobileCTA.tsx`) so
 * the offer never shows twice on one screen. Never covers the header or
 * blocks reading.
 */
export function StickyForgeCTA() {
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
          // Dark to match /forge, which is now the owner-specified black/gold
          // scheme — the previous paper bar sat on the page like a lit strip.
          className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(200,154,61,0.24)] bg-[#070707]/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur"
        >
          <div className="mx-auto max-w-sm">
            <a
              href={KUZNYA_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="forge_sticky_cta_click"
              className="flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#E2C06B] px-6 font-display text-[15px] font-semibold uppercase tracking-[0.1em] text-[#070707]"
            >
              Войти • {KUZNYA_LANDING.hero.price}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
