"use client";

import { useState } from "react";
import { Hit } from "@/components/reboot/Hit";

type Item = { head: string; body: string };

/**
 * «Узнаёшь себя?» — the reader ticks what is his, and the ticked lines travel
 * with him: they are copied to the clipboard as the first message, so the
 * conversation (or the form before payment) starts from his own words rather
 * than from a blank field. Nothing is stored anywhere else.
 */
export function SelfCheck({
  items,
  verdict,
  ctaLabel,
  micro,
  messagePrefix,
  href,
}: {
  items: readonly Item[];
  verdict: string;
  ctaLabel: string;
  micro: string;
  messagePrefix: string;
  href: string;
}) {
  const [picked, setPicked] = useState<boolean[]>(() => items.map(() => false));
  const count = picked.filter(Boolean).length;
  const external = /^https?:/.test(href);

  const toggle = (i: number) => setPicked((p) => p.map((v, j) => (j === i ? !v : v)));

  const copy = () => {
    const lines = items.filter((_, i) => picked[i]).map((it) => `— ${it.head}`);
    if (lines.length === 0) return;
    const text = `${messagePrefix}\n${lines.join("\n")}`;
    try {
      void navigator.clipboard?.writeText(text);
    } catch {
      /* clipboard is a convenience, never a blocker */
    }
  };

  return (
    <div>
      <ul className="grid gap-x-10 gap-y-3 md:grid-cols-2">
        {items.map((it, i) => {
          const on = picked[i];
          return (
            <li key={it.head}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => toggle(i)}
                className={`group flex w-full items-start gap-4 rounded-lg border px-4 py-4 text-left transition-colors duration-200 ${
                  on
                    ? "border-[rgba(224,192,120,0.7)] bg-[rgba(224,192,120,0.08)]"
                    : "border-[rgba(224,192,120,0.2)] hover:border-[rgba(224,192,120,0.45)]"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`mt-[3px] flex size-5 shrink-0 items-center justify-center rounded-sm border transition-colors ${
                    on ? "border-[#E0C078] bg-[#E0C078] text-[#0A0706]" : "border-[rgba(224,192,120,0.5)]"
                  }`}
                >
                  {on && (
                    <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 6.5l2.5 2.5L10 3.5" />
                    </svg>
                  )}
                </span>
                <span>
                  <span className="block font-display text-[17px] font-bold uppercase leading-tight text-[#F3EEE5] md:text-lg">{it.head}</span>
                  <span className="mt-1 block text-[15px] leading-relaxed text-[#A9A199]">{it.body}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#F3EEE5]/90 md:text-xl">
        <Hit text={verdict} tone="bone" />
      </p>

      <div className="mt-8">
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          onClick={copy}
          data-track="mentorship_cta_check"
          className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#E0C078] px-9 py-4 text-center font-display text-[15px] font-semibold uppercase leading-tight tracking-[0.1em] text-[#0A0706] shadow-[0_10px_30px_-10px_rgba(224,192,120,0.55)] transition-[transform,box-shadow,background-color] duration-200 ease-out [touch-action:manipulation] hover:-translate-y-0.5 hover:bg-[#B8873B] active:translate-y-0 motion-reduce:transform-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#E0C078]"
        >
          {ctaLabel}
          {count > 0 && <span className="rounded-full bg-[#0A0706]/15 px-2 py-0.5 text-xs tabular-nums">{count}</span>}
        </a>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-[#A9A199]">{micro}</p>
      </div>
    </div>
  );
}
