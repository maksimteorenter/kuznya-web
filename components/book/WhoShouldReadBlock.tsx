import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { FadeIn } from "@/components/motion/FadeIn";

const REASONS = [
  "переживаешь период, который кажется бесконечным",
  "начинаешь жизнь заново — не по своему выбору",
  "потерял привычные опоры и не понимаешь, на что вставать",
  "хочешь понять психологию выживания изнутри, а не из учебника",
  "сталкивался с одиночеством, из которого не выйти усилием воли",
  "переживал сильный страх или затяжную неопределённость",
  "интересуешься пределами человеческой психики",
  "хочешь понять, откуда человек берёт силы продолжать",
];

export function WhoShouldReadBlock() {
  return (
    <Section tone="deep">
      <Container className="max-w-3xl text-center">
        <SectionHead center label="Кому эта книга">
          Она попадёт в тебя, если ты
        </SectionHead>

        <ul className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <FadeIn key={r} delay={i * 0.04}>
              <li className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-blood" aria-hidden="true" />
                <span className="text-[15px] leading-relaxed text-bone">{r}</span>
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={0.3} className="mt-12 border-t border-white/15 pt-10">
          <p className="leading-relaxed text-mist">
            Или если ты просто когда-нибудь ловил себя на вопросе:
          </p>
          <p className="mt-4 text-balance font-editorial text-3xl italic leading-snug text-bone md:text-4xl">
            «А я бы выдержал?»
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
