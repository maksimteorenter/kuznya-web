import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Scene, Head, Disclaimer, bone, boneSoft, boneSofter, text2, goldLight, hairline } from "@/components/forge/primitives";
import { Hit } from "@/components/reboot/Hit";
import { StickyRebootCTA } from "@/components/reboot/StickyRebootCTA";
import { PrimaryCta } from "@/components/reboot/parts";
import { ChapterRun, type Chapter } from "@/components/reboot/chapters";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";
import type { REBOOT_PROGRAM } from "@/lib/content.reboot-program";
import type { Widen } from "@/lib/content-shape";

type Content = Widen<typeof REBOOT_PROGRAM>;

function Big({ text }: { text: string }) {
  return (
    <p className={`text-balance font-display font-bold uppercase leading-[1.1] ${bone}`} style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.7rem)" }}>
      <Hit text={text} />
    </p>
  );
}

function Prose({ items, size = "md" }: { items: readonly string[]; size?: "md" | "lg" }) {
  const cls = size === "lg" ? "text-lg md:text-xl" : "text-[17px] md:text-lg";
  return (
    <div className="space-y-5">
      {items.map((para) => (
        <p key={para} className={`${cls} leading-relaxed ${boneSoft}`}>
          <Hit text={para} tone="bone" />
        </p>
      ))}
    </div>
  );
}

/**
 * «Перезагрузка», page two: the programme. The reader arrives from the seven
 * principles already agreeing with the diagnosis; this page carries them from
 * "I have tried everything" through the five stages to the one button. The
 * button goes to checkout once the WayForPay button exists, and to the
 * Telegram bot until then.
 */
export function RebootProgramView({ L }: { L: Content; locale: "ru" | "uk" }) {
  const checkout = L.offer.checkoutUrl || KUZNYA_TELEGRAM_URL;
  const chapters: Chapter[] = L.how.stages.map((s) => ({
    n: s.n,
    title: s.title,
    claim: "",
    body: s.body,
    image: s.image,
    imageAlt: s.imageAlt,
    takeaway: s.result,
    takeawayLabel: L.how.resultLabel,
  }));

  return (
    <>
      <div data-page-theme="forge" hidden />
      <ScrollProgress />
      <StickyRebootCTA label={L.offer.ctaLabel} href={checkout} />

      {/* 1 — HERO. The same window, morning. Headline, the one line that
          turns the page, the button. */}
      <Scene id="hero" bg="bg-[#0A0706]" bare clip={false} className="flex min-h-[100svh] items-end pb-16 pt-24 md:items-center md:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/images/reboot/hero-morning.jpg" alt="" fill sizes="100vw" priority className="object-cover object-[60%_40%] md:object-[55%_45%]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,7,6,0.94) 0%, rgba(10,7,6,0.8) 45%, rgba(10,7,6,0.45) 100%), linear-gradient(180deg, rgba(10,7,6,0.3) 0%, rgba(10,7,6,0) 35%, rgba(10,7,6,0.9) 100%)",
            }}
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <FadeIn>
              <h1 className={`text-balance font-display font-bold uppercase leading-[1.06] ${bone}`} style={{ fontSize: "clamp(1.85rem, 3.9vw, 3rem)", letterSpacing: "-0.01em" }}>
                <Hit text={L.hero.h1} />
              </h1>
            </FadeIn>
            <FadeIn delay={0.12} className="mt-6 max-w-xl">
              <p className={`font-display text-lg font-semibold uppercase tracking-[0.08em] ${goldLight} md:text-xl`}>{L.hero.kicker}</p>
            </FadeIn>
            <FadeIn delay={0.2} className="mt-6 max-w-lg">
              <p className={`text-lg leading-relaxed ${boneSoft}`}>
                <Hit text={L.hero.lede} tone="bone" />
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="mt-9">
              <PrimaryCta label={L.hero.ctaLabel} href={checkout} id="hero" />
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 2 — TRIED. What the reader has already done, then the line. */}
      <Scene id="tried" bg="bg-[#12100C]">
        <Container>
          <div className="mx-auto max-w-2xl">
            <FadeIn>
              <Prose items={L.tried.paragraphs} size="lg" />
            </FadeIn>
            <FadeIn delay={0.1} className="mt-14">
              <Big text={L.tried.bigLine} />
            </FadeIn>
            <FadeIn delay={0.16} className="mt-10">
              <Prose items={L.tried.after} size="lg" />
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 3 — FORGET. The reframe: not you, not your past, a pattern. The
          manifesto section, so it is the one that stands centred. */}
      <Scene id="forget" bg="bg-[#0A0706]">
        <Container className="text-center">
          <Head>{L.forget.h2}</Head>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
              <Hit text={L.forget.lead} />
            </p>
          </FadeIn>
          <FadeIn delay={0.16} className="mx-auto mt-12 max-w-xl text-left">
            <Prose items={L.forget.paragraphs} />
          </FadeIn>
          <FadeIn delay={0.2} className="mx-auto mt-14 max-w-2xl">
            <Big text={L.forget.bigLine} />
          </FadeIn>
          <FadeIn delay={0.24} className="mx-auto mt-10 max-w-xl text-left">
            <Prose items={L.forget.paragraphs2} />
          </FadeIn>
          <FadeIn delay={0.3} className="mx-auto mt-10 max-w-xl">
            <p className={`text-balance font-editorial text-xl italic leading-snug ${goldLight} md:text-2xl`}>{L.forget.closing}</p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 4 — THE FIVE STAGES. Heading, then the chapters in rotation. */}
      <Scene id="how" bg="bg-[#1E1A15]" className="!pb-4 md:!pb-6">
        <Container>
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className={`text-balance font-display font-bold uppercase leading-[1.08] ${bone}`} style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.9rem)", letterSpacing: "-0.005em" }}>
                {L.how.h2}
              </h2>
              <p className={`mt-6 text-lg leading-relaxed ${boneSoft} md:text-xl`}>
                <Hit text={L.how.intro} tone="bone" />
              </p>
            </FadeIn>
          </div>
        </Container>
      </Scene>
      <ChapterRun chapters={chapters} />

      {/* 5 — AFTER 30 DAYS. Four lines in a two-by-two, then the closing. */}
      <Scene id="after" bg="bg-[#0A0706]">
        <Container>
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h2 className={`max-w-3xl text-balance font-display font-bold uppercase leading-[1.08] ${bone}`} style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.9rem)", letterSpacing: "-0.005em" }}>
                <Hit text={L.after30.h2} />
              </h2>
            </FadeIn>
            <ul className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
              {L.after30.items.map((item, i) => (
                <FadeIn key={item} delay={0.08 + i * 0.06}>
                  <li className={`border-t ${hairline} pt-5`}>
                    <p className={`text-balance font-editorial text-xl italic leading-snug ${bone} md:text-2xl`}>{item}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>
            <FadeIn delay={0.36} className="mt-16 max-w-2xl">
              <Big text={L.after30.closing} />
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 6 — WHY. Four differences from therapy, numbered by their own words. */}
      <Scene id="why" bg="bg-[#12100C]">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <FadeIn className="md:sticky md:top-28">
                <h2 className={`text-balance font-display font-bold uppercase leading-[1.08] ${bone}`} style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.005em" }}>
                  {L.why.h2}
                </h2>
                <p className={`mt-6 text-lg leading-relaxed ${boneSofter}`}>{L.why.intro}</p>
              </FadeIn>
            </div>
            <div className="space-y-9 md:col-span-6 md:col-start-7">
              {L.why.points.map((pt, i) => (
                <FadeIn key={pt.head} delay={0.08 + i * 0.06}>
                  <div className={`border-t ${hairline} pt-5`}>
                    <p className={`font-display text-lg font-bold uppercase tracking-[0.02em] ${goldLight}`}>{pt.head}</p>
                    <p className={`mt-3 text-[17px] leading-relaxed ${boneSoft} md:text-lg`}>
                      <Hit text={pt.body} tone="bone" />
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Scene>

      {/* 7 — AUTHOR. Portrait beside first person. */}
      <Scene id="author" bg="bg-[#1E1A15]">
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-12 md:gap-12">
            <FadeIn className="mx-auto w-full max-w-[300px] md:sticky md:top-28 md:col-span-4 md:max-w-none">
              <div className="overflow-hidden rounded-lg">
                <Image src={L.author.portrait} alt={L.author.portraitAlt} width={614} height={768} sizes="(max-width: 768px) 300px, 33vw" className="h-auto w-full" />
              </div>
            </FadeIn>
            <div className="md:col-span-7 md:col-start-6">
              <FadeIn delay={0.08}>
                <p className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>{L.author.eyebrow}</p>
                <h2 className={`mt-4 text-balance font-display font-bold uppercase leading-[1.08] ${bone}`} style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.005em" }}>
                  {L.author.h2}
                </h2>
              </FadeIn>
              <FadeIn delay={0.14} className="mt-8">
                <Prose items={L.author.paragraphs} />
              </FadeIn>
            </div>
          </div>
        </Container>
      </Scene>

      {/* 8 — FORMAT. How the 30 days run. */}
      <Scene id="format" bg="bg-[#0A0706]">
        <Container>
          <div className="mx-auto max-w-2xl">
            <FadeIn>
              <h2 className={`text-balance font-display font-bold uppercase leading-[1.08] ${bone}`} style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.005em" }}>
                {L.format.h2}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-8">
              <Prose items={L.format.paragraphs} size="lg" />
            </FadeIn>
            <FadeIn delay={0.2} className={`mt-12 border-t ${hairline} pt-10`}>
              <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
                <Hit text={L.format.closing} />
              </p>
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 9 — TWO TRACKS. Where this sits inside Кузня: the one place on the
          page where two things are being compared, so the two panels earn
          their frames. */}
      <Scene id="directions" bg="bg-[#12100C]">
        <Container>
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h2 className={`max-w-3xl text-balance font-display font-bold uppercase leading-[1.08] ${bone}`} style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.005em" }}>
                {L.directions.h2}
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {L.directions.items.map((d, i) => (
                <FadeIn key={d.title} delay={0.1 + i * 0.08}>
                  <div className={`flex h-full flex-col rounded-lg border p-6 md:p-8 ${d.current ? "border-[rgba(224,192,120,0.6)] bg-[#1E1A15]" : `${hairline} bg-[#0A0706]/60`}`}>
                    <p className={`font-display text-2xl font-bold uppercase tracking-[0.02em] ${d.current ? goldLight : bone}`}>{d.title}</p>
                    <p className={`mt-3 flex-1 text-[17px] leading-relaxed ${d.current ? boneSoft : text2}`}>{d.body}</p>
                    {!d.current && (
                      <a
                        href={KUZNYA_TELEGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-track="reboot_training_click"
                        className={`mt-6 inline-flex min-h-[44px] items-center justify-center self-start rounded-full border ${hairline} px-6 font-display text-sm font-semibold uppercase tracking-[0.1em] ${bone} transition-colors hover:border-[rgba(224,192,120,0.6)]`}
                      >
                        {L.directions.trainingCta}
                      </a>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Scene>

      {/* 10 — OFFER. The door, once, at the end. */}
      <Scene id="offer" bg="bg-[#0A0706]">
        <Container className="text-center">
          <Head tone="bright">{L.offer.h2}</Head>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-lg">
            <p className={`text-balance text-lg leading-relaxed ${boneSofter}`}>{L.offer.body}</p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-9">
            <PrimaryCta label={L.offer.ctaLabel} href={checkout} id="offer" />
            <p className={`mt-4 text-sm ${text2}`}>{L.offer.micro}</p>
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
