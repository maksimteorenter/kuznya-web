import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Моя Кузня — ежедневная практика",
  description: "Определи цель, разберись с препятствиями и сделай следующий шаг. Деньги, отношения, здоровье.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#101114" };

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
