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

// Chess glyphs carry the pawn→king throughline Maksim asked for. Unicode
// rather than hand-drawn SVG: the shapes are instantly readable, weigh
// nothing, and take colour from the existing tokens. The ︎ keeps
// browsers from swapping in a colour emoji.
const PIECES = {
  pawn: "♟",
  knight: "♞",
  rook: "♜",
  queen: "♛",
  king: "♚",
} as const;

function ChessGlyph({
  piece,
  size = "1.6rem",
  className = "",
}: {
  piece: keyof typeof PIECES;
  size?: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block select-none leading-none ${className}`}
      style={{ fontSize: size }}
    >
      {PIECES[piece]}
      {"︎"}
    </span>
  );
}

// Pawn → knight → rook → king across the four stages of the 90-day route.
const STEP_PIECES = ["pawn", "knight", "rook", "king"] as const;
// The same climb across the five levels of work, ending on the king.
const LEVEL_PIECES = ["pawn", "knight", "rook", "queen", "king"] as const;

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
              <FadeIn key={item.n} delay={i * 0.05} className="bg-deep px-3 py-6">
                <ChessGlyph
                  piece={LEVEL_PIECES[i] ?? "king"}
                  size="1.4rem"
                  className={i === LEVEL_PIECES.length - 1 ? "text-blood" : "text-bone/45"}
                />
                <p className="mt-2 font-display text-2xl font-bold text-blood">{item.n}</p>
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
        <Container className="max-w-2xl text-center">
          <SectionHead center label={L.steps.eyebrow}>
            {L.steps.h2}
          </SectionHead>
          <FadeIn delay={0.1} className="mx-auto mt-8 max-w-xl">
            <p className="leading-relaxed text-ink/90">{L.steps.intro}</p>
          </FadeIn>

          {/* Each stage is marked by a stronger piece — the pawn advancing up
              the board is the whole point of the section. */}
          <div className="mx-auto mt-14 max-w-xl space-y-12 text-left">
            {L.steps.items.map((step, i) => (
              <FadeIn key={step.n} delay={0.15 + i * 0.08}>
                <div className="flex items-baseline gap-4">
                  <ChessGlyph
                    piece={STEP_PIECES[i] ?? "king"}
                    size="1.7rem"
                    className="shrink-0 text-ink/30"
                  />
                  <div>
                    <span className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-blood">
                      {step.n} — {step.title}
                    </span>
                  </div>
                </div>
                <p className="mt-3 leading-relaxed text-ink/90">{step.body}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5} className="mx-auto mt-14 max-w-xl border-t border-ink/15 pt-10">
            <ChessGlyph piece="king" size="2.6rem" className="text-blood" />
            <div className="mt-4">
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
            <ChessGlyph piece="king" size="3rem" className="mt-8 text-blood" />
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
