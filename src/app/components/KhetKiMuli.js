import Image from "next/image";
import Link from "next/link";
import React from "react";

function KhetKiMuli() {
  return (
    <div
      className="bg-[#006E7F] overflow-hidden text-white py-12"
      style={{ backgroundImage: "url(/Images/muli/checkBg.webp)" }}
    >
      <div className="flex items-center justify-center flex-wrap mx-12 md:mx-20 gap-8">
        <div className="w-full lg:w-[40%]">
          <h3 className="merriHead text-xl xl:text-2xl">Kis Khet ki Mooli hu?</h3>
          <h2 className="bungeeHead mt-2 text-[25px] md:text-[30px] xl:text-[40px]">
            The Team You Want <br /> On Your Project
          </h2>
          <p className="servicePara mt-[40px] text-sm xl:text-[16px] mb-8">
            For more than 15 years, we&apos;ve stood as a leading Digital marketing agency,
            dedicated to serving small- and mid-sized companies. Our innovative digital marketing
            strategies have successfully captured and converted countless qualified leads. With our
            unique blend of marketing automation tools and expert insights, we guarantee the
            transition of leads into loyal customers.
          </p>
          <Link href={"/contact"} className="merriHead text-xl xl:text-2xl">
            Contact us
          </Link>
        </div>
        <div className="w-full lg:w-[40%]" data-aos="flip-right">
          <Image
            width={20}
            height={20}
            src="/Images/muli/mic.webp"
            alt="img"
            className="zoom w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default KhetKiMuli;
