import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { FadeIn } from "@/components/motion/FadeIn";

const NOT_FOR = [
  "ищешь лёгкую мотивацию на один вечер",
  "хочешь только красивые фразы, которые приятно цитировать",
  "рассчитываешь на универсальный рецепт жизни из пяти пунктов",
  "не готов читать про страх, ошибки и слабость без прикрас",
];

export function DontBuyBlock() {
  return (
    <Section tone="deep">
      <Container className="max-w-3xl">
        <SectionHead label="Честное предупреждение">
          Не покупай эту книгу, если ты
        </SectionHead>

        <ul className="mt-12">
          {NOT_FOR.map((line, i) => (
            <FadeIn key={line} delay={i * 0.06}>
              <li className="flex gap-5 border-t border-white/12 py-4 last:border-b">
                <span className="shrink-0 pt-0.5 font-display text-lg leading-none text-blood">
                  ×
                </span>
                <span className="text-[15px] leading-relaxed text-mist">
                  {line}
                </span>
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={0.3} className="mt-10">
          <p className="leading-relaxed text-bone">
            Эта история не об этом. Она местами тяжёлая и не пытается быть
            удобной.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-12 border-t border-white/15 pt-10">
          <p className="leading-relaxed text-mist">
            Но если тебе интересно узнать, что происходит с человеком, когда
            обстоятельства снимают с него слой за слоем всё привычное —
          </p>
          <p
            className="mt-5 text-balance font-display font-bold uppercase leading-tight text-bone"
            style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)" }}
          >
            тогда <span className="text-blood">открой первую страницу</span>.
            А дальше решишь сам.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
