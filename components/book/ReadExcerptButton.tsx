"use client";

import Image from "next/image";
import { useState } from "react";
import { BookReaderModal } from "@/components/book/BookReaderModal";
import { buttonClasses } from "@/components/ui/Button";
import { track } from "@/lib/track";
import { T, type Locale } from "@/lib/i18n";

/**
 * "Read an excerpt" has to actually open the reader — it previously scrolled to
 * a text section, which is not what the label promises.
 *
 * `withCover` adds a small cover thumbnail beside it that opens the same
 * reader, so the book itself is clickable next to the buy button.
 */
export function ReadExcerptButton({
  className = "",
  size = "lg",
  withCover = false,
  locale = "ru",
}: {
  className?: string;
  size?: "md" | "lg";
  withCover?: boolean;
  locale?: Locale;
}) {
  const [open, setOpen] = useState(false);
  const t = T[locale];

  return (
    <>
      <div className="flex items-center gap-4">
        {withCover && (
          <button
            type="button"
            onClick={() => { track("reader_open", { source: "cover_thumb" }); setOpen(true); }}
            aria-label={t.hero.excerpt}
            className="group relative h-[54px] w-[38px] shrink-0 overflow-hidden rounded-md shadow-[0_6px_18px_-6px_rgba(11,11,12,0.5)] outline-offset-[3px] transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:rotate-[-3deg] focus-visible:outline-2 focus-visible:outline-blood motion-reduce:transform-none"
          >
            <Image
              src="/images/cover-front.jpg"
              alt=""
              fill
              sizes="38px"
              className="object-cover"
            />
          </button>
        )}

        <button
          type="button"
          onClick={() => { track("reader_open", { source: "button" }); setOpen(true); }}
          className={buttonClasses("ghost", size, className)}
        >
          {t.hero.excerpt}
        </button>
      </div>

      <BookReaderModal open={open} onClose={() => setOpen(false)} locale={locale} />
    </>
  );
}
