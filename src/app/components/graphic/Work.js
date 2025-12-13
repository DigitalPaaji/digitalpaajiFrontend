"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {
  return (
    <div className=" ">
      <div className="text-center mt-24 mx-4 md:mx-12 lg:mx-32 xl:mx-72 ">
        <h3 className="bungeeHead  text-[#cc5f4d]  text-[30px] xl:text-[35px]">
        Why Work with Us?

        </h3>

        <p
          className="servicePara text-[#252424] mt-4 text-sm  text-justify xl:text-[14px] "
          style={{ textAlign: "center" }}
        >
          Providing outstanding services in a competitive market, Digital Paaji is a top graphic design agency. Being different from other agencies in that our expert are dedicated to quality and client satisfaction, we are the perfect partner for your creative needs and will help ensure the success of your brand.
        </p>
      </div>

      <div className="relative text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72 my-6 ">
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
              <div className="mx-auto w-20 h-auto">
                <Image
                        width={200}
        height={200}
                  src="/Images/gd/1.webp"
                  alt="img"
                  className="zoom w-full h-auto object-cover"
                />
              </div>
              <div className="">
                <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                Experienced Designers
                </h3>
              </div>
              <div className="text-center">
                <p className="servicePara text-gray-500 text-sm  text-justify">
                With an extensive experience of our graphic designers in almost every imaginable industry, we can predict trends, understand audiences’ preferences, and markets. We design striking images which will surely catch your targeted audience and actually get the message of your business across.{" "}
                </p>
              </div>
            </div>

            <div className="">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-20 h-auto">
                  <Image
                          width={200}
        height={200}
                    src="/Images/gd/1.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                  Customised Solutions
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-gray-500 text-sm  text-justify">
                  Offering specialised designs made to fit particular business demands is Digital Paaji’s main focus. Every design element is in line with your brand identity since we are aware of the goals and values of your organisation. To ensure unique opportunities for distinctive solutions, our experts provide rebranding, marketing materials, and logo services.{" "}
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
                    src="/Images/gd/2.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                  Collaborative Approach
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-gray-500 text-sm  text-justify">
                  Prioritising client involvement throughout the whole design process, from conception to delivery, we value their ideas and opinions. To promote innovation and collaboration, we support open communication. Bringing your vision to reality, we see ourselves as an extension of your team.{" "}
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
                    src="/Images/gd/3.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                  Timely Delivery
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-gray-500 text-sm  text-justify">
                  A fast-moving company, Digital Paaji places a high value on completing design assignments within the deadline. Their proficient group oversees several projects concurrently, establishing reasonable deadlines and providing clients with updates. We provide finished designs on time, saving firms needless delays and enabling them to proceed.{" "}
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
                    src="/Images/gd/4.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="">
                  <h3 className="bungeeHead p-4 text-md text-[#2e2d2d]">
                  Affordable Pricing
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-gray-500 text-sm  text-justify">
                  Digital Paaji provides all sizes of organisations with reasonably priced, excellent graphic design services. To ensure transparency and affordability for businesses to meet their design goals, we maintain high standards, offer competitive pricing, and are open and honest about their pricing system.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center mt-12">
            <Link href="tel:+918699640752"  className="px-4 py-4 border-2 rounded-xl border-black bg-[#006E7F] hover:bg-[#cc5f4d] text-white font-medium text-base underline ">
              Contact Us
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AddOn;
