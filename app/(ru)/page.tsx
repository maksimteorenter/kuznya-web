import type { Metadata } from "next";
import { KuznyaLanding } from "@/components/forge/KuznyaLanding";

// Главная — это оффер клуба «Кузня силы», а не афиша: кто набрал домен,
// попадает сразу на страницу входа. Текст и вёрстка — макет, утверждённый
// Максимом (см. docs/kuznya-offer-v2.md и комментарий в KuznyaLanding).
// /forge редиректит сюда (next.config.mjs).

export const metadata: Metadata = {
  title: "Кузня силы — закрытый мужской клуб Максима Теорентера",
  description:
    "Помогу мужчине стать неуязвимым и сильным: сексуальное кунг-фу, кодекс мужчины, гипноз и НЛП, работа с телом и психикой. Закрытый клуб, подписка $15 в месяц.",
  alternates: {
    canonical: "/",
    languages: { "ru-UA": "/", "uk-UA": "/ua" },
  },
};

export default function HomePage() {
  return <KuznyaLanding />;
}
