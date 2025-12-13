"use client";
import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Vypaar() {
  const vypaar = [
    { name: "DIGITAL" },
    { name: "STRATEGY" },
    { name: "IDEAS" },
    { name: "CREATIVE" },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [letters, setLetters] = useState(vypaar[0].name.split(""));
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);

      setTimeout(() => {
        const nextIndex = (currentTestimonial + 1) % vypaar.length;
        setCurrentTestimonial(nextIndex);
        setLetters(vypaar[nextIndex].name.split(""));
        setIsFlipping(false);
      }, 300); // Adjust timing for smoother transition
    }, 2000);

    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 items-start p-6 mx-4 md:mx-16 xl:mx-44">
      {/* Left Side Text */}
      <div className="w-full lg:w-1/2 bg-cover bg-center rounded-lg relative">
        <div>
          <h3 className="bungeeHead text-[#cc5f4d] text-4xl lg:text-7xl">LET'S TALK</h3>
        </div>

        <div className="mt-2 mb-12">
          <div className="testimonial-container">
            <h3 className="bungeeHead text-[#006E7F] text-4xl lg:text-7xl h-12 lg:h-28">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className={`flip-letter ${isFlipping ? "flipping" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </h3>
          </div>
        </div>
        <div>
          <p className="merriHead text-[#cc5f4d] text-md font-medium">
            Let’s discuss your project at{" "}
            <a href="mailto:hello@digitalpaaji.in" className="underline">
              hello@digitalpaaji.in
            </a>
          </p>
        </div>
      </div>

      {/* Right Side Text */}
      <div className="w-full lg:w-1/2">
        <h3 className="bungeeHead text-[#cc5f4d] text-4xl lg:text-5xl">2 GALLAN KARIYE</h3>
        <h3 className="bungeeHead text-[#006E7F] text-4xl lg:text-5xl mt-4">VYPAAR DIA</h3>
      </div>
    </div>
  );
}

export default Vypaar;



// "use client";
// import React, { useState, useEffect } from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// function vypaar() {
//   const vypaar = [
//     { name: "DIGITAL" },
//     { name: "STRATEGY" },
//     { name: "IDEAS" },
//     { name: "CREATIVE" },
//   ];

//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [letters, setLetters] = useState(vypaar[currentTestimonial].name.split(""));
//   const [isFlipping, setIsFlipping] = useState(false);

//   // Change the testimonial every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsFlipping(true);
//       setLetters([]);
//       setTimeout(() => {
//         setCurrentTestimonial((prevIndex) =>
//           prevIndex === vypaar.length - 1 ? 0 : prevIndex + 1
//         );
//         setIsFlipping(false);
//         setLetters(vypaar[currentTestimonial].name.split(""));
//       }, 1); // Delay for flipping effect (time it takes to reset)
//     }, 2000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [currentTestimonial]);

//   return (
//     <div className="flex flex-col lg:flex-row justify-center gap-8  items-start p-6 mx-4 md:mx-16 xl:mx-44">
//       {/* Left Side Text */}
//       <div className="w-full lg:w-1/2 bg-cover bg-center rounded-lg relative">
//         <div>
//           <h3 className="bungeeHead text-[#cc5f4d] text-4xl lg:text-7xl">LET'S TALK</h3>
//         </div>

//         <div className="mt-2 mb-12">
//           <div className="testimonial-container">
//             <h3 className="bungeeHead text-[#006E7F] text-4xl lg:text-7xl h-12 lg:h-28">
//               {letters.map((letter, index) => (
//                 <span
//                   key={index}
//                   className={`flip-letter ${isFlipping ? "flipping" : ""}`}
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   {letter}
//                 </span>
//               ))}
//             </h3>
//           </div>
//         </div>
//         <div>
//           <p className="merriHead text-[#cc5f4d] text-md font-medium">
//             Let’s discuss your project at {" "} 
              
//               <a href="mailto:hello@digitalpaaji.in" className="underline">
//              hello@digitalpaaji.in

//               </a>
              
//           </p>
//         </div>
//       </div>

//       {/* Right Side Text */}
//       <div className="w-full lg:w-1/2">
//         <h3 className="bungeeHead text-[#cc5f4d] text-4xl lg:text-5xl">2 GALLAN KARIYE</h3>
//         <h3 className="bungeeHead text-[#006E7F] text-4xl lg:text-5xl mt-4">VYPAAR DIA</h3>
//       </div>
//     </div>
//   );
// }

// export default vypaar;
