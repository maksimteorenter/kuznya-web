import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { ForgeIntro } from "@/components/forge/ForgeIntro";
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

function SubHead({ children }: { children: ReactNode }) {
  return (
    <p
      className={`mx-auto mt-2 max-w-xl text-balance font-display font-bold uppercase leading-[1.14] ${bone}`}
      style={{ fontSize: "clamp(1.3rem, 2.6vw, 1.9rem)" }}
    >
      {children}
    </p>
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
const PIECE_PATHS = {
  pawn: "M50,14 L60,18 L64,28 L60,38 L58,42 L62,72 L70,80 L80,88 L20,88 L30,80 L38,72 L42,42 L40,38 L36,28 L40,18 Z",
  rook: "M30,14 L40,14 L40,24 L45,24 L45,14 L55,14 L55,24 L60,24 L60,14 L70,14 L70,24 L64,72 L62,72 L70,80 L80,88 L20,88 L30,80 L38,72 L36,72 L30,24 Z",
  king: "M47,4 L53,4 L53,11 L60,11 L60,17 L53,17 L53,32 L66,32 L58,42 L62,72 L70,80 L80,88 L20,88 L30,80 L38,72 L42,42 L34,32 L47,32 L47,17 L40,17 L40,11 L47,11 Z",
} as const;

function ChessPiece({ piece, className = "" }: { piece: keyof typeof PIECE_PATHS; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className} fill="currentColor">
      <path d={PIECE_PATHS[piece]} />
    </svg>
  );
}

// Pawn walking the board, promoted at the end — tone runs fire → gold, so the
// same "closer to gold as you descend" idea plays out at icon scale too.
const STEP_PIECES = ["pawn", "pawn", "pawn", "king"] as const;
const STEP_TONES = [
  "text-[#8E1B22]/50",
  "text-[#8E1B22]/80",
  "text-[#B8873B]",
  "text-[#E0C078]",
] as const;
const LEVEL_PIECES = ["pawn", "pawn", "rook", "rook", "king"] as const;
const LEVEL_TONES = [
  "text-[#8E1B22]/50",
  "text-[#8E1B22]/80",
  "text-[#B8873B]/80",
  "text-[#B8873B]",
  "text-[#E0C078]",
] as const;

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
      <Scene id="hero" bg="bg-[#0A0706]" bare clip={false} className="flex min-h-[100svh] items-center pt-24 pb-20">
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
        <ForgeIntro />
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
          <FadeIn delay={0.28} className="mx-auto mt-5 max-w-xl">
            {/* Hormozi's Time Delay lever. The old line here described the
                product; this one names what the reader gets first and when,
                so "90 дней" stops reading as "результат через три месяца".
                Gold, not muted grey — it is a promise, not a footnote. */}
            <p className={`text-balance text-lg leading-relaxed ${goldLight}`}>{L.hero.firstResult}</p>
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
                <p className={`mt-4 text-[15px] leading-relaxed ${text2}`}>{block.body}</p>
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

      {/* 3 — TURN. Almost-empty screen, the pivot line. */}
      <Scene id="turn" bg="bg-[#0A0706]" bare className="flex min-h-[55vh] items-center">
        <Container className="max-w-xl text-center">
          <FadeIn>
            <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
              {L.turn.line1}
            </p>
          </FadeIn>
          <FadeIn delay={0.25} className="mt-8">
            <p
              className={`text-balance font-display font-bold uppercase leading-[1.14] ${goldLight}`}
              style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.4rem)" }}
            >
              {L.turn.line2}
            </p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 5 — MECHANISM. whyKnowledge + programs merged: one explanation of
          why knowledge doesn't turn into action, not two restatements of the
          same idea. pawn-stone.png (pawn held by threads, in the dark) is the
          visual for "an opponent that isn't the person across the board." */}
      <Scene id="mechanism" bg="bg-[#1E1A15]">
        <Container className="max-w-2xl text-center">
          <Head>{L.whyKnowledge.h2}</Head>

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

          <FadeIn delay={0.34} className={`mx-auto mt-16 max-w-xl border-t ${hairline} pt-12`}>
          </FadeIn>
          <FadeIn delay={0.38} className="mx-auto mt-6 max-w-xl">
            <p className={`leading-relaxed ${boneSoft}`}>{L.programs.intro}</p>
          </FadeIn>
          <FadeIn delay={0.42} className="mx-auto mt-8 max-w-xl">
            <p className={`leading-relaxed ${boneSoft}`}>{L.programs.dimensionsIntro}</p>
          </FadeIn>
          <ChipList items={L.programs.dimensions} />
          <FadeIn delay={0.46} className="mx-auto mt-8 max-w-xl">
          </FadeIn>
          <FadeIn delay={0.5} className={`mx-auto mt-10 max-w-xl border-t ${hairline} pt-8`}>
            <p className={`font-display text-sm font-semibold uppercase tracking-[0.14em] ${goldLight}`}>
              {L.programs.questionsIntro}
            </p>
            <ul className="mt-5 space-y-3">
              {L.programs.questions.map((q) => (
                <li key={q} className={`font-editorial text-lg italic leading-snug ${bone}`}>
                  {q}
                </li>
              ))}
            </ul>
          </FadeIn>
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
                      className={`relative flex aspect-square items-center justify-center rounded-lg border bg-[#12100C] ${
                        isLast ? "border-[#E0C078] shadow-[0_18px_34px_-16px_rgba(224,192,120,0.45)]" : hairline
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute left-2.5 top-2 font-display text-[11px] font-semibold tracking-[0.06em] ${text2}`}
                      >
                        {step.n}
                      </span>
                      <ChessPiece piece={STEP_PIECES[i] ?? "king"} className={`h-[52%] w-[52%] ${STEP_TONES[i] ?? goldLight}`} />
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
                    <p className={`mt-2 text-sm leading-relaxed ${boneSoft}`}>{step.body}</p>
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
                    className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border bg-[#12100C] ${
                      isLast ? "border-[#E0C078] shadow-[0_10px_24px_-14px_rgba(224,192,120,0.45)]" : hairline
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-1.5 -top-1.5 rounded bg-[#E0C078] px-1.5 py-0.5 font-display text-[10px] font-bold text-[#0A0706]"
                    >
                      {step.n}
                    </span>
                    <ChessPiece piece={STEP_PIECES[i] ?? "king"} className={`h-8 w-8 ${STEP_TONES[i] ?? goldLight}`} />
                  </div>
                  <div className="pt-1">
                    <p className={`font-display text-[13px] font-semibold uppercase tracking-[0.1em] ${goldLight}`}>
                      {step.n} — {step.title}
                    </p>
                    <p className={`mt-2 text-sm leading-relaxed ${boneSoft}`}>{step.body}</p>
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
                <p className={`mt-2 text-sm leading-relaxed ${text2}`}>{card.body}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2} className={`mx-auto mt-16 max-w-3xl border-t ${hairline} pt-12`}>
            <SubHead>{L.levels.h2}</SubHead>
          </FadeIn>
          <div className={`mx-auto mt-8 grid max-w-2xl gap-px overflow-hidden rounded-lg border ${hairline} bg-[rgba(224,192,120,0.14)] sm:grid-cols-5`}>
            {L.levels.items.map((item, i) => (
              <FadeIn key={item.n} delay={i * 0.05} className="bg-[#12100C] px-3 py-7">
                <ChessPiece
                  piece={LEVEL_PIECES[i] ?? "king"}
                  className={`mx-auto h-10 w-10 md:h-12 md:w-12 ${LEVEL_TONES[i] ?? goldLight}`}
                />
                <p className={`mt-3 font-display text-2xl font-bold ${goldLight}`}>{item.n}</p>
                <p className={`mt-2 text-xs uppercase leading-snug tracking-[0.04em] ${bone}`}>{item.label}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3} className="mx-auto mt-10 max-w-xl">
            <BigLine>{L.levels.line}</BigLine>
          </FadeIn>
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
          <FadeIn delay={0.18} className="mx-auto mt-10 max-w-xl">
            <p className={`leading-relaxed ${boneSoft}`}>{L.ninety.goalsIntro}</p>
          </FadeIn>
          <ul className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2.5">
            {L.ninety.goals.map((g, i) => (
              <FadeIn key={g} delay={0.2 + i * 0.03}>
                <li className={`rounded-full border ${hairline} px-4 py-2 text-sm leading-relaxed ${text2}`}>{g}</li>
              </FadeIn>
            ))}
          </ul>
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
          <Head tone="bright">{L.mission.h2}</Head>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl space-y-4">
            {L.mission.paragraphs.map((p) => (
              <p key={p} className={`leading-relaxed ${boneSoft}`}>
                {p}
              </p>
            ))}
          </FadeIn>
          <FadeIn delay={0.2} className="mx-auto mt-8 max-w-xl">
            <BigLine>{L.mission.bigLine}</BigLine>
          </FadeIn>

          <FadeIn delay={0.26} className={`mx-auto mt-16 max-w-xl border-t ${hairline} pt-12`}>
            <SubHead>{L.notFor.h2}</SubHead>
          </FadeIn>
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
          <FadeIn>
            <span className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>
              {L.finalOffer.eyebrow}
            </span>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-6">
            <h2
              className={`text-balance font-display font-bold uppercase leading-[1.06] ${bone}`}
              style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.2rem)" }}
            >
              {L.finalOffer.h2}
            </h2>
          </FadeIn>
          <FadeIn delay={0.18} className="mx-auto mt-6 max-w-lg">
            <p className={`leading-relaxed ${boneSoft}`}>{L.finalOffer.sub}</p>
          </FadeIn>
          <FadeIn delay={0.26} className="mt-9">
            <PrimaryCta label={L.finalOffer.ctaLabel} price={L.finalOffer.price} id="final_offer" />
          </FadeIn>
          <FadeIn delay={0.32} className="mt-5">
            <p className={`text-xs uppercase tracking-[0.1em] ${text2}`}>{L.finalOffer.micro}</p>
          </FadeIn>

          <FadeIn delay={0.4} className={`mx-auto mt-16 max-w-lg border-t ${hairline} pt-12`}>
            {/* The stakes, immediately before the last CTA: what the reader
                keeps if he changes nothing. */}
            <p className={`mx-auto mb-8 max-w-md text-balance leading-relaxed ${text2}`}>{L.finalScreen.stakes}</p>
            <p className={`font-display text-sm font-semibold uppercase tracking-[0.1em] ${text2}`}>{L.finalScreen.pre}</p>
            <p className={`mt-4 leading-relaxed ${boneSoft}`}>{L.finalScreen.text}</p>
            <p className={`mt-8 text-balance font-editorial text-lg italic leading-snug ${boneSofter}`}>
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
