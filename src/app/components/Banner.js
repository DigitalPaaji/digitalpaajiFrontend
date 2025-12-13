import React, { useEffect, useState } from 'react';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [manualChange, setManualChange] = useState(false); // Track manual slide changes

  useEffect(() => {
    // Only set an interval if no manual change is happening
    if (!manualChange) {
      const interval = setInterval(() => {
        setCurrentSlide(
          (prev) => (prev < 3 ? prev + 1 : 1)
        );
      }, 7000);

      // Cleanup the interval when the component unmounts
      return () => clearInterval(interval);
    }
  }, [manualChange]); // Re-run effect when `manualChange` changes

  const handleNextSlide = () => {
    setManualChange(true); // Temporarily disable auto transition
    setCurrentSlide((prev) => (prev < 3 ? prev + 1 : 1));

    // Re-enable automatic transitions after a delay
    setTimeout(() => setManualChange(false), 7000);
  };

  const handlePrevSlide = () => {
    setManualChange(true); // Temporarily disable auto transition
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : 3));

    // Re-enable automatic transitions after a delay
    setTimeout(() => setManualChange(false), 7000);
  };

  return (
    <div className="slide-container h-[640px] md:h-[704px] lg:h-[900px] xl:h-[840px] w-full overflow-hidden">
      <Slide1
        handleNextSlide={handleNextSlide}
        handlePrevSlide={handlePrevSlide}
        slideNumber={1}
        currentSlide={currentSlide}
      />
      <Slide2
        handleNextSlide={handleNextSlide}
        handlePrevSlide={handlePrevSlide}
        slideNumber={2}
        currentSlide={currentSlide}
      />
      <Slide3
        handleNextSlide={handleNextSlide}
        handlePrevSlide={handlePrevSlide}
        slideNumber={3}
        currentSlide={currentSlide}
      />
    </div>
  );
}

export default Banner;
