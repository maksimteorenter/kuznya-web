import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { BackLink } from "@/components/ui/BackLink";
import { FadeIn } from "@/components/motion/FadeIn";
import { CredentialsGallery } from "@/components/about/CredentialsGallery";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";
import { BOOK, CREDENTIALS, SESSION_OFFER } from "@/lib/content";
import { MENTORSHIP_OFFER as M } from "@/lib/content.mentorship";

export const metadata: Metadata = {
  title: M.meta.title,
  description: M.meta.description,
  alternates: { canonical: "/mentorship" },
};

// Only the practice certificates belong on the offer page; the sports and
// management diplomas stay on /about with the biography.
const PRACTICE_CREDENTIALS = CREDENTIALS.filter((c) => c.src.includes("/c-"));

/**
 * The personal-work offer. One theme end to end (deep), because this page
 * selects rather than sells: the filter comes before any argument, the price
 * is on the first screen, and the way in is an application he reads himself.
 */
export default function MentorshipPage() {
  return (
    <>
      <div data-page-theme="forge" hidden />
      {/* 1 — HERO. Portrait beside the claim; never text over the face. */}
      <Section bare tone="deep" className="flex min-h-[100svh] items-center pb-20 pt-28 md:pt-24">
        <Container>
          <div className="mb-8">
            <BackLink dark fallbackHref="/about" label="Обо мне" />
          </div>
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
            <FadeIn className="md:col-span-5">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-2xl md:max-w-none">
                <Image
                  src="/images/hero-portrait-2.png"
                  alt={BOOK.author}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="photo-bw object-cover object-[50%_15%]"
                />
              </div>
            </FadeIn>
            <div className="md:col-span-7 md:pl-4">
              <FadeIn>
                <h1 className="font-display text-5xl font-bold uppercase leading-[1.02] text-bone sm:text-6xl md:text-[4.4rem]">
                  {M.hero.h1}
                </h1>
                <p className="mt-4 max-w-xl text-balance font-display text-xl font-semibold uppercase leading-snug text-bone/70 md:text-2xl">
                  {M.hero.h1b}
                </p>
              </FadeIn>
              <FadeIn delay={0.12} className="mt-6">
                <p className="font-editorial text-2xl italic leading-snug text-blood md:text-3xl">{M.hero.slogan}</p>
              </FadeIn>
              <FadeIn delay={0.2} className="mt-6 max-w-lg">
                <p className="text-lg leading-relaxed text-bone/85">{M.hero.lede}</p>
              </FadeIn>
              <FadeIn delay={0.28} className="mt-8">
                <Button href="#apply" size="lg" dataTrack="mentorship_hero_cta">
                  {M.hero.ctaLabel}
                </Button>
                <p className="mt-3 text-sm text-mist">{M.hero.micro}</p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2 — FILTER. Before any argument: who this is for and who it is not. */}
      <Section tone="deep" className="border-t border-white/10">
        <Container>
          <SectionHead>{M.filter.h2}</SectionHead>
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-blood">{M.filter.forTitle}</p>
              <ul className="mt-6 space-y-5">
                {M.filter.forItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-bone">
                    <CheckCircle weight="fill" className="mt-1.5 size-5 shrink-0 text-blood" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-mist">{M.filter.notTitle}</p>
              <ul className="mt-6 space-y-4">
                {M.filter.notItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-mist">
                    <XCircle weight="bold" className="mt-1.5 size-5 shrink-0 text-mist/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3 — WHAT. Three results, not a list of verbs. */}
      <Section tone="deep" className="border-t border-white/10">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <FadeIn className="md:sticky md:top-28">
                <SectionHead>{M.what.h2}</SectionHead>
                <p className="mt-6 text-lg leading-relaxed text-bone/80">{M.what.lede}</p>
              </FadeIn>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              {M.what.results.map((r, i) => (
                <FadeIn key={r.title} delay={0.06 * i}>
                  <div className="border-t border-white/10 py-7 first:border-t-0 first:pt-0">
                    <p className="font-display text-2xl font-bold uppercase leading-tight text-bone">{r.title}</p>
                    <p className="mt-3 text-[17px] leading-relaxed text-bone/80 md:text-lg">{r.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4 — TOOLS. Named as instruments, with the papers behind them. */}
      <Section tone="deep" className="border-t border-white/10">
        <Container>
          <div className="max-w-2xl">
            <SectionHead>{M.tools.h2}</SectionHead>
            <p className="mt-6 text-lg leading-relaxed text-bone/80">{M.tools.lede}</p>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {M.tools.items.map((t, i) => (
              <FadeIn key={t.name} delay={0.05 * i}>
                <div className="border-t border-white/15 pt-5">
                  <p className="font-display text-2xl font-bold uppercase text-bone">{t.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{t.cred}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-14">
            <p className="text-sm text-mist">Документы. Нажмите, чтобы рассмотреть.</p>
            <CredentialsGallery items={PRACTICE_CREDENTIALS} />
          </div>
        </Container>
      </Section>

      {/* 5 — THE SESSION. Format on one line, three steps, the outcome. */}
      <Section id="session" tone="deep" className="border-t border-white/10">
        <Container>
          <div className="max-w-3xl">
            <SectionHead>{M.session.h2}</SectionHead>
            <FadeIn delay={0.08}>
              <p className="mt-6 font-display text-3xl font-bold uppercase leading-none text-blood md:text-5xl">{M.session.format}</p>
            </FadeIn>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {M.session.steps.map((s, i) => (
              <FadeIn key={s.title} delay={0.08 * i}>
                <span className="font-display text-5xl font-bold leading-none text-bone/25">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-4 font-display text-xl font-bold uppercase leading-tight text-bone">{s.title}</p>
                <p className="mt-3 text-[17px] leading-relaxed text-bone/80">{s.body}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2} className="mt-14 max-w-2xl border-t border-white/10 pt-10">
            <p className="font-editorial text-2xl italic leading-snug text-bone md:text-3xl">{M.session.line}</p>
            <p className="mt-6 text-lg leading-relaxed text-bone/85">{M.session.outcome}</p>
            <p className="mt-3 text-lg leading-relaxed text-bone/70">{M.session.effort}</p>
          </FadeIn>
          <FadeIn delay={0.26} className="mt-10">
            <Button href="#apply" size="lg" dataTrack="mentorship_session_cta">
              {M.hero.ctaLabel}
            </Button>
          </FadeIn>
        </Container>
      </Section>

      {/* 6 — NEXT + CLIENTS. What comes after, and who is in the room now. */}
      <Section tone="deep" className="border-t border-white/10">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <SectionHead>{M.next.h2}</SectionHead>
              <p className="mt-6 text-lg leading-relaxed text-bone/85">{M.next.body}</p>
              <p className="mt-8 font-editorial text-xl italic leading-snug text-bone md:text-2xl">{M.next.line}</p>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-mist">{M.clients.h2}</p>
              <ul className="mt-5">
                {M.clients.items.map((c) => (
                  <li key={c} className="border-t border-white/15 py-4 font-display text-xl font-semibold uppercase leading-tight text-bone">
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-mist">{M.clients.note}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7 — WHY HIM. The number, once. */}
      <Section tone="deep" className="border-t border-white/10">
        <Container>
          <div className="grid items-end gap-8 md:grid-cols-12">
            <FadeIn className="md:col-span-5">
              <span className="block font-display text-[26vw] font-bold leading-[0.85] text-bone sm:text-[180px]">1341</span>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-mist">день несвободы</p>
            </FadeIn>
            <FadeIn delay={0.1} className="md:col-span-6 md:col-start-7">
              <h2 className="font-display text-2xl font-bold uppercase leading-tight text-bone md:text-3xl">{M.why.h2}</h2>
              <p className="mt-5 text-lg leading-relaxed text-bone/85">{M.why.body}</p>
              <a href="/about" className="mt-6 inline-flex items-center gap-1 text-sm text-mist underline underline-offset-4 hover:text-bone">
                {M.why.link} <ArrowRight className="size-3.5" />
              </a>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* 8 — APPLY. An application he reads, not a booking form. */}
      <Section id="apply" tone="deep" className="border-t border-white/10">
        <Container>
          <div className="max-w-2xl">
            <SectionHead>{M.apply.h2}</SectionHead>
            <ol className="mt-10 space-y-6">
              {M.apply.steps.map((s, i) => (
                <FadeIn key={s.title} delay={0.06 * i}>
                  <li className="flex gap-5">
                    <span className="font-display text-2xl font-bold leading-none text-blood">{i + 1}</span>
                    <div>
                      <p className="font-display text-xl font-bold uppercase leading-tight text-bone">{s.title}</p>
                      <p className="mt-2 text-[17px] leading-relaxed text-bone/80">{s.body}</p>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ol>
            <FadeIn delay={0.2} className="mt-12">
              <Button href={KUZNYA_TELEGRAM_URL} external size="lg" dataTrack="mentorship_apply_cta">
                {M.apply.ctaLabel}
              </Button>
              <p className="mt-4 text-sm text-mist">{M.apply.micro}</p>
            </FadeIn>
            <p className="mt-14 max-w-xl border-t border-white/10 pt-6 text-xs leading-relaxed text-mist/80">{SESSION_OFFER.medicalDisclaimer}</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
