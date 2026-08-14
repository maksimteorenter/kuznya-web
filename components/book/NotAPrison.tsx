import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { RevealText } from "@/components/motion/RevealText";

export function NotAPrison() {
  return (
    <Section bare className="flex min-h-[85vh] flex-col items-center justify-center text-center">
      <Container>
        <RevealText
          as="p"
          className="font-display font-semibold uppercase leading-[1.05] text-mist"
          style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
        >
          Это не книга о тюрьме.
        </RevealText>
        <RevealText
          as="p"
          delay={0.35}
          className="mt-2 font-display font-semibold uppercase leading-[1.05] text-bone"
          style={{ fontSize: "clamp(2.2rem, 7vw, 5rem)" }}
        >
          Это книга о свободе.
        </RevealText>

        <RevealText
          as="p"
          delay={0.8}
          className="mx-auto mt-10 max-w-2xl text-balance text-lg leading-relaxed text-mist"
        >
          Свободе, которая существует раньше дверей, стен и решёток. О
          способности человека управлять собственным состоянием тогда, когда
          он практически не способен управлять обстоятельствами. О том, что
          остаётся внутри, когда исчезают привычные роли, деньги, статус,
          комфорт и гарантии.
        </RevealText>
      </Container>
    </Section>
  );
}
