import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";

const QUESTIONS = [
  "Что происходит с человеком в первые дни, когда привычная реальность исчезает?",
  "Когда страх начинает помогать, а когда уничтожает?",
  "Почему ожидание может оказаться отдельной формой испытания?",
  "Как сохранить ощущение времени?",
  "Что делать с мыслями, от которых невозможно убежать?",
  "Как сохранять дисциплину, когда никто не видит, сдался ты или нет?",
  "Почему человеку необходим смысл?",
  "Что происходит с отношением к свободе после того, как её теряешь?",
  "Можно ли забрать свободу у тела, но не получить полного контроля над человеком?",
];

export function InsideBookQuestions() {
  return (
    <Section tone="graphite">
      <Container className="max-w-2xl">
        <FadeIn>
          <span className="kicker">Внутри книги</span>
          <p className="mt-4 text-balance leading-relaxed text-mist">
            Не будем раскрывать ответы. Но вот вопросы, через которые тебе
            придётся пройти вместе со мной:
          </p>
        </FadeIn>

        <div className="mt-10 space-y-5 border-l-2 border-gold/40 pl-6">
          {QUESTIONS.map((q, i) => (
            <FadeIn key={q} delay={i * 0.04}>
              <p className="text-balance font-editorial text-lg italic leading-snug text-bone md:text-xl">
                {q}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-12 border-t border-steel pt-8">
          <p className="text-balance leading-relaxed text-mist">И главный:</p>
          <p className="mt-3 text-balance font-display text-xl font-bold uppercase leading-snug text-ember-bright md:text-2xl">
            Где на самом деле проходит последняя граница человеческой
            свободы?
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
