"use client";
import { useEffect, useState } from "react";
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


  return (
    <main>
    



      <div className="my-16">
        <Why />
      </div>
      <div className="my-16">
        <Services />
      </div>

    </main>
  );
}
