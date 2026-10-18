import type { Metadata } from "next";
import { LinkHub } from "@/components/link/LinkHub";

// Страница-ссылка для шапки профиля в TikTok и Instagram. На сайте на неё
// ничего не ведёт: в меню её нет, в sitemap она не попадает (он собирается из
// NAV_ITEMS), и чрома сайта на ней тоже нет — см. NO_CHROME_PREFIXES.
// Открывается только по прямой ссылке teorentermaksim.com/start.

export const metadata: Metadata = {
  title: "Максим Теорентер — Кузня Силы",
  description:
    "Закрытый мужской клуб «Кузня Силы». Заявка в бесплатный канал: тело, психика, секс.",
  alternates: { canonical: "/start" },
  // Служебная дверь воронки, а не содержание сайта: в поиске ей незачем
  // конкурировать с главной за те же запросы.
  robots: { index: false, follow: true },
};

export default function StartPage() {
  return <LinkHub />;
}
