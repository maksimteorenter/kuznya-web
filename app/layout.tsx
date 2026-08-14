import type { Metadata } from "next";
import { Oswald, Lora } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kuznya.com"), // TODO: confirm final domain
  title: {
    default: "Кузня — место, где человек создаёт себя",
    template: "%s | Кузня",
  },
  description:
    "Кузня — книги, программы и сообщество для тех, кто строит внутреннюю опору в предельных обстоятельствах.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${oswald.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-void font-body text-bone antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
