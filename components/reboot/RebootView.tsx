import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Scene, Head, Disclaimer, bone, boneSoft, boneSofter, text2, goldLight, hairline } from "@/components/forge/primitives";
import { Hit } from "@/components/reboot/Hit";
import { StickyRebootCTA } from "@/components/reboot/StickyRebootCTA";
import { PrimaryCta } from "@/components/reboot/parts";
import { ChapterRun, type Chapter } from "@/components/reboot/chapters";
import type { REBOOT_LANDING } from "@/lib/content";
import type { Widen } from "@/lib/content-shape";

type Content = Widen<typeof REBOOT_LANDING>;

/**
 * «Перезагрузка», page one: the seven principles. A long read for someone
 * awake at 3 a.m., so the hero is one photograph and one sentence, the
 * argument is carried by the hits on the words, and the seven chapters rotate
 * through three layouts so the page never settles into a template. «Вы»
 * rather than «ты»: this reader is being talked to, not pushed.
 */
export function RebootView({ L }: { L: Content; locale: "ru" | "uk" }) {
  const principleWord = "Принцип";
  const chapters: Chapter[] = L.principles.map((p) => ({
    n: p.n,
    title: p.title,
    claim: p.claim,
    body: p.body,
    image: p.image,
    imageAlt: p.imageAlt,
    takeaway: `${p.title} ${p.claim}`,
    takeawayLabel: `${principleWord} ${parseInt(p.n, 10)}`,
  }));

  return (
    <>
      <div data-page-theme="forge" hidden />
      <ScrollProgress />
      <StickyRebootCTA label={L.next.stickyLabel} href={L.next.ctaHref} />

      {/* 1 — HERO. Headline, the seven-principles line, the button. The
          photograph is the reader: a man at a dark window at 3 a.m. */}
      <Scene id="hero" bg="bg-[#0A0706]" bare clip={false} className="flex min-h-[100svh] items-end pb-16 pt-24 md:items-center md:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/images/reboot/hero-window.jpg" alt="" fill sizes="100vw" priority className="object-cover object-[62%_40%] md:object-[50%_40%]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,7,6,0.92) 0%, rgba(10,7,6,0.78) 45%, rgba(10,7,6,0.45) 100%), linear-gradient(180deg, rgba(10,7,6,0.3) 0%, rgba(10,7,6,0) 35%, rgba(10,7,6,0.9) 100%)",
            }}
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <FadeIn>
              <h1
                className={`text-balance font-display font-bold uppercase leading-[1.06] ${bone}`}
                style={{ fontSize: "clamp(1.85rem, 3.9vw, 3rem)", letterSpacing: "-0.01em" }}
              >
                <Hit text={L.hero.h1} />
              </h1>
            </FadeIn>
            <FadeIn delay={0.12} className="mt-6">
              <p className={`font-display text-lg font-semibold uppercase tracking-[0.12em] ${goldLight} md:text-xl`}>{L.hero.kicker}</p>
            </FadeIn>
            <FadeIn delay={0.2} className="mt-6 max-w-lg">
              <p className={`text-lg leading-relaxed ${boneSoft}`}>
                <Hit text={L.hero.lede} tone="bone" />
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="mt-9">
              <PrimaryCta label={L.next.ctaLabel} href={L.next.ctaHref} id="hero" />
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 2 — CONTRAST. The invitation, then the two paired questions. */}
      <Scene id="contrast" bg="bg-[#12100C]">
        <Container>
          <div className="mx-auto max-w-2xl">
            <FadeIn>
              <p className={`font-editorial text-2xl italic leading-snug ${boneSofter} md:text-3xl`}>{L.hero.invite}</p>
            </FadeIn>
            <div className={`mt-12 space-y-10 border-t ${hairline} pt-12`}>
              {L.contrast.map((q, i) => (
                <FadeIn key={q} delay={0.08 + i * 0.1}>
                  <p className={`text-balance text-xl leading-relaxed ${bone} md:text-2xl`}>
                    <Hit text={q} />
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Scene>

      {/* 3 — MYTHS. Six "pain is not…" beats in two columns, then the turn. */}
      <Scene id="myths" bg="bg-[#0A0706]">
        <Container>
          <div className="mx-auto max-w-4xl">
            <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
              {L.myths.items.map((m, i) => (
                <FadeIn key={m.head} delay={i * 0.05}>
                  <li className={`border-t ${hairline} pt-5`}>
                    <p className={`text-balance font-display font-bold uppercase leading-[1.15] ${bone}`} style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)" }}>
                      <Hit text={m.head} />
                    </p>
                    <p className={`mt-3 text-[17px] leading-relaxed ${text2}`}>{m.body}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
          <div className="mx-auto mt-20 max-w-2xl">
            <FadeIn>
              <p className={`text-lg leading-relaxed ${boneSoft} md:text-xl`}>
                <Hit text={L.myths.after} tone="bone" />
              </p>
              <p className={`mt-6 text-lg leading-relaxed ${boneSoft} md:text-xl`}>
                <Hit text={L.myths.counter} tone="bone" />
              </p>
              <p className={`mt-6 text-lg leading-relaxed ${boneSoft} md:text-xl`}>
                <Hit text={L.myths.reveal} tone="bone" />
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-14">
              <p className={`text-balance font-display font-bold uppercase leading-[1.1] ${bone}`} style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.7rem)" }}>
                <Hit text={L.myths.bigLine} />
              </p>
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 4 — THE SEVEN PRINCIPLES. Three layouts in rotation; the last one
          carries Maksim's portrait. */}
      <ChapterRun chapters={chapters} portraitLast />

      {/* 5 — WHAT NEXT. Reassurance, the system, the door. */}
      <Scene id="next" bg="bg-[#0A0706]">
        <Container className="text-center">
          <Head label={L.next.eyebrow} tone="bright">
            <Hit text={L.next.h2} />
          </Head>
          <FadeIn delay={0.12} className="mx-auto mt-10 max-w-xl space-y-5 text-left">
            {L.next.paragraphs.map((para) => (
              <p key={para} className={`text-[17px] leading-relaxed ${boneSoft} md:text-lg`}>
                <Hit text={para} tone="bone" />
              </p>
            ))}
          </FadeIn>
          <FadeIn delay={0.2} className={`mx-auto mt-12 max-w-xl border-t ${hairline} pt-10`}>
            <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
              <Hit text={L.next.closing} />
            </p>
          </FadeIn>
          <FadeIn delay={0.28} className="mt-10">
            <PrimaryCta label={L.next.ctaLabel} href={L.next.ctaHref} id="next" />
            <p className={`mt-4 text-sm ${text2}`}>{L.next.micro}</p>
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
