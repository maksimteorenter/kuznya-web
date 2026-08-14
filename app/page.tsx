import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Кузня — место, где человек создаёт себя",
  description:
    "Кузня — экосистема книг, программ и сообщества для тех, кто строит внутреннюю опору в предельных обстоятельствах.",
};

export default function HomePage() {
  return (
    <>
      <Section bare className="vignette flex min-h-[92vh] items-center">
        <Container>
          <FadeIn>
            <span className="kicker">Кузня</span>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold uppercase leading-[1.05] tracking-tight text-bone md:text-7xl">
              Место, где человек не ищет себя.
              <br />
              <span className="text-ember-bright">Он создаёт себя.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
              Книги, программы и сообщество для тех, кто проходит предельные
              обстоятельства и выходит из них другим человеком.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section tone="graphite">
        <Container>
          <FadeIn>
            <span className="kicker">Первый продукт экосистемы</span>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase text-bone md:text-4xl">
              1341 день в изоляции
            </h2>
            <p className="mt-4 max-w-prose text-mist">
              Книга Максима Теорентера о 1341 дне плена и о том, что остаётся
              от человека, когда у него забирают почти всё.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-12 grid gap-10 md:grid-cols-[220px_1fr] md:items-center">
            <div className="relative aspect-[130/200] w-full max-w-[220px] overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/images/cover-front.jpg"
                alt="Обложка книги «1341 день в изоляции»"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="max-w-prose text-mist">
                Реальная история от первого лица — и система внутренних опор,
                которая из неё родилась.
              </p>
              <Button href="/book/1341" className="mt-6">
                Читать о книге
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn className="max-w-prose">
            <span className="kicker">Скоро</span>
            <p className="mt-4 text-mist">
              Программы, клуб и статьи — следующие разделы Кузни. Сейчас
              экосистема начинается с одной книги и одной идеи: настоящая
              сила начинается с управления собой.
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
