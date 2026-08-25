import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { AUTHOR_FACTS, BOOK } from "@/lib/content";

export function AuthorBlock() {
  return (
    <Section tone="deep">
      <Container>
        <div className="grid gap-14 md:grid-cols-[320px_1fr] md:items-start">
          <FadeIn>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/author-portrait-red.jpg"
                  alt={BOOK.author}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-[50%_12%]"
                />
              </div>
              {/* The number cuts the frame, the way the red slash does in the hero */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 -right-2 select-none font-display font-bold leading-none text-blood"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3rem)" }}
              >
                {BOOK.days}
              </span>
            </div>
          </FadeIn>

          <div>
            <SectionHead label="Кто это написал">{BOOK.author}</SectionHead>

            <FadeIn delay={0.1} className="mt-8 space-y-5">
              <p className="max-w-prose font-editorial text-2xl italic leading-snug text-bone">
                Я мог бы перечислить здесь регалии. Но для этой книги важнее
                другое.
              </p>
              <p className="max-w-prose leading-relaxed text-mist">
                <span className="text-bone">{BOOK.arrestDate} года</span> моя
                прежняя жизнь закончилась. Впереди были дни, количество
                которых я тогда не знал. В итоге их оказалось{" "}
                <span className="font-semibold text-blood">{BOOK.days}</span>.
              </p>
              <p className="max-w-prose leading-relaxed text-mist">
                Эта книга появилась не потому, что мне захотелось написать
                очередную историю успеха. Мне хотелось зафиксировать, что
                происходит с человеком, когда привычная жизнь исчезает — и
                ему приходится заново искать опору внутри себя. Что
                работало. Что не работало. Где я ошибался. Чего боялся.
              </p>
              <p className="max-w-prose font-editorial text-xl italic leading-snug text-bone">
                Это разговор с человеком, который однажды тоже может
                оказаться перед обстоятельствами сильнее его планов.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-10">
              <p className="font-display text-[13px] uppercase tracking-[0.16em] text-mist">
                Проверяемые факты
              </p>
              <ul className="mt-5 grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
                {AUTHOR_FACTS.map((fact) => (
                  <li
                    key={fact}
                    className="flex gap-3 text-[15px] font-medium leading-relaxed text-bone"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blood" aria-hidden="true" />
                    {fact}
                  </li>
                ))}
              </ul>
            </FadeIn>

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
