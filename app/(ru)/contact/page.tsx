import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { KUZNYA_TELEGRAM_URL, SOCIAL_LINKS } from "@/lib/site";

export const metadata: Metadata = { title: "Контакты" };

export default function ContactPage() {
  return (
    // tone="deep" is load-bearing: the copy is bone/mist, which was invisible
    // against the default paper ground.
    <Section bare tone="deep" className="flex min-h-[70vh] items-center pt-16">
      <Container className="text-center">
        <span className="kicker">Контакты</span>
        <h1 className="mt-6 font-display text-4xl font-semibold uppercase text-bone md:text-5xl">
          Связаться
        </h1>
        <p className="mx-auto mt-6 max-w-prose text-mist">
          Пишите в Telegram — это самый быстрый способ. Для записи на
          стратегическую сессию отправьте слово «Стратегия».
        </p>
        <div className="mt-10">
          <Button href={KUZNYA_TELEGRAM_URL} external size="lg">
            Написать в Telegram
          </Button>
        </div>

        <div className="mx-auto mt-14 max-w-md border-t border-white/10 pt-8">
          <p className="font-display text-[13px] uppercase tracking-[0.14em] text-blood">
            Соцсети
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-sm uppercase tracking-[0.1em] text-bone transition-colors hover:text-blood"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
