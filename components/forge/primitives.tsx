import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion/FadeIn";

// The dark palette and the section primitives shared by the long-form pages —
// Кузня and Перезагрузка. Kept as literal Tailwind strings (not interpolated)
// so the JIT scanner finds them. Lifted out of ForgeView so a second page in
// the same language does not mean a second copy of the language.

export const bone = "text-[#F3EEE5]";
// Tailwind's class scanner reads raw source text, not evaluated JS — an
// opacity modifier built via template-literal concatenation (e.g. `${bone}/90`)
// would never appear as one literal token, so it silently wouldn't compile.
// These are their own full literal strings instead.
export const boneSoft = "text-[#F3EEE5]/90";
export const boneSofter = "text-[#F3EEE5]/80";
export const text2 = "text-[#A9A199]";
export const gold = "text-[#B8873B]";
export const goldLight = "text-[#E0C078]";
export const hairline = "border-[rgba(224,192,120,0.24)]";

export function Scene({
  id,
  bg,
  className = "",
  bare = false,
  clip = true,
  children,
}: {
  id: string;
  bg: string;
  className?: string;
  bare?: boolean;
  clip?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative ${clip ? "overflow-hidden" : ""} ${bg} ${bone} ${
        bare ? "" : "py-20 md:py-32"
      } ${className}`}
    >
      <div className="grain-overlay z-[1]" aria-hidden="true" />
      {children}
    </section>
  );
}

export function Head({
  label,
  tone = "mid",
  children,
}: {
  label?: string;
  tone?: "mid" | "bright";
  children: ReactNode;
}) {
  const accent = tone === "bright" ? goldLight : gold;
  const ruleBg = tone === "bright" ? "bg-[#E0C078]" : "bg-[#B8873B]";
  return (
    <FadeIn className="flex flex-col items-center text-center">
      <span aria-hidden="true" className={`h-[3px] w-16 ${ruleBg}`} />
      {label && (
        <p className={`mt-5 font-display text-sm font-semibold uppercase tracking-[0.16em] ${accent}`}>{label}</p>
      )}
      <h2
        className={`mt-4 max-w-3xl text-balance font-display font-bold uppercase leading-[1.08] ${bone}`}
        style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.9rem)", letterSpacing: "-0.005em" }}
      >
        {children}
      </h2>
    </FadeIn>
  );
}

export function BigLine({ children }: { children: ReactNode }) {
  return (
    <p
      className={`text-balance font-display font-bold uppercase leading-[1.14] ${bone}`}
      style={{ fontSize: "clamp(1.4rem, 2.9vw, 2.3rem)" }}
    >
      {children}
    </p>
  );
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <p className={`mx-auto mt-8 max-w-lg text-balance border-t ${hairline} pt-6 text-xs leading-relaxed ${text2}`}>
      {children}
    </p>
  );
}
