import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";

export function FinalScreen() {
  return (
    <Section bare className="flex min-h-[100svh] flex-col items-center justify-center text-center">
      <Container className="max-w-xl">
        <FadeIn>
          <p className="text-balance leading-relaxed text-mist">
            Представь: у тебя забрали привычную жизнь. Ты не знаешь, когда
            вернёшься. Не знаешь, сколько это продлится. Не можешь изменить
            большую часть происходящего.
          </p>
          <p className="mt-4 text-balance leading-relaxed text-mist">
            Проходит день. Неделя. Месяц. Год. Ещё год. Ещё…
          </p>
        </FadeIn>

        <RevealText
          as="p"
          delay={0.2}
          className="mt-10 text-balance font-display text-2xl font-bold uppercase leading-tight text-bone md:text-3xl"
        >
          Что ты будешь делать, чтобы не потерять себя?
        </RevealText>

        <FadeIn delay={0.4} className="mt-8">
          <p className="text-balance leading-relaxed text-bone/90">
            Мне понадобился{" "}
            <span className="text-ember-bright">{BOOK.days} день</span>,
            чтобы сформировать свой ответ. Тебе не обязательно проходить
            этот путь самому.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} className="mt-14 border-t border-gold/30 pt-10">
          <h2 className="font-display text-2xl font-bold uppercase text-bone md:text-3xl">
            {BOOK.title}
          </h2>
          <p className="mt-2 max-w-md mx-auto text-balance font-editorial text-lg italic text-mist">
            Реальная история о свободе, страхе, выборе и человеке, у
            которого оставался последний рубеж — он сам.
          </p>

          <div className="mt-8 font-display text-3xl font-bold text-ember-bright">
            {BOOK.price}
          </div>

          <Button href={BOOK.checkoutUrl} size="lg" className="mt-8">
            Получить книгу — {BOOK.price}
          </Button>

          <p className="mt-4 text-xs uppercase tracking-[0.1em] text-mist">
            Основано на реальных событиях
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
