import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = { title: "Статьи" };

export default function ArticlesPage() {
  return (
    <ComingSoon
      kicker="Статьи"
      title="Журнал Кузни"
      description="Тексты о внутренней устойчивости, кризисах и восстановлении. Скоро."
    />
  );
}
