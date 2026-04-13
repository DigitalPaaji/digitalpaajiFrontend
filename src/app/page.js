// app/page.js
import Home from "./components/Home";
import { Fragment } from "react";

export const metadata = {
  title: "Digital Paaji - No.1 Digital Marketing Design Development Agency",
  description:
    "Elevate your brand with Digital Paaji, a top-tier full service digital marketing agency. Call 8699640752 for results-driven creative strategies+solutions!",
  alternates: {
    canonical: "https://digitalpaaji.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalpaaji.com/",
    title: "Digital Paaji - Full Service Global Digital Development Agency",
    description:
      "Hire full-service global digital marketing agency. Since 2009, Digital Paaji is helping brands to thrive by crafting experience-driven digital solutions!",
    siteName: "Digital Paaji",
    images: [
      {
        url: "https://digitalpaaji.com/Images/logo2.webp",
        width: 998,
        height: 285,
        alt: "Digital Paaji Logo",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitalpaajii",
    title: "Digital Paaji - Full Service Global Digital Development Agency",
    description:
      "Hire full-service global digital marketing agency. Since 2009, Digital Paaji is helping brands to thrive by crafting experience-driven digital solutions!",
    images: ["https://digitalpaaji.com/Images/logo2.webp"],
  },
      icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  manifest: "/site.webmanifest",
};

const schemaData = {
  "@context": "https://schema.org/",
  "@type": "Organization",
  "@id": "https://digitalpaaji.com#Organization",
  name: "Digital Paaji",
  url: "https://digitalpaaji.com",
  sameAs: [
    "https://facebook.com/digital.paajii",
    "https://www.instagram.com/digital.paajii/",
    "https://x.com/digitalpaajii",
    "https://www.youtube.com/@digital.paajii",
    "https://www.pinterest.com/digitalpaaji",
  ],
  logo: {
    "@type": "ImageObject",
    url: "https://digitalpaaji.com/Images/logo2.webp",
    width: "998",
    height: "285",
  },
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




