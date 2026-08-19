import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollParallax } from "@/components/motion/ScrollParallax";
import { AUTHOR_FACTS, BOOK } from "@/lib/content";

export const metadata: Metadata = { title: "Автор" };

export default function AboutPage() {
  return (
    <>
      <Section bare className="flex min-h-[100svh] items-center justify-center bg-void py-16">
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

      <Section tone="graphite">
        <Container className="max-w-3xl">
          <FadeIn>
            <span className="kicker">Регалии</span>
          </FadeIn>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {AUTHOR_FACTS.map((fact, i) => (
              <FadeIn key={fact} delay={i * 0.05}>
                <li className="border-l-2 border-gold/50 pl-4 text-sm leading-relaxed text-bone/90">
                  {fact}
                </li>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
