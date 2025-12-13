'use client';
import React from 'react';

const cardsData = [
  {
    title: 'Creekside Car Wash',
    image: '/Images/work/1.gif',
  },
  {
    title: 'Hammer Experts',
    image: '/Images/work/2.webp',
  },
  {
    title: 'The SMS World',
    image: '/Images/work/3.webp',
  },
  {
    title: 'Digital Paaji Academy',
    image: '/Images/work/4.webp',
  },
  {
    title: 'DigiMagnifiko',
    image: '/Images/work/5.webp',
  },
  {
    title: 'Kaushalya Records',
    image: '/Images/work/6.webp',
  },

];

function Cards() {
  return (
    <section className="px-4 md:px-12 xl:px-24 2xl:px-52 py-20 w-full">
      <div className="text-center mb-12">
        <h3 className="bungeeHead font-bold text-[#cc5f4d] text-2xl md:text-3xl xl:text-4xl mb-4">
          Creatives We&apos;ve Built for Our Clients
        </h3>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Take a look at some of the creative and custom-made projects we&apos;ve developed.
          From sleek business websites to interactive platforms — we bring ideas to life!
        </p>
        <button className="px-6 py-3 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg transition">
          Get Yours Customized
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="w-full overflow-hidden "
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
