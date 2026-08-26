// Maksim's mark — the pyramid with the all-seeing eye and his initials.
// Drawn as a CSS mask rather than an <img> so the glyph inherits whatever
// text colour it sits in: ink on paper, bone on deep. One cached file,
// both tones, no duplicated assets.
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        maskImage: "url(/images/logo-mark.svg)",
        WebkitMaskImage: "url(/images/logo-mark.svg)",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}
