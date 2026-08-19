"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink"
        >
          Кузня
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-[13px] uppercase tracking-[0.14em] text-inkFaint transition-colors hover:text-ink"
            >
              {item.label}
              {item.comingSoon && (
                <span className="ml-1 text-[9px] text-blood">•</span>
              )}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 [touch-action:manipulation] md:hidden"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-paper px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {NAV_ITEMS.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 font-display text-sm uppercase tracking-[0.14em] text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
