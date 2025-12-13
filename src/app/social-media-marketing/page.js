// app/social-media-marketing/page.js
import Home from "../components/SMM";
import { Fragment } from "react";

export const metadata = {
  title: "Social Media Marketing Agency In India - Digital Paaji Consulting Services",
  description:
    "Searching for the best Social Media Marketing agency in India? Digital Paaji provides elite SMM services to help boost brand awareness and grow online presence.",
  alternates: {
    canonical: "https://digitalpaaji.com/social-media-marketing/",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://digitalpaaji.com/social-media-marketing/",
    title: "Social Media Marketing Agency In India - Digital Paaji Consulting Services",
    description:
      "Searching for the best Social Media Marketing agency in India? Digital Paaji provides elite SMM services to help boost brand awareness and grow online presence.",
    siteName: "Digital Paaji",
    images: [
      {
        url: "https://digitalpaaji.com/Images/smm/smm.webp",
        width: 800,
        height: 600,
        alt: "Social Media Marketing Agency",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitalpaajii",
    title: "Social Media Marketing Agency In India - Digital Paaji Consulting Services",
    description:
      "Searching for the best Social Media Marketing agency in India? Digital Paaji provides elite SMM services to help boost brand awareness and grow online presence.",
    images: ["https://digitalpaaji.com/Images/smm/smm.webp"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "On social media, how frequently should I post?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The audience and platform determine the frequency of social media posts. LinkedIn posts once a week, Facebook and Instagram post three to five times a week, and Twitter demands several posts per day. A content calendar is offered by Digital Paaji to help you schedule posts at the best intervals and with the best quality to increase interaction.",
      },
    },
    {
      "@type": "Question",
      name: "How can I improve engagement with my audience on social media?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Publish excellent material, use polls to promote conversation, and reply to comments quickly in order to increase social media engagement. Engage influencers in conversation, use storytelling strategies, and routinely review engagement numbers. With specialised tactics, Digital Paaji provides knowledgeable advice on how to increase audience engagement.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of social media marketing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The scope, platforms, and aims of social media marketing services determine the cost. Advertising, analytics reporting, account administration, and content development are all included in monthly subscriptions. With customisable packages to suit various budgets, Digital Paaji guarantees customised quotations depending on particular needs and goals.",
      },
    },
    {
      "@type": "Question",
      name: "How can I manage my social media presence effectively?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strategic planning, structure, and consistency are necessary for social media management to be effective. Make advantage of tools, schedule material, track interaction, and react quickly. Evaluate performance indicators on a weekly basis and modify strategy as necessary. All-inclusive services are provided by Digital Paaji to keep a strong internet presence.",
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
