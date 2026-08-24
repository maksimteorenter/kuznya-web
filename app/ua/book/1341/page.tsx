import type { Metadata } from "next";
import { Hero } from "@/components/book/Hero";
import { PainBlock } from "@/components/book/PainBlock";
import { NumberRevealBlock } from "@/components/book/NumberRevealBlock";
import { PromiseBlock } from "@/components/book/PromiseBlock";
import { ForWhomBlock } from "@/components/book/ForWhomBlock";
import { BookArtifact } from "@/components/book/BookArtifact";
import { FinalScreen } from "@/components/book/FinalScreen";
import { StickyMobileCTA } from "@/components/book/StickyMobileCTA";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { ScrollDepth } from "@/components/analytics/ScrollDepth";
import { BOOK } from "@/lib/content";
import { T } from "@/lib/i18n";

const t = T.uk;

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    type: "book",
    url: "/ua/book/1341",
    locale: "uk_UA",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 1867,
        alt: `Обкладинка книги «${t.bookTitle}»`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: t.meta.title,
    description: t.meta.description,
    images: ["/images/og-cover.jpg"],
  },
  alternates: {
    canonical: "/ua/book/1341",
    languages: {
      ru: "/book/1341",
      uk: "/ua/book/1341",
      "x-default": "/book/1341",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: t.bookTitle,
  alternateName: t.bookSubtitle,
  author: { "@type": "Person", name: BOOK.author },
  numberOfPages: BOOK.pages,
  inLanguage: "uk",
  isAccessibleForFree: false,
  offers: {
    "@type": "Offer",
    price: BOOK.price.replace("$", ""),
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://www.teorentermaksim.com/ua/book/1341",
  },
};

/**
 * Ukrainian landing. Same sales scenario and same components as the Russian
 * page — only the copy layer differs, so the two can never drift apart in
 * structure. Blocks whose copy is not translated yet are simply not rendered
 * rather than shown in the wrong language.
 */
export default function BookPageUa() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ScrollProgress />
      <ScrollDepth />
      <Hero locale="uk" />
      <PainBlock locale="uk" />
      <NumberRevealBlock locale="uk" />
      <PromiseBlock locale="uk" />
      <ForWhomBlock locale="uk" />
      <BookArtifact locale="uk" />
      <FinalScreen locale="uk" />
      <div className="h-20 md:hidden" aria-hidden="true" />
      <StickyMobileCTA locale="uk" />
    </>
  );
}
