"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight, X, MagnifyingGlassPlus } from "@phosphor-icons/react/dist/ssr";

export type Credential = {
  src: string;
  title: string;
  issuer: string;
  year: string;
};

export function CredentialsGallery({ items }: { items: Credential[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const show = useCallback(
    (next: number) => setOpen(((next % items.length) + items.length) % items.length),
    [items.length],
  );

  // Arrow keys and Escape drive the lightbox once it is open.
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") show(open + 1);
      if (e.key === "ArrowLeft") show(open - 1);
    };
    window.addEventListener("keydown", onKey);
    // Stop the page scrolling behind the overlay.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, show]);

  const scrollRail = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir * Math.round(rail.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <>
      <div className="relative mt-12">
        {/* Horizontal, snap-scrolling rail — swipe on touch, arrows on desktop. */}
        <div
          ref={railRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((c, i) => (
            <button
              key={c.src}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Открыть: ${c.title}`}
              className="group w-[260px] shrink-0 snap-start text-left sm:w-[320px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white transition-transform duration-300 group-hover:-translate-y-1">
                <Image
                  src={c.src}
                  alt={`${c.title} — ${c.issuer}`}
                  fill
                  sizes="320px"
                  className="object-contain"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/35 group-hover:opacity-100">
                  <MagnifyingGlassPlus weight="bold" className="size-8 text-white" />
                </span>
              </div>
              <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.06em] text-bone">
                {c.title}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-mist">
                {c.issuer} · {c.year}
              </p>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollRail(-1)}
          aria-label="Предыдущие документы"
          className="absolute -left-3 top-[38%] hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-deep/80 text-bone backdrop-blur transition-colors hover:border-blood md:flex"
        >
          <CaretLeft weight="bold" className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollRail(1)}
          aria-label="Следующие документы"
          className="absolute -right-3 top-[38%] hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-deep/80 text-bone backdrop-blur transition-colors hover:border-blood md:flex"
        >
          <CaretRight weight="bold" className="size-5" />
        </button>
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[open].title}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/92 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Закрыть"
            className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-white/20 text-bone transition-colors hover:border-blood"
          >
            <X weight="bold" className="size-5" />
          </button>

          {/* A sized box with fill/object-contain keeps the scan fully visible
              at any aspect ratio — intrinsic width/height fought the max-height. */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[70vh] w-full max-w-5xl"
          >
            <Image
              src={items[open].src}
              alt={`${items[open].title} — ${items[open].issuer}`}
              fill
              priority
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <div onClick={(e) => e.stopPropagation()} className="mt-6 text-center">
            <p className="font-display text-base font-semibold uppercase tracking-[0.06em] text-bone">
              {items[open].title}
            </p>
            <p className="mt-1.5 text-sm text-mist">
              {items[open].issuer} · {items[open].year}
            </p>
            <p className="mt-2 text-xs text-mist/60">
              {open + 1} / {items.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); show(open - 1); }}
            aria-label="Предыдущий документ"
            className="absolute left-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-bone transition-colors hover:border-blood sm:left-6"
          >
            <CaretLeft weight="bold" className="size-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); show(open + 1); }}
            aria-label="Следующий документ"
            className="absolute right-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-bone transition-colors hover:border-blood sm:right-6"
          >
            <CaretRight weight="bold" className="size-6" />
          </button>
        </div>
      )}
    </>
  );
}
