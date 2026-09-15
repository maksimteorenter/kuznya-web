import type { ReactNode } from "react";

/**
 * Renders a content string with `**…**` spans as emphasis — the "hits on
 * words" the long-form pages use so a skimmer reads the argument from the
 * bright fragments alone. The markers live in lib/content.ts next to the
 * words they belong to, so the Ukrainian file carries its own.
 *
 * `bright` — gold, for display headlines and pull lines.
 * `bone`   — warm white, for emphasis inside a grey/soft paragraph.
 */
export function Hit({ text, tone = "bright" }: { text: string; tone?: "bright" | "bone" }) {
  const cls = tone === "bright" ? "text-[#E0C078]" : "font-semibold text-[#F3EEE5]";
  const parts = text.split(/\*\*(.+?)\*\*/g);
  const out: ReactNode[] = [];
  parts.forEach((part, i) => {
    if (!part) return;
    out.push(
      i % 2 === 1 ? (
        <span key={i} className={cls}>
          {part}
        </span>
      ) : (
        part
      ),
    );
  });
  return <>{out}</>;
}

/** The same string with the markers stripped — for alt text, titles, meta. */
export function plain(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1");
}
