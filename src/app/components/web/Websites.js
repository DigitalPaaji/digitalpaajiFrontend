'use client';
import React from 'react';
import Link from 'next/link';

const cardsData = [
  {
    title: 'Creekside Car Wash',
    description:
      'A full-stack MERN website featuring an online appointment booking system, gift card purchasing, and service management for a modern car wash experience.',
    image: '/Images/wd/creekside.webp',
    link: 'https://creekside-jet.vercel.app/',
  },
  {
    title: 'Hammer Experts',
    description:
      'A professional home improvement and renovation service website built on the MERN stack — offering seamless booking and project showcasing.',
    image: '/Images/wd/hammer.webp',
    link: 'https://hammerexperts.ca/',
  },
  {
    title: 'The SMS World',
    description:
      'A custom-built digital marketing and bulk messaging platform designed to deliver high-performance SMS campaigns with a user-friendly dashboard.',
    image: '/Images/wd/smsworld.webp',
    link: 'https://thesmsworld.com/',
  },
  {
    title: 'Digital Paaji Academy',
    description:
      'An educational platform built for Digital Paaji Academy — offering professional marketing and design courses with a sleek, interactive Next.js frontend.',
    image: '/Images/wd/academy.webp',
    link: 'https://digitalpaajiacademy.com/',
  },
  {
    title: 'DigiMagnifiko',
    description:
      'A PHP-based marketing website focused on brand strategy, creative campaigns, and digital growth for businesses.',
    image: '/Images/wd/magnifiko.webp',
    link: 'https://www.digimagnifiko.com/',
  },
  {
    title: 'Kaushalya Records',
    description:
      'A creative music production and artist management website for Kaushalya Records, designed to showcase new releases, artists, and studio services.',
    image: '/Images/wd/kaushalya.webp',
    link: 'https://kaushalyarecords.com/',
  },
  {
    title: 'Property Profiles',
    description:
      'A real estate website for listing and showcasing premium properties with dynamic search and user-friendly layouts.',
    image: '/Images/wd/property.webp',
    link: 'https://propertyprofiles.in/',
  },
];


function Cards() {
  return (
    <section className="px-4 md:px-12 xl:px-24 2xl:px-52 py-32 w-full">
<div className="w-full text-center mb-8 md:mb-12 lg:mb-16">
  <h3 className="bungeeHead text-[#cc5f4d] text-[30px] xl:text-[40px]">
    Projects We&apos;ve Built for Our Clients
  </h3>
  <p className="text-md md:text-md xl:text-lg mx-auto max-w-2xl mb-6">
    Take a look at some of the creative and custom-made projects we&apos;ve developed.  
    From sleek business websites to interactive platforms — we bring ideas to life!
  </p>
  <Link href={'/contact'} className=" px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg">
    Get Yours Customized
  </Link>
</div>


      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6">
        {cardsData.map((card, index) => (
          <Link target="_blank"
    rel="noopener noreferrer"
     href={card.link} key={index} className="card-wrap w-full">
            <div className="card w-full h-[280px] md:h-[400px]">
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <div className="card-info">
                <h1>{card.title}</h1>
                <p>{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Cards;