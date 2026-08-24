"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { EyeBar } from "@/components/book/EyeBar";
import { ReadExcerptButton } from "@/components/book/ReadExcerptButton";
import { BOOK } from "@/lib/content";
import { T, type Locale } from "@/lib/i18n";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Headline words rise into place one at a time, like type being set. */
function SetType({
  text,
  className = "",
  delay = 0,
  red = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  red?: boolean;
}) {
  return (
    <span className={`inline-block ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.85, delay: delay + i * 0.075, ease }}
            className={`inline-block ${red ? "text-blood" : ""}`}
          >
            {word}
            {i < text.split(" ").length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Hero({ locale = "ru" }: { locale?: Locale }) {
  const t = T[locale].hero;
  const ref = useRef<HTMLElement>(null);
  // Scroll-linked drift: the photo and the numeral move at different speeds,
  // so the hero has real depth as it leaves the screen. Motion values only —
  // no re-renders, no layout work.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const numeralY = useTransform(scrollYProgress, [0, 1], ["0%", "-140%"]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-paper">
      {/* Phones: the poster leads — photo with the eye bar as its own block,
          then the copy on clean paper. No scrim fighting the face. */}
      <div className="relative h-[44svh] w-full overflow-hidden md:hidden">
        <Image
          src="/images/hero-portrait.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="photo-bw object-cover object-[52%_12%]"
        />
        <div className="grain-overlay opacity-[0.09]" aria-hidden="true" />
        <EyeBar objectX={0.52} objectY={0.12} delay={0.7} />
        <div
          className="absolute inset-x-0 bottom-0 h-14"
          style={{ background: "linear-gradient(180deg, transparent, #EDEAE4)" }}
          aria-hidden="true"
        />
      </div>

      {/* Desktop: portrait occupies the right half; black and white, hard contrast. */}
      <div className="absolute inset-y-0 right-0 hidden md:block md:w-[56%]">
        <motion.div
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease }}
          style={{ y: photoY }}
          className="relative h-full w-full"
        >
          <Image
            src="/images/hero-portrait.jpg"
            alt=""
            fill
            priority
            sizes="56vw"
            className="photo-bw object-cover object-[52%_12%]"
          />
          {/* Film grain over the photo: hides the softness of the source frame
              and reads as stock, not compression. */}
          <div className="grain-overlay opacity-[0.09]" aria-hidden="true" />

          {/* Censor bar across the eyes — anchored to the photograph itself,
              so it stays on the eyes at any viewport size. */}
          <EyeBar objectX={0.52} objectY={0.12} />

          {/* Paper bleeds over the photo so the headline never fights it. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #EDEAE4 0%, rgba(237,234,228,0.82) 13%, rgba(237,234,228,0.25) 34%, rgba(237,234,228,0) 46%)",
            }}
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* 1341 sits low over the darkest part of the frame, where knocked-out
          paper actually reads against the photo. */}
      {/* Outer layer carries the scroll parallax, inner one the entrance —
          they'd fight over the same transform on a single element. */}
      <motion.div
        style={{ y: numeralY }}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-8 z-20 hidden md:right-16 md:block"
      >
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.35, ease }}
          className="block select-none font-display font-bold leading-none text-paper"
          style={{
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            letterSpacing: "-0.02em",
            textShadow: "0 2px 30px rgba(11,11,12,0.55)",
          }}
        >
          {BOOK.days}
        </motion.span>
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-container items-start px-6 md:min-h-[100svh] md:items-center md:px-10">
        <div className="w-full max-w-[560px] pb-24 pt-8 md:py-0">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease }}
            className="blood-rule origin-left"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 font-display text-sm font-medium uppercase tracking-[0.16em] text-inkFaint"
          >
            {t.role}
          </motion.p>

          <h1
            className="mt-5 font-display font-bold uppercase leading-[1.06] text-ink"
            style={{ fontSize: "clamp(1.8rem, 5.2vw, 3.9rem)", letterSpacing: "-0.01em" }}
          >
            <SetType text={t.h1[0]} delay={0.35} />
            <br />
            <SetType text={t.h1[1]} delay={0.5} />
            <br />
            <SetType text={t.h1Red} delay={0.72} red />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="mt-7 max-w-[440px] text-balance text-[17px] leading-relaxed text-inkSoft"
          >
            {t.lede}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.25, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#price" size="lg" dataTrack="cta_to_price">
              {t.buy} — {BOOK.price}
            </Button>
            <ReadExcerptButton size="lg" withCover locale={locale} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.5 }}
            className="mt-8 font-display text-[13px] uppercase tracking-[0.16em] text-inkFaint"
          >
            {t.basedOn}
          </motion.p>
        </div>
      </div>

    </section>
  );
}
