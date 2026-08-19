import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";

const HOURS = BOOK.days * 24;
const MINUTES = HOURS * 60;

const STATS = [
  { value: BOOK.days.toLocaleString("ru-RU"), label: "дней" },
  { value: HOURS.toLocaleString("ru-RU"), label: "часов" },
  { value: MINUTES.toLocaleString("ru-RU"), label: "минут" },
];

export function BigNumberBlock() {
  return (
    <Section tone="deep" bare className="flex min-h-[90vh] flex-col items-center justify-center text-center">
      <Container>
        <FadeIn>
          <span className="kicker">Попробуй представить {BOOK.days} день</span>
        </FadeIn>

        <FadeIn delay={0.15}>
          <span
            className="mt-6 block font-display font-bold leading-none text-bone"
            style={{ fontSize: "clamp(6rem, 20vw, 14rem)" }}
          >
            {BOOK.days}
          </span>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-steel pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-xl font-semibold text-flame md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[13px] uppercase tracking-[0.16em] text-mist">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <p className="mx-auto mt-12 max-w-md text-balance leading-relaxed text-mist">
            Не отпуск. Не путешествие. Не эксперимент.
            <br />
            Каждый следующий день начинается там же, где закончился
            предыдущий. И ты не знаешь, когда это закончится.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="mx-auto mt-8 max-w-lg text-balance font-display text-lg italic leading-snug text-bone md:text-xl">
            «Что происходит с человеком, когда единственное пространство
            свободы, которое у него остаётся, находится внутри него самого?»
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <p className="mt-10 font-display text-sm uppercase tracking-[0.16em] text-mist">
            {BOOK.arrestDate} — {BOOK.releaseDate}
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
