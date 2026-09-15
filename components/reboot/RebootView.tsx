import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import {
  Scene,
  Head,
  Disclaimer,
  bone,
  boneSoft,
  boneSofter,
  text2,
  goldLight,
  hairline,
} from "@/components/forge/primitives";
import { Hit, plain } from "@/components/reboot/Hit";
import { StickyRebootCTA } from "@/components/reboot/StickyRebootCTA";
import { PrimaryCta, Photo } from "@/components/reboot/parts";
import type { REBOOT_LANDING } from "@/lib/content";
import type { Widen } from "@/lib/content-shape";

type Content = Widen<typeof REBOOT_LANDING>;

/**
 * «Перезагрузка» — the PTSD landing. Same page language as Кузня: warm black
 * grounds, one gold accent, display caps with a hit on the words that carry
 * the argument, editorial italic for the lines meant to be felt rather than
 * read, photographs seated into the ground. «Вы» rather than «ты» — this
 * reader is more fragile and is being talked to, not pushed.
 *
 * Seven principles, each its own chapter with a watermark number, a photograph
 * and a closing card that restates the principle — that is how Maksim wrote
 * it; the repetition is for someone skimming at 2 a.m.
 */
export function RebootView({ L, locale }: { L: Content; locale: "ru" | "uk" }) {
  const of7 = locale === "uk" ? "з 7" : "из 7";
  return (
    <>
      <div data-page-theme="forge" hidden />
      <ScrollProgress />
      <StickyRebootCTA label={L.next.stickyLabel} href={L.next.ctaHref} />

      {/* 1 — HERO. A man at a dark window at 3 a.m. behind the headline —
          the page's reader, before a word is read. */}
      <Scene id="hero" bg="bg-[#0A0706]" bare clip={false} className="flex min-h-[100svh] items-center pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/reboot/hero-window.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover object-[62%_40%] md:object-[50%_40%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,7,6,0.55) 0%, rgba(10,7,6,0.7) 40%, rgba(10,7,6,0.96) 100%)",
            }}
          />
        </div>
        <Container className="relative z-10 text-center">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <span className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>
                {L.hero.eyebrow}
              </span>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-6">
              <h1
                className={`mx-auto text-balance font-display font-bold uppercase leading-[1.06] ${bone}`}
                style={{ fontSize: "clamp(1.9rem, 5vw, 3.5rem)", letterSpacing: "-0.01em" }}
              >
                <Hit text={L.hero.h1} />
              </h1>
            </FadeIn>
            <FadeIn delay={0.18} className="mt-7">
              <p className={`font-display text-xl font-semibold uppercase tracking-[0.14em] ${goldLight} md:text-2xl`}>
                {L.hero.kicker}
              </p>
            </FadeIn>
            <FadeIn delay={0.26} className="mx-auto mt-7 max-w-xl">
              <p className={`text-balance text-lg leading-relaxed ${boneSoft}`}>
                <Hit text={L.hero.lede} tone="bone" />
              </p>
            </FadeIn>
            <FadeIn delay={0.32} className="mx-auto mt-5 max-w-lg">
              <p className={`text-balance font-editorial text-xl italic leading-snug ${boneSofter}`}>{L.hero.invite}</p>
            </FadeIn>
            <FadeIn delay={0.4} className="mt-9">
              <PrimaryCta label={L.next.ctaLabel} href={L.next.ctaHref} id="hero" />
              <p className={`mt-4 text-xs uppercase tracking-[0.1em] ${text2}`}>{L.next.micro}</p>
            </FadeIn>
            <FadeIn delay={0.48} className="mt-10">
              <a
                href="#contrast"
                className={`inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.16em] ${text2} transition-colors hover:text-[#E0C078]`}
              >
                {L.hero.scrollHint} <span aria-hidden="true">↓</span>
              </a>
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 2 — CONTRAST. Two paired questions; the reader places himself. */}
      <Scene id="contrast" bg="bg-[#12100C]">
        <Container className="text-center">
          <div className="mx-auto max-w-2xl space-y-10 md:space-y-12">
            {L.contrast.map((q, i) => (
              <FadeIn key={q} delay={i * 0.12}>
                <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-[2rem]`}>
                  <Hit text={q} />
                </p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Scene>

      {/* 3 — MYTHS. Six "pain is not…" beats, then the turn. */}
      <Scene id="myths" bg="bg-[#0A0706]">
        <Container>
          <div className="mx-auto max-w-2xl">
            <ul className="space-y-8 md:space-y-9">
              {L.myths.items.map((m, i) => (
                <FadeIn key={m.head} delay={i * 0.06}>
                  <li className="border-l-2 border-[#B8873B] pl-5 md:pl-7">
                    <p
                      className={`text-balance font-display font-bold uppercase leading-[1.15] ${bone}`}
                      style={{ fontSize: "clamp(1.15rem, 2vw, 1.5rem)" }}
                    >
                      <Hit text={m.head} />
                    </p>
                    <p className={`mt-3 text-base leading-relaxed ${text2}`}>{m.body}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>

            <FadeIn delay={0.2} className={`mt-16 border-t ${hairline} pt-10 text-center`}>
              <p className={`text-balance text-lg leading-relaxed ${boneSoft}`}>
                <Hit text={L.myths.after} tone="bone" />
              </p>
              <p className={`mt-6 text-balance text-lg leading-relaxed ${boneSoft}`}>
                <Hit text={L.myths.counter} tone="bone" />
              </p>
              <p className={`mt-6 text-balance text-lg leading-relaxed ${boneSoft}`}>
                <Hit text={L.myths.reveal} tone="bone" />
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="mt-12 text-center">
              <p
                className={`text-balance font-display font-bold uppercase leading-[1.12] ${bone}`}
                style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)" }}
              >
                <Hit text={L.myths.bigLine} />
              </p>
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 4 — THE SEVEN PRINCIPLES. Alternating grounds so each one reads as
          its own chapter. Watermark number behind, label, headline with the
          hit, claim in editorial gold, the photograph, the body, the card. */}
      {L.principles.map((p, i) => {
        const grounds = ["#12100C", "#1E1A15"] as const;
        const ground = grounds[i % 2];
        const bg = i % 2 === 0 ? "bg-[#12100C]" : "bg-[#1E1A15]";
        const isAuthor = i === L.principles.length - 1;
        return (
          <Scene key={p.n} id={`principle-${p.n}`} bg={bg}>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 left-1/2 z-0 -translate-x-1/2 select-none font-display font-bold leading-none text-[#F3EEE5] md:-top-10"
              style={{ fontSize: "clamp(12rem, 34vw, 26rem)", opacity: 0.035 }}
            >
              {p.n}
            </span>
            <Container className="relative z-10 text-center">
              <FadeIn className="flex flex-col items-center">
                <span aria-hidden="true" className="h-[3px] w-16 bg-[#B8873B]" />
                <p className={`mt-5 font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>
                  Принцип {Number(p.n)} {of7}
                </p>
                <h2
                  className={`mx-auto mt-4 max-w-3xl text-balance font-display font-bold uppercase leading-[1.08] ${bone}`}
                  style={{ fontSize: "clamp(1.6rem, 3.6vw, 2.9rem)", letterSpacing: "-0.005em" }}
                >
                  <Hit text={p.title} />
                </h2>
                <p className={`mx-auto mt-6 max-w-2xl text-balance font-editorial text-xl italic leading-snug ${goldLight} md:text-2xl`}>
                  {plain(p.claim)}
                </p>
              </FadeIn>

              {p.image && (
                <FadeIn delay={0.12} className={`mx-auto mt-12 ${isAuthor ? "max-w-[280px]" : "max-w-2xl"}`}>
                  {isAuthor ? (
                    <div className="overflow-hidden rounded-lg ring-1 ring-[rgba(224,192,120,0.3)]">
                      <Image src={p.image} alt={plain(p.imageAlt)} width={614} height={768} sizes="(max-width: 640px) 65vw, 280px" className="h-auto w-full" />
                    </div>
                  ) : (
                    <Photo src={p.image} alt={plain(p.imageAlt)} ground={ground} />
                  )}
                </FadeIn>
              )}

              {/* Left-aligned inside a centred chapter: prose of this length
                  centred is tiring, and these read as testimony. */}
              <FadeIn delay={0.18} className="mx-auto mt-12 max-w-xl space-y-5 text-left">
                {p.body.map((para) => (
                  <p key={para} className={`text-[17px] leading-relaxed ${boneSoft}`}>
                    <Hit text={para} tone="bone" />
                  </p>
                ))}
              </FadeIn>

              {/* Takeaway card — the principle again, for the skimmer. */}
              <FadeIn delay={0.24} className="mx-auto mt-12 max-w-xl">
                <div className="rounded-2xl border border-[rgba(224,192,120,0.45)] bg-[#0A0706]/70 px-6 py-6 text-center md:px-8 md:py-7">
                  <p className={`font-display text-[11px] font-semibold uppercase tracking-[0.18em] ${text2}`}>
                    Принцип {Number(p.n)}
                  </p>
                  <p className={`mt-3 text-balance font-display text-base font-bold uppercase leading-[1.35] tracking-[0.02em] ${goldLight} md:text-lg`}>
                    {plain(p.title)} {plain(p.claim)}
                  </p>
                </div>
              </FadeIn>
            </Container>
          </Scene>
        );
      })}

      {/* 5 — WHAT NEXT. Reassurance first, then the system, then the door. */}
      <Scene id="next" bg="bg-[#0A0706]">
        <Container className="text-center">
          <Head label={L.next.eyebrow} tone="bright">
            <Hit text={L.next.h2} />
          </Head>
          <FadeIn delay={0.12} className="mx-auto mt-10 max-w-xl space-y-5 text-left">
            {L.next.paragraphs.map((para) => (
              <p key={para} className={`text-[17px] leading-relaxed ${boneSoft}`}>
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
            <p className={`mt-4 text-xs uppercase tracking-[0.1em] ${text2}`}>{L.next.micro}</p>
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
