"use client";

import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

// A universal back control for sub-pages reached by clicking through — falls
// back to a fixed href when there's no browser history to go back to (direct
// link, new tab).
export function BackLink({
  fallbackHref = "/",
  label = "Назад",
  dark = false,
}: {
  fallbackHref?: string;
  label?: string;
  dark?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = fallbackHref;
        }
      }}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.06em] transition-opacity hover:opacity-70 ${
        dark ? "text-bone/85" : "text-ink/85"
      }`}
    >
      <ArrowLeft weight="bold" className="size-4" />
      {label}
    </button>
  );
}
