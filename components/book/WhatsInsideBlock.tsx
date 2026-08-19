import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK, CHAPTERS } from "@/lib/content";

const STATS = [
  { value: String(BOOK.pages), label: "страниц" },
  { value: String(CHAPTERS.length), label: "глав" },
  { value: String(BOOK.poemsCount), label: "стихотворений" },
];

export function WhatsInsideBlock() {
  return (
    <Section tone="paper">
      <Container>
        <SectionHead label="Что внутри">Из чего состоит книга</SectionHead>

        <FadeIn delay={0.1}>
          <div className="mt-12 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="bg-paper px-6 py-8">
                <div className="font-display text-5xl font-bold tabular-nums leading-none text-ink">
                  {s.value}
                </div>
                <div className="mt-2 font-display text-xs uppercase tracking-[0.18em] text-inkFaint">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-14">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-inkFaint">
            Оглавление
          </p>
          <ol className="mt-6 grid gap-x-12 gap-y-0 sm:grid-cols-2">
            {CHAPTERS.map((c, i) => (
              <li
                key={c}
                className="flex items-baseline gap-4 border-t border-ink/12 py-3.5"
              >
                <span className="font-display text-xs tabular-nums text-blood">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] text-ink">{c}</span>
              </li>
            ))}
          </ol>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-14 max-w-2xl border-t-2 border-ink pt-8">
          <p
            className="text-balance font-display font-bold uppercase leading-[1.14] text-ink"
            style={{ fontSize: "clamp(1.2rem, 2.4vw, 1.8rem)" }}
          >
            Неуязвимый — не тот, кому никогда не больно. Это тот, кто после
            удара способен <span className="text-blood">снова выбрать</span>,
            кем ему быть.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
