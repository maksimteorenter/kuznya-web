import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { FadeIn } from "@/components/motion/FadeIn";

const AUDIENCES = [
  {
    title: "Военным",
    text: "Тем, кто знает цену приказу и плену не по книгам. Здесь нет героизации — есть то, что происходит с человеком внутри, когда всё держится на нём одном.",
  },
  {
    title: "Родным тех, кто в плену",
    text: "Самое тяжёлое в ожидании — не знать, что там с ним. Эта книга отвечает на вопрос, который вслух не задают: чем он там живёт и на что опирается.",
  },
  {
    title: "Тем, кто вернулся",
    text: "Возвращение — не финал, а отдельная работа. О том, как заново собирать себя, когда снаружи всё закончилось, а внутри ещё нет.",
  },
  {
    title: "Каждому, кого это коснулось",
    text: "Украина и страны СНГ: почти в каждой семье есть своя история потери, ожидания или начала с нуля. Эта книга — про то, что человек в такой истории всё равно остаётся автором своих решений.",
  },
];

export function ForWhomBlock() {
  return (
    <Section id="for-whom" tone="paper">
      <Container className="max-w-5xl">
        <SectionHead label="Для кого эта книга">
          Её пишут не для полки
        </SectionHead>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {AUDIENCES.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.07}>
              <div className="group border-t-2 border-blood pt-5 transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transform-none">
                <h3 className="font-display text-xl font-bold uppercase tracking-[0.02em] text-ink transition-colors duration-300 group-hover:text-blood">
                  {a.title}
                </h3>
                <p className="mt-3 max-w-prose leading-relaxed text-inkSoft">
                  {a.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
