import Image from "next/image";
import { hairline } from "@/components/forge/primitives";

// Pieces shared by the two Перезагрузка pages (/reboot and /reboot/program).

/** The one door on the page. Internal hrefs stay in-tab; external open a new one. */
export function PrimaryCta({ label, href, id }: { label: string; href: string; id: string }) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      data-track={`reboot_cta_${id}`}
      className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#E0C078] px-9 py-4 text-center font-display text-[15px] font-semibold uppercase leading-tight tracking-[0.1em] text-[#0A0706] shadow-[0_10px_30px_-10px_rgba(224,192,120,0.55)] transition-[transform,box-shadow,background-color] duration-200 ease-out [touch-action:manipulation] hover:-translate-y-0.5 hover:bg-[#B8873B] hover:shadow-[0_16px_36px_-10px_rgba(224,192,120,0.75)] active:translate-y-0 motion-reduce:transform-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#E0C078]"
    >
      {label}
    </a>
  );
}

/** A photograph seated into the page ground, the way the Кузня pain tiles are. */
export function Photo({ src, alt, ground }: { src: string; alt: string; ground: string }) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden rounded-lg border ${hairline}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 680px" className="object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${ground}40 0%, ${ground}00 30%, ${ground}00 62%, ${ground}CC 100%)`,
        }}
      />
    </div>
  );
}
