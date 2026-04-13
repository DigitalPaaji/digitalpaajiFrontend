"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";

function AddOn() {
  return (
    <div className=" ">
      <div className="text-center mt-24 mx-4 md:mx-12 lg:mx-32 xl:mx-72 ">
        <h3 className="bungeeHead  text-[#cc5f4d]  text-[30px] xl:text-[40px]">
          Get Started Today
        </h3>

        <p
          className="servicePara text-[#252424] mt-4 text-sm  text-justify xl:text-[14px] "
          style={{ textAlign: "center" }}
        >
          Are you prepared to increase the amount of people that see your website and elevate your online presence? We at Digital Paaji are ready to assist you. Our SEO services are made to be specific to your demands and to produce real outcomes.
          <br /> Contact us right now for a free consultation. Let’s discuss how we may use effective SEO strategies to increase your website’s visibility. Here’s where your journey to improved search engine rankings and increased traffic begins!
        </p>
      </div>

      <div className="flex items-center justify-center flex-col gap-6 mx-8 md:flex-row lg:gap-24 lg:mx-72 my-8">
        <div className="w-[230px] h-[230px]">
          <Image
                  width={200}
                  height={200}
            src="/Images/services/seo.webp"
            alt="img"
            className="zoom w-full h-[100%] object-cover"
          />
        </div>
        <div className=" w-full md:w-1/2 h-auto m-8 md:m-0 flex flex-col justify-start">
       
          <ul className="bungeeHead text-sm lg:text-lg mx-auto  space-y-6 md:space-y-8 lg:space-y-12">
            <li className=" flex items-center gap-2 md:gap-3">
              <AiFillPhone className="text-2xl md:text-3xl text-[#cc5f4d] border-b-2 border-[#cc5f4d]" />
              <Link href="tel:+918699640752" className=" border-b border-[#cc5f4d]">
                +91-8699640752
              </Link>
            </li>
            <li className=" flex items-center gap-2 md:gap-3">
              <AiOutlineMail className="text-2xl md:text-3xl text-[#cc5f4d] border-b-2 border-[#cc5f4d]" />
              <Link
                href="mailto:hello@digitalpaaji.com"
                className=" border-b border-[#cc5f4d]"
              >
                hello@digitalpaaji.com
              </Link>
            </li>
            <li className=" flex items-center gap-2 md:gap-3">
              <AiFillEnvironment className="text-2xl md:text-3xl text-[#cc5f4d] border-b-2 border-[#cc5f4d]" />
              <span className="border-b border-[#cc5f4d]">Patiala/Mohali</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddOn;
