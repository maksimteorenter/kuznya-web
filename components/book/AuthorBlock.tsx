import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { AUTHOR_FACTS, AUTHOR_LEDE, BOOK } from "@/lib/content";

export function AuthorBlock() {
  return (
    <Section>
      <Container>
        <div className="grid gap-14 md:grid-cols-[300px_1fr] md:items-start">
          <FadeIn>
            <div className="relative aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/images/author.jpg"
                alt={BOOK.author}
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <span className="kicker">Автор</span>
              <h2 className="mt-4 font-display text-3xl font-semibold uppercase text-bone md:text-4xl">
                {BOOK.author}
              </h2>
              <p className="mt-5 max-w-prose text-balance text-lg italic leading-relaxed text-mist">
                {AUTHOR_LEDE}
              </p>
            </FadeIn>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {AUTHOR_FACTS.map((fact, i) => (
                <FadeIn key={fact} delay={i * 0.05}>
                  <li className="border-l-2 border-ember pl-4 text-sm leading-relaxed text-bone/90">
                    {fact}
                  </li>
                </FadeIn>
              ))}
            </ul>

            <FadeIn delay={0.3} className="mt-10">
              <Button href="/about" variant="ghost">
                Подробнее об авторе
              </Button>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
