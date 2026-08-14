"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * A physically-proportioned 3D book cover built from plain CSS 3D
 * transforms (no WebGL needed for a single rotating object). Proportions
 * mirror the real print spec: 130mm cover width, 16.1mm spine.
 */
export function BookMockup3D() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 1], [-34, -14]);

  return (
    <div ref={wrapRef} className="flex flex-col items-center">
      <div className="[perspective:1800px]">
        <motion.div
          style={{
            rotateY,
            rotateX: 2,
            transformStyle: "preserve-3d",
          }}
          className="relative h-[380px] w-[250px] md:h-[460px] md:w-[300px]"
        >
          {/* Spine */}
          <div
            className="absolute left-0 top-0 h-full w-[34px] overflow-hidden brightness-90 md:w-[40px]"
            style={{ transformOrigin: "left center", transform: "rotateY(-90deg)" }}
          >
            <Image
              src="/images/cover-spine.jpg"
              alt=""
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>

          {/* Page edge */}
          <div
            className="absolute right-0 top-[3px] h-[calc(100%-6px)] w-[34px] md:w-[40px]"
            style={{
              transformOrigin: "right center",
              transform: "rotateY(90deg)",
              background:
                "repeating-linear-gradient(180deg, #ece6d4 0px, #ece6d4 2px, #d9d1ba 2px, #d9d1ba 3px)",
              boxShadow: "inset -3px 0 6px rgba(0,0,0,0.25)",
            }}
          />

          {/* Front cover */}
          <div className="absolute inset-0 overflow-hidden shadow-[0_50px_90px_-20px_rgba(0,0,0,0.7)]">
            <Image
              src="/images/cover-front.jpg"
              alt="Обложка книги «1341 день в изоляции»"
              fill
              sizes="(max-width: 768px) 250px, 300px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <div
        className="mt-2 h-9 w-[220px] rounded-[50%] md:w-[260px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, transparent 72%)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
