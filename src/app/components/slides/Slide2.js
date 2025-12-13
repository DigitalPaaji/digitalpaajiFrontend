import React, { useState, useEffect } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Banner({
  handleNextSlide,
  handlePrevSlide,
  slideNumber,
  currentSlide,
}) {
  const [showText, setShowText] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleMouseEnter = () => setShowText(true);
  const handleMouseLeave = () => setShowText(false);

  // Check screen size to determine visibility
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // lg breakpoint in Tailwind
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Helper function to split the text into letters
  const splitText = (text) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        className={`letter ${showText || isSmallScreen ? "" : "hide"}`}
        style={{
          animationDelay: `${index * 0.05}s`, // Delay the animation for each letter
          display: letter === " " ? "inline-block" : "inline", // Ensure spaces are visible
          whiteSpace: "pre", // Preserve spaces
        }}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div
      className={`slide slide-${slideNumber} ${
        slideNumber === currentSlide ? "active" : ""
      } `}
    >
      <div className="absolute top-2 h-[100px] w-full">
        <div className="relative flex justify-center items-center flex-col gap-2">
          <div
            className="w-[260px] h-[80px] cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
                 width={20}
                 height={20}
              src="/Images/banner/logoWhite.webp"
              alt="logoWhite"
              className="w-full h-[100%] object-contain"
            />
          </div>
          <div className="block lg:hidden">
            <p className="text-white text-sm">
              {splitText("DIGITAL PAAJI, SIRHIND ROAD, PATIALA.")}
            </p>
          </div>
          {showText && (
            <div className="hidden lg:block">
              <p className="text-white text-sm">
                {splitText("DIGITAL PAAJI, SIRHIND ROAD, PATIALA.")}
              </p>
            </div>
          )}

          <div className="hidden lg:block absolute right-[30%] xl:right-[37%] top-8">
            <div className="vibrate space-x-10">
              <div className="w-[43px] h-[12px]">
                <Image
                     width={20}
                     height={20}
                  src="/Images/banner/arrow1.webp"
                  alt="img"
                  className="w-full h-[100%] object-cover"
                />
              </div>
              <div>
                <p
                  className="merriHead text-xs text-gray-600"
                  style={{ fontWeight: 100 }}
                >
                  Hover Me
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:block absolute bottom-2 w-full"
        onClick={() => {
          const scrollHeight = document.documentElement.clientHeight; // Height of the viewport
          window.scrollTo({ top: scrollHeight, behavior: "smooth" }); // Scroll down by one viewport height
        }}
      >
        <div className="vibrate flex flex-col justify-center items-center cursor-pointer">
          <div className="w-[43px] h-[80px]">
            <Image
            width={20}
            height={20}
              src="/Images/banner/arrow2.webp"
              alt="img"
              className="w-full h-[100%] object-cover"
            />
          </div>
          <div>
            <p
              className="merriHead text-xs text-gray-800"
              style={{ fontWeight: 100 }}
            >
              Scroll For More
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 md:bottom-8 lg:right-16 w-full lg:w-fit">
        <div className="relative">
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link href="mailto:hello@digitalpaaji.com">
                <MdOutlineEmail className="w-6 h-6  text-white" />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/digital.paajii">
                <FaFacebookF className="w-6  h-6  text-white" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/digital.paajii/">
                <FaInstagram className="w-6  h-6  text-white" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="vibrate hidden lg:block absolute right-24 bottom-2">
          <p
            className="merriHead relative text-gray-800 text-xs w-[150px]"
            style={{ fontWeight: 100 }}
          >
            Get In Touch
          </p>
          <div className="absolute bottom-6 left-16 ">
            <Image
            width={20}
                            height={20}
              src="/Images/banner/arrow3.webp"
              alt="img"
              className="w-full h-[100%] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="my-32 py-4 xl:py-0 flex items-center justify-center flex-wrap-reverse gap-8 xl:gap-0 xl:flex-nowrap xl:mx-56 ">
        <div className="w-[700px] md:w-[90%] xl:w-[70%] overflow-hidden">
          <div className="flex items-center justify-center ">
            <div className="relative">
              <div
                className={`relative 
            ${slideNumber === currentSlide ? "zoomInEffectSlide2" : ""}
              
              `}
              >
                <div className="w-[200px]  h-[210px] md:w-[260px] md:h-[300px] lg:w-[320px] lg:h-[340px] xl:w-[450px] xl:h-[550px]">
                  <Image
                    width={20}
                    height={20}
                    src="/Images/banner/ipad.webp"
                    alt="img"
                    className="w-full h-[100%]"
                  />
                </div>
                <div className="absolute top-[16%] left-[16%] w-[68%] h-[70%]">
                  <Image
                    width={20}
                    height={20}
                    src="/Images/banner/iPadImg.webp"
                    alt="img"
                    className="w-full h-[100%] object-cover"
                  />
                </div>
              </div>
              <div
                className={`absolute -left-8 xl:-left-[8rem] top-5 md:top-[5.25rem] lg:top-[7rem] xl:top-[8rem] w-[120px] h-[60px] xl:w-[243px] xl:h-[400px]
              ${slideNumber === currentSlide ? "arrow-iphone " : ""}
              `}
              >
                <div className="relative">
                  <div className="xl:w-full xl:h-auto">
                    <Image
                      width={20}
                      height={20}
                      src="/Images/banner/iphone.webp"
                      alt="img"
                      className="w-full h-[100%]"
                    />
                  </div>
                  <div className="absolute top-[13%] left-[16%] w-[68%] h-[73%]">
                    <Image
                      width={20}
                      height={20}
                      src="/Images/banner/iPhoneGif.gif"
                      alt="img"
                      className="w-full h-[100%] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`ml-6 md:ml-0 w-[60%] md:w-[45%] xl:w-[24%] xl:-ml-44 md:-mb-6 xl:mb-16 text-center z-[999] flex flex-row xl:flex-col items-start xl:items-end justify-end ${
            slideNumber === currentSlide ? "text-slide-grow" : ""
          }`}
        >
          <div className="py-4 px-2 lg:py-12 bg-[#373636]">
            <h3
              className="merriHead text-[10px] md:text-sm text-white"
              style={{ letterSpacing: "4px" }}
            >
              NOW DEAL WITH A TEAM OF
              <span
                className="text-[#cc5f4d] text-[10px] md:text-sm"
                style={{ letterSpacing: "2px" }}
              >
                {" "}
                EXPERTS
              </span>
            </h3>
            <p
              className="servicePara text-[8px] md:text-xs text-gray-50 my-4 lg:my-8"
              style={{ textAlign: "center" }}
            >
              Digital Paaji is not just a digital Marketing Agency; we are your
              companions in the journey of online success. We offer
              comprehensive digital marketing solutions tailored to your needs.
            </p>
            <p
              className="servicePara text-xs md:text-sm text-[#cc5f4d]"
              style={{ textAlign: "center" }}
            >
              GROW WITH US
            </p>
          </div>
          <div className="flex items-center gap-[.5px]  justify-end flex-col xl:flex-row xl:w-full">
            <button
              className={`bg-white hover:bg-gray-800 ${
                slideNumber === currentSlide ? "text-button-grow" : ""
              }`}
              onClick={handlePrevSlide}
            >
              <IoIosArrowBack className="text-gray-500 hover:text-white w-9 h-9 xl:w-8 xl:h-10 p-3 xl:p-2" />
            </button>
            <button
              onClick={handleNextSlide}
              className={`bg-white hover:bg-gray-800 ${
                slideNumber === currentSlide ? "text-button-grow" : ""
              }`}
            >
              <IoIosArrowForward className="text-gray-500 hover:text-white w-9 h-9 xl:w-8 xl:h-10 p-3 xl:p-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
