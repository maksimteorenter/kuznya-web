import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

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
    <Section bare className="flex min-h-[80vh] items-center pt-16">
      <Container>
        <span className="kicker">{kicker}</span>
        <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold uppercase leading-tight text-bone md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-prose text-mist">{description}</p>
        <Button href="/book/1341" className="mt-10" variant="ghost">
          Пока — читайте о книге «1341 день в изоляции»
        </Button>
      </Container>
    </Section>
  );
}
