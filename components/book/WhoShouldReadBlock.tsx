import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";

const REASONS = [
  "переживаешь период, который кажется бесконечным",
  "начинаешь жизнь заново",
  "потерял привычные опоры",
  "интересуешься пределами человеческой психики",
  "хочешь понять психологию выживания",
  "сталкивался с одиночеством",
  "переживал сильный страх или неопределённость",
  "интересуешься реальными историями людей",
  "хочешь понять, откуда человек берёт силы продолжать",
];

export function WhoShouldReadBlock() {
  return (
    <Section tone="graphite">
      <Container className="max-w-2xl">
        <FadeIn>
          <h2 className="text-balance font-display text-2xl font-bold uppercase leading-tight text-bone md:text-3xl">
            Кому стоит прочитать «{`1341 день в плену`}»
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-mist">
            Эта книга может оказаться особенно близкой тебе, если ты:
          </p>
        </FadeIn>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <FadeIn key={r} delay={i * 0.03}>
              <li className="border-l-2 border-gold/50 pl-4 text-sm leading-relaxed text-bone/90">
                {r}
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={0.3} className="mt-10 border-t border-gold/30 pt-8">
          <p className="text-balance leading-relaxed text-mist">
            Или просто когда-нибудь задавал себе вопрос:
          </p>
          <p className="mt-2 text-balance font-editorial text-2xl italic text-bone md:text-3xl">
            «А я бы выдержал?»
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
