import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { InteractiveBookMockup } from "@/components/book/InteractiveBookMockup";
import { BOOK } from "@/lib/content";

export function BookArtifact() {
  return (
    <Section id="price" tone="graphite" className="relative overflow-hidden">
      {/* Enormous cropped watermark number behind the book — an artifact, not a product card */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display font-bold leading-none text-bone opacity-[0.035]"
        style={{ fontSize: "clamp(16rem, 42vw, 34rem)" }}
      >
        {BOOK.days}
      </span>

      <Container className="relative">
        <div className="grid items-center gap-16 md:grid-cols-[auto_1fr]">
          <FadeIn className="flex justify-center">
            <InteractiveBookMockup />
          </FadeIn>

          <FadeIn delay={0.15}>
            <span className="kicker">Сколько стоит {BOOK.days} день опыта?</span>
            <p className="mt-4 max-w-md text-balance leading-relaxed text-mist">
              Этот вопрос не имеет цены. Но у книги она есть.
            </p>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display text-5xl font-bold text-ember-bright">
                {BOOK.price}
              </span>
            </div>

            <p className="mt-6 max-w-md text-balance leading-relaxed text-bone/90">
              За эти деньги ты получаешь не обещание, что после чтения
              станешь «неуязвимым». Ты получаешь возможность пройти{" "}
              {BOOK.days} дней вместе с человеком, который их
              действительно прожил. Увидеть его решения. Ошибки. Страх.
              Способы адаптации. И сделать собственные выводы.
            </p>
            <p className="mt-4 max-w-md text-balance text-sm italic leading-relaxed text-mist">
              Возможно, некоторые из них однажды окажутся важнее стоимости
              этой книги.
            </p>

            <Button href={BOOK.checkoutUrl} size="lg" className="mt-9">
              Получить книгу — {BOOK.price}
            </Button>
            <p className="mt-3 text-xs text-mist">
              {BOOK.formats.map((f) => f.label).join(" · ")} · моментальный
              доступ после оплаты
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-mist">
              Покупая эту книгу, вы помогаете этой истории идти дальше — и
              становитесь частью её пути.
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
