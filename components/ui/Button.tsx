import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 font-display uppercase tracking-[0.08em] font-medium transition-all duration-200 rounded-sm";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-ember text-white shadow-[0_10px_30px_-6px_rgba(194,54,28,0.55)] hover:bg-ember-bright hover:-translate-y-0.5",
  ghost:
    "bg-transparent border border-steel text-bone hover:border-ember-bright hover:text-ember-bright",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
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
