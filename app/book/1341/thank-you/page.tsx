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

// Файлы лежат в public/ под непредсказуемыми именами: страница закрыта от
// индексации, но сам файл по прямой ссылке доступен любому, кто её получит.
// Настоящее решение — выдача по одноразовому токену (маршрут для неё в
// репозитории уже начат); до тех пор это осознанный компромисс.
const BOOK_FILES = [
  { lang: "ru", label: "Русский", size: "2.1 МБ", href: "/books/1341-ru-04f7701c.pdf" },
  { lang: "ua", label: "Українська", size: "1.1 МБ", href: "/books/1341-ua-04f7701c.pdf" },
  { lang: "en", label: "English", size: "1.5 МБ", href: "/books/1341-en-04f7701c.pdf" },
] as const;

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

        {/* Скачивание прямо здесь: человек уже заплатил, и заставлять его
            идти в мессенджер за тем, что он купил, — лишний шаг, на котором
            часть людей теряется. Telegram остаётся как второй путь. */}
        <FadeIn delay={0.3} className="mt-14 border-t border-white/15 pt-12">
          <p className="font-display text-[13px] uppercase tracking-[0.16em] text-mist">
            Забери книгу
          </p>
          <p className="mx-auto mt-3 max-w-md text-balance text-base leading-relaxed text-bone/90">
            Выбери язык — файл скачается сразу.
          </p>

          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            {BOOK_FILES.map((f) => (
              <a
                key={f.lang}
                href={f.href}
                download
                data-track={`thank_you_download_${f.lang}`}
                className="inline-flex min-h-[54px] flex-1 items-center justify-center gap-2 rounded-full bg-bone px-6 font-display text-[15px] font-semibold uppercase tracking-[0.1em] text-deep transition-transform duration-200 [touch-action:manipulation] hover:-translate-y-0.5 motion-reduce:transform-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-bone"
              >
                {f.label}
                <span aria-hidden="true" className="text-[11px] font-normal opacity-60">
                  {f.size}
                </span>
              </a>
            ))}
          </div>

          <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-mist/80">
            PDF, читается на телефоне, планшете и компьютере.
          </p>
        </FadeIn>

        {/* Telegram — второй путь, а не единственный. */}
        <FadeIn delay={0.42} className="mt-12">
          <p className="mx-auto max-w-md text-balance text-base leading-relaxed text-mist">
            Или забери её в Telegram — придёт в чат за несколько секунд.
          </p>
          <Button
            href={BOOK_DELIVERY_TELEGRAM_URL}
            external
            variant="ghost"
            className="mt-5"
            dataTrack="thank_you_telegram_click"
          >
            Забрать книгу в Telegram →
          </Button>
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
