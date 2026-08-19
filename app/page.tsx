import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { BookMockup3D } from "@/components/book/BookMockup3D";
import { AUTHOR_LEDE, BOOK } from "@/lib/content";

export const metadata: Metadata = {
  title: "Кузня — место, где человек создаёт себя",
  description:
    "Кузня — экосистема книг, программ и сообщества для тех, кто строит внутреннюю опору в предельных обстоятельствах.",
};

export default function HomePage() {
  return (
    <>
      {/* Photo-led author header */}
      <Section bare className="relative flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/author-portrait-formal.jpg"
            alt={BOOK.author}
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, #08080a 8%, rgba(8,8,10,0.55) 45%, rgba(8,8,10,0.15) 70%, rgba(8,8,10,0.55) 100%)",
            }}
          />
        </div>

        <Container className="relative z-10 pb-20 pt-40">
          <FadeIn>
            <span className="kicker">Кузня</span>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-bone md:text-6xl">
              Человек не ищет себя здесь.
              <br />
              <span className="text-ember-bright">Он создаёт себя.</span>
            </h1>
            <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-bone/90">
              {AUTHOR_LEDE}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Short bio */}
      <Section tone="graphite">
        <Container className="max-w-prose">
          <FadeIn>
            <span className="kicker">{BOOK.author}</span>
            <p className="mt-5 text-balance text-lg leading-relaxed text-mist">
              Мастер спорта, боец, гипнотерапевт — и человек, переживший{" "}
              {BOOK.days} дней плена. Сегодня он собирает то, что вынес
              оттуда, в систему: книги, методики и работу с подсознанием для
              тех, кто хочет управлять собой, а не обстоятельствами.
            </p>
            <Button href="/about" variant="ghost" className="mt-8">
              Об авторе
            </Button>
          </FadeIn>
        </Container>
      </Section>

      {/* Book showcase — the one 3D moment */}
      <Section>
        <Container className="grid items-center gap-14 md:grid-cols-[1fr_auto]">
          <FadeIn>
            <span className="kicker">Первый продукт экосистемы</span>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase text-bone md:text-4xl">
              {BOOK.title}
            </h2>
            <p className="mt-4 max-w-prose text-mist">
              Реальная история от первого лица — и система внутренних опор,
              которая из неё родилась.
            </p>
            <Button href="/book/1341" className="mt-8">
              Читать о книге
            </Button>
          </FadeIn>

          <FadeIn delay={0.15} className="flex justify-center md:justify-end">
            <div className="scale-90 md:scale-100">
              <BookMockup3D />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Thematic section */}
      <Section tone="graphite">
        <Container className="max-w-prose">
          <FadeIn>
            <span className="kicker">Кузня</span>
            <h2 className="mt-4 text-balance font-display text-2xl font-semibold uppercase text-bone md:text-3xl">
              Книга — только первый удар молота.
            </h2>
            <p className="mt-5 text-balance leading-relaxed text-mist">
              Из опыта, идей и технологий работы с собой постепенно родился
              более крупный проект. Программы, клуб и статьи — следующие
              разделы Кузни. Сейчас экосистема начинается с одной книги и
              одной идеи: настоящая сила начинается с управления собой.
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
