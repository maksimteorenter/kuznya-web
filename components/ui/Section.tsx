import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Use for full-bleed cinematic screens without the default vertical rhythm. */
  bare?: boolean;
  /**
   * The page alternates between paper and deep black as you scroll — that
   * alternation is the "black and white" rhythm, not decoration. Pick the
   * tone that suits the block's weight: `deep` for the hardest moments.
   */
  tone?: "paper" | "deep";
};

export function Section({
  children,
  id,
  className = "",
  bare = false,
  tone = "paper",
}: SectionProps) {
  const isDeep = tone === "deep";
  const toneClass = isDeep
    ? "tone-deep bg-deep text-bone"
    : "tone-paper bg-paper text-ink";
  const padding = bare ? "" : "py-24 md:py-36";

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${toneClass} ${padding} ${className}`}
    >
      {/* Grain sits above the background but below content. Children are NOT
          wrapped in a positioned element: sections position their own
          full-bleed photo layers against this section, and an extra
          `relative` wrapper would silently become their containing block. */}
      {isDeep && (
        <div className="grain-overlay z-[1]" aria-hidden="true" />
      )}
      {children}
    </section>
  );
}
