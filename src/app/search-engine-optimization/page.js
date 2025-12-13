// app/search-engine-optimization/page.js
import Home from "../components/SEO";
import { Fragment } from "react";

export const metadata = {
  title: "Best SEO Agency in India - Digital Paaji Consulting Services",
  description:
    "Digital Paaji is the top SEO agency in India to grow your online visibility, boost website traffic and increase conversions. Contact us for the best SEO services!",
  alternates: {
    canonical: "https://digitalpaaji.com/search-engine-optimization/",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://digitalpaaji.com/search-engine-optimization/",
    title: "Best SEO Agency in India - Digital Paaji Consulting Services",
    description:
      "Digital Paaji is the top SEO agency in India to grow your online visibility, boost website traffic and increase conversions. Contact us for the best SEO services!",
    siteName: "Digital Paaji",
    images: [
      {
        url: "https://digitalpaaji.com/Images/seo/SEO1.webp",
        width: 800,
        height: 600,
        alt: "Best SEO Agency in India",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitalpaajii",
    title: "Best SEO Agency in India - Digital Paaji Consulting Services",
    description:
      "Digital Paaji is the top SEO agency in India to grow your online visibility, boost website traffic and increase conversions. Contact us for the best SEO services!",
    images: ["https://digitalpaaji.com/Images/seo/SEO1.webp"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://digitalpaaji.com/search-engine-optimization/#FAQPage",
  headline: "Best SEO Agency in India - Digital Paaji Consulting Services",
  datePublished: "2024-10-16T05:07:24+00:00",
  dateModified: "2024-10-30T05:08:44+00:00",
  dateCreated: "2024-10-16T05:07:24+00:00",
  author: {
    "@type": "Person",
    name: "Palwinder Singh",
    url: "https://digitalpaaji.com/author/palvinder/",
    image: {
      "@type": "ImageObject",
      url: "https://secure.gravatar.com/avatar/639ad0015a8fdb125f1131dd0de67b07?s=96&d=mm&r=g",
      height: 96,
      width: 96,
    },
  },
  image: [
    {
      "@type": "ImageObject",
      url: "https://digitalpaaji.com/Images/seo/SEO1.webp",
      width: 706,
      height: 471,
      "@id": "https://digitalpaaji.com/search-engine-optimization/#primaryimage",
    },
    {
      "@type": "ImageObject",
      url: "https://digitalpaaji.com/Images/seo/1.webp",
      width: 472,
      height: 472,
      caption: "1.webp",
    },
    {
      "@type": "ImageObject",
      url: "https://digitalpaaji.com/Images/seo/2.webp",
      width: 472,
      height: 472,
      caption: "2.webp",
    },
    {
      "@type": "ImageObject",
      url: "https://digitalpaaji.com/Images/seo/3.webp",
      width: 472,
      height: 472,
      caption: "3.webp",
    },
    {
      "@type": "ImageObject",
      url: "https://digitalpaaji.com/Images/seo/SEO1.webp",
      width: 706,
      height: 471,
      caption: "SEO1.webp",
    },
  ],
};

export default function Page() {
  return (
    <Fragment>
      {/* JSON-LD Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <main>
        <Home />
      </main>
    </Fragment>
  );
}
