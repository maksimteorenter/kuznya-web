import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";

const CIRCUMSTANCES = [
  "Потеря бизнеса.",
  "Война.",
  "Предательство.",
  "Развод.",
  "Долги.",
  "Одиночество.",
  "Потеря близкого.",
];

export function PainBlock() {
  return (
    <Section tone="graphite">
      <Container className="max-w-3xl">
        <FadeIn>
          <h2 className="text-balance font-display text-3xl font-bold uppercase leading-tight text-bone md:text-4xl">
            У каждого своя камера
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-8">
          <p className="text-balance leading-relaxed text-mist">
            Тебе не обязательно оказаться за закрытой дверью, чтобы однажды
            почувствовать:
          </p>
          <p className="mt-3 text-balance font-editorial text-2xl italic leading-snug text-bone md:text-3xl">
            «Я не знаю, что делать дальше».
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10">
          <p className="text-balance leading-relaxed text-mist">
            Для одного это потеря бизнеса. Для другого — война. Для
            третьего — предательство.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
            {CIRCUMSTANCES.map((c) => (
              <span
                key={c}
                className="rounded-sm border border-steel px-3 py-1.5 font-display text-sm uppercase tracking-wide text-bone/90"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-6 text-balance leading-relaxed text-mist">
            Крах всего, что ещё вчера казалось стабильным.
          </p>
          <p className="mt-2 text-balance leading-relaxed text-mist">
            Обстоятельства разные. Но вопрос практически всегда один:
          </p>
        </FadeIn>

        <RevealText
          as="p"
          delay={0.1}
          className="mt-8 text-balance font-display text-2xl font-bold uppercase leading-tight text-bone md:text-3xl"
        >
          Что делать, когда ты не можешь быстро изменить то, что происходит
          снаружи?
        </RevealText>

        <FadeIn delay={0.2} className="mt-10 border-t border-steel pt-8">
          <p className="text-balance leading-relaxed text-bone/90">
            У меня было <span className="text-ember-bright">1341 день</span>,
            чтобы искать на него ответ.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
