import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Scene, bone, boneSoft, text2, goldLight, hairline } from "@/components/forge/primitives";
import { Hit, plain } from "@/components/reboot/Hit";

// The chapter layouts for the Перезагрузка pages. Seven principles and five
// stages are the same shape of content (number, headline, claim, body,
// photograph, one-line takeaway), and rendering all of them the same way is
// exactly what made the first version read as a template. Three families
// rotate instead: a split with the photograph beside the text, a full-bleed
// photograph with the text over it, and a text-first chapter with the number
// standing off to the side. No family appears twice in a row.

export type Chapter = {
  n: string;
  title: string;
  claim: string;
  body: readonly string[];
  image: string;
  imageAlt: string;
  /** One line after the body: the principle restated, or the stage's result. */
  takeaway: string;
  takeawayLabel: string;
};

const grounds = { void: "#0A0706", panel: "#12100C", graphite: "#1E1A15" } as const;
export type Ground = keyof typeof grounds;
const groundClass: Record<Ground, string> = { void: "bg-[#0A0706]", panel: "bg-[#12100C]", graphite: "bg-[#1E1A15]" };

function Numeral({ n, className = "" }: { n: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block select-none font-display font-bold leading-none ${goldLight} ${className}`}
      style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)", letterSpacing: "-0.03em" }}
    >
      {n}
    </span>
  );
}

function Title({ children, size = "md" }: { children: ReactNode; size?: "md" | "lg" }) {
  return (
    <h2
      className={`text-balance font-display font-bold uppercase leading-[1.08] ${bone}`}
      style={{ fontSize: size === "lg" ? "clamp(1.6rem, 3.2vw, 2.6rem)" : "clamp(1.45rem, 2.4vw, 2.1rem)", letterSpacing: "-0.005em" }}
    >
      {children}
    </h2>
  );
}

function Claim({ children }: { children: ReactNode }) {
  return <p className={`mt-5 text-balance font-editorial text-xl italic leading-snug ${goldLight} md:text-2xl`}>{children}</p>;
}

function Body({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-8 space-y-5">
      {items.map((para) => (
        <p key={para} className={`text-[17px] leading-relaxed ${boneSoft} md:text-lg`}>
          <Hit text={para} tone="bone" />
        </p>
      ))}
    </div>
  );
}

/** The restated line: a hairline and italic, not a boxed card. */
function Takeaway({ label, text }: { label: string; text: string }) {
  return (
    <p className={`mt-10 border-t ${hairline} pt-6 font-editorial text-lg italic leading-snug ${bone} md:text-xl`}>
      <span className={`mr-2 font-display text-xs not-italic font-semibold uppercase tracking-[0.14em] ${text2}`}>{label}</span>
      {plain(text)}
    </p>
  );
}

/** Photograph seated into the ground: the tile darkens into the section colour at the bottom. */
function Seated({ src, alt, ground, aspect = "aspect-[4/5]", sizes, top = false }: { src: string; alt: string; ground: Ground; aspect?: string; sizes: string; top?: boolean }) {
  const g = grounds[ground];
  return (
    <div className={`relative ${aspect} overflow-hidden rounded-lg`}>
      <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover ${top ? "object-top" : ""}`} />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${g}33 0%, ${g}00 28%, ${g}00 70%, ${g}D9 100%)` }} />
    </div>
  );
}

/** Family A: photograph beside the text, mirrored on alternate uses. */
export function ChapterSplit({ c, ground, mirrored = false, portrait = false }: { c: Chapter; ground: Ground; mirrored?: boolean; portrait?: boolean }) {
  return (
    <Scene id={`chapter-${c.n}`} bg={groundClass[ground]}>
      <Container>
        <div className={`grid items-start gap-10 md:grid-cols-12 md:gap-12`}>
          <FadeIn className={`md:sticky md:top-28 ${mirrored ? "md:order-2 md:col-span-5 md:col-start-8" : "md:col-span-5"} ${portrait ? "mx-auto w-full max-w-[300px] md:max-w-none" : ""}`}>
            <Seated src={c.image} alt={plain(c.imageAlt)} ground={ground} aspect="aspect-[4/5]" sizes="(max-width: 768px) 100vw, 40vw" top={portrait} />
          </FadeIn>
          <div className={`${mirrored ? "md:order-1 md:col-span-6" : "md:col-span-6 md:col-start-7"}`}>
            <FadeIn delay={0.08}>
              <Numeral n={c.n} />
              <div className="mt-5">
                <Title size="lg">
                  <Hit text={c.title} />
                </Title>
              </div>
              {c.claim && <Claim>{plain(c.claim)}</Claim>}
            </FadeIn>
            <FadeIn delay={0.14}>
              <Body items={c.body} />
              <Takeaway label={c.takeawayLabel} text={c.takeaway} />
            </FadeIn>
          </div>
        </div>
      </Container>
    </Scene>
  );
}

/** Family B: the photograph is the section; the text sits over its darker side. */
export function ChapterBleed({ c, ground }: { c: Chapter; ground: Ground }) {
  const g = grounds[ground];
  return (
    <Scene id={`chapter-${c.n}`} bg={groundClass[ground]} bare className="py-24 md:py-36">
      <div className="absolute inset-0">
        <Image src={c.image} alt={plain(c.imageAlt)} fill sizes="100vw" className="object-cover object-[70%_50%] md:object-[75%_50%]" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${g}F5 0%, ${g}E6 42%, ${g}80 70%, ${g}40 100%), linear-gradient(180deg, ${g}CC 0%, ${g}00 30%, ${g}00 70%, ${g}F2 100%)`,
          }}
        />
      </div>
      <Container className="relative z-10">
        <div className="max-w-xl">
          <FadeIn>
            <Numeral n={c.n} />
            <div className="mt-5">
              <Title size="lg">
                <Hit text={c.title} />
              </Title>
            </div>
            {c.claim && <Claim>{plain(c.claim)}</Claim>}
          </FadeIn>
          <FadeIn delay={0.1}>
            <Body items={c.body} />
            <Takeaway label={c.takeawayLabel} text={c.takeaway} />
          </FadeIn>
        </div>
      </Container>
    </Scene>
  );
}

/** Family C: text first, the number off to the side, the photograph wide underneath. */
export function ChapterOffset({ c, ground }: { c: Chapter; ground: Ground }) {
  return (
    <Scene id={`chapter-${c.n}`} bg={groundClass[ground]}>
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <FadeIn className="md:col-span-3">
            <Numeral n={c.n} className="md:-mt-3" />
          </FadeIn>
          <div className="md:col-span-8 md:col-start-5">
            <FadeIn>
              <Title size="lg">
                <Hit text={c.title} />
              </Title>
              {c.claim && <Claim>{plain(c.claim)}</Claim>}
            </FadeIn>
            <FadeIn delay={0.1} className="max-w-xl">
              <Body items={c.body} />
            </FadeIn>
            <FadeIn delay={0.14} className="mt-10">
              <Seated src={c.image} alt={plain(c.imageAlt)} ground={ground} aspect="aspect-[16/10]" sizes="(max-width: 768px) 100vw, 60vw" />
            </FadeIn>
            <FadeIn delay={0.18}>
              <Takeaway label={c.takeawayLabel} text={c.takeaway} />
            </FadeIn>
          </div>
        </div>
      </Container>
    </Scene>
  );
}

/**
 * The rotation. Index → family, so both pages get the same rhythm:
 * split, bleed, offset, split (mirrored), bleed, offset, split…
 * Consecutive chapters never share a family, and the ground alternates too.
 */
export function ChapterRun({ chapters, portraitLast = false }: { chapters: readonly Chapter[]; portraitLast?: boolean }) {
  const groundCycle: Ground[] = ["panel", "void", "graphite"];
  return (
    <>
      {chapters.map((c, i) => {
        const ground = groundCycle[i % 3];
        const fam = i % 3;
        const isLast = i === chapters.length - 1;
        if (fam === 0) return <ChapterSplit key={c.n} c={c} ground={ground} mirrored={Math.floor(i / 3) % 2 === 1} portrait={portraitLast && isLast} />;
        if (fam === 1) return <ChapterBleed key={c.n} c={c} ground={ground} />;
        return <ChapterOffset key={c.n} c={c} ground={ground} />;
      })}
    </>
  );
}
