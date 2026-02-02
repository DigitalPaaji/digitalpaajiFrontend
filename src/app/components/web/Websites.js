'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOpenInNew } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

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

export default function CinematicSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // --- 1. Robust Resize Handler ---
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- 2. Keyboard Navigation ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]); // Dependency ensures state is fresh

  // Helpers
  const getIndex = (offset) => (currentIndex + offset + frames.length) % frames.length;

  const handleNext = useCallback(() => {
    setDirection(1);
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % frames.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setIsLoading(true);
    setCurrentIndex((prev) => (prev - 1 + frames.length) % frames.length);
  }, []);

  // --- 3. Animation Variants (The Core Logic) ---
  const variants = {
    // The Active Card (Center)
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 30,
      rotateY: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    // The Next Card (Right)
    next: {
      x: isMobile ? "100%" : "55%", // Percentage based spacing
      scale: 0.85,
      opacity: 0.6,
      zIndex: 10,
      rotateY: -15, // Subtle 3D turn
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    // The Previous Card (Left)
    prev: {
      x: isMobile ? "-100%" : "-55%",
      scale: 0.85,
      opacity: 0.6,
      zIndex: 10,
      rotateY: 15,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    // Exit animations
    enterNext: { x: "100%", opacity: 0, scale: 0.5 },
    enterPrev: { x: "-100%", opacity: 0, scale: 0.5 }
  };

  return (
    <section className="relative w-full min-h-screen bg-gray-50 flex flex-col justify-center py-20 overflow-hidden">
      
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-12 z-20">
        <h3 className="bungeeHead text-[#cc5f4d] text-3xl md:text-5xl font-bold mb-3 drop-shadow-sm">
          Projects We&apos;ve Built
        </h3>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          Explore our interactive portfolio. Swipe, click, or use arrow keys.
        </p>
      </div>

      {/* --- CAROUSEL STAGE --- */}
      <div className="relative w-full max-w-[1400px] mx-auto h-[60vh] md:h-[70vh] flex items-center justify-center perspective-1000">
        
        {/* Navigation Buttons (Floating) */}
        <NavButton direction="left" onClick={handlePrev} />
        <NavButton direction="right" onClick={handleNext} />

        {/* RENDER STRATEGY:
            Instead of AnimatePresence for the whole list, we render the
            Prev, Current, and Next cards explicitly. This is more stable for iframes.
        */}

        {/* 1. PREVIOUS CARD (Left) */}
        <motion.div
          key={`prev-${getIndex(-1)}`}
          variants={variants}
          animate="prev"
          initial="enterPrev"
          className="absolute w-[85vw] md:w-[60vw] h-full cursor-pointer"
          onClick={handlePrev}
        >
          <CardContent 
            url={frames[getIndex(-1)]} 
            type="preview" 
            label="Previous" 
            icon={<MdOutlineKeyboardArrowLeft />}
            alignIcon="left"
          />
        </motion.div>

        {/* 2. NEXT CARD (Right) */}
        <motion.div
          key={`next-${getIndex(1)}`}
          variants={variants}
          animate="next"
          initial="enterNext"
          className="absolute w-[85vw] md:w-[60vw] h-full cursor-pointer"
          onClick={handleNext}
        >
          <CardContent 
            url={frames[getIndex(1)]} 
            type="preview" 
            label="Next"
            icon={<MdOutlineKeyboardArrowRight />}
            alignIcon="right"
          />
        </motion.div>

        {/* 3. CURRENT CARD (Center - Interactive) */}
        {/* We use AnimatePresence here to smooth the swap of the CENTER card specifically */}
        <motion.div
            key={`current-${currentIndex}`}
            variants={variants}
            animate="center"
            // We use a trick: initial is NOT set to allow it to "flow" from its previous position if we were tracking it,
            // but for simplicity in this 3-card stack, we just animate to center.
            className="absolute w-[90vw] md:w-[65vw] h-full z-30"
          >
            <CardContent 
              url={frames[currentIndex]} 
              type="active" 
              isLoading={isLoading} 
              onLoad={() => setIsLoading(false)}
            />
        </motion.div>

      </div>

      {/* Mobile Swipe Hint */}
      {isMobile && (
        <div className="text-center mt-12 text-gray-400 animate-pulse flex justify-center items-center gap-2">
           <MdOutlineKeyboardArrowLeft /> Swipe to Navigate <MdOutlineKeyboardArrowRight />
        </div>
      )}
    </section>
  );
}

// --- SUB-COMPONENTS FOR CLEANER CODE ---

const NavButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`
      absolute top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-16 md:h-16 
      bg-white/80 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] 
      flex items-center justify-center text-[#cc5f4d] 
      hover:scale-110 hover:bg-white hover:shadow-[#cc5f4d]/20 hover:shadow-2xl 
      transition-all duration-300
      ${direction === 'left' ? 'left-4 md:left-8' : 'right-4 md:right-8'}
    `}
  >
    {direction === 'left' ? <MdOutlineKeyboardArrowLeft size={30} /> : <MdOutlineKeyboardArrowRight size={30} />}
  </button>
);

const CardContent = ({ url, type, label, icon, alignIcon, isLoading, onLoad }) => {
  const isPreview = type === 'preview';

  return (
    <div className={`
      w-full h-full bg-white rounded-2xl overflow-hidden border border-gray-200 
      transition-all duration-500
      ${isPreview ? 'shadow-xl hover:shadow-2xl' : 'shadow-[0_20px_50px_rgba(0,0,0,0.2)]'}
    `}>
      
      {/* Browser Header */}
      <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10" />
          <div className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10" />
        </div>
        
        {!isPreview && (
          <div className="flex items-center gap-2 text-gray-400 text-xs font-mono bg-white px-3 py-1 rounded border shadow-sm">
            <FaGlobe size={10} /> {new URL(url).hostname}
          </div>
        )}

        {/* Active: Visit Button | Preview: Label */}
        {isPreview ? (
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</div>
        ) : (
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#cc5f4d] text-xs font-bold hover:underline">
            Visit <MdOpenInNew />
          </a>
        )}
      </div>

      {/* Main Content Area */}
      <div className="relative w-full h-[calc(100%-2.5rem)] bg-white group">
        
        {/* Loading State (Only for Active) */}
        {!isPreview && isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-20">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-[#cc5f4d] rounded-full animate-spin mb-3"></div>
            <span className="text-gray-400 text-xs font-medium animate-pulse">Loading Preview...</span>
          </div>
        )}

        {/* PREVIEW OVERLAY (CRITICAL): 
           This transparent div covers the iframe on preview cards.
           It captures the click event so the user can "swap" slides 
           instead of interacting with the website inside.
        */}
        {isPreview && (
          <div className="absolute inset-0 z-50 bg-white/20 hover:bg-white/10 backdrop-blur-[1px] transition-all flex items-center justify-center">
             <div className={`
                flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 shadow-lg text-[#cc5f4d] font-bold transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300
                ${alignIcon === 'left' ? 'flex-row-reverse' : ''}
             `}>
                {label} {icon}
             </div>
          </div>
        )}

        <iframe
          src={url}
          onLoad={onLoad}
          className={`w-full h-full border-none ${isPreview ? 'pointer-events-none opacity-80 grayscale-[0.3]' : 'opacity-100'}`}
          title="Project Preview"
          tabIndex={isPreview ? -1 : 0}
        />
      </div>
    </div>
  );
};