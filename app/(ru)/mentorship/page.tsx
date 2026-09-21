import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { BackLink } from "@/components/ui/BackLink";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { CredentialsGallery } from "@/components/about/CredentialsGallery";
import { Scene, Head, Disclaimer, bone, boneSoft, boneSofter, text2, gold, goldLight, hairline } from "@/components/forge/primitives";
import { Hit } from "@/components/reboot/Hit";
import { Cta } from "@/components/mentorship/Cta";
import { SelfCheck } from "@/components/mentorship/SelfCheck";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";
import { BOOK, CREDENTIALS } from "@/lib/content";
import { MENTORSHIP_OFFER as M } from "@/lib/content.mentorship";

export const metadata: Metadata = {
  title: M.meta.title,
  description: M.meta.description,
  alternates: { canonical: "/mentorship" },
};

// Only the practice certificates belong on the offer page; the sports and
// management diplomas stay on /about with the biography.
const PRACTICE_CREDENTIALS = CREDENTIALS.filter((c) => c.src.includes("/c-"));

// Until the WayForPay button for the $100 session exists every door leads to
// Telegram; the micro line under the button says so honestly.
const checkout = M.hero.checkoutUrl || KUZNYA_TELEGRAM_URL;
const applyMicro = M.hero.checkoutUrl ? M.apply.micro : M.apply.fallbackMicro;

const h2Style = { fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)", letterSpacing: "-0.005em" } as const;

/** A left-aligned section head: the gold rule, then the headline. */
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
 * «Работа со мной». The reader is a person whose business, family and self
 * are coming apart — so the page starts by naming that, hands him the mirror
 * (the self-check), explains where the thing that holds him lives, and only
 * then shows the system, the price of doing nothing, the cases and the man.
 * «Ты», not «вы»: this reader is being talked to as an equal, not sold to.
 */
export default function MentorshipPage() {
  return (
    <>
      <div data-page-theme="forge" hidden />
      <ScrollProgress />

      {/* 1 — HERO. Portrait beside the claim; never text over the face. */}
      <Scene id="hero" bg="bg-[#0A0706]" bare clip={false} className="flex min-h-[100svh] items-center pb-16 pt-28 md:pt-24">
        <Container>
          <div className="mb-8">
            <BackLink dark fallbackHref="/about" label="Обо мне" />
          </div>
          <div className="grid items-center gap-10 md:grid-cols-12 md:gap-10">
            <FadeIn className="md:col-span-4">
              <div className={`relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-lg border ${hairline} md:max-w-none`}>
                <Image
                  src="/images/hero-portrait-2.png"
                  alt={BOOK.author}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 33vw"
                  className="photo-bw object-cover object-[50%_15%]"
                />
              </div>
            </FadeIn>
            <div className="md:col-span-8 md:pl-6">
              <FadeIn>
                <h1
                  className={`text-balance font-display font-bold uppercase leading-[1.04] ${bone}`}
                  style={{ fontSize: "clamp(1.9rem, 3.9vw, 3.1rem)", letterSpacing: "-0.01em" }}
                >
                  {M.hero.h1}
                  <br />
                  <span className={goldLight}>{M.hero.h1b}</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.12} className="mt-6 max-w-2xl">
                <p className={`text-lg leading-relaxed ${boneSoft} md:text-xl`}>
                  <Hit text={M.hero.lede} tone="bone" />
                </p>
              </FadeIn>
              <FadeIn delay={0.2} className="mt-5 max-w-2xl space-y-4">
                {M.hero.paras.map((p) => (
                  <p key={p} className={`text-[17px] leading-relaxed ${boneSofter} md:text-lg`}>
                    <Hit text={p} tone="bone" />
                  </p>
                ))}
              </FadeIn>
              <FadeIn delay={0.28} className="mt-8">
                <Cta label={M.hero.ctaLabel} href={checkout} id="hero" />
                <p className={`mt-3 text-sm ${text2}`}>{applyMicro}</p>
              </FadeIn>
              <FadeIn delay={0.36} className={`mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t ${hairline} pt-6`}>
                {M.hero.stats.map((s) => (
                  <div key={s.label}>
                    <span className={`block font-display text-3xl font-bold leading-none ${goldLight} md:text-4xl`}>{s.n}</span>
                    <span className={`mt-1 block text-xs uppercase tracking-[0.14em] ${text2}`}>{s.label}</span>
                  </div>
                ))}
              </FadeIn>
            </div>
          </div>
        </Container>
      </Scene>

      {/* 2 — SELF-CHECK. The mirror before any argument. */}
      <Scene id="check" bg="bg-[#12100C]">
        <Container>
          <LeftHead>{M.check.h2}</LeftHead>
          <FadeIn delay={0.08}>
            <p className={`mt-4 font-editorial text-2xl italic ${goldLight} md:text-3xl`}>{M.check.lead}</p>
          </FadeIn>
          <div className="mt-12">
            <SelfCheck
              items={M.check.items}
              verdict={M.check.verdict}
              ctaLabel={M.check.ctaLabel}
              micro={M.check.micro}
              messagePrefix={M.check.messagePrefix}
              href={checkout}
            />
          </div>
        </Container>
      </Scene>

      {/* 3 — INSIDE. Where the thing that holds him actually lives. */}
      <Scene id="inside" bg="bg-[#0A0706]">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <FadeIn className="md:sticky md:top-28">
                <span aria-hidden="true" className="block h-[3px] w-16 bg-[#B8873B]" />
                <h2 className={`mt-5 text-balance font-display font-bold uppercase leading-[1.08] ${bone}`} style={h2Style}>
                  {M.inside.h2}
                </h2>
                <p className={`mt-6 text-lg leading-relaxed ${boneSoft} md:text-xl`}>
                  <Hit text={M.inside.lede} tone="bone" />
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              {M.inside.blocks.map((b, i) => (
                <FadeIn key={b.title} delay={0.06 * i}>
                  <div className={`border-t ${hairline} py-7 first:border-t-0 first:pt-0`}>
                    <p className={`font-display text-2xl font-bold uppercase leading-tight ${goldLight}`}>{b.title}</p>
                    <p className={`mt-3 text-[17px] leading-relaxed ${boneSofter} md:text-lg`}>{b.body}</p>
                  </div>
                </FadeIn>
              ))}
              <FadeIn delay={0.2} className={`border-t ${hairline} pt-8`}>
                <p className={`text-lg leading-relaxed ${boneSoft} md:text-xl`}>
                  <Hit text={M.inside.closing} tone="bone" />
                </p>
                <p className={`mt-6 text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>{M.inside.promise}</p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Scene>

      {/* 4 — TRIED. What he has already paid for, and why it slid back. */}
      <Scene id="tried" bg="bg-[#12100C]">
        <Container>
          <div className="mx-auto max-w-3xl">
            <LeftHead>{M.tried.h2}</LeftHead>
            <FadeIn delay={0.08}>
              <p className={`mt-4 font-editorial text-2xl italic ${goldLight} md:text-3xl`}>{M.tried.lead}</p>
            </FadeIn>
            <ul className="mt-10">
              {M.tried.items.map((t, i) => (
                <FadeIn key={t.name} delay={0.05 * i}>
                  <li className={`grid gap-1 border-t ${hairline} py-5 md:grid-cols-12 md:gap-6`}>
                    <p className={`font-display text-xl font-bold uppercase leading-tight ${bone} md:col-span-4`}>{t.name}</p>
                    <p className={`text-[17px] leading-relaxed ${boneSofter} md:col-span-8 md:text-lg`}>{t.body}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>
            <FadeIn delay={0.2} className={`mt-10 border-t ${hairline} pt-8`}>
              <p className={`text-lg leading-relaxed ${text2} md:text-xl`}>{M.tried.result}</p>
              <p className={`mt-6 text-lg leading-relaxed ${boneSoft} md:text-xl`}>
                <Hit text={M.tried.turn} tone="bone" />
              </p>
            </FadeIn>
          </div>
        </Container>
      </Scene>

      {/* 5 — SYSTEM. Three levels and the resource, under «мы не лечим». */}
      <Scene id="system" bg="bg-[#0A0706]">
        <Container>
          <Head tone="bright">{M.system.h2}</Head>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-2xl text-center">
            <p className={`text-lg leading-relaxed ${boneSofter}`}>{M.system.lede}</p>
            <p className={`mt-6 text-lg leading-relaxed ${boneSoft} md:text-xl`}>
              <Hit text={M.system.notCure} tone="bone" />
            </p>
          </FadeIn>
          <div className="mx-auto mt-14 grid max-w-5xl gap-x-12 gap-y-10 md:grid-cols-2">
            {M.system.levels.map((l, i) => (
              <FadeIn key={l.title} delay={0.06 * i}>
                <div className={`border-t ${hairline} pt-5`}>
                  <p className={`font-display text-2xl font-bold uppercase leading-tight ${goldLight}`}>{l.title}</p>
                  <p className={`mt-3 text-[17px] leading-relaxed ${boneSofter} md:text-lg`}>{l.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2} className="mx-auto mt-14 max-w-2xl text-center">
            <p className={`text-balance font-display font-bold uppercase leading-[1.14] ${bone}`} style={{ fontSize: "clamp(1.3rem, 2.6vw, 2rem)" }}>
              <Hit text={M.system.closing} />
            </p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 6 — HOW. Three steps; the price once. */}
      <Scene id="how" bg="bg-[#12100C]">
        <Container>
          <LeftHead>{M.how.h2}</LeftHead>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {M.how.steps.map((s, i) => (
              <FadeIn key={s.title} delay={0.08 * i}>
                <span className={`font-display text-5xl font-bold leading-none ${gold} opacity-60`}>{String(i + 1).padStart(2, "0")}</span>
                <p className={`mt-4 font-display text-xl font-bold uppercase leading-tight ${bone}`}>{s.title}</p>
                <p className={`mt-3 text-[17px] leading-relaxed ${boneSofter}`}>{s.body}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.26} className="mt-12">
            <Cta label={M.hero.ctaLabel} href={checkout} id="how" />
            <p className={`mt-3 text-sm ${text2}`}>{applyMicro}</p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 7 — IF NOTHING CHANGES. The cost of waiting, in four lines. */}
      <Scene id="if-not" bg="bg-[#0A0706]">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <FadeIn className="md:sticky md:top-28">
                <span aria-hidden="true" className="block h-[3px] w-16 bg-[#B8873B]" />
                <h2 className={`mt-5 text-balance font-display font-bold uppercase leading-[1.08] ${bone}`} style={h2Style}>
                  {M.ifNot.h2}
                </h2>
                <p className={`mt-6 text-lg leading-relaxed ${boneSofter}`}>{M.ifNot.lead}</p>
              </FadeIn>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <ul>
                {M.ifNot.items.map((it, i) => (
                  <FadeIn key={it.title} delay={0.05 * i}>
                    <li className={`border-t ${hairline} py-5`}>
                      <p className={`font-display text-xl font-bold uppercase leading-tight ${bone} md:text-2xl`}>{it.title}</p>
                      <p className={`mt-2 text-[17px] leading-relaxed ${boneSofter}`}>{it.body}</p>
                    </li>
                  </FadeIn>
                ))}
              </ul>
              <FadeIn delay={0.24} className={`border-t ${hairline} pt-8`}>
                <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
                  <Hit text={M.ifNot.closing} />
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Scene>

      {/* 8 — CASES. Two, anonymised, each with the mechanism. */}
      <Scene id="cases" bg="bg-[#12100C]">
        <Container>
          <LeftHead>{M.cases.h2}</LeftHead>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
            {M.cases.items.map((c, i) => (
              <FadeIn key={c.title} delay={0.08 * i}>
                <div className={`h-full border-t ${hairline} pt-6`}>
                  <p className={`font-display text-xl font-bold uppercase leading-tight ${goldLight} md:text-2xl`}>{c.title}</p>
                  <p className={`mt-4 text-[17px] leading-relaxed ${boneSofter} md:text-lg`}>{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className={`mt-8 text-sm ${text2}`}>{M.cases.note}</p>
        </Container>
      </Scene>

      {/* 9 — FIRST PATIENT. The man, then the papers. */}
      <Scene id="first" bg="bg-[#0A0706]">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <FadeIn className="md:col-span-4">
              <div className={`relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-lg border ${hairline}`}>
                <Image src="/images/author-portrait-red.jpg" alt={BOOK.author} fill sizes="(max-width: 768px) 90vw, 33vw" className="object-cover object-top" />
              </div>
            </FadeIn>
            <div className="md:col-span-7 md:col-start-6">
              <LeftHead>{M.first.h2}</LeftHead>
              <FadeIn delay={0.1} className="mt-8 space-y-5">
                {M.first.paras.map((p) => (
                  <p key={p} className={`text-[17px] leading-relaxed ${boneSoft} md:text-lg`}>
                    <Hit text={p} tone="bone" />
                  </p>
                ))}
              </FadeIn>
              <FadeIn delay={0.16} className={`mt-10 border-t ${hairline} pt-8`}>
                <p className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>{M.first.docsLabel}</p>
                <ul className="mt-4 space-y-2">
                  {M.first.docs.map((d) => (
                    <li key={d} className={`flex gap-3 text-[15px] leading-relaxed ${boneSofter}`}>
                      <span aria-hidden="true" className={goldLight}>—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <a href="/about" className={`mt-5 inline-flex items-center gap-1 text-sm ${text2} underline underline-offset-4 hover:text-[#F3EEE5]`}>
                  {M.first.link} <ArrowRight className="size-3.5" />
                </a>
              </FadeIn>
            </div>
          </div>
          <div className="mt-14">
            <p className={`text-sm ${text2}`}>{M.first.docsHint}</p>
            <CredentialsGallery items={PRACTICE_CREDENTIALS} />
          </div>
        </Container>
      </Scene>

      {/* 10 — FILTER. Who this is for, who it is not, and why so few. */}
      <Scene id="filter" bg="bg-[#12100C]">
        <Container>
          <LeftHead>{M.filter.h2}</LeftHead>
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>{M.filter.forTitle}</p>
              <ul className="mt-5 space-y-4">
                {M.filter.forItems.map((item) => (
                  <li key={item} className={`flex items-start gap-3 text-lg leading-relaxed ${bone}`}>
                    <span aria-hidden="true" className={`mt-[2px] ${goldLight}`}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${text2}`}>{M.filter.notTitle}</p>
              <ul className="mt-5 space-y-4">
                {M.filter.notItems.map((item) => (
                  <li key={item} className={`flex items-start gap-3 text-lg leading-relaxed ${text2}`}>
                    <span aria-hidden="true" className="mt-[2px]">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <FadeIn delay={0.16} className={`mt-14 max-w-2xl border-t ${hairline} pt-8`}>
            <p className={`font-display text-2xl font-bold uppercase leading-tight ${bone}`}>{M.filter.few.title}</p>
            <p className={`mt-3 text-[17px] leading-relaxed ${boneSofter} md:text-lg`}>{M.filter.few.body}</p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 11 — FAQ. The seven questions asked before paying. */}
      <Scene id="faq" bg="bg-[#0A0706]">
        <Container>
          <div className="mx-auto max-w-3xl">
            <LeftHead>{M.faq.h2}</LeftHead>
            <dl className="mt-10">
              {M.faq.items.map((f, i) => (
                <FadeIn key={f.q} delay={0.04 * i}>
                  <div className={`border-t ${hairline} py-6`}>
                    <dt className={`font-display text-xl font-bold uppercase leading-tight ${bone}`}>{f.q}</dt>
                    <dd className={`mt-3 text-[17px] leading-relaxed ${boneSofter}`}>{f.a}</dd>
                  </div>
                </FadeIn>
              ))}
            </dl>
          </div>
        </Container>
      </Scene>

      {/* 12 — APPLY. The door, the honest scarcity, the legal lines. */}
      <Scene id="apply" bg="bg-[#12100C]">
        <Container className="text-center">
          <Head tone="bright">{M.apply.h2}</Head>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className={`text-lg leading-relaxed ${boneSoft} md:text-xl`}>
              <Hit text={M.apply.body} tone="bone" />
            </p>
            <p className={`mt-6 font-editorial text-2xl italic leading-snug ${goldLight}`}>{M.apply.scarcity}</p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-10">
            <Cta label={M.apply.ctaLabel} href={checkout} id="apply" />
            <p className={`mt-4 text-sm ${text2}`}>{applyMicro}</p>
          </FadeIn>
          <FadeIn delay={0.3} className={`mx-auto mt-16 max-w-xl space-y-3 border-t ${hairline} pt-8 text-left`}>
            {M.apply.legal.map((note) => (
              <Disclaimer key={note}>{note}</Disclaimer>
            ))}
          </FadeIn>
        </Container>
      </Scene>
    </>
  );
}
