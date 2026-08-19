import Image from "next/image";

const TILES = [
  "/images/about/tile-1.jpg",
  "/images/about/tile-2.jpg",
  "/images/about/tile-3.jpg",
  "/images/about/tile-4.jpg",
  "/images/about/tile-2.jpg",
  "/images/about/tile-1.jpg",
];

// Bust silhouette, defined once in normalized (0–1) object-bounding-box
// coordinates so it adapts cleanly to the container's own aspect ratio —
// no separate mask image, no cropping mismatch.
const BUST_PATH =
  "M 0.5 0.02 C 0.63 0.02 0.72 0.11 0.72 0.22 C 0.72 0.30 0.68 0.36 0.62 0.40 " +
  "C 0.62 0.44 0.62 0.46 0.65 0.48 C 0.85 0.52 1.0 0.62 1.0 0.78 L 1.0 1.0 " +
  "L 0.0 1.0 L 0.0 0.78 C 0.0 0.62 0.15 0.52 0.35 0.48 C 0.38 0.46 0.38 0.44 0.38 0.40 " +
  "C 0.32 0.36 0.28 0.30 0.28 0.22 C 0.28 0.11 0.37 0.02 0.5 0.02 Z";

/**
 * A bust silhouette filled with a mosaic of real photos — the shape reads as
 * a person built from the moments of his own life, not a stock portrait.
 * Uses an SVG clipPath (objectBoundingBox units) instead of a mask image, so
 * it adapts to any container size without cropping artifacts.
 */
export function PortraitMosaic() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-md">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="bustClip" clipPathUnits="objectBoundingBox">
            <path d={BUST_PATH} />
          </clipPath>
        </defs>
      </svg>

      <div
        className="h-full w-full overflow-hidden"
        style={{ clipPath: "url(#bustClip)" }}
      >
        <div className="grid h-full w-full grid-cols-2 grid-rows-3 gap-[2px] bg-void">
          {TILES.map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={src}
                alt=""
                fill
                sizes="240px"
                className="object-cover grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-ember/10 mix-blend-multiply" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
