import React from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function info() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center  mx-4 md:mx-12 xl:mx-60 ">
      {/* Contact Section */}
      <div className="w-full lg:w-1/2 px-6 py-12 md:px-8  lg:px-12 bg-[#cc5f4d] ">
        <h3 className="bungeeHead text-2xl text-white mb-8 ">
          Get In Touch
        </h3>
        <p className="servicePara text-sm text-white">
          To assist companies improve their online visibility, boost
          interaction, and turn leads into devoted clients, Digital Paaji
          provides a thorough digital marketing strategy.
          <br />
          The team is committed to developing methods that are tailored to your
          particular objectives and difficulties. The package covers graphic
          design, video production, SEO, social media marketing, and web
          construction. Since Digital Paaji ensures transparency and
          collaboration, you are free to make adjustments as necessary.
        </p>
        <div className=" mt-8">
          <Link  href="tel:+918699640752"  className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg ">
            Contact Us
          </Link>
        </div>
      </div>
      {/* Map Section */}
      <div className="w-full lg:w-1/2 h-[400px] overflow-hidden ">
        <Image
                width={200}
                height={200}
          src="/Images/services/girl.webp"
          alt="img"
          className="w-full h-[100%] object-contain "
        />
      </div>
    </div>
  );
}

export default info;
