"use client";
import Image from "next/image";
import React from "react";


function AddOn() {

  return (
    <div className="mx-12 lg:mx-32 xl:mx-48 ">
      
      
       
      <div className=" text-center">
      <h3 className="merriHead text-[#302f2f] text-xl xl:text-2xl">
          Extra Services
        </h3>
        <h3 className="bungeeHead my-12 text-[#cc5f4d]  text-[30px] xl:text-[40px]">Add On (If U Want To)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          <div className="border border-black "  data-aos="zoom-out">
            <div className="p-2 lg:p-8">
            <div className="mx-auto w-40 h-auto">
        <Image width={200} height={200} src="/Images/addOn/LG.webp" alt="img" className="zoom w-full h-auto object-cover"/>
      </div>
            <div className="my-6">
              <h3 className="services p-4 text-[#2e2d2d]">Lead Generation</h3>
            </div>
            <div className="text-center">
          <button className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#006e7f] text-black hover:text-white font-medium text-lg ">
            Get Addon
          </button>
        </div>
            </div>
          </div>
          <div className="border border-black "  data-aos="zoom-out">
            <div className="p-2 lg:p-8">
            <div className="mx-auto w-40 h-auto">
        <Image width={200} height={200} src="/Images/addOn/CS.webp" alt="img" className="zoom w-full h-auto object-cover"/>
      </div>
            <div className="my-6">
              <h3 className="services p-4 text-[#2e2d2d]">Content Strategy</h3>
            </div>
            <div className="text-center">
          <button className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#006e7f] text-black hover:text-white font-medium text-lg ">
            Get Addon
          </button>
        </div>
            </div>
          </div>
          <div className="border border-black "  data-aos="zoom-out">
            <div className="p-2 lg:p-8">
            <div className="mx-auto w-40 h-auto">
        <Image width={200} height={200} src="/Images/addOn/CM.webp" alt="img" className="zoom w-full h-auto object-cover"/>
      </div>
            <div className="my-6">
              <h3 className="services p-4 text-[#2e2d2d]">Content Marketing</h3>
            </div>
            <div className="text-center">
          <button className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#006e7f] text-black hover:text-white font-medium text-lg ">
            Get Addon
          </button>
        </div>
            </div>
          </div>
         
        

        
          
        </div>
        

        
      </div>
    </div>
  );
}

export default AddOn;
