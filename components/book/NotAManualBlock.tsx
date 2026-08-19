import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";

const WORDS = [
  "Со страхом",
  "Ошибками",
  "Людьми",
  "Событиями",
  "Абсурдом",
  "Болью",
  "Надеждой",
];

export function NotAManualBlock() {
  return (
    <Section
      tone="paper"
      bare
      className="flex min-h-[80vh] flex-col items-center justify-center py-24 text-center"
    >
      <Container className="max-w-3xl">
        <FadeIn>
          <div className="mx-auto blood-rule" />
          <h2
            className="mt-8 text-balance font-display font-bold uppercase leading-[1.1] text-ink"
            style={{ fontSize: "clamp(1.7rem, 3.8vw, 2.9rem)" }}
          >
            Это не учебник по выживанию
          </h2>
          <p className="mt-4 leading-relaxed text-inkSoft">
            И не сборник красивых цитат о силе духа.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12">
          <p className="font-editorial text-3xl italic text-ink md:text-4xl">
            Это история.
          </p>
          <div className="mx-auto mt-7 flex max-w-lg flex-wrap items-center justify-center gap-x-2.5 gap-y-2">
            {WORDS.map((w, i) => (
              <span key={w} className="flex items-center gap-2.5">
                <span className="font-display text-sm uppercase tracking-[0.08em] text-ink">
                  {w}
                </span>
                {i < WORDS.length - 1 && (
                  <span className="h-1 w-1 bg-blood" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-lg text-balance leading-relaxed text-inkSoft">
            И моментами, когда внутренние решения оказывались важнее внешних
            обстоятельств.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-14 border-t border-ink/15 pt-10">
          <p className="leading-relaxed text-inkSoft">
            Но одновременно это книга, после которой можно задать себе
            неудобный вопрос:
          </p>
          <p
            className="mt-5 text-balance font-display font-bold uppercase leading-tight text-blood"
            style={{ fontSize: "clamp(1.3rem, 3vw, 2.1rem)" }}
          >
            «А что держит меня, когда всё идёт не по плану?»
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
