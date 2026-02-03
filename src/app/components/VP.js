"use client";
import React, { act, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/video/InnerHeader";
import Why from "../components/video/Why";
import Work from "../components/video/Work";
import Faq from "../components/Faq";
import Services from "../components/video/Services";
import { PiCourtBasketballFill } from "react-icons/pi";
import {
  FaHotel,
  FaPassport,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";

const allVideos = [
  { type: "restaurants", url: "https://youtube.com/shorts/hleWBqF5F2M" },
  { type: "restaurants", url: "https://youtube.com/shorts/3CMHqcoftb0" },
  { type: "shoots", url: "https://youtube.com/shorts/wrENWvcGpLM" },
  { type: "product", url: "https://youtube.com/shorts/6jiW_UAvE38" },
  { type: "others", url: "https://youtube.com/shorts/i48hZ5dnu5Y" },
  { type: "others", url: "https://youtube.com/shorts/X0-zJ3hOV6Q" },
];

const getEmbedUrl = (url) => {
  // 1. Split the URL to isolate the ID (e.g., "hleWBqF5F2M")
  // This handles both simple URLs and URLs with query params
  const videoId = url.split("shorts/")[1]?.split("?")[0];
  return `https://www.youtube.com/embed/${videoId}`;
};

export default function About() {
  const [activeTab, setActiveTab] = useState("all");

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
Video Stories We’ve Crafted for Our Clients
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 xl:px-24 2xl:px-52  pb-20  w-full">
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

                {/* Optional: Glossy Phone Reflection Effect */}
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

              {/* Optional: Glossy Phone Reflection Effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-50 rounded-2xl"></div>
            </div>
          ))}
      </div>

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
