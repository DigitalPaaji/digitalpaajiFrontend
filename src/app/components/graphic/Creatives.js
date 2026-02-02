'use client';
import React, { useState } from 'react';
import { FaShoppingCart, FaPassport, FaCamera, FaUtensils, FaHotel } from 'react-icons/fa';
import { PiCourtBasketballFill } from "react-icons/pi";

const cardsData = [
  { type:"ecommerce",
    title: 'Creekside Car Wash',
    image: '/Images/work/1.gif',
  },
  {type:"visa",
    title: 'Hammer Experts',
    image: '/Images/work/4.webp',
  },
  {type:"shoots",
    title: 'The SMS World',
    image: '/Images/work/3.webp',
  },
  // {type:"restaurants",
  //   title: 'Digital Paaji Academy',
  //   image: '/Images/work/4.webp',
  // },
  {type:"restaurants",
    title: 'Restaurants1',
    image: '/Images/work/Restaurants1.jpeg',
  },
  {type:"restaurants",
    title: 'Restaurants2',
    image: '/Images/work/Restaurants2.jpeg',
  },
  {type:"restaurants",
    title: 'Restaurants3',
    image: '/Images/work/Restaurants3.jpeg',
  },

  {type:"restaurants",
    title: 'Restaurants4',
    image: '/Images/work/Restaurants4.jpeg',
  },  {type:"restaurants",
    title: 'Restaurants5',
    image: '/Images/work/Restaurants5.jpeg',
  }, 
   {type:"restaurants",
    title: 'Restaurants6',
    image: '/Images/work/Restaurants6.jpeg',
  },
   {type:"restaurants",
    title: 'Restaurants7',
    image: '/Images/work/Restaurants7.jpeg',
  },
   {type:"restaurants",
    title: 'Restaurants8',
    image: '/Images/work/Restaurants8.jpeg',
  },
   {type:"restaurants",
    title: 'Restaurants9',
    image: '/Images/work/Restaurants9.jpeg',
  },


  {type:"product",
    title: 'product1',
    image: '/Images/work/product1.jpeg',
  },
  {type:"product",
    title: 'product5',
    image: '/Images/work/product5.jpeg',
  },
  {type:"product",
    title: 'product2',
    image: '/Images/work/product2.jpeg',
  },
 
  {type:"product",
    title: 'product4',
    image: '/Images/work/product4.jpeg',
  },
  
  {type:"product",
    title: 'product6',
    image: '/Images/work/product6.jpeg',
  },
   {type:"product",
    title: 'product3',
    image: '/Images/work/product3.jpeg',
  },
  {type:"hotels",
    title: 'DigiMagnifiko',
    image: '/Images/work/5.webp',
  },
  // { type:"others",
  //   title: 'others1',
  //   image: '/Images/work/others1.jpeg',
  // },

   { type:"others",
    title: 'others2',
    image: '/Images/work/others2.jpeg',
  },
   { type:"others",
    title: 'others3',
    image: '/Images/work/others3.jpeg',
  },
   { type:"others",
    title: 'others4',
    image: '/Images/work/others4.jpeg',
  },

];
const tabs = [
    { id: "all", label: "All", icon: <PiCourtBasketballFill  />, desc: "Boost sales with high-converting online stores." },
    // { id: "ecommerce", label: "Ecommerce", icon: <FaShoppingCart />, desc: "Boost sales with high-converting online stores." },
       { id: "product", label: "Product", icon: <FaShoppingCart />, desc: "Boost sales with high-converting online stores." },

    { id: "visa", label: "Visa Services", icon: <FaPassport />, desc: "Hassle-free global travel documentation." },
    // { id: "shoots", label: "Photo Shoots", icon: <FaCamera />, desc: "Professional photography for your brand." },
    { id: "restaurants", label: "Restaurants", icon: <FaUtensils />, desc: "Culinary experiences and menu curation." },
    { id: "others", label: "Others", icon: <FaHotel />, desc: "Luxury stays and hospitality management." },
  ]; 
function Cards() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <section className="px-4 md:px-12 xl:px-24 2xl:px-52 pt-8 pb-20 w-full ">
      <div className="text-center mb-12">
        <h3 className="bungeeHead font-bold text-[#cc5f4d] text-2xl md:text-3xl xl:text-4xl mb-4">
          Creatives We&apos;ve Built for Our Clients
        </h3>
        {/* <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Take a look at some of the creative and custom-made projects we&apos;ve developed.
          From sleek business websites to interactive platforms — we bring ideas to life!
        </p> */}
        {/* <button className="px-6 py-3 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg transition">
          Get Yours Customized
        </button> */}
  

      {/* --- Active Content Display --- */}
      {/* <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl text-center animate-in fade-in zoom-in duration-300">
        {tabs.map((item) => (
          activeTab === item.id && (
            <div key={item.id}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#cc5f4d]/10 text-[#cc5f4d] text-3xl mb-4">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.label} Solutions</h2>
              <p className="text-gray-500 max-w-md mx-auto">{item.desc}</p>
              
              <button className="mt-6 px-6 py-2 rounded-lg border-2 border-[#cc5f4d] text-[#cc5f4d] font-semibold hover:bg-[#cc5f4d] hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          )
        ))}


 ${activeTab === item.id 
                ? "bg-[#cc5f4d] text-white border-[#cc5f4d] shadow-lg shadow-[#cc5f4d]/30 scale-105" 
                : "bg-gray-400/30 text-gray-600 border-gray-200 hover:border-[#cc5f4d] hover:text-[#cc5f4d]"
              }

      </div> */}


      </div>

      <div className="flex flex-wrap justify-center gap-9 mt-10 mb-8 ">
        {tabs.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              flex items-center gap-2 px-6 py-3  text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out border
              ${activeTab === item.id ? "text-black" : " text-black/70"



               }
            `}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {activeTab !=="all" && cardsData.filter((item)=>item.type==activeTab).map((card, index) => (
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
        {activeTab =="all" && cardsData.slice(0,6).map((card, index) => (
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
