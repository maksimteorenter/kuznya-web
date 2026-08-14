import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function ForgeBridge() {
  return (
    <Section tone="graphite" bare className="flex min-h-[70vh] items-center">
      <Container className="text-center">
        <FadeIn>
          <p className="text-balance text-lg text-mist">
            Книга — только первый удар молота.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-balance leading-relaxed text-bone/90">
            Из опыта, идей и технологий работы с собой постепенно родился
            более крупный проект.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2
            className="mt-8 font-display font-bold uppercase leading-none text-bone"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            Кузня
          </h2>
          <p className="mt-4 text-balance text-lg italic text-mist">
            Место, где человек не ищет себя. Он создаёт себя.
          </p>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-10">
          <Button href="/forge" variant="ghost">
            Узнать о Кузне
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
