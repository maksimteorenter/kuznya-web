import type { Metadata } from "next";
import { KuznyaLandingUk } from "@/components/forge/KuznyaLandingUk";

// Украинская главная — тот же клуб «Кузня силы», что и на корне.
// Вёрстка общая: оба компонента генерируются из одного макета, украинские
// тексты подставляются из словаря (см. комментарий в KuznyaLandingUk).

export const metadata: Metadata = {
  title: "Кузня сили — закритий чоловічий клуб Максима Теорентера",
  description:
    "Допоможу чоловікові стати невразливим і сильним: сексуальне кунг-фу, кодекс чоловіка, гіпноз і НЛП, робота з тілом і психікою. Закритий клуб, підписка $15 на місяць.",
  alternates: {
    canonical: "/ua",
    languages: { "ru-UA": "/", "uk-UA": "/ua" },
  },
};

export default function HomePageUk() {
  return <KuznyaLandingUk />;
}
