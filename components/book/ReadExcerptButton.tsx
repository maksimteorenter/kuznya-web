"use client";

import { useState } from "react";
import { BookReaderModal } from "@/components/book/BookReaderModal";

/**
 * "Read an excerpt" has to actually open the reader. It previously scrolled to
 * a text section, which is not what the label promises.
 */
export function ReadExcerptButton({
  className = "",
  size = "lg",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  const [open, setOpen] = useState(false);

  const base =
    "inline-flex items-center justify-center gap-2 font-display font-medium uppercase tracking-[0.1em] " +
    "transition-[background-color,color,border-color,transform] duration-200 " +
    "[touch-action:manipulation] focus-visible:outline-2 focus-visible:outline-offset-[3px] " +
    "focus-visible:outline-current active:translate-y-px " +
    "border border-current/40 text-current hover:border-current hover:bg-current/5";
  const sizes =
    size === "lg"
      ? "min-h-[54px] px-9 py-4 text-[15px]"
      : "min-h-[46px] px-7 py-3 text-sm";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${base} ${sizes} ${className}`}
      >
        Читать отрывок
      </button>
      <BookReaderModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
