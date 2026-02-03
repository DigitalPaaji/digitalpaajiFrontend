'use client';

import { useState, useEffect, useCallback } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

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

  const handleNext = useCallback(() => {
    if (isAnimating || items.length === 0) return;
    setIsAnimating(true);
    setAnimationDirection("next");

    setTimeout(() => {
      setItems((prev) => {
        const nextItems = [...prev];
        const firstItem = nextItems.shift();
        return [...nextItems, firstItem];
      });
      setIsAnimating(false);
    }, 800);
  }, [isAnimating, items.length]);

  const handlePrev = () => {
    if (isAnimating || items.length === 0) return;
    setIsAnimating(true);
    setAnimationDirection("prev");

    setTimeout(() => {
      setItems((prev) => {
        const prevItems = [...prev];
        const lastItem = prevItems.pop();
        return [lastItem, ...prevItems];
      });
      setIsAnimating(false);
    }, 800);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer); // Cleanup on unmount
  }, [handleNext]);

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
 
  if (items.length === 0) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden px-4 py-10 md:px-20 lg:px-40">
      
      <div className="relative w-full h-[38rem] overflow-hidden z-10 bg-gray-100 rounded-2xl shadow-2xl">
        
        <div className={`slide w-full h-full relative ${animationDirection}-transition`}>
          {items.map((item, index) => {
             const isStack = index >= 2;
             const isActive = index === 1; // The current main visible frame
             
             return (
              <div
                key={item.id}
                className="item absolute overflow-hidden bg-white shadow-2xl border border-gray-200 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              >
                <div className="relative w-full h-full bg-white group">
                    {/* Interaction Overlay */}
                    <div 
                      className={`absolute inset-0 z-30 transition-all duration-300 
                        ${isActive ? 'cursor-alias hover:bg-black/5' : 'cursor-pointer bg-white/10'}
                      `} 
                      onClick={() => {
                        if (isActive) openInNewTab(item.url);
                        else if (index >= 2) handleNext();
                      }} 
                    >
                      {isActive && (
                         <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                            Click to visit site
                         </div>
                      )}
                    </div>
                    
                    <iframe
                      src={item.url}
                      scrolling="no" // Prevents iframe scrolling
                      className={`border-none bg-white transition-all duration-700 origin-top-left pointer-events-none select-none
                        ${isStack 
                            ? 'w-[400%] h-[400%] scale-[0.25]' 
                            : 'w-full h-full scale-100' 
                         }
                      `}
                      style={{ overflow: 'hidden' }} // Extra CSS insurance
                      title={`Preview of ${item.url}`}
                    />
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Controls --- */}
        <div className="absolute bottom-6 left-6 flex gap-3 z-50">
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md text-black hover:bg-black hover:text-white transition-all shadow-lg disabled:opacity-50"
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md text-black hover:bg-black hover:text-white transition-all shadow-lg disabled:opacity-50"
          >
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </button>
        </div>

      </div>

      <style jsx>{`
        .item {
          right: -400px;
          bottom: 40px;
          width: 320px;
          height: 200px;
          border-radius: 12px;
          opacity: 0;
          z-index: 0;
        }

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

        .slide .item:nth-child(3) {
          right: 40px; bottom: 40px;
          opacity: 1; z-index: 20;
          transform: scale(1);
        }

        .slide .item:nth-child(4) {
          right: 25px; bottom: 25px;
          opacity: 0.8; z-index: 15;
          transform: scale(0.9);
        }

        .next-transition .item:nth-child(1) {
          animation: slideOutLeft 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes slideOutLeft {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        
        @keyframes slideOutRight {
          0% { transform: translateX(0); z-index: 30; }
          100% { transform: translateX(100%); z-index: 30; }
        }

        .prev-transition .item:nth-child(1) {
           animation: slideOutRight 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @media (max-width: 768px) {
          .slide .item:nth-child(3), .slide .item:nth-child(4) {
            display: none; /* Hide stack on small mobile for performance */
          }
        }
      `}</style>
    </section>
  );
}