import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";

const PILLARS = [
  {
    title: "Тело",
    text: "Когда мир сужается, тело становится одной из немногих территорий, которыми ещё можно управлять.",
  },
  {
    title: "Внимание",
    text: "Страх может существовать. Но вопрос — чему ты позволяешь занимать своё сознание весь день.",
  },
  {
    title: "Дисциплина",
    text: "Когда невозможно строить планы на годы, огромное значение приобретает то, что ты делаешь сегодня.",
  },
  {
    title: "Смысл",
    text: "Человеку необходимо понимать, ради чего прожить следующий день.",
  },
  {
    title: "Вера",
    text: "Когда логика больше не даёт ответов, человеку нужна внутренняя система координат.",
  },
  {
    title: "Выбор",
    text: "Иногда свобода сокращается до одного: выбрать собственную реакцию на происходящее.",
  },
];

export function PromiseBlock() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <span className="kicker">Главная интрига</span>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold uppercase leading-tight text-bone md:text-4xl">
            Что помогает человеку <span className="text-ember-bright">не сломаться</span>?
          </h2>
          <p className="mt-4 max-w-prose text-balance leading-relaxed text-mist">
            Не существует одной волшебной фразы. Сила складывается из
            множества вещей.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <div className="border-t border-gold/40 pt-4">
                <h3 className="font-display text-lg font-bold uppercase tracking-[0.04em] text-bone">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.35} className="mt-16 max-w-2xl border-t border-steel pt-8">
          <p className="text-balance leading-relaxed text-bone/90">
            В книге я подробно рассказываю, как всё это формировалось — не в
            кабинете и не на тренинге, а внутри реальных обстоятельств.
          </p>
          <Button href="#price" className="mt-8">
            Получить книгу — {BOOK.price}
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
