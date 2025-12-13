"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import Icons from "./components/Icons";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    const updateFavicon = (href) => {
      const existingLink = document.querySelector("link[rel='icon']");
      if (existingLink) {
        existingLink.href = href;
      } else {
        const newLink = document.createElement("link");
        newLink.rel = "icon";
        newLink.href = href;
        document.head.appendChild(newLink);
      }
    };

    updateFavicon("/Images/favicon.ico");
  }, []);
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1034790355108758');
          fbq('track', 'PageView');
        `}
      </Script>

      <noscript>
        <Image
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1034790355108758&ev=PageView&noscript=1"
          alt="Meta Pixel"
        />
      </noscript>

      {/* Existing Google Analytics Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-R5S5E7J20L"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R5S5E7J20L');
        `}
      </Script>

      {/* ✅ NEW Google Analytics Tag (G-7W6CS3WT3J) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7W6CS3WT3J"
        strategy="afterInteractive"
      />
      <Script id="gtag-new" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7W6CS3WT3J');
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KDZX87VQ');
        `}
      </Script>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDZX87VQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="GTM"
          ></iframe>
        </noscript>
 {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <Image
              width={200}
              height={200}
              src="/Images/Preloader.gif"
              alt="Loading..."
            />
          </div>
        ) : ( 
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Icons />
        </>
           )} 
      </body>
    </html>
  );
}





// "use client";

// import { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Image from "next/image";
// import Icons from "./components/Icons";
// import Head from "next/head";
// import Script from "next/script";
// import "./globals.css";

// export default function RootLayout({ children }) {
//   // const [isLoading, setIsLoading] = useState(true);

//   // useEffect(() => {
//   //   const loadingTimeout = setTimeout(() => setIsLoading(false), 1000);
//   //   return () => clearTimeout(loadingTimeout);
//   // }, []);

//   // useEffect(() => {
//   //   const updateFavicon = (href) => {
//   //     const existingLink = document.querySelector("link[rel='icon']");
//   //     if (existingLink) {
//   //       existingLink.href = href;
//   //     } else {
//   //       const newLink = document.createElement("link");
//   //       newLink.rel = "icon";
//   //       newLink.href = href;
//   //       document.head.appendChild(newLink);
//   //     }
//   //   };

//   //   updateFavicon("/Images/favicon.ico");
//   // }, []);

//   return (
//     <html lang="en">
//       <Head>
//       <link rel="icon" href="/favicon.ico" sizes="any" />
//       <link rel="icon" type="image/png" href="/favicon.png" />

//       </Head>

//       {/* Meta Pixel Code */}
//       <Script id="meta-pixel" strategy="afterInteractive">
//         {`
//           !function(f,b,e,v,n,t,s)
//           {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//           n.queue=[];t=b.createElement(e);t.async=!0;
//           t.src=v;s=b.getElementsByTagName(e)[0];
//           s.parentNode.insertBefore(t,s)}(window, document,'script',
//           'https://connect.facebook.net/en_US/fbevents.js');
//           fbq('init', '1034790355108758');
//           fbq('track', 'PageView');
//         `}
//       </Script>

//       <noscript>
//         <Image
//           height="1"
//           width="1"
//           style={{ display: "none" }}
//           src="https://www.facebook.com/tr?id=1034790355108758&ev=PageView&noscript=1"
//           alt="Meta Pixel"
//         />
//       </noscript>

//       {/* Google Tag (gtag.js) */}
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=G-R5S5E7J20L"
//         strategy="afterInteractive"
//       />
//       <Script id="gtag-init" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-R5S5E7J20L');
//         `}
//       </Script>

//       {/* Google Tag Manager */}
//       <Script id="gtm" strategy="afterInteractive">
//         {`
//           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-KDZX87VQ');
//         `}
//       </Script>

//       <body>
//         {/* Google Tag Manager (noscript) */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-KDZX87VQ"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//             title="GTM"
//           ></iframe>
//         </noscript>

//         {/* {isLoading ? (
//           <div className="flex items-center justify-center h-screen">
//             <Image
//               width={200}
//               height={200}
//               src="/Images/Preloader.gif"
//               alt="Loading..."
//             />
//           </div>
//         ) : ( */}
//           <>
//             <Navbar />
//             <main>{children}</main>
//             <Footer />
//             <Icons />
//           </>
//         {/* )} */}
//       </body>
//     </html>
//   );
// }





