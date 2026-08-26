import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOKS } from "@/lib/content";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";

export function BooksShowcase() {
  return (
    <Section tone="deep">
      <Container>
        <SectionHead label="Мои книги и материалы">
          Опыт, который нельзя было оставить только в памяти
        </SectionHead>

        <FadeIn delay={0.1} className="mt-6 max-w-2xl">
          <p className="leading-relaxed text-mist">
            Мои книги и курсы — это не пересказ теорий. Это способ передать
            человеку опыт, знание и внутренние опоры, добытые в реальной
            жизни. Их можно приобрести в «Кузне Силы».
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {BOOKS.map((book, i) => (
            <FadeIn key={book.slug} delay={i * 0.08}>
              <div className="group flex h-full flex-col">
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)]">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 320px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold uppercase leading-snug text-bone">
                  {book.title}
                </h3>
                <p className="mt-2 flex-1 text-balance text-sm leading-relaxed text-mist">
                  {book.blurb}
                </p>
                <Button
                  href={book.href}
                  external={book.external}
                  variant="ghost"
                  size="md"
                  className="mt-5 self-start"
                >
                  {book.ctaLabel}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-14">
          <Button href={KUZNYA_TELEGRAM_URL} external variant="primary" size="lg">
            Приобрести в Кузне Силы
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
