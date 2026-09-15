import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = { title: "Клуб" };

export default function CommunityPage() {
  return (
    <ComingSoon
      kicker="Клуб"
      title="Сообщество Кузни"
      description="Пространство для тех, кто проходит свой путь не в одиночку. Скоро."
    />
  );
}
