import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Scene, Head, Disclaimer, bone, boneSoft, boneSofter, text2, gold, goldLight, hairline } from "@/components/forge/primitives";
import { ProofGrid } from "@/components/forge/ProofGrid";
import { Hit } from "@/components/reboot/Hit";
import { StickyRebootCTA } from "@/components/reboot/StickyRebootCTA";
import { Cta } from "@/components/mentorship/Cta";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";
import type { KING_LANDING } from "@/lib/content.king";
import type { Widen } from "@/lib/content-shape";

type Content = Widen<typeof KING_LANDING>;

const h2Style = { fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)", letterSpacing: "-0.005em" } as const;

/** Left-aligned section head: gold rule, then the headline. */
function LeftHead({ children }: { children: ReactNode }) {
  return (
    <FadeIn>
      <span aria-hidden="true" className="block h-[3px] w-16 bg-[#B8873B]" />
      <h2 className={`mt-5 text-balance font-display font-bold uppercase leading-[1.08] ${bone}`} style={h2Style}>
        {children}
      </h2>
    </FadeIn>
  );
}

/** A figure seated into the ground: the carved pawns and the king. */
function Figure({ src, alt, ground, className = "" }: { src: string; alt: string; ground: string; className?: string }) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden rounded-lg ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: `linear-gradient(180deg, ${ground}33 0%, ${ground}00 25%, ${ground}00 65%, ${ground}CC 100%)` }}
      />
    </div>
  );
}

/**
 * «Кузня силы — Из пешки в короля», the front page. The reader is a man who
 * has lost and is losing; the page names that first, gives him the five
 * moves, the guide and the price, and keeps the one thread — loss — from the
 * first screen to the last button. Layouts alternate so it never settles
 * into a template: split, centred manifesto, figure-and-text, list, grid.
 */
export function KingView({ L }: { L: Content }) {
  const checkout = L.hero.checkoutUrl || KUZNYA_TELEGRAM_URL;
  // Literal class strings so Tailwind's scanner finds them; the hex is for the
  // figure's seating gradient.
  const grounds = [
    { hex: "#12100C", bg: "bg-[#12100C]" },
    { hex: "#0A0706", bg: "bg-[#0A0706]" },
    { hex: "#1E1A15", bg: "bg-[#1E1A15]" },
  ] as const;

  return (
    <>
      <div data-page-theme="forge" hidden />
      <ScrollProgress />
      <StickyRebootCTA label={`${L.hero.ctaLabel} — ${L.hero.price}`} href={checkout} track="king" />

      {/* 1 — HERO. The throne of swords behind; the headline, the promise,
          the loss line, the button, the four levers under it. */}
      <Scene id="hero" bg="bg-[#0A0706]" bare clip={false} className="flex min-h-[100svh] items-center pb-14 pt-24 md:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/images/forge/hero-throne.jpg" alt="" fill sizes="100vw" priority className="object-cover object-[50%_0%]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,7,6,0.35) 0%, rgba(10,7,6,0.5) 30%, rgba(10,7,6,0.82) 60%, rgba(10,7,6,0.97) 100%)",
            }}
          />
        </div>
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <p className={`font-display text-sm font-semibold uppercase tracking-[0.2em] ${goldLight}`}>{L.hero.eyebrow}</p>
              <h1
                className={`mt-5 font-display font-bold uppercase leading-[0.96] ${bone}`}
                style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.015em" }}
              >
                {L.hero.h1}
              </h1>
            </FadeIn>
            <FadeIn delay={0.12} className="mt-7">
              <p className={`text-balance font-display text-xl font-semibold uppercase leading-snug ${bone} md:text-2xl`}>{L.hero.sub}</p>
            </FadeIn>
            <FadeIn delay={0.2} className="mx-auto mt-7 max-w-2xl">
              <p className={`text-[17px] leading-relaxed ${boneSofter} md:text-lg`}>
                <Hit text={L.hero.loss} tone="bone" />
              </p>
            </FadeIn>
            <FadeIn delay={0.28} className="mt-8">
              <Cta label={`${L.hero.ctaLabel} — ${L.hero.price}`} href={checkout} id="hero" track="king" />
              <p className={`mt-4 text-sm ${text2}`}>{L.hero.after}</p>
              <p className={`mt-2 text-xs uppercase tracking-[0.12em] ${text2}`}>{L.hero.micro}</p>
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 2 — BUT. Three pains, each a photographed evening and its loss line. */}
      <Scene id="but" bg="bg-[#12100C]">
        <Container>
          <Head tone="bright">{L.but.h2}</Head>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {L.but.items.map((p, i) => (
              <FadeIn key={p.title} delay={0.08 * i}>
                <div className={`relative aspect-[4/3] overflow-hidden rounded-lg border ${hairline}`}>
                  <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg, #12100C00 40%, #12100CCC 100%)" }} />
                </div>
                <p className={`mt-6 font-display text-2xl font-bold uppercase leading-tight ${bone}`}>{p.title}</p>
                <p className={`mt-3 text-[17px] leading-relaxed ${boneSofter}`}>{p.body}</p>
                <p className={`mt-4 border-t ${hairline} pt-4 font-editorial text-lg italic leading-snug ${goldLight}`}>{p.loss}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3} className="mt-16 text-center">
            <p className={`text-balance font-display font-bold uppercase leading-[1.14] ${bone}`} style={{ fontSize: "clamp(1.3rem, 2.6vw, 2rem)" }}>
              {L.but.closing}
            </p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 3 — UNDERVALUED. The manifesto: centred, no image. */}
      <Scene id="under" bg="bg-[#0A0706]">
        <Container>
          <div className="mx-auto max-w-2xl">
            <LeftHead>{L.under.h2}</LeftHead>
            <FadeIn delay={0.1} className="mt-8 space-y-5">
              {L.under.paras.map((p) => (
                <p key={p} className={`text-lg leading-relaxed ${boneSoft} md:text-xl`}>
                  <Hit text={p} tone="bone" />
                </p>
              ))}
            </FadeIn>
            <FadeIn delay={0.16} className={`mt-10 border-t ${hairline} pt-8`}>
              <p className={`font-display text-xl font-bold uppercase leading-tight ${goldLight} md:text-2xl`}>{L.under.line}</p>
              <p className={`mt-4 text-lg leading-relaxed ${bone}`}>{L.under.verbs}</p>
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 4 — LOSSES. The heart of the page: the stone pawn held by threads,
          and what he is losing right now. */}
      <Scene id="losses" bg="bg-[#12100C]">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
            <FadeIn className="md:col-span-5">
              <Figure src={L.losses.image} alt={L.losses.imageAlt} ground="#12100C" className="mx-auto max-w-[360px] md:max-w-none" />
            </FadeIn>
            <div className="md:col-span-6 md:col-start-7">
              <LeftHead>{L.losses.h2}</LeftHead>
              <FadeIn delay={0.1} className="mt-8 space-y-5">
                {L.losses.paras.map((p) => (
                  <p key={p} className={`text-[17px] leading-relaxed ${boneSoft} md:text-lg`}>
                    <Hit text={p} tone="bone" />
                  </p>
                ))}
              </FadeIn>
              <FadeIn delay={0.16} className={`mt-8 border-t ${hairline} pt-6`}>
                <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
                  <Hit text={L.losses.line} />
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Scene>

      {/* 5 — ORIGIN. Where the weakness was written, and the method line. */}
      <Scene id="origin" bg="bg-[#0A0706]">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <FadeIn className="md:sticky md:top-28">
                <span aria-hidden="true" className="block h-[3px] w-16 bg-[#B8873B]" />
                <h2 className={`mt-5 font-display font-bold uppercase leading-[1.08] ${bone}`} style={h2Style}>
                  {L.origin.h2}
                </h2>
              </FadeIn>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <FadeIn delay={0.08} className="space-y-5">
                {L.origin.paras.map((p) => (
                  <p key={p} className={`text-lg leading-relaxed ${boneSoft} md:text-xl`}>
                    <Hit text={p} tone="bone" />
                  </p>
                ))}
              </FadeIn>
              <FadeIn delay={0.16} className={`mt-10 border-t ${hairline} pt-8`}>
                <p className={`text-lg leading-relaxed ${bone} md:text-xl`}>
                  <Hit text={L.origin.line} />
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Scene>

      {/* 6 — FIVE MOVES. The plan; figure and text alternate sides, the
          ground cycles, each move ends on its result. */}
      <Scene id="moves" bg="bg-[#12100C]" className="!pb-0">
        <Container>
          <Head tone="bright">{L.moves.h2}</Head>
          <FadeIn delay={0.1} className="mx-auto mt-6 max-w-2xl text-center">
            <p className={`font-editorial text-xl italic leading-snug ${goldLight} md:text-2xl`}>{L.hero.plan}</p>
            <p className={`mt-4 text-lg leading-relaxed ${boneSofter}`}>{L.hero.lede}</p>
          </FadeIn>
        </Container>
      </Scene>
      {L.moves.items.map((m, i) => {
        const ground = grounds[i % 3];
        const mirrored = i % 2 === 1;
        return (
          <Scene key={m.n} id={`move-${m.n}`} bg={ground.bg} className="!py-16 md:!py-24">
            <Container>
              <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
                <FadeIn className={`${mirrored ? "md:order-2 md:col-span-4 md:col-start-9" : "md:col-span-4"}`}>
                  <Figure src={m.image} alt={m.imageAlt} ground={ground.hex} className="mx-auto max-w-[300px] md:max-w-none" />
                </FadeIn>
                <div className={`${mirrored ? "md:order-1 md:col-span-7" : "md:col-span-7 md:col-start-6"}`}>
                  <FadeIn>
                    <span className={`font-display text-6xl font-bold leading-none ${gold} opacity-70 md:text-7xl`}>{m.n}</span>
                    <h3 className={`mt-3 font-display font-bold uppercase leading-[1.06] ${bone}`} style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                      {m.title}
                    </h3>
                  </FadeIn>
                  <FadeIn delay={0.08} className="mt-6 space-y-4">
                    {m.body.map((p) => (
                      <p key={p} className={`text-[17px] leading-relaxed ${boneSoft} md:text-lg`}>{p}</p>
                    ))}
                  </FadeIn>
                  <FadeIn delay={0.14} className={`mt-7 border-t ${hairline} pt-5`}>
                    <p className={`font-display text-xs font-semibold uppercase tracking-[0.16em] ${goldLight}`}>{L.moves.resultLabel}</p>
                    <p className={`mt-2 font-editorial text-xl italic leading-snug ${bone} md:text-2xl`}>{m.result}</p>
                  </FadeIn>
                </div>
              </div>
            </Container>
          </Scene>
        );
      })}

      {/* 7 — HOW. The loop, then the room he is not alone in. */}
      <Scene id="how" bg="bg-[#0A0706]">
        <Container>
          <LeftHead>{L.how.h2}</LeftHead>
          <FadeIn delay={0.08} className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
            {L.how.format.map((step, i) => (
              <span key={step} className="flex items-center gap-4">
                <span className={`font-display text-lg font-bold uppercase leading-tight ${bone} md:text-xl`}>{step}</span>
                {i < L.how.format.length - 1 && <ArrowRight className={`size-5 ${goldLight}`} aria-hidden="true" />}
              </span>
            ))}
          </FadeIn>
          <FadeIn delay={0.12} className="mt-6 max-w-2xl">
            <p className={`text-lg leading-relaxed ${boneSofter}`}>{L.how.body}</p>
          </FadeIn>
          <FadeIn delay={0.18} className={`mt-12 max-w-2xl border-t ${hairline} pt-8`}>
            <p className={`font-display text-2xl font-bold uppercase leading-tight ${goldLight}`}>{L.how.communityTitle}</p>
            <p className={`mt-4 text-lg leading-relaxed ${boneSoft}`}>
              <Hit text={L.how.community} tone="bone" />
            </p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 8 — KING. What it means, and what he holds at day 90. */}
      <Scene id="king" bg="bg-[#12100C]">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <LeftHead>{L.king.h2}</LeftHead>
              <ul className="mt-8 space-y-3">
                {L.king.items.map((it) => (
                  <li key={it} className={`font-display text-xl font-bold uppercase leading-tight ${bone} md:text-2xl`}>{it}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <FadeIn delay={0.1}>
                <p className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>{L.king.handsLabel}</p>
                <ul className="mt-5">
                  {L.king.hands.map((h) => (
                    <li key={h} className={`flex gap-3 border-t ${hairline} py-3 text-[17px] leading-relaxed ${boneSoft} md:text-lg`}>
                      <span aria-hidden="true" className={goldLight}>—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.16} className={`mt-10 border-t ${hairline} pt-8`}>
                <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
                  <Hit text={L.king.line} />
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Scene>

      {/* 9 — IF NOTHING CHANGES. The failure beat, with the count. */}
      <Scene id="if-not" bg="bg-[#0A0706]">
        <Container>
          <div className="mx-auto max-w-2xl">
            <LeftHead>{L.ifNot.h2}</LeftHead>
            <FadeIn delay={0.1} className="mt-8 space-y-5">
              {L.ifNot.paras.map((p) => (
                <p key={p} className={`text-lg leading-relaxed ${boneSoft} md:text-xl`}>
                  <Hit text={p} tone="bone" />
                </p>
              ))}
            </FadeIn>
            <FadeIn delay={0.16} className="mt-10">
              <p className={`text-balance font-display font-bold uppercase leading-[1.12] ${bone}`} style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)" }}>
                {L.ifNot.line}
              </p>
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 10 — GUIDE. The man, before and after, the papers link. */}
      <Scene id="guide" bg="bg-[#12100C]">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <FadeIn>
                <div className={`relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-lg border ${hairline}`}>
                  <Image src={L.guide.portrait} alt={L.guide.portraitAlt} fill sizes="(max-width: 768px) 90vw, 33vw" className="object-cover object-top" />
                </div>
              </FadeIn>
              <FadeIn delay={0.1} className="mt-6 grid max-w-[340px] grid-cols-2 gap-3">
                {[L.guide.before, L.guide.after].map((f) => (
                  <figure key={f.label}>
                    <div className={`relative aspect-[4/3] overflow-hidden rounded-md border ${hairline}`}>
                      <Image src={f.image} alt={f.alt} fill sizes="170px" className="object-cover" />
                    </div>
                    <figcaption className={`mt-2 text-xs uppercase tracking-[0.12em] ${text2}`}>{f.label}</figcaption>
                  </figure>
                ))}
              </FadeIn>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <LeftHead>{L.guide.h2}</LeftHead>
              <FadeIn delay={0.08}>
                <p className={`mt-6 font-display text-2xl font-bold uppercase ${goldLight}`}>{L.guide.name}</p>
              </FadeIn>
              <FadeIn delay={0.12} className="mt-5 space-y-5">
                {L.guide.paras.map((p) => (
                  <p key={p} className={`text-[17px] leading-relaxed ${boneSoft} md:text-lg`}>
                    <Hit text={p} tone="bone" />
                  </p>
                ))}
              </FadeIn>
              <a href={L.guide.linkHref} className={`mt-6 inline-flex items-center gap-1 text-sm ${text2} underline underline-offset-4 hover:text-[#F3EEE5]`}>
                {L.guide.link} <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </Container>
      </Scene>

      {/* 11 — PROOF. The men, in their own words. */}
      <Scene id="proof" bg="bg-[#0A0706]">
        <Container>
          <Head tone="bright">{L.proof.h2}</Head>
          <FadeIn delay={0.08} className="mt-4 text-center">
            <p className={`font-editorial text-xl italic ${goldLight}`}>{L.proof.intro}</p>
          </FadeIn>
          <ProofGrid ids={L.proof.videos.map((v) => v.id)} />
          <ul className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-x-3 gap-y-1 sm:grid-cols-3 md:grid-cols-4">
            {L.proof.videos.map((v, i) => (
              <li key={v.id} className={`text-xs leading-snug ${text2}`}>
                {i + 1}. {v.title}
              </li>
            ))}
          </ul>
        </Container>
      </Scene>

      {/* 12 — PRICE. The anchor, the stack, the hour, the guarantee, the door. */}
      <Scene id="price" bg="bg-[#1E1A15]">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <LeftHead>{L.price.h2}</LeftHead>
              <FadeIn delay={0.08} className="mt-6">
                <p className={`text-[17px] leading-relaxed ${boneSofter}`}>{L.price.anchor}</p>
              </FadeIn>
              <FadeIn delay={0.12} className={`mt-8 border-t ${hairline} pt-6`}>
                <p className={`text-lg leading-relaxed ${boneSoft} md:text-xl`}>
                  <Hit text={L.price.priceLine} tone="bone" />
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <FadeIn delay={0.1}>
                <p className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>{L.price.stackLabel}</p>
                <ul className="mt-4">
                  {L.price.stack.map((s) => (
                    <li key={s} className={`flex gap-3 border-t ${hairline} py-3 text-[17px] leading-relaxed ${bone}`}>
                      <span aria-hidden="true" className={goldLight}>+</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.16} className={`mt-8 grid gap-8 border-t ${hairline} pt-8 sm:grid-cols-2`}>
                <div>
                  <p className={`font-display text-lg font-bold uppercase ${bone}`}>{L.price.effortTitle}</p>
                  <p className={`mt-2 text-[15px] leading-relaxed ${boneSofter}`}>{L.price.effort}</p>
                </div>
                <div>
                  <p className={`font-display text-lg font-bold uppercase ${bone}`}>{L.price.guaranteeTitle}</p>
                  <p className={`mt-2 text-[15px] leading-relaxed ${boneSofter}`}>
                    <Hit text={L.price.guarantee} tone="bone" />
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.22} className="mt-10">
                <Cta label={`${L.price.ctaLabel} — ${L.hero.price}`} href={checkout} id="price" track="king" />
                <p className={`mt-3 text-sm ${text2}`}>{L.hero.after}</p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Scene>

      {/* 13 — FIT. For whom, not for whom, the line. */}
      <Scene id="fit" bg="bg-[#0A0706]">
        <Container>
          <LeftHead>{L.fit.h2}</LeftHead>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>{L.fit.forTitle}</p>
              <p className={`mt-4 text-lg leading-relaxed ${bone}`}>{L.fit.forBody}</p>
            </div>
            <div>
              <p className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${text2}`}>{L.fit.notTitle}</p>
              <ul className="mt-4 space-y-3">
                {L.fit.notItems.map((it) => (
                  <li key={it} className={`flex gap-3 text-[17px] leading-relaxed ${text2}`}>
                    <span aria-hidden="true">—</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <p className={`mt-4 text-sm ${text2}`}>
                <a href={L.fit.notLinks.mentorship} className="underline underline-offset-4 hover:text-[#F3EEE5]">Личная работа</a>
                {" · "}
                <a href={L.fit.notLinks.reboot} className="underline underline-offset-4 hover:text-[#F3EEE5]">Перезагрузка</a>
              </p>
            </div>
          </div>
          <FadeIn delay={0.16} className="mt-14 text-center">
            <p className={`text-balance font-display font-bold uppercase leading-[1.14] ${bone}`} style={{ fontSize: "clamp(1.3rem, 2.6vw, 2rem)" }}>
              {L.fit.line}
            </p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 14 — FAQ. Only what stands between him and the button. */}
      <Scene id="faq" bg="bg-[#12100C]">
        <Container>
          <div className="mx-auto max-w-3xl">
            <LeftHead>{L.faq.h2}</LeftHead>
            <dl className="mt-8">
              {L.faq.items.map((f, i) => (
                <FadeIn key={f.q} delay={0.03 * i}>
                  <div className={`border-t ${hairline} py-5`}>
                    <dt className={`font-display text-lg font-bold uppercase leading-tight ${bone} md:text-xl`}>{f.q}</dt>
                    <dd className={`mt-2 text-[17px] leading-relaxed ${boneSofter}`}>{f.a}</dd>
                  </div>
                </FadeIn>
              ))}
            </dl>
          </div>
        </Container>
      </Scene>

      {/* 15 — FINAL. The door, the last loss line, the legal lines. */}
      <Scene id="final" bg="bg-[#0A0706]">
        <Container className="text-center">
          <FadeIn>
            <p className={`font-display text-sm font-semibold uppercase tracking-[0.2em] ${goldLight}`}>{L.final.pre}</p>
            <p className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed ${boneSoft} md:text-xl`}>{L.final.body}</p>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-12">
            <p className={`font-display text-sm font-semibold uppercase tracking-[0.2em] ${text2}`}>{L.final.name}</p>
            <p className={`mx-auto mt-3 max-w-lg text-balance font-display text-2xl font-bold uppercase leading-tight ${bone} md:text-3xl`}>{L.final.sub}</p>
          </FadeIn>
          <FadeIn delay={0.18} className="mt-10">
            <Cta label={`${L.final.ctaLabel} — ${L.hero.price}`} href={checkout} id="final" track="king" />
            <p className={`mt-4 text-sm ${text2}`}>{L.final.micro}</p>
          </FadeIn>
          <FadeIn delay={0.26} className="mx-auto mt-16 max-w-2xl">
            <p className={`text-balance font-display font-bold uppercase leading-[1.12] ${bone}`} style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)" }}>
              <Hit text={L.final.kicker} />
            </p>
          </FadeIn>
          <FadeIn delay={0.34} className={`mx-auto mt-16 max-w-xl space-y-3 border-t ${hairline} pt-8 text-left`}>
            {L.legal.map((n) => (
              <Disclaimer key={n}>{n}</Disclaimer>
            ))}
          </FadeIn>
        </Container>
      </Scene>
    </>
  );
}
