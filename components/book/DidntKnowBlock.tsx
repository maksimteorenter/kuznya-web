import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";
import { BOOK } from "@/lib/content";

export function DidntKnowBlock() {
  return (
    <Section tone="graphite">
      <Container className="max-w-2xl">
        <FadeIn>
          <h2 className="text-balance font-display text-3xl font-bold uppercase leading-tight text-bone md:text-4xl">
            Я не знал, что это будет {BOOK.days} день
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-8 space-y-4 text-balance leading-relaxed text-mist">
          <p>В этом одна из самых тяжёлых частей истории.</p>
          <p>
            Если бы человек заранее знал: «тебе нужно выдержать ровно
            столько», — у него хотя бы была бы точка на горизонте. Но когда
            этой точки нет, начинается совсем другая борьба.
          </p>
          <p>Ты просыпаешься утром. И не знаешь: ещё день? месяц? год? несколько лет?</p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-8">
          <p className="text-balance leading-relaxed text-bone/90">
            Именно тогда я начал понимать одну вещь:
          </p>
        </FadeIn>

        <RevealText
          as="p"
          delay={0.1}
          className="mt-4 text-balance font-display text-xl font-bold uppercase leading-snug text-ember-bright md:text-2xl"
        >
          Если я не могу управлять тем, что происходит снаружи, мне
          придётся научиться управлять тем, что происходит внутри.
        </RevealText>

        <FadeIn delay={0.2} className="mt-10 space-y-4 text-balance leading-relaxed text-mist">
          <p>Не всегда получалось. Были страх. Злость. Усталость. Отчаяние. Внутренние провалы.</p>
          <p>
            Но постепенно начали появляться правила. Способы держать
            внимание. Способы возвращать себя в настоящее. Способы
            переживать неопределённость. Способы сохранять смысл. Способы
            проживать следующий день.
          </p>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-8 border-t border-gold/30 pt-8">
          <p className="text-balance font-editorial text-xl italic text-bone">
            Не красивые теории. То, что приходилось проверять собственной
            жизнью.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
