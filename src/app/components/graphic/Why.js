import React, { useEffect, useRef } from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function Info() {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;

      const rect = imgRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the image is in the viewport
      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        const scrollProgress = 1 - (rect.bottom / windowHeight);
        imgRef.current.style.transform = `scale(${1 + scrollProgress * 0.2})`;
      } else {
        imgRef.current.style.transform = "scale(1)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 mx-4 md:mx-12 xl:mx-60">
      {/* Contact Section */}
      <div className="w-full lg:w-1/2 px-6 py-12 md:px-8  lg:px-12 bg-[#cc5f4d] flex flex-col justify-start">
        <h3 className="bungeeHead text-2xl text-white mb-8 ">
        Why Go with Graphic Design
        </h3>
        <p className="servicePara text-white">
        The foundation of marketing tactics is graphic design since it aids in creating a unified visual identity that resonates with the intended audience. Websites, social media photos, branding materials, and logos are all included. Businesses stand out from rivals and gain respect with a powerful visual presence. By use visual hierarchy, color psychology, and typography to direct attention and clearly convey important messages, effective graphic design simplifies difficult concepts.
        </p>
        <div className="mt-8">
          <Link  href="tel:+918699640752" className="px-6 py-4 border rounded-lg border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg">
            Contact Us
          </Link>
        </div>
      </div>
      {/* Map Section */}
      <div className="Scroll-zoom w-full lg:w-1/2 h-auto">
        <Image
                width={200}
                height={200}
          ref={imgRef}
          src="/Images/services/gdWhy.png"
          alt="img"
          className=" w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Info;
