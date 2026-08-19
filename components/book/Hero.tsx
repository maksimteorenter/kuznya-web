"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BOOK } from "@/lib/content";

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

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-paper">
      {/* Portrait occupies the right half; black and white, hard contrast. */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[56%]">
        <motion.div
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease }}
          className="relative h-full w-full"
        >
          <Image
            src="/images/hero-portrait.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 56vw"
            className="photo-bw-hard object-cover object-[52%_12%]"
          />

          {/* The red slash — one deliberate cut down the far edge of the frame.
              Kept off the face on purpose: it should read as a mark on the
              image, not as damage to the man in it. */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.9, delay: 0.9, ease }}
            className="pointer-events-none absolute -top-[10%] right-[3%] h-[130%] w-[86px] origin-top bg-blood/90 mix-blend-multiply md:w-[120px]"
            style={{ transform: "rotate(14deg)" }}
            aria-hidden="true"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.9, delay: 1.02, ease }}
            className="pointer-events-none absolute -top-[10%] right-[13%] h-[130%] w-[14px] origin-top bg-blood-dark/90 mix-blend-multiply md:w-[18px]"
            style={{ transform: "rotate(14deg)" }}
            aria-hidden="true"
          />

          {/* Paper bleeds over the photo so the headline never fights it. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #EDEAE4 0%, rgba(237,234,228,0.88) 16%, rgba(237,234,228,0) 52%)",
            }}
            aria-hidden="true"
          />
          {/* On phones the photo sits directly under the copy, so it needs a
              much heavier scrim than the desktop side-by-side layout. */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(237,234,228,0.95) 0%, rgba(237,234,228,0.9) 55%, rgba(237,234,228,0.72) 80%, rgba(237,234,228,0.55) 100%)",
            }}
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* 1341 sits low over the darkest part of the frame, where knocked-out
          paper actually reads against the photo. */}
      <motion.span
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.35, ease }}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-8 z-20 hidden select-none font-display font-bold leading-none text-paper md:right-16 md:block"
        style={{
          fontSize: "clamp(3rem, 7vw, 6.5rem)",
          letterSpacing: "-0.02em",
          textShadow: "0 2px 30px rgba(11,11,12,0.55)",
        }}
      >
        {BOOK.days}
      </motion.span>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-container items-center px-6 md:px-10">
        <div className="w-full max-w-[560px] py-24 md:py-0">
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
            className="mt-6 font-display text-[11px] font-medium uppercase tracking-[0.28em] text-inkFaint"
          >
            {BOOK.author} · Мемуары
          </motion.p>

          <h1
            className="mt-5 font-display font-bold uppercase leading-[1.06] text-ink"
            style={{ fontSize: "clamp(1.8rem, 5.2vw, 3.9rem)", letterSpacing: "-0.01em" }}
          >
            <SetType text="Что ты будешь делать," delay={0.35} />
            <br />
            <SetType text="когда у тебя заберут" delay={0.5} />
            <br />
            <SetType text="всё?" delay={0.72} red />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="mt-7 max-w-[430px] text-balance leading-relaxed text-inkSoft"
          >
            {BOOK.days} день в плену. Реальная история человека, у которого
            забрали свободу, имя и любые планы — и который искал, что
            остаётся, когда не остаётся ничего.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.25, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#price" size="lg">
              Получить книгу — {BOOK.price}
            </Button>
            <Button href="#story" variant="ghost" size="lg">
              Читать отрывок
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.5 }}
            className="mt-8 font-display text-[10px] uppercase tracking-[0.26em] text-inkFaint"
          >
            Основано на реальных событиях
          </motion.p>
        </div>
      </div>

    </section>
  );
}
