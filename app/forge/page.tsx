import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = { title: "Кузня" };

export default function ForgePage() {
  return (
    <ComingSoon
      kicker="Кузня"
      title="Место, где человек не ищет себя. Он создаёт себя."
      description="Из опыта, идей и технологий работы с собой родился более крупный проект. Программы и инструменты Кузни появятся здесь."
    />
  );
}
