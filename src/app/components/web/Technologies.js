"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {
  return (
    <div className=" ">
      <div className="text-center mt-24 mx-4 md:mx-12 lg:mx-32 xl:mx-48 ">
        <h3 className="bungeeHead  text-[#cc5f4d]  text-[30px] xl:text-5xl">
          Technologies We Use at Digital Paaji
        </h3>

        <p
          className="servicePara text-gray-500 mt-4 text-sm xl:text-md  text-justify  "
          style={{ textAlign: "center" }}
        >
          Modern technology is used by Digital Paaji to build feature-rich,
          high-performing websites for companies. Front-end and back-end
          technologies, e-commerce tools, and content management systems make up
          their tech stack. Their proficiency facilitates the creation of
          resilient, expandable, and enhanced solutions.
        </p>
      </div>

      <div className="relative text-center mx-4 md:mx-12 lg:mx-32 xl:mx-40 my-12 ">
        <div
          className="absolute inset-0  opacity-50"
          // style={{
          //   backgroundImage: "url(/Images/services/checkBG.webp)",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   filter: "grayscale(100%) brightness(1.2)",
          // }}
        ></div>
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
            <div className="p-2 lg:p-8">
              <div className="mx-auto w-28 h-auto">
                <Image
                        width={200}
        height={200}
                  src="/Images/dm/1.webp"
                  alt="img"
                  className="zoom w-full h-auto object-cover"
                />
              </div>
              <div className="">
                <h3 className="bungeeHead p-4 text-lg text-[#2e2d2d]">
                Technology Backend
                </h3>
              </div>
              <div className="text-center">
                <p className="servicePara text-gray-500 text-sm  text-justify">
                For server-side operations, data processing, and business logic, we rely on technologies like PHP, Python, and Node.js. These languages provide effective performance by facilitating seamless interactions between databases and user interfaces.{" "}
                </p>
              </div>
            </div>

            <div className="">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-28 h-auto">
                  <Image
                          width={200}
        height={200}
                    src="/Images/addOn/LG.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-lg text-[#2e2d2d]">
                  Foundations
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-gray-500 text-sm  text-justify">
                  For PHP, Django is used, and for Node.js, Express is used. We also implement other frameworks. In order to increase productivity and security, these frameworks offer pre-built tools and components for back-end development. Our experts facilitate the creation of reliable web applications with clear code structures and provide a range of sophisticated features.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-28 h-auto">
                  <Image
                          width={200}
        height={200}
                    src="/Images/dm/2.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-lg text-[#2e2d2d]">
                  Online Retail Platforms
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-gray-500 text-sm  text-justify">
                  We develop and oversee online stores using systems like Magento, WooCommerce, and Shopify. Product administration, safe payment connection, and inventory tracking are supported by these platforms.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2    mt-8">
            <div className="">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-28 h-auto">
                  <Image
                          width={200}
        height={200}
                    src="/Images/vp/1.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-lg text-[#2e2d2d]">
                  Database Administration
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-gray-500 text-sm  text-justify">
                  Data is stored, managed, and retrieved using databases such as PostgreSQL, MongoDB, and MySQL. For structured data, PostgreSQL offers sophisticated functionality, while MongoDB is a good choice for unstructured data. MySQL is best for structured data.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-28 h-auto">
                  <Image
                          width={200}
        height={200}
                    src="/Images/vp/2.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-lg text-[#2e2d2d]">
                  Front-end Development Tools
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-gray-500 text-sm  text-justify">
                  To construct the interactive and graphic elements of websites, we utilize tools such as JavaScript, CSS3, and HTML5. The framework is provided by HTML, styling is handled by CSS, and dynamic features are added via JavaScript. Rich user experiences are made possible by reusable components in frameworks such as Angular and React, which improve interactivity.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center mt-12">
            <Link
              href="tel:+918699640752"
              className="px-4 py-4 border-2 rounded-xl border-black bg-yellow-400 hover:bg-[#cc5f4d] text-black hover:text-white font-medium text-base underline "
            >
              Call Us
            </Link>
          </div> */}
        </div>
      </div>
      <h3 className="bungeeHead  text-[#cc5f4d]  text-xl text-center mx-4 md:mx-12 lg:mx-32 xl:mx-40">
      Our online solutions are optimized for speed and user experience, while yet being powerful, thanks to the careful combination of several technologies.
        </h3>
    </div>
  );
}

export default AddOn;
