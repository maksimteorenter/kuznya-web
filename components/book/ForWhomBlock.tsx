import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { FadeIn } from "@/components/motion/FadeIn";
import { T, type Locale } from "@/lib/i18n";

export function ForWhomBlock({ locale = "ru" }: { locale?: Locale }) {
  const t = T[locale].forWhom;
  const AUDIENCES = t.items;
  return (
    <Section id="for-whom" tone="paper">
      <Container className="max-w-5xl">
        <SectionHead label={t.label}>{t.head}</SectionHead>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {AUDIENCES.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.07}>
              <div className="group transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transform-none">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 shrink-0 bg-blood" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold uppercase tracking-[0.02em] text-ink transition-colors duration-300 group-hover:text-blood">
                    {a.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-prose leading-relaxed text-inkSoft">
                  {a.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
