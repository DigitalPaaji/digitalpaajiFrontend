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
      question: "On social media, how frequently should I post?",
      answer:
        "The audience and platform determine the frequency of social media posts. LinkedIn posts once a week, Facebook and Instagram post three to five times a week, and Twitter demands several posts per day. A content calendar is offered by Digital Paaji to help you schedule posts at the best intervals and with the best quality to increase interaction.",
    },
    {
      question: "How can I improve engagement with my audience on social media?",
      answer:
"Publish excellent material, use polls to promote conversation, and reply to comments quickly in order to increase social media engagement. Engage influencers in conversation, use storytelling strategies, and routinely review engagement numbers. With specialised tactics, Digital Paaji provides knowledgeable advice on how to increase audience engagement."
    },
    {
      question: "What is the cost of social media marketing services?",
      answer:
        "The scope, platforms, and aims of social media marketing services determine the cost. Advertising, analytics reporting, account administration, and content development are all included in monthly subscriptions. With customisable packages to suit various budgets, Digital Paaji guarantees customised quotations depending on particular needs and goals.",
    },
    {
      question: "How can I manage my social media presence effectively?",
      answer:
        "Strategic planning, structure, and consistency are necessary for social media management to be effective. Make advantage of tools, schedule material, track interaction, and react quickly. Evaluate performance indicators on a weekly basis and modify strategy as necessary. All-inclusive services are provided by Digital Paaji to keep a strong internet presence.",
    },
    
  ];

  return (
    <div className="flex flex-col items-stretch gap-12 mx-8 md:mx-12 xl:mx-60">
      {/* Header Section */}
      <div className="text-center border-b-2 border-black py-6">
        <h3 className="bungeeHead text-[#cc5f4d] text-3xl lg:text-4xl">
        Get Started with Digital Paaji Today!
        </h3>
        <p className="servicePara text-sm text-gray-700 mt-4">
        With an emphasis on getting to know each client’s particular vision, objectives, and target market, Digital Paaji provides customised social media marketing services for companies of all sizes. In order to talk about present tactics, pinpoint areas that need work, and investigate how our services might support the accomplishment of marketing objectives, we even offer a free introductory consultation. Selecting Digital Paaji means joining forces with a growth-oriented partner to develop campaigns that have an influence on your target audience and produce outcomes.
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
                      width={200}
                      height={200}
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
