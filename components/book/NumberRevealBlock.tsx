import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { PhotoMaskNumber } from "@/components/motion/PhotoMaskNumber";
import { BOOK } from "@/lib/content";
import { T, type Locale } from "@/lib/i18n";



export function NumberRevealBlock({ locale = "ru" }: { locale?: Locale }) {
  const t = T[locale].number;
  const nf = locale === "uk" ? "uk-UA" : "ru-RU";
  const HOURS = (BOOK.days * 24).toLocaleString(nf);
  const MINUTES = (BOOK.days * 24 * 60).toLocaleString(nf);
  return (
    <Section tone="deep" bare className="flex min-h-[92vh] flex-col items-center justify-center py-24 text-center">
      <Container>
        <FadeIn>
          <p className="kicker">{t.label}</p>
        </FadeIn>

        <div className="relative mt-8 flex justify-center">
          {/* Slow red breathing behind the numeral — the one place the deep
              section is allowed to glow. Pure opacity keyframes on a gradient. */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[130%] w-[85%] max-w-[900px] -translate-x-1/2 -translate-y-1/2 motion-safe:animate-[glowPulse_7s_ease-in-out_infinite]"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(193,18,31,0.28), transparent 70%)",
            }}
          />
          <PhotoMaskNumber
            value={String(BOOK.days)}
            photoSrc="/images/hero-portrait.jpg"
            photoPosition="center 25%"
            className="relative font-display font-bold leading-none text-bone"
            style={{ fontSize: "clamp(5rem, 17vw, 13rem)", letterSpacing: "-0.03em" }}
          />
        </div>

        <FadeIn delay={0.25} className="mt-8">
          <div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-3">
            <p className="font-display text-lg font-semibold tabular-nums text-bone md:text-xl">
              {HOURS} <span className="text-mist">{t.hours}</span>
            </p>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
            <p className="font-display text-lg font-semibold tabular-nums text-bone md:text-xl">
              {MINUTES} <span className="text-mist">{t.minutes}</span>
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mx-auto mt-12 max-w-lg">
          <p className="text-balance leading-relaxed text-mist">
{t.lede}
          </p>
          <p
            className="mt-7 text-balance font-display font-bold uppercase leading-tight text-bone"
            style={{ fontSize: "clamp(1.3rem, 2.6vw, 1.9rem)" }}
          >
            {t.question}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} className="mx-auto mt-14 max-w-xl border-t border-white/15 pt-10">
          <p className="text-balance font-editorial text-2xl italic leading-snug text-bone md:text-3xl">
{t.editorial}
          </p>
        </FadeIn>

        <FadeIn delay={0.6} className="mx-auto mt-12 max-w-xl">
          <p className="font-display text-base uppercase tracking-[0.08em] text-mist md:text-lg">
            {t.realQuestion}
          </p>
          <p
            className="mt-3 text-balance font-display font-bold uppercase leading-tight text-blood"
            style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)" }}
          >
            {t.realQuestionRed}
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
