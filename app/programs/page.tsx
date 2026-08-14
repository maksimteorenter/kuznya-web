import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = { title: "Программы" };

export default function ProgramsPage() {
  return (
    <ComingSoon
      kicker="Программы"
      title="Программы Кузни"
      description="Структурированные программы работы с собой — в разработке."
    />
  );
}
