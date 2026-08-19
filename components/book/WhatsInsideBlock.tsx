import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK, CHAPTERS } from "@/lib/content";

export function WhatsInsideBlock() {
  return (
    <Section id="inside" tone="graphite">
      <Container>
        <FadeIn>
          <span className="kicker">Что внутри</span>
          <p className="mt-4 font-display text-sm uppercase tracking-[0.14em] text-mist">
            {BOOK.pages} страниц · {CHAPTERS.length} глав ·{" "}
            {BOOK.poemsCount} стихотворений
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-8 max-w-2xl">
          <p className="text-balance leading-relaxed text-bone/90">
            {CHAPTERS.slice(0, 6).join(" · ")} — и ещё{" "}
            {CHAPTERS.length - 6} глав до самого возвращения домой.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16 max-w-2xl border-t border-steel pt-8">
          <p className="text-balance font-display text-xl font-semibold uppercase leading-snug text-ember-bright md:text-2xl">
            Неуязвимый — не тот, кому никогда не больно. Это тот, кто после
            удара способен снова выбрать, кем ему быть.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
