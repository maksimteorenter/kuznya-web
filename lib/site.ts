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

// Deep link that auto-starts the "1341 книга после оплаты" chain in SendPulse
// (bot 69d5438fd51076b81a0004dd, chain 6a9feaf9a78a38581e039318). That chain
// holds the three language files and the Кузня hand-off; Maksim built it on
// 2026-09-08 and confirmed it live on 2026-09-11.
//
// It replaces "оплата книгу 1341" (6a7c32234138fa97d906f680), the August chain
// this pointed at — the site had gone on using the old one after the new one
// was built. Used on the post-purchase thank-you page and as the WayForPay
// button's Return URL.
export const BOOK_DELIVERY_TELEGRAM_URL =
  process.env.NEXT_PUBLIC_BOOK_DELIVERY_URL ||
  "https://t.me/teorenter_bot?start=6a9feaf9a78a38581e039318";

// Nav kept deliberately short — Maksim wants exactly these four entries, nothing else.
export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Кузня", href: "/" },
  // Points at the sales page, not straight at the bot: /forge is where the
  // offer, the plan and the guarantee live, and the bot is the step *after*
  // that. Sending nav traffic into Telegram skipped the whole page.
  { id: "club", label: "Кузня Силы", href: "/forge" },
  { id: "book", label: "1341 день в плену", href: "/book/1341" },
  { id: "about", label: "Обо мне", href: "/about" },
  { id: "contact", label: "Контакты", href: "/contact" },
];

export const SITE = {
  name: "Кузня",
  domain: "teorentermaksim.com",
  tagline: "Место, где человек не ищет себя. Он создаёт себя.",
};

// Maksim's own channels, supplied by him 2026-09-04. Share-tracking params
// (_r/_t on TikTok, igsi/utm_source on Instagram) stripped — they are tied to
// his personal share session and don't belong in public site markup.
export const SOCIAL_LINKS = [
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@kuznyateorenter" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/maksim_teorenter" },
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@maksim.teorenter" },
];
