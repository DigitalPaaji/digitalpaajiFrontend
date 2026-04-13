import React from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

function info() {
  return (
    <div className=" ">
      {/* Contact Section */}
      <div className="zigzag-box"></div>

      <div className="w-full text-center px-6 py-16 md:px-16  lg:px-72 bg-[#cc5f4d]  flex flex-col justify-start">

        <h3 className="bungeeHead text-3xl lg:text-5xl text-white mb-8 ">
          GET STARTED TODAY
        </h3>
        <p className="servicePara text-white text-sm" style={{textAlign:'center'}}>
     
          
        The designers at Digital Paaji are experts at using beautiful graphic design to elevate brands. Our ability to interpret your distinct vision into visually striking content that appeals to your target audience is impressive. Among the services we offer are social media graphics, branding, and promotional goods.
          <br/>  <br/>
          First, contact us via phone or on their website, and we will set up a meeting to discuss your needs, goals, and challenges. Afterwards, will lay out a personalised strategy that guarantees your participation at each turn. Meeting deadlines while upholding strict quality standards is something we take great pride in.
        </p>
        <div className=" mt-8">
          <Link href="tel:+918699640752" className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg ">
            Call Us
          </Link>
        </div>
      </div>
   
    </div>
  );
}

export default info;
