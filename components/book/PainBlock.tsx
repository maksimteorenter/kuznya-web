import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";

const CIRCUMSTANCES = [
  "Потеря бизнеса",
  "Война",
  "Предательство",
  "Развод",
  "Долги",
  "Одиночество",
  "Потеря близкого",
  "Болезнь",
];

export function PainBlock() {
  return (
    <Section id="story" tone="paper">
      <Container className="max-w-3xl">
        <SectionHead label="Сначала — про тебя">
          У каждого своя камера
        </SectionHead>

        <FadeIn delay={0.1} className="mt-10">
          <p className="max-w-prose text-balance leading-relaxed text-inkSoft">
            Тебе не обязательно оказаться за закрытой дверью, чтобы однажды
            проснуться с мыслью:
          </p>
          <p className="mt-4 max-w-prose text-balance font-editorial text-3xl italic leading-snug text-ink md:text-4xl">
            «Я не знаю, что делать дальше».
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12">
          <p className="max-w-prose text-balance leading-relaxed text-inkSoft">
            Дверь запирается по-разному.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {CIRCUMSTANCES.map((c) => (
              <li
                key={c}
                className="border border-ink/20 px-3.5 py-2 font-display text-[13px] uppercase tracking-[0.06em] text-ink"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-7 max-w-prose text-balance leading-relaxed text-inkSoft">
            Обстоятельства у всех разные. Крах приходит по своему графику и в
            своей форме. Но вопрос под ним почти всегда один и тот же — и он
            неудобный:
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10 border-t border-ink/15 pt-10">
          <p
            className="max-w-3xl text-balance font-display font-bold uppercase leading-[1.12] text-ink"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)" }}
          >
            Что делать, когда ты{" "}
            <span className="text-blood">не можешь изменить</span> то, что
            происходит снаружи?
          </p>
          <p className="mt-6 max-w-prose text-balance leading-relaxed text-inkSoft">
            Большинство книг отвечают на это теорией. У меня было{" "}
            <span className="font-semibold text-ink">{BOOK.days} день</span>,
            чтобы проверить ответ на себе — без права выйти, если не сработает.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
