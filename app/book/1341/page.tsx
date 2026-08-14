import type { Metadata } from "next";
import { Hero } from "@/components/book/Hero";
import { NumberTimeline } from "@/components/book/NumberTimeline";
import { AfterTimelinePhrase } from "@/components/book/AfterTimelinePhrase";
import { NotAPrison } from "@/components/book/NotAPrison";
import { StoryTimeline } from "@/components/book/StoryTimeline";
import { BigNumberBlock } from "@/components/book/BigNumberBlock";
import { TurningPoint } from "@/components/book/TurningPoint";
import { WhatBookGives } from "@/components/book/WhatBookGives";
import { InvulnerabilityBlock } from "@/components/book/InvulnerabilityBlock";
import { ForWhomFilter } from "@/components/book/ForWhomFilter";
import { BookArtifact } from "@/components/book/BookArtifact";
import { MeaningOfPurchase } from "@/components/book/MeaningOfPurchase";
import { AuthorBlock } from "@/components/book/AuthorBlock";
import { QuoteScreen } from "@/components/book/QuoteScreen";
import { ForgeBridge } from "@/components/book/ForgeBridge";
import { FinalScreen } from "@/components/book/FinalScreen";
import { StickyMobileCTA } from "@/components/book/StickyMobileCTA";
import { BOOK, QUOTES } from "@/lib/content";

const title = "1341 день в изоляции — Как стать неуязвимым | Максим Теорентер";
const description =
  "Книга о 1341 дне плена, внутренней свободе, психологической устойчивости и способности человека сохранить себя в предельных обстоятельствах.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "book",
    url: "/book/1341",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 1867,
        alt: `Обложка книги «${BOOK.title}»`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-cover.jpg"],
  },
  alternates: {
    canonical: "/book/1341",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: BOOK.title,
  alternateName: BOOK.subtitle,
  author: {
    "@type": "Person",
    name: BOOK.author,
  },
  numberOfPages: BOOK.pages,
  inLanguage: "ru",
  isAccessibleForFree: false,
  offers: {
    "@type": "Offer",
    price: BOOK.price.replace("$", ""),
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    // TODO: replace with the real checkout URL once payment is wired up.
    url: "https://kuznya.com/book/1341",
  },
};

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <NumberTimeline />
      <AfterTimelinePhrase />
      <NotAPrison />
      <StoryTimeline />
      <BigNumberBlock />
      <TurningPoint />
      <QuoteScreen quote={QUOTES[0]} />
      <WhatBookGives />
      <QuoteScreen quote={QUOTES[1]} />
      <InvulnerabilityBlock />
      <ForWhomFilter />
      <QuoteScreen quote={QUOTES[2]} />
      <BookArtifact />
      <MeaningOfPurchase />
      <AuthorBlock />
      <ForgeBridge />
      <FinalScreen />
      <div className="h-20 md:hidden" aria-hidden="true" />
      <StickyMobileCTA />
    </>
  );
}
