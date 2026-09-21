import type { Metadata } from "next";
import { ForgeView } from "@/components/forge/ForgeView";
import { KUZNYA_LANDING_UK } from "@/lib/content.uk";

// Ukrainian home: the Кузня, same as the Russian root.
const L = KUZNYA_LANDING_UK;

export const metadata: Metadata = {
  title: L.meta.title,
  description: L.meta.description,
  alternates: {
    canonical: "/ua",
    languages: { "ru-UA": "/", "uk-UA": "/ua" },
  },
};

export default function HomePageUk() {
  return <ForgeView L={L} locale="uk" />;
}
