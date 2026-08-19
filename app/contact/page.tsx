import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Контакты" };

export default function ContactPage() {
  return (
    <Section bare className="flex min-h-[70vh] items-center pt-16">
      <Container>
        <span className="kicker">Контакты</span>
        <h1 className="mt-6 font-display text-4xl font-semibold uppercase text-bone md:text-5xl">
          Связаться
        </h1>
        {/* TODO: confirm the preferred public contact channel (email / Telegram / form)
            before publishing — none was provided in the source material. */}
        <p className="mt-6 max-w-prose text-mist">
          Контактный канал уточняется. Добавьте сюда почту, Telegram или
          форму обратной связи проекта.
        </p>
      </Container>
    </Section>
  );
}
