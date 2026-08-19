import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { ImpactReveal } from "@/components/motion/ImpactReveal";
import { PhotoMaskNumber } from "@/components/motion/PhotoMaskNumber";
import { BOOK } from "@/lib/content";

const HOURS = (BOOK.days * 24).toLocaleString("ru-RU");
const MINUTES = (BOOK.days * 24 * 60).toLocaleString("ru-RU");

export function NumberRevealBlock() {
  return (
    <Section id="story" tone="graphite" bare className="flex min-h-[90vh] flex-col items-center justify-center text-center">
      <Container>
        <FadeIn>
          <span className="kicker">Попробуй не прочитать это число</span>
          <p className="mt-2 font-editorial text-lg italic text-mist">
            Попробуй его представить.
          </p>
        </FadeIn>

        <div className="mt-8 flex justify-center">
          <ImpactReveal delay={0.15}>
            <PhotoMaskNumber
              value={String(BOOK.days)}
              photoSrc="/images/author-portrait-formal.jpg"
              photoPosition="center 20%"
              className="font-display font-bold leading-none text-bone"
              style={{ fontSize: "clamp(5rem, 16vw, 12rem)" }}
            />
          </ImpactReveal>
        </div>
        <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-mist/70">
          {BOOK.days} — не абстракция. Это дни одного человека.
        </p>

        <FadeIn delay={0.3} className="mt-6 space-y-1">
          <p className="font-display text-xl font-semibold text-ember-bright md:text-2xl">
            {HOURS} часа
          </p>
          <p className="font-display text-xl font-semibold text-ember-bright md:text-2xl">
            {MINUTES} минут
          </p>
        </FadeIn>

        <FadeIn delay={0.45} className="mx-auto mt-10 max-w-sm">
          <p className="text-balance leading-relaxed text-mist">
            Без привычной свободы. Без возможности просто открыть дверь и
            уйти. Без ответа на один из самых страшных вопросов:
          </p>
        </FadeIn>

        <RevealText
          as="p"
          delay={0.1}
          className="mx-auto mt-6 max-w-md text-balance font-display text-xl font-semibold uppercase text-bone md:text-2xl"
        >
          «Когда это закончится?»
        </RevealText>

        <FadeIn delay={0.2} className="mx-auto mt-14 max-w-lg border-t border-steel pt-10">
          <p className="text-balance font-editorial text-2xl italic leading-snug text-bone md:text-3xl">
            Сначала человек ждёт. Потом считает дни. Потом перестаёт
            понимать, сколько ещё сможет выдержать.
          </p>
        </FadeIn>

        <FadeIn delay={0.35} className="mx-auto mt-10 max-w-lg space-y-2">
          <p className="text-balance font-display text-lg uppercase leading-snug text-mist md:text-xl">
            Не «когда меня отпустят?»
          </p>
          <p className="text-balance font-display text-xl font-bold uppercase leading-snug text-bone md:text-2xl">
            А «как не потерять себя до этого дня?»
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
