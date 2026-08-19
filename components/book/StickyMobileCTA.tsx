"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { BOOK } from "@/lib/content";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  // Only appear once the hero's own CTA has scrolled away, so the same offer
  // is never shown twice on one screen.
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
          className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/15 bg-paper/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden"
        >
          <Button href={BOOK.checkoutUrl} className="w-full">
            Получить книгу — {BOOK.price}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
