import type { Metadata } from "next";
import { ForgeView } from "@/components/forge/ForgeView";
import { KUZNYA_LANDING } from "@/lib/content";

// The home page *is* the Кузня. Maksim asked (2026-09-21) to drop the
// portrait-and-slogan cover that used to sit in front of it: a visitor who
// types the domain should land on the offer, not on a poster. /forge still
// resolves — it redirects here (next.config.mjs) so every old link holds.
const L = KUZNYA_LANDING;

export const metadata: Metadata = {
  title: L.meta.title,
  description: L.meta.description,
  alternates: {
    canonical: "/",
    languages: { "ru-UA": "/", "uk-UA": "/ua" },
  },
};

export default function HomePage() {
  return <ForgeView L={L} locale="ru" />;
}
