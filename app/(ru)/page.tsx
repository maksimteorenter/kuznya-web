import type { Metadata } from "next";
import { KingView } from "@/components/forge/KingView";
import { KING_LANDING } from "@/lib/content.king";

// The home page is the Кузня — from 2026-09-22 the men's programme «Из пешки
// в короля» (lib/content.king.ts). A visitor who types the domain lands on
// the offer, not on a poster. /forge redirects here (next.config.mjs).
const L = KING_LANDING;

export const metadata: Metadata = {
  title: L.meta.title,
  description: L.meta.description,
  alternates: {
    canonical: "/",
    languages: { "ru-UA": "/", "uk-UA": "/ua" },
  },
};

export default function HomePage() {
  return <KingView L={L} />;
}
