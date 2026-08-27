import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { BOOK } from "@/lib/content";

export function ComingSoon({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    // tone="deep" is load-bearing: the copy below is bone/mist, which was
    // invisible against the default paper ground.
    <Section bare tone="deep" className="flex min-h-[80vh] items-center pt-16">
      <Container className="text-center">
        <span className="kicker">{kicker}</span>
        <h1 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-semibold uppercase leading-tight text-bone md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-prose text-mist">{description}</p>
        <Button href="/book/1341" className="mt-10" variant="ghost">
          Пока — читайте о книге «{BOOK.title}»
        </Button>
      </Container>
    </Section>
  );
}
