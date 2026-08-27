import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { BackLink } from "@/components/ui/BackLink";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollParallax } from "@/components/motion/ScrollParallax";
import { BooksShowcase } from "@/components/about/BooksShowcase";
import {
  BOOK,
  ABOUT_INTRO,
  ABOUT_STORY,
  ABOUT_AFTER,
  ABOUT_SECOND_COLLAPSE,
  ABOUT_TODAY,
  ABOUT_APPROACH,
  ABOUT_MISSION,
  AUTHOR_FACTS,
  CREDENTIALS,
} from "@/lib/content";

const title = "Обо мне — Максим Теорентер";
const description =
  "Полная история Максима Теорентера: спорт, бизнес, 1341 день в плену, второе обнуление в 2022 году, возрождение, подход к работе с людьми и миссия.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* HERO — split: photo contained to one side, text beside it, never on the face */}
      <Section bare tone="deep" className="flex min-h-[100svh] items-center py-24 pt-32">
        <Container>
          <div className="mb-8">
            <BackLink dark fallbackHref="/" />
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
              <FadeIn delay={0.22} className="mt-8">
                <Button href="/mentorship" size="lg">
                  Узнать про работу со мной
                </Button>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Intro — photo moves here, paired with the words, not alone */}
      <Section>
        <Container className="max-w-2xl text-center">
          <FadeIn>
            <span className="kicker">{ABOUT_INTRO.kicker}</span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <ScrollParallax strength={16} className="mx-auto mt-8 w-full max-w-[360px]">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_40px_90px_-30px_rgba(0,0,0,0.35)]">
                <Image
                  src="/images/about-hero.jpg"
                  alt={BOOK.author}
                  width={1024}
                  height={1536}
                  sizes="(max-width: 640px) 80vw, 360px"
                  className="h-auto w-full"
                />
              </div>
            </ScrollParallax>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-8">
            <p className="mx-auto max-w-xl text-balance font-editorial text-2xl italic leading-snug text-ink md:text-3xl">
              {ABOUT_INTRO.role}
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="mx-auto mt-6 max-w-xl space-y-4">
            {ABOUT_INTRO.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8">
            {ABOUT_INTRO.creedNo.map((line) => (
              <p key={line} className="text-inkSoft">
                {line}
              </p>
            ))}
            <p className="mt-2 font-display text-xl font-bold uppercase text-blood">
              {ABOUT_INTRO.creedYes}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Story */}
      <Section tone="deep">
        <Container className="max-w-2xl text-center">
          <SectionHead center label="История">{ABOUT_STORY.title}</SectionHead>
          <div className="mx-auto mt-8 max-w-xl space-y-5">
            {ABOUT_STORY.intro.map((p) => (
              <p key={p} className="leading-relaxed text-bone/90">
                {p}
              </p>
            ))}
          </div>
          <FadeIn delay={0.1} className="mx-auto mt-6 max-w-xl space-y-5">
            <p className="leading-relaxed text-bone/90">{ABOUT_STORY.before}</p>
            <p className="font-editorial text-xl italic leading-snug text-bone">{ABOUT_STORY.turn}</p>
            <p className="leading-relaxed text-bone/90">{ABOUT_STORY.captivity}</p>
          </FadeIn>
          <FadeIn delay={0.2} className="mx-auto mt-8 max-w-xl">
            <p className="text-balance font-display text-2xl font-bold uppercase leading-snug text-bone md:text-3xl">
              {ABOUT_STORY.insight}
            </p>
          </FadeIn>
          <FadeIn delay={0.25} className="mx-auto mt-8 max-w-xl space-y-5">
            {ABOUT_STORY.reflection.map((p) => (
              <p key={p} className="leading-relaxed text-bone/90">
                {p}
              </p>
            ))}
          </FadeIn>
        </Container>
      </Section>

      {/* After captivity */}
      <Section>
        <Container className="max-w-2xl text-center">
          <SectionHead center>{ABOUT_AFTER.title}</SectionHead>
          <div className="mx-auto mt-8 max-w-xl space-y-4">
            {ABOUT_AFTER.intro.map((p) => (
              <p key={p} className="leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </div>
          <div className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2">
            {ABOUT_AFTER.studyAreas.map((item, i) => (
              <FadeIn key={item} delay={i * 0.03}>
                <span className="inline-block rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink/85">
                  {item}
                </span>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl space-y-3">
            <p className="leading-relaxed text-ink/90">{ABOUT_AFTER.credentials}</p>
            <p className="font-semibold text-ink">{ABOUT_AFTER.lesson}</p>
          </FadeIn>
          <div className="mx-auto mt-6 max-w-xl space-y-4">
            {ABOUT_AFTER.examples.map((p, i) => (
              <FadeIn key={p} delay={i * 0.04}>
                <p className="leading-relaxed text-inkSoft">{p}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2} className="mx-auto mt-8 max-w-xl">
            <p className="text-balance font-display text-2xl font-bold uppercase leading-snug text-ink md:text-3xl">
              {ABOUT_AFTER.closing}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Second collapse — 2022 */}
      <Section tone="deep">
        <Container className="max-w-2xl text-center">
          <SectionHead center label="2022">{ABOUT_SECOND_COLLAPSE.title}</SectionHead>
          <FadeIn className="mx-auto mt-8 max-w-xl space-y-4">
            <p className="leading-relaxed text-bone/90">{ABOUT_SECOND_COLLAPSE.release}</p>
            <p className="leading-relaxed text-bone/90">{ABOUT_SECOND_COLLAPSE.war}</p>
          </FadeIn>
          <FadeIn delay={0.1} className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-3">
            {ABOUT_SECOND_COLLAPSE.losses.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-bone/80"
              >
                {item}
              </span>
            ))}
          </FadeIn>
          <FadeIn delay={0.2} className="mx-auto mt-8 max-w-xl">
            <p className="text-balance font-display text-2xl font-bold uppercase leading-snug text-bone md:text-3xl">
              {ABOUT_SECOND_COLLAPSE.insight}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Today */}
      <Section>
        <Container className="max-w-2xl text-center">
          <SectionHead center>{ABOUT_TODAY.title}</SectionHead>
          <div className="mx-auto mt-8 max-w-xl space-y-4">
            {ABOUT_TODAY.intro.map((p) => (
              <p key={p} className="leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-xl space-y-4">
            {ABOUT_TODAY.helps.map((item, i) => (
              <FadeIn key={item} delay={i * 0.03}>
                <p className="text-balance leading-relaxed text-ink/90">
                  <span className="font-display text-blood">{String(i + 1).padStart(2, "0")}</span>{" "}
                  {item}
                </p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.15} className="mx-auto mt-10 max-w-xl space-y-3">
            {ABOUT_TODAY.closing.map((p) => (
              <p key={p} className="leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </FadeIn>
        </Container>
      </Section>

      {/* Approach */}
      <Section tone="deep">
        <Container className="max-w-2xl text-center">
          <SectionHead center label={ABOUT_APPROACH.title}>{ABOUT_APPROACH.subtitle}</SectionHead>
          <FadeIn className="mx-auto mt-8 max-w-xl space-y-3">
            <p className="leading-relaxed text-bone/90">{ABOUT_APPROACH.intro}</p>
            <p className="leading-relaxed text-bone/90">{ABOUT_APPROACH.lede}</p>
          </FadeIn>
          <div className="mx-auto mt-6 max-w-xl space-y-3">
            {ABOUT_APPROACH.patterns.map((item, i) => (
              <FadeIn key={item} delay={i * 0.04}>
                <p className="leading-relaxed text-bone/80">{item}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className="leading-relaxed text-bone/90">{ABOUT_APPROACH.closing}</p>
          </FadeIn>
          <div className="mx-auto mt-6 max-w-xl space-y-3">
            {ABOUT_APPROACH.questions.map((item, i) => (
              <FadeIn key={item} delay={i * 0.04}>
                <p className="font-editorial italic leading-relaxed text-bone/90">{item}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2} className="mx-auto mt-8 max-w-xl">
            <p className="text-balance font-display text-2xl font-bold uppercase leading-snug text-bone md:text-3xl">
              {ABOUT_APPROACH.final}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Регалии */}
      <Section>
        <Container className="max-w-2xl text-center">
          <FadeIn>
            <span className="kicker">Регалии</span>
          </FadeIn>
          <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2">
            {AUTHOR_FACTS.map((fact, i) => (
              <FadeIn key={fact} delay={i * 0.05}>
                <span className="inline-block rounded-full border border-ink/15 px-4 py-1.5 text-sm leading-relaxed text-ink/85">
                  {fact}
                </span>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Certificates — the credentials, scanned */}
      <Section tone="deep">
        <Container className="text-center">
          <SectionHead center label="Документы">Дипломы и сертификаты</SectionHead>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CREDENTIALS.map((c, i) => (
              <FadeIn key={c.src} delay={i * 0.06}>
                <figure className="h-full">
                  {/* One frame for scans of mixed orientation — object-contain
                      letterboxes the portrait ones rather than cropping them. */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white">
                    <Image
                      src={c.src}
                      alt={`${c.title} — ${c.issuer}`}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <p className="font-display text-sm font-semibold uppercase tracking-[0.06em] text-bone">
                      {c.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-snug text-mist">
                      {c.issuer} · {c.year}
                    </p>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section>
        <Container className="max-w-2xl text-center">
          <SectionHead center>{ABOUT_MISSION.title}</SectionHead>
          <FadeIn className="mx-auto mt-8 max-w-xl space-y-4">
            {ABOUT_MISSION.intro.map((p) => (
              <p key={p} className="leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </FadeIn>
          <div className="mx-auto mt-6 max-w-xl space-y-3">
            {ABOUT_MISSION.points.map((item, i) => (
              <FadeIn key={item} delay={i * 0.04}>
                <p className="leading-relaxed text-ink/90">{item}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2} className="mx-auto mt-8 max-w-xl space-y-3">
            {ABOUT_MISSION.closing.map((p) => (
              <p key={p} className="text-balance font-display text-2xl font-bold uppercase leading-snug text-ink md:text-3xl">
                {p}
              </p>
            ))}
          </FadeIn>
        </Container>
      </Section>

      <BooksShowcase />

      {/* CTA to the mentorship offer */}
      <Section>
        <Container className="max-w-2xl text-center">
          <FadeIn>
            <h2 className="text-balance font-display text-3xl font-bold uppercase leading-tight text-ink md:text-5xl">
              Хотите работать со мной лично?
            </h2>
            <p className="mx-auto mt-5 max-w-lg leading-relaxed text-inkSoft">
              Личная стратегическая сессия — час, за который вы увидите свою ситуацию без иллюзий.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-8">
            <Button href="/mentorship" size="lg">
              Узнать про работу со мной
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
