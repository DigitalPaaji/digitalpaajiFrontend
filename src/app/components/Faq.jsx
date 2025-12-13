import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Faq() {
  const [selectedService, setSelectedService] = useState('Car Wash');
  const [openIndexLeft, setOpenIndexLeft] = useState(null);
  const [openIndexRight, setOpenIndexRight] = useState(null);

  const toggleDropdown = (index, side) => {
    if (side === "left") {
      setOpenIndexLeft(openIndexLeft === index ? null : index);
    } else {
      setOpenIndexRight(openIndexRight === index ? null : index);
    }
  };

  const serviceFaqs = {
    "Car Wash": [
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
    ],
    "Oil Undercoating": [
      {
        question: "What is oil undercoating?",
        answer: "Oil undercoating is a protective layer applied to the underside of your vehicle to prevent rust and corrosion.",
      },
      {
        question: "How long does oil undercoating last?",
        answer: "Typically, it lasts about a year and should be reapplied annually for best protection.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
    ],
    "Detailing": [
      {
        question: "What is included in a full detailing service?",
        answer: "Our full detailing includes interior shampoo, exterior polishing, engine cleaning, and waxing.",
      },
      {
        question: "How long does a full detail take?",
        answer: "It usually takes around 4-6 hours depending on the vehicle's size and condition.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
    ],
    "Fleet Accounts": [
      {
        question: "Do you offer discounts for fleet accounts?",
        answer: "Yes, we offer special pricing and maintenance packages for business fleets.",
      },
      {
        question: "Can you schedule regular service for fleets?",
        answer: "Absolutely, we can arrange weekly or monthly service schedules for your fleet vehicles.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
    ],
  };

  const services = ["Car Wash", "Oil Undercoating", "Detailing", "Fleet Accounts"];

  const faqs = serviceFaqs[selectedService] || [];

  return (
    <div className="my-24">
      <div className="flex flex-wrap gap-4 justify-center my-10">
        {services.map((service) => (
          <button
            key={service}
            onClick={() => {
              setSelectedService(service);
              setOpenIndexLeft(null);
              setOpenIndexRight(null);
            }}
            className={`py-2 px-6 rounded-lg text-xl font-semibold transition ${
              selectedService === service
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {service}
          </button>
        ))}
      </div>

      <div className="flex flex-col xl:flex-row gap-10 my-8 mx-4 md:mx-12 xl:mx-32">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-full xl:w-1/2">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() => toggleDropdown(index, "left")}
                className={`w-full rounded-lg flex justify-between items-center py-4 px-4 text-left font-medium transition-colors duration-500 ${
                  openIndexLeft === index
                    ? "bg-white text-black shadow-md"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <span className="exo text-lg">{faq.question}</span>
                {openIndexLeft === index ? (
                  <FaChevronUp className="text-gray-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-[700ms] ease-in-out ${
                  openIndexLeft === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 text-gray-700 bg-white shadow-md">
                  <span className="exo text-md 2xl:text-lg">{faq.answer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 w-full xl:w-1/2 items-center justify-center">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() => toggleDropdown(index, "right")}
                className={`w-full flex justify-between items-center py-4 px-4 text-left font-medium transition-colors duration-500 ${
                  openIndexRight === index
                    ? "bg-white text-black shadow-md"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <span className="exo text-lg">{faq.question}</span>
                {openIndexRight === index ? (
                  <FaChevronUp className="text-gray-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-[700ms] ease-in-out ${
                  openIndexRight === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 text-gray-700 bg-white shadow-md">
                  <span className="exo text-md 2xl:text-lg">{faq.answer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col gap-4 items-center justify-center mt-24">
        <p className="exo text-black text-2xl lg:text-4xl">
          Not what you were looking for?
        </p>
        <p className="exo text-lg text-gray-800">
          Talk to us directly, and we&apos;ll be happy to help!
        </p>
        <p className="mt-6">
          <Link
            href={"/contact"}
            className="montserrat mx-auto text-xl lg:text-xl hover:bg-white bg-[#1f1e1f] hover:border-2 hover:border-[#1f1e1f] text-white hover:text-[#1f1e1f] py-4 px-6 rounded-xl"
          >
            Contact Us
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Faq;