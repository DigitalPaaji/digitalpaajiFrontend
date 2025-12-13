"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

function FollowUs() {
  const [activeTab, setActiveTab] = useState(0);

  const socialContent = [
    {
      name: "1. Proficiency and Experience:",
      // icon: <FaFacebook />,
      text: "Our web development team at Digital Paaji has years of experience and specialises in building unique solutions for a range of businesses. With adherence to the most recent industry standards, this experience ensures excellent results for even the most difficult projects.",
    },
    {
      name: "2. Specialised Resolutions:",
      // icon: <FaInstagram />,
      text: "We provide specialised web solutions since we understand that every company has different needs. Working closely with customers, we customise our approach so that each feature and design element complements their unique objectives and corporate identity.",
    },
    {
      name: "3. The client-centred method:",
      // icon: <FaYoutube />,
      text: "We appreciate open communication and proactive client participation. To make sure we fulfil the client’s expectations at every turn, we keep feedback loops open and provide frequent updates.",
    },
   
 

    {
      name: " 4. Quick Reversal:",
      // icon: <FaTwitter />,
      text: "We can complete projects faster without compromising quality because of our efficient procedures and knowledgeable staff. This effectiveness lets clients quickly launch their websites and accomplish their digital objectives.",
    },
    {
      name: "5. Constant Assistance:",
      // icon: <FaPinterest />,
      text: "We provide continuous maintenance and support following launch as part of our dedication to long-term partnerships. This keeps your website safe and optimised with security updates, performance improvements, and troubleshooting.",
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveTab(index);
  };

  return (
    <div
      style={{ backgroundImage: "url(/Images/services/bg.webp)" }}
      className="w-full h-auto py-16 overflow-hidden"
    >
      <div className="mx-8 xl:mx-60" data-aos="zoom-in">
        {/* Header Section */}
        <div className="text-center">
          <h3 className="bungeeHead my-8 text-[#e6e8eb] text-3xl md:text-4xl">
            Follow Our Social Media For Regular Updates
          </h3>
        </div>

        {/* Social Media Tabs */}
        <ul className="flex items-center justify-center flex-wrap gap-6 lg:gap-16">
          {socialContent.map((social, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              className={`merriHead flex p-2 gap-2 items-center text-xl font-semibold text-white cursor-pointer ${
                activeTab === index ? "border-b-2 border-yellow-400" : ""
              }`}
            >
              {/* {social.icon} */}
              <span>{social.name}</span>
            </li>
          ))}
        </ul>

        {/* Content Display */}
        <div className="servicePara text-white mt-12 text-center px-4 break-words max-w-3xl mx-auto">
          {socialContent[activeTab].text}
        </div>

        {/* Call to Action Button */}
        {/* <div className="text-center mt-12">
          <Link href="tel:+918699640752" className="px-4 py-4 border-2 rounded-xl border-black bg-yellow-400 hover:bg-[#cc5f4d] text-black hover:text-white font-medium text-base">
            Call Us
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default FollowUs;
