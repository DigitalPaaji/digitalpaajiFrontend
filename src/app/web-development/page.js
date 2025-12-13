// app/web-development/page.js
import Home from "../components/WD";
import { Fragment } from "react";

export const metadata = {
  title: "Website Development Service - Web Development Agency In India",
  description:
    "Digital Paaji is the best website development company in India. We specialize in designing user-friendly and responsive websites. Get in touch with us today.",
  alternates: {
    canonical: "https://digitalpaaji.com/web-development/",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://digitalpaaji.com/web-development/",
    title: "Website Development Service - Web Development Agency In India",
    description:
      "Digital Paaji is the best website development company in India. We specialize in designing user-friendly and responsive websites. Get in touch with us today.",
    siteName: "Digital Paaji",
    images: [
      {
        url: "https://digitalpaaji.com/Images/services/web1.webp",
        width: 800,
        height: 600,
        alt: "Website Development Service - Digital Paaji",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitalpaajii",
    title: "Website Development Service - Web Development Agency In India",
    description:
      "Digital Paaji is the best website development company in India. We specialize in designing user-friendly and responsive websites. Get in touch with us today.",
    images: ["https://digitalpaaji.com/Images/services/web1.webp"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://digitalpaaji.com/web-development/#FAQPage",
  headline: "Website Development Service - Web Development Agency In India",
  datePublished: "2024-06-10T00:00:00Z",
  dateModified: "2024-11-13T00:02:24+00:00",
  dateCreated: "2024-06-10T00:00:00Z",
  author: {
    "@type": "Organization",
    name: "Digital Paaji",
    url: "https://digitalpaaji.com",
    image: {
      "@type": "ImageObject",
      url: "https://secure.gravatar.com/avatar/17888fab02bcda8b690bb53ec59d35f5?s=96&d=mm&r=g",
    },
  },
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the duration required to create a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The complexity of the project, the features, and your particular needs all affect how long a website takes to construct. The time frame of our initiatives ranges from a few weeks to several months. More detailed information and duration for the planning phase will be sent to you as soon as we have a clearer understanding of your goals.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer continuing assistance once the website is up and running?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed, we think that establishing enduring bonds with our customers is important. We provide real-time 24*7 continuous maintenance and support, including security upgrades, performance improvements, and troubleshooting, for your website after it is live. Our goal is to keep your website operating at its best.",
      },
    },
    {
      "@type": "Question",
      name: "Is my website optimized for mobile devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course! Our main objective is to create responsive web designs that lets your website instantly adjust to any screen size such as smartphones, tablets, and desktops. We ensure that users get the most enjoyable experience regardless of the device they choose to use.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my website needs to have a certain functionality I want?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Please feel free to share with us any and all of your requests and thoughts. Our bespoke web development services are made to provide particular characteristics that complement your company's objectives. Whether you require special features or integrations, we'll collaborate with you to realize your idea.",
      },
    },
  ],
  image: [
    {
      "@type": "ImageObject",
      url: "https://digitalpaaji.com/Images/services/web1.webp",
      width: 472,
      height: 472,
      caption: "web1.webp",
    },
  ],
};

export default function Page() {
  return (
    <>
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
    </>
  );
}
