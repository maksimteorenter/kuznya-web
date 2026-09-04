import type { Metadata } from "next";
import Image from "next/image";
import {
  Barbell,
  Brain,
  BookOpen,
  Compass,
  ArrowRight,
  CheckCircle,
  XCircle,
} from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/motion/FadeIn";
import { KuznyaNav } from "@/components/kuznya/Nav";
import { kuznyaTokens as tokens, Eyebrow, BentoTile, Scene } from "@/components/kuznya/scene";

// Kept on purpose (Maksim asked not to delete it) but closed to the public:
// it is an older, parallel "Кузня Силы" page whose content contradicts the
// live sales page at /forge. `noindex, nofollow` keeps it out of search
// results and stops crawlers following its self-contained nav, while the URL
// still works for anyone who has the direct link.
export const metadata: Metadata = {
  title: "Кузня Силы",
  robots: { index: false, follow: false, nocache: true },
};

const PROBLEM_LINES = [
  { title: "Деньги", body: "Доход упёрся в потолок." },
  { title: "Отношения", body: "Повторяются одни и те же сценарии." },
  { title: "Состояние", body: "Энергии хватает поддерживать жизнь, но не менять её." },
  { title: "Направление", body: "Ты умеешь действовать, но перестал понимать — куда." },
  { title: "Дисциплина", body: "Знаешь больше, чем реализуешь." },
];

export default function KuznyaPreviewPage() {
  return (
    <div style={tokens} className="bg-[var(--bg)] text-[var(--ivory)]">
      <KuznyaNav />

      {/* SCENE 1 — Hero */}
      <section className="relative flex min-h-[100dvh] items-end overflow-hidden pb-20 pt-28">
        <Image
          src="/images/hero-portrait.jpg"
          alt="Максим Теорентер"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_18%] grayscale contrast-125"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,8,8,0.25) 0%, rgba(8,8,8,0.45) 40%, rgba(8,8,8,0.97) 100%), linear-gradient(90deg, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.15) 55%)",
          }}
        />
        <div className="relative z-[2] mx-auto w-full max-w-[1360px] px-6 md:px-10">
          <FadeIn>
            <h1 className="max-w-3xl text-balance font-display text-[15vw] font-bold uppercase leading-[0.92] sm:text-[76px] md:text-[96px] lg:text-[128px]">
              Не ищи себя.
              <br />
              Создавай себя.
            </h1>
          </FadeIn>
          <FadeIn delay={0.12} className="mt-6 max-w-md">
            <p className="text-lg" style={{ color: "var(--graphite)" }}>
              Кузня Силы — система работы с мышлением, поведением, внутренними
              ограничениями и жизненной стратегией.
            </p>
          </FadeIn>
          <FadeIn delay={0.22} className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#facts"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--hot)", color: "var(--ivory)" }}
            >
              Войти в Кузню <ArrowRight weight="bold" className="size-4" />
            </a>
            <a
              href="#problem"
              className="text-sm font-semibold uppercase tracking-[0.08em]"
              style={{ color: "var(--graphite)" }}
            >
              Узнать, как это работает
            </a>
          </FadeIn>
        </div>
      </section>

      {/* SCENE 2 — the number, alone */}
      <Scene center>
        <FadeIn>
          <span className="font-display text-[28vw] font-bold leading-none sm:text-[220px]">
            1341
          </span>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-6 max-w-lg text-balance font-editorial text-2xl italic leading-snug md:text-3xl">
            Когда у человека забирают привычный мир, остаётся главный вопрос:
            чем он является без всего внешнего?
          </p>
        </FadeIn>
      </Scene>

      {/* BENTO 1/2 — quick facts */}
      <section id="facts" className="mx-auto max-w-[1360px] px-6 py-24 md:px-10">
        <FadeIn>
          <Eyebrow>Кто стоит за Кузней</Eyebrow>
        </FadeIn>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <FadeIn>
            <BentoTile>
              <Barbell weight="duotone" className="size-7" style={{ color: "var(--hot)" }} />
              <p className="mt-3 text-sm leading-snug" style={{ color: "var(--graphite)" }}>
                Мастер спорта по американскому футболу. 8-кратный чемпион
                Украины и СНГ.
              </p>
            </BentoTile>
          </FadeIn>
          <FadeIn delay={0.05}>
            <BentoTile>
              <Brain weight="duotone" className="size-7" style={{ color: "var(--hot)" }} />
              <p className="mt-3 text-sm leading-snug" style={{ color: "var(--graphite)" }}>
                Certified Master Hypnotherapist, American Academy of Hypnosis.
              </p>
            </BentoTile>
          </FadeIn>
          <FadeIn delay={0.1}>
            <BentoTile>
              <Compass weight="duotone" className="size-7" style={{ color: "var(--hot)" }} />
              <p className="mt-3 text-sm leading-snug" style={{ color: "var(--graphite)" }}>
                Психологический профайлер. Магистр в управлении.
              </p>
            </BentoTile>
          </FadeIn>
          <FadeIn delay={0.15}>
            <a href="/book/1341">
              <BentoTile className="flex h-full flex-col justify-between">
                <BookOpen weight="duotone" className="size-7" style={{ color: "var(--hot)" }} />
                <p className="mt-3 inline-flex items-center gap-1 text-sm" style={{ color: "var(--graphite)" }}>
                  Читать историю <ArrowRight className="size-3.5" />
                </p>
              </BentoTile>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* SCENE 3 — storytelling break */}
      <Scene center>
        <FadeIn>
          <p className="mx-auto max-w-3xl text-balance font-display text-3xl font-bold uppercase leading-tight md:text-5xl">
            Человек не узнаёт себя в комфорте.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-6 text-balance font-display text-3xl font-bold uppercase leading-tight md:text-5xl"
            style={{ color: "var(--hot)" }}
          >
            Он узнаёт себя, когда приходит давление.
          </p>
        </FadeIn>
      </Scene>

      {/* SCENE 4 — problem, revealed line by line, not cards */}
      <Scene id="problem">
        <FadeIn>
          <h2 className="max-w-2xl text-balance font-display text-4xl font-bold uppercase leading-[1.05] md:text-5xl">
            Иногда проблема не в том, что ты слаб
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed" style={{ color: "var(--graphite)" }}>
            Старая версия тебя просто больше не справляется с новой
            реальностью.
          </p>
        </FadeIn>

        <div className="mt-16 divide-y" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {PROBLEM_LINES.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <div className="flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-10 sm:py-8">
                <span
                  className="font-display text-2xl font-bold uppercase sm:w-56 sm:shrink-0 md:text-3xl"
                  style={{ color: "var(--hot)" }}
                >
                  {item.title}
                </span>
                <span className="text-balance text-xl leading-snug" style={{ color: "var(--ivory)" }}>
                  {item.body}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.35} className="mt-14">
          <p className="max-w-2xl leading-relaxed" style={{ color: "var(--graphite)" }}>
            Проблему нельзя решить только новой информацией, если старые
            модели поведения продолжают управлять человеком.
          </p>
        </FadeIn>
      </Scene>

      {/* SCENE 5 — transition */}
      <Scene bg="var(--bg2)" className="border-y" center={false}>
        <FadeIn>
          <h2 className="text-balance font-display text-4xl font-bold uppercase leading-tight md:text-6xl">
            Поэтому я создал Кузню.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed" style={{ color: "var(--graphite)" }}>
            Не место, где тебя мотивируют. Место, где ты учишься перестраивать
            себя.
          </p>
        </FadeIn>
        <FadeIn delay={0.15} className="mt-14 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.1em]">
          {["Старый сценарий", "Давление", "Осознание", "Практика", "Новая стратегия"].map((step, i, arr) => (
            <span key={step} className="flex items-center gap-3">
              <span style={{ color: i === arr.length - 1 ? "var(--hot)" : "var(--ivory)" }}>
                {step}
              </span>
              {i < arr.length - 1 && (
                <ArrowRight className="size-3.5" style={{ color: "var(--graphite)" }} />
              )}
            </span>
          ))}
        </FadeIn>
      </Scene>

      {/* BENTO 2/2 — the system */}
      <section className="mx-auto max-w-[1360px] px-6 py-28 md:px-10 md:py-40">
        <FadeIn>
          <Eyebrow>Система</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-bold uppercase leading-[1.05] md:text-5xl">
            Что внутри
          </h2>
        </FadeIn>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Сознание", body: "Как замечать собственные автоматические сценарии." },
            { title: "Подсознание", body: "Практики работы с глубинными реакциями и убеждениями." },
            { title: "Гипноз", body: "Инструменты внимания, состояния и внушения." },
            { title: "NLP", body: "Работа с языком, моделями мышления и поведением." },
            { title: "Отношения", body: "Разбор повторяющихся моделей взаимодействия." },
            { title: "Деньги", body: "Психология решений, ограничений и поведения." },
            { title: "Дисциплина", body: "Переход от понимания к действию." },
            { title: "Стратегия", body: "Построение следующего этапа жизни." },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.04}>
              <BentoTile className="h-full">
                <span className="font-display text-sm" style={{ color: "var(--hot)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-base font-semibold uppercase">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--graphite)" }}>
                  {item.body}
                </p>
              </BentoTile>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SCENE 6 — обо мне, pure cinematic, no card grid */}
      <Scene>
        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-20">
          <FadeIn>
            <h2 className="font-display text-6xl font-bold uppercase leading-[0.95] md:text-8xl">
              Максим
              <br />
              Теорентер
            </h2>
            <p className="mt-8 max-w-md text-balance font-editorial text-2xl italic leading-snug" style={{ color: "var(--ivory)" }}>
              Он не просто изучал кризис. Он проходил через него — и вышел
              другим человеком.
            </p>
            <p className="mt-8 max-w-md text-sm leading-relaxed" style={{ color: "var(--graphite)" }}>
              Мастер спорта по американскому футболу. Чемпион Украины по
              грэпплингу. Certified Master Hypnotherapist. Основатель проекта
              «Кузня».
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
              <Image
                src="/images/about/tile-1.jpg"
                alt="Максим Теорентер"
                fill
                sizes="(max-width: 768px) 90vw, 500px"
                className="object-cover grayscale"
              />
            </div>
          </FadeIn>
        </div>
      </Scene>

      {/* SCENE 7 — book */}
      <Scene bg="var(--bg2)" className="border-y">
        <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <FadeIn>
            <div className="relative mx-auto aspect-[2/3] w-full max-w-[320px] overflow-hidden rounded-2xl shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/cover-front.jpg"
                alt="1341 день в плену"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-balance font-display text-4xl font-bold uppercase leading-tight md:text-5xl">
              1341 день в плену
            </h2>
            <p className="mt-5 max-w-md leading-relaxed" style={{ color: "var(--graphite)" }}>
              История о том, что остаётся у человека, когда у него забрали
              почти всё внешнее.
            </p>
            <a
              href="/book/1341"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em]"
              style={{ color: "var(--hot)" }}
            >
              Узнать о книге <ArrowRight weight="bold" className="size-4" />
            </a>
          </FadeIn>
        </div>
      </Scene>

      {/* SCENE 8 — кому подходит */}
      <Scene>
        <FadeIn>
          <h2 className="max-w-xl text-balance font-display text-4xl font-bold uppercase leading-tight md:text-5xl">
            Кузня не для всех
          </h2>
        </FadeIn>
        <div className="mt-16 grid gap-14 md:grid-cols-2">
          <FadeIn>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--hot)" }}>
              Подойдёт, если готов
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "смотреть на себя без самообмана",
                "применять практики",
                "брать ответственность за решения",
                "менять привычные модели",
                "работать системно",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg leading-relaxed">
                  <CheckCircle weight="fill" className="mt-1 size-4 shrink-0" style={{ color: "var(--hot)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--graphite)" }}>
              Не подойдёт, если нужен
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "очередной мотиватор",
                "волшебная таблетка",
                "человек, который решит всё за тебя",
                "быстрый результат без действий",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg leading-relaxed" style={{ color: "var(--graphite)" }}>
                  <XCircle weight="bold" className="mt-1 size-4 shrink-0" style={{ color: "var(--graphite)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Scene>

      {/* SCENE 9 — final CTA */}
      <Scene center className="min-h-[85vh]">
        <FadeIn>
          <p className="text-balance font-display text-3xl font-bold uppercase leading-tight md:text-5xl">
            Ты можешь оставить всё как есть.
          </p>
        </FadeIn>
        <FadeIn delay={0.15} className="mt-4">
          <p
            className="text-balance font-display text-3xl font-bold uppercase leading-tight md:text-5xl"
            style={{ color: "var(--hot)" }}
          >
            Или начать ковать следующую версию себя.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} className="mt-12">
          <a
            href="#facts"
            className="inline-flex items-center gap-2 rounded-full px-10 py-5 text-sm font-semibold uppercase tracking-[0.08em] transition-transform duration-200 hover:-translate-y-0.5"
            style={{ background: "var(--hot)", color: "var(--ivory)" }}
          >
            Войти в Кузню <ArrowRight weight="bold" className="size-4" />
          </a>
          <p className="mt-4 text-sm" style={{ color: "var(--graphite)" }}>
            Начни с первого шага.
          </p>
        </FadeIn>
      </Scene>

      <footer
        className="border-t px-6 py-14 text-sm md:px-10"
        style={{ borderColor: "rgba(255,255,255,0.06)", color: "var(--graphite)" }}
      >
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-4">
          <span>© 2026 Максим Теорентер</span>
          <span>Кузня Силы</span>
        </div>
      </footer>
    </div>
  );
}
