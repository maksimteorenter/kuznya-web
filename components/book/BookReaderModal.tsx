"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BOOK } from "@/lib/content";

const PAGES = [
  "/preview-pages/page-005.jpg",
  "/preview-pages/page-006.jpg",
  "/preview-pages/page-007.jpg",
  "/preview-pages/page-008.jpg",
  "/preview-pages/page-009.jpg",
];

export function BookReaderModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const isLast = index === PAGES.length - 1;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const next = useCallback(
    () => setIndex((i) => (i < PAGES.length - 1 ? i + 1 : i)),
    [],
  );
  const prev = useCallback(() => setIndex((i) => (i > 0 ? i - 1 : i)), []);

  // Escape closes, arrows page, Tab is trapped, and focus is restored on exit.
  useEffect(() => {
    if (!open) return;
    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      restoreFocusRef.current?.focus();
    };
  }, [open, onClose, next, prev]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center overscroll-contain bg-deep/[0.97] p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Отрывок книги «${BOOK.title}»`}
            className="flex w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Закрыть"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center font-display text-2xl text-mist transition-colors [touch-action:manipulation] hover:text-bone"
            >
              ✕
            </button>

            <p className="kicker">Отрывок · {BOOK.title}</p>

            <div className="relative mt-6 flex w-full items-center justify-center">
              <button
                onClick={prev}
                disabled={index === 0}
                aria-label="Предыдущая страница"
                className="hidden h-11 w-11 shrink-0 items-center justify-center font-display text-3xl text-mist transition-colors hover:text-blood disabled:opacity-20 sm:flex"
              >
                ‹
              </button>

              <div className="relative aspect-[520/760] w-full max-w-[420px] overflow-hidden shadow-[0_40px_90px_-20px_rgba(0,0,0,0.8)]">
                {/* All pages mount hidden as soon as the reader opens, so
                    flipping never waits on the image pipeline. */}
                <div className="hidden" aria-hidden="true">
                  {PAGES.map((p) => (
                    <Image key={p} src={p} alt="" width={520} height={760} sizes="420px" priority />
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, rotateY: 12 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -12 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Image
                      src={PAGES[index]}
                      alt={`Страница ${index + 1} из ${PAGES.length}`}
                      fill
                      sizes="420px"
                      className="bg-paper object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={next}
                disabled={isLast}
                aria-label="Следующая страница"
                className="hidden h-11 w-11 shrink-0 items-center justify-center font-display text-3xl text-mist transition-colors hover:text-blood disabled:opacity-20 sm:flex"
              >
                ›
              </button>
            </div>

            <div className="mt-4 flex items-center gap-4 sm:hidden">
              <button
                onClick={prev}
                disabled={index === 0}
                className="min-h-[44px] px-4 font-display text-sm uppercase tracking-[0.1em] text-mist [touch-action:manipulation] disabled:opacity-20"
              >
                ← Назад
              </button>
              <button
                onClick={next}
                disabled={isLast}
                className="min-h-[44px] px-4 font-display text-sm uppercase tracking-[0.1em] text-mist [touch-action:manipulation] disabled:opacity-20"
              >
                Дальше →
              </button>
            </div>

            <p
              aria-live="polite"
              className="mt-4 font-display text-[13px] uppercase tracking-[0.14em] tabular-nums text-mist"
            >
              Страница {index + 1} из {PAGES.length}
            </p>

            {isLast && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 flex flex-col items-center gap-3 text-center"
              >
                <p className="max-w-sm text-balance text-[15px] leading-relaxed text-bone/90">
                  Это первые страницы. Дальше — ещё {BOOK.pages - 9} страниц
                  истории.
                </p>
                <Button href="#price" size="lg" onClick={onClose}>
                  Получить книгу — {BOOK.price}
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
