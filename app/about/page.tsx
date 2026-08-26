import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
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
      {/* HERO */}
      <Section bare tone="deep" className="flex min-h-[100svh] items-center justify-center py-24 pt-32">
        <Container className="flex justify-center">
          <FadeIn>
            <ScrollParallax strength={18} className="w-full max-w-[560px]">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_60px_120px_-30px_rgba(0,0,0,0.7)]">
                <Image
                  src="/images/about-hero.jpg"
                  alt={BOOK.author}
                  width={1024}
                  height={1536}
                  sizes="(max-width: 640px) 92vw, 560px"
                  className="h-auto w-full"
                  priority
                />
              </div>
            </ScrollParallax>
          </FadeIn>
        </Container>
      </Section>

      {/* Intro */}
      <Section>
        <Container className="max-w-3xl">
          <FadeIn>
            <span className="kicker">{ABOUT_INTRO.kicker}</span>
            <p className="mt-4 max-w-2xl text-balance font-editorial text-2xl italic leading-snug text-ink md:text-3xl">
              {ABOUT_INTRO.lede}
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-6">
            <p className="leading-relaxed text-ink/90">{ABOUT_INTRO.role}</p>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-6 space-y-4">
            {ABOUT_INTRO.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8 border-l-2 border-blood pl-5">
            {ABOUT_INTRO.creedNo.map((line) => (
              <p key={line} className="text-inkSoft">
                {line}
              </p>
            ))}
            <p className="mt-2 font-semibold text-ink">{ABOUT_INTRO.creedYes}</p>
          </FadeIn>
        </Container>
      </Section>

      {/* Story */}
      <Section tone="deep">
        <Container className="max-w-3xl">
          <SectionHead label="История">{ABOUT_STORY.title}</SectionHead>
          <div className="mt-8 space-y-5">
            {ABOUT_STORY.intro.map((p) => (
              <p key={p} className="leading-relaxed text-bone/90">
                {p}
              </p>
            ))}
          </div>
          <FadeIn delay={0.1} className="mt-6 space-y-5">
            <p className="leading-relaxed text-bone/90">{ABOUT_STORY.before}</p>
            <p className="font-editorial text-xl italic leading-snug text-bone">{ABOUT_STORY.turn}</p>
            <p className="leading-relaxed text-bone/90">{ABOUT_STORY.captivity}</p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8 border-l-2 border-blood pl-5">
            <p className="text-balance text-xl italic leading-relaxed text-bone md:text-2xl">
              {ABOUT_STORY.insight}
            </p>
          </FadeIn>
          <FadeIn delay={0.25} className="mt-8 space-y-5">
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
        <Container className="max-w-3xl">
          <SectionHead>{ABOUT_AFTER.title}</SectionHead>
          <div className="mt-8 space-y-4">
            {ABOUT_AFTER.intro.map((p) => (
              <p key={p} className="leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {ABOUT_AFTER.studyAreas.map((item, i) => (
              <FadeIn key={item} delay={i * 0.03}>
                <li className="border-l-2 border-ember pl-4 leading-relaxed text-ink/90">{item}</li>
              </FadeIn>
            ))}
          </ul>
          <FadeIn delay={0.1} className="mt-8 space-y-3">
            <p className="leading-relaxed text-ink/90">{ABOUT_AFTER.credentials}</p>
            <p className="font-semibold text-ink">{ABOUT_AFTER.lesson}</p>
          </FadeIn>
          <div className="mt-6 space-y-4">
            {ABOUT_AFTER.examples.map((p, i) => (
              <FadeIn key={p} delay={i * 0.04}>
                <p className="leading-relaxed text-inkSoft">{p}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2} className="mt-8">
            <p className="text-balance text-xl italic leading-relaxed text-ink md:text-2xl">
              {ABOUT_AFTER.closing}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Second collapse — 2022 */}
      <Section tone="deep">
        <Container className="max-w-3xl">
          <SectionHead label="2022">{ABOUT_SECOND_COLLAPSE.title}</SectionHead>
          <FadeIn className="mt-8 space-y-4">
            <p className="leading-relaxed text-bone/90">{ABOUT_SECOND_COLLAPSE.release}</p>
            <p className="leading-relaxed text-bone/90">{ABOUT_SECOND_COLLAPSE.war}</p>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-6 flex flex-wrap gap-3">
            {ABOUT_SECOND_COLLAPSE.losses.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-bone/80"
              >
                {item}
              </span>
            ))}
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8 border-l-2 border-blood pl-5">
            <p className="text-balance text-xl italic leading-relaxed text-bone md:text-2xl">
              {ABOUT_SECOND_COLLAPSE.insight}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Today */}
      <Section>
        <Container className="max-w-3xl">
          <SectionHead>{ABOUT_TODAY.title}</SectionHead>
          <div className="mt-8 space-y-4">
            {ABOUT_TODAY.intro.map((p) => (
              <p key={p} className="leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {ABOUT_TODAY.helps.map((item, i) => (
              <FadeIn key={item} delay={i * 0.03}>
                <div className="flex gap-4 border-b border-ink/10 pb-6">
                  <span className="mt-1 font-display text-[13px] text-blood">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-balance leading-relaxed text-ink/90">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.15} className="mt-10 space-y-3">
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
        <Container className="max-w-3xl">
          <SectionHead label={ABOUT_APPROACH.title}>{ABOUT_APPROACH.subtitle}</SectionHead>
          <FadeIn className="mt-8 space-y-3">
            <p className="leading-relaxed text-bone/90">{ABOUT_APPROACH.intro}</p>
            <p className="leading-relaxed text-bone/90">{ABOUT_APPROACH.lede}</p>
          </FadeIn>
          <ul className="mt-6 space-y-3">
            {ABOUT_APPROACH.patterns.map((item, i) => (
              <FadeIn key={item} delay={i * 0.04}>
                <li className="border-l-2 border-steel pl-4 leading-relaxed text-bone/80">{item}</li>
              </FadeIn>
            ))}
          </ul>
          <FadeIn delay={0.1} className="mt-8">
            <p className="leading-relaxed text-bone/90">{ABOUT_APPROACH.closing}</p>
          </FadeIn>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {ABOUT_APPROACH.questions.map((item, i) => (
              <FadeIn key={item} delay={i * 0.04}>
                <li className="font-editorial italic leading-relaxed text-bone/90">{item}</li>
              </FadeIn>
            ))}
          </ul>
          <FadeIn delay={0.2} className="mt-8">
            <p className="text-balance text-xl italic leading-relaxed text-bone md:text-2xl">
              {ABOUT_APPROACH.final}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Регалии */}
      <Section>
        <Container className="max-w-3xl">
          <FadeIn>
            <span className="kicker">Регалии</span>
          </FadeIn>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {AUTHOR_FACTS.map((fact, i) => (
              <FadeIn key={fact} delay={i * 0.05}>
                <li className="border-t border-ink/10 py-3.5 text-sm leading-relaxed text-ink/90">{fact}</li>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Mission */}
      <Section tone="deep">
        <Container className="max-w-3xl">
          <SectionHead>{ABOUT_MISSION.title}</SectionHead>
          <FadeIn className="mt-8 space-y-4">
            {ABOUT_MISSION.intro.map((p) => (
              <p key={p} className="leading-relaxed text-bone/90">
                {p}
              </p>
            ))}
          </FadeIn>
          <ul className="mt-6 space-y-3">
            {ABOUT_MISSION.points.map((item, i) => (
              <FadeIn key={item} delay={i * 0.04}>
                <li className="border-l-2 border-blood pl-5 leading-relaxed text-bone/90">{item}</li>
              </FadeIn>
            ))}
          </ul>
          <FadeIn delay={0.2} className="mt-8 space-y-3">
            {ABOUT_MISSION.closing.map((p) => (
              <p key={p} className="text-balance text-xl italic leading-relaxed text-bone md:text-2xl">
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
