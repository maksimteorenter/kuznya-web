import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Analytics } from "@/components/analytics/Analytics";
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
  // Canonical host is the www one the apex redirects to; using the bare domain
  // here made every generated absolute URL a redirect hop.
  metadataBase: new URL("https://www.teorentermaksim.com"),
  title: {
    default: "Максим Теорентер — 1341 день в плену. Книги и клуб «Кузня Силы»",
    template: "%s | Максим Теорентер",
  },
  description:
    "Максим Теорентер: книга «1341 день в плену», клуб «Кузня Силы», программы и работа с внутренними опорами для тех, у кого обстоятельства сильнее планов.",
  applicationName: "Кузня Силы",
  authors: [{ name: "Максим Теорентер" }],
  creator: "Максим Теорентер",
  publisher: "Максим Теорентер",
  keywords: [
    "Максим Теорентер",
    "1341 день в плену",
    "книга о плене",
    "психологическая устойчивость",
    "Кузня Силы",
    "как пережить кризис",
    "мемуары о плене",
  ],
  // Google Search Console ownership token for www.teorentermaksim.com.
  // Google revokes verification if this disappears, so it lives in code
  // rather than an env var that can be lost on a project migration.
  verification: {
    google:
      process.env.NEXT_PUBLIC_GSC_VERIFICATION ??
      "8fP2EqnAI-moZsVGeh6OIjqsnOQZgtgEJnWtf-L8zhw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: "Максим Теорентер",
    locale: "ru_RU",
    alternateLocale: ["uk_UA"],
    type: "website",
  },
  // Matches the paper ground so mobile browser chrome does not clash.
  themeColor: "#EDEAE4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${oswald.variable} ${garamond.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-paper font-body text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-blood focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:uppercase focus:tracking-[0.1em] focus:text-white"
        >
          К содержанию
        </a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
