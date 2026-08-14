import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

const CAPTORS = [
  "Страха.",
  "Прошлого.",
  "Чужих оценок.",
  "Привычек.",
  "Обстоятельств.",
  "Собственных мыслей.",
  "Ощущения, что ничего невозможно изменить.",
];

export function TurningPoint() {
  return (
    <Section bare className="flex min-h-[95vh] flex-col items-center justify-center text-center">
      <Container>
        <RevealText
          as="p"
          className="mx-auto max-w-3xl text-balance font-display font-semibold uppercase leading-[1.15] text-bone"
          style={{ fontSize: "clamp(1.8rem, 5vw, 3.4rem)" }}
        >
          Но тебе не нужно попасть в плен, чтобы однажды обнаружить, что ты
          потерял свободу.
        </RevealText>

        <FadeIn delay={0.3} className="mt-14">
          <p className="font-display text-sm uppercase tracking-[0.16em] text-mist">
            Мы становимся пленниками
          </p>
          <ul className="mx-auto mt-6 max-w-md space-y-2">
            {CAPTORS.map((c) => (
              <li
                key={c}
                className="font-display text-lg uppercase tracking-wide text-bone/90 md:text-xl"
              >
                {c}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.55} className="mt-16 max-w-2xl mx-auto">
          <p className="text-balance text-lg italic leading-relaxed text-bone md:text-xl">
            Именно поэтому эта книга не заканчивается историей освобождения.
            С неё начинается разговор о твоей свободе.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
