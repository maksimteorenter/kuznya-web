"use client";

import Image from "next/image";
import { useState } from "react";
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

  function next() {
    if (index < PAGES.length - 1) setIndex(index + 1);
  }
  function prev() {
    if (index > 0) setIndex(index - 1);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-void/95 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="absolute right-5 top-5 font-display text-sm uppercase tracking-[0.14em] text-mist transition-colors hover:text-bone"
          >
            Закрыть ✕
          </button>

          <div
            className="flex w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="kicker">
              Читаете отрывок · {BOOK.title}
            </span>

            <div className="relative mt-6 flex w-full items-center justify-center">
              <button
                onClick={prev}
                disabled={index === 0}
                aria-label="Предыдущая страница"
                className="hidden shrink-0 px-4 font-display text-3xl text-mist transition-colors hover:text-ember-bright disabled:opacity-20 disabled:hover:text-mist sm:block"
              >
                ‹
              </button>

              <div className="relative aspect-[520/760] w-full max-w-[420px] overflow-hidden rounded-sm shadow-[0_40px_90px_-20px_rgba(0,0,0,0.8)]">
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
                      alt={`Страница ${index + 1}`}
                      fill
                      sizes="420px"
                      className="object-contain bg-bone"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={next}
                disabled={isLast}
                aria-label="Следующая страница"
                className="hidden shrink-0 px-4 font-display text-3xl text-mist transition-colors hover:text-ember-bright disabled:opacity-20 disabled:hover:text-mist sm:block"
              >
                ›
              </button>
            </div>

            {/* Mobile nav */}
            <div className="mt-4 flex items-center gap-6 sm:hidden">
              <button
                onClick={prev}
                disabled={index === 0}
                className="font-display text-sm uppercase tracking-[0.1em] text-mist disabled:opacity-20"
              >
                ← Назад
              </button>
              <button
                onClick={next}
                disabled={isLast}
                className="font-display text-sm uppercase tracking-[0.1em] text-mist disabled:opacity-20"
              >
                Дальше →
              </button>
            </div>

            <span className="mt-4 font-display text-xs uppercase tracking-[0.14em] text-mist">
              Страница {index + 1} из {PAGES.length}
            </span>

            {isLast && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 flex flex-col items-center gap-3 text-center"
              >
                <p className="max-w-sm text-balance text-sm leading-relaxed text-bone/90">
                  Это первые страницы. Дальше — ещё {BOOK.pages - 9}{" "}
                  страниц истории.
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
