import Link from "next/link";
import { ALT_LOCALE, LOCALE_LABEL, bookPath, type Locale } from "@/lib/i18n";

/**
 * Language switch. Points at the same page in the other language rather than
 * dumping the visitor on a home page — the usual failure of bolted-on i18n.
 *
 * `dark` is for routes that run their own dark palette (/forge). The site's
 * red reads at 2.4:1 on that ground, so the current locale is marked in brass
 * there instead — same job, a contrast that actually passes.
 */
export function LocaleSwitch({ locale, dark = false }: { locale: Locale; dark?: boolean }) {
  const other = ALT_LOCALE[locale];
  return (
    <Link
      href={bookPath(other)}
      hrefLang={other}
      aria-label={locale === "ru" ? "Перейти на українську" : "Перейти на русский"}
      className={
        dark
          ? "inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-current/30 px-3 font-display text-[12px] font-semibold uppercase tracking-[0.1em] text-[#A9A199] transition-colors hover:border-current/60 hover:text-[#F3EEE5]"
          : "inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-current/30 px-3 font-display text-[12px] font-semibold uppercase tracking-[0.1em] text-inkFaint transition-colors hover:border-current/60 hover:text-ink"
      }
    >
      <span className={dark ? "text-[#E0C078]" : "text-blood"}>{LOCALE_LABEL[locale]}</span>
      <span aria-hidden="true" className="opacity-40">/</span>
      <span>{LOCALE_LABEL[other]}</span>
    </Link>
  );
}
