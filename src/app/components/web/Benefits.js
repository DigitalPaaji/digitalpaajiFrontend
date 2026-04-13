"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {
  return (
    <div className=" ">
      <div className=" text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72 mt-[440px] lg:mt-0">
        <h3 className="bungeeHead my-12 text-[#cc5f4d]  text-[30px] xl:text-[40px]">
        Services Benefit you will get
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-16 ">
          <div className="" >
            <div className="">
              <div className="mx-auto w-20 h-auto">
                <Image
                        width={200}
        height={200}
                  src="/Images/vp/4.webp"
                  alt="img"
                  className="zoom w-full h-auto object-cover"
                />
              </div>
              <div className="my-4">
                <h3 className="bungeeHead  text-md  text-[#2e2d2d]">
                CMSs, or content management systems
                </h3>
              </div>
              <div className="text-justify">
                <p className="merriHead text-gray-500 text-xs">
                Digital Paaji have expertise in utilising flexible content management systems (CMS) like WordPress, Joomla, and Drupal for website development. Businesses can update information without technological experience thanks to these platforms. Experts tailor CMS to meet certain business objectives, guaranteeing that the website may expand and change to meet evolving demands. This makes managing content easier and maintains the website up to date.
                </p>
              </div>
            </div>
          </div>
          <div className=""  data-aos-delay={'200'}>
            <div className="">
              <div className="mx-auto w-20 h-auto">
                <Image
                        width={200}
        height={200}
                  src="/Images/smm.webp"
                  alt="img"
                  className="zoom w-full h-auto object-cover"
                />
              </div>
              <div className="my-4">
                <h3 className="bungeeHead  text-md  text-[#2e2d2d]">
                SEO-Optimised
                Websites
                </h3>
              </div>
              <div className="text-justify">
                <p className="merriHead text-gray-500 text-xs">
                Success in the digital sphere requires visibility. This is the reason SEO optimization is a part of our web development services. We organise your website to improve search engine positioning. This entails utilising clear code, guaranteeing quick page loads, adding important keywords, and refining information. Our tactics are designed to increase the discoverability of your website and draw in more natural visitors.
                </p>
              </div>
            </div>
          </div>
          <div className=""  data-aos-delay={'400'}>
            <div className="">
              <div className="mx-auto w-20 h-auto">
                <Image
                        width={200}
        height={200}
                  src="/Images/vp/3.webp"
                  alt="img"
                  className="zoom w-full h-auto object-cover"
                />
              </div>
              <div className="my-4">
                <h3 className="bungeeHead  text-md  text-[#2e2d2d]">
                API Integration and Development
                </h3>
              </div>
              <div className="text-justify">
                <p className="merriHead text-gray-500 text-xs">
                To improve the functionality of your website, Digital Paaji offers seamless integration of third-party APIs. Our staff guarantees seamless and safe integration that increases the functionality of your website, whether you need to link payment gateways, social media platforms, CRM systems, or marketing tools. By doing this, you can improve user experience by making greater use of already-existing services.
                </p>
              </div>
            </div>
          </div>

          <div className=""  data-aos-delay={'500'}>
            <div className="">
              <div className="mx-auto w-20 h-auto">
                <Image
                        width={200}
        height={200}
                  src="/Images/seo/1.webp"
                  alt="img"
                  className="zoom w-full h-auto object-cover"
                />
              </div>
              <div className="my-4">
                <h3 className="bungeeHead  text-md  text-[#2e2d2d]">
                Custom Website Development
                </h3>
              </div>
              <div className="text-justify">
                <p className="merriHead text-gray-500 text-xs">
                Digital Paaji provides personalised website building to showcase the distinct individuality of your brand. We adopt a tailored strategy, getting to know your objectives, target market, and unique selling points. This benefits both startups and huge organisations by ensuring a website that meets your vision and serves your audience successfully.
                </p>
              </div>
            </div>
          </div>
          <div className=""  data-aos-delay={'800'}>
            <div className="">
              <div className="mx-auto w-20 h-auto">
                <Image
                        width={200}
        height={200}
                  src="/Images/dm/2.webp"
                  alt="img"
                  className="zoom w-full h-auto object-cover"
                />
              </div>
              <div className="my-4">
                <h3 className="bungeeHead  text-md  text-[#2e2d2d]">
                Website Design that Adapts
                </h3>
              </div>
              <div className="text-justify">
                <p className="merriHead text-gray-500 text-xs">
                We give responsive web design top priority to make sure your website works well on PCs, tablets, and smartphones. Our experts enhance user experience and engagement with their mobile-first strategy by adapting designs to fit smaller screen sizes. With seamless navigation, this strategy helps organisations increase user retention, convert rates, and reach a larger audience.
                </p>
              </div>
            </div>
          </div>
          <div className=""  data-aos-delay={'1000'}>
            <div className="">
              <div className="mx-auto w-20 h-auto">
                <Image
                        width={200}
        height={200}
                  src="/Images/dm/1.webp"
                  alt="img"
                  className="zoom w-full h-auto object-cover"
                />
              </div>
              <div className="my-4">
                <h3 className="bungeeHead  text-md  text-[#2e2d2d]">
                E-Commerce
                Solutions
                </h3>
              </div>
              <div className="text-justify">
                <p className="merriHead text-gray-500 text-xs">
                Using platforms like Shopify and WooCommerce, Digital Paaji offers e-commerce solutions for companies, enabling them to build safe and user-friendly online stores. Product listings, inventory control, and safe payment methods are some of the services companies offer. Our services are designed to increase sales and enhance customer pleasure, resulting in a seamless shopping experience, regardless of the size of the business.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link
            href="tel:+918699640752"
            className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg "
          >
            Call Us 
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddOn;
