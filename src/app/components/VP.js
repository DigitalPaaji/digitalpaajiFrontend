"use client";
import React, { act, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

 import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import Why from "../components/video/Why";
import Services from "../components/video/Services";
import { PiCourtBasketballFill } from "react-icons/pi";
import {
  FaHotel,
  FaPassport,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";

const frames = [
  { type: "restaurants", url: "https://youtube.com/shorts/hleWBqF5F2M" },
  { type: "restaurants", url: "https://youtube.com/shorts/3CMHqcoftb0" },
  // { type: "shoots", url: "https://youtube.com/shorts/wrENWvcGpLM" },
  { type: "product", url: "https://youtube.com/shorts/6jiW_UAvE38" },
  { type: "others", url: "https://youtube.com/shorts/i48hZ5dnu5Y" },
  { type: "others", url: "https://youtube.com/shorts/X0-zJ3hOV6Q" },
];

const getEmbedUrl = (url) => {

  const videoId = url.split("shorts/")[1]?.split("?")[0];
  return `https://www.youtube.com/embed/${videoId}`;
};

export default function About() {
  const [loadedFrames, setLoadedFrames] = useState(new Array(frames.length).fill(false));

  const handleIframeLoad = (index) => {
    setLoadedFrames(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const tabs = [
    {
      id: "all",
      label: "All",
      icon: <PiCourtBasketballFill />,
      desc: "Boost sales with high-converting online stores.",
    },
    // { id: "ecommerce", label: "Ecommerce", icon: <FaShoppingCart />, desc: "Boost sales with high-converting online stores." },
    {
      id: "product",
      label: "Product",
      icon: <FaShoppingCart />,
      desc: "Boost sales with high-converting online stores.",
    },

    {
      id: "shoots",
      label: "Shoots",
      icon: <FaPassport />,
      desc: "Hassle-free global travel documentation.",
    },
    // { id: "shoots", label: "Photo Shoots", icon: <FaCamera />, desc: "Professional photography for your brand." },
    {
      id: "restaurants",
      label: "Restaurants",
      icon: <FaUtensils />,
      desc: "Culinary experiences and menu curation.",
    },
    {
      id: "others",
      label: "Others",
      icon: <FaHotel />,
      desc: "Luxury stays and hospitality management.",
    },
  ];

  return (
    <main>
      {/* <Header title="VIDEO PRODUCTION AGENCY In INDIA" 
        content="For you to produce captivating, audience-resonant videos, customised video editing is essential. Our customization-focused approach guarantees that every alteration captures the essence and personality of your brand. "
         button="Call Us"/> */}
 <h3 className="bungeeHead font-bold text-[#cc5f4d] text-2xl md:text-3xl xl:text-4xl my-10  text-center">
Video Stories We&apos;ve Crafted for Our Clients
        </h3>
      {/* <div className="flex flex-wrap justify-center gap-9 mt-10 mb-6 ">
        {tabs.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              flex items-center gap-2 px-6 py-3  text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out border
              ${activeTab === item.id ? "text-black" : " text-black/70"}
            `}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div> */}



<section className="px-4 md:px-12 xl:px-52 w-full py-20">


<div className="relative">
  <Swiper
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={1}
    spaceBetween={20}
    loop={true}
    autoplay={{
      delay:3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }}
    breakpoints={{
      // Mobile (0px - 639px)
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }
      },
      // Small tablet (640px - 767px)
      640: {
        slidesPerView: 1.4,
        spaceBetween: 25,
        coverflowEffect: {
          rotate: 0,
          stretch: -20,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }
      },
      // Tablet (768px - 1023px)
      768: {
        slidesPerView: 2.4,
        spaceBetween: 30,
        coverflowEffect: {
          rotate: 0,
          stretch: -60,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }
      },
      // Desktop (1024px - 1279px)
      1024: {
        slidesPerView: 2.8,
        spaceBetween: 35,
        coverflowEffect: {
          rotate: 0,
          stretch: -70,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }
      },
      // Large desktop (1280px+)
      1280: {
        slidesPerView: 3,
        spaceBetween: 40,
        coverflowEffect: {
          rotate: 0,
          stretch: -80,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }
      },
    }}
    modules={[EffectCoverflow, Navigation, Autoplay]}
    className="h-[65vh] md:h-[75vh]"
  >
    {frames.map((frame, index) => (
      <SwiperSlide key={index}>
        {({ isActive }) => (
          <div className="relative overflow-hidden h-full">
            {/* Loading overlay */}
            {!loadedFrames[index] && (
              <div className="absolute inset-0 bg-transparent animate-pulse flex items-center justify-center z-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-[#cc5f4d]/20 border-t-[#cc5f4d] rounded-full animate-spin mb-4"></div>
                  <span className="text-[#cc5f4d] font-medium">Loading...</span>
                </div>
              </div>
            )}

            {/* Video container */}
            <div
              className={`transition-all duration-700 overflow-hidden h-full
                ${
                  isActive
                    ? 'scale-100 blur-0 opacity-100'
                    : 'scale-90 blur-[2px] opacity-90'
                }
                ${!loadedFrames[index] ? 'opacity-0' : 'opacity-100'}
              `}
            >
              {/* YouTube embed for Shorts */}
              <div className="w-full h-full overflow-hidden bg-transparent">
                <iframe
                  src={getEmbedUrl(frame.url)}
                  loading="lazy"
                  className="w-full h-full border-0 transition-opacity duration-700"
                  onLoad={() => handleIframeLoad(index)}
                  style={{
                    opacity: loadedFrames[index] ? 1 : 0,
                  }}
                  title={`YouTube Short - ${frame.type} ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Play button overlay for better UX */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className={`transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#cc5f4d]/80 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Navigation buttons - Visible on ALL screen sizes */}
  <div className="swiper-button-prev 
    !flex !items-center !justify-center
    !text-[#cc5f4d] 
    !w-8 !h-8 md:!w-10 md:!h-10 lg:!w-12 lg:!h-12 
    !bg-white/80 !rounded-full 
    !shadow-lg
    after:!text-[18px] md:after:!text-[22px] lg:after:!text-[28px]
    !left-2 md:!left-4
    !top-1/2 !-translate-y-1/2
  "></div>
  
  <div className="swiper-button-next 
    !flex !items-center !justify-center
    !text-[#cc5f4d] 
    !w-8 !h-8 md:!w-10 md:!h-10 lg:!w-12 lg:!h-12 
    !bg-white/80 !rounded-full 
    !shadow-lg
    after:!text-[18px] md:after:!text-[22px] lg:after:!text-[28px]
    !right-2 md:!right-4
    !top-1/2 !-translate-y-1/2
  "></div>
</div>



</section>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 xl:px-24 2xl:px-52  pb-20  w-full">
        {activeTab !== "all" &&
          allVideos
            .filter((item) => item.type == activeTab)
            .map((item, index) => (
              <div
                key={index}
                className="relative w-full aspect-[9/16] bg-black  overflow-hidden shadow-xl border-4 group"
              >
                <iframe
                  src={getEmbedUrl(item.url)}
                  title={`YouTube Short ${index}`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

               
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-50 rounded-2xl"></div>
              </div>
            ))}

        {activeTab == "all" &&
          allVideos.map((item, index) => (
            <div
              key={index}
              className="relative w-full aspect-[9/16] bg-black  overflow-hidden shadow-xl border-4 group"
            >
              <iframe
                src={getEmbedUrl(item.url)}
                title={`YouTube Short ${index}`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-50 rounded-2xl"></div>
            </div>
          ))}
      </div> */}

      <div className="my-16">
        <Why />
      </div>
      <div className="my-16">
        <Services />
      </div>
      {/* <div className="my-16">
        <Work />
      </div>       */}
      {/* <div className="my-16">
        <Faq />
      </div> */}
    </main>
  );
}
