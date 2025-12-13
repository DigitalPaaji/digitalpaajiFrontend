import Image from "next/image";
import React from "react";

function Offer() {
  return (
    <div className=" ">
      <div className="flex items-center justify-center flex-wrap-reverse lg:flex-nowrap xl:flex-nowrap  gap-8 mx-4 md:mx-8 lg:mx-36">
        <div
          className="w-full lg:w-1/2  p-8 "
          style={{
            backgroundImage: "url(/Images/Offerbg.webp)",
            backgroundRepeat: "no-repeat",
            textAlign: "center",
          }}
        >
          <div className="">
            <h3 className="merriHead text-xl xl:text-2xl text-left md:text-center lg:text-left">
              What We Offer
            </h3>
            <h3 className="block xl:hidden bungeeHead text-[#cc5f4d] mt-2  text-[30px] xl:text-[40px]   text-left ">
              Empowering Solutions for You
            </h3>
            <h3 className="hidden xl:block bungeeHead text-left text-[#cc5f4d] mt-2  text-[30px] xl:text-[40px]">
              Empowering <br /> Solutions <br /> for You
            </h3>
            <p className="servicePara mt-[40px] text-gray-500 text-sm xl:text-[16px] ">
              With creative solutions for expansion, engagement, and success,
              Digital Paaji is a digital marketing firm that supports small and
              mid-sized enterprises. Our experts seek to demythologize digital
              marketing so that all companies can use it effectively and easily.
              Our proficiency in SEO, social media marketing, and content
              production enables us to assist companies in attracting prospects
              and turning them into devoted clients. Our belief is in
              collaboration and data-driven decision-making, and we want to be a
              reliable partner in our clients’ digital success.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <Image
          width={200} height={200}
            src="/Images/addOn/about.webp"
            alt="img"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
