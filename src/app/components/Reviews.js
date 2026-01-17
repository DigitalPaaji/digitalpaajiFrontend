"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { TbStarFilled } from "react-icons/tb";
import Image from "next/image";

function Testimonials() {
  // Dummy data for reviews
  const dummyReviews = [
    {
      author_name: "Sunny Sharma",
      relative_time_description: "2 weeks ago",
      rating: 5,
      text: "I felt very comfortable with Digital Paaji team and their thought leadership in the industry. They seemed honest, direct and didn't try to upsell services. Higher Visibility did exactly what we asked for and did it quickly. Friendly environment. Highly impressed with their work and communication level. Best of luck!",
    },
    {
      author_name: "Prashant Kumar",
      relative_time_description: "1 month ago",
      rating: 4,
      text: "I've had the pleasure of working with Digital Paaji for one incredible year. The team's expertise, passion, and dedication to delivering top-notch digital marketing solutions are truly impressive. I'm grateful for the opportunities I've had while working at Digital Paaji and I highly recommend them to anyone seeking a reliable, results-driven digital marketing partner. Five stars, without a doubt!",
    },
    {
      author_name: "Lakhvinder Singh",
      relative_time_description: "3 months ago",
      rating: 5,
      text: "I recently visited Digital Paaji office in Patiala, and I had an excellent experience. The team is highly professional and knowledgeable, offering insightful digital marketing solutions. The office itself is modern and well-organized, providing a creative and productive environment. Their expertise in digital strategies is truly impressive. Highly recommend Digital Paaji for anyone looking to boost their online presence!",
    },
    {
      author_name: "Raman Nagpal",
      relative_time_description: "3 weeks ago",
      rating: 5,
      text: "I have been with Rishi for a long time. All I can say is that he is a dedicated person, communicative, prompt and makes every attempt to provide solutions at a reasonable cost. Fully reliable. I highly recommend his services.",
    },
    {
      author_name: "Parminder Singh",
      relative_time_description: "1 week ago",
      rating: 5,
      text: "Good experience with the team in digital marketing, maintained by well-experienced man Rishiraj Singh. Best of luck to the Digital Paaji team.",
    },
    {
      author_name: "Kamal Dhiman",
      relative_time_description: "5 days ago",
      rating: 5,
      text: "I have a very good experience with the Digital Paaji team. They also provide digital marketing classes. Must visit!",
    },
    {
      author_name: "Karanbir Singh",
      relative_time_description: "4 months ago",
      rating: 5,
      text: "Very good service, highly recommended.",
    },
];


  // State to store client-side calculations
  const [averageRating, setAverageRating] = useState(null);
  const [totalReviews, setTotalReviews] = useState(null);

  useEffect(() => {
    const total = dummyReviews.length;
    const avg = dummyReviews.reduce((sum, review) => sum + review.rating, 0) / total;
    setAverageRating(avg.toFixed(1));
    setTotalReviews(total);
  }, []);

  return (
    <div className="flex justify-center gap-8 items-center flex-wrap-reverse lg:flex-nowrap mx-4 xl:mx-20">
      {/* Left Section */}
      <div className="py-10 px-2 w-full lg:w-1/2 bg-cover bg-center rounded-lg relative  w-100vw overflow-hidden">
        <div className="mx-auto w-[300px] h-20">
          <Image width={300} height={80} src="/Images/logo2.webp" alt="logo" className="w-full h-full object-contain" />
        </div>
        
        {averageRating && totalReviews && (
          <div className="flex items-center justify-center gap-2 py-8">
            <span className="text-sm text-gray-700">{averageRating}</span>
            <span className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <TbStarFilled key={i} className={i < Math.round(averageRating) ? "text-yellow-500" : "text-gray-300"} />
              ))}
            </span>
            <span className="text-sm text-gray-700">{totalReviews} Google Reviews</span>
          </div>
        )}

        {/* Swiper Component */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="custom-swiper"
        >
          {dummyReviews.map((review, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="border border-white p-6 rounded-lg w-[90%] xl:w-[80%] mx-auto">
                <p className="text-black text-sm xl:text-base text-justify">{review.text}</p>
                <div className="flex items-center justify-between border-t border-white mt-6 w-full p-2">
                  <div className="flex items-center gap-4">
                    <span className="rounded-full bg-purple-700 text-white text-lg font-bold px-4 py-2">
                      {review.author_name.charAt(0)}
                    </span>
                    <div>
                      <h3 className="text-sm text-gray-500">{review.author_name}</h3>
                      <p className="text-xs text-gray-400">{review.relative_time_description}</p>
                    </div>
                  </div>
                  <span className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <TbStarFilled key={i} className="text-yellow-500" />
                    ))}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[70%] lg:w-1/2 xl:ml-16">
        <Image width={600} height={400} src="/Images/addOn/tetimonial.webp" alt="testimonial" className="w-full h-full mx-auto px-8 xl:px-16" />
      </div>
    </div>
  );
}

export default Testimonials;
