import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  /**
   * `primary` is the red fill and is the only thing that sells — one per screen.
   * `ghost` is an outline that inherits the surrounding ink color, so it works
   * on paper and on deep sections without needing a separate variant.
   */
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 font-display font-medium uppercase tracking-[0.1em] " +
  "transition-[background-color,color,border-color,transform] duration-200 " +
  "[touch-action:manipulation] focus-visible:outline-2 focus-visible:outline-offset-[3px] active:translate-y-px";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  // White on #C1121F measures 6.3:1 — passes AA on either ground.
  primary: "bg-blood text-white hover:bg-blood-dark focus-visible:outline-blood",
  ghost:
    "border border-current/40 text-current hover:border-current hover:bg-current/5 focus-visible:outline-current",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  // min-h keeps every button above the 44px touch-target floor.
  md: "min-h-[46px] px-7 py-3 text-sm",
  lg: "min-h-[54px] px-9 py-4 text-[15px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  onClick,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("#")) {
    return (
      <a
        href={href}
        className={cls}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}
