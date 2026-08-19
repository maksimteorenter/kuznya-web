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
              <p className="mt-5 max-w-prose text-balance font-editorial text-xl italic leading-relaxed text-bone">
                {AUTHOR_LEDE}
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-8 max-w-prose space-y-4 text-balance leading-relaxed text-mist">
              <p>Я мог бы перечислить здесь регалии. Но для этой книги важнее другое.</p>
              <p className="text-bone/90">
                {BOOK.arrestDate} года моя прежняя жизнь закончилась. Впереди
                были дни, количество которых я тогда не знал. В конечном
                итоге их оказалось: <span className="text-ember-bright">{BOOK.days}</span>.
              </p>
              <p>
                Эта книга появилась не потому, что мне хотелось написать
                очередную историю успеха. Мне хотелось зафиксировать то, что
                происходит с человеком, когда привычная жизнь исчезает — и
                ему приходится заново искать опору внутри себя. Что
                работало. Что не работало. Где я ошибался. Чего боялся.
              </p>
              <p className="font-editorial text-lg italic text-bone">
                Эта книга — разговор с человеком, который однажды тоже может
                оказаться перед обстоятельствами сильнее его планов.
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
