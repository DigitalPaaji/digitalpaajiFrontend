import React from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function info() {
  return (
    <div className="flex flex-col lg:flex-row items-center h-[400px] mx-8 md:mx-12 xl:mx-72 ">
         {/* Map Section */}
      <div className=" w-full xl:w-1/2 h-[100%] ">
        <Image
        width={200}
        height={200}
          src="/Images/dm/DmF.gif"
          alt="img"
          className=" w-full h-[100%]   object-contain"
 
        />
      </div>
      {/* Contact Section */}
      <div className="z-[999] w-full xl:w-1/2 p-6 md:p-8  xl:p-12 bg-[#cc5f4d] h-[100%] ">
        <h3 className="bungeeHead text-xl md:text-2xl text-white  ">
        Maximise Your Online Presence with Comprehensive Digital Marketing
        </h3>
        <p className="servicePara text-sm text-white my-8">
        With a focus on email campaigns, content creation, social media marketing, and search engine optimization, Digital Paaji offers businesses of all sizes customised digital marketing services. We create individualised plans that appeal to their target market since our experts recognize how different every company is.
       
        </p>
        {/* <div className="">
          <Link  href="tel:+918699640752" className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black hover:text-white font-medium text-lg ">
            Contact Us
          </Link>
        </div> */}
      </div>
     
    </div>
  );
}

export default info;
