'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const frames = [
  'https://portfolio.digitalpaajiacademy.com/',
  'https://digitalpaajiacademy.com/',
  'https://cogan.life/',
  'https://saajriwaaj.com/',
];

export default function CardsSwiper() {
  // Remove TypeScript angle brackets
  const [loadedFrames, setLoadedFrames] = useState(new Array(frames.length).fill(false));

  const handleIframeLoad = (index) => {
    setLoadedFrames(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <section className="px-4 md:px-12 xl:px-52 w-full py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="bungeeHead text-[#cc5f4d] text-[30px] xl:text-[40px]">
          Projects We&apos;ve Built for Our Clients
        </h3>
        <p className="max-w-2xl mx-auto">
          Swipe manually — center project is highlighted
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Navigation]}
        className="h-[75vh] relative"
      >
        {frames.map((src, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative rounded-xl overflow-hidden">
                {/* Loading overlay */}
                {!loadedFrames[index] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse rounded-xl flex items-center justify-center z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 border-4 border-[#cc5f4d]/20 border-t-[#cc5f4d] rounded-full animate-spin mb-4"></div>
                      <span className="text-[#cc5f4d] font-medium">Loading...</span>
                    </div>
                  </div>
                )}

                {/* Iframe container */}
                <div
                  className={`transition-all duration-700 rounded-xl overflow-hidden
                    ${
                      isActive
                        ? 'scale-100 blur-0 opacity-100'
                        : 'scale-90 blur-[2px] opacity-90'
                    }
                    ${!loadedFrames[index] ? 'opacity-0' : 'opacity-100'}
                  `}
                >
                  <iframe
                    src={src}
                    loading="lazy"
                    className="w-full h-[70vh] rounded-xl border transition-opacity duration-700"
                    onLoad={() => handleIframeLoad(index)}
                    style={{
                      opacity: loadedFrames[index] ? 1 : 0,
                    }}
                    title={`Project ${index + 1}`}
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !w-10 !h-10 !top-1/2 !left-4 !-translate-y-1/2 !text-[#cc5f4d] after:!text-[20px] after:!font-bold hover:!scale-110 transition-transform duration-200" />
        <div className="swiper-button-next !w-10 !h-10 !top-1/2 !right-4 !-translate-y-1/2 !text-[#cc5f4d] after:!text-[20px] after:!font-bold hover:!scale-110 transition-transform duration-200" />
      </Swiper>

      {/* Custom CSS for arrow styling */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 20px;
          font-weight: bold;
          color: #cc5f4d;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: white;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}



// 'use client';
// import React from 'react';
// import Link from 'next/link';

// const cardsData = [
//   {
//     title: 'Creekside Car Wash',
//     description:
//       'A full-stack MERN website featuring an online appointment booking system, gift card purchasing, and service management for a modern car wash experience.',
//     image: '/Images/wd/creekside.webp',
//     link: 'https://creekside-jet.vercel.app/',
//   },
//   {
//     title: 'Hammer Experts',
//     description:
//       'A professional home improvement and renovation service website built on the MERN stack — offering seamless booking and project showcasing.',
//     image: '/Images/wd/hammer.webp',
//     link: 'https://hammerexperts.ca/',
//   },
//   {
//     title: 'The SMS World',
//     description:
//       'A custom-built digital marketing and bulk messaging platform designed to deliver high-performance SMS campaigns with a user-friendly dashboard.',
//     image: '/Images/wd/smsworld.webp',
//     link: 'https://thesmsworld.com/',
//   },
//   {
//     title: 'Digital Paaji Academy',
//     description:
//       'An educational platform built for Digital Paaji Academy — offering professional marketing and design courses with a sleek, interactive Next.js frontend.',
//     image: '/Images/wd/academy.webp',
//     link: 'https://digitalpaajiacademy.com/',
//   },
//   {
//     title: 'DigiMagnifiko',
//     description:
//       'A PHP-based marketing website focused on brand strategy, creative campaigns, and digital growth for businesses.',
//     image: '/Images/wd/magnifiko.webp',
//     link: 'https://www.digimagnifiko.com/',
//   },
//   {
//     title: 'Kaushalya Records',
//     description:
//       'A creative music production and artist management website for Kaushalya Records, designed to showcase new releases, artists, and studio services.',
//     image: '/Images/wd/kaushalya.webp',
//     link: 'https://kaushalyarecords.com/',
//   },
//   {
//     title: 'Property Profiles',
//     description:
//       'A real estate website for listing and showcasing premium properties with dynamic search and user-friendly layouts.',
//     image: '/Images/wd/property.webp',
//     link: 'https://propertyprofiles.in/',
//   },
// ];


// function Cards() {
//   return (
//     <section className="px-4 md:px-12 xl:px-52 py-12 w-full">
// <div className="w-full text-center mb-8 md:mb-12 lg:mb-16">
//   <h3 className="bungeeHead text-[#cc5f4d] text-[30px] xl:text-[40px]">
//     Projects We&apos;ve Built for Our Clients
//   </h3>
//   <p className="text-md md:text-md xl:text-lg mx-auto max-w-2xl mb-6">
//     Take a look at some of the creative and custom-made projects we&apos;ve developed.  
//     From sleek business websites to interactive platforms — we bring ideas to life!
//   </p>
//   <Link href={'/contact'} className=" px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg">
//     Get Yours Customized
//   </Link>
// </div> 


// <div className='flex items-center justify-center gap-12'>
// <iframe src="https://portfolio.digitalpaajiacademy.com/" frameborder="0" className='w-full h-[80vh] '></iframe>
// <iframe src="https://portfolio.digitalpaajiacademy.com/" frameborder="0" className='w-full h-[80vh] '></iframe>

// <iframe src="https://portfolio.digitalpaajiacademy.com/" frameborder="0" className='w-full h-[80vh] '></iframe>

// </div>


// {/* 
//       <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6">
//         {cardsData.map((card, index) => (
//           <Link target="_blank"
//     rel="noopener noreferrer"
//      href={card.link} key={index} className="card-wrap w-full">
//             <div className="card w-full h-[280px] md:h-[400px]">
//               <div
//                 className="card-bg"
//                 style={{ backgroundImage: `url(${card.image})` }}
//               ></div>
//               <div className="card-info">
//                 <h1>{card.title}</h1>
//                 <p>{card.description}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div> */}
//     </section>
//   );
// }

// export default Cards;