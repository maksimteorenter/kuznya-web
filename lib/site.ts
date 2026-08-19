// Site-wide architecture. As "Кузня" grows into a multi-page ecosystem,
// register new sections here — Header and Footer read from this single source.

export type NavItem = {
  label: string;
  href: string;
  /** Marks routes that exist only as placeholders today. */
  comingSoon?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Кузня", href: "/" },
  { label: "Книги", href: "/books" },
  { label: "Автор", href: "/about" },
  { label: "Программы", href: "/programs", comingSoon: true },
  { label: "Клуб", href: "/community", comingSoon: true },
  { label: "Статьи", href: "/articles", comingSoon: true },
  { label: "Контакты", href: "/contact" },
];

export const SITE = {
  name: "Кузня",
  domain: "teorentermaksim.com",
  tagline: "Место, где человек не ищет себя. Он создаёт себя.",
};
