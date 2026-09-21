// The one door on «Работа со мной». Gold, like the other dark pages, so the
// three long-form pages read as one system. Goes to the WayForPay button when
// it exists and to Telegram until then.

export function Cta({ label, href, id, className = "" }: { label: string; href: string; id: string; className?: string }) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      data-track={`mentorship_cta_${id}`}
      className={`inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#E0C078] px-9 py-4 text-center font-display text-[15px] font-semibold uppercase leading-tight tracking-[0.1em] text-[#0A0706] shadow-[0_10px_30px_-10px_rgba(224,192,120,0.55)] transition-[transform,box-shadow,background-color] duration-200 ease-out [touch-action:manipulation] hover:-translate-y-0.5 hover:bg-[#B8873B] hover:shadow-[0_16px_36px_-10px_rgba(224,192,120,0.75)] active:translate-y-0 motion-reduce:transform-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#E0C078] ${className}`}
    >
      {label}
    </a>
  );
}
