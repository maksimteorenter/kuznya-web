import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { InteractiveBookMockup } from "@/components/book/InteractiveBookMockup";
import { BOOK } from "@/lib/content";
import { T, type Locale } from "@/lib/i18n";

export function BookArtifact({ locale = "ru" }: { locale?: Locale }) {
  const t = T[locale].price;
  const INCLUDED = t.included;
  return (
    <Section id="price" tone="paper">
      <Container>
        <div className="grid items-start gap-16 md:grid-cols-[auto_1fr]">
          <FadeIn className="flex justify-center md:justify-start">
            <InteractiveBookMockup locale={locale} />
          </FadeIn>

          <div>
            <SectionHead label={t.label}>{t.head}</SectionHead>

            <FadeIn delay={0.1}>
              <p className="mt-8 max-w-prose leading-relaxed text-inkSoft">{t.lede}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 flex items-end gap-4 border-t-2 border-ink pt-6">
                <span className="font-display text-6xl font-bold leading-none tabular-nums text-blood">
                  {BOOK.price}
                </span>
                <span className="pb-1.5 font-display text-[13px] uppercase tracking-[0.18em] text-inkFaint">
                  {t.oneTime}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ul className="mt-8 space-y-4">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-blood"
                      aria-hidden="true"
                    />
                    <span className="text-[15px] leading-relaxed text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-8 max-w-prose leading-relaxed text-inkSoft">{t.body}
              </p>
              <p className="mt-4 max-w-prose text-balance font-editorial text-lg italic leading-snug text-ink">{t.note}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Button href={BOOK.checkoutUrl} size="lg" className="mt-10" dataTrack="checkout_click">
                {T[locale].hero.buy} — {BOOK.price}
              </Button>
              <p className="mt-3 font-display text-[13px] uppercase tracking-[0.16em] text-inkFaint">
                {t.formats}
              </p>
              {/* Risk reversal sits with the price, where the hesitation is. */}
              <p className="mt-3 flex items-center gap-2 text-[14px] text-inkSoft">
                <span className="h-1.5 w-1.5 shrink-0 bg-blood" aria-hidden="true" />
                {t.guarantee}
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
