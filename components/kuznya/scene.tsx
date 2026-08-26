import type { CSSProperties, ReactNode } from "react";

// Cinematic dark-editorial design tokens — deliberately separate from the
// live site's ink/blood/bone tokens in tailwind.config.ts. Shared by every
// page that opts into this visual language (kuznya-preview, about).
export const kuznyaTokens = {
  "--bg": "#080808",
  "--bg2": "#0d0d0d",
  "--ivory": "#f2efe8",
  "--graphite": "#a6a39c",
  "--hot": "#a6372e",
} as CSSProperties;

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span
      className="text-[13px] font-semibold uppercase tracking-[0.2em]"
      style={{ color: "var(--hot)" }}
    >
      {children}
    </span>
  );
}

// Bento is deliberately rationed to 2 uses per page — everywhere else the
// unit of design is a full scene, not a card grid.
export function BentoTile({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[22px] border p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 ${className}`}
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}
    >
      {children}
    </div>
  );
}

// A "scene" — one full-height moment, one idea, generous negative space.
export function Scene({
  id,
  center = false,
  bg,
  className = "",
  children,
}: {
  id?: string;
  center?: boolean;
  bg?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative flex min-h-[92vh] flex-col justify-center px-6 py-28 md:px-10 ${
        center ? "items-center text-center" : ""
      } ${className}`}
      style={bg ? { background: bg } : undefined}
    >
      <div className="mx-auto w-full max-w-[1360px]">{children}</div>
    </section>
  );
}
