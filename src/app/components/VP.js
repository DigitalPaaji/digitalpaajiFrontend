'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "../components/video/InnerHeader";
import Why from '../components/video/Why'
import Work from '../components/video/Work'
import Faq from '../components/Faq'
import Services from '../components/video/Services';

const allVideos=[
  "https://youtube.com/shorts/hleWBqF5F2M",
  "https://youtube.com/shorts/3CMHqcoftb0",
  "https://youtube.com/shorts/wrENWvcGpLM",
  "https://youtube.com/shorts/6jiW_UAvE38",
  "https://youtube.com/shorts/i48hZ5dnu5Y",
  "https://youtube.com/shorts/X0-zJ3hOV6Q",
]

const getEmbedUrl = (url) => {
    // 1. Split the URL to isolate the ID (e.g., "hleWBqF5F2M")
    // This handles both simple URLs and URLs with query params
    const videoId = url.split("shorts/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };


export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true}); 
  }, []);

  return (
    <main>
        {/* <Header title="VIDEO PRODUCTION AGENCY In INDIA" 
        content="For you to produce captivating, audience-resonant videos, customised video editing is essential. Our customization-focused approach guarantees that every alteration captures the essence and personality of your brand. "
         button="Call Us"/> */}


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 xl:px-24 2xl:px-52 pt-8 pb-20 w-full">
        {allVideos.map((item, index) => (
          <div 
            key={index} 
            className="relative w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-xl border-4 border-gray-800 group"
          >
            <iframe
              src={getEmbedUrl(item)}
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
