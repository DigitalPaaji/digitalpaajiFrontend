import React from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function info() {
  return (
    <div className="flex flex-col xl:flex-row items-center  mx-8 md:mx-12 xl:mx-72">
         {/* Map Section */}
      <div className=" w-full xl:w-1/2 ">
        <Image
                width={200}
                height={200}
          src="/Images/smm/smm.webp"
          alt="img"
          className="zoom w-full h-[100%]  object-cover p-4  "
        />
      </div>
      {/* Contact Section */}
      <div className="z-[999] w-full xl:w-1/2 xl:px-8 mt-12 xl:mt-0 ">
      <h5 className="merriHead font-bold text-xl">
      Welcome to Digital Paaji</h5>
        <h3 className="bungeeHead text-2xl text-[#cc5f4d] mt-2 ">
        Your Partner in
        Social Media Marketing 
        </h3>
        <p className="servicePara text-xs my-6">
        Enhancing businesses’ online presence and engagement is the primary goal of Digital Paaji, a social media marketing company. We develop specialised plans with a group of professionals to increase brand recognition, increase website traffic, and strengthen customer relationships. Our experts guarantee that campaigns are in line with the client’s vision by focusing on comprehending certain aims and objectives. With the goal of setting companies up for success in the digital sphere, Digital Paaji develops strategies that have an impact and yield quantifiable outcomes.
        </p>
        {/* <div className="">
          <Link href="tel:+918699640752" className="px-6 py-4 border-2 underline rounded-xl xl:mx-28 border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-md ">
            Contact Us
          </Link>
        </div> */}
      </div>
     
    </div>
  );
}

export default info;
