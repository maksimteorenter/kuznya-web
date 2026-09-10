"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

/**
 * Sticky "work with me" bar for /about. The page is long — credentials, books,
 * the whole biography — and the only two ways to act on it sat at the very top
 * and the very bottom. A reader convinced somewhere in the middle had nothing
 * to press without scrolling.
 *
 * Same pattern as the book and forge bars: appears only once the hero's own
 * button has scrolled away, so the offer is never shown twice on one screen.
 */
export function StickyAboutCTA() {
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
          className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/15 bg-paper/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur"
        >
          {/* Full width, edge to edge. The owner asked for a bar nobody has to
              go looking for, so it is not centred in a narrow column — it
              spans the screen and the button fills it. */}
          <div className="mx-auto flex w-full max-w-5xl items-center gap-3">
            {/* His face rides the bar, the way the cover rides the book page's:
                on this page the person is the product. */}
            <div className="relative hidden h-[46px] w-[46px] shrink-0 overflow-hidden rounded-full shadow-[0_4px_12px_-4px_rgba(11,11,12,0.5)] sm:block">
              <Image
                src="/images/author-portrait-red.jpg"
                alt=""
                fill
                sizes="46px"
                className="object-cover object-top"
              />
            </div>
            <Button href="/mentorship" size="lg" className="w-full flex-1" dataTrack="about_sticky_cta_click">
              Работа со мной
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
