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

// Deep link that auto-starts the "оплата книгу 1341" chain in SendPulse (bot id
// 69d5438fd51076b81a0004dd, chain id 6a7c32234138fa97d906f680) — delivers the book
// PDFs and bridges into Кузня Силы. Set as the WayForPay button's Return URL,
// and used as the primary CTA on the post-purchase thank-you page.
export const BOOK_DELIVERY_TELEGRAM_URL =
  process.env.NEXT_PUBLIC_BOOK_DELIVERY_URL ||
  "https://t.me/teorenter_bot?start=6a7c32234138fa97d906f680";

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
