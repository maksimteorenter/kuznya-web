"use client";

// Real video testimonials from people Maksim worked with — YouTube facade
// pattern: only a static thumbnail + play button ship on page load, the
// actual iframe (youtube-nocookie.com, no tracking cookies until clicked)
// mounts only after a real click. Loading 20+ live YouTube embeds up front
// would tank the page's speed score for no benefit — nobody watches all of
// them on load anyway.

import { useState } from "react";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function VideoTile({ id, index }: { id: string; index: number }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-lg border border-[rgba(224,192,120,0.24)] bg-[#12100C]">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={`Видеоотзыв ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Смотреть видеоотзыв ${index + 1}`}
      className="group relative aspect-video overflow-hidden rounded-lg border border-[rgba(224,192,120,0.24)] bg-[#12100C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E0C078]"
    >
      {/* hqdefault always exists for a public video; maxresdefault doesn't for every upload */}
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E0C078] text-[#0A0706] shadow-[0_10px_24px_-10px_rgba(224,192,120,0.7)] transition-transform group-hover:scale-105">
          <PlayIcon />
        </span>
      </span>
    </button>
  );
}

export function ProofGrid({ ids }: { ids: readonly string[] }) {
  return (
    <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {ids.map((id, i) => (
        <VideoTile key={`${id}-${i}`} id={id} index={i} />
      ))}
    </div>
  );
}
