"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Pagination, Autoplay } from "swiper/modules"; // Add Autoplay and Pagination modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Pagination module styles
import { PiPlayLight  } from "react-icons/pi";
import Image from "next/image";

function Work() {
      const [isOpen, setIsOpen] = useState(false);
      const handleVideoPopup = () => setIsOpen(!isOpen);
      const slides = [
        { id: 1, image: "/Images/addOn/about.webp", video: "https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu" },
        { id: 2, image: "/Images/addOn/about.webp", video: "https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu" },
        { id: 3, image: "/Images/addOn/about.webp", video: "https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu" },
        { id: 4, image: "/Images/addOn/about.webp", video: "https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu" },
        { id: 5, image: "/Images/addOn/about.webp", video: "https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu" },
      ];

  return (
    <div className="work-slider-container  ">
      {/* Section Header */}
      <div className="text-center mb-12">
      <h3 className="bungeeHead text-3xl lg:text-5xl text-[#cc5f4d] mb-8 ">
      Our Work
        </h3>
      </div>

      {/* Swiper Slider */}
      <div className="slider-wrapper max-w-5xl mx-4 md:mx-8 lg:mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]} // Register Swiper modules
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Custom pagination element
          }}
          autoplay={{
            delay: 3000, // Delay in milliseconds
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          loop={true} // Enable infinite loop
          centeredSlides={true} // Center the main slide
          breakpoints={{
            // Breakpoints for responsive behavior
            1024: {
              slidesPerView: 3, // 3 slides on larger screens
              spaceBetween: 20, // More space between slides
            },
            768: {
              slidesPerView: 2, // 2 slides on medium screens
              spaceBetween: 20, // Less space on medium screens
            },
            640: {
              slidesPerView: 1, // 1 slide on small screens
              spaceBetween: 20, // Even less space on small screens
            }
          }}
          watchOverflow={true} // Watch overflow and update breakpoints on resize
          onSlideChangeTransitionStart={(swiper) => {
            const slides = document.querySelectorAll(".swiper-slide");
            slides.forEach((slide, index) => {
              slide.classList.remove("prev-slide", "next-slide");
              if (index === swiper.activeIndex - 1) {
                slide.classList.add("prev-slide");
              } else if (index === swiper.activeIndex + 1) {
                slide.classList.add("next-slide");
              }
            });
          }}
          onInit={(swiper) => {
            const slides = document.querySelectorAll(".swiper-slide");
            slides.forEach((slide, index) => {
              if (index === swiper.activeIndex - 1) {
                slide.classList.add("prev-slide");
              } else if (index === swiper.activeIndex + 1) {
                slide.classList.add("next-slide");
              }
            });
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <div className="relative  md:w-[400px] h-[180px] ">
                  <Image
                          width={200}
                          height={200}
                    className="w-full h-[100%] object-cover rounded shadow-lg "
                    src={slide.image}
                    alt='img'
                    // style={{ maxWidth: "250px", height: "auto" }}
                  />
                </div>
                <div className="absolute top-16 left-[43%] ">
                    <button  onClick={handleVideoPopup}>
                    <PiPlayLight   className="w-16 h-16 border-4 border-gray-500 text-gray-600 rounded-full p-4"/>

                        </button>
                        </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination Dots */}
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>

         {/* Video Popup */}
            {isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[99999999]">
                <AiOutlineClose
                  className="absolute top-6 right-6 text-4xl text-white cursor-pointer border-2 rounded-full border-white p-2"
                  onClick={handleVideoPopup}
                />
                <div className="p-1 bg-[#f6f6f5] ">
                  <iframe
                  //   width="660"
                  //   height="425"
                    className="w-[300px] h-[400px] md:w-[540px] lg:w-[660px] md:h-[400px] lg:h-[425px]"
                    src="https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu"
                    title="YouTube Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
    </div>
  );
}

export default Work;
