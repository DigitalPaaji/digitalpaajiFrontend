"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {
  return (
    <div className=" ">
      <div className="text-center mt-24 mx-4 md:mx-12 lg:mx-32 xl:mx-72 ">
        <h3 className="bungeeHead  text-[#cc5f4d]  text-[30px] xl:text-[40px]">
          What Makes SEO Vital?
        </h3>

        <p
          className="servicePara text-[#252424] mt-4 text-sm xl:text-[14px] "
          style={{ textAlign: "center" }}
        >
          In the modern era of digital world, search engine optimization (SEO)
          is essential for making sure search engines can quickly find your
          website.
        </p>
      </div>

      <div className=" text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72 my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          <div className="border border-black rounded-tl-3xl rounded-br-3xl">
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
                A rise in traffic
                </h3>
              </div>
              <div className="text-center">
                <p
                  className="servicePara
servicePara text-gray-500 text-sm"
                >
                 More visitors are associated with higher ranks. Organic traffic, which is drawn to a well-optimised website, is frequently more valuable than bought
                 traffic.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="border border-black rounded-tl-3xl rounded-br-3xl">
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
                An improved user interface
                </h3>
              </div>
              <div className="text-center">
                <p
                  className="servicePara
servicePara text-gray-500 text-sm"
                >
                  In addition to improving user experience, ranking, and user satisfaction, SEO also optimises the structure and content of websites, lowers bounce rates, promotes longer browsing sessions, and increases return visitors and conversions.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="border border-black rounded-tl-3xl rounded-br-3xl">
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
                Credibility of the Brand
                </h3>
              </div>
              <div className="text-center">
                <p
                  className="servicePara
servicePara text-gray-500 text-sm"
                >
                  Higher ranked websites are frequently seen as more reliable. Your brand gains credibility when it uses effective SEO.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="text-center mt-12">
          <Link href="tel:+918699640752" className="px-6 py-4 border-2 rounded-xl border-black bg-[#cc5f4d] hover:bg-[#006E7F] text-white font-medium text-base underline ">
            Contact Us
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default AddOn;
