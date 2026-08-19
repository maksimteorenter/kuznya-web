import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { FadeIn } from "@/components/motion/FadeIn";

const QUESTIONS = [
  "Что происходит с человеком в первые дни, когда привычная реальность исчезает?",
  "Когда страх начинает помогать, а когда уничтожает?",
  "Почему ожидание может оказаться отдельной формой пытки?",
  "Как сохранить ощущение времени, когда все дни одинаковые?",
  "Что делать с мыслями, от которых невозможно убежать?",
  "Как сохранять дисциплину, когда никто не видит, сдался ты или нет?",
  "Почему без смысла человек ломается быстрее, чем от боли?",
  "Что происходит с отношением к свободе после того, как её теряешь?",
  "Можно ли забрать свободу у тела, но не получить контроля над человеком?",
];

export function InsideBookQuestions() {
  return (
    <Section id="inside" tone="deep">
      <Container className="max-w-3xl">
        <SectionHead label="Внутри книги">
          Девять вопросов, через которые ты пройдёшь вместе со мной
        </SectionHead>

        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-prose leading-relaxed text-mist">
            Ответы я здесь раскрывать не буду — они и есть книга. Но вот о
            чём она на самом деле:
          </p>
        </FadeIn>

        <div className="mt-10">
          {QUESTIONS.map((q, i) => (
            <FadeIn key={q} delay={i * 0.04}>
              <div className="flex gap-5 border-t border-white/12 py-4 last:border-b">
                <span className="shrink-0 pt-1.5 font-display text-[13px] tabular-nums text-blood">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-balance font-editorial text-lg italic leading-snug text-bone md:text-xl">
                  {q}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-12">
          <p className="leading-relaxed text-mist">И главный вопрос книги:</p>
          <p
            className="mt-4 max-w-3xl text-balance font-display font-bold uppercase leading-tight text-blood"
            style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)" }}
          >
            Где на самом деле проходит последняя граница человеческой свободы?
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
