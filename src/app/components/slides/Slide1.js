import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Banner({ handleNextSlide, handlePrevSlide, slideNumber, currentSlide }) {
  const [showText, setShowText] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const splitText = (text) => {
    return text.split("").map((letter, index) => (
      <span key={index} className={`letter ${showText || isSmallScreen ? "" : "hide"}`}
        style={{
          animationDelay: `${index * 0.05}s`,
          display: letter === " " ? "inline-block" : "inline",
          whiteSpace: "pre",
        }}>
        {letter}
      </span>
    ));
  };

  return (
    <div
      className={`slide slide-${slideNumber} ${slideNumber === currentSlide ? "active bg-flow" : ""}`}
      style={{
        backgroundImage: `url('/Images/banner/slide1BG.webp')`,
        backgroundSize: "150% 150%",
        animation: "diagonalFlow 7s linear infinite",
      }}
    >
      {/* Logo and Text */}
      <div className="absolute top-2 h-[100px] w-full">
        <div className="relative flex justify-center items-center flex-col gap-2">
          <div className="w-[260px] h-[80px] cursor-pointer"
            onMouseEnter={() => setShowText(true)} onMouseLeave={() => setShowText(false)}>
            <Image width={200} height={100} src="/Images/banner/logoWhite.webp"
              alt="logoWhite" className="w-full h-[100%] object-contain" priority />
          </div>
          <div className="block lg:hidden">
            <p className="text-white text-sm">{splitText("DIGITAL PAAJI, SIRHIND ROAD, PATIALA.")}</p>
          </div>
          {showText && (
            <div className="hidden lg:block">
              <p className="text-white text-sm">{splitText("DIGITAL PAAJI, SIRHIND ROAD, PATIALA.")}</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Image (LCP) */}
      <div className="my-32 py-4 xl:py-0 xl:my-20 relative w-full flex items-center flex-wrap-reverse xl:flex-nowrap md:justify-center gap-4 xl:gap-0 xl:mx-auto">
        <div className={`relative w-[700px] md:w-[90%] md:-mt-36 xl:mt-0 xl:w-[60%] ${slideNumber === currentSlide ? "zoomInEffect" : ""}`}>
          <div className="w-full h-auto">
            <Image width={700} height={500} priority quality={75}
              src="/Images/banner/laptop.webp" alt="Laptop"
              className="w-full h-[100%] object-cover" />
          </div>
          <div className="absolute top-[14%] left-[10%] w-[80%] h-[70%]">
            <Image width={500} height={350} loading="lazy"
              src="/Images/banner/laptopInner.webp" alt="Content"
              className="w-full h-[100%] object-contain" />
          </div>
        </div>

        {/* Text Box & Navigation Buttons */}
        <div className={`ml-20 md:ml-0 w-[60%] md:w-[45%] xl:w-[16%] md:-mb-6 xl:mb-0 text-center xl:-ml-56 z-[999] flex flex-row xl:flex-col items-start xl:items-end justify-end ${slideNumber === currentSlide ? "text-slide-grow" : ""}`}>
          <div className="py-4 px-2 lg:py-12 bg-[#373636]">
            <h3 className="merriHead text-[10px] md:text-sm text-white" style={{ letterSpacing: "4px" }}>
              <span className="text-[#cc5f4d] text-[10px] md:text-sm" style={{ letterSpacing: "2px" }}>
                TRANSFORM{" "}
              </span>
              YOUR DIGITAL PRESENCE
            </h3>
            <p className="servicePara text-[8px] md:text-xs text-gray-50 my-4 lg:my-8"
              style={{ textAlign: "center" }}>
              Customised digital marketing services. We create individualised plans that appeal to their target market since our experts recognize how different every company is.
            </p>
            <p className="servicePara text-xs md:text-sm text-[#cc5f4d]" style={{ textAlign: "center" }}>
              LET&#39;S TALK BUSINESS
            </p>
          </div>
          <div className="flex items-center gap-[.5px] justify-end flex-col xl:flex-row xl:w-full">
            <button className={`bg-white hover:bg-gray-800 ${slideNumber === currentSlide ? "text-button-grow" : ""}`} onClick={handlePrevSlide}>
              <IoIosArrowBack className="text-gray-500 hover:text-white w-9 h-9 xl:w-8 xl:h-10 p-3 xl:p-2" />
            </button>
            <button className={`bg-white hover:bg-gray-800 ${slideNumber === currentSlide ? "text-button-grow" : ""}`} onClick={handleNextSlide}>
              <IoIosArrowForward className="text-gray-500 hover:text-white w-9 h-9 xl:w-8 xl:h-10 p-3 xl:p-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-3 md:bottom-8 lg:right-16 w-full lg:w-fit">
        <ul className="flex items-center justify-center gap-4">
          <li><Link href="mailto:hello@digitalpaaji.com"><MdOutlineEmail className="w-6 h-6 text-white" /></Link></li>
          <li><Link href="https://www.facebook.com/digital.paajii"><FaFacebookF className="w-6 h-6 text-white" /></Link></li>
          <li><Link href="https://www.instagram.com/digital.paajii/"><FaInstagram className="w-6 h-6 text-white" /></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;




// import React, { useState, useEffect } from "react";

// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import Link from "next/link";
// import Image from "next/image";

// function Banner({
//   handleNextSlide,
//   handlePrevSlide,
//   slideNumber,
//   currentSlide,
// }) {
//   const [showText, setShowText] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   const handleMouseEnter = () => setShowText(true);
//   const handleMouseLeave = () => setShowText(false);

//   // Check screen size to determine visibility
//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 1024); // lg breakpoint in Tailwind
//     };

//     handleResize(); // Check on component mount
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Helper function to split the text into letters
//   const splitText = (text) => {
//     return text.split("").map((letter, index) => (
//       <span
//         key={index}
//         className={`letter ${showText || isSmallScreen ? "" : "hide"}`}
//         style={{
//           animationDelay: `${index * 0.05}s`, // Delay the animation for each letter
//           display: letter === " " ? "inline-block" : "inline", // Ensure spaces are visible
//           whiteSpace: "pre", // Preserve spaces
//         }}
//       >
//         {letter}
//       </span>
//     ));
//   };

//   return (
//       <div
//   className={`slide slide-${slideNumber} ${
//     slideNumber === currentSlide ? "active bg-flow" : ""
//   } `}
//   style={{
//     backgroundImage: `url('/Images/banner/slide1BG.webp')`,
//     backgroundSize: "150% 150%", // Match `.bg-flow`
//     animation: "diagonalFlow 7s linear infinite", // Ensure animation is applied
//   }}
// >


//       <div className="absolute top-2 h-[100px] w-full">
//         <div className="relative flex justify-center items-center flex-col gap-2">
//           <div
//             className="w-[260px] h-[80px] cursor-pointer"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Image
//             width={200}
//             height={100}
//               src="/Images/banner/logoWhite.webp"
//               alt="logoWhite"
//               className="w-full h-[100%] object-contain"
//             />
//           </div>
//           <div className="block lg:hidden">
//             <p className="text-white text-sm">
//               {splitText("DIGITAL PAAJI, SIRHIND ROAD, PATIALA.")}
//             </p>
//           </div>
//           {showText && (
//             <div className="hidden lg:block">
//               <p className="text-white text-sm">
//                 {splitText("DIGITAL PAAJI, SIRHIND ROAD, PATIALA.")}
//               </p>
//             </div>
//           )}

//           <div className="hidden lg:block absolute right-[30%] xl:right-[37%] top-8">
//             <div className="vibrate space-x-10">
//               <div className="w-[43px] h-[12px]">
//                 <Image
//                 width={20}
//                 height={20}
//                   src="/Images/banner/arrow1.webp"
//                   alt="img"
//                   className="w-full h-[100%] object-cover"
//                 />
//               </div>
//               <div>
//                 <p
//                   className="merriHead text-xs text-gray-800"
//                   style={{ fontWeight: 100 }}
//                 >
//                   Hover Me
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className="hidden lg:block absolute bottom-2 w-full"
//         onClick={() => {
//           const scrollHeight = document.documentElement.clientHeight; // Height of the viewport
//           window.scrollTo({ top: scrollHeight, behavior: "smooth" }); // Scroll down by one viewport height
//         }}
//       >
//         <div className="vibrate flex flex-col justify-center items-center cursor-pointer">
//           <div className="w-[43px] h-[80px]">
//             <Image
//             width={20}
//             height={20}
//               src="/Images/banner/arrow2.webp"
//               alt="img"
//               className="w-full h-[100%] object-cover"
//             />
//           </div>
//           <div>
//             <p
//               className="merriHead text-xs text-gray-800"
//               style={{ fontWeight: 100 }}
//             >
//               Scroll For More
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-3 md:bottom-8 lg:right-16 w-full lg:w-fit">
//         <div className="relative">
//           <ul className="flex items-center justify-center gap-4">
//             <li>
//               <Link href="mailto:hello@digitalpaaji.com">
//                 <MdOutlineEmail className="w-6 h-6  text-white" />
//               </Link>
//             </li>
//             <li>
//               <Link href="https://www.facebook.com/digital.paajii">
//                 <FaFacebookF className="w-6  h-6  text-white" />
//               </Link>
//             </li>
//             <li>
//               <Link href="https://www.instagram.com/digital.paajii/">
//                 <FaInstagram className="w-6  h-6  text-white" />
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="vibrate hidden lg:block absolute right-24 bottom-2">
//           <p
//             className="merriHead relative text-gray-800 text-xs w-[150px]"
//             style={{ fontWeight: 100 }}
//           >
//             Get In Touch
//           </p>
//           <div className="absolute bottom-6 left-16 ">
//             <Image
//             width={20}
//             height={20}
//               src="/Images/banner/arrow3.webp"
//               alt="img"
//               className="w-full h-[100%] object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* <div> */}

//       <div className=" my-32 py-4 xl:py-0 xl:my-20 relative w-full bg-no-repeat   flex items-center flex-wrap-reverse   xl:flex-nowrap md:justify-center  gap-4 xl:gap-0  xl:mx-auto">
       
       
//         <div className={`relative  w-[700px] md:w-[90%] md:-mt-36 xl:mt-0 xl:w-[60%] 
//            ${slideNumber === currentSlide ? "zoomInEffect" : ""} 
//           `}>
//           <div className=" w-full h-auto">
//             <Image
//             width={20}
//             height={20}
//             priority
//               src="/Images/banner/laptop.webp"
//               alt="Laptop"
//               className="w-full h-[100%] object-cover"
//             />
//           </div>

//           <div className="absolute top-[14%] left-[10%] w-[80%] h-[70%]">
//             <Image
//             width={20}
//             height={20}
//             priority
//               src="/Images/banner/laptopInner.webp"
//               alt="Content"
//               className="w-full h-[100%] object-contain"
//             />
//           </div>
//         </div>

//         <div 
//         className={`ml-20 md:ml-0 w-[60%] md:w-[45%] xl:w-[16%] md:-mb-6 xl:mb-0 text-center xl:-ml-56 z-[999] flex flex-row xl:flex-col items-start xl:items-end justify-end 
//          ${slideNumber === currentSlide ? "text-slide-grow" : ""}
//         `}>
//           <div className="py-4 px-2 lg:py-12 bg-[#373636]">
//             <h3
//               className="merriHead text-[10px] md:text-sm text-white"
//               style={{ letterSpacing: "4px" }}
//             >
//               <span
//                 className="text-[#cc5f4d] text-[10px] md:text-sm"
//                 style={{ letterSpacing: "2px" }}
//               >
//                 TRANSFORM{" "}
//               </span>
//               YOUR DIGITAL PRESENCE
//             </h3>
//             <p
//               className="servicePara text-[8px] md:text-xs text-gray-50 my-4 lg:my-8"
//               style={{ textAlign: "center" }}
//             >
//               customised digital marketing services. We create individualised
//               plans that appeal to their target market since our experts
//               recognize how different every company is.
//             </p>
//             <p
//               className="servicePara text-xs md:text-sm text-[#cc5f4d]"
//               style={{ textAlign: "center" }}
//             >
//               LET&#39;S TALK BUSINESS
//             </p>
//           </div>
//           <div className="flex items-center gap-[.5px]  justify-end flex-col xl:flex-row xl:w-full">
//             <button
//               className={`bg-white hover:bg-gray-800 ${ slideNumber === currentSlide ? "text-button-grow" : ""}`}
//               onClick={handlePrevSlide}
//             >
//               <IoIosArrowBack className="text-gray-500 hover:text-white w-9 h-9 xl:w-8 xl:h-10 p-3 xl:p-2" />
//             </button>
//             <button
//               onClick={handleNextSlide}
//               className={`bg-white hover:bg-gray-800 ${ slideNumber === currentSlide ? "text-button-grow" : ""}`}
//             >
//               <IoIosArrowForward className="text-gray-500 hover:text-white w-9 h-9 xl:w-8 xl:h-10 p-3 xl:p-2" />
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </div>
//   );
// }

// export default Banner;
