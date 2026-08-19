import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { InteractiveBookMockup } from "@/components/book/InteractiveBookMockup";
import { BOOK, CHAPTERS } from "@/lib/content";

const INCLUDED = [
  `${BOOK.pages} страниц: полная история от ареста до возвращения домой`,
  `${CHAPTERS.length} глав — от «Ада на земле» до «Как течёт время»`,
  `${BOOK.poemsCount} стихотворений, написанных там же, внутри`,
  "Система внутренних опор, собранная не в кабинете, а под нагрузкой",
  "Цифровая версия — доступ сразу после оплаты",
];

export function BookArtifact() {
  return (
    <Section id="price" tone="paper">
      <Container>
        <div className="grid items-start gap-16 md:grid-cols-[auto_1fr]">
          <FadeIn className="flex justify-center md:justify-start">
            <InteractiveBookMockup />
          </FadeIn>

          <div>
            <SectionHead label="Предложение">
              Сколько стоит {BOOK.days} день опыта?
            </SectionHead>

            <FadeIn delay={0.1}>
              <p className="mt-8 max-w-prose leading-relaxed text-inkSoft">
                У этого опыта цены нет. Заплачено другим. Но у книги цена
                есть — и она специально такая, чтобы решение не пришлось
                обдумывать неделю.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 flex items-end gap-4 border-t-2 border-ink pt-6">
                <span className="font-display text-6xl font-bold leading-none tabular-nums text-blood">
                  {BOOK.price}
                </span>
                <span className="pb-1.5 font-display text-xs uppercase tracking-[0.18em] text-inkFaint">
                  разовый платёж
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ul className="mt-8 space-y-0">
                {INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-ink/12 py-3.5"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-blood"
                      aria-hidden="true"
                    />
                    <span className="text-[15px] leading-relaxed text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-8 max-w-prose leading-relaxed text-inkSoft">
                За эти деньги ты не получаешь обещание стать «неуязвимым».
                Ты получаешь возможность пройти {BOOK.days} дней рядом с
                человеком, который их действительно прожил: увидеть его
                решения, ошибки, страх и способы адаптации — и сделать
                собственные выводы.
              </p>
              <p className="mt-4 max-w-prose text-balance font-editorial text-lg italic leading-snug text-ink">
                Возможно, некоторые из них однажды окажутся важнее стоимости
                этой книги.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Button href={BOOK.checkoutUrl} size="lg" className="mt-10">
                Получить книгу — {BOOK.price}
              </Button>
              <p className="mt-3 font-display text-[11px] uppercase tracking-[0.16em] text-inkFaint">
                {BOOK.formats.map((f) => f.label).join(" · ")} · моментальный
                доступ
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
