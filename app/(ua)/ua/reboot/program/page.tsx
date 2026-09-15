import type { Metadata } from "next";
import { RebootProgramView } from "@/components/reboot/RebootProgramView";
import { REBOOT_PROGRAM_UK } from "@/lib/content.uk";

const L = REBOOT_PROGRAM_UK;

export const metadata: Metadata = {
  title: L.meta.title,
  description: L.meta.description,
  alternates: {
    canonical: "/ua/reboot/program",
    languages: { "ru-UA": "/reboot/program", "uk-UA": "/ua/reboot/program" },
  },
};

export default function RebootProgramPageUk() {
  return <RebootProgramView L={L} locale="uk" />;
}
