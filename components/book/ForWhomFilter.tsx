import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { FOR_WHOM, NOT_FOR_WHOM } from "@/lib/content";

export function ForWhomFilter() {
  return (
    <Section>
      <Container>
        <div className="grid gap-16 md:grid-cols-2 md:gap-10">
          <div>
            <FadeIn>
              <span className="kicker">Эта книга — для тех, кто</span>
            </FadeIn>
            <ul className="mt-8 space-y-4">
              {FOR_WHOM.map((item, i) => (
                <FadeIn key={item} delay={i * 0.04}>
                  <li className="border-l-2 border-ember pl-5 text-balance leading-relaxed text-bone/90">
                    {item}
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          <div>
            <FadeIn>
              <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-mist">
                Может не подойти, если вы ищете
              </span>
            </FadeIn>
            <ul className="mt-8 space-y-4">
              {NOT_FOR_WHOM.map((item, i) => (
                <FadeIn key={item} delay={i * 0.04}>
                  <li className="border-l-2 border-steel pl-5 text-balance leading-relaxed text-mist">
                    {item}
                  </li>
                </FadeIn>
              ))}
            </ul>
            <FadeIn delay={0.3}>
              <p className="mt-8 font-display text-sm uppercase tracking-[0.14em] text-bone">
                Здесь другой разговор.
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
