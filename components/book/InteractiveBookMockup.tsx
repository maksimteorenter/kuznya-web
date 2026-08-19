"use client";

import { useState } from "react";
import { BookMockup3D } from "@/components/book/BookMockup3D";
import { BookReaderModal } from "@/components/book/BookReaderModal";

export function InteractiveBookMockup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block cursor-pointer"
        aria-label="Читать первые страницы книги"
      >
        <BookMockup3D />
        <span className="pointer-events-none absolute inset-x-0 -bottom-2 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-sm bg-void/90 px-4 py-2 font-display text-xs uppercase tracking-[0.14em] text-bone shadow-lg">
            Читать первые страницы →
          </span>
        </span>
      </button>

      <BookReaderModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
