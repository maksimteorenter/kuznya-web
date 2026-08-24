"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

/** Fires scroll_25/50/75/100 once each per page view. rAF-throttled. */
export function ScrollDepth() {
  useEffect(() => {
    const fired = new Set<number>();
    let ticking = false;

    function measure() {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = (window.scrollY / max) * 100;
      for (const mark of [25, 50, 75, 100]) {
        if (pct >= mark && !fired.has(mark)) {
          fired.add(mark);
          track(`scroll_${mark}` as "scroll_25");
        }
      }
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(measure);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
