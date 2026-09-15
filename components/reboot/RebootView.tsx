import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import {
  Scene,
  Head,
  BigLine,
  Disclaimer,
  bone,
  boneSoft,
  text2,
  goldLight,
  hairline,
} from "@/components/forge/primitives";
import { KUZNYA_TELEGRAM_URL } from "@/lib/site";
import type { REBOOT_LANDING } from "@/lib/content";
import type { Widen } from "@/lib/content-shape";

type Content = Widen<typeof REBOOT_LANDING>;

/**
 * «Перезагрузка» — the PTSD landing. An educational long read: seven
 * principles that take apart the usual explanations of pain and land on the
 * system. Same dark language as Кузня, but a quieter rhythm — no chess, no
 * rank of figures, and «вы» rather than «ты»: this reader is more fragile and
 * is being talked to, not pushed.
 *
 * Every principle ends in a takeaway card that restates its claim. That is how
 * Maksim wrote it — the repetition is the point on a page meant to be skimmed
 * at 2 a.m.
 */
export function RebootView({ L, locale }: { L: Content; locale: "ru" | "uk" }) {
  return (
    <>
      <div data-page-theme="forge" hidden />
      <ScrollProgress />

      {/* 1 — HERO. Question, not claim: the reader is asked to recognise the
          gap between "did everything right" and "still in pain". */}
      <Scene id="hero" bg="bg-[#0A0706]" bare clip={false} className="flex min-h-[100svh] items-center pt-20 pb-14 md:pt-24 md:pb-20">
        <Container className="relative z-10 max-w-3xl text-center">
          <FadeIn>
            <span className={`font-display text-sm font-semibold uppercase tracking-[0.16em] ${goldLight}`}>
              {L.hero.eyebrow}
            </span>
          </FadeIn>
          <FadeIn delay={0.08} className="mt-6">
            <h1
              className={`text-balance font-display font-bold uppercase leading-[1.06] ${bone}`}
              style={{ fontSize: "clamp(1.75rem, 4.4vw, 3.2rem)" }}
            >
              {L.hero.h1}
            </h1>
          </FadeIn>
          <FadeIn delay={0.16} className="mt-8">
            <p className={`font-display text-lg font-semibold uppercase tracking-[0.12em] ${goldLight}`}>
              {L.hero.kicker}
            </p>
          </FadeIn>
          <FadeIn delay={0.24} className="mx-auto mt-6 max-w-2xl">
            <p className={`text-balance text-lg leading-relaxed ${boneSoft}`}>{L.hero.lede}</p>
            <p className={`mt-5 text-balance leading-relaxed ${text2}`}>{L.hero.invite}</p>
          </FadeIn>
        </Container>
      </Scene>

      {/* 2 — CONTRAST. Two paired questions; the reader places himself. */}
      <Scene id="contrast" bg="bg-[#12100C]">
        <Container className="max-w-2xl">
          <div className="space-y-8">
            {L.contrast.map((q, i) => (
              <FadeIn key={q} delay={i * 0.1}>
                <p className={`text-balance font-editorial text-2xl italic leading-snug ${bone} md:text-3xl`}>
                  {q}
                </p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Scene>

      {/* 3 — MYTHS. Six "pain is not…" beats, then the turn. */}
      <Scene id="myths" bg="bg-[#0A0706]">
        <Container className="max-w-2xl">
          <ul className="space-y-7">
            {L.myths.items.map((m, i) => (
              <FadeIn key={m.head} delay={i * 0.06}>
                <li className={`border-l-2 border-[#B8873B] pl-5`}>
                  <p className={`font-display text-lg font-semibold uppercase leading-snug tracking-[0.02em] ${bone}`}>
                    {m.head}
                  </p>
                  <p className={`mt-2 text-base leading-relaxed ${text2}`}>{m.body}</p>
                </li>
              </FadeIn>
            ))}
          </ul>

          <FadeIn delay={0.2} className={`mt-14 border-t ${hairline} pt-10`}>
            <p className={`text-balance text-lg leading-relaxed ${boneSoft}`}>{L.myths.after}</p>
            <p className={`mt-6 text-balance leading-relaxed ${boneSoft}`}>{L.myths.counter}</p>
            <p className={`mt-6 text-balance leading-relaxed ${boneSoft}`}>{L.myths.reveal}</p>
          </FadeIn>
          <FadeIn delay={0.3} className="mt-12">
            <BigLine>{L.myths.bigLine}</BigLine>
          </FadeIn>
        </Container>
      </Scene>

      {/* 4 — THE SEVEN PRINCIPLES. Alternating grounds so each one reads as
          its own chapter. Number huge and dim; claim in gold; body in bone;
          takeaway card at the end restating the claim. */}
      {L.principles.map((p, i) => {
        const grounds = ["bg-[#12100C]", "bg-[#1E1A15]"] as const;
        const bg = grounds[i % 2];
        return (
          <Scene key={p.n} id={`principle-${p.n}`} bg={bg}>
            <Container className="max-w-3xl">
              <div className="grid items-start gap-8 md:grid-cols-[96px_minmax(0,1fr)]">
                <FadeIn>
                  <span
                    aria-hidden="true"
                    className={`block font-display font-bold leading-none ${text2}`}
                    style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)", opacity: 0.35 }}
                  >
                    {p.n}
                  </span>
                </FadeIn>
                <div>
                  <FadeIn delay={0.06}>
                    <p className={`font-display text-xs font-semibold uppercase tracking-[0.16em] ${goldLight}`}>
                      {locale === "uk" ? `Принцип болю ${Number(p.n)}` : `Принцип боли ${Number(p.n)}`}
                    </p>
                    <h2
                      className={`mt-3 text-balance font-display font-bold uppercase leading-[1.1] ${bone}`}
                      style={{ fontSize: "clamp(1.4rem, 3vw, 2.1rem)" }}
                    >
                      {p.title}
                    </h2>
                    <p className={`mt-4 text-balance font-editorial text-xl italic leading-snug ${goldLight}`}>
                      {p.claim}
                    </p>
                  </FadeIn>

                  {p.image && (
                    <FadeIn delay={0.12} className={`mt-8 overflow-hidden rounded-lg border ${hairline}`}>
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        width={1200}
                        height={800}
                        sizes="(max-width: 768px) 100vw, 720px"
                        className="h-auto w-full object-cover"
                      />
                    </FadeIn>
                  )}

                  <FadeIn delay={0.16} className="mt-8 space-y-4">
                    {p.body.map((para) => (
                      <p key={para} className={`text-base leading-relaxed ${boneSoft}`}>
                        {para}
                      </p>
                    ))}
                  </FadeIn>

                  {/* Takeaway card — the principle again, for the skimmer. */}
                  <FadeIn delay={0.22} className={`mt-10 rounded-lg border border-[#B8873B]/50 bg-[#0A0706]/60 px-6 py-6`}>
                    <p className={`font-display text-[11px] font-semibold uppercase tracking-[0.16em] ${goldLight}`}>
                      {locale === "uk" ? `Принцип ${Number(p.n)}` : `Принцип ${Number(p.n)}`}
                    </p>
                    <p className={`mt-3 text-balance font-editorial text-lg italic leading-snug ${bone}`}>
                      {p.title} {p.claim}
                    </p>
                  </FadeIn>
                </div>
              </div>
            </Container>
          </Scene>
        );
      })}

      {/* 5 — WHAT NEXT. Reassurance first, then the system, then the door. */}
      <Scene id="next" bg="bg-[#0A0706]">
        <Container className="max-w-2xl text-center">
          <Head label={L.next.eyebrow} tone="bright">{L.next.h2}</Head>
          <FadeIn delay={0.12} className="mx-auto mt-8 max-w-xl space-y-4 text-left">
            {L.next.paragraphs.map((para) => (
              <p key={para} className={`text-base leading-relaxed ${boneSoft}`}>
                {para}
              </p>
            ))}
          </FadeIn>
          <FadeIn delay={0.2} className="mx-auto mt-10 max-w-xl">
            <p className={`text-balance font-editorial text-xl italic leading-snug ${bone}`}>{L.next.closing}</p>
          </FadeIn>
          <FadeIn delay={0.28} className="mt-9">
            <a
              href={KUZNYA_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="reboot_cta_next"
              className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#E0C078] px-9 py-4 font-display text-[15px] font-semibold uppercase tracking-[0.1em] text-[#0A0706] shadow-[0_10px_30px_-10px_rgba(224,192,120,0.55)] transition-[transform,box-shadow,background-color] duration-200 ease-out [touch-action:manipulation] hover:-translate-y-0.5 hover:bg-[#B8873B] active:translate-y-0 motion-reduce:transform-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#E0C078]"
            >
              {L.next.ctaLabel}
            </a>
            <p className={`mt-4 text-xs uppercase tracking-[0.1em] ${text2}`}>{L.next.micro}</p>
          </FadeIn>

          <FadeIn delay={0.4} className={`mx-auto mt-16 max-w-xl space-y-4 border-t ${hairline} pt-10 text-left`}>
            {L.legal.map((note) => (
              <Disclaimer key={note}>{note}</Disclaimer>
            ))}
          </FadeIn>
        </Container>
      </Scene>
    </>
  );
}
