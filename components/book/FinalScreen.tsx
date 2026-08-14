import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";

export function FinalScreen() {
  return (
    <Section bare className="flex min-h-[100svh] flex-col items-center justify-center text-center">
      <Container>
        <RevealText
          as="p"
          className="text-balance font-display text-2xl uppercase tracking-wide text-mist md:text-3xl"
        >
          {BOOK.days} день нельзя вернуть.
        </RevealText>
        <RevealText
          as="p"
          delay={0.5}
          className="mt-2 text-balance font-display text-2xl uppercase tracking-wide text-bone md:text-3xl"
        >
          Но можно сделать так, чтобы они не прошли зря.
        </RevealText>

        <FadeIn delay={1} className="mt-14">
          <h2 className="font-display text-2xl font-semibold uppercase text-bone md:text-3xl">
            {BOOK.title}
          </h2>
          <p className="mt-1 font-display text-sm uppercase tracking-[0.12em] text-mist">
            {BOOK.subtitle}
          </p>

          <div className="mt-8 font-display text-3xl font-bold text-ember-bright">
            {BOOK.price}
          </div>

          <Button href={BOOK.checkoutUrl} size="lg" className="mt-8">
            Получить книгу
          </Button>

          <p className="mt-4 text-xs uppercase tracking-[0.1em] text-mist">
            {BOOK.formats.map((f) => f.label).join(" · ")} · моментальный
            доступ после оплаты
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
