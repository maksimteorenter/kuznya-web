import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { BookMockup3D } from "@/components/book/BookMockup3D";
import { EyeBar } from "@/components/book/EyeBar";
import { BOOK } from "@/lib/content";

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
        <Container className="max-w-3xl">
          <SectionHead label="Автор">{BOOK.author}</SectionHead>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-prose text-balance text-lg leading-relaxed text-inkSoft">
              Мастер спорта, боец, гипнотерапевт — и человек, переживший{" "}
              {BOOK.days} дней плена. Сегодня он собирает то, что вынес
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
        <Container className="grid items-center gap-14 md:grid-cols-[1fr_auto]">
          <div>
            <SectionHead label="Первый продукт экосистемы">
              {BOOK.title}
            </SectionHead>
            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-prose leading-relaxed text-mist">
                Реальная история от первого лица — и система внутренних опор,
                которая из неё родилась.
              </p>
              <Button href="/book/1341" className="mt-8">
                Читать о книге
              </Button>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="flex justify-center md:justify-end">
            <div className="scale-90 md:scale-100">
              <BookMockup3D />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Thematic section */}
      <Section tone="paper">
        <Container className="max-w-3xl">
          <SectionHead label="Кузня">
            Книга — только первый удар молота
          </SectionHead>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-prose text-balance leading-relaxed text-inkSoft">
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
