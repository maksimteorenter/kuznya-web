import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Use for full-bleed cinematic screens without the default vertical rhythm. */
  bare?: boolean;
  tone?: "void" | "graphite";
  /** Thin brass rule marking the top of the section. Off by default for bare/cinematic screens. */
  divider?: boolean;
};

export function Section({
  children,
  id,
  className = "",
  bare = false,
  tone = "void",
  divider = !bare,
}: SectionProps) {
  const toneClass = tone === "graphite" ? "section-atmosphere-graphite" : "section-atmosphere-void";
  const padding = bare ? "" : "py-24 md:py-36";

  return (
    <section id={id} className={`relative ${toneClass} ${padding} ${className}`}>
      {divider && (
        <div className="brass-rule absolute inset-x-0 top-0 mx-auto max-w-[280px]" aria-hidden="true" />
      )}
      {children}
    </section>
  );
}
