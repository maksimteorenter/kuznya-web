import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Scene, Head, Disclaimer, bone, boneSoft, boneSofter, text2, goldLight, hairline } from "@/components/forge/primitives";
import { Hit, plain } from "@/components/reboot/Hit";
import { StickyRebootCTA } from "@/components/reboot/StickyRebootCTA";
import { PrimaryCta, Photo } from "@/components/reboot/parts";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";
import type { REBOOT_PROGRAM } from "@/lib/content.reboot-program";
import type { Widen } from "@/lib/content-shape";

type Content = Widen<typeof REBOOT_PROGRAM>;

function Big({ text }: { text: string }) {
  return (
    <p
      className={`text-balance font-display font-bold uppercase leading-[1.12] ${bone}`}
      style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)" }}
    >
      <Hit text={text} />
    </p>
  );
}

function Prose({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <div className={`mx-auto max-w-xl space-y-5 text-left ${className}`}>
      {items.map((para) => (
        <p key={para} className={`text-[17px] leading-relaxed ${boneSoft}`}>
          <Hit text={para} tone="bone" />
        </p>
      ))}
    </div>
  );
}

/**
 * «Перезагрузка» — the programme page, the step after the seven principles.
 * Same language as /reboot and /forge. The reader arrives already sold on the
 * diagnosis; this page has to carry them from "I've tried everything" to the
 * five stages and the door. The one button leads to checkout when the
 * WayForPay button exists, and to the Telegram bot until then.
 */
export function RebootProgramView({ L, locale }: { L: Content; locale: "ru" | "uk" }) {
  const checkout = L.offer.checkoutUrl || KUZNYA_TELEGRAM_URL;
  const stageWord = locale === "uk" ? "Етап" : "Этап";
  const of5 = locale === "uk" ? "з 5" : "из 5";
  return (
    <>
      <div data-page-theme="forge" hidden />
      <ScrollProgress />
      <StickyRebootCTA label={L.offer.ctaLabel} href={checkout} />

      {/* 1 — HERO. The same window as /reboot, but morning: this is the page
          after the night. */}
      <Scene id="hero" bg="bg-[#0A0706]" bare clip={false} className="flex min-h-[100svh] items-center pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/images/reboot/hero-morning.jpg" alt="" fill sizes="100vw" priority className="object-cover object-[60%_40%] md:object-[50%_40%]" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(10,7,6,0.6) 0%, rgba(10,7,6,0.74) 40%, rgba(10,7,6,0.96) 100%)" }}
          />
        </div>
        <Container className="relative z-10 text-center">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <span className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>{L.hero.eyebrow}</span>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-6">
              <h1
                className={`mx-auto text-balance font-display font-bold uppercase leading-[1.06] ${bone}`}
                style={{ fontSize: "clamp(1.9rem, 5vw, 3.5rem)", letterSpacing: "-0.01em" }}
              >
                <Hit text={L.hero.h1} />
              </h1>
            </FadeIn>
            <FadeIn delay={0.18} className="mx-auto mt-7 max-w-2xl">
              <p className={`text-balance font-display text-lg font-semibold uppercase tracking-[0.1em] ${goldLight} md:text-xl`}>{L.hero.kicker}</p>
            </FadeIn>
            <FadeIn delay={0.26} className="mx-auto mt-7 max-w-xl">
              <p className={`text-balance text-lg leading-relaxed ${boneSoft}`}>
                <Hit text={L.hero.lede} tone="bone" />
              </p>
            </FadeIn>
            <FadeIn delay={0.36} className="mt-9">
              <PrimaryCta label={L.hero.ctaLabel} href={checkout} id="hero" />
              <p className={`mt-4 text-xs uppercase tracking-[0.1em] ${text2}`}>{L.hero.micro}</p>
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 2 — TRIED. What the reader has already done, and the line. */}
      <Scene id="tried" bg="bg-[#12100C]">
        <Container className="text-center">
          <Prose items={L.tried.paragraphs} />
          <FadeIn delay={0.1} className={`mx-auto mt-12 max-w-xl border-t ${hairline} pt-10`}>
            <Big text={L.tried.bigLine} />
          </FadeIn>
          <FadeIn delay={0.16} className="mt-10">
            <Prose items={L.tried.after} />
          </FadeIn>
        </Container>
      </Scene>

      {/* 3 — FORGET. The reframe: not you, not your past — a pattern. */}
      <Scene id="forget" bg="bg-[#0A0706]">
        <Container className="text-center">
          <Head>{L.forget.h2}</Head>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
              <Hit text={L.forget.lead} />
            </p>
          </FadeIn>
          <FadeIn delay={0.16} className="mt-10">
            <Prose items={L.forget.paragraphs} />
          </FadeIn>
          <FadeIn delay={0.2} className={`mx-auto mt-12 max-w-xl border-t ${hairline} pt-10`}>
            <Big text={L.forget.bigLine} />
          </FadeIn>
          <FadeIn delay={0.24} className="mt-10">
            <Prose items={L.forget.paragraphs2} />
          </FadeIn>
          <FadeIn delay={0.3} className="mx-auto mt-10 max-w-xl">
            <p className={`text-balance font-editorial text-xl italic leading-snug ${goldLight} md:text-2xl`}>{L.forget.closing}</p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 4 — THE FIVE STAGES. Each its own chapter, like the principles. */}
      <Scene id="how" bg="bg-[#1E1A15]" className="pb-10 md:pb-14">
        <Container className="text-center">
          <Head label={L.how.eyebrow} tone="bright">{L.how.h2}</Head>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className={`text-lg leading-relaxed ${boneSoft}`}>
              <Hit text={L.how.intro} tone="bone" />
            </p>
          </FadeIn>
        </Container>
      </Scene>
      {L.how.stages.map((s, i) => {
        const grounds = ["#1E1A15", "#12100C"] as const;
        const ground = grounds[i % 2];
        const bg = i % 2 === 0 ? "bg-[#1E1A15]" : "bg-[#12100C]";
        return (
          <Scene key={s.n} id={`stage-${s.n}`} bg={bg}>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 left-1/2 z-0 -translate-x-1/2 select-none font-display font-bold leading-none text-[#F3EEE5] md:-top-10"
              style={{ fontSize: "clamp(12rem, 34vw, 26rem)", opacity: 0.035 }}
            >
              {s.n}
            </span>
            <Container className="relative z-10 text-center">
              <FadeIn className="flex flex-col items-center">
                <span aria-hidden="true" className="h-[3px] w-16 bg-[#B8873B]" />
                <p className={`mt-5 font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>
                  {stageWord} {Number(s.n)} {of5}
                </p>
                <h3
                  className={`mx-auto mt-4 max-w-3xl text-balance font-display font-bold uppercase leading-[1.08] ${bone}`}
                  style={{ fontSize: "clamp(1.6rem, 3.6vw, 2.9rem)", letterSpacing: "-0.005em" }}
                >
                  <Hit text={s.title} />
                </h3>
              </FadeIn>
              <FadeIn delay={0.12} className="mx-auto mt-12 max-w-2xl">
                <Photo src={s.image} alt={plain(s.imageAlt)} ground={ground} />
              </FadeIn>
              <FadeIn delay={0.18} className="mt-12">
                <Prose items={s.body} />
              </FadeIn>
              <FadeIn delay={0.24} className="mx-auto mt-12 max-w-xl">
                <div className="rounded-2xl border border-[rgba(224,192,120,0.45)] bg-[#0A0706]/70 px-6 py-6 text-center md:px-8 md:py-7">
                  <p className={`font-display text-[11px] font-semibold uppercase tracking-[0.18em] ${text2}`}>{L.how.resultLabel}</p>
                  <p className={`mt-3 text-balance font-editorial text-lg italic leading-snug ${goldLight} md:text-xl`}>{s.result}</p>
                </div>
              </FadeIn>
            </Container>
          </Scene>
        );
      })}

      {/* 5 — AFTER 30 DAYS. The picture of the result. */}
      <Scene id="after" bg="bg-[#0A0706]">
        <Container className="text-center">
          <Head tone="bright">
            <Hit text={L.after30.h2} />
          </Head>
          <ul className="mx-auto mt-12 max-w-xl space-y-6 text-left">
            {L.after30.items.map((item, i) => (
              <FadeIn key={item} delay={0.08 + i * 0.06}>
                <li className="border-l-2 border-[#B8873B] pl-5 md:pl-7">
                  <p className={`text-balance font-display font-bold uppercase leading-[1.2] ${bone}`} style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}>
                    {item}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ul>
          <FadeIn delay={0.36} className={`mx-auto mt-14 max-w-xl border-t ${hairline} pt-10`}>
            <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
              <Hit text={L.after30.closing} />
            </p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 6 — WHY. Four numbered differences from therapy. */}
      <Scene id="why" bg="bg-[#12100C]">
        <Container className="text-center">
          <Head>{L.why.h2}</Head>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className={`text-lg leading-relaxed ${boneSoft}`}>{L.why.intro}</p>
          </FadeIn>
          <div className="mx-auto mt-12 max-w-xl space-y-8 text-left">
            {L.why.points.map((pt, i) => (
              <FadeIn key={pt.head} delay={0.12 + i * 0.06}>
                <div className="border-l-2 border-[#B8873B] pl-5 md:pl-7">
                  <p className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>{pt.head}</p>
                  <p className={`mt-2 text-[17px] leading-relaxed ${boneSoft}`}>
                    <Hit text={pt.body} tone="bone" />
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Scene>

      {/* 7 — AUTHOR. Portrait, then first person. */}
      <Scene id="author" bg="bg-[#1E1A15]">
        <Container className="text-center">
          <FadeIn className="mx-auto max-w-[260px] overflow-hidden rounded-lg ring-1 ring-[rgba(224,192,120,0.3)]">
            <Image src={L.author.portrait} alt={L.author.portraitAlt} width={614} height={768} sizes="(max-width: 640px) 65vw, 260px" className="h-auto w-full" />
          </FadeIn>
          <div className="mt-10">
            <Head label={L.author.eyebrow}>{L.author.h2}</Head>
          </div>
          <FadeIn delay={0.16} className="mt-8">
            <Prose items={L.author.paragraphs} />
          </FadeIn>
        </Container>
      </Scene>

      {/* 8 — FORMAT. How the 30 days actually run. */}
      <Scene id="format" bg="bg-[#0A0706]">
        <Container className="text-center">
          <Head tone="bright">{L.format.h2}</Head>
          <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2">
            {L.format.chips.map((chip) => (
              <li key={chip} className={`rounded-full border ${hairline} px-3.5 py-1.5 text-sm leading-relaxed ${text2}`}>
                {chip}
              </li>
            ))}
          </ul>
          <FadeIn delay={0.12} className="mt-10">
            <Prose items={L.format.paragraphs} />
          </FadeIn>
          <FadeIn delay={0.2} className={`mx-auto mt-12 max-w-xl border-t ${hairline} pt-10`}>
            <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
              <Hit text={L.format.closing} />
            </p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 9 — TWO TRACKS. Where this sits inside Кузня. */}
      <Scene id="directions" bg="bg-[#12100C]">
        <Container className="text-center">
          <Head label={L.directions.eyebrow}>{L.directions.h2}</Head>
          <div className="mx-auto mt-12 grid max-w-3xl gap-5 text-left md:grid-cols-2">
            {L.directions.items.map((d, i) => (
              <FadeIn key={d.title} delay={0.1 + i * 0.08}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-6 md:p-7 ${
                    d.current ? "border-[#E0C078] bg-[#1E1A15] shadow-[0_18px_34px_-16px_rgba(224,192,120,0.45)]" : `${hairline} bg-[#0A0706]/60`
                  }`}
                >
                  <p className={`font-display text-xl font-bold uppercase tracking-[0.02em] ${d.current ? goldLight : bone}`}>{d.title}</p>
                  <p className={`mt-3 flex-1 text-base leading-relaxed ${d.current ? boneSoft : text2}`}>{d.body}</p>
                  {!d.current && (
                    <a
                      href={KUZNYA_TELEGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track="reboot_training_click"
                      className={`mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full border ${hairline} px-6 font-display text-sm font-semibold uppercase tracking-[0.1em] ${bone} transition-colors hover:border-[rgba(224,192,120,0.6)]`}
                    >
                      {L.directions.trainingCta} →
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Scene>

      {/* 10 — OFFER. The door, once, at the end. */}
      <Scene id="offer" bg="bg-[#0A0706]" className="text-center">
        <Container className="text-center">
          <Head label={L.offer.eyebrow} tone="bright">{L.offer.h2}</Head>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-lg">
            <p className={`text-balance text-lg leading-relaxed ${boneSofter}`}>{L.offer.body}</p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-9">
            <PrimaryCta label={L.offer.ctaLabel} href={checkout} id="offer" />
            <p className={`mt-4 text-xs uppercase tracking-[0.1em] ${text2}`}>{L.offer.micro}</p>
          </FadeIn>
          <FadeIn delay={0.4} className={`mx-auto mt-20 max-w-xl space-y-4 border-t ${hairline} pt-10 text-left`}>
            {L.legal.map((note) => (
              <Disclaimer key={note}>{note}</Disclaimer>
            ))}
          </FadeIn>
        </Container>
      </Scene>
    </>
  );
}
