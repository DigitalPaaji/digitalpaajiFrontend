import Image from "next/image";
import Link from "next/link";
import React from "react";

function Story() {
  return (
    <div
      className="bg-[#006E7F] overflow-hidden text-white py-16 "
      style={{ backgroundImage: "url(/Images/muli/checkBg.webp)" }}
    >
      <div className="flex items-center justify-center flex-wrap mx-12 md:mx-20 gap-8 ">
        <div className="w-full lg:w-[40%] ">
          <h3 className="merriHead text-xl xl:text-2xl">
            
Our Story
          </h3>
          <h3 className="bungeeHead mt-2  text-[30px] xl:text-[40px]">
          Our Talented Digital Creators
          </h3>
          <p className="servicePara mt-[40px]  text-sm xl:text-[16px] mb-8">
          A group of marketing enthusiasts formed Digital Paaji, a prominent digital marketing agency, realising that businesses struggle to use digital marketing because of their restricted resources. We have effectively acquired and converted quality leads thanks to the experts we have who are best in digital marketing, social media, SEO, and web building. This has helped firms reach a wider audience and cultivate a following of devoted clients.
          </p>
          <Link href={'/contact'} className="merriHead text-xl xl:text-2xl ">
  Contact us
</Link>

        </div>
        <div className=" w-full lg:w-[40%] "  data-aos="flip-right" >
          <Image
          width={200} height={200}
            src="/Images/muli/mic.webp"
            alt="img"
            className=" zoom w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Story;
