"use client";
import React from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import {
  TbBrandInstagram,
  TbBrandTwitterFilled,
  TbBrandYoutubeFilled,
} from "react-icons/tb";
import Image from "next/image";

function Footer() {
  return (
    <div className="overflow-hidden">

<div className="marquee-container absolute  overflow-hidden whitespace-nowrap">
  <div className="marquee-content animate-footerBg flex mt-[1100px] md:mt-[700px] xl:mt-[100px]">
     <Image  width={200} height={200} src="/Images/addOn/footerBG.webp" alt="Background" className="w-full h-auto opacity-15" />
     <Image  width={200} height={200} src="/Images/addOn/footerBG.webp" alt="Background" className="w-full h-auto opacity-15" />
  </div>
</div>

    <div 
    className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 xl:gap-0 md:p-6 mx-4 md:mx-12 xl:mx-44  ">
      {/* Column 1 */}
      <div>
        <Link href={'/'}><Image width={200} height={200} src="/Images/logo2.webp" alt="Logo" className="w-full h-auto object-cover"/></Link>
        <ul className="mt-6 gap-2 flex items-center justify-center">
          <li>
            <Link href="https://www.instagram.com/digital.paajii/" target="_blank">
              <TbBrandInstagram
                className="zoom text-blue-900"
                style={{ width: "120%", height: "120%" }}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/digital.paajii" target="_blank">
              <FaFacebook
                className="zoom text-blue-900"
                style={{ width: "120%", height: "120%" }}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@digital.paajii" target="_blank">
              <TbBrandYoutubeFilled
                className="zoom text-blue-900"
                style={{ width: "120%", height: "120%" }}
              />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fdigitalpaajii" target="_blank">
              <FaXTwitter 
                className="zoom text-blue-900"
                style={{ width: "120%", height: "120%" }}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/digital-paaji2" target="_blank">
              <FaLinkedin  
                className="zoom text-blue-900"
                style={{ width: "120%", height: "120%" }}
              />
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="ml-2 md:mx-auto px-6 xl:px-0">
        <h3 className="bungeeHead text-2xl text-[#cc5f4d]">PAGE</h3>
        <ul
          className="merriHead text-[#006E7F] text-md"
          style={{ fontWeight: "300" }}
        >
          <li className="lg:zoomLeft mt-6">
            <Link href="/">Home</Link>
          </li>
          <li className="lg:zoomLeft mt-6">
            <Link href="/about">About Us</Link>
          </li>
          <li className="lg:zoomLeft mt-6">
            <Link href="/services">Services</Link>
          </li>
          <li className="lg:zoomLeft mt-6">
            <Link href="/work">Our Work</Link>
          </li>
          <li className="lg:zoomLeft mt-6">
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className="lg:zoomLeft mt-6">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>

  

      {/* Column 4 */}
      <div className="ml-2 md:mx-auto px-6 xl:px-0">
        <h3 className="bungeeHead text-2xl text-[#cc5f4d]">SERVICES</h3>
        <ul
          className="merriHead text-[#006E7F] text-md"
          style={{ fontWeight: "300" }}
        >
          {/* <li className="lg:zoomLeft mt-6">
            <Link href="/team">Our Team</Link>
          </li> */}
          <li className="lg:zoomLeft mt-6">
            <Link href="/digital-marketing">Digital Marketing</Link>
          </li>
        
          <li className="lg:zoomLeft mt-6">
            <Link href="/video-production">Video Production</Link>
          </li>
          <li className="lg:zoomLeft mt-6">
            <Link href="/graphic-designing">Graphic Designing</Link>
          </li>
          <li className="lg:zoomLeft mt-6">
            <Link href="/web-development">Website Development</Link>
          </li>
          <li className="lg:zoomLeft mt-6">
            <Link href="/social-media-marketing">Social Media Marketing</Link>
          </li>
          <li className="lg:zoomLeft mt-6">
            <Link href="/search-engine-optimization">Search Engine Optimization</Link>
          </li>
        </ul>
      </div>

    {/* Column 3 */}
    <div className="ml-2 md:mx-auto px-6 xl:px-0">
        <h3 className="bungeeHead text-2xl text-[#cc5f4d]">CONTACT US</h3>
        <ul
          className="merriHead text-[#006E7F] text-md"
          style={{ fontWeight: "300" }}
        >
          <li className="lg:zoomLeft mt-6 flex items-center gap-2">
            <AiFillPhone className="text-[#cc5f4d]" />
            <Link href="tel:8699640752">+91 86996 40752</Link>
          </li>
          <li className="lg:zoomLeft mt-6 flex items-center gap-2">
            <AiOutlineMail className="text-[#cc5f4d]" />
            <Link href="mailto:hello@digitalpaaji.com">
              hello@digitalpaaji.com
            </Link>
          </li>
          <li className="lg:zoomLeft mt-6 flex items-center gap-2">
            <AiFillEnvironment className="text-[#cc5f4d]" /> Patiala/Mohali
          </li>
        </ul>
      </div>

      {/* Column 5 (Map) */}
      <div className="col-span-1 md:col-span-2 xl:col-span-1">
        <div className="xl:w-52 xl:h-[80%] object-cover">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.726002954475!2d76.4027356!3d30.358736000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910291ec53226d3%3A0xd81cade77ecfa8d3!2sDigital%20Paaji!5e0!3m2!1sen!2sin!4v1735063353416!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
