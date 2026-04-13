"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {
  return (
    <div className=" ">
      <div className="text-center mt-24 mx-4 md:mx-12 lg:mx-32 xl:mx-72 ">
        <h2 className="bungeeHead  text-[#cc5f4d]  text-[30px] xl:text-[35px]">
          Our Internet Marketing Solutions
        </h2>

        <p
          className="servicePara text-[#252424] mt-4 text-sm  text-justify xl:text-[14px] "
          style={{ textAlign: "center" }}
        >
         Here at Digital Paaji, we provide an extensive array of SEO services aimed at increasing your online presence and search engine rankings.
        </p>
      </div>

      <div className="relative text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72 my-6 ">
        <div
          className="absolute inset-0  opacity-20"
          style={{
            backgroundImage: "url(/Images/services/checkBG.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) brightness(1.2)",
          }}
        ></div>
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
            <div className="p-2 lg:p-8">
              <div className="mx-auto w-20 h-auto">
                <Image
                        width={200}
        height={200}
                  src="/Images/seo/3.webp"
                  alt="img"
                  className="zoom w-full h-auto object-cover"
                />
              </div>
              <div className="">
                <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                  Research on Keywords
                </h3>
              </div>
              <div className="text-center">
                <p className="servicePara  text-gray-500 text-sm">
                Finding potential client&apos;s search queries through keyword research is essential for SEO strategy. Digital Paaji employs a methodical technique, scrutinising search traffic, rivalry, and user intention to generate precise keywords. To target high-volume searches and specialist queries, we divide keywords into two categories: short-tail and long-tail. A well-rounded strategy guarantees both volume and high-quality traffic. Competitive analysis supports the preservation of industrial competitiveness by pointing up disparities in competitors&apos; rankings.{" "}
                </p>
              </div>
            </div>

            <div className="">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-20 h-auto">
                  <Image
                          width={200}
        height={200}
                    src="/Images/seo/1.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                  Page Optimization
                  </h3>
                </div>
                <div className="text-center">
                  <p className="servicePara  text-gray-500 text-sm">
                  The practice of improving a webpage&apos;s content, title tags, meta descriptions, and internal links is known as on-page SEO. A well-organised internal linking system, keyword-rich title tags, and pertinent, high-quality material are all components of Digital Paaji&apos;s content optimization strategy. These components contribute to increased traffic and conversions by enhancing user experience, search engine rankings, and total website traffic.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-20 h-auto">
                  <Image
                          width={200}
        height={200}
                    src="/Images/seo/2.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                  Technical Search Engine Optimization
                  </h3>
                </div>
                <div className="text-center">
                  <p className="servicePara  text-gray-500 text-sm">
                  Enhancing a website&apos;s crawlability and indexability is a critical procedure that is achieved through technical SEO. It entails using schema markup, mobile optimization, and site speed optimization. Search engines favour and provide a better user experience on pages that load quickly. Schema markup increases search engine visibility and comprehension, while mobile optimization guarantees smooth operation across all devices.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2    mt-8">
            <div className="">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-20 h-auto">
                  <Image
                          width={200}
        height={200}
                    src="/Images/seo/1.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                  Local Search Engine Optimization
                  </h3>
                </div>
                <div className="text-center">
                  <p className="servicePara  text-gray-500 text-sm">
                  To assist companies in becoming more visible to local clients, Digital Paaji provides local SEO services. They encourage happy customers to submit reviews, ensure listings are consistent across internet directories like Yelp, TripAdvisor, and the Yellow Pages, and enhance Google My Business profiles. This increases visibility on search engines and fosters confidence, drawing in local clients and increasing sales.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-20 h-auto">
                  <Image
                          width={200}
        height={200}
                    src="/Images/seo/3.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                  Content Promotion
                  </h3>
                </div>
                <div className="text-center">
                  <p className="servicePara  text-gray-500 text-sm">
                  The main goal of Digital Paaji is producing excellent content for effective SEO tactics. In order to raise their search engine rankings, draw viewers in, and build backlinks, our experts provide blog articles, infographics, and videos. Consistently updated blog entries address queries from readers, infographics simplify complicated concepts, and video content narrates brand tales while increasing traffic and optimising search engine optimization.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center mt-12">
            <Link  href="tel:+918699640752" className="px-4 py-4 border-2 rounded-xl border-black bg-[#006E7F] hover:bg-[#cc5f4d] text-white font-medium text-base underline ">
              Get Started Today
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AddOn;
