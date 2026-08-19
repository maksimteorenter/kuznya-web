import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";

const STEPS = [
  { day: "1", text: "Ты ещё думаешь категориями вчерашней жизни." },
  { day: "30", text: "Начинаешь понимать, что это не эпизод." },
  { day: "100", text: "Время начинает ощущаться иначе." },
  { day: "365", text: "Прошёл год. История не закончилась." },
  { day: "700", text: "Ты уже не тот человек, который вошёл сюда." },
  { day: "1000", text: "Само число кажется невозможным." },
  { day: String(BOOK.days), text: "Дверь однажды открывается.", final: true },
];

export function DayTimeline() {
  return (
    <Section tone="paper">
      <Container className="max-w-2xl">
        <SectionHead label={`${BOOK.days} день — это не одна история`}>
          Человек меняется не сразу. Он меняется послойно
        </SectionHead>

        <ol className="mt-14 border-l-2 border-ink/15 pl-8">
          {STEPS.map((s, i) => (
            <FadeIn key={s.day} delay={i * 0.06}>
              <li className={`relative ${i === STEPS.length - 1 ? "" : "pb-10"}`}>
                <span
                  className={`absolute -left-[calc(2rem+6px)] top-2 h-3 w-3 rounded-full ring-4 ring-paper ${
                    s.final ? "bg-blood" : "bg-ink/35"
                  }`}
                  aria-hidden="true"
                />
                <p
                  className={`font-display text-xs uppercase tracking-[0.18em] ${
                    s.final ? "text-blood" : "text-inkFaint"
                  }`}
                >
                  День <span className="tabular-nums">{s.day}</span>
                </p>
                <p
                  className={`mt-1.5 text-balance leading-snug ${
                    s.final
                      ? "font-display text-xl font-bold uppercase text-ink md:text-2xl"
                      : "text-lg text-ink"
                  }`}
                >
                  {s.text}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>

        <FadeIn delay={0.4} className="mt-14 border-t border-ink/15 pt-10">
          <p className="leading-relaxed text-inkSoft">
            Дата освобождения — {BOOK.releaseDate}. Но это не конец истории, а
            только момент, когда начинается главный вопрос:
          </p>
          <p
            className="mt-5 text-balance font-display font-bold uppercase leading-tight text-ink"
            style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)" }}
          >
            Каким человеком ты оттуда выйдешь?
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
