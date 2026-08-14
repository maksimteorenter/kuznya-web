import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-void py-16">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-bone">
              {SITE.name}
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
              {SITE.tagline}
            </p>
          </div>

          <nav aria-label="Карта сайта">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display text-xs uppercase tracking-[0.1em] text-mist transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-mist md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Максим Теорентер. Все права защищены.</span>
          <span>Книга основана на реальных событиях. Содержит описание насилия. 18+</span>
        </div>
      </div>
    </footer>
  );
}
