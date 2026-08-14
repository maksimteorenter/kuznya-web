import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { RevealText } from "@/components/motion/RevealText";

export function QuoteScreen({ quote }: { quote: string }) {
  return (
    <Section bare tone="graphite" className="flex min-h-[60vh] items-center">
      <Container>
        <RevealText
          as="p"
          className="mx-auto max-w-3xl text-balance text-center font-body text-2xl italic leading-relaxed text-bone md:text-4xl"
        >
          «{quote}»
        </RevealText>
      </Container>
    </Section>
  );
}
