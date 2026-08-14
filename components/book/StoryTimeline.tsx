import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { STORY_FRAGMENTS } from "@/lib/content";

export function StoryTimeline() {
  return (
    <Section id="story">
      <Container>
        <FadeIn>
          <span className="kicker">История</span>
        </FadeIn>

        <div className="mt-14 space-y-10 md:mt-20 md:space-y-14">
          {STORY_FRAGMENTS.map((f, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="flex flex-col gap-2 border-l-2 border-steel pl-6 md:flex-row md:items-baseline md:gap-8">
                {f.date ? (
                  <span className="shrink-0 font-display text-xs uppercase tracking-[0.14em] text-ember-bright md:w-40">
                    {f.date}
                  </span>
                ) : (
                  <span className="shrink-0 md:w-40" aria-hidden="true" />
                )}
                <p
                  className={`text-balance font-display uppercase leading-snug ${
                    i === 0
                      ? "text-2xl font-semibold text-bone md:text-3xl"
                      : "text-lg text-mist md:text-xl"
                  }`}
                >
                  {f.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-16 md:mt-20">
          <p className="max-w-2xl text-balance font-body text-xl italic leading-relaxed text-bone md:text-2xl">
            И постепенно возникает другой вопрос: не «когда это закончится?»,
            а «каким человеком я выйду отсюда?»
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
