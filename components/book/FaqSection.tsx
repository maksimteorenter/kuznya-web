import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";

const FAQ = [
  {
    q: "Это тяжёлая книга?",
    a: "Да, местами. Но она не о том, как ломать человека, — она о том, что помогает не сломаться. Разговор ведётся с уважением к теме, а не для шока.",
  },
  {
    q: "В ней много политики?",
    a: "Нет. Это личная история и психологическая система, а не политическое высказывание.",
  },
  {
    q: "Это мемуары или практическая книга?",
    a: "И то, и другое: реальная история от первого лица, из которой выросла система внутренних опор — применимая не только к плену.",
  },
  {
    q: "Есть ли электронная версия?",
    a: `Да, ${BOOK.formats[0].label.toLowerCase()} — доступна сразу после оплаты.`,
  },
  {
    q: "Сколько страниц?",
    a: `${BOOK.pages} страниц.`,
  },
  {
    q: "На каких языках доступна?",
    a: "Русский язык. Готовится украинская версия.",
  },
  {
    q: "Как я получу книгу после оплаты?",
    a: "Моментальная ссылка на скачивание цифровой версии сразу после оплаты.",
  },
  {
    q: "Подойдёт ли книга человеку, который обычно не читает военную литературу?",
    a: "Да. Это не военная литература — это книга про управление собой в невыносимых обстоятельствах, какими бы они ни были у вас.",
  },
];

export function FaqSection() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <FadeIn>
          <span className="kicker">Частые вопросы</span>
        </FadeIn>

        <div className="mt-10 divide-y divide-steel border-t border-steel">
          {FAQ.map((item, i) => (
            <FadeIn key={item.q} delay={i * 0.04}>
              <div className="py-6">
                <h3 className="font-display text-base font-semibold uppercase tracking-[0.02em] text-bone md:text-lg">
                  {item.q}
                </h3>
                <p className="mt-2 max-w-prose leading-relaxed text-mist">
                  {item.a}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
