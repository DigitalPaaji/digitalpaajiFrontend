import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header({ title, content, button }) {
  return (
    <div className="relative">
      <div
        className=" w-full"
        style={{ backgroundImage: "url(/Images/services/bg.webp)" }}
      >
        <div className=" text-center py-20 lg:py-32 mx-4">
          <h1 className="bungeeHead text-3xl md:text-3xl lg:text-5xl text-white ">
            {title}
          </h1>
          <h5 className="merriHead mt-3 md:mt-6 text-white mx-6 text-center md:mx-16 xl:mx-52 text-sm md:text-lg ">
            {content}
          </h5>
          {/* <div className=" mt-8">
            <Link href="tel:+918699640752" className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg ">
              {button}
            </Link>
          </div> */}
        </div>
      </div>
      <div className="absolute left-0 bottom-0 lg:-bottom-[15%] w-[100%] h-[15%] lg:h-[33%] ">
        <Image
                width={200}
                height={200}
          src="/Images/services/wavy.png"
          alt="img"
          className="w-full h-[100%] object-cover"
        />
      </div>
    </div>
  );
}

export default Header;
