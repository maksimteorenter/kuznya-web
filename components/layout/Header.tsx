"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/site";
import { LocaleSwitch } from "@/components/layout/LocaleSwitch";
import { LogoMark } from "@/components/ui/LogoMark";
import { T, type Locale } from "@/lib/i18n";

export function Header({ locale }: { locale?: Locale } = {}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // The header lives in the root layout, so it derives the language from the
  // URL rather than being told — one less thing every page has to remember.
  const active: Locale = locale ?? (pathname?.startsWith("/ua") ? "uk" : "ru");
  const t = T[active].nav;

  // /forge runs its own dark palette. The header lives in the root layout, so
  // without this a cream bar sits across the top of a near-black page — the
  // same mismatch the sticky CTA had. It already reads the route for the
  // language, so it can read it for the ground too.
  const dark = pathname === "/forge";

  return (
    <header
      className={
        dark
          ? "fixed inset-x-0 top-0 z-50 border-b border-[rgba(224,192,120,0.24)] bg-[#0A0706]/85 backdrop-blur-md"
          : "fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md"
      }
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className={
            dark
              ? "flex items-center gap-3 text-[#F3EEE5] transition-opacity hover:opacity-75"
              : "flex items-center gap-3 text-ink transition-opacity hover:opacity-75"
          }
        >
          <LogoMark className="h-11 w-10" />
          <span className="flex flex-col leading-none">
            <span
              className={
                dark
                  ? "font-display text-sm font-semibold uppercase tracking-[0.16em] text-[#F3EEE5]"
                  : "font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink"
              }
            >
              Максим Теорентер
            </span>
            <span
              className={
                dark
                  ? "mt-[3px] font-display text-[11px] uppercase tracking-[0.18em] text-[#B8873B]"
                  : "mt-[3px] font-display text-[11px] uppercase tracking-[0.18em] text-blood"
              }
            >
              {t.club}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
        <nav className="flex items-center gap-8">
          {NAV_ITEMS.slice(1).map((item) =>
            item.external ? (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  dark
                    ? "font-display text-[13px] uppercase tracking-[0.14em] text-[#A9A199] transition-colors hover:text-[#F3EEE5]"
                    : "font-display text-[13px] uppercase tracking-[0.14em] text-inkFaint transition-colors hover:text-ink"
                }
              >
                {t.items[item.id] ?? item.label}
              </a>
            ) : (
              <Link
                key={item.id}
                href={item.href}
                className={
                  dark
                    ? "font-display text-[13px] uppercase tracking-[0.14em] text-[#A9A199] transition-colors hover:text-[#F3EEE5]"
                    : "font-display text-[13px] uppercase tracking-[0.14em] text-inkFaint transition-colors hover:text-ink"
                }
              >
                {t.items[item.id] ?? item.label}
                {item.comingSoon && (
                  <span className={dark ? "ml-1 text-[9px] text-[#B8873B]" : "ml-1 text-[9px] text-blood"}>•</span>
                )}
              </Link>
            )
          )}
        </nav>
        <LocaleSwitch locale={active} dark={dark} />
        </div>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 [touch-action:manipulation] md:hidden"
        >
          <span
            className={`h-px w-5 transition-transform ${dark ? "bg-[#F3EEE5]" : "bg-ink"} ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 transition-transform ${dark ? "bg-[#F3EEE5]" : "bg-ink"} ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          className={
            dark
              ? "border-t border-[rgba(224,192,120,0.24)] bg-[#0A0706] px-6 py-6 md:hidden"
              : "border-t border-ink/10 bg-paper px-6 py-6 md:hidden"
          }
        >
          <ul className="flex flex-col gap-5">
            {NAV_ITEMS.slice(1).map((item) => (
              <li key={item.id}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={
                      dark
                        ? "block py-1 font-display text-sm uppercase tracking-[0.14em] text-[#F3EEE5]"
                        : "block py-1 font-display text-sm uppercase tracking-[0.14em] text-ink"
                    }
                  >
                    {t.items[item.id] ?? item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={
                      dark
                        ? "block py-1 font-display text-sm uppercase tracking-[0.14em] text-[#F3EEE5]"
                        : "block py-1 font-display text-sm uppercase tracking-[0.14em] text-ink"
                    }
                  >
                    {t.items[item.id] ?? item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <LocaleSwitch locale={active} dark={dark} />
          </div>
        </nav>
      )}
    </header>
  );
}
