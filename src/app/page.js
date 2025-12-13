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









// "use client";

// import { useEffect, useState } from "react";
// import Head from "next/head";
// import Home from "./components/Home";

// export default function Page() {
//   const [isPageVisible, setIsPageVisible] = useState(true);
//   const [titleIndex, setTitleIndex] = useState(0);

//   const titles = [
//     "DigitalPaaji is the No.1 Digital Marketing, Design, and Development Agency.",
//     "Please come back!",
//     "I am feeling lonely :-(",
//     "Don't you love me anymore?",
//   ];

//   const descriptions = [
//     "DigitalPaaji is the best Digital Marketing, Design, and Development Agency.",
//     "We miss you! Come back to see our latest updates.",
//     "Feeling lonely? Visit us again for amazing content!",
//     "We still love you! Don't leave us alone 😢",
//   ];

//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         setIsPageVisible(false);
//         setTitleIndex(1);
//       } else {
//         setIsPageVisible(true);
//         setTitleIndex(0);
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   useEffect(() => {
//     if (!isPageVisible) {
//       const interval = setInterval(() => {
//         setTitleIndex((prevIndex) =>
//           prevIndex >= titles.length - 1 ? 1 : prevIndex + 1
//         );
//       }, 2000);

//       return () => clearInterval(interval);
//     } else {
//       setTitleIndex(0);
//     }
//   }, [isPageVisible]);

//   useEffect(() => {
//     document.title = titles[titleIndex];

//     // **Dynamically update meta description**
//     const metaDescription = document.querySelector("meta[name='description']");
//     if (metaDescription) {
//       metaDescription.setAttribute("content", descriptions[titleIndex]);
//     } else {
//       // **If meta tag doesn't exist, create one**
//       const newMetaTag = document.createElement("meta");
//       newMetaTag.name = "description";
//       newMetaTag.content = descriptions[titleIndex];
//       document.head.appendChild(newMetaTag);
//     }
//   }, [titleIndex]);

//   return (
//     <>
//       <Head>
//         <title>{titles[titleIndex]}</title>
//         <meta name="description" content={descriptions[0]} />
//         <meta name="keywords" content="Digital Marketing, Web Design, SEO, Branding" />
//         <meta name="author" content="DigitalPaaji" />
//         <link rel="icon" href="/Images/favicon.png" />
//       </Head>
//       <main>
//         <Home />
//       </main>
//     </>
//   );
// }
