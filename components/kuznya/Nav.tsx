"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const LINKS = [
  { label: "Главная", href: "/kuznya-preview" },
  { label: "Кузня", href: "/kuznya-preview#facts" },
  { label: "Книга", href: "/book/1341" },
  { label: "Обо мне", href: "/about" },
  { label: "Материалы", href: "#" },
];

export function KuznyaNav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 80);
  });

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(8,8,8,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1360px] items-center justify-between px-6 md:px-10">
        <a href="/kuznya-preview" className="font-display text-sm font-bold uppercase tracking-[0.14em] text-[#f2efe8]">
          Максим Теорентер
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.06em] text-[#a6a39c] transition-colors hover:text-[#f2efe8]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#plan"
          className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.06em] text-[#f2efe8]"
        >
          Записаться →
        </a>
      </nav>
    </header>
  );
}
