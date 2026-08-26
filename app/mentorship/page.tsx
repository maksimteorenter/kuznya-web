import type { Metadata } from "next";
import Image from "next/image";
import {
  Barbell,
  Brain,
  Compass,
  BookOpen,
  ChatCircleText,
  Sparkle,
  ArrowRight,
  CheckCircle,
  XCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { BackLink } from "@/components/ui/BackLink";
import { FadeIn } from "@/components/motion/FadeIn";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";
import {
  BOOK,
  ABOUT_INTRO,
  ABOUT_SECOND_COLLAPSE,
  AUTHOR_FACTS,
  STRATEGY_SESSION,
  STRATEGY_FOR,
  STRATEGY_NOT_FOR,
  SESSION_PLAN,
  SESSION_OFFER,
  VALUE_EQUATION,
  MENTORSHIP,
  ABOUT_FINAL_CTA,
} from "@/lib/content";

const title = "Работа со мной — личное наставничество и стратегическая сессия";
const description =
  "Личная стратегическая сессия с Максимом Теорентером: за один час — настоящая проблема, повторяющийся сценарий и точка приложения силы. Платная, не для всех.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/mentorship" },
};

const PLAN_ICONS = [ChatCircleText, Compass, Sparkle];
const CTA_LABEL = ABOUT_FINAL_CTA.ctaLabel;

export default function MentorshipPage() {
  return (
    <>
      {/* HERO — split: photo contained to one side, text beside it, never on the face */}
      <Section bare tone="deep" className="flex min-h-[100svh] items-center py-24 pt-32">
        <Container>
          <div className="mb-8">
            <BackLink dark fallbackHref="/about" label="Обо мне" />
          </div>
          <div className="grid gap-14 md:grid-cols-[1fr_1.15fr] md:items-center md:gap-16">
            <FadeIn>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-2xl shadow-[0_40px_90px_-30px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/hero-portrait-2.png"
                  alt={BOOK.author}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="photo-bw object-cover object-[50%_15%]"
                />
              </div>
            </FadeIn>
            <div>
              <FadeIn>
                <h1 className="text-balance font-display text-4xl font-bold uppercase leading-[0.98] text-bone sm:text-5xl md:text-6xl">
                  Себя нельзя найти.
                  <br />
                  <span className="text-blood">Себя можно только создать.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.12} className="mt-6 max-w-md">
                <p className="text-balance text-lg leading-relaxed text-bone/85">
                  {ABOUT_INTRO.lede}
                </p>
              </FadeIn>
              <FadeIn delay={0.2} className="mt-4">
                <a href="/about" className="inline-flex items-center gap-1 text-sm text-bone/70 underline underline-offset-4 hover:text-bone">
                  Полная история Максима <ArrowRight className="size-3.5" />
                </a>
              </FadeIn>
              <FadeIn delay={0.28} className="mt-6">
                <Button href="#plan" size="lg">
                  {CTA_LABEL}
                </Button>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Qualification */}
      <Section tone="deep">
        <Container className="text-center">
          <SectionHead center>Это не для всех</SectionHead>
          <div className="mx-auto mt-12 grid max-w-3xl gap-14 sm:grid-cols-2">
            <div>
              <FadeIn>
                <span className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-blood">
                  Это для вас, если
                </span>
              </FadeIn>
              <ul className="mt-6 space-y-4">
                {STRATEGY_FOR.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-balance text-left leading-relaxed text-bone/90">
                    <CheckCircle weight="fill" className="mt-1 size-4 shrink-0 text-blood" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <FadeIn>
                <span className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-mist">
                  Это не для вас, если
                </span>
              </FadeIn>
              <ul className="mt-6 space-y-4">
                {STRATEGY_NOT_FOR.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-balance text-left leading-relaxed text-mist">
                    <XCircle weight="bold" className="mt-1 size-4 shrink-0 text-mist" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Offer */}
      <Section>
        <Container className="max-w-2xl text-center">
          <FadeIn>
            <p className="mx-auto max-w-xl text-balance font-display text-2xl font-bold uppercase leading-snug text-ink md:text-3xl">
              {SESSION_OFFER.dreamOutcome}
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="mx-auto mt-8 max-w-xl space-y-4">
            {SESSION_OFFER.persona.map((line) => (
              <p key={line} className="text-balance text-xl leading-snug text-ink">
                {line}
              </p>
            ))}
          </FadeIn>
        </Container>
      </Section>

      {/* Proof — two collapses */}
      <Section tone="deep">
        <Container className="text-center">
          <FadeIn>
            <span className="font-display text-[22vw] font-bold leading-none text-bone sm:text-[160px]">
              1341
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-2 text-sm uppercase tracking-[0.14em] text-mist">день несвободы</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-8 max-w-xl text-balance leading-relaxed text-bone/85">
              {ABOUT_SECOND_COLLAPSE.release} {ABOUT_SECOND_COLLAPSE.war}
            </p>
          </FadeIn>
          <FadeIn delay={0.25} className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-3">
            {ABOUT_SECOND_COLLAPSE.losses.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-bone/80"
              >
                {item}
              </span>
            ))}
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mx-auto mt-10 max-w-xl text-balance font-editorial text-2xl italic leading-snug text-bone md:text-3xl">
              {ABOUT_SECOND_COLLAPSE.insight}
            </p>
          </FadeIn>
          <FadeIn delay={0.35} className="mt-8">
            <a href="/about" className="inline-flex items-center gap-1 text-sm text-mist underline underline-offset-4 hover:text-bone">
              Читать полную историю <ArrowRight className="size-3.5" />
            </a>
          </FadeIn>
        </Container>
      </Section>

      {/* Credibility facts */}
      <Section>
        <Container className="text-center">
          <SectionHead center label="Кто со мной говорит">Проверяемые факты</SectionHead>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            <FadeIn>
              <div className="h-full rounded-2xl border border-ink/10 p-5">
                <Barbell weight="duotone" className="size-7 text-blood" />
                <p className="mt-3 text-sm leading-snug text-inkSoft">{AUTHOR_FACTS[3]}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="h-full rounded-2xl border border-ink/10 p-5">
                <Brain weight="duotone" className="size-7 text-blood" />
                <p className="mt-3 text-sm leading-snug text-inkSoft">{AUTHOR_FACTS[9]}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl border border-ink/10 p-5">
                <Compass weight="duotone" className="size-7 text-blood" />
                <p className="mt-3 text-sm leading-snug text-inkSoft">{AUTHOR_FACTS[8]}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <a href="/book/1341" className="block h-full">
                <div className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 p-5 transition-colors hover:border-blood/40">
                  <BookOpen weight="duotone" className="size-7 text-blood" />
                  <p className="mt-3 inline-flex items-center gap-1 text-sm text-inkSoft">
                    Читать книгу <ArrowRight className="size-3.5" />
                  </p>
                </div>
              </a>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Plan */}
      <Section id="plan" tone="deep">
        <Container className="text-center">
          <SectionHead center>Как начать</SectionHead>
          <FadeIn delay={0.05} className="mx-auto mt-6 max-w-2xl">
            <p className="leading-relaxed text-bone/80">{STRATEGY_SESSION.intro[0]}</p>
          </FadeIn>
          <div className="relative mx-auto mt-14 grid max-w-4xl gap-10 text-center sm:grid-cols-3">
            {SESSION_PLAN.map((step, i) => {
              const Icon = PLAN_ICONS[i];
              return (
                <FadeIn key={step.title} delay={i * 0.08} className="relative">
                  {i < 2 && (
                    <ArrowRight
                      weight="bold"
                      className="pointer-events-none absolute -right-8 top-3 hidden size-5 text-blood/60 sm:block"
                    />
                  )}
                  <div className="flex items-center justify-center gap-3">
                    <Icon weight="duotone" className="size-8 text-blood" />
                    <span className="font-display text-2xl text-blood/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 font-display text-lg font-semibold uppercase leading-snug text-bone">
                    {step.title}
                  </p>
                  <p className="mt-3 leading-relaxed text-bone/80">{step.body}</p>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn delay={0.25} className="mx-auto mt-14 grid max-w-2xl gap-3 sm:grid-cols-2">
            <p className="text-balance leading-relaxed text-bone">{VALUE_EQUATION.timeDelay}</p>
            <p className="text-balance leading-relaxed text-bone">{VALUE_EQUATION.effort}</p>
          </FadeIn>
          <FadeIn delay={0.3} className="mt-10">
            <Button href={KUZNYA_TELEGRAM_URL} external size="lg">
              {CTA_LABEL}
            </Button>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-mist">
              {SESSION_OFFER.paidNote}
            </p>
            <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-mist/70">
              {SESSION_OFFER.medicalDisclaimer}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* What you get */}
      <Section>
        <Container className="text-center">
          <SectionHead center>За один час вы получите</SectionHead>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {STRATEGY_SESSION.gives.map((item, i) => (
              <FadeIn key={item} delay={i * 0.03}>
                <div className="flex items-center justify-center gap-3 border-b border-ink/10 pb-6 text-left">
                  <CheckCircle weight="fill" className="size-5 shrink-0 text-blood" />
                  <p className="text-balance leading-relaxed text-ink/90">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Mentorship — next step */}
      <Section tone="deep">
        <Container className="max-w-2xl text-center">
          <FadeIn>
            <h2 className="text-balance font-display text-3xl font-bold uppercase leading-tight text-bone md:text-5xl">
              {MENTORSHIP.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-bone/80">{MENTORSHIP.intro}</p>
            <p className="mx-auto mt-4 max-w-xl text-balance font-editorial text-xl italic leading-snug text-bone">
              {MENTORSHIP.closing[1]}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container className="max-w-2xl text-center">
          <FadeIn>
            <p className="text-balance font-display text-3xl font-bold uppercase leading-tight text-ink md:text-5xl">
              {ABOUT_FINAL_CTA.title}
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="mx-auto mt-6">
            <p className="leading-relaxed text-inkSoft">{ABOUT_FINAL_CTA.intro}</p>
          </FadeIn>
          <FadeIn delay={0.3} className="mt-10">
            <Button href={KUZNYA_TELEGRAM_URL} external size="lg">
              {CTA_LABEL}
            </Button>
            <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-inkFaint">
              {ABOUT_FINAL_CTA.telegramNote}
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
