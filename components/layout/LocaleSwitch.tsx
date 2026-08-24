import Link from "next/link";
import { ALT_LOCALE, LOCALE_LABEL, bookPath, type Locale } from "@/lib/i18n";

/**
 * Language switch. Points at the same page in the other language rather than
 * dumping the visitor on a home page — the usual failure of bolted-on i18n.
 */
export function LocaleSwitch({ locale }: { locale: Locale }) {
  const other = ALT_LOCALE[locale];
  return (
    <Link
      href={bookPath(other)}
      hrefLang={other}
      aria-label={locale === "ru" ? "Перейти на українську" : "Перейти на русский"}
      className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-current/30 px-3 font-display text-[12px] font-semibold uppercase tracking-[0.1em] text-inkFaint transition-colors hover:border-current/60 hover:text-ink"
    >
      <span className="text-blood">{LOCALE_LABEL[locale]}</span>
      <span aria-hidden="true" className="opacity-40">/</span>
      <span>{LOCALE_LABEL[other]}</span>
    </Link>
  );
}
