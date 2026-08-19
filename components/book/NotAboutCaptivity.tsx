import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";
import { BOOK } from "@/lib/content";

const QUESTIONS = [
  "Что происходит с твоим сознанием, когда исчезает привычный мир?",
  "Как страх меняет мышление?",
  "Почему неопределённость иногда оказывается тяжелее физического испытания?",
  "На что опереться, когда привычных опор больше нет?",
  "Как заставить себя прожить ещё один день?",
];

export function NotAboutCaptivity() {
  return (
    <Section bare className="flex min-h-[90vh] flex-col items-center justify-center text-center">
      <Container className="max-w-2xl">
        <RevealText
          as="h2"
          className="text-balance font-display text-3xl font-bold uppercase leading-tight text-bone md:text-4xl"
        >
          Ты думаешь, это книга о плене?
        </RevealText>

        <FadeIn delay={0.2} className="mt-8">
          <p className="text-balance leading-relaxed text-mist">Не совсем.</p>
          <p className="mt-2 text-balance font-editorial text-2xl italic text-bone md:text-3xl">
            Плен — обстоятельство.
          </p>
          <p className="mt-4 text-balance font-display text-xl font-bold uppercase text-bone md:text-2xl">
            Главная история происходит внутри человека.
          </p>
        </FadeIn>

        <FadeIn delay={0.35} className="mx-auto mt-12 max-w-lg space-y-3">
          {QUESTIONS.map((q) => (
            <p key={q} className="text-balance leading-relaxed text-mist">
              {q}
            </p>
          ))}
          <p className="text-balance leading-relaxed text-mist">
            А потом ещё один?
          </p>
          <p className="text-balance leading-relaxed text-mist">И ещё?</p>
        </FadeIn>

        <FadeIn delay={0.5} className="mt-10">
          <p className="text-balance leading-relaxed text-bone/90">
            И что происходит, если таких дней становится…
          </p>
          <span
            className="mt-2 block font-display font-bold text-ember-bright"
            style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}
          >
            {BOOK.days}?
          </span>
        </FadeIn>
      </Container>
    </Section>
  );
}
