import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaWhatsapp } from "react-icons/fa";

function Faq() {
    const [showIcon,setShowIcon] = useState(false)
  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState({});
const handleShowIcon = ()=>{
    setShowIcon(!showIcon)
}
  const contentRefs = useRef([]);

  useEffect(() => {
    // Measure the height of each FAQ answer
    const measuredHeights = contentRefs.current.map(
      (ref) => ref?.scrollHeight || 0
    );
    setHeights(measuredHeights);
  }, []);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do you choose which keywords to focus on?",
      answer:
        "The SEO method employed by Digital Paaji entails scrutinising search traffic, competitiveness, user intent, and contemporary trends to ascertain the most advantageous terms for your enterprise. Long-tail or less competitive terms are preferred, whereas high-traffic terms are given priority. In order to make sure the selected keywords meet the needs of potential clients, user intent is also taken into account. Digital Paaji develops a tailored keyword strategy based on consumer behaviour, which drives relevant traffic and increases sales and engagement.",
    },
    {
      question: "What are the differences between on-page and off-page techniques?",
      answer:
        "On-page SEO includes optimizing each page separately for specific keywords, improving internal linking, and improving metadata. It also takes into account page performance, mobile responsiveness, and website structure. Off-page SEO, on the other hand, is taking steps outside of the website to increase its relevance and authority, like social media interaction and link building. Both are essential for developing an all-encompassing SEO plan.",
    },
    {
      question: "How often should I change the material on my website?",
      answer:
        "Since search engines like Google favour current, fresh material, sustaining SEO effectiveness of a website depends on regular content updates. In particular, product sites and blogs should have it evaluated and updated at least once a month. Content upgrades can be as simple as adding or updating existing out-of-date facts, new material, or improving multimedia or graphic elements.",
    },
    {
      question: "Can I manage SEO on my own or do I need to employ an agency?",
      answer:
        "Constant maintenance is necessary for long-term investments like SEO. This maintenance includes competition analysis, content optimization, and monitoring changes to search engine algorithms.. Agencies ensure your website ranks highly by providing specialist knowledge in technical SEO, link building, analytics, and keyword research. Long-term advantages like improved organic traffic and conversion rates frequently offset the cost of expert services.",
    },
    {
      question: "What is the process to begin using your SEO services?",
      answer:
        "In order to fully grasp the aims and objectives of your company, Digital Paaji provides a free consultation before beginning any SEO work. A customised strategy is created after an SEO audit is conducted to determine areas that require development. Technical advancements, off-page strategies, content production, and on-page SEO adjustments are all included in implementation. To maintain transparency and make necessary corrections, reports and updates are given on a regular basis.",
    },
  ];

  return (
    <div className="flex flex-col items-stretch gap-12 mx-8 md:mx-12 xl:mx-60">
      {/* Header Section */}
      <div className="text-center border-b-2 border-black py-6">
        <h3 className="bungeeHead text-[#cc5f4d] text-[30px] xl:text-[40px]">
          Any Questions?
        </h3>
        <h3 className="h-20  w-fit mx-auto flex items-center justify-center gap-2 merriHead text-black text-xl xl:text-2xl mt-6" onMouseLeave={handleShowIcon}>
          We are Just a {"  "}

          {showIcon ? (
              <Link
              href="https://wa.me/8699640752"
              target="_blank"
              rel="noopener noreferrer"
              className=" w-16 h-16 text-green-600 transition-transform duration-500"
            >
             <Image width={200} height={200} src="/Images/services/whIcon.gif" alt="img" className="flip w-full h-auto object-cover"/>
            </Link>
          ):(
            <span className=" text-[#cc5f4d] underline " onMouseEnter={handleShowIcon}>Click</span>

          )}

           {" "}Away
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
              <span className="bungeeHead text-[#006E7F] text-md ">{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-lg text-gray-600" />
              ) : (
                <FaChevronDown className="text-lg text-gray-600" />
              )}
            </button>
            {/* Answer Section */}
            {/* <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: openIndex === index ? `${heights[index]}px` : "0",
                opacity: openIndex === index ? 1 : 0,
              }}
              ref={(el) => (contentRefs.current[index] = el)}
            >
              <div className="servicePara text-gray-700 text-base mt-2">
                {faq.answer}
              </div>
            </div> */}
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
