import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { ForgeIntro } from "@/components/forge/ForgeIntro";
import { StickyForgeCTA } from "@/components/forge/StickyForgeCTA";
import { KUZNYA_LANDING } from "@/lib/content";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";

const L = KUZNYA_LANDING;

export const metadata: Metadata = {
  title: L.meta.title,
  description: L.meta.description,
  alternates: { canonical: "/forge" },
};

// -----------------------------------------------------------------------
// Small local building blocks — kept in-file since they're one-off layout
// patterns specific to this page's rhythm, not reused site primitives.
// -----------------------------------------------------------------------

function BigLine({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-balance font-display font-bold uppercase leading-[1.14] ${dark ? "text-bone" : "text-ink"}`}
      style={{ fontSize: "clamp(1.4rem, 2.9vw, 2.3rem)" }}
    >
      {children}
    </p>
  );
}

function ChipList({ items, dark = false }: { items: readonly string[]; dark?: boolean }) {
  return (
    <ul className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border px-3.5 py-1.5 text-sm leading-relaxed ${
            dark ? "border-white/15 text-bone/80" : "border-ink/15 text-ink/85"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Disclaimer({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mx-auto mt-8 max-w-lg text-balance text-xs leading-relaxed ${
        dark ? "border-t border-white/15 pt-6 text-mist" : "border-t border-ink/15 pt-6 text-inkFaint"
      }`}
    >
      {children}
    </p>
  );
}

// Hard-edged SVG silhouettes rather than unicode glyphs: at text size the
// glyphs were a grey speck nobody could see. Straight lines only, so the
// pieces read as forged metal rather than a chess app's icon set.
//
// Only the pawn, the rook and the king are here on purpose. Knight and queen
// silhouettes were drawn and rendered too, and neither survived the look
// test — the knight in particular read as a lump, not a horse. A shape the
// reader has to decode is worse than no shape.
const PIECE_PATHS = {
  pawn: "M50,14 L60,18 L64,28 L60,38 L58,42 L62,72 L70,80 L80,88 L20,88 L30,80 L38,72 L42,42 L40,38 L36,28 L40,18 Z",
  rook: "M30,14 L40,14 L40,24 L45,24 L45,14 L55,14 L55,24 L60,24 L60,14 L70,14 L70,24 L64,72 L62,72 L70,80 L80,88 L20,88 L30,80 L38,72 L36,72 L30,24 Z",
  king: "M47,4 L53,4 L53,11 L60,11 L60,17 L53,17 L53,32 L66,32 L58,42 L62,72 L70,80 L80,88 L20,88 L30,80 L38,72 L42,42 L34,32 L47,32 L47,17 L40,17 L40,11 L47,11 Z",
} as const;

function ChessPiece({
  piece,
  className = "",
}: {
  piece: keyof typeof PIECE_PATHS;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className} fill="currentColor">
      <path d={PIECE_PATHS[piece]} />
    </svg>
  );
}

// The faint board showing through the gutters between squares — the board as
// structure of the route, not wallpaper behind it.
function CheckerStrip({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        backgroundImage:
          "repeating-conic-gradient(rgba(17,17,17,0.06) 0% 25%, transparent 0% 50%)",
        backgroundSize: "36px 36px",
      }}
    />
  );
}

// One pawn walking the board, promoted only at the end — that is what the
// copy promises ("из пешки — в короля"), and it is what actually happens to a
// pawn that reaches the far rank. Four different pieces would have read as
// four different people. The pawn darkens as it advances.
const STEP_PIECES = ["pawn", "pawn", "pawn", "king"] as const;
const STEP_TONES = ["text-ink/35", "text-ink/55", "text-ink/75", "text-blood"] as const;
// The same climb across the five levels of work, ending on the king.
const LEVEL_PIECES = ["pawn", "pawn", "rook", "rook", "king"] as const;

function PrimaryCta({ label, price, id }: { label: string; price: string; id: string }) {
  return (
    <Button href={KUZNYA_TELEGRAM_URL} external size="lg" dataTrack={`forge_cta_${id}`}>
      {label} — {price}
    </Button>
  );
}

export default function ForgePage() {
  return (
    <>
      <ScrollProgress />
      <StickyForgeCTA />

      {/* HERO — forge-intro plays once over this section, then reveals it.
          Height is reserved by the Hero content itself, so the animation
          layer can never shift layout. */}
      <Section id="hero" tone="deep" bare className="relative flex min-h-[100svh] items-center pt-24 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/forge-hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="photo-bw object-cover object-[50%_22%]"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(11,11,12,0.82) 0%, rgba(11,11,12,0.72) 38%, rgba(11,11,12,0.88) 100%)",
            }}
          />
        </div>
        <ForgeIntro />
        <Container className="relative z-10 max-w-2xl text-center">
          <FadeIn>
            <span className="kicker text-blood">{L.hero.eyebrow}</span>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-6">
            <h1
              className="mx-auto text-balance font-display font-bold uppercase leading-[1.06] text-bone"
              style={{ fontSize: "clamp(2rem, 5.4vw, 3.6rem)", letterSpacing: "-0.01em" }}
            >
              {L.hero.h1}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} className="mx-auto mt-7 max-w-xl">
            <p className="text-balance text-lg leading-relaxed text-bone/85">{L.hero.subhead}</p>
          </FadeIn>
          <FadeIn delay={0.28} className="mx-auto mt-5 max-w-xl">
            <p className="text-balance leading-relaxed text-bone/75">{L.hero.body}</p>
          </FadeIn>
          <FadeIn delay={0.36} className="mt-9">
            <PrimaryCta label={L.hero.ctaLabel} price={L.hero.price} id="hero" />
          </FadeIn>
          <FadeIn delay={0.44} className="mt-5">
            <p className="text-xs uppercase tracking-[0.1em] text-mist">{L.hero.micro}</p>
          </FadeIn>
        </Container>
      </Section>

      {/* PAIN — узнаёшь себя? */}
      <Section id="pain" tone="paper">
        <Container className="max-w-2xl text-center">
          <SectionHead center label={L.pain.eyebrow}>
            {L.pain.h2}
          </SectionHead>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className="leading-relaxed text-ink/90">{L.pain.intro}</p>
          </FadeIn>

          <div className="mx-auto mt-12 max-w-xl space-y-10">
            {[L.pain.money, L.pain.relationships, L.pain.state].map((block, i) => (
              <FadeIn key={block.title} delay={0.15 + i * 0.08}>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-blood">
                  {block.title}
                </p>
                <p className="mt-3 leading-relaxed text-ink/90">{block.body}</p>
                {"line" in block && block.line && (
                  <p className="mt-3 font-editorial text-xl italic leading-snug text-ink">{block.line}</p>
                )}
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mx-auto mt-12 max-w-xl">
            <BigLine>{L.pain.philosophical}</BigLine>
          </FadeIn>
        </Container>
      </Section>

      {/* TURN — almost-empty screen */}
      <Section id="turn" tone="deep" bare className="flex min-h-[60vh] items-center">
        <Container className="max-w-xl text-center">
          <FadeIn>
            <p className="text-balance font-editorial text-2xl italic leading-snug text-bone md:text-3xl">
              {L.turn.line1}
            </p>
          </FadeIn>
          <FadeIn delay={0.25} className="mt-8">
            <p
              className="text-balance font-display font-bold uppercase leading-[1.14] text-bone"
              style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.4rem)" }}
            >
              {L.turn.line2}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* WAR */}
      <Section id="war" tone="paper">
        <Container className="max-w-2xl text-center">
          <SectionHead center>{L.war.h2}</SectionHead>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className="leading-relaxed text-ink/90">{L.war.intro}</p>
          </FadeIn>
          <FadeIn delay={0.16} className="mx-auto mt-6 max-w-xl">
            <p className="font-editorial text-xl italic leading-snug text-inkSoft">{L.war.quote}</p>
            <p className="mt-4 leading-relaxed text-ink/90">{L.war.afterQuote}</p>
          </FadeIn>
          <ChipList items={L.war.stressList} />
          <FadeIn delay={0.2} className="mx-auto mt-10 max-w-xl">
            <BigLine>{L.war.bigLine}</BigLine>
          </FadeIn>
          <FadeIn delay={0.26} className="mx-auto mt-8 max-w-xl">
            <p className="leading-relaxed text-ink/90">{L.war.recoveryIntro}</p>
          </FadeIn>
          <ChipList items={L.war.recoveryList} />
          <Disclaimer>{L.war.disclaimer}</Disclaimer>
        </Container>
      </Section>

      {/* WHY KNOWLEDGE DOESN'T WORK */}
      <Section id="why" tone="deep">
        <Container className="max-w-2xl text-center">
          <SectionHead center>{L.whyKnowledge.h2}</SectionHead>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className="leading-relaxed text-bone/90">Ты знаешь:</p>
          </FadeIn>
          <ChipList items={L.whyKnowledge.knowList} dark />
          <FadeIn delay={0.16} className="mx-auto mt-8 max-w-xl">
            <p className="leading-relaxed text-bone/90">{L.whyKnowledge.explain}</p>
          </FadeIn>
          <FadeIn delay={0.22} className="mx-auto mt-8 max-w-xl border-t border-white/15 pt-8">
            <p className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-bone">
              {L.whyKnowledge.formula.head}
            </p>
            <p className="mt-2 font-display text-lg font-semibold uppercase tracking-[0.04em] text-blood">
              {L.whyKnowledge.formula.old}
            </p>
          </FadeIn>
          <FadeIn delay={0.28} className="mt-5">
            <p className="leading-relaxed text-mist">{L.whyKnowledge.closing}</p>
          </FadeIn>
        </Container>
      </Section>

      {/* LOADED PROGRAMS — merged 14–16 */}
      <Section id="programs" tone="paper">
        <Container className="max-w-2xl text-center">
          <SectionHead center>{L.programs.h2}</SectionHead>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className="leading-relaxed text-ink/90">{L.programs.intro}</p>
          </FadeIn>
          <FadeIn delay={0.16} className="mx-auto mt-8 max-w-xl">
            <p className="leading-relaxed text-ink/90">{L.programs.dimensionsIntro}</p>
          </FadeIn>
          <ChipList items={L.programs.dimensions} />
          <FadeIn delay={0.2} className="mx-auto mt-8 max-w-xl">
            <p className="text-sm leading-relaxed text-inkFaint">{L.programs.spiritualNote}</p>
          </FadeIn>
          <FadeIn delay={0.26} className="mx-auto mt-10 max-w-xl border-t border-ink/15 pt-8">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-blood">
              {L.programs.questionsIntro}
            </p>
            <ul className="mt-5 space-y-3">
              {L.programs.questions.map((q) => (
                <li key={q} className="font-editorial text-lg italic leading-snug text-ink">
                  {q}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.32} className="mx-auto mt-12 max-w-2xl">
            <ol className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              {L.programs.chain.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="rounded-full border border-ink/20 px-4 py-2 font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-ink">
                    {step}
                  </span>
                  {i < L.programs.chain.length - 1 && (
                    <span aria-hidden="true" className="text-blood">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </FadeIn>
        </Container>
      </Section>

      {/* FORGE SCENE — CTA #2 */}
      <Section id="forge" tone="deep" bare className="flex min-h-[92vh] items-center">
        <Container className="max-w-2xl text-center">
          <FadeIn>
            <span className="kicker">{L.forge.eyebrow}</span>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-6">
            <h2
              className="text-balance font-display font-bold uppercase leading-[1.06] text-bone"
              style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
            >
              {L.forge.h1}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="mx-auto mt-8 max-w-lg space-y-4">
            {L.forge.text.map((p) => (
              <p key={p} className="leading-relaxed text-bone/90">
                {p}
              </p>
            ))}
          </FadeIn>
          <FadeIn delay={0.3} className="mt-10">
            <PrimaryCta label={L.forge.ctaLabel} price={L.forge.price} id="forge" />
          </FadeIn>
        </Container>
      </Section>

      {/* WHAT'S INSIDE */}
      <Section id="inside" tone="paper">
        <Container className="max-w-4xl text-center">
          <SectionHead center>{L.inside.h2}</SectionHead>
          <div className="mt-12 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {L.inside.cards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.04} className="bg-paper p-6 text-left">
                <p className="font-display text-sm font-bold uppercase tracking-[0.04em] text-ink">
                  {card.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-inkSoft">{card.body}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* FIVE LEVELS */}
      <Section id="levels" tone="deep">
        <Container className="max-w-3xl text-center">
          <SectionHead center>{L.levels.h2}</SectionHead>
          <div className="mx-auto mt-12 grid max-w-2xl gap-px border border-white/15 bg-white/10 sm:grid-cols-5">
            {L.levels.items.map((item, i) => (
              <FadeIn key={item.n} delay={i * 0.05} className="bg-deep px-3 py-7">
                <ChessPiece
                  piece={LEVEL_PIECES[i] ?? "king"}
                  className={`mx-auto h-10 w-10 md:h-12 md:w-12 ${
                    i === LEVEL_PIECES.length - 1 ? "text-blood" : "text-bone/50"
                  }`}
                />
                <p className="mt-3 font-display text-2xl font-bold text-blood">{item.n}</p>
                <p className="mt-2 text-xs uppercase leading-snug tracking-[0.04em] text-bone">{item.label}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3} className="mx-auto mt-10 max-w-xl">
            <BigLine dark>{L.levels.line}</BigLine>
          </FadeIn>
        </Container>
      </Section>

      {/* THREE STEPS — CTA #3 */}
      <Section id="steps" tone="paper">
        <Container className="max-w-4xl text-center">
          <SectionHead center label={L.steps.eyebrow}>
            {L.steps.h2}
          </SectionHead>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className="leading-relaxed text-ink/90">{L.steps.intro}</p>
          </FadeIn>

          {/* Desktop — one rank of the board. The squares sit on the checker
              strip, which only shows through the gutters, and the arrows
              between them reuse the chain pattern already on this page. */}
          <div className="mx-auto mt-14 hidden max-w-3xl sm:block md:max-w-4xl">
            <div className="relative">
              <CheckerStrip className="absolute inset-x-0 top-1/2 h-28 -translate-y-1/2 border-y border-ink/15 md:h-32" />
              <div className="relative grid grid-cols-4 gap-5 md:gap-7">
                {L.steps.items.map((step, i) => {
                  const isLast = i === L.steps.items.length - 1;
                  return (
                    <FadeIn key={step.n} delay={0.1 + i * 0.1} className="text-left">
                      <div
                        className={`relative flex aspect-square items-center justify-center border bg-paper ${
                          isLast
                            ? "border-blood shadow-[0_18px_34px_-16px_rgba(193,18,31,0.6)]"
                            : "border-ink/18"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute left-2.5 top-2 font-display text-[11px] font-semibold tracking-[0.06em] text-inkFaint"
                        >
                          {step.n}
                        </span>
                        <ChessPiece
                          piece={STEP_PIECES[i] ?? "king"}
                          className={`h-[52%] w-[52%] ${STEP_TONES[i] ?? "text-blood"}`}
                        />
                        {!isLast && (
                          <span
                            aria-hidden="true"
                            className="absolute right-0 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 translate-x-1/2 items-center justify-center bg-paper font-display font-bold text-blood"
                          >
                            →
                          </span>
                        )}
                      </div>
                      <p className="mt-4 font-display text-[13px] font-semibold uppercase tracking-[0.1em] text-blood">
                        {step.n} — {step.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink/90">{step.body}</p>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile — the same route read top to bottom as one file, in
              compact rows. The previous vertical stack left screen-high gaps
              of empty paper between stages. */}
          <div className="mx-auto mt-14 max-w-md text-left sm:hidden">
            {L.steps.items.map((step, i) => {
              const isLast = i === L.steps.items.length - 1;
              return (
                <FadeIn
                  key={step.n}
                  delay={0.08 + i * 0.06}
                  className="relative flex gap-4 pb-8 last:pb-0"
                >
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-8 top-16 w-px"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(180deg, rgba(17,17,17,0.28) 0 6px, transparent 6px 12px)",
                      }}
                    />
                  )}
                  <div
                    className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center border bg-paper ${
                      isLast
                        ? "border-blood shadow-[0_10px_24px_-14px_rgba(193,18,31,0.6)]"
                        : "border-ink/18"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-1.5 -top-1.5 bg-ink px-1.5 py-0.5 font-display text-[10px] font-bold text-paper"
                    >
                      {step.n}
                    </span>
                    <ChessPiece
                      piece={STEP_PIECES[i] ?? "king"}
                      className={`h-8 w-8 ${STEP_TONES[i] ?? "text-blood"}`}
                    />
                  </div>
                  <div className="pt-1">
                    <p className="font-display text-[13px] font-semibold uppercase tracking-[0.1em] text-blood">
                      {step.n} — {step.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/90">{step.body}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.5} className="mx-auto mt-16 max-w-xl border-t border-ink/15 pt-10">
            <ChessPiece
              piece="king"
              className="mx-auto h-16 w-16 text-blood drop-shadow-[0_10px_20px_rgba(193,18,31,0.35)] md:h-20 md:w-20"
            />
            <div className="mt-5">
              <BigLine>{L.steps.outcome}</BigLine>
            </div>
          </FadeIn>

          <FadeIn delay={0.56} className="mt-10">
            <PrimaryCta label={L.steps.ctaLabel} price={L.steps.price} id="steps" />
          </FadeIn>
        </Container>
      </Section>

      {/* THREE TERRITORIES — no per-card CTA; see report for reasoning */}
      <Section id="territories" tone="paper">
        <Container className="max-w-4xl text-center">
          <SectionHead center>{L.territories.h2}</SectionHead>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {L.territories.cards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.08} className="border border-ink/15 p-6 text-left">
                <p className="font-display text-base font-bold uppercase tracking-[0.04em] text-blood">
                  {card.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {card.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-inkSoft">
                      {point}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* VALUE STORY — first person */}
      <Section id="story" tone="deep">
        <Container className="max-w-2xl text-center">
          <SectionHead center>{L.story.h2}</SectionHead>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className="leading-relaxed text-bone/90">{L.story.intro}</p>
          </FadeIn>
          <FadeIn delay={0.16} className="mx-auto mt-8 max-w-xl">
            <p className="leading-relaxed text-bone/90">{L.story.sawIntro}</p>
          </FadeIn>
          <ChipList items={L.story.saw} dark />
          <FadeIn delay={0.22} className="mx-auto mt-8 max-w-xl">
            <p className="leading-relaxed text-bone/90">{L.story.studiedIntro}</p>
          </FadeIn>
          <ChipList items={L.story.studied} dark />
          <FadeIn delay={0.28} className="mx-auto mt-6 max-w-xl">
            <p className="leading-relaxed text-bone/90">{L.story.closing}</p>
          </FadeIn>
          <FadeIn delay={0.34} className="mx-auto mt-10 max-w-xl border-t border-white/15 pt-8">
            <p className="text-balance font-editorial text-2xl italic leading-snug text-bone md:text-3xl">
              {L.story.bigLine}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* MAKSIM — short, links to /about */}
      <Section id="maksim" tone="paper">
        <Container className="max-w-2xl text-center">
          <FadeIn className="mx-auto max-w-xs overflow-hidden rounded-lg ring-1 ring-ink/10">
            <Image
              src="/images/about-hero.jpg"
              alt="Максим Теорентер — спорт, командный спорт, военный этап, 1341 день в плену"
              width={1066}
              height={1600}
              sizes="(max-width: 640px) 80vw, 320px"
              className="h-auto w-full"
            />
          </FadeIn>
          <div className="mt-10">
            <SectionHead center>{L.maksim.h2}</SectionHead>
          </div>
          <FadeIn delay={0.1} className="mx-auto mt-6 max-w-xl">
            <p className="font-editorial text-xl italic leading-snug text-ink">{L.maksim.sub}</p>
          </FadeIn>
          <FadeIn delay={0.16} className="mx-auto mt-6 max-w-xl space-y-4">
            {L.maksim.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </FadeIn>
          <ChipList items={L.maksim.give} />
          <FadeIn delay={0.24} className="mt-9">
            <Button href="/about" size="lg" variant="ghost" dataTrack="forge_about_click">
              {L.maksim.ctaLabel} →
            </Button>
          </FadeIn>
        </Container>
      </Section>

      {/* 90 DAYS */}
      <Section id="90days" tone="deep">
        <Container className="max-w-2xl text-center">
          <FadeIn>
            <p className="text-balance font-editorial text-2xl italic leading-snug text-bone md:text-3xl">
              {L.ninety.line1}
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-4">
            <p
              className="text-balance font-display font-bold uppercase leading-tight text-blood"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.2rem)" }}
            >
              {L.ninety.line2}
            </p>
          </FadeIn>
          <FadeIn delay={0.18} className="mx-auto mt-10 max-w-xl">
            <p className="leading-relaxed text-bone/90">{L.ninety.goalsIntro}</p>
          </FadeIn>
          <ul className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2.5">
            {L.ninety.goals.map((g, i) => (
              <FadeIn key={g} delay={0.2 + i * 0.03}>
                <li className="rounded-full border border-white/15 px-4 py-2 text-sm leading-relaxed text-bone/85">
                  {g}
                </li>
              </FadeIn>
            ))}
          </ul>
          <FadeIn delay={0.3} className="mx-auto mt-10 max-w-xl">
            <p className="text-balance font-editorial text-xl italic leading-relaxed text-bone/90">
              {L.ninety.scene}
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="mx-auto mt-10 max-w-xl border-t border-white/15 pt-8">
            <BigLine dark>{L.ninety.bigLine}</BigLine>
          </FadeIn>
          <Disclaimer dark>{L.ninety.disclaimer}</Disclaimer>
        </Container>
      </Section>

      {/* VALUE + PRICE + STACK — CTA #4 */}
      <Section id="price" tone="paper">
        <Container className="max-w-2xl text-center">
          <SectionHead center>{L.price.h2}</SectionHead>
          <FadeIn delay={0.16} className="mx-auto mt-8 max-w-xl space-y-4">
            {L.price.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </FadeIn>
          <FadeIn delay={0.24} className="mt-8">
            <p className="font-display text-xl font-bold uppercase text-ink">{L.price.priceLine}</p>
          </FadeIn>
          <FadeIn delay={0.3} className="mx-auto mt-6 max-w-xl">
            <BigLine>{L.price.bigLine}</BigLine>
          </FadeIn>

          <FadeIn delay={0.36} className="mx-auto mt-14 max-w-xl border-t border-ink/15 pt-10">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-blood">
              {L.price.stackIntro}
            </p>
            <ul className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2.5">
              {L.price.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-ink/15 px-4 py-2 text-sm leading-relaxed text-inkSoft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.4} className="mx-auto mt-10 max-w-xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-blood">
              {L.price.guarantee}
            </p>
          </FadeIn>
          <FadeIn delay={0.42} className="mt-6">
            <PrimaryCta label={L.price.ctaLabel} price={L.price.price} id="price" />
          </FadeIn>
        </Container>
      </Section>

      {/* MISSION */}
      <Section id="mission" tone="deep">
        <Container className="max-w-2xl text-center">
          <SectionHead center>{L.mission.h2}</SectionHead>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl space-y-4">
            {L.mission.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-bone/90">
                {p}
              </p>
            ))}
          </FadeIn>
          <FadeIn delay={0.2} className="mx-auto mt-8 max-w-xl">
            <BigLine dark>{L.mission.bigLine}</BigLine>
          </FadeIn>
        </Container>
      </Section>

      {/* NOT FOR YOU */}
      <Section id="not-for" tone="paper">
        <Container className="max-w-2xl text-center">
          <SectionHead center>{L.notFor.h2}</SectionHead>
          <FadeIn delay={0.1} className="mt-8">
            <p className="leading-relaxed text-ink/90">{L.notFor.intro}</p>
          </FadeIn>
          <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-3">
            {L.notFor.items.map((item, i) => (
              <FadeIn key={item} delay={0.14 + i * 0.05}>
                <li className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm leading-relaxed text-inkSoft">
                  <span className="font-display text-blood">×</span>
                  {item}
                </li>
              </FadeIn>
            ))}
          </ul>
          <FadeIn delay={0.4} className="mx-auto mt-10 max-w-xl border-t border-ink/15 pt-8">
            <BigLine>{L.notFor.bigLine}</BigLine>
          </FadeIn>
        </Container>
      </Section>

      {/* FINAL OFFER + FINAL SCREEN — CTA #5, merged so the "final closing
          screen" is one decision moment, not two competing ones. */}
      <Section id="offer" tone="deep" bare className="flex min-h-[100svh] flex-col items-center justify-center py-24 text-center">
        <Container className="max-w-2xl">
          <FadeIn>
            <span className="kicker">{L.finalOffer.eyebrow}</span>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-6">
            <h2
              className="text-balance font-display font-bold uppercase leading-[1.06] text-bone"
              style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.2rem)" }}
            >
              {L.finalOffer.h2}
            </h2>
          </FadeIn>
          <FadeIn delay={0.18} className="mx-auto mt-6 max-w-lg">
            <p className="leading-relaxed text-bone/90">{L.finalOffer.sub}</p>
          </FadeIn>
          <FadeIn delay={0.26} className="mt-9">
            <PrimaryCta label={L.finalOffer.ctaLabel} price={L.finalOffer.price} id="final_offer" />
          </FadeIn>
          <FadeIn delay={0.32} className="mt-5">
            <p className="text-xs uppercase tracking-[0.1em] text-mist">{L.finalOffer.micro}</p>
          </FadeIn>

          <FadeIn delay={0.4} className="mx-auto mt-16 max-w-lg border-t border-white/15 pt-12">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-mist">
              {L.finalScreen.pre}
            </p>
            <p className="mt-4 leading-relaxed text-bone/90">{L.finalScreen.text}</p>
            <p className="mt-8 text-balance font-editorial text-lg italic leading-snug text-bone/80">
              {L.finalScreen.kicker}
            </p>
            <ChessPiece
              piece="king"
              className="mx-auto mt-8 h-20 w-20 text-blood drop-shadow-[0_12px_24px_rgba(193,18,31,0.45)] md:h-24 md:w-24"
            />
            <p
              className="mt-6 text-balance font-display font-bold uppercase leading-tight text-blood"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
            >
              {L.finalScreen.closing}
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
