import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { BOOK } from "@/lib/content";

export function FinalScreen() {
  return (
    <Section
      bare
      tone="deep"
      className="flex min-h-[100svh] flex-col items-center justify-center py-24 text-center"
    >
      {/* The portrait returns, almost gone — the story closing where it opened */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-portrait.jpg"
          alt=""
          fill
          sizes="100vw"
          className="photo-bw-hard object-cover object-[58%_18%] opacity-[0.16]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(11,11,12,0.55), #0B0B0C 78%)",
          }}
        />
      </div>

      <Container className="relative max-w-2xl">
        <FadeIn>
          <p className="text-balance leading-relaxed text-mist">
            Представь: у тебя забрали привычную жизнь. Ты не знаешь, когда
            вернёшься. Не знаешь, сколько это продлится. Не можешь изменить
            почти ничего из происходящего.
          </p>
          <p className="mt-4 text-balance leading-relaxed text-mist">
            Проходит день. Неделя. Месяц. Год. Ещё год. Ещё…
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="mt-12 text-balance font-display font-bold uppercase leading-[1.1] text-bone"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.9rem)" }}
          >
            Что ты будешь делать, чтобы{" "}
            <span className="text-blood">не потерять себя</span>?
          </p>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-8">
          <p className="mx-auto max-w-md text-balance leading-relaxed text-bone/90">
            Мне понадобился {BOOK.days} день, чтобы собрать свой ответ. Тебе
            не обязательно проходить этот путь самому — достаточно прочитать,
            как его прошёл я.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} className="mt-14 border-t border-white/15 pt-12">
          <h2 className="font-display text-2xl font-bold uppercase leading-tight text-bone md:text-3xl">
            {BOOK.title}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-balance font-editorial text-lg italic leading-snug text-mist">
            {BOOK.subtitle}
          </p>

          <Button href={BOOK.checkoutUrl} size="lg" className="mt-10">
            Получить книгу — {BOOK.price}
          </Button>

          <p className="mt-4 font-display text-[13px] uppercase tracking-[0.16em] text-mist">
            {BOOK.formats.map((f) => f.label).join(" · ")} · моментальный доступ
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
