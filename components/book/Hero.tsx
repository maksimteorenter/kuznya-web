"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Particles } from "@/components/book/Particles";
import { BOOK } from "@/lib/content";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-void">
      {/* Base cinematic gradient: darkness, concrete, cold light from above */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(230,225,215,0.09), transparent 60%), radial-gradient(ellipse 90% 60% at 50% 100%, rgba(0,0,0,0.75), transparent 60%), linear-gradient(180deg, #08080a 0%, #101012 55%, #08080a 100%)",
        }}
      />
      {/* Narrow directed light beam */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-full w-[26%] -translate-x-1/2 opacity-40 mix-blend-screen"
        style={{
          background:
            "linear-gradient(180deg, rgba(230,225,215,0.16) 0%, rgba(230,225,215,0.03) 45%, transparent 75%)",
          filter: "blur(6px)",
        }}
        aria-hidden="true"
      />
      <Particles />

      <Container className="relative z-10 flex flex-col items-center py-32 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease }}
          className="kicker"
        >
          Основано на реальных событиях
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.3, ease }}
          className="mt-8 font-display font-bold leading-[0.9] text-ember-bright"
          style={{ fontSize: "clamp(5rem, 16vw, 12rem)" }}
        >
          {BOOK.days}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.75, ease }}
          className="mt-2 font-display font-semibold uppercase tracking-[0.05em] text-bone"
          style={{ fontSize: "clamp(1.5rem, 4.2vw, 3rem)" }}
        >
          День в изоляции
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15, ease }}
          className="mt-10 max-w-xl text-balance font-body text-lg leading-relaxed text-bone/90 md:text-xl"
        >
          Человека можно лишить свободы. Но гораздо сложнее заставить его
          отказаться от самого себя.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="#book" size="lg">
            Читать книгу
          </Button>
          <Button href="#story" variant="ghost" size="lg">
            Узнать историю
          </Button>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <span className="font-display text-[11px] uppercase tracking-[0.2em] text-mist">
          Основано на реальных событиях
        </span>
      </motion.div>
    </section>
  );
}
