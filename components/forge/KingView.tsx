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

/**
 * «Кузня силы — Из пешки в короля», the front page. Miller's wireframe, kept
 * short: the offer → the three pains → why he is stuck → the five moves on
 * ONE screen → what he gets, concretely → the guide and the men → the price
 * → the two roads → the junk drawer → the door. Ten screens; the system is
 * visible at a glance, and loss is the one thread from the first line to
 * the last.
 */
export function KingView({ L }: { L: Content }) {
  const checkout = L.hero.checkoutUrl || KUZNYA_TELEGRAM_URL;

  return (
    <>
      <div data-page-theme="forge" hidden />
      <ScrollProgress />
      <StickyRebootCTA label={`${L.hero.ctaLabel} — ${L.hero.price}`} href={checkout} track="king" />

      {/* 1 — HERO. What, for whom, the result, the action. */}
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
            <FadeIn delay={0.2} className="mx-auto mt-6 max-w-2xl">
              <p className={`text-lg leading-relaxed ${boneSoft}`}>{L.hero.lede}</p>
              <p className={`mt-4 font-editorial text-xl italic leading-snug ${goldLight} md:text-2xl`}>{L.hero.plan}</p>
            </FadeIn>
            <FadeIn delay={0.28} className="mt-8">
              <Cta label={`${L.hero.ctaLabel} — ${L.hero.price}`} href={checkout} id="hero" track="king" />
              <p className={`mt-4 text-sm ${text2}`}>{L.hero.after}</p>
              <p className={`mt-2 text-xs uppercase tracking-[0.12em] ${text2}`}>{L.hero.micro}</p>
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 2 — PROBLEM. Three pains; the loss under each. */}
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
          <FadeIn delay={0.3} className="mx-auto mt-16 max-w-2xl text-center">
            <p className={`text-[17px] leading-relaxed ${boneSofter} md:text-lg`}>
              <Hit text={L.hero.loss} tone="bone" />
            </p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 3 — WHY. Stone pawn in threads; three paragraphs, the method line. */}
      <Scene id="why" bg="bg-[#0A0706]">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
            <FadeIn className="md:col-span-4">
              <div className="relative mx-auto aspect-[4/5] max-w-[320px] overflow-hidden rounded-lg md:max-w-none">
                <Image src={L.why.image} alt={L.why.imageAlt} fill sizes="(max-width: 768px) 80vw, 33vw" className="object-cover" />
                <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0A070633 0%, #0A070600 25%, #0A070600 65%, #0A0706CC 100%)" }} />
              </div>
            </FadeIn>
            <div className="md:col-span-7 md:col-start-6">
              <LeftHead>{L.why.h2}</LeftHead>
              <FadeIn delay={0.1} className="mt-8 space-y-5">
                {L.why.paras.map((p) => (
                  <p key={p} className={`text-[17px] leading-relaxed ${boneSoft} md:text-lg`}>
                    <Hit text={p} tone="bone" />
                  </p>
                ))}
              </FadeIn>
            </div>
          </div>
        </Container>
      </Scene>

      {/* 4 — PLAN. The five moves on one screen: number, title, do, get. */}
      <Scene id="moves" bg="bg-[#12100C]">
        <Container>
          <Head tone="bright">{L.moves.h2}</Head>
          <FadeIn delay={0.08} className="mx-auto mt-5 max-w-2xl text-center">
            <p className={`text-lg leading-relaxed ${boneSofter}`}>{L.moves.lede}</p>
          </FadeIn>
          <ol className="mx-auto mt-12 max-w-5xl">
            {L.moves.items.map((m, i) => (
              <FadeIn key={m.n} delay={0.05 * i}>
                <li className={`grid gap-4 border-t ${hairline} py-7 md:grid-cols-12 md:gap-8`}>
                  <div className="flex items-start gap-4 md:col-span-4 md:gap-5">
                    <div className="relative hidden size-16 shrink-0 overflow-hidden rounded-md md:block">
                      <Image src={m.image} alt="" fill sizes="64px" className="object-cover" />
                    </div>
                    <div>
                      <span className={`font-display text-sm font-bold uppercase tracking-[0.16em] ${goldLight}`}>Ход {parseInt(m.n, 10)}</span>
                      <h3 className={`mt-1 font-display text-2xl font-bold uppercase leading-tight ${bone}`}>{m.title}</h3>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <p className={`font-display text-xs font-semibold uppercase tracking-[0.16em] ${text2}`}>{L.moves.doLabel}</p>
                    <p className={`mt-2 text-[16px] leading-relaxed ${boneSofter}`}>{m.do}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className={`font-display text-xs font-semibold uppercase tracking-[0.16em] ${goldLight}`}>{L.moves.resultLabel}</p>
                    <p className={`mt-2 text-[17px] font-semibold leading-relaxed ${bone}`}>{m.result}</p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
          <FadeIn delay={0.3} className={`mx-auto mt-10 max-w-5xl border-t ${hairline} pt-8`}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className={`font-display text-xs font-semibold uppercase tracking-[0.16em] ${text2}`}>Каждую неделю</span>
              {L.how.format.map((step, i) => (
                <span key={step} className="flex items-center gap-4">
                  <span className={`font-display text-base font-bold uppercase leading-tight ${bone} md:text-lg`}>{step}</span>
                  {i < L.how.format.length - 1 && <ArrowRight className={`size-4 ${goldLight}`} aria-hidden="true" />}
                </span>
              ))}
            </div>
            <p className={`mt-4 max-w-2xl text-[16px] leading-relaxed ${boneSofter}`}>
              <Hit text={L.how.community} tone="bone" />
            </p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 5 — WHAT HE GETS. Three columns, concrete; then what is in his hands at day 90. */}
      <Scene id="get" bg="bg-[#0A0706]">
        <Container>
          <LeftHead>{L.get.h2}</LeftHead>
          <FadeIn delay={0.06}>
            <p className={`mt-4 font-editorial text-xl italic ${goldLight}`}>{L.get.lede}</p>
          </FadeIn>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-10">
            {L.get.groups.map((g, i) => (
              <FadeIn key={g.title} delay={0.08 * i}>
                <p className={`font-display text-2xl font-bold uppercase leading-tight ${goldLight}`}>{g.title}</p>
                <ul className="mt-4">
                  {g.items.map((it) => (
                    <li key={it} className={`flex gap-3 border-t ${hairline} py-3 text-[16px] leading-relaxed ${bone}`}>
                      <span aria-hidden="true" className={goldLight}>+</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.24} className={`mt-14 border-t ${hairline} pt-8`}>
            <p className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>{L.get.handsLabel}</p>
            <ul className="mt-4 grid gap-x-10 gap-y-2 md:grid-cols-2">
              {L.king.hands.map((h) => (
                <li key={h} className={`flex gap-3 text-[17px] leading-relaxed ${boneSoft}`}>
                  <span aria-hidden="true" className={goldLight}>—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-8 max-w-2xl text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
              <Hit text={L.king.line} />
            </p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 6 — GUIDE + PROOF. The man in five lines; the men in their own words. */}
      <Scene id="guide" bg="bg-[#12100C]">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <FadeIn className="md:col-span-4">
              <div className={`relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-lg border ${hairline}`}>
                <Image src={L.guide.portrait} alt={L.guide.portraitAlt} fill sizes="(max-width: 768px) 80vw, 33vw" className="object-cover object-top" />
              </div>
              <div className="mt-4 grid max-w-[320px] grid-cols-2 gap-3">
                {[L.guide.before, L.guide.after].map((f) => (
                  <figure key={f.label}>
                    <div className={`relative aspect-[4/3] overflow-hidden rounded-md border ${hairline}`}>
                      <Image src={f.image} alt={f.alt} fill sizes="160px" className="object-cover" />
                    </div>
                    <figcaption className={`mt-2 text-xs uppercase tracking-[0.12em] ${text2}`}>{f.label}</figcaption>
                  </figure>
                ))}
              </div>
            </FadeIn>
            <div className="md:col-span-7 md:col-start-6">
              <LeftHead>{L.guide.h2}</LeftHead>
              <FadeIn delay={0.08}>
                <p className={`mt-6 font-display text-2xl font-bold uppercase ${goldLight}`}>{L.guide.name}</p>
              </FadeIn>
              <FadeIn delay={0.12} className="mt-5 space-y-4">
                {L.guide.paras.map((p) => (
                  <p key={p} className={`text-[17px] leading-relaxed ${boneSoft}`}>
                    <Hit text={p} tone="bone" />
                  </p>
                ))}
              </FadeIn>
              <a href={L.guide.linkHref} className={`mt-5 inline-flex items-center gap-1 text-sm ${text2} underline underline-offset-4 hover:text-[#F3EEE5]`}>
                {L.guide.link} <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
          <div className={`mt-20 border-t ${hairline} pt-14`}>
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
          </div>
        </Container>
      </Scene>

      {/* 7 — PRICE. Anchor, the number, the hour, the guarantee, the door. */}
      <Scene id="price" bg="bg-[#1E1A15]">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <LeftHead>{L.price.h2}</LeftHead>
              <FadeIn delay={0.08} className="mt-6">
                <p className={`text-[17px] leading-relaxed ${boneSofter}`}>{L.price.anchor}</p>
              </FadeIn>
              <FadeIn delay={0.12} className={`mt-8 border-t ${hairline} pt-6`}>
                <p className={`font-display text-5xl font-bold leading-none ${goldLight} md:text-6xl`}>{L.hero.price}</p>
                <p className={`mt-3 text-lg leading-relaxed ${boneSoft} md:text-xl`}>
                  <Hit text={L.price.priceLine} tone="bone" />
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <FadeIn delay={0.1}>
                <p className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>{L.price.stackLabel}</p>
                <ul className="mt-3">
                  {L.price.stack.map((s) => (
                    <li key={s} className={`flex gap-3 border-t ${hairline} py-2.5 text-[15px] leading-relaxed ${bone}`}>
                      <span aria-hidden="true" className={goldLight}>+</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.16} className={`mt-6 space-y-5 border-t ${hairline} pt-6`}>
                <div>
                  <p className={`font-display text-base font-bold uppercase ${bone}`}>{L.price.effortTitle}</p>
                  <p className={`mt-1 text-[15px] leading-relaxed ${boneSofter}`}>{L.price.effort}</p>
                </div>
                <div>
                  <p className={`font-display text-base font-bold uppercase ${bone}`}>{L.price.guaranteeTitle}</p>
                  <p className={`mt-1 text-[15px] leading-relaxed ${boneSofter}`}>
                    <Hit text={L.price.guarantee} tone="bone" />
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.22} className="mt-8">
                <Cta label={`${L.price.ctaLabel} — ${L.hero.price}`} href={checkout} id="price" track="king" />
                <p className={`mt-3 text-sm ${text2}`}>{L.hero.after}</p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Scene>

      {/* 8 — TWO ROADS. Failure beside success. */}
      <Scene id="contrast" bg="bg-[#0A0706]">
        <Container>
          <Head tone="bright">{L.contrast.h2}</Head>
          <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2 md:gap-16">
            <FadeIn>
              <p className={`font-display text-xl font-bold uppercase leading-tight ${text2}`}>{L.contrast.leaveTitle}</p>
              <ul className="mt-5 space-y-3">
                {L.contrast.leave.map((it) => (
                  <li key={it} className={`flex gap-3 text-[17px] leading-relaxed ${text2}`}>
                    <span aria-hidden="true">—</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className={`font-display text-xl font-bold uppercase leading-tight ${goldLight}`}>{L.contrast.moveTitle}</p>
              <ul className="mt-5 space-y-3">
                {L.contrast.move.map((it) => (
                  <li key={it} className={`flex gap-3 text-[17px] leading-relaxed ${bone}`}>
                    <span aria-hidden="true" className={goldLight}>+</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="mx-auto mt-14 max-w-2xl text-center">
            <p className={`text-balance font-display font-bold uppercase leading-[1.12] ${bone}`} style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)" }}>
              <Hit text={L.contrast.line} />
            </p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 9 — JUNK DRAWER. Not for whom; the questions. */}
      <Scene id="faq" bg="bg-[#12100C]">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <LeftHead>{L.fit.h2}</LeftHead>
              <p className={`mt-6 font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>{L.fit.forTitle}</p>
              <p className={`mt-3 text-[17px] leading-relaxed ${bone}`}>{L.fit.forBody}</p>
              <p className={`mt-6 font-display text-sm font-semibold uppercase tracking-[0.16em] ${text2}`}>{L.fit.notTitle}</p>
              <ul className="mt-3 space-y-2">
                {L.fit.notItems.map((it) => (
                  <li key={it} className={`flex gap-3 text-[16px] leading-relaxed ${text2}`}>
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
            <div className="md:col-span-6 md:col-start-7">
              <LeftHead>{L.faq.h2}</LeftHead>
              <dl className="mt-6">
                {L.faq.items.map((f) => (
                  <div key={f.q} className={`border-t ${hairline} py-4`}>
                    <dt className={`font-display text-lg font-bold uppercase leading-tight ${bone}`}>{f.q}</dt>
                    <dd className={`mt-1.5 text-[16px] leading-relaxed ${boneSofter}`}>{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Scene>

      {/* 10 — FINAL. The door and the last line. */}
      <Scene id="final" bg="bg-[#0A0706]">
        <Container className="text-center">
          <FadeIn>
            <p className={`font-display text-sm font-semibold uppercase tracking-[0.2em] ${goldLight}`}>{L.final.pre}</p>
            <p className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed ${boneSoft} md:text-xl`}>{L.final.body}</p>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <p className={`mx-auto max-w-lg text-balance font-display text-2xl font-bold uppercase leading-tight ${bone} md:text-3xl`}>{L.final.sub}</p>
          </FadeIn>
          <FadeIn delay={0.18} className="mt-8">
            <Cta label={`${L.final.ctaLabel} — ${L.hero.price}`} href={checkout} id="final" track="king" />
            <p className={`mt-4 text-sm ${text2}`}>{L.final.micro}</p>
          </FadeIn>
          <FadeIn delay={0.26} className="mx-auto mt-14 max-w-2xl">
            <p className={`text-balance font-display font-bold uppercase leading-[1.12] ${gold}`} style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}>
              <Hit text={L.final.kicker} />
            </p>
          </FadeIn>
          <FadeIn delay={0.34} className={`mx-auto mt-14 max-w-xl space-y-3 border-t ${hairline} pt-8 text-left`}>
            {L.legal.map((n) => (
              <Disclaimer key={n}>{n}</Disclaimer>
            ))}
          </FadeIn>
        </Container>
      </Scene>
    </>
  );
}
