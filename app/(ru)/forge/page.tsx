import type { Metadata } from "next";
import { ForgeView } from "@/components/forge/ForgeView";
import { KUZNYA_LANDING } from "@/lib/content";

const L = KUZNYA_LANDING;

export const metadata: Metadata = {
  title: L.meta.title,
  description: L.meta.description,
  alternates: {
    canonical: "/forge",
    languages: { "ru-UA": "/forge", "uk-UA": "/ua/forge" },
  },
};

export default function ForgePage() {
  return <ForgeView L={L} locale="ru" />;
}
