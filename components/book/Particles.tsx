"use client";

// Deterministic "floating dust" field — fixed positions so server and
// client render identically (no Math.random at render time).
const PARTICLES = [
  { l: "8%", t: "20%", s: 2, d: 14, o: 0.5 },
  { l: "18%", t: "62%", s: 1.5, d: 18, o: 0.35 },
  { l: "27%", t: "35%", s: 2.5, d: 12, o: 0.4 },
  { l: "41%", t: "78%", s: 1.5, d: 20, o: 0.3 },
  { l: "53%", t: "15%", s: 2, d: 16, o: 0.45 },
  { l: "64%", t: "55%", s: 1.5, d: 22, o: 0.3 },
  { l: "72%", t: "30%", s: 2.5, d: 13, o: 0.4 },
  { l: "81%", t: "68%", s: 1.5, d: 19, o: 0.35 },
  { l: "90%", t: "42%", s: 2, d: 15, o: 0.4 },
  { l: "35%", t: "50%", s: 1, d: 24, o: 0.25 },
  { l: "60%", t: "82%", s: 1.5, d: 17, o: 0.3 },
  { l: "15%", t: "85%", s: 2, d: 21, o: 0.3 },
];

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-bone motion-safe:animate-[float_ease-in-out_infinite]"
          style={{
            left: p.l,
            top: p.t,
            width: p.s,
            height: p.s,
            opacity: p.o,
            animationDuration: `${p.d}s`,
            animationDelay: `${-i * 1.3}s`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
