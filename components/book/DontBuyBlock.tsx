import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";

const NOT_FOR = [
  "…если ищешь лёгкую мотивацию на один вечер.",
  "…если тебе нужны только красивые фразы.",
  "…если ты хочешь получить универсальный рецепт жизни из пяти пунктов.",
];

export function DontBuyBlock() {
  return (
    <Section bare className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <Container className="max-w-xl">
        <RevealText
          as="h2"
          className="text-balance font-display text-2xl font-bold uppercase leading-tight text-bone md:text-3xl"
        >
          Не покупай эту книгу…
        </RevealText>

        <FadeIn delay={0.2} className="mx-auto mt-8 max-w-md space-y-2">
          {NOT_FOR.map((line) => (
            <p key={line} className="text-balance leading-relaxed text-mist">
              {line}
            </p>
          ))}
        </FadeIn>

        <FadeIn delay={0.4} className="mt-8">
          <p className="text-balance leading-relaxed text-bone/90">
            Эта история не об этом.
          </p>
        </FadeIn>

        <FadeIn delay={0.55} className="mt-8">
          <p className="text-balance leading-relaxed text-mist">Но если тебе интересно узнать,</p>
          <p className="mt-2 text-balance font-editorial text-xl italic text-bone md:text-2xl">
            что происходит с человеком, когда обстоятельства снимают с него
            слой за слоем всё привычное,
          </p>
          <p className="mt-4 text-balance leading-relaxed text-bone/90">
            тогда <span className="text-ember-bright">открой первую страницу</span>. А дальше решишь сам.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
