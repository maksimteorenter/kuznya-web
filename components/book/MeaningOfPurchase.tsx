import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";

export function MeaningOfPurchase() {
  return (
    <Section bare className="flex min-h-[60vh] items-center">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-balance text-xl leading-relaxed text-bone md:text-2xl">
            Покупая эту книгу, вы приобретаете не просто файл или текст. Вы
            помогаете этой истории идти дальше.
          </p>
          <p className="mt-6 text-balance leading-relaxed text-mist">
            Каждый читатель становится частью передачи опыта людям, которым
            однажды тоже может понадобиться внутренняя опора. Это способ
            превратить пережитое одним человеком в знание, способное помочь
            другим.
          </p>
          <p className="mt-8 font-display text-sm uppercase tracking-[0.14em] text-ember-bright">
            Спасибо каждому, кто становится частью этого пути.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
