import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";

export function BigNumberBlock() {
  return (
    <Section tone="graphite" bare className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <Container>
        <FadeIn>
          <span
            className="font-display font-bold leading-none text-bone"
            style={{ fontSize: "clamp(6rem, 22vw, 16rem)" }}
          >
            {BOOK.days}
          </span>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-4 font-display text-lg uppercase tracking-[0.1em] text-mist md:text-xl">
            день между потерей свободы и возвращением домой
          </p>
        </FadeIn>
        <FadeIn delay={0.35}>
          <p className="mt-8 font-display text-sm uppercase tracking-[0.16em] text-ember-bright">
            {BOOK.arrestDate} — {BOOK.releaseDate}
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
