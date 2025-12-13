import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Add Autoplay module
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation module styles
import "swiper/css/pagination"; // Import Pagination module styles
import Image from "next/image";

function KhetKiMuli() {
    const slides = [
      {
        alt: "logo 2",
        src: "/Images/logo2.webp",
      },
      {
        alt: "GR LOGO",
        src: "https://digitalpaaji.com/wp-content/uploads/2024/07/GR-LOGO-4.png",
      },
    ];
  
    return (
      <div>
        {/* <h3 className="bungeeHead text-3xl lg:text-6xl text-center text-[#cc5f4d] -mb-16">
          CLIENTS
        </h3> */}
        <div
          className="flex flex-col items-center  justify-center text-white"
          style={{
            backgroundImage: "url(/Images/services/seoClient.webp)",
            backgroundSize: "cover", // Makes the background image cover the container
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents tiling of the image
            minHeight: "100vh", // Ensures it occupies the full viewport height
          }}
        >
          
          {/* Swiper Slider */}
          <div className="w-[50%] md:w-[25%] lg:w-[20%] mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]} // Register Swiper modules
              navigation={false}
              pagination={false} // Remove dots
              autoplay={{
                delay: 2000, // Set delay in milliseconds
                disableOnInteraction: false, // Keep autoplay running after user interaction
              }}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="mx-auto flex justify-center items-center h-auto w-full">
                    <Image
                            width={200}
                            height={200}
                      className="swiper-slide-image lg:ml-6 w-full h-[100%] object-cover lg:mt-12"
                      src={slide.src}
                      alt={slide.alt}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
  
          {/* Call to Action Button */}
          <div className="text-center mt-12">
            <button className="px-4 py-4 border-2 rounded-xl border-black bg-yellow-400 hover:bg-[#cc5f4d] text-black hover:text-white font-medium text-base underline">
              Click Here
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default KhetKiMuli;
