import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AUTHOR_FACTS, AUTHOR_LEDE, BOOK } from "@/lib/content";

export const metadata: Metadata = { title: "Автор" };

export default function AboutPage() {
  return (
    <Section bare className="vignette flex min-h-[90vh] items-center">
      <Container>
        <div className="grid gap-14 md:grid-cols-[280px_1fr] md:items-start">
          <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-sm shadow-2xl">
            <Image
              src="/images/author.jpg"
              alt={BOOK.author}
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>
          <div>
            <span className="kicker">Автор</span>
            <h1 className="mt-4 font-display text-4xl font-semibold uppercase text-bone md:text-5xl">
              {BOOK.author}
            </h1>
            <p className="mt-6 max-w-prose text-lg italic text-mist">{AUTHOR_LEDE}</p>
            <ul className="mt-10 space-y-4">
              {AUTHOR_FACTS.map((fact) => (
                <li
                  key={fact}
                  className="border-l-2 border-ember pl-4 text-sm leading-relaxed text-bone/90"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
