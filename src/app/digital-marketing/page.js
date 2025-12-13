// app/digital-marketing/page.js
import Home from "../components/DM";
import { Fragment } from "react";

export const metadata = {
  title: "Digital Marketing Agency Services - Digital Paaji Consulting Services",
  description:
    "Digital Paaji is a top digital marketing agency offering best-in-class online marketing services. Amplify your online reach with our digital marketing consulting services.",
  alternates: {
    canonical: "https://digitalpaaji.com/digital-marketing/",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://digitalpaaji.com/digital-marketing/",
    title: "Digital Marketing Agency Services - Digital Paaji Consulting Services",
    description:
      "Digital Paaji is a top digital marketing agency offering best-in-class online marketing services. Amplify your online reach with our digital marketing consulting services.",
    siteName: "Digital Paaji",
    images: [
      {
        url: "https://digitalpaaji.com/Images/dm/DmF.gif",
        width: 4710,
        height: 706,
        alt: "Digital Marketing Agency Services",
        type: "image/gif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitalpaajii",
    title: "Digital Marketing Agency Services - Digital Paaji Consulting Services",
    description:
      "Digital Paaji is a top digital marketing agency offering best-in-class online marketing services. Amplify your online reach with our digital marketing consulting services.",
    images: ["https://digitalpaaji.com/Images/dm/DmF.gif"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What digital marketing services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer comprehensive digital marketing services including SEO, social media marketing, PPC, content marketing, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How can digital marketing benefit my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital marketing helps increase online visibility, drive traffic, and enhance customer engagement, leading to higher conversions.",
      },
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
