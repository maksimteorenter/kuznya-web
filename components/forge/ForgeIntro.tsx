"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ~3.5s procedural forge-strike animation, canvas 2D (no WebGL, no video
 * asset). Sits absolutely positioned over the Hero section (which is already
 * fully rendered underneath), so it can never cause layout shift — it just
 * fades to `opacity: 0` and unmounts. `prefers-reduced-motion: reduce` skips
 * it entirely: the component renders nothing and the Hero is visible from
 * frame one. Runs once per mount, capped particle count, rAF-driven.
 */
export function ForgeIntro() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<"playing" | "done" | "skipped">("playing");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase("skipped");
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setPhase("skipped");
      return;
    }

    let raf = 0;
    let start = 0;
    const DURATION = 3400; // ms
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const parent = canvas!.parentElement;
      const w = parent?.clientWidth ?? window.innerWidth;
      const h = parent?.clientHeight ?? window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    // Capped, deterministic-ish sparks — cheap, no physics library.
    const SPARK_COUNT = 26;
    const sparks = Array.from({ length: SPARK_COUNT }, (_, i) => {
      const angle = (Math.PI * 2 * i) / SPARK_COUNT + Math.random() * 0.4;
      const speed = 60 + Math.random() * 140;
      return {
        angle,
        speed,
        life: 0.55 + Math.random() * 0.3,
        delay: 900 + Math.random() * 140,
      };
    });

    function draw(t: number) {
      if (!start) start = t;
      const elapsed = t - start;
      const w = canvas!.clientWidth;
      const h = canvas!.clientHeight;
      const cx = w / 2;
      const cy = h / 2;

      ctx!.clearRect(0, 0, w, h);

      // 0.0–1.0 grows through the whole clip, drives the base glow/cool arc
      const p = Math.min(elapsed / DURATION, 1);

      // Base: near-black rough metal ground, darkest at 0, cooling to graphite
      const groundDark = 6 + p * 4;
      ctx!.fillStyle = `rgb(${groundDark},${groundDark},${groundDark + 1})`;
      ctx!.fillRect(0, 0, w, h);

      // Faint procedural "grain" streaks stand in for a metal texture.
      ctx!.globalAlpha = 0.05;
      ctx!.strokeStyle = "#ffffff";
      for (let i = 0; i < 18; i++) {
        const y = (i / 18) * h + Math.sin(i * 12.9) * 6;
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(w, y + Math.sin(i) * 10);
        ctx!.stroke();
      }
      ctx!.globalAlpha = 1;

      // Ember glow growing from 0–1s, in the center
      if (elapsed < 1000) {
        const g = elapsed / 1000;
        const grad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.35 * g);
        grad.addColorStop(0, `rgba(193,18,31,${0.55 * g})`);
        grad.addColorStop(1, "rgba(193,18,31,0)");
        ctx!.fillStyle = grad;
        ctx!.fillRect(0, 0, w, h);
      }

      // Hammer-strike flash around 1.0s
      const strikeAt = 1000;
      if (elapsed >= strikeAt && elapsed < strikeAt + 220) {
        const f = 1 - (elapsed - strikeAt) / 220;
        ctx!.fillStyle = `rgba(255,235,220,${0.85 * f})`;
        ctx!.fillRect(0, 0, w, h);
        // Light shake via a translated re-draw of the vignette
        const shakeX = (Math.random() - 0.5) * 6 * f;
        const shakeY = (Math.random() - 0.5) * 6 * f;
        ctx!.save();
        ctx!.translate(shakeX, shakeY);
        ctx!.restore();
      }

      // Sparks, launched right at the strike
      if (elapsed >= strikeAt) {
        for (const s of sparks) {
          const local = elapsed - strikeAt - s.delay + 900; // stagger a bit
          if (local < 0) continue;
          const lt = local / 1000;
          if (lt > s.life) continue;
          const dist = s.speed * lt;
          const x = cx + Math.cos(s.angle) * dist;
          const y = cy + Math.sin(s.angle) * dist * 0.6 - lt * 40; // slight upward drift
          const alpha = 1 - lt / s.life;
          ctx!.fillStyle = `rgba(232,178,61,${alpha})`;
          ctx!.beginPath();
          ctx!.arc(x, y, 1.6, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      // Heat line tracing the wordmark, 1.6s–2.6s
      const traceStart = 1600;
      const traceEnd = 2600;
      if (elapsed >= traceStart) {
        const tp = Math.min((elapsed - traceStart) / (traceEnd - traceStart), 1);
        ctx!.save();
        ctx!.font = `700 ${Math.min(w * 0.16, 160)}px var(--font-oswald), sans-serif`;
        ctx!.textAlign = "center";
        ctx!.textBaseline = "middle";
        // Clip to a widening rect that reveals the glowing word left-to-right.
        ctx!.beginPath();
        ctx!.rect(0, 0, w * tp, h);
        ctx!.clip();
        ctx!.shadowColor = "rgba(232,178,61,0.9)";
        ctx!.shadowBlur = 22;
        ctx!.fillStyle = "#F5F3EF";
        ctx!.fillText("КУЗНЯ", cx, cy);
        ctx!.restore();
      }

      // Cool to graphite + crossfade out, 2.8s–3.4s handled by CSS opacity below
      if (elapsed < DURATION) {
        raf = requestAnimationFrame(draw);
      } else {
        setPhase("done");
      }
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  if (phase === "skipped") return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-30 transition-opacity duration-700 ease-out ${
        phase === "done" ? "opacity-0" : "opacity-100"
      }`}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
