import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

function Banner({
  handleNextSlide,
  handlePrevSlide,
  slideNumber,
  currentSlide,
}) {
  const [showText, setShowText] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showLightImage, setShowLightImage] = useState(false); // State to manage lighton image

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
          animationDelay: `${index * 0.05}s`, // Delay the animation for each letter  display: letter === " " ? "inline-block" : "inline", // Ensure spaces are visible
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
      style={{
        backgroundImage: `url('/Images/banner/slide3.webp')`,
        backgroundSize: isSmallScreen ? "cover" : "", // Apply cover for small screens
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Content at the top */}
      <div className="absolute top-2 h-[100px] w-full">
        <div className="relative flex justify-center items-center flex-col gap-2">
          {/* Logo */}
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

          {/* Text */}
          <div className="block lg:hidden">
            <p className="text-white text-sm">
              {splitText("DIGITAL PAAJI, SIRHIND ROAD, PATIALA.")}
            </p>
          </div>
          {showText && (
            <div>
              <p className="text-white text-sm">
                {splitText("DIGITAL PAAJI, SIRHIND ROAD, PATIALA.")}
              </p>
            </div>
          )}

          {/* Hover Me Section */}
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
                  className="merriHead text-xs text-gray-400"
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
              className="merriHead text-xs text-gray-400"
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
            className="merriHead relative text-gray-400 text-xs w-[150px]"
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

      {/* LightOn and Arrow Container */}
      <div className="my-32 py-4 xl:py-20 xl:my-20 relative w-full bg-no-repeat flex items-center flex-wrap-reverse xl:flex-nowrap md:justify-center  gap-4 xl:gap-48 xl:mx-auto">
        <div
          className={`hidden xl:block  w-[400px] h-[300px] relative cursor-pointer  `}
            // ${ slideNumber === currentSlide ? "zoomInEffectSlide3" : ""}

          onMouseEnter={() => setShowLightImage(true)}
          onMouseLeave={() => setShowLightImage(false)}
        >
          {/* LightOn Image */}
          {showLightImage && (
            <div className="flicker absolute left-16 -top-64  inset-0  w-[600px] h-[1000px]  transition-opacity duration-500 pointer-events-none">
              <Image
                   width={20}
                    height={20}
                src="/Images/banner/lighton.webp"
                alt="Light On"
                className="w-full h-[100%] object-cover"
              />
            </div>
          )}


          {/* Left Arrow */}
          <div
            className={`w-32 h-16 absolute top-[20%] -left-28 transition-opacity duration-500 ${
              showLightImage ? "opacity-0" : "opacity-100"
            } arrow-move`}
          >
            <Image
                 width={20}
                    height={20}
              src="/Images/banner/slide3Arrow.webp"
              alt="Left Arrow"
              className="w-full h-full"
            />
          </div>

          {/* Right Arrow */}
          <div
            className={`w-32 h-16 absolute top-[20%] -right-44 transition-opacity duration-500 ${
              showLightImage ? "opacity-0" : "opacity-100"
            } arrow-move-right`}
          >
            <Image
                 width={20}
                    height={20}
              src="/Images/banner/slide3Arrow.webp"
              alt="Right Arrow"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Slide Controls */}
        <div className={`mx-auto xl:mx-0 mt-16 xl:mt-0 w-[60%] md:w-[45%] xl:w-[16%] md:-mb-6 xl:mb-0 text-center z-[999] flex flex-row xl:flex-col items-start xl:items-end justify-end
             ${ slideNumber === currentSlide ? "text-slide-grow" : ""}
          `}>
          <div className="py-4 px-2 lg:py-12 bg-[#373636]">
            <h3
              className="merriHead text-[10px] md:text-sm text-white"
              style={{ letterSpacing: "4px" }}
            >
              <span
                className="text-gray-400 text-[10px] md:text-sm"
                style={{ letterSpacing: "2px" }}
              >
                
READY TO SHINE <br />
{" "}
              </span>
              IN THE DIGITAL WORLD?
            </h3>
            <p
              className="servicePara text-[9px] md:text-xs text-gray-50 my-4 lg:mb-8 lg:mt-4"
              style={{ textAlign: "center" }}
            >
              Innovative Solutions for You  <br />
              From social media management to SEO strategies, we have the expertise to elevate your brand&#39;s presence in the digital realm
              .
            </p>
            <p
              className="servicePara text-xs md:text-sm text-[#cc5f4d]"
              style={{ textAlign: "center" }}
            >
       CLICK TO LIGHT UP YOUR JOURNEY
            </p>
          </div>
       <div className="flex items-center gap-[.5px]  justify-end flex-col xl:flex-row xl:w-full">
                  <button
                    className={`bg-white hover:bg-gray-800 ${ slideNumber === currentSlide ? "text-button-grow" : ""}`}
                    onClick={handlePrevSlide}
                  >
                    <IoIosArrowBack className="text-gray-500 hover:text-white w-9 h-9 xl:w-8 xl:h-10 p-3 xl:p-2" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className={`bg-white hover:bg-gray-800 ${ slideNumber === currentSlide ? "text-button-grow" : ""}`}
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
