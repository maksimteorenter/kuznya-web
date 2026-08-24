"use client";

import { useState } from "react";
import { BookMockup3D } from "@/components/book/BookMockup3D";
import { BookReaderModal } from "@/components/book/BookReaderModal";
import { track } from "@/lib/track";
import { T, type Locale } from "@/lib/i18n";

export function InteractiveBookMockup({ locale = "ru" }: { locale?: Locale }) {
  const t = T[locale];
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => { track("reader_open", { source: "mockup" }); setOpen(true); }}
        className="group relative block cursor-pointer"
        aria-label={t.hero.excerpt}
      >
        <BookMockup3D />
        <span className="pointer-events-none absolute inset-x-0 -bottom-2 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-sm bg-blood px-4 py-2 font-display text-[13px] uppercase tracking-[0.14em] text-white shadow-lg">
            {t.hero.excerpt} →
          </span>
        </span>
      </button>

      <BookReaderModal open={open} onClose={() => setOpen(false)} locale={locale} />
    </>
  );
}
