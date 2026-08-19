"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Particles } from "@/components/book/Particles";
import { InteractiveBookMockup } from "@/components/book/InteractiveBookMockup";
import { DayCounter } from "@/components/book/DayCounter";
import { BOOK } from "@/lib/content";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-void">
      {/* Base cinematic gradient: obsidian depth, cold light from above */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 70% 0%, rgba(242,238,229,0.08), transparent 60%), radial-gradient(ellipse 90% 60% at 50% 100%, rgba(0,0,0,0.7), transparent 60%), linear-gradient(180deg, #101113 0%, #16171a 55%, #101113 100%)",
        }}
      />
      {/* Narrow directed light beam, falling on the book */}
      <div
        className="pointer-events-none absolute right-[12%] top-0 h-full w-[30%] opacity-30 mix-blend-screen"
        style={{
          background:
            "linear-gradient(180deg, rgba(242,238,229,0.16) 0%, rgba(242,238,229,0.03) 45%, transparent 75%)",
          filter: "blur(6px)",
        }}
        aria-hidden="true"
      />
      <Particles />

      <Container className="relative z-10 grid grid-cols-1 items-center gap-16 py-28 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:py-32">
        <div className="text-center md:text-left">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="kicker"
          >
            <DayCounter /> · день в плену
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.5, ease }}
            className="mt-6 text-balance font-display font-bold uppercase leading-[1.05] text-bone"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)" }}
          >
            У тебя могут забрать{" "}
            <span className="relative inline-block text-ember-bright">
              почти всё.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.18, delay: 1.85, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-ember-bright"
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.75, ease }}
            className="mt-2 text-balance font-display font-bold uppercase leading-[1.05] text-bone"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)" }}
          >
            Вопрос — что останется внутри?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2, ease }}
            className="mx-auto mt-7 max-w-md text-balance font-body leading-relaxed text-mist md:mx-0"
          >
            Реальная история человека, который провёл {BOOK.days} дней в
            плену — и искал способы сохранить себя там, где привычные
            правила жизни больше не работали.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.25, ease }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row md:justify-start"
          >
            <Button href="#price" size="lg">
              Получить книгу — {BOOK.price}
            </Button>
            <Button href="#story" variant="ghost" size="lg">
              Узнать историю ↓
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-6 font-display text-[11px] uppercase tracking-[0.2em] text-mist"
          >
            Основано на реальных событиях
          </motion.p>
        </div>

        {/* The one 3D moment — the book itself, lit and dominant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease }}
          className="flex justify-center md:justify-end"
        >
          <div className="scale-100 md:scale-[1.1]">
            <InteractiveBookMockup />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
