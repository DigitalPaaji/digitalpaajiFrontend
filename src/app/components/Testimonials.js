'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      text: "Digital Paaji helped our business grow tremendously. Their digital marketing strategies are top-notch!",
      image: "/Images/testimonial1.jpg",
    },
    {
      name: "Jane Smith",
      text: "The team at Digital Paaji was exceptional. They understood our needs and delivered beyond expectations.",
      image: "/Images/testimonial2.jpg",
    },
    {
      name: "David Johnson",
      text: "Highly recommend Digital Paaji for anyone looking to boost their online presence and attract more customers.",
      image: "/Images/testimonial3.jpg",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 items-center p-6 mx-4 md:mx-8 lg:mx-0">
      {/* Left Side Text */}
      <div className="w-full lg:w-1/2 text-left lg:ml-20">
        <h3 className="merriHead text-xl xl:text-2xl text-black">Kind Words</h3>
        <h3 className="block lg:hidden border-b border-black mt-2 pb-20 bungeeHead text-[#cc5f4d] text-3xl md:text-4xl">
          Hear from Our Happy Customers
          Testimonials
        </h3>
        <h3 className="hidden lg:block border-b border-black mt-2 pb-20 bungeeHead text-[#cc5f4d] text-4xl">
          Hear from Our <br /> Happy Customers <br />
          Testimonials
        </h3>
      </div>

      {/* Right Side Swiper */}
      <div
        className="py-10 px-2 md:px-8 w-full lg:w-1/2 bg-cover bg-center rounded-lg relative"
        style={{
          backgroundImage: "url(/Images/Offerbg.webp)",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
        }}
      >
        {/* Swiper Component */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1} 
          loop={true} 
          autoplay={{ delay: 3000 ,
            disableOnInteraction:false,
          }}
          pagination={{ clickable: true }} 
          navigation={false} 
          modules={[Autoplay]}
        >
          {/* Testimonial Slides */}
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-start justify-center">
                <p className="servicePara mt-4 text-gray-500 text-lg xl:text-base xl:w-[600px] text-justify">
                  {testimonial.text}
                </p>

                {/* Customer Image & Name */}
                <div className="flex items-center gap-2 justify-start mt-6">
                  {/* <img
                    src={testimonial.image}
                    alt="img"
                    className="rounded-full w-16 h-16 object-cover"
                  /> */}

<p
                    src={testimonial.image}
                    alt="Customer"
                    className="rounded-full bg-red-700 text-white text-lg font-bold px-4 py-2 object-cover"
                  >
                    {(testimonial.name).charAt(0)}
                  </p>
                  <h3 className="merriHead text-lg text-[#979493]">{testimonial.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
