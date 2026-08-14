import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Use for full-bleed cinematic screens without the default vertical rhythm. */
  bare?: boolean;
  tone?: "void" | "graphite";
};

export function Section({
  children,
  id,
  className = "",
  bare = false,
  tone = "void",
}: SectionProps) {
  const toneClass = tone === "graphite" ? "bg-graphite" : "bg-void";
  const padding = bare ? "" : "py-24 md:py-36";

  return (
    <section id={id} className={`relative ${toneClass} ${padding} ${className}`}>
      {children}
    </section>
  );
}
