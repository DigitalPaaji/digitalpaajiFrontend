import React from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function info() {
  return (
    <div className="flex flex-col lg:flex-row items-center mx-4 md:mx-12 xl:h-[480px]  xl:mx-56 my-24 ">
        {/* Map Section */}
      <div className="w-full lg:w-1/2 h-[100%]  ">
        <Image
                width={200}
                height={200}
          src="/Images/services/web1.webp"
          alt="img"
          className="w-full h-[100%] object-cover "
        />
      </div>
      {/* Contact Section */}
      <div className="w-full lg:w-1/2 px-6 py-12 md:px-8  lg:px-12 bg-[#cc5f4d] h-[100%] flex flex-col justify-start ">
        <h3 className="bungeeHead text-2xl lg:text-3xl text-white mb-8 ">
        Web Development Services by Digital Paaji
        </h3>
        <p className="servicePara text-white text-sm">
        Digital Paaji focuses on providing great web development services to help your business succeed online. We aim to create attractive and effective websites that perfectly showcase your brand. Making sure you have a powerful and interesting internet presence is our goal. See our full range of web development services below, which are tailored to your requirements and can help your company expand online.
        </p>
        <div className=" mt-8">
          <Link href="tel:+918699640752" className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg ">
            Contact Us
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default info;
