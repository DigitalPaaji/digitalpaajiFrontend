// app/video-production/page.js
import Home from "../components/VP";
import { Fragment } from "react";

export const metadata = {
  title: "Video Production Services - Video Production Agency In India",
  description:
    "Looking for the best video production agency? Digital Paaji offers top-notch video production services to improve your business's visual identity. Contact us now.",
  alternates: {
    canonical: "https://digitalpaaji.com/video-production/",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://digitalpaaji.com/video-production/",
    title: "Video Production Services - Video Production Agency In India",
    description:
      "Looking for the best video production agency? Digital Paaji offers top-notch video production services to improve your business's visual identity. Contact us now.",
    siteName: "Digital Paaji",
    images: [
      {
        url: "https://digitalpaaji.com/Images/services/video.webp",
        width: 450,
        height: 472,
        alt: "Video Production Services",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitalpaajii",
    title: "Video Production Services - Video Production Agency In India",
    description:
      "Looking for the best video production agency? Digital Paaji offers top-notch video production services to improve your business's visual identity. Contact us now.",
    images: ["https://digitalpaaji.com/Images/services/video.webp"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are your video production services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a wide range of video production services including corporate videos, promotional videos, and event coverage.",
      },
    },
    {
      "@type": "Question",
      name: "How can video production help my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Video production helps in enhancing brand visibility, audience engagement, and overall marketing effectiveness.",
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












// // app/video-production/page.js

// import Home from "../components/VP";

// export const metadata = {
//   title: "Video Production Services - Video Production Agency In India",
//   description: "Looking for the best video production agency? Digital Paaji offers top-notch video production services to improve your business's visual identity. Contact us now.",
//   openGraph: {
//     type: "article",
//     locale: "en_US",
//     url: "https://digitalpaaji.com/video-production/",
//     siteName: "Digital Paaji",
//     title: "Video Production Services - Video Production Agency In India",
//     description: "Looking for the best video production agency? Digital Paaji offers top-notch video production services to improve your business's visual identity. Contact us now.",
//     images: [
//       {
//         url: "https://digitalpaaji.com/Images/services/video.webp",
//         width: 1200,
//         height: 630,
//         alt: "Video Production Services"
//       }
//     ]
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@digitalpaajii",
//     title: "Video Production Services - Video Production Agency In India",
//     description: "Looking for the best video production agency? Digital Paaji offers top-notch video production services to improve your business's visual identity. Contact us now.",
//     images: ["https://digitalpaaji.com/Images/services/video.webp"]
//   }
// };

// export default function Page() {
//   return (
//     <main>
//       <Home />
//     </main>
//   );
// }
