import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { EyeBar } from "@/components/book/EyeBar";
import { BOOK, KUZNYA_LANDING } from "@/lib/content";

export const metadata: Metadata = {
  title: "Кузня — место, где человек создаёт себя",
  description:
    "Кузня — экосистема книг, программ и сообщества для тех, кто строит внутреннюю опору в предельных обстоятельствах.",
};

export default function HomePage() {
  return (
    <>
      {/* Photo-led author header, same black-and-white language as the book page */}
      <Section bare tone="deep" className="relative flex min-h-[100svh] items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-portrait.jpg"
            alt=""
            fill
            sizes="100vw"
            className="photo-bw object-cover object-[58%_14%]"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, #0B0B0C 6%, rgba(11,11,12,0.72) 40%, rgba(11,11,12,0.25) 68%, rgba(11,11,12,0.5) 100%)",
            }}
          />
          {/* Same censor bar as the book page — anchored to the photo, so it
              stays on the eyes at any viewport size. */}
          <EyeBar objectX={0.58} objectY={0.14} delay={0.6} className="hidden md:block" />
        </div>

        <Container className="relative z-10 pb-20 pt-40">
          <FadeIn>
            <div className="blood-rule" />
            {/* Book must read within the first 3 seconds — a badge above the
                fold, before the reader has to scroll to find it. */}
            <a
              href="/book/1341"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-blood/50 bg-blood/10 px-4 py-2 backdrop-blur-sm transition-colors hover:bg-blood/20"
            >
              <span className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-blood">
                Книга
              </span>
              <span className="h-3 w-px bg-blood/40" aria-hidden="true" />
              <span className="text-[13px] text-bone">«{BOOK.title}»</span>
            </a>
            <h1
              className="mt-7 max-w-3xl text-balance font-display font-bold uppercase leading-[1.06] text-bone"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)", letterSpacing: "-0.01em" }}
            >
              Человек не ищет себя здесь.
              <br />
              <span className="text-blood">Он создаёт себя.</span>
            </h1>
            <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-bone/85">
              {BOOK.days} день плена — не вся его жизнь. Но именно там многие
              идеи были проверены на предельной нагрузке.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Short bio */}
      <Section tone="paper">
        <Container className="max-w-3xl text-center">
          <SectionHead center label="Автор">{BOOK.author}</SectionHead>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-8 max-w-prose text-balance text-lg leading-relaxed text-inkSoft">
              Мастер спорта, боец, гипнотерапевт — и человек, переживший{" "}
              {BOOK.days} день плена. Сегодня он собирает то, что вынес
              оттуда, в систему: книги, методики и работу с подсознанием для
              тех, кто хочет управлять собой, а не обстоятельствами.
            </p>
            <Button href="/about" variant="ghost" className="mt-8">
              Подробнее об авторе
            </Button>
          </FadeIn>
        </Container>
      </Section>

      {/* Book showcase — the one 3D moment */}
      <Section tone="deep">
        <Container className="text-center">
          <SectionHead center label="Первый продукт экосистемы">
            {BOOK.title}
          </SectionHead>
          {/* The book itself, at a size that reads as the product rather than
              a thumbnail. It used to sit here as a 300px CSS mock-up; the
              owner asked for the actual book, larger. The 3D mock stays on
              the book's own page, where the spine trick has room to work. */}
          <FadeIn delay={0.15} className="mt-12 flex justify-center">
            <div className="relative w-full max-w-[320px] md:max-w-[440px]">
              <div
                aria-hidden="true"
                className="absolute -inset-x-8 -inset-y-6 rounded-full blur-3xl"
                style={{ background: "radial-gradient(closest-side, rgba(193,18,31,0.18), transparent)" }}
              />
              <Image
                src="/images/cover-front-hires.jpg"
                alt={`Обложка книги «${BOOK.title}»`}
                width={1200}
                height={1800}
                sizes="(max-width: 768px) 320px, 440px"
                className="relative h-auto w-full rounded-[3px] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.85)]"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-12 max-w-prose text-balance leading-relaxed text-mist">
              Реальная история от первого лица — и система внутренних опор,
              которая из неё родилась.
            </p>
            <Button href="/book/1341" className="mt-8">
              Читать о книге
            </Button>
          </FadeIn>
        </Container>
      </Section>

      {/* Кузня Силя — the paid product, which this page did not mention at all.
          A visitor who landed on the logo read four screens and left without
          ever learning there was something to buy: no name, no price, no link
          to /forge. The headline and the line under it are the sales page's own
          approved copy, reused rather than rewritten, so the two pages say the
          same thing in the same words. */}
      <Section tone="paper">
        <Container className="max-w-3xl text-center">
          <SectionHead center label="Кузня Силы">
            {KUZNYA_LANDING.hero.h1}
          </SectionHead>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-8 max-w-prose text-balance leading-relaxed text-inkSoft">
              {KUZNYA_LANDING.hero.subhead}
            </p>
            <p className="mx-auto mt-5 max-w-prose text-balance leading-relaxed text-inkSoft">
              {KUZNYA_LANDING.hero.firstResult}
            </p>
          </FadeIn>
          {/* Points at the sales page, not at the bot: /forge is where the
              offer, the plan and the guarantee live. */}
          <FadeIn delay={0.18} className="mt-9">
            <Button href="/forge" size="lg">
              Кузня Силы — {KUZNYA_LANDING.hero.price}
            </Button>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-inkFaint">
              {KUZNYA_LANDING.hero.micro}
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
