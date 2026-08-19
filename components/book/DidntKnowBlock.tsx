import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";

export function DidntKnowBlock() {
  return (
    <Section tone="deep">
      <Container className="max-w-3xl">
        <SectionHead label="Поворотный момент">
          Я не знал, что это будет {BOOK.days} день
        </SectionHead>

        <FadeIn delay={0.1} className="mt-10 space-y-5">
          <p className="max-w-prose leading-relaxed text-mist">
            Это одна из самых тяжёлых частей истории — и самая недооценённая.
          </p>
          <p className="max-w-prose leading-relaxed text-mist">
            Если бы человеку заранее сказали: «продержись ровно столько» — у
            него была бы точка на горизонте. Можно рассчитать силы. Можно
            терпеть. Но когда точки нет, начинается совсем другая борьба.
          </p>
          <p className="max-w-prose leading-relaxed text-bone">
            Ты просыпаешься утром и не знаешь: ещё день? месяц? год?
            несколько лет? Никогда?
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12 border-t border-white/15 pt-10">
          <p className="max-w-prose leading-relaxed text-mist">
            Именно тогда до меня дошла одна вещь, вокруг которой потом
            выстроилось всё остальное:
          </p>
          <p
            className="mt-6 max-w-3xl text-balance font-display font-bold uppercase leading-[1.14] text-blood"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.3rem)" }}
          >
            Если я не могу управлять тем, что снаружи — мне придётся
            научиться управлять тем, что внутри
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-12 space-y-5">
          <p className="max-w-prose leading-relaxed text-mist">
            Не всегда получалось. Были страх, злость, усталость, отчаяние и
            откровенные провалы. Я не буду делать вид, что прошёл это
            красиво.
          </p>
          <p className="max-w-prose leading-relaxed text-mist">
            Но постепенно начали появляться правила. Способы держать
            внимание. Способы возвращать себя в настоящее. Способы
            переживать неопределённость. Способы не потерять смысл. Способы
            прожить следующий день.
          </p>
          <p className="max-w-prose font-editorial text-2xl italic leading-snug text-bone">
            Не красивые теории. То, что приходилось проверять собственной
            жизнью — потому что проверить больше было нечем.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
