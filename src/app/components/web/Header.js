import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className="relative">
      <div className="header-background w-full h-auto">
        <div className="py-16 w-1/2 xl:w-[500px] mx-4 md:mx-8 xl:ml-40">
          <h1 className="bungeeHead text-3xl md:text-4xl lg:text-8xl text-white">
            Web Development Agency In India
          </h1>
          <div className="mt-8">
            <Link href="tel:+918699640752" className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg">
              Call Us
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute left-0 -bottom-1 lg:-bottom-[5.25rem] w-[100%] h-[15%] lg:h-[33%]">
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
