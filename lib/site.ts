// Site-wide architecture. As "Кузня" grows into a multi-page ecosystem,
// register new sections here — Header and Footer read from this single source.

export type NavItem = {
  /** Stable key for i18n lookup — independent of href so an external link swap never breaks translations. */
  id: string;
  label: string;
  href: string;
  /** Marks routes that exist only as placeholders today. */
  comingSoon?: boolean;
  /** Opens in a new tab with rel=noopener — for links that leave the site (e.g. the Telegram club bot). */
  external?: boolean;
};

// Real Telegram bot, confirmed 2026-08-25 (visible on the book's own back-cover
// QR spread: "@teorenter_bot"). Still overridable via env for staging.
export const KUZNYA_TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/teorenter_bot";

// Nav kept deliberately short — Maksim wants exactly these four entries, nothing else.
export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Кузня", href: "/" },
  { id: "club", label: "Кузня Силы", href: KUZNYA_TELEGRAM_URL, external: true },
  { id: "book", label: "1341 день в плену", href: "/book/1341" },
  { id: "about", label: "Обо мне", href: "/about" },
  { id: "contact", label: "Контакты", href: "/contact" },
];

export const SITE = {
  name: "Кузня",
  domain: "teorentermaksim.com",
  tagline: "Место, где человек не ищет себя. Он создаёт себя.",
};
