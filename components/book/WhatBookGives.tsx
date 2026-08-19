import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { WHAT_BOOK_GIVES } from "@/lib/content";

export function WhatBookGives() {
  return (
    <Section tone="deep">
      <Container>
        <FadeIn>
          <span className="kicker">Система внутренних опор</span>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold uppercase leading-tight text-bone md:text-4xl">
            После прочтения вы лучше поймёте
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {WHAT_BOOK_GIVES.map((item, i) => (
            <FadeIn key={item} delay={i * 0.04}>
              <div className="flex gap-4 border-b border-white/5 pb-6">
                <span className="mt-1 font-display text-[13px] text-flame">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-balance leading-relaxed text-bone/90">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-16 max-w-2xl">
          <p className="text-balance text-xl italic leading-relaxed text-bone md:text-2xl">
            Главная территория, которую человеку необходимо научиться
            защищать, — его собственное сознание.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-12">
          <Button href="#book">Читать книгу</Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
