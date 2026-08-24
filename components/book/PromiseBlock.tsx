import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";
import { T, type Locale } from "@/lib/i18n";

export function PromiseBlock({ locale = "ru" }: { locale?: Locale }) {
  const t = T[locale].promise;
  const PILLARS = t.pillars;
  return (
    <Section tone="paper">
      <Container>
        <SectionHead label={t.label}>
          {t.headBefore} <span className="text-blood">{t.headRed}</span>?
        </SectionHead>

        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-prose text-balance leading-relaxed text-inkSoft">{t.lede}
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <div className="group border-t-2 border-ink pt-5 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-blood motion-reduce:transform-none">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[13px] tabular-nums text-blood">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase tracking-[0.04em] text-ink">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-inkSoft">{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-16 max-w-2xl border-t border-ink/15 pt-10">
          <p className="text-balance leading-relaxed text-ink">{t.close}
          </p>
          <Button href="#price" className="mt-8" dataTrack="cta_to_price">
            {T[locale].hero.buy} — {BOOK.price}
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
