"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-void/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-bone"
        >
          Кузня
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-xs uppercase tracking-[0.14em] text-mist transition-colors hover:text-bone"
            >
              {item.label}
              {item.comingSoon && (
                <span className="ml-1 text-[9px] text-ember-bright/80">•</span>
              )}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-bone transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-bone transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-void px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {NAV_ITEMS.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-sm uppercase tracking-[0.14em] text-bone"
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
