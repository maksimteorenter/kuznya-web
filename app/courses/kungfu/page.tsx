import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";
import {
  KUNGFU_COURSE,
  KUNGFU_MALE_POINTS,
  KUNGFU_CHAPTERS,
  KUNGFU_FEMALE,
  KUNGFU_CLOSING,
} from "@/lib/content";

export const metadata: Metadata = { title: KUNGFU_COURSE.title };

export default function KungfuCoursePage() {
  return (
    <>
      <Section bare tone="deep" className="py-24 pt-32">
        <Container>
          <div className="grid gap-14 md:grid-cols-[280px_1fr] md:items-start">
            <FadeIn>
              <div className="relative mx-auto aspect-[2/3] w-full max-w-[280px] overflow-hidden rounded-lg shadow-[0_40px_80px_-24px_rgba(0,0,0,0.7)]">
                <Image
                  src={KUNGFU_COURSE.cover}
                  alt={KUNGFU_COURSE.title}
                  fill
                  sizes="280px"
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
            <div>
              <FadeIn delay={0.1}>
                <span className="kicker">Аудиокурс</span>
                <h1 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold uppercase leading-tight text-bone md:text-5xl">
                  {KUNGFU_COURSE.title}
                </h1>
                <p className="mt-4 max-w-xl text-balance text-lg leading-relaxed text-mist">
                  {KUNGFU_COURSE.subtitle}
                </p>
              </FadeIn>
              <FadeIn delay={0.2} className="mt-6 max-w-xl">
                <p className="leading-relaxed text-bone/90">{KUNGFU_COURSE.intro}</p>
              </FadeIn>
              <FadeIn delay={0.3} className="mt-8">
                <Button href={KUZNYA_TELEGRAM_URL} external size="lg">
                  Приобрести в Кузне Силы
                </Button>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead label="Мужская часть курса">
            В мужской части курса вы узнаете
          </SectionHead>
          <div className="mt-14 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {KUNGFU_MALE_POINTS.map((item, i) => (
              <FadeIn key={item} delay={i * 0.03}>
                <div className="flex gap-4 border-b border-ink/10 pb-6">
                  <span className="mt-1 font-display text-[13px] text-blood">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-balance leading-relaxed text-ink/90">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="deep">
        <Container className="max-w-3xl">
          <SectionHead label="Отдельные главы">
            О темах, о которых редко говорят открыто
          </SectionHead>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {KUNGFU_CHAPTERS.map((item, i) => (
              <FadeIn key={item} delay={i * 0.05}>
                <li className="border-l-2 border-ember pl-5 leading-relaxed text-bone/90">
                  {item}
                </li>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead label="Для женщин">{KUNGFU_FEMALE.title}</SectionHead>
          <FadeIn delay={0.1} className="mt-6 max-w-2xl">
            <p className="leading-relaxed text-ink/90">{KUNGFU_FEMALE.intro}</p>
          </FadeIn>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {KUNGFU_FEMALE.points.map((item, i) => (
              <FadeIn key={item} delay={i * 0.04}>
                <li className="border-l-2 border-blood pl-5 leading-relaxed text-ink/90">
                  {item}
                </li>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="deep">
        <Container className="max-w-2xl">
          {KUNGFU_CLOSING.map((paragraph, i) => (
            <FadeIn key={paragraph} delay={i * 0.1} className={i > 0 ? "mt-6" : ""}>
              <p className="text-balance text-xl italic leading-relaxed text-bone md:text-2xl">
                {paragraph}
              </p>
            </FadeIn>
          ))}
          <FadeIn delay={0.3} className="mt-12">
            <Button href={KUZNYA_TELEGRAM_URL} external size="lg">
              Приобрести в Кузне Силы
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
