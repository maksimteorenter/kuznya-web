import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Self-hosted (not next/font/google): this environment's dev server cannot
// reach Google Fonts at runtime, which was causing multi-minute compiles and
// intermittent 500s. Local files avoid any network dependency.
const oswald = localFont({
  src: [
    { path: "../public/fonts/Oswald-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Oswald-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Oswald-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Oswald-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-oswald",
  display: "swap",
});

// Editorial voice — quotes, philosophical statements, the author's inner
// monologue. Contrasts with Oswald's industrial display weight.
const garamond = localFont({
  src: [
    { path: "../public/fonts/CormorantGaramond-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/CormorantGaramond-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/CormorantGaramond-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/CormorantGaramond-400-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/CormorantGaramond-500-Italic.ttf", weight: "500", style: "italic" },
  ],
  variable: "--font-garamond",
  display: "swap",
});

// UI voice — body copy, buttons, nav, FAQ, technical detail.
const inter = localFont({
  src: [
    { path: "../public/fonts/Inter-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Inter-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Inter-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Inter-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teorentermaksim.com"),
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
    <html lang="ru" className={`${oswald.variable} ${garamond.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-void font-body text-bone antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
