"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {
  return (
    <div
      className="relative bg-[#bd5240] text-white py-4"
     
    >
       <div
    className="absolute inset-0  opacity-30"
    style={{
      backgroundImage: "url(/Images/services/benefitsBG.webp)",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "brightness(1.2)"
    }}
  ></div>
      <div className="relative z-10 text-center">
        <div className="text-center mt-24 mx-4 md:mx-12 lg:mx-32 xl:mx-72 ">
          <h2 className="bungeeHead    text-[30px] xl:text-[40px]">
          Selecting Digital Paaji for SEO Services Has Its Benefits
          </h2>

          <p
            className="servicePara mt-4 text-sm  text-justify xl:text-[14px] "
            style={{ textAlign: "center" }}
          >
           Working with the correct agency can make all the difference when it comes to SEO. We at Digital Paaji differentiate ourselves from the competition with a wide range of benefits. Here are a few of the main advantages of using us for your SEO requirements:
          </p>
        </div>

        <div className=" text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72 my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
            <div className=" ">
              <div className="p-2 lg:p-8">
                <div className="p-4 flex items-center justify-start gap-3">
                  <div className="mx-auto w-32 h-auto">
                    <Image
                            width={200}
        height={200}
                      src="/Images/services/benefits1.webp"
                      alt="img"
                      className="zoom w-full h-auto object-cover"
                    />
                  </div>
                  <div className="">
                    <h3 className="bungeeHead-400 text-base ">
                      
Skilled SEO
Experts                    </h3>
                  </div>
                </div>
                <div className="text-center">
                  <p className="servicePara  text-sm  text-justify">
                  The skilled experts at Digital Paaji are always abreast of the latest developments in SEO trends and best practices, guaranteeing creative and legal approaches. Because of their experience, we can tackle difficult SEO problems like recovering from Google penalties and reduce the risk associated with using antiquated tactics.
                  </p>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="p-2 lg:p-8">
                <div className="p-4 flex items-center justify-start gap-3">
                  <div className="mx-auto w-32 h-auto">
                    <Image
                            width={200}
        height={200}
                      src="/Images/services/benefits3.webp"
                      alt="img"
                      className="zoom w-full h-auto object-cover"
                    />
                  </div>
                  <div className="">
                    <h3 className="bungeeHead-400 text-base ">
                      
Customised Business
Strategies
                    </h3>
                  </div>
                </div>
                <div className="text-center">
                  <p className="servicePara  text-sm  text-justify">
                  Working with the correct agency can make all the difference when it comes to SEO. We at Digital Paaji differentiate ourselves from the competition with a wide range of benefits. Here are a few of the main advantages of using us for your SEO requirements:
                  </p>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="p-2 lg:p-8">
                <div className="p-4 flex items-center justify-start gap-3">
                  <div className="mx-auto w-32 h-auto">
                    <Image
                            width={200}
        height={200}
                      src="/Images/services/benefits2.webp"
                      alt="img"
                      className="zoom w-full h-auto object-cover"
                    />
                  </div>
                  <div className="">
                    <h3 className="bungeeHead-400 text-base ">
                      
Constant Assistance and Adjustment​
                    </h3>
                  </div>
                </div>
                <div className="text-center">
                  <p className="servicePara  text-sm  text-justify">
                  SEO calls for ongoing observation and modification; it is not a one-time endeavor. At Digital Paaji, we offer continuous assistance to make sure your SEO plan continues to work over time. We maintain your content current and relevant, evaluate performance on a regular basis, and make modifications in response to emerging trends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <Link  href="tel:+918699640752" className="px-4 py-4 border-2 rounded-xl border-black bg-[#006E7F] hover:bg-[#cc5f4d] text-white font-medium text-base underline ">
              Call Us
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AddOn;
