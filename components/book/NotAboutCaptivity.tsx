import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";

const QUESTIONS = [
  "Что происходит с сознанием, когда привычный мир исчезает за один день?",
  "Как страх меняет мышление — и когда он начинает помогать?",
  "Почему неопределённость выматывает сильнее, чем физическая боль?",
  "На что опереться, когда все привычные опоры отобрали?",
  "Как заставить себя прожить ещё один день, если он ничем не отличается от предыдущего?",
];

export function NotAboutCaptivity() {
  return (
    <Section tone="paper">
      <Container className="max-w-3xl">
        <SectionHead label="Важное уточнение">
          Ты думаешь, это книга о плене?
        </SectionHead>

        <FadeIn delay={0.1} className="mt-10">
          <p className="max-w-prose leading-relaxed text-inkSoft">Не совсем.</p>
          <p className="mt-4 max-w-prose text-balance font-editorial text-3xl italic leading-snug text-ink md:text-4xl">
            Плен — это только обстоятельство.
          </p>
          <p
            className="mt-6 max-w-prose text-balance font-display font-bold uppercase leading-tight text-ink"
            style={{ fontSize: "clamp(1.3rem, 2.6vw, 1.9rem)" }}
          >
            Всё главное происходит внутри человека
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12">
          <p className="max-w-prose leading-relaxed text-inkSoft">
            Поэтому книга отвечает не на вопрос «как сидят в подвале ДНР».
            Она отвечает на вопросы, которые рано или поздно достают каждого:
          </p>
          <ul className="mt-7 space-y-0">
            {QUESTIONS.map((q, i) => (
              <li
                key={q}
                className="flex gap-5 border-t border-ink/12 py-4 last:border-b"
              >
                <span className="shrink-0 pt-1 font-display text-xs tabular-nums text-blood">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-balance leading-relaxed text-ink">{q}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-12">
          <p className="max-w-prose leading-relaxed text-inkSoft">
            А потом ещё один такой день. И ещё. И что происходит с человеком,
            если их набирается
          </p>
          <p
            className="mt-3 font-display font-bold leading-none text-blood"
            style={{ fontSize: "clamp(3.5rem, 11vw, 7rem)", letterSpacing: "-0.03em" }}
          >
            {BOOK.days}?
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
