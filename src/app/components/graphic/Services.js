"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {
  return (
    <div className=" ">
      <div className="text-center mt-24 mx-4 md:mx-12 lg:mx-32 xl:mx-72 ">
        <h2 className="bungeeHead  text-[#cc5f4d]  text-[30px] xl:text-[35px]">
          Our Graphic Design Services{" "}
        </h2>

        <p
          className="servicePara text-[#252424] mt-4 text-sm  text-justify xl:text-[14px] "
          style={{ textAlign: "center" }}
        >
          In order to strengthen your brand identification and make sure your
          message is understood by your target audience, Digital Paaji offers a
          variety of graphic design services.
        </p>
      </div>

      <div className="relative text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72 my-6 ">
        <div className="absolute inset-0  opacity-50"></div>
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
            <div className="p-2 lg:p-8">
              <div className="mx-auto w-20 h-auto">
                <Image
                width={200} height={200}
                  src="/Images/gd/1.webp"
                  alt="img"
                  className="zoom w-full h-auto object-cover"
                />
              </div>
              <div className="">
                <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                Logo Design
                </h3>
              </div>
              <div className="text-center">
                <p className="servicePara text-gray-500 text-sm  text-justify">
                Making distinctive, memorable logos that encapsulate your company’s spirit is the main goal of our logo design service. In order to make sure your logo appears fantastic everywhere, we investigate your industry, comprehend your beliefs, and produce classic, adaptable, and useful designs that work on a variety of platforms.{" "}
                </p>
              </div>
            </div>

            <div className="">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-20 h-auto">
                  <Image
                  width={200} height={200}
                    src="/Images/gd/2.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                  Branding and Identity
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-gray-500 text-sm  text-justify">
                  All marketing materials, including colour schemes, typography, and images, will maintain a consistent corporate identity thanks to our branding services. In order to build awareness and trust, we develop brand standards that will help your audience engage with your business more deeply. To turn your idea into a unified brand identity, we collaborate closely with you.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-20 h-auto">
                  <Image
                  width={200} height={200}
                    src="/Images/gd/3.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                  Print Design
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-gray-500 text-sm  text-justify">
                  Especially for business cards, brochures, flyers, and posters, print design is still very important in marketing. Our specialisation is in producing eye-catching layouts, superior graphics, and careful typography to make sure these materials are useful, consistent with your brand, and successfully communicate your message.{" "}
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
                  width={200} height={200}
                    src="/Images/gd/4.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                  Infographics
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-gray-500 text-sm  text-justify">
                  Our infographic design service is focused on producing visually stimulating and text-rich material. We turn data into infographics that are captivating and improve audience comprehension and retention. These infographics are also perfect for social media sharing, which increases brand visibility.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-20 h-auto">
                  <Image
                  width={200} height={200}
                    src="/Images/vp/1.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                  Social Media Graphics
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-gray-500 text-sm  text-justify">
                  We provide a one-stop shop for all things related to social media graphics, including posts, banners, and advertising that are appealing, contemporary, and in line with your brand’s strategy. We also keep up with the newest trends in this field.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center mt-12">
            <Link href="tel:+918699640752" className="px-4 py-4 border-2 rounded-xl border-black bg-[#006E7F] hover:bg-[#cc5f4d] text-white font-medium text-base underline ">
              Call Us
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AddOn;
