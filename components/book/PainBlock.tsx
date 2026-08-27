import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { FadeIn } from "@/components/motion/FadeIn";
import { T, type Locale } from "@/lib/i18n";

export function PainBlock({ locale = "ru" }: { locale?: Locale }) {
  const t = T[locale].pain;

  return (
    <Section id="story" tone="paper">
      <Container className="max-w-3xl text-center">
        <SectionHead center label={t.label}>{t.head}</SectionHead>

        <FadeIn delay={0.1} className="mt-10">
          <p className="mx-auto max-w-prose text-balance leading-relaxed text-inkSoft">
            {t.lede}
          </p>
          <p className="mt-4 mx-auto max-w-prose text-balance font-editorial text-3xl italic leading-snug text-ink md:text-4xl">
            {t.quote}
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12">
          <p className="mx-auto max-w-prose text-balance leading-relaxed text-inkSoft">
            {t.doorLine}
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2">
            {t.chips.map((c) => (
              <li
                key={c}
                className="border border-ink/20 px-3.5 py-2 font-display text-[13px] uppercase tracking-[0.06em] text-ink"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-7 mx-auto max-w-prose text-balance leading-relaxed text-inkSoft">
            {t.after}
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10 border-t border-ink/15 pt-10">
          <p
            className="max-w-3xl text-balance font-display font-bold uppercase leading-[1.12] text-ink"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)" }}
          >
            {t.question[0]} <span className="text-blood">{t.questionRed}</span>{" "}
            {t.question[1]}
          </p>
          <p className="mt-6 mx-auto max-w-prose text-balance leading-relaxed text-inkSoft">
            {t.close}
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
