import type { Metadata } from "next";
import { RebootProgramView } from "@/components/reboot/RebootProgramView";
import { REBOOT_PROGRAM } from "@/lib/content.reboot-program";

const L = REBOOT_PROGRAM;

export const metadata: Metadata = {
  title: L.meta.title,
  description: L.meta.description,
  alternates: {
    canonical: "/reboot/program",
    languages: { "ru-UA": "/reboot/program", "uk-UA": "/ua/reboot/program" },
  },
};

export default function RebootProgramPage() {
  return <RebootProgramView L={L} locale="ru" />;
}
