import type { Metadata } from "next";
import { ForgeView } from "@/components/forge/ForgeView";
import { KUZNYA_LANDING_UK } from "@/lib/content.uk";

const L = KUZNYA_LANDING_UK;

export const metadata: Metadata = {
  title: L.meta.title,
  description: L.meta.description,
  alternates: {
    canonical: "/ua/forge",
    languages: { "ru-UA": "/forge", "uk-UA": "/ua/forge" },
  },
};

export default function ForgePageUk() {
  return <ForgeView L={L} locale="uk" />;
}
