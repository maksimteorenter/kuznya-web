import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";
import { BOOK } from "@/lib/content";

const STEPS = [
  { day: "День 1", text: "Ты ещё думаешь категориями вчерашней жизни." },
  { day: "День 30", text: "Начинаешь понимать, что это не эпизод." },
  { day: "День 100", text: "Время начинает ощущаться иначе." },
  { day: "День 365", text: "Прошёл год. Но история не закончилась." },
  { day: "День 700", text: "Ты уже не тот человек, который вошёл сюда." },
  { day: "День 1000", text: "Само число кажется невозможным." },
  { day: `День ${BOOK.days}`, text: "Дверь однажды открывается.", final: true },
];

export function DayTimeline() {
  return (
    <Section>
      <Container className="max-w-xl">
        <FadeIn>
          <span className="kicker">{BOOK.days} день — это не одна история</span>
        </FadeIn>

        <div className="mt-14 space-y-10 border-l-2 border-steel pl-8">
          {STEPS.map((s, i) => (
            <FadeIn key={s.day} delay={i * 0.06}>
              <div className="relative">
                <span
                  className={`absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ${
                    s.final ? "bg-ember-bright" : "bg-gold"
                  }`}
                  aria-hidden="true"
                />
                <p
                  className={`font-display text-sm uppercase tracking-[0.14em] ${
                    s.final ? "text-ember-bright" : "text-gold"
                  }`}
                >
                  {s.day}
                </p>
                <p className="mt-1 text-balance text-lg leading-snug text-bone/90">
                  {s.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-14 border-t border-steel pt-8">
          <p className="text-balance leading-relaxed text-bone/90">
            Но главный вопрос:
          </p>
          <RevealText
            as="p"
            delay={0.1}
            className="mt-3 text-balance font-display text-xl font-bold uppercase leading-snug text-bone md:text-2xl"
          >
            Какой человек выходит из неё?
          </RevealText>
          <p className="mt-4 text-balance leading-relaxed text-mist">
            Ответ находится в книге.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
