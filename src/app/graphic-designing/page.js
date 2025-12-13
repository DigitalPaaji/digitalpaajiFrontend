// app/graphic-designing/page.js
import Home from "../components/GD";
import { Fragment } from "react";

export const metadata = {
  title: "Graphic Design Services - Digital Paaji Graphic Design Agency",
  description:
    "Looking for the best graphic design agency? Digital Paaji offers a broad range of graphic design services to improve your business's visual identity. Contact us now.",
  alternates: {
    canonical: "https://digitalpaaji.com/graphic-designing/",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://digitalpaaji.com/graphic-designing/",
    title: "Graphic Design Services - Digital Paaji Graphic Design Agency",
    description:
      "Looking for the best graphic design agency? Digital Paaji offers a broad range of graphic design services to improve your business's visual identity. Contact us now.",
    siteName: "Digital Paaji",
    images: [
      {
        url: "https://digitalpaaji.com/Images/gd/Graphic.webp",
        width: 800,
        height: 600,
        alt: "Graphic Design Services - Digital Paaji",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitalpaajii",
    title: "Graphic Design Services - Digital Paaji Graphic Design Agency",
    description:
      "Looking for the best graphic design agency? Digital Paaji offers a broad range of graphic design services to improve your business's visual identity. Contact us now.",
    images: ["https://digitalpaaji.com/Images/gd/Graphic.webp"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://digitalpaaji.com/graphic-designing/#FAQPage",
  headline: "Graphic Design Services - Digital Paaji Graphic Design Agency",
  datePublished: "2024-10-17T10:01:28+00:00",
  dateModified: "2024-10-28T08:37:23+00:00",
  dateCreated: "2024-10-17T10:01:28+00:00",
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
      url: "https://digitalpaaji.com/Images/gd/Graphic.webp",
      width: 472,
      height: 472,
      caption: "Graphic.webp",
    },
    {
      "@type": "ImageObject",
      url: "https://digitalpaaji.com/Images/gd/1.webp",
      width: 472,
      height: 472,
      caption: "1.webp",
    },
    {
      "@type": "ImageObject",
      url: "https://digitalpaaji.com/Images/gd/2.webp",
      width: 472,
      height: 472,
      caption: "2.webp",
    },
    {
      "@type": "ImageObject",
      url: "https://digitalpaaji.com/Images/gd/3.webp",
      width: 472,
      height: 472,
      caption: "3.webp",
    },
    {
      "@type": "ImageObject",
      url: "https://digitalpaaji.com/Images/gd/4.webp",
      width: 472,
      height: 472,
      caption: "4.webp",
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
