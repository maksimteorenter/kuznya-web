import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { RevealText } from "@/components/motion/RevealText";

export function AfterTimelinePhrase() {
  return (
    <Section tone="deep" className="flex items-center">
      <Container>
        <RevealText
          as="p"
          className="mx-auto max-w-3xl text-balance text-center font-body text-2xl italic leading-relaxed text-bone md:text-3xl"
        >
          Когда дни перестают отличаться друг от друга, главным становится
          вопрос: что внутри тебя невозможно отнять?
        </RevealText>
      </Container>
    </Section>
  );
}
