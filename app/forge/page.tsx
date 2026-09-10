import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { StickyForgeCTA } from "@/components/forge/StickyForgeCTA";
import { ProofGrid } from "@/components/forge/ProofGrid";
import { KUZNYA_LANDING } from "@/lib/content";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";

const L = KUZNYA_LANDING;

export const metadata: Metadata = {
  title: L.meta.title,
  description: L.meta.description,
  alternates: { canonical: "/forge" },
};

// -----------------------------------------------------------------------
// Palette — Maksim's owner-specified dark set, kept as literal Tailwind
// arbitrary-value strings (not template-interpolated) so the JIT scanner can
// find them. Do not swap these for CSS variables/theme tokens: this page is
// intentionally scoped to app/forge/page.tsx only, per the brief, and must
// not require touching tailwind.config.ts or globals.css.
//
// Every background here carries a warm undertone deliberately. The previous
// set was pure neutral — #070707 and #101010 measured 0% saturation, #1B1B1D
// 4% — and that flatness, not the layout, was what made the page read cheap.
// These sit at 25/20/18% in the soot-and-scale direction, which doubles as the
// Кузня (forge) association, so the whole set reads as one family.
//
//   #0A0706  void      — base background, warm soot        17.4:1 vs bone
//   #12100C  panel     — secondary background
//   #1E1A15  graphite  — card/section surfaces, warm
//   #2B0E11  bordo     — fill only, never text
//   #8E1B22  fire      — fill/border/glow only — 2.2:1 as text, fails WCAG
//   #B8873B  gold      — antique brass, accent text         6.3:1 vs void
//   #E0C078  goldLight — accent text / CTA fill            11.5:1 vs void
//   #F3EEE5  bone      — primary text, warm white
//   #A9A199  text2     — secondary text                     7.9:1 vs void
//   rgba(224,192,120,.24) — hairline borders throughout
//
// Contrast pairs were computed, not eyeballed. Bone on a fire fill = 7.8:1;
// the brass CTA keeps dark text, since light text on brass would fail.
//
// Design idea: the lower the section, the closer to gold — early sections
// lean stone/void/fire, later sections lean graphite/gold, and the final
// screen is dominated by the gold king art breaking the container edge.
// -----------------------------------------------------------------------

const bone = "text-[#F3EEE5]";
// Tailwind's class scanner reads raw source text, not evaluated JS — an
// opacity modifier built via template-literal concatenation (e.g. `${bone}/90`)
// would never appear as one literal token, so it silently wouldn't compile.
// These are their own full literal strings instead.
const boneSoft = "text-[#F3EEE5]/90";
const boneSofter = "text-[#F3EEE5]/80";
const text2 = "text-[#A9A199]";
const gold = "text-[#B8873B]";
const goldLight = "text-[#E0C078]";
const hairline = "border-[rgba(224,192,120,0.24)]";

function Scene({
  id,
  bg,
  className = "",
  bare = false,
  clip = true,
  children,
}: {
  id: string;
  bg: string;
  className?: string;
  bare?: boolean;
  clip?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative ${clip ? "overflow-hidden" : ""} ${bg} ${bone} ${
        bare ? "" : "py-20 md:py-32"
      } ${className}`}
    >
      <div className="grain-overlay z-[1]" aria-hidden="true" />
      {children}
    </section>
  );
}

// `tone="mid"` (default) reads #B8873B, `tone="bright"` reads #E0C078 — the
// page moves from the dimmer gold to the brighter one starting at the plan
// (steps), so the accent itself gets closer to gold as you scroll, same idea
// as the artwork and the step-marker tones below.
function Head({
  label,
  tone = "mid",
  children,
}: {
  label?: string;
  tone?: "mid" | "bright";
  children: ReactNode;
}) {
  const accent = tone === "bright" ? goldLight : gold;
  const ruleBg = tone === "bright" ? "bg-[#E0C078]" : "bg-[#B8873B]";
  return (
    <FadeIn className="flex flex-col items-center text-center">
      <span aria-hidden="true" className={`h-[3px] w-16 ${ruleBg}`} />
      {label && (
        <p className={`mt-5 font-display text-sm font-semibold uppercase tracking-[0.16em] ${accent}`}>{label}</p>
      )}
      <h2
        className={`mt-4 max-w-3xl text-balance font-display font-bold uppercase leading-[1.08] ${bone}`}
        style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.9rem)", letterSpacing: "-0.005em" }}
      >
        {children}
      </h2>
    </FadeIn>
  );
}

function BigLine({ children }: { children: ReactNode }) {
  return (
    <p
      className={`text-balance font-display font-bold uppercase leading-[1.14] ${bone}`}
      style={{ fontSize: "clamp(1.4rem, 2.9vw, 2.3rem)" }}
    >
      {children}
    </p>
  );
}

function ChipList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border ${hairline} px-3.5 py-1.5 text-sm leading-relaxed ${text2}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <p className={`mx-auto mt-8 max-w-lg text-balance border-t ${hairline} pt-6 text-xs leading-relaxed ${text2}`}>
      {children}
    </p>
  );
}

function GuaranteeBox({ children }: { children: ReactNode }) {
  return (
    <div
      className={`mx-auto max-w-md rounded-2xl border border-[rgba(224,192,120,0.45)] bg-[#1E1A15] px-6 py-5 text-center`}
    >
      <p className={`font-display text-sm font-bold uppercase leading-relaxed tracking-[0.04em] ${goldLight}`}>
        {children}
      </p>
    </div>
  );
}

// Hard-edged silhouettes — small markers only. Large illustrative work now
// comes from the photoreal renders in /public/images/forge/; these stay
// tiny (numbering, bullets, level markers), never full-scene art.
// The four route figures. They used to be inline SVG polygons built entirely
// from straight `L` segments — no curve anywhere — which is why they read as
// flat cut-outs next to the photographed pieces elsewhere on the page. These
// are carved renders in the same language as pawn-stone and king-gold: one
// warm rim light on pure black, real Staunton proportions.
//
// The progression is the argument: threads pulling the pawn, threads gone
// slack as the stone cracks, the shell falling away with the threads cut,
// and finally a king — crown band and cross, unmistakably not a pawn.
//
// The figures carry real alpha rather than being screen-blended. Their render
// backgrounds are not pure black — corners measured up to 87/255 — so a screen
// blend left a visibly lighter panel behind each one against the tile. Cut out
// on a luminance ramp instead, which is independent of the tile colour.
const STEP_FIGURES = [
  { src: "/images/forge/steps/1-pawn-held.png", alt: "Пешка-пехотинец с опущенной головой, к шлему и запястьям привязаны золотые нити, уходящие вверх" },
  { src: "/images/forge/steps/2-pawn-crack.png", alt: "Тот же воин выпрямился и смотрит вверх: нити провисли, по нагруднику трещина со светом" },
  { src: "/images/forge/steps/3-pawn-free.png", alt: "Воин стоит прямо, нити оборваны и висят, из-под камня проступает латунь" },
  { src: "/images/forge/steps/4-king.png", alt: "Король в короне с державой и опущенным мечом, у ног обрывки золотых нитей" },
] as const;

function StepFigure({ i, className = "" }: { i: number; className?: string }) {
  const fig = STEP_FIGURES[i] ?? STEP_FIGURES[STEP_FIGURES.length - 1];
  return (
    <Image
      src={fig.src}
      alt={fig.alt}
      width={660}
      height={880}
      // The tile is ~130px on desktop and ~70px on mobile; these are doubled so
      // a retina screen gets a sharp figure rather than an upscaled one.
      sizes="(max-width: 640px) 160px, 420px"
      className={`object-contain ${className}`}
    />
  );
}
function PrimaryCta({ label, price, id }: { label: string; price: string; id: string }) {
  return (
    <a
      href={KUZNYA_TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-track={`forge_cta_${id}`}
      className="group/btn relative inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#E0C078] px-9 py-4 font-display text-[15px] font-semibold uppercase tracking-[0.1em] text-[#0A0706] shadow-[0_10px_30px_-10px_rgba(224,192,120,0.55)] transition-[transform,box-shadow,background-color] duration-200 ease-out [touch-action:manipulation] hover:-translate-y-0.5 hover:bg-[#B8873B] hover:shadow-[0_16px_36px_-10px_rgba(224,192,120,0.75)] active:translate-y-0 motion-reduce:transform-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#E0C078]"
    >
      {label} — {price}
    </a>
  );
}

export default function ForgePage() {
  return (
    <>
      {/* Marks the route for globals.css so <html>/<body> go dark too. Without
          this, iOS rubber-band scroll past either end of this page exposes the
          site-wide paper ground as a white flash. */}
      <div data-page-theme="forge" hidden />
      <ScrollProgress />
      <StickyForgeCTA />

      {/* 1 — HERO. Direct offer + direct CTA, background is the childhood/
          strings render: a pawn at the bottom, huge figures and gold threads
          above it — literally "moved by someone else's hand" before the
          reader has read a word. */}
      <Scene id="hero" bg="bg-[#0A0706]" bare clip={false} className="flex min-h-[100svh] items-center pt-20 pb-14 md:pt-24 md:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/forge/hero-strings.png"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover object-[50%_28%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,7,6,0.5) 0%, rgba(10,7,6,0.66) 42%, rgba(10,7,6,0.94) 100%)",
            }}
          />
        </div>
        {/* The 3.4s forge-strike animation used to run here, over the hero.
            It played before the reader could take in a word, and the first
            screen is exactly where a visitor decides whether to stay — so the
            cost was paid at the worst possible moment. The still hero render
            behind it already carries the same image. Removed; the component
            stays in the repo in case it earns a place further down the page,
            where waiting costs nothing. */}
        <Container className="relative z-10 max-w-2xl text-center">
          <FadeIn>
            <span className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>
              {L.hero.eyebrow}
            </span>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-6">
            <h1
              className={`mx-auto text-balance font-display font-bold uppercase leading-[1.06] ${bone}`}
              style={{ fontSize: "clamp(2rem, 5.4vw, 3.6rem)", letterSpacing: "-0.01em" }}
            >
              {L.hero.h1}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} className="mx-auto mt-7 max-w-xl">
            <p className={`text-balance text-lg leading-relaxed ${boneSoft}`}>{L.hero.subhead}</p>
          </FadeIn>

          {/* Mechanism and timeframe, then the anchor — the Hormozi levers, in
              the order a reader actually asks for them: what is this, how long,
              what does it cost against what it used to cost. */}
          <FadeIn delay={0.26} className="mt-5 md:mt-7">
            <p className={`text-balance text-lg leading-relaxed ${bone}`}>{L.hero.mechanism}</p>
          </FadeIn>
          <FadeIn delay={0.28} className="mx-auto mt-5 max-w-xl">
            {/* Hormozi's Time Delay lever. The old line here described the
                product; this one names what the reader gets first and when,
                so "90 дней" stops reading as "результат через три месяца".
                Gold, not muted grey — it is a promise, not a footnote. */}
            <p className={`text-balance text-lg leading-relaxed ${goldLight}`}>{L.hero.firstResult}</p>
          </FadeIn>

          <FadeIn delay={0.32} className={`mx-auto mt-6 max-w-md border-t ${hairline} pt-5 md:mt-8 md:pt-6`}>
            <p className={`text-balance leading-relaxed ${boneSoft}`}>{L.hero.anchor}</p>
          </FadeIn>
          <FadeIn delay={0.36} className="mt-9">
            <PrimaryCta label={L.hero.ctaLabel} price={L.hero.price} id="hero" />
          </FadeIn>

          {/* Transitional CTA (StoryBrand). The page used to offer one door:
              $100 or leave. Deliberately weaker than the primary — a text
              link, not a second button — so it never competes for the click. */}
          <FadeIn delay={0.4} className="mt-5">
            <p className={`text-sm leading-relaxed ${text2}`}>
              {L.transitional.label}{" "}
              <a
                href={KUZNYA_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-track="forge_hero_lead_magnet_click"
                className={`underline decoration-[rgba(224,192,120,0.5)] underline-offset-4 ${goldLight} transition-colors hover:decoration-[rgba(224,192,120,1)]`}
              >
                {L.transitional.ctaLabel}
              </a>
            </p>
          </FadeIn>
          <FadeIn delay={0.44} className="mt-5">
            <p className={`text-xs uppercase tracking-[0.1em] ${text2}`}>{L.hero.micro}</p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 2 — PAIN. External problem in three concrete zones + the
          philosophical layer, unchanged copy. */}
      <Scene id="pain" bg="bg-[#12100C]">
        <Container className="max-w-5xl text-center">
          <Head label={L.pain.eyebrow}>{L.pain.h2}</Head>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className={`leading-relaxed ${boneSoft}`}>{L.pain.intro}</p>
          </FadeIn>

          {/* Photograph first, thesis second, explanation last. Someone
              skimming gets the recognition from the image and the one heavy
              line; only a reader who has stopped needs the paragraph. */}
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 text-left md:grid-cols-3">
            {[L.pain.money, L.pain.relationships, L.pain.state].map((block, i) => (
              <FadeIn key={block.title} delay={0.12 + i * 0.1}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  {/* The photographs are already dark; this only seats them
                      into the page ground so they don't read as pasted-on
                      rectangles. */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(18,16,12,0.25) 0%, rgba(18,16,12,0) 35%, rgba(18,16,12,0.55) 78%, #12100C 100%)",
                    }}
                  />
                </div>
                <p
                  className={`mt-5 font-display text-xs font-semibold uppercase tracking-[0.2em] ${goldLight}`}
                >
                  {block.title}
                </p>
                <p
                  className={`mt-3 text-balance font-display font-bold uppercase leading-[1.16] ${bone}`}
                  style={{ fontSize: "clamp(1.15rem, 1.7vw, 1.5rem)" }}
                >
                  {block.line}
                </p>
                <p className={`mt-4 text-base leading-relaxed ${text2}`}>{block.body}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.45} className="mx-auto mt-16 max-w-2xl">
            {/* The war, folded in. It used to be its own section here, which
                switched topic mid-run and dragged four legal paragraphs with
                it; those now sit once, near the footer. */}
            <p className={`mx-auto mb-12 max-w-xl leading-relaxed ${text2}`}>{L.pain.warLine}</p>
            <BigLine>{L.pain.philosophical}</BigLine>
          </FadeIn>
        </Container>
      </Scene>

      {/* 5 — MECHANISM. whyKnowledge + programs merged: one explanation of
          why knowledge doesn't turn into action, not two restatements of the
          same idea. pawn-stone.png (pawn held by threads, in the dark) is the
          visual for "an opponent that isn't the person across the board." */}
      <Scene id="mechanism" bg="bg-[#1E1A15]">
        <Container className="max-w-2xl text-center">
          {/* whyKnowledge.h2 was "Ты уже знаешь, что нужно делать. Почему же
              не делаешь?" — the same sentence as pain.state.line, word for
              word. The heading is turn.line1 instead: his own line, from the
              pivot screen this section absorbed. */}
          <Head>{L.turn.line1}</Head>

          <FadeIn delay={0.08} className="mx-auto mt-9 max-w-[200px]">
            <Image
              src="/images/forge/pawn-stone.png"
              alt=""
              width={896}
              height={1216}
              sizes="(max-width: 768px) 45vw, 200px"
              className="h-auto w-full rounded-lg"
            />
          </FadeIn>

          <FadeIn delay={0.14} className="mx-auto mt-9 max-w-xl">
            <p className={`leading-relaxed ${boneSoft}`}>Ты знаешь:</p>
          </FadeIn>
          <ChipList items={L.whyKnowledge.knowList} />
          <FadeIn delay={0.2} className="mx-auto mt-8 max-w-xl">
            <p className={`leading-relaxed ${boneSoft}`}>{L.whyKnowledge.explain}</p>
          </FadeIn>
          <FadeIn delay={0.26} className={`mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 border-t ${hairline} pt-8`}>
            <p className={`font-display text-lg font-semibold uppercase tracking-[0.04em] ${bone}`}>
              {L.whyKnowledge.formula.head}
            </p>
            {/* The old, automatic program gets the bordo fill — the one place
                on the page that dark red is used, exactly as spec'd: a fill
                with light text on top, never red text on black. */}
            <p className="rounded-full bg-[#2B0E11] px-5 py-2 font-display text-lg font-semibold uppercase tracking-[0.04em] text-[#F3EEE5]">
              {L.whyKnowledge.formula.old}
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="mt-5">
            <p className={`leading-relaxed ${text2}`}>{L.whyKnowledge.closing}</p>
          </FadeIn>

          <FadeIn delay={0.38} className="mx-auto mt-6 max-w-xl">
            <p className={`leading-relaxed ${boneSoft}`}>{L.programs.intro}</p>
          </FadeIn>
          <FadeIn delay={0.42} className="mx-auto mt-8 max-w-xl">
            <p className={`leading-relaxed ${boneSoft}`}>{L.programs.dimensionsIntro}</p>
          </FadeIn>
          <ChipList items={L.programs.dimensions} />
          <FadeIn delay={0.56} className="mx-auto mt-12 max-w-2xl">
            <ol className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              {L.programs.chain.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <span
                    className={`rounded-full border ${hairline} px-4 py-2 font-display text-[13px] font-semibold uppercase tracking-[0.06em] ${bone}`}
                  >
                    {step}
                  </span>
                  {i < L.programs.chain.length - 1 && (
                    <span aria-hidden="true" className={goldLight}>
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </FadeIn>
        </Container>
      </Scene>

      {/* 6 — GUIDE. The captivity, which until now reached this page as one
          word inside a list ("Через спорт. Через бизнес… Через плен"). At a
          $100 checkpoint the reader has to know who he is trusting before he
          is asked to pay, and StoryBrand wants two proofs from a guide —
          empathy and authority. 1341 days is both, so the block stays short on
          purpose: three paragraphs, one line, one door out to the book for
          anyone who wants the whole story.

          The collage poster that used to sit here is gone. Its text was baked
          into the pixels — untranslatable, unreadable on a phone — and it
          framed Maksim as the hero of the page, which is the one thing
          StoryBrand forbids on a sales page. A plain portrait does the job the
          collage was trying to do, without taking the hero's seat. */}
      <Scene id="guide" bg="bg-[#12100C]">
        <Container className="max-w-2xl text-center">
          <FadeIn className={`mx-auto max-w-[260px] overflow-hidden rounded-lg ring-1 ring-[rgba(224,192,120,0.3)]`}>
            <Image
              src={L.maksim.portrait}
              alt={L.maksim.portraitAlt}
              width={614}
              height={768}
              sizes="(max-width: 640px) 65vw, 260px"
              className="h-auto w-full"
            />
          </FadeIn>
          <div className="mt-10">
            <Head label={L.maksim.eyebrow}>{L.maksim.h2}</Head>
          </div>
          {/* Left-aligned inside a centred section: three paragraphs of first
              person read as testimony, and centred prose of this length is
              tiring. */}
          <FadeIn delay={0.16} className="mx-auto mt-7 max-w-xl space-y-4 text-left">
            {L.maksim.paragraphs.map((para) => (
              <p key={para} className={`leading-relaxed ${boneSoft}`}>
                {para}
              </p>
            ))}
          </FadeIn>
          <FadeIn delay={0.28} className={`mx-auto mt-12 max-w-xl border-t ${hairline} pt-10`}>
            <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
              {L.maksim.bigLine}
            </p>
          </FadeIn>
          <FadeIn delay={0.34} className="mt-9">
            <a
              href={L.maksim.ctaHref}
              data-track="forge_book_click"
              className={`inline-flex min-h-[46px] items-center justify-center rounded-full border ${hairline} px-7 py-3 font-display text-sm font-semibold uppercase tracking-[0.1em] ${bone} transition-colors hover:border-[rgba(224,192,120,0.6)]`}
            >
              {L.maksim.ctaLabel} →
            </a>
          </FadeIn>
        </Container>
      </Scene>

      {/* 7 — PLAN. 4-stage route, pawn → king. First money CTA lives here —
          after the guide, not before. pawn-molten.png (cracking, glowing
          from inside) sits between the steps and the outcome line: the
          moment the old form is breaking. */}
      <Scene id="steps" bg="bg-[#1E1A15]">
        <Container className="max-w-4xl text-center">
          <Head label={L.steps.eyebrow} tone="bright">{L.steps.h2}</Head>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className={`leading-relaxed ${boneSoft}`}>{L.steps.intro}</p>
          </FadeIn>

          {/* Desktop rank */}
          <div className="mx-auto mt-14 hidden max-w-3xl sm:block md:max-w-4xl">
            <div className="grid grid-cols-4 gap-5 md:gap-7">
              {L.steps.items.map((step, i) => {
                const isLast = i === L.steps.items.length - 1;
                return (
                  <FadeIn key={step.n} delay={0.1 + i * 0.1} className="text-left">
                    <div
                      className={`relative flex aspect-[3/4] items-center justify-center rounded-lg border bg-[#12100C] ${
                        isLast ? "border-[#E0C078] shadow-[0_18px_34px_-16px_rgba(224,192,120,0.45)]" : hairline
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute left-2.5 top-2 font-display text-[11px] font-semibold tracking-[0.06em] ${text2}`}
                      >
                        {step.n}
                      </span>
                      <StepFigure i={i} className="h-[94%] w-auto" />
                      {!isLast && (
                        <span
                          aria-hidden="true"
                          className={`absolute right-0 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-[#1E1A15] font-display font-bold ${goldLight}`}
                        >
                          →
                        </span>
                      )}
                    </div>
                    <p className={`mt-4 font-display text-[13px] font-semibold uppercase tracking-[0.1em] ${goldLight}`}>
                      {step.n} — {step.title}
                    </p>
                    <p className={`mt-2 text-base leading-relaxed ${boneSoft}`}>{step.body}</p>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Mobile — vertical file */}
          <div className="mx-auto mt-14 max-w-md text-left sm:hidden">
            {L.steps.items.map((step, i) => {
              const isLast = i === L.steps.items.length - 1;
              return (
                <FadeIn key={step.n} delay={0.08 + i * 0.06} className="relative flex gap-4 pb-8 last:pb-0">
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-8 top-16 w-px"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(180deg, rgba(224,192,120,0.35) 0 6px, transparent 6px 12px)",
                      }}
                    />
                  )}
                  <div
                    className={`relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border bg-[#12100C] ${
                      isLast ? "border-[#E0C078] shadow-[0_10px_24px_-14px_rgba(224,192,120,0.45)]" : hairline
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-1.5 -top-1.5 rounded bg-[#E0C078] px-1.5 py-0.5 font-display text-[10px] font-bold text-[#0A0706]"
                    >
                      {step.n}
                    </span>
                    <StepFigure i={i} className="h-[94%] w-auto" />
                  </div>
                  <div className="pt-1">
                    <p className={`font-display text-[13px] font-semibold uppercase tracking-[0.1em] ${goldLight}`}>
                      {step.n} — {step.title}
                    </p>
                    <p className={`mt-2 text-base leading-relaxed ${boneSoft}`}>{step.body}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.5} className="mx-auto mt-16 max-w-[180px]">
            <Image
              src="/images/forge/pawn-molten.png"
              alt=""
              width={896}
              height={1216}
              sizes="(max-width: 768px) 40vw, 180px"
              className="h-auto w-full rounded-lg"
            />
          </FadeIn>

          <FadeIn delay={0.56} className={`mx-auto mt-8 max-w-xl border-t ${hairline} pt-10`}>
            <BigLine>{L.steps.outcome}</BigLine>
          </FadeIn>

          <FadeIn delay={0.62} className="mt-10">
            <PrimaryCta label={L.steps.ctaLabel} price={L.steps.price} id="steps" />
          </FadeIn>
        </Container>
      </Scene>

      {/* 8 — INSIDE + LEVELS. This is the one place the full content list
          appears — price.stack below only lists format/access items that
          aren't already named here, so nothing repeats. */}
      <Scene id="inside" bg="bg-[#12100C]">
        <Container className="max-w-4xl text-center">
          <Head tone="bright">{L.inside.h2}</Head>
          <div className={`mt-12 grid gap-px overflow-hidden rounded-lg border ${hairline} bg-[rgba(224,192,120,0.14)] sm:grid-cols-2 lg:grid-cols-3`}>
            {L.inside.cards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.04} className="bg-[#12100C] p-6 text-left">
                <p className={`font-display text-sm font-bold uppercase tracking-[0.04em] ${goldLight}`}>{card.title}</p>
                <p className={`mt-2 text-base leading-relaxed ${text2}`}>{card.body}</p>
              </FadeIn>
            ))}
          </div>

        </Container>
      </Scene>

      {/* 10 — NINETY. Image of success — the Tuesday scene, kept intact. */}
      <Scene id="ninety" bg="bg-[#12100C]">
        <Container className="max-w-2xl text-center">
          <FadeIn>
            <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
              {L.ninety.line1}
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-4">
            <p
              className={`text-balance font-display font-bold uppercase leading-tight ${goldLight}`}
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.2rem)" }}
            >
              {L.ninety.line2}
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="mx-auto mt-10 max-w-xl">
            <div className="grid items-center gap-8 text-left md:grid-cols-[minmax(0,240px)_minmax(0,1fr)]">
              <div className={`mx-auto w-full max-w-[240px] overflow-hidden rounded-lg border ${hairline}`}>
                <Image
                  src={L.ninety.image}
                  alt={L.ninety.imageAlt}
                  width={825}
                  height={1100}
                  sizes="(max-width: 768px) 60vw, 240px"
                  className="h-auto w-full"
                />
              </div>
              <p className={`text-balance font-editorial text-xl italic leading-relaxed ${boneSoft}`}>{L.ninety.scene}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4} className={`mx-auto mt-10 max-w-xl border-t ${hairline} pt-8`}>
            <BigLine>{L.ninety.bigLine}</BigLine>
          </FadeIn>
        </Container>
      </Scene>

      {/* 10.5 — PROOF. Real client video testimonials, placed right before the
          price ask so likelihood-of-success is built up at the exact moment
          the reader is deciding whether to pay — not buried earlier where it
          can't do that job, and not stuffed into a caption. Click-to-play
          tiles, not autoplaying embeds — 20+ live iframes on load would be
          the one thing on this page that actually hurts speed. */}
      <Scene id="proof" bg="bg-[#0A0706]">
        <Container className="max-w-4xl text-center">
          <Head label={L.proof.eyebrow} tone="bright">{L.proof.h2}</Head>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className={`leading-relaxed ${boneSoft}`}>{L.proof.intro}</p>
          </FadeIn>
          <ProofGrid ids={L.proof.videoIds} />
        </Container>
      </Scene>

      {/* 11 — PRICE. Offer + stack (format items only, content already shown
          in "inside") + guarantee as its own prominent box next to the CTA,
          not a small caption line. Third money CTA. */}
      <Scene id="price" bg="bg-[#1E1A15]">
        <Container className="max-w-2xl text-center">
          <Head tone="bright">{L.price.h2}</Head>
          <FadeIn delay={0.16} className="mx-auto mt-8 max-w-xl space-y-4">
            {L.price.paragraphs.map((p) => (
              <p key={p} className={`leading-relaxed ${boneSoft}`}>
                {p}
              </p>
            ))}
          </FadeIn>
          <FadeIn delay={0.24} className="mt-8">
            <p className={`font-display text-xl font-bold uppercase ${bone}`}>{L.price.priceLine}</p>
          </FadeIn>
          <FadeIn delay={0.3} className="mx-auto mt-6 max-w-xl">
            <BigLine>{L.price.bigLine}</BigLine>
          </FadeIn>

          <FadeIn delay={0.36} className={`mx-auto mt-14 max-w-xl border-t ${hairline} pt-10`}>
            <p className={`font-display text-sm font-semibold uppercase tracking-[0.14em] ${goldLight}`}>
              {L.price.stackIntro}
            </p>
            {/* Format/access items only — the content list (гипноз, NLP,
                архетипы, тело и т.д.) already lives in the "inside" section
                above; repeating it here would be the exact duplication the
                brief asked to remove. */}
            <ul className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2.5">
              {L.price.stack
                .filter((item) =>
                  ["закрытый Telegram", "90-дневный маршрут", "практики", "сообщество", "материалы Максима", "новые материалы"].includes(
                    item,
                  ),
                )
                .map((item) => (
                  <li key={item} className={`rounded-full border ${hairline} px-4 py-2 text-sm leading-relaxed ${text2}`}>
                    {item}
                  </li>
                ))}
            </ul>
          </FadeIn>

          {/* The effort question, answered where it gets asked — next to the
              price. It sits immediately above the guarantee on purpose: the
              honest ask and the way out of it belong on the same screen. */}
          <FadeIn delay={0.4} className={`mx-auto mt-12 max-w-xl border-t ${hairline} pt-10`}>
            <p className={`font-display text-sm font-semibold uppercase tracking-[0.14em] ${goldLight}`}>
              {L.price.effort.head}
            </p>
            <p className={`mt-4 leading-relaxed ${boneSoft}`}>{L.price.effort.body}</p>
          </FadeIn>
          <FadeIn delay={0.46} className="mx-auto mt-10 max-w-xl">
            <GuaranteeBox>{L.price.guarantee}</GuaranteeBox>
          </FadeIn>
          <FadeIn delay={0.48} className="mt-6">
            <PrimaryCta label={L.price.ctaLabel} price={L.price.price} id="price" />
          </FadeIn>
        </Container>
      </Scene>

      {/* 12 — MISSION + NOT FOR. Why he does this, then who it isn't for. */}
      <Scene id="mission" bg="bg-[#12100C]">
        <Container className="max-w-2xl text-center">
          <Head tone="bright">{L.notFor.h2}</Head>
          <FadeIn delay={0.3} className="mt-6">
            <p className={`leading-relaxed ${boneSoft}`}>{L.notFor.intro}</p>
          </FadeIn>
          <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-3">
            {L.notFor.items.map((item, i) => (
              <FadeIn key={item} delay={0.14 + i * 0.05}>
                <li className={`inline-flex items-center gap-2 rounded-full border ${hairline} px-4 py-2 text-sm leading-relaxed ${text2}`}>
                  <span className={goldLight}>×</span>
                  {item}
                </li>
              </FadeIn>
            ))}
          </ul>
          <FadeIn delay={0.5} className={`mx-auto mt-10 max-w-xl border-t ${hairline} pt-8`}>
            <BigLine>{L.notFor.bigLine}</BigLine>
          </FadeIn>

          {/* Both disclaimers, once, here. They are legally required and they
              stay — they just no longer interrupt the middle of the story. */}
          <FadeIn delay={0.56} className={`mx-auto mt-16 max-w-xl space-y-4 border-t ${hairline} pt-10 text-left`}>
            {L.legal.map((note) => (
              <Disclaimer key={note}>{note}</Disclaimer>
            ))}
          </FadeIn>
        </Container>
      </Scene>

      {/* 13 — FINAL. finalOffer + finalScreen merged, one CTA (the 4th).
          A literal "board frame" — a thin bordered rectangle, the same
          hairline used for every other frame on the page — sits behind the
          king. The render's own background is solid black, so it's screen-
          blended against the page: black becomes transparent, only the gold
          king and its threads stay visible, breaking out past the top edge
          of the frame instead of just sitting inside another dark square.
          Independent of the outer Container's max-width, so it reads the
          same on any screen. */}
      <Scene id="final" bg="bg-[#0A0706]" bare clip={false} className="flex flex-col items-center justify-center py-28 text-center">
        <div className="relative h-[230px] w-[172px] md:h-[300px] md:w-[224px]">
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{ background: "radial-gradient(closest-side, rgba(224,192,120,0.35), transparent)" }}
            aria-hidden="true"
          />
          <div className={`absolute inset-x-4 bottom-0 top-16 rounded-lg border ${hairline} bg-[#12100C]/70 md:top-20`} aria-hidden="true" />
          <Image
            src="/images/forge/king-gold.png"
            alt=""
            fill
            sizes="(max-width: 768px) 172px, 224px"
            style={{ mixBlendMode: "screen" }}
            className="object-contain object-bottom"
          />
        </div>
        <Container className="max-w-2xl">
          {/* One closing CTA, not two. This screen used to run the finalOffer
              block (eyebrow, headline, sub, button, micro) and then finalScreen
              (pre, button, kicker) directly under it — the same offer and the
              same button twice on one screen. Only the headline survives from
              finalOffer; everything else here is finalScreen. */}
          <FadeIn delay={0.1}>
            <h2
              className={`text-balance font-display font-bold uppercase leading-[1.06] ${bone}`}
              style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.2rem)" }}
            >
              {L.finalOffer.h2}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="mx-auto mt-10 max-w-lg">
            {/* The stakes, immediately before the last CTA: what the reader
                keeps if he changes nothing. */}
            <p className={`mx-auto mb-8 max-w-md text-balance leading-relaxed ${text2}`}>{L.finalScreen.stakes}</p>
            <p className={`font-display text-sm font-semibold uppercase tracking-[0.1em] ${text2}`}>{L.finalScreen.pre}</p>
            <p className={`mt-4 leading-relaxed ${boneSoft}`}>{L.finalScreen.text}</p>
            {/* The closing button. Collapsing the duplicated final offer took
                this with it — the page ended with nothing to click. */}
            <div className="mt-9">
              <PrimaryCta label={L.finalScreen.ctaLabel} price={L.finalScreen.price} id="final" />
            </div>
            <p className={`mt-10 text-balance font-editorial text-lg italic leading-snug ${boneSofter}`}>
              {L.finalScreen.kicker}
            </p>
            <p
              className={`mt-6 text-balance font-display font-bold uppercase leading-tight ${goldLight}`}
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
            >
              {L.finalScreen.closing}
            </p>
          </FadeIn>
        </Container>
      </Scene>
    </>
  );
}
