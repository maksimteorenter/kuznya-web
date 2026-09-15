import type { Metadata } from "next";
import { RebootView } from "@/components/reboot/RebootView";
import { REBOOT_LANDING_UK } from "@/lib/content.uk";

const L = REBOOT_LANDING_UK;

export const metadata: Metadata = {
  title: L.meta.title,
  description: L.meta.description,
  alternates: {
    canonical: "/ua/reboot",
    languages: { "ru-UA": "/reboot", "uk-UA": "/ua/reboot" },
  },
};

export default function RebootPageUk() {
  return <RebootView L={L} locale="uk" />;
}
