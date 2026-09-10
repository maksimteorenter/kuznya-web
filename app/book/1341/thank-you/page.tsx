import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK_DELIVERY_TELEGRAM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Спасибо за покупку — 1341 день в плену",
  robots: { index: false, follow: false },
  alternates: { canonical: "/book/1341/thank-you" },
};

export default function ThankYouPage() {
  return (
    <Section
      bare
      tone="deep"
      className="flex min-h-[100svh] flex-col items-center justify-center py-24 text-center"
    >
      <Container className="relative max-w-xl">
        <FadeIn>
          <p className="font-display text-[13px] uppercase tracking-[0.16em] text-blood">
            Оплата прошла
          </p>
          <h1
            className="mt-4 text-balance font-display font-bold uppercase leading-[1.1] text-bone"
            style={{ fontSize: "clamp(2rem, 6vw, 3.4rem)" }}
          >
            Спасибо за доверие
          </h1>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-8">
          <p className="text-balance leading-relaxed text-mist">
            Покупая эту книгу, ты приобретаешь не просто историю — ты помогаешь
            развивать проект «Кузня силы», пространство, где создаются новые
            книги, практики и технологии, помогающие людям становиться
            сильнее.
          </p>
        </FadeIn>

        {/* Выдача идёт через бота, а не файлом с сайта. Прямая ссылка отдаёт
            книгу и не оставляет ничего: ни контакта, ни события в CRM, ни
            возможности вести человека дальше. Через бота остаётся всё, и там
            же он выбирает язык. Файлы по-прежнему лежат в public/ — если бот
            подведёт, запасной путь возвращается одной строкой. */}
        <FadeIn delay={0.3} className="mt-14 border-t border-white/15 pt-12">
          <p className="font-display text-[13px] uppercase tracking-[0.16em] text-mist">
            Забери книгу
          </p>
          <p className="mx-auto mt-3 max-w-md text-balance text-base leading-relaxed text-bone/90">
            Открой бота в Telegram — выберешь язык, и книга придёт в чат.
            Русский, українська или English.
          </p>

          <Button
            href={BOOK_DELIVERY_TELEGRAM_URL}
            external
            size="lg"
            className="mt-8"
            dataTrack="thank_you_telegram_click"
          >
            Забрать книгу в Telegram →
          </Button>

          <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-mist/80">
            Не открылось само? Ссылка та же — скопируй и вставь в браузер на телефоне.
          </p>
        </FadeIn>

        {/* Следующий шаг: тот, кто только что купил книгу, — самый тёплый
            человек для Кузни, какой вообще бывает. Раньше эта страница
            заканчивалась ничем. */}
        <FadeIn delay={0.55} className="mt-14 border-t border-white/15 pt-12">
          <p className="font-display text-[13px] uppercase tracking-[0.16em] text-mist">
            Что дальше
          </p>
          <p className="mx-auto mt-3 max-w-md text-balance text-base leading-relaxed text-bone/90">
            Книга — это история. Кузня — то, что из неё выросло: 90 дней
            практики с теми программами, которые выбирают за тебя.
          </p>
          <Button href="/forge" size="lg" className="mt-7" dataTrack="thank_you_forge_click">
            Смотреть Кузню Силы
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
