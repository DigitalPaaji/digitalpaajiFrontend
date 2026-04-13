import React from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function Why() {
  return (
    <div className="flex flex-col xl:flex-row items-center  h-fit  mx-4 md:mx-12  xl:mx-72">
         {/* Map Section */}
      <div className=" w-full xl:w-1/2  ">
        <Image
                width={200}
                height={200}
          src="/Images/seo/SEO1.webp"
          alt="img"
          className="w-full h-[100%] object-cover "
        />
      </div>
      {/* Contact Section */}
      <div className="w-full xl:w-1/2 px-6 h-fit py-12 md:px-8 ` lg:px-12 bg-[#cc5f4d] flex flex-col justify-start ">
        <h3 className="bungeeHead text-4xl text-white  ">
        Why paaji best in SEO?
        </h3>
        <p className="servicePara text-sm text-white my-4">
        Premium SEO services tailored to your specific business needs are offered by Digital Paaji, with an emphasis on raising your website’s search engine ranking, increasing organic traffic, and increasing revenue. We adapt our tactics to your unique objectives and difficulties. To draw in the proper traffic, we investigate keywords and improve the technological architecture of your website. An improved user experience and higher website ranking are guaranteed by our results-driven approach. By improving your online presence, bringing in more customers, and raising conversion rates, we help you maximise the growth of your company.
        </p>
        <div className="">
          <Link href="tel:+918699640752" className="zoom px-6 py-4 border rounded-xl border-white text-white font-medium text-lg underline " style={{width:'fit-content'}} >
            Call Us
          </Link>
        </div>
      </div>
     
    </div>
  );
}

export default Why;
