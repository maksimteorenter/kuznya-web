import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = { title: "Книги" };

export default function BooksPage() {
  return (
    <ComingSoon
      kicker="Книги"
      title="Библиотека Кузни"
      description="Здесь появятся все книги проекта. Сейчас в библиотеке — «1341 день в изоляции»."
    />
  );
}
