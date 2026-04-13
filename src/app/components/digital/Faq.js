import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Faq() {
  const [showIcon, setShowIcon] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleShowIcon = () => {
    setShowIcon(!showIcon);
  };

  const toggleDropdown = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What makes email marketing effective?",
      answer:
        "Product updates, newsletters, and promotions are just a few of the personalised and direct communications materials that our email marketers deliver right to the inboxes of thier clients. Targeting particular consumer segments, it boosts open rates and conversions, cultivates customer loyalty, and provides an exceptional return on investment because of its cost-effectiveness and automation.",
    },
    {
      question: "What should I expect in terms of performance monitoring and reporting?",
      answer:
        "Performance tracking and reporting use important data like traffic, conversions, and engagement to measure the effectiveness of digital marketing efforts. Frequent reporting enables ongoing improvement and optimal return on investment by offering insights into effective tactics and modifications.",
    },
    {
      question: "Why should I choose Digital Paaji for my digital marketing needs?",
      answer:
        "Through SEO, PPC, social media, and content marketing, Digital Paaji offers firms specialised digital marketing strategies that are data-driven and produce quantifiable outcomes. We guarantee business success online by providing continuous support, open communication, and performance tracking to maximise ROI and optimise campaigns.",
    },
    {
      question: "What makes social media marketing effective for my business?",
      answer:
        "It improves brand awareness and customer loyalty in addition to generating leads. It is inexpensive and has millions of users, with the potential to go viral. Using data and customised advertisements to target specific groups helps position businesses as thought leaders.",
    },
    
  ];

  return (
    <div className="flex flex-col items-stretch gap-12 mx-8 md:mx-12 xl:mx-60">
      {/* Header Section */}
      <div className="text-center border-b-2 border-black py-6">
        <h3 className="bungeeHead text-[#cc5f4d] text-3xl lg:text-4xl">
        Getting Started with Us
        </h3>
        <p className="merriHead text-sm text-gray-700 mt-4">
        For companies trying to improve their online visibility, expand their audience, or hone their current tactics, Digital Paaji provides a full-featured digital marketing solution. Through an assessment of your company’s objectives and needs, our onboarding process enables them to create a personalised plan. Following a complete analysis of your present marketing initiatives, the state of the industry, and the competitors, we develop a detailed plan with precise objectives, deadlines, and deliverables.
        </p>
        <h3
          className="h-20 w-fit mx-auto flex items-center justify-center gap-2 merriHead text-black text-xl  mt-6"
          onMouseLeave={handleShowIcon}
        >
          We are Just a{" "}
          {showIcon ? (
            <Link
              href="https://wa.me/8699640752"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 text-green-600 transition-transform duration-500"
            >
              <Image
              width={200} height={200}
                src="/Images/services/whIcon.gif"
                alt="img"
                className="flip w-full h-auto object-cover"
              />
            </Link>
          ) : (
            <span
              className="text-[#cc5f4d] underline w-16"
              onMouseEnter={handleShowIcon}
            >
              Click
            </span>
          )}{" "}
          Away
        </h3>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <div key={index}>
            {/* Question Section */}
            <button
              onClick={() => toggleDropdown(index)}
              className="flex justify-between items-center w-full py-4 text-left font-medium"
            >
              <span className="bungeeHead text-[#006E7F] text-md mr-2">
                {faq.question}
              </span>
              {openIndex === index ? (
                <FaChevronUp className="text-lg text-gray-600" />
              ) : (
                <FaChevronDown className="text-lg text-gray-600" />
              )}
            </button>

            {/* Answer Section */}
            <div
  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
    openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
  }`}
  ref={(el) => (contentRefs.current[index] = el)}
>
  <div className="servicePara text-gray-700 text-sm mt-2">
    {faq.answer}
  </div>
</div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
