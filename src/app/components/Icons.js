import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowUp, FaTimes, FaWhatsapp } from "react-icons/fa";

function Icons() {
  const [showModal, setShowModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Floating Icons */}
      <div className="flex flex-col items-center justify-center gap-2 fixed bottom-4 right-4 z-[99999999]">
        {/* Scroll to Top Icon */}
        <div
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="cursor-pointer text-white flex items-center justify-center"
        >
          <FaArrowUp className="w-9 h-9 p-2 bg-[#cc5f4d] text-white rounded-full" />
        </div>

        {/* WhatsApp Icon with Modal Trigger */}
        <div
          onMouseEnter={() => setShowModal(true)}
          className="relative"
        >
          <Link href={"/"}>
            <Image
              src={"/Images/services/whIcon.gif"}
              width={200}
              height={200}
              alt="WhatsApp"
              className="w-12 h-12 cursor-pointer"
            />
          </Link>

          {/* Modal Popup */}
          {showModal && (
            <div
              className="absolute bottom-4 right-14 bg-white shadow-lg rounded-lg w-60 lg:w-[300px] text-black z-[9999]"
              style={{ backgroundImage: "url(/Images/bg.webp)" }}
            >
              {/* Header Section with Close Icon */}
              <div className="flex items-center justify-between p-4 bg-[#48ac48] rounded-t-lg">
                <div className="flex items-center gap-2">
                  <div className="w-fit h-12 rounded-full">
                    <Image
                    width={200} height={200}
                      src="/favicon.ico"
                      alt="img"
                      className="w-full h-[100%] object-contain"
                    />
                  </div>
                  <div className="w-fit h-14">
                    <Image
                    width={200} height={200}
                      src="/Images/banner/logoWhite.webp"
                      alt="img"
                      className="w-full h-[100%] object-contain"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white hover:text-gray-200"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
<div className="py-4">
              <div className="w-fit bg-[#eeede5]  m-2 p-2 rounded-b-2xl rounded-r-2xl">
                <h3 className="flex items-center gap-2 justify-start text-md text-gray-800 ">
                  Hi There <Image width={50} alt="img" height={50} src={'/Images/hi.webp'} className="w-5 h-5"/>
           
                </h3>
                <h3 className=" text-md text-gray-800  ">

                  How Can I Help You?
                </h3>
                </div>
                <Link className="flex items-center justify-center mt-16" href="https://wa.me/6280317308?text=Hello,%20I%20am%20interested%20in%20your%20services!">
                  <h3 className="merriHead flex items-center gap-2 text-md text-white bg-[#48ac48] px-6 py-3 w-fit rounded-3xl">
                    <FaWhatsapp className="w-6 h-6" /> Chat With Us
                  </h3>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Icons;


// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react'
// import { FaArrowUp } from "react-icons/fa";

// function Icons() {
//       const scrollToTop = () => {
//         window.scrollTo({
//           top: 0,
//           behavior: "smooth", // Add smooth scrolling
//         });
//       };
//   return (
//     <div>
//         {/* Floating Contact Icon */}
//         <div className=" flex flex-col items-center justify-center gap-2 fixed  bottom-4 right-4 ">
//             <div

//           onClick={(e) => {
//             e.preventDefault(); // Prevent default link behavior
//             scrollToTop(); // Call scrollToTop function
//           }}
//           className="cursor-pointer text-white flex items-center justify-center "
//         >
//           {/* <Image
//             // src={"/Images/services/arrowUp.webp"}
//             src={"/Images/services/arrows.webp"}

//             width={200}
//             height={200}
//             alt="Scroll to top"
//             className="w-10 h-10"
//           /> */}
//           <FaArrowUp className="w-9 h-9 p-2 bg-[#cc5f4d] text-white rounded-full"/>
//         </div>

//             <Link
//               href="https://wa.me/6280317308"
//               className=" text-white  flex items-center justify-center  "
//             >
//               <Image
//                 src={"/Images/services/whIcon.gif"}
//                 // src={"/Images/services/whIcon.webp"}

//                 width={200}
//                 height={200}
//                 alt="img"
//                 className="w-12 h-w-12"

//               />
//             </Link>
//             </div>
//     </div>
//   )
// }

// export default Icons
