"use client";
import Image from "next/image";
import React from "react";

function History() {
  return (
    <div className="relative w-full py-16 px-4 lg:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="merriHead text-[#302f2f] text-xl xl:text-2xl my-6">
          History
        </h3>
        <h3 className="bungeeHead text-3xl lg:text-5xl text-[#cc5f4d] font-bold">
          A History Retrospective
        </h3>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <div className="flex items-center justify-start flex-col lg:flex-row gap-6 mx-8 lg:gap-52 lg:mx-24">
          <div className="border border-black p-6 w-full lg:w-[350px]">
            <h3 className="bungeeHead text-4xl font-bold text-black">2009</h3>
            <h4 className="bungeeHead text-xl text-[#cc5f4d] font-bold mt-4">
              Start our content
            </h4>
            <p className="servicePara text-gray-500 mt-2 text-sm">
              Paaji got organized and started the journey
            </p>
          </div>
          <div className="border border-black p-6 w-full lg:w-[350px]">
            <h3 className="bungeeHead text-4xl font-bold text-black">2019</h3>
            <h4 className="bungeeHead text-xl text-[#cc5f4d] font-bold mt-4">
            Smart Solutions
            </h4>
            <p className="servicePara text-gray-500 mt-2 text-sm">
            Paaji Incorporated IT services to Clients
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end flex-col lg:flex-row gap-6  lg:gap-40 mx-8 lg:mx-32 mt-6 lg:mt-16">
          <div className="border border-black p-6 w-full lg:w-[350px] ">
            <h3 className="bungeeHead text-4xl font-bold text-black">2014</h3>
            <h4 className="bungeeHead text-xl text-[#cc5f4d] font-bold mt-4">
            GROW AND IMPACT
            </h4>
            <p className="servicePara text-gray-500 mt-2 text-sm">
            Paaji started catering to 114 Clients
            </p>
          </div>
          <div className="border border-black p-6 w-full lg:w-[350px] ">
            <h3 className="bungeeHead text-4xl font-bold text-black">2025</h3>
            <h4 className="bungeeHead text-xl text-[#cc5f4d] font-bold mt-4">
              Always On
            </h4>
            <p className="servicePara text-gray-500 mt-2 text-sm">
              Paaji still going on and delivering services
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="">
        <div className="absolute transform top-4 md:bottom-0    ">
          <Image width={200} height={200} src="/Images/addOn/history.webp" alt="img" className="w-full h-auto object-cover"/>
        </div>
      </div>
    </div>
  );
}

export default History;
