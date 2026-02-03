'use client';

import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOpenInNew } from "react-icons/md";

// 1. Data Source
const frames = [
  'https://hammerexperts.ca/',
  'https://cogan.life/',
  'https://saajriwaaj.com/',
  'https://bynav.space/',
  'https://fleetxlogistics.co.uk/delivery-driver-jobs-portsmouth',
  'https://portfolio.digitalpaajiacademy.com/',
  'https://digitalpaajiacademy.com/',
  'https://workshop.digitalpaajiacademy.com/',
];

export default function CinematicCarousel() {
  const [items, setItems] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("next");

  useEffect(() => {
    const formattedItems = frames.map((url, index) => ({
      id: `frame-${index}-${Date.now()}`,
      url: url
    }));
    setItems(formattedItems);
  }, []);

  const handleNext = () => {
    if (isAnimating || items.length === 0) return;
    setIsAnimating(true);
    setAnimationDirection("next");

    const nextItems = [...items];
    const firstItem = nextItems.shift();
    const updatedItems = [...nextItems, firstItem];

    // Animation duration must match CSS transition (0.8s)
    setTimeout(() => {
      setItems(updatedItems);
      setIsAnimating(false);
    }, 800); 
  };

  const handlePrev = () => {
    if (isAnimating || items.length === 0) return;
    setIsAnimating(true);
    setAnimationDirection("prev");

    const prevItems = [...items];
    const lastItem = prevItems.pop(); 
    const updatedItems = [lastItem, ...prevItems]; 

    setTimeout(() => {
      setItems(updatedItems);
      setIsAnimating(false);
    }, 800);
  };

  if (items.length === 0) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  return (
    <section className="relative w-full min-h-screen bg-gray-50 flex flex-col justify-center overflow-hidden px-4 py-10 md:py-9 md:px-20 lg:px-40 lg:py-12">
      
      
      <div className="relative w-full h-[38rem] overflow-hidden z-10 bg-gray-100">
        
        {/* The container for all slides */}
        <div className={`slide w-full h-full relative ${animationDirection}-transition`}>
          {items.map((item, index) => {
             // Logic: Index 0 is exiting, Index 1 is Active, Index 2+ are stack
             const isStack = index >= 2;
             
             return (
              <div
                key={item.id}
                className={`item absolute overflow-hidden bg-white shadow-2xl border border-gray-200 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                `}
              >
                

                <div className="relative w-full h-full bg-white group">
                    <div className={`absolute inset-0 z-30 transition-all duration-300  origin-bottom-right
                      ${index === 1 ? 'pointer-events-none' : 'bg-white/10 hover:bg-white/0 cursor-pointer backdrop-blur-[0px]'}
                    `} 
                    onClick={() => index >= 2 && handleNext()} 
                    />
                    
                   
                    <iframe
                      src={item.url}
                      className={`border-none bg-white transition-all duration-700 origin-top-left
                        ${isStack 
                            ? 'w-[400%] h-[400%] scale-[0.25] pointer-events-none' 
                            : 'w-full h-full scale-100   ' 
                         }
                      `}
                      title={`Preview of ${item.url}`}
                      loading="lazy"
                    />
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Controls --- */}
        <div className="absolute bottom-2 md:bottom-10  left-2 md:left-10 flex gap-4 z-50">
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="w-8 h-8 md:w-12 md:h-12   lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-black text-white hover:bg-[#cc5f4d] hover:scale-110 transition-all shadow-xl disabled:opacity-50"
          >
            <MdOutlineKeyboardArrowLeft className="text-xl md:text-2xl ld:3xl" />
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="w-8 h-8 md:w-12 md:h-12   lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-black text-white hover:bg-[#cc5f4d] hover:scale-110 transition-all shadow-xl disabled:opacity-50"
          >
            <MdOutlineKeyboardArrowRight className="text-xl md:text-2xl ld:3xl" />
          </button>
        </div>

      </div>

      <style jsx>{`
        /* --- STACK LOGIC (Bottom Right) --- */
        
        .item {
          /* Default state (Hidden in queue) */
          right: -400px;
          bottom: 40px;
          width: 320px;
          height: 200px; /* Landscape aspect ratio for mini-cards */
          border-radius: 12px;
          opacity: 0;
          z-index: 0;
        }

        /* 1. ACTIVE ITEM (Full Screen) */
        /* Note: We use nth-child(2) as the active one usually, to allow nth-child(1) to animate out */
        .slide .item:nth-child(1),
        .slide .item:nth-child(2) {
          right: auto;
          bottom: auto;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
          opacity: 1;
          z-index: 10;
          transform: none;
        }

        /* 2. THE STACK (Visible Queue) */
        
        /* First Card in Stack (Next Up) */
        .slide .item:nth-child(3) {
          right: 40px;
          bottom: 40px;
          opacity: 1;
          z-index: 20;
          transform: scale(1);
          box-shadow: -10px -10px 30px rgba(0,0,0,0.1);
        }

        /* Second Card in Stack */
        .slide .item:nth-child(4) {
          right: 20px; 
          bottom: 20px; /* Slightly behind and lower */
          opacity: 1;
          z-index: 15;
          transform: scale(0.95); /* Slightly smaller */
          filter: brightness(0.9);
        }

        /* Third Card in Stack */
        .slide .item:nth-child(5) {
          right: 0px; 
          bottom: 0px;
          opacity: 1;
          z-index: 10;
          transform: scale(0.9);
          filter: brightness(0.8);
        }

        /* --- ANIMATIONS --- */

        /* Animation: Slide Out Left (The active card leaving) */
        .next-transition .item:nth-child(1) {
             animation: slideOutLeft 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        /* Animation: Expansion (Stack Item -> Active Item) */
        /* This happens automatically because the class changes from nth-child(3) properties to nth-child(2) properties */
        /* The transition-all on the class handles the smooth morphing */

        @keyframes slideOutLeft {
          0% { transform: translateX(0) scale(1); opacity: 1; }
          100% { transform: translateX(-100%) scale(0.9); opacity: 0; }
        }

        @keyframes slideInFromLeft {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        /* Prev Transition Specifics */
        .prev-transition .item:nth-child(1) {
            animation: slideOutRight 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        
        @keyframes slideOutRight {
          0% { transform: translateX(0); z-index: 30; }
          100% { transform: translateX(100%); z-index: 30; }
        }

        /* Responsive */
        @media (max-width: 768px) {
           /* On mobile, hide the stack or make it very small */
           .slide .item:nth-child(3),
           .slide .item:nth-child(4),
           .slide .item:nth-child(5) {
              width: 150px;
              height: 100px;
              right: 20px;
              bottom: 100px;
           }
        }
      `}</style>
    </section>
  );
}