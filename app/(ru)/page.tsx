import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { EyeBar } from "@/components/book/EyeBar";
import { ProofGrid } from "@/components/forge/ProofGrid";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";
import { BOOK, KUZNYA_LANDING } from "@/lib/content";
import { HOME as H } from "@/lib/content.home";

export const metadata: Metadata = {
  title: { absolute: H.meta.title },
  description: H.meta.description,
  alternates: { canonical: "/" },
};

/**
 * The home page answers four questions in order: who this is, what people
 * come here with, which programmes exist, and how to pick a first step. The
 * biography and the book come after the programmes, not before them.
 */
export default function HomePage() {
  return (
    <>
      {/* 1 — HERO. Photo-led, same black-and-white language as the book page. */}
      <Section bare tone="deep" className="relative flex min-h-[100svh] items-end">
        <div className="absolute inset-0">
          <Image src="/images/hero-portrait.jpg" alt="" fill sizes="100vw" className="photo-bw object-cover object-[58%_14%]" priority />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(0deg, #0B0B0C 6%, rgba(11,11,12,0.78) 42%, rgba(11,11,12,0.3) 68%, rgba(11,11,12,0.5) 100%)" }}
          />
          <EyeBar objectX={0.58} objectY={0.14} delay={0.6} className="hidden md:block" />
        </div>
        <Container className="relative z-10 pb-20 pt-40">
          <FadeIn>
            <div className="blood-rule" />
            <h1 className="mt-7 max-w-3xl text-balance font-display font-bold uppercase leading-[1.06] text-bone" style={{ fontSize: "clamp(2.1rem, 5vw, 3.8rem)", letterSpacing: "-0.01em" }}>
              {H.hero.h1}
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-bone/85">{H.hero.sub}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-bone/65">{H.hero.intro}</p>
            <div className="mt-8">
              <Button href={H.hero.ctaHref} size="lg" dataTrack="home_hero_choose">
                {H.hero.ctaLabel}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* 2 — PROGRAMMES. The two requests, side by side. */}
      <Section id="programs" tone="paper">
        <Container>
          <SectionHead>{H.programs.h2}</SectionHead>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-inkSoft">{H.programs.lede}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {H.programs.items.map((p, i) => (
              <FadeIn key={p.name} delay={0.08 * i}>
                <div className="flex h-full flex-col rounded-2xl border border-ink/12 bg-white/40 p-7 md:p-8">
                  <p className="font-display text-2xl font-bold uppercase text-ink md:text-3xl">{p.name}</p>
                  <p className="mt-4 font-editorial text-xl italic leading-snug text-ink md:text-2xl">{p.request}</p>
                  <p className="mt-4 flex-1 text-[17px] leading-relaxed text-inkSoft">{p.body}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.facts.map((f) => (
                      <li key={f} className="rounded-full border border-ink/15 px-3.5 py-1.5 text-sm text-inkSoft">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <Button href={p.href} dataTrack={`home_programme_${i}`}>
                      {p.ctaLabel}
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="mt-6 text-sm text-inkFaint">{H.programs.note}</p>
        </Container>
      </Section>

      {/* 3 — APPROACH. Short: what happens and where the limits are. */}
      <Section tone="deep">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <SectionHead>{H.approach.h2}</SectionHead>
            </div>
            <div className="space-y-5 md:col-span-7 md:col-start-6">
              {H.approach.paragraphs.map((t) => (
                <p key={t} className="text-[17px] leading-relaxed text-bone/85 md:text-lg">
                  {t}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4 — AUTHOR. Verified facts only; the story lives on /about. */}
      <Section tone="paper">
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-12 md:gap-12">
            <FadeIn className="mx-auto w-full max-w-[280px] md:col-span-4 md:max-w-none">
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/author-portrait-red.jpg" alt={BOOK.author} width={614} height={768} sizes="(max-width: 768px) 280px, 33vw" className="h-auto w-full" />
              </div>
            </FadeIn>
            <div className="md:col-span-7 md:col-start-6">
              <SectionHead label={H.author.h2}>{BOOK.author}</SectionHead>
              <div className="mt-6 space-y-4">
                {H.author.paragraphs.map((t) => (
                  <p key={t} className="text-[17px] leading-relaxed text-inkSoft md:text-lg">
                    {t}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href={H.author.ctaHref} variant="ghost">
                  {H.author.ctaLabel}
                </Button>
                <a href={H.author.mentorshipHref} className="inline-flex items-center gap-1 text-sm text-inkSoft underline underline-offset-4 hover:text-ink">
                  {H.author.mentorshipLabel} <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5 — PROOF. Real video testimonials, the first six; the rest on /forge. */}
      <Section tone="deep">
        <Container>
          <SectionHead>{H.proof.h2}</SectionHead>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bone/80">{H.proof.lede}</p>
          <ProofGrid ids={KUZNYA_LANDING.proof.videoIds.slice(0, H.proof.limit)} />
          <a href={H.proof.moreHref} className="mt-8 inline-flex items-center gap-1 text-sm text-mist underline underline-offset-4 hover:text-bone">
            {H.proof.moreLabel} <ArrowRight className="size-3.5" />
          </a>
        </Container>
      </Section>

      {/* 6 — BOOK. */}
      <Section tone="paper">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
            <FadeIn className="mx-auto w-full max-w-[260px] md:col-span-4 md:max-w-[320px]">
              <Image src="/images/cover-front-hires.jpg" alt={`Обложка книги «${BOOK.title}»`} width={1200} height={1800} sizes="(max-width: 768px) 260px, 320px" className="h-auto w-full rounded-[3px] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.6)]" />
            </FadeIn>
            <div className="md:col-span-7 md:col-start-6">
              <SectionHead label="Книга">{H.book.h2}</SectionHead>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-inkSoft md:text-lg">{H.book.body}</p>
              <div className="mt-8">
                <Button href={H.book.ctaHref}>{H.book.ctaLabel}</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7 — TRAINING. An honest door: no page yet, a real conversation. */}
      <Section tone="deep">
        <Container>
          <div className="max-w-2xl">
            <SectionHead>{H.training.h2}</SectionHead>
            <p className="mt-6 text-[17px] leading-relaxed text-bone/85 md:text-lg">{H.training.body}</p>
            <div className="mt-8">
              <Button href={KUZNYA_TELEGRAM_URL} external variant="ghost" dataTrack="home_training_click">
                {H.training.ctaLabel}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8 — FAQ. Only what stands between a visitor and a choice. */}
      <Section tone="paper">
        <Container>
          <div className="max-w-3xl">
            <SectionHead>{H.faq.h2}</SectionHead>
            <div className="mt-8 divide-y divide-ink/10 border-t border-ink/10">
              {H.faq.items.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold uppercase leading-tight text-ink [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span aria-hidden="true" className="text-blood transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-inkSoft">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
