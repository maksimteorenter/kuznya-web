import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { PhotoMaskNumber } from "@/components/motion/PhotoMaskNumber";
import { BOOK } from "@/lib/content";

const HOURS = (BOOK.days * 24).toLocaleString("ru-RU");
const MINUTES = (BOOK.days * 24 * 60).toLocaleString("ru-RU");

export function NumberRevealBlock() {
  return (
    <Section tone="deep" bare className="flex min-h-[92vh] flex-col items-center justify-center py-24 text-center">
      <Container>
        <FadeIn>
          <p className="kicker">Попробуй это представить</p>
        </FadeIn>

        <div className="mt-8 flex justify-center">
          <PhotoMaskNumber
            value={String(BOOK.days)}
            photoSrc="/images/hero-portrait.jpg"
            photoPosition="center 25%"
            className="font-display font-bold leading-none text-bone"
            style={{ fontSize: "clamp(5rem, 17vw, 13rem)", letterSpacing: "-0.03em" }}
          />
        </div>

        <FadeIn delay={0.25} className="mt-8">
          <div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-3">
            <p className="font-display text-lg font-semibold tabular-nums text-bone md:text-xl">
              {HOURS} <span className="text-mist">часа</span>
            </p>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
            <p className="font-display text-lg font-semibold tabular-nums text-bone md:text-xl">
              {MINUTES} <span className="text-mist">минут</span>
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mx-auto mt-12 max-w-lg">
          <p className="text-balance leading-relaxed text-mist">
            Без возможности открыть дверь. Без права на «завтра». И без
            ответа на единственный вопрос, который держит человека в тонусе
            или ломает его:
          </p>
          <p
            className="mt-7 text-balance font-display font-bold uppercase leading-tight text-bone"
            style={{ fontSize: "clamp(1.3rem, 2.6vw, 1.9rem)" }}
          >
            «Когда это закончится?»
          </p>
        </FadeIn>

        <FadeIn delay={0.5} className="mx-auto mt-14 max-w-xl border-t border-white/15 pt-10">
          <p className="text-balance font-editorial text-2xl italic leading-snug text-bone md:text-3xl">
            Сначала человек ждёт. Потом считает дни. Потом перестаёт понимать,
            сколько ещё сможет выдержать.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} className="mx-auto mt-12 max-w-xl">
          <p className="font-display text-base uppercase tracking-[0.08em] text-mist md:text-lg">
            Настоящий вопрос был не «когда меня отпустят»
          </p>
          <p
            className="mt-3 text-balance font-display font-bold uppercase leading-tight text-blood"
            style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)" }}
          >
            А «каким я выйду отсюда»
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
