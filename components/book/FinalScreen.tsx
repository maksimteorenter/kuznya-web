import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";
import { T, type Locale } from "@/lib/i18n";

export function FinalScreen({ locale = "ru" }: { locale?: Locale }) {
  const t = T[locale];
  return (
    <Section
      bare
      tone="deep"
      className="flex min-h-[100svh] flex-col items-center justify-center py-24 text-center"
    >
      {/* The portrait returns, almost gone — the story closing where it opened */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-portrait.jpg"
          alt=""
          fill
          sizes="100vw"
          className="photo-bw-hard object-cover object-[58%_18%] opacity-[0.16]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(11,11,12,0.55), #0B0B0C 78%)",
          }}
        />
        {/* A slow red ember under the closing CTA — the forge, not an alarm. */}
        <div
          className="absolute inset-x-0 bottom-0 h-[45%] motion-safe:animate-[glowPulse_8s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 50% 100%, rgba(193,18,31,0.22), transparent 70%)",
          }}
        />
      </div>

      <Container className="relative max-w-2xl">
        <FadeIn>
          <p className="text-balance leading-relaxed text-mist">{t.final.intro}
          </p>
          <p className="mt-4 text-balance leading-relaxed text-mist">
            {t.final.intro2}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="mt-12 text-balance font-display font-bold uppercase leading-[1.1] text-bone"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.9rem)" }}
          >
            {t.final.questionBefore}{" "}
            <span className="text-blood">{t.final.questionRed}</span>?
          </p>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-8">
          <p className="mx-auto max-w-md text-balance leading-relaxed text-bone/90">{t.final.after}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} className="mt-14 border-t border-white/15 pt-12">
          <h2 className="font-display text-2xl font-bold uppercase leading-tight text-bone md:text-3xl">
            {t.bookTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-balance font-editorial text-lg italic leading-snug text-mist">
            {t.bookSubtitle}
          </p>

          <Button href={BOOK.checkoutUrl} size="lg" className="mt-10" dataTrack="checkout_click">
            {t.hero.buy} — {BOOK.price}
          </Button>

          <p className="mt-4 font-display text-[13px] uppercase tracking-[0.16em] text-mist">
            {t.final.formats}
          </p>

          <div className="mx-auto mt-10 max-w-sm rounded-lg border border-white/10 bg-white/[0.03] px-6 py-5">
            <p className="text-[14px] leading-relaxed text-bone/80">{t.final.clubNote}</p>
            <a
              href={KUZNYA_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-display text-[13px] uppercase tracking-[0.14em] text-blood transition-colors hover:text-bone"
            >
              {t.final.clubCta} →
            </a>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
