"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {
  return (
    <div className=" ">
      <div className="text-center pt-24 mx-4 md:mx-12 lg:mx-32 xl:mx-72 border-t-2 border-black">
        <h2
          className="bungeeHead text-[#cc5f4d] text-xl md:text-2xl xl:text-4xl "
          style={{ letterSpacing: "0px" }}
        >
          Justifications for Thinking About Social Media Promotion
        </h2>
      </div>

      <div className=" text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72 my-12">
        <div className=" ">
          <div className="grid grid-cols-1 gap-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className=" p-8">
                <Image
                        width={200}
        height={200}
                  src="/Images/smm/raise.webp"
                  alt="img"
                  className="w-full h-[100%] object-cover"
                />
              </div>
              <div className="">
                <div className="mx-auto w-16 h-auto">
                  <Image
                          width={200}
        height={200}
                    src="/Images/smm.webp"
                    alt="img"
                    className="zoom w-full h-[100%] object-cover"
                  />
                </div>
                <div className="my-2">
                  <h3 className="bungeeHead p-4 text-md lg:text-xl text-[#2e2d2d]">
                  Raise Brand Awareness:
                  </h3>
                </div>
                <div className="">
                  <p className="merriHead text-sm text-gray-500 text-justify">
                  Businesses can reach a larger audience and raise brand awareness by judiciously using platforms to highlight their goods and services. Its reach is increased through frequent exposure to and sharing of material, which allows it to interact with both present and potential customers. Brand loyalty and trust are increased when they are positioned prominently on social media.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="">
                <div className="mx-auto w-16 h-auto">
                  <Image
                          width={200}
        height={200}
                    src="/Images/smm.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="my-2">
                  <h3 className="bungeeHead p-4 text-md lg:text-xl text-[#2e2d2d]">
                  Engage with Your Audience:
                  </h3>
                </div>
                <div className="">
                  <p className="merriHead text-sm text-gray-500 text-justify">
                  Effective marketing requires active audience participation on social media channels. It makes direct communication possible, which promotes a feeling of connection and community. Customer interactions are improved when you reply to remarks and criticism. Active engagement is encouraged by captivating material, which develops a devoted audience.
                  </p>
                </div>
              </div>
              <div className=" p-8">
                <Image
                        width={200}
        height={200}
                  src="/Images/smm/Engage.webp"
                  alt="img"
                  className="w-full h-[100%] object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className=" p-8">
                <Image
                        width={200}
        height={200}
                  src="/Images/smm/Cost-Effective.webp"
                  alt="img"
                  className="w-full h-[100%] object-cover"
                />
              </div>
              <div className="">
                <div className="mx-auto w-16 h-auto">
                  <Image
                          width={200}
        height={200}
                    src="/Images/smm.webp"
                    alt="img"
                    className="zoom w-full h-auto object-cover"
                  />
                </div>
                <div className="my-2">
                  <h3 className="bungeeHead p-4 text-md lg:text-xl text-[#2e2d2d]">
                  Cost-Effective Marketing:
                  </h3>
                </div>
                <div className="">
                  <p className="merriHead text-sm text-gray-500 text-justify">
                  Businesses may reach a large audience with little effort by using social media marketing, which is more affordable than traditional marketing platforms. While sponsored advertising allows for precise budgets and targeted demographics, organic posts on Facebook, Instagram, and Twitter are allowed without any restrictions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center mt-12">
            <Link
              href="tel:+918699640752"
              className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg "
            >
              Call Us
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AddOn;
