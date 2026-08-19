import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";

const WORDS = ["Со страхом.", "Ошибками.", "Людьми.", "Событиями.", "Абсурдом.", "Болью.", "Надеждой."];

export function NotAManualBlock() {
  return (
    <Section bare className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <Container className="max-w-2xl">
        <FadeIn>
          <h2 className="text-balance font-display text-3xl font-bold uppercase leading-tight text-bone md:text-4xl">
            Это не учебник по выживанию
          </h2>
          <p className="mt-3 text-balance leading-relaxed text-mist">
            И не сборник красивых цитат о силе духа.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8">
          <p className="text-balance font-editorial text-2xl italic text-bone md:text-3xl">
            Это история.
          </p>
          <div className="mx-auto mt-5 flex max-w-md flex-wrap justify-center gap-x-3 gap-y-1">
            {WORDS.map((w) => (
              <span key={w} className="text-balance leading-relaxed text-mist">
                {w}
              </span>
            ))}
          </div>
          <p className="mt-5 text-balance leading-relaxed text-mist">
            И моментами, когда внутренние решения становились важнее
            внешних обстоятельств.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-10">
          <p className="text-balance leading-relaxed text-bone/90">
            Но одновременно это книга, после которой можно задать себе
            неудобный вопрос:
          </p>
        </FadeIn>

        <RevealText
          as="p"
          delay={0.1}
          className="mt-6 text-balance font-display text-2xl font-bold uppercase leading-tight text-bone md:text-3xl"
        >
          «А что держит меня, когда всё идёт не по плану?»
        </RevealText>
      </Container>
    </Section>
  );
}
