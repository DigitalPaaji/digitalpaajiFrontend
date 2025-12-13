import React from 'react'
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

function info() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch mx-4 md:mx-12 xl:mx-60">
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[240px] md:h-[430px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.726002954475!2d76.4027356!3d30.358736000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910291ec53226d3%3A0xd81cade77ecfa8d3!2sDigital%20Paaji!5e0!3m2!1sen!2sin!4v1735063353416!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="object-cover"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Section */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12 bg-[#cc5f4d] flex flex-col justify-start">
          <h3 className="bungeeHead text-2xl md:text-3xl lg:text-4xl text-white my-6 md:mb-8 lg:mb-12">
            Need More Help?
          </h3>
          <ul className="merriHead text-white text-lg md:text-xl space-y-6 md:space-y-8 lg:space-y-12">
            <li className=" flex items-center gap-2 md:gap-3">
              <AiFillPhone className="text-2xl md:text-3xl text-white" />
              <Link href="tel:8699640752" className="hover:underline">+91 8699 640 752</Link>
            </li>
            <li className=" flex items-center gap-2 md:gap-3">
              <AiOutlineMail className="text-2xl md:text-3xl text-white" />
              <Link href="mailto:hello@digitalpaaji.com" className="hover:underline">
                hello@digitalpaaji.com
              </Link>
            </li>
            <li className=" flex items-center gap-2 md:gap-3">
              <AiFillEnvironment className="text-2xl md:text-3xl text-white" />
              <span>
              78, 2nd floor, kissan market, near hemkunt petrol pump,Sirhind Road, Patiala</span>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default info