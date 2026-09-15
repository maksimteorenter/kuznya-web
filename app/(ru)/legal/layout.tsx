import type { ReactNode } from "react";

/** Shared shell for legal documents: quiet, readable, printable. */
export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-paper py-24 text-ink md:py-32">
      <article className="prose-legal mx-auto max-w-[70ch] px-6 md:px-10">
        {children}
      </article>
    </div>
  );
}
