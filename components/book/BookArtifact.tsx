import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { BookMockup3D } from "@/components/book/BookMockup3D";
import { BOOK, CHAPTERS } from "@/lib/content";

export function BookArtifact() {
  return (
    <Section id="book" tone="graphite">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-[auto_1fr]">
          <FadeIn className="flex justify-center">
            <BookMockup3D />
          </FadeIn>

          <FadeIn delay={0.15}>
            <span className="kicker">Книга</span>
            <h2 className="mt-4 font-display text-2xl font-semibold uppercase leading-tight text-bone md:text-3xl">
              {BOOK.title}
            </h2>
            <p className="mt-1 font-display text-sm uppercase tracking-[0.1em] text-mist">
              {BOOK.subtitle}
            </p>

            <p className="mt-5 font-display text-xs uppercase tracking-[0.14em] text-mist">
              {BOOK.pages} страниц · {CHAPTERS.length} глав · {BOOK.poemsCount}{" "}
              стихотворений
            </p>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-ember-bright">
                {BOOK.price}
              </span>
            </div>

            <p className="mt-6 max-w-md text-balance leading-relaxed text-bone/90">
              Цена книги — всего {BOOK.price}. Но её настоящая стоимость
              измеряется иначе: {BOOK.days} днём опыта. Годами
              переосмысления. Тысячами часов внутренней работы. Ошибками.
              Страхом. Болью. И открытиями, которые невозможно получить из
              теории.
            </p>

            <Button href={BOOK.checkoutUrl} size="lg" className="mt-9">
              Получить книгу — {BOOK.price}
            </Button>
            <p className="mt-3 text-xs text-mist">
              {BOOK.formats.map((f) => f.label).join(" · ")} · моментальный
              доступ после оплаты
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
