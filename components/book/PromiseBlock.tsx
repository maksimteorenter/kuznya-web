import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";

const PILLARS = [
  {
    title: "Тело",
    text: "Когда мир сужается до нескольких метров, тело остаётся одной из немногих территорий, которыми ещё можно управлять.",
  },
  {
    title: "Внимание",
    text: "Страх никуда не денется. Вопрос в том, чему именно ты позволяешь занимать своё сознание все двадцать четыре часа.",
  },
  {
    title: "Дисциплина",
    text: "Когда невозможно строить планы на годы, решающим становится то, что ты делаешь в ближайший час.",
  },
  {
    title: "Смысл",
    text: "Человеку необходимо понимать, ради чего он проживает следующий день. Без этого ломаются быстрее всего.",
  },
  {
    title: "Вера",
    text: "Когда логика перестаёт давать ответы, нужна внутренняя система координат, которая держит без доказательств.",
  },
  {
    title: "Выбор",
    text: "Иногда свобода сжимается до одного-единственного права: выбрать собственную реакцию на происходящее.",
  },
];

export function PromiseBlock() {
  return (
    <Section tone="paper">
      <Container>
        <SectionHead label="Главная интрига">
          Что помогает человеку <span className="text-blood">не сломаться</span>?
        </SectionHead>

        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-prose text-balance leading-relaxed text-inkSoft">
            Волшебной фразы не существует. Ни одна из этих опор поодиночке не
            держит. Держит только вся конструкция целиком — и в книге я
            показываю, как она собиралась по частям.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <div className="group border-t-2 border-ink pt-5 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-blood motion-reduce:transform-none">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[13px] tabular-nums text-blood">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase tracking-[0.04em] text-ink">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-inkSoft">{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-16 max-w-2xl border-t border-ink/15 pt-10">
          <p className="text-balance leading-relaxed text-ink">
            В книге я подробно разбираю, как всё это формировалось — не в
            кабинете и не на тренинге, а внутри обстоятельств, из которых
            нельзя было выйти по собственному желанию.
          </p>
          <Button href="#price" className="mt-8">
            Получить книгу — {BOOK.price}
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
