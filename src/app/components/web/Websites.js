"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [items, setItems] = useState([]);
  const [activeBackground, setActiveBackground] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("next");

  const carouselData = [
    {
      id: 1,
      name: "Hustler's Fortune",
      description: "Transform your existing card chip into a bold metal masterpiece — sleek, strong, and made for go-getters.",
      offer: "Metal Bank Card • Our Bestseller",
      imageUrl: "/Images/wd/bynav.webm",
    },
    {
      id: 2,
      name: "Punjab Series",
      description: "Celebrate your vibe with desi-inspired prints — bold, colorful, and crafted on premium metal cards.",
      offer: "Exclusive Edition • Metal Bank Card",
      imageUrl: "/Images/wd/saajriwaaj.webp",
    },
    {
      id: 3,
      name: "Tap 2 Pay Pro",
      description: "Your chip, your style — tap, pay, and stand out with custom NFC metal cards that mix tech with luxury.",
      offer: "Tap 2 Pay • Customize Your Own",
      imageUrl: "/Images/wd/portfolio.webm",
    },
    {
      id: 4,
      name: "Business Edge",
      description: "Redefine professionalism — get your business card chip redesigned in a premium metal finish with your branding.",
      offer: "Business Metal Card • Team Customization",
      imageUrl: "/Images/wd/cogan.webm",
    },
    {
      id: 5,
      name: "Just for Fun",
      description: "Make it playful — choose from funky pre-made prints or design your own for a unique personal touch.",
      offer: "Creative Series • Fun Custom Prints",
      imageUrl: "/Images/wd/dp.webm",
    },
    {
      id: 6,
      name: "Card Holder Metal",
      description: "Coming soon — premium metal card holders to keep your redesigned cards safe and stylish.",
      offer: "Metal Card Holder • Launching Soon",
      imageUrl: "/Images/wd/fleet.webp",
    },
       {
      id: 7,
      name: "Business Edge",
      description: "Redefine professionalism — get your business card chip redesigned in a premium metal finish with your branding.",
      offer: "Business Metal Card • Team Customization",
      imageUrl: "/Images/wd/hammerexp.webp",
    },
    {
      id: 8,
      name: "Just for Fun",
      description: "Make it playful — choose from funky pre-made prints or design your own for a unique personal touch.",
      offer: "Creative Series • Fun Custom Prints",
      imageUrl: "/Images/wd/sr2.webm",
    },
    // {
    //   id: 9,
    //   name: "Card Holder Metal",
    //   description: "Coming soon — premium metal card holders to keep your redesigned cards safe and stylish.",
    //   offer: "Metal Card Holder • Launching Soon",
    //   imageUrl: "/Images/wd/sr2.webp",
    // },
      
  ];

  // Initialize with static data
  useEffect(() => {
    // Transform carouselData to match your expected structure
    const transformedItems = carouselData.map(item => ({
      _id: item.id,
      heading: item.name,
      description: item.description,
      imageDesktop: item.imageUrl
    }));
    
    setItems(transformedItems);
    if (transformedItems[1]) {
      setActiveBackground(transformedItems[1].imageDesktop);
    }
  }, []);

  useEffect(() => {
    const autoAdvance = setInterval(() => {
      if (!isAnimating && items.length > 0) {
        handleNext();
      }
    }, 4000);

    return () => clearInterval(autoAdvance);
  }, [isAnimating, items]);

  const handleNext = () => {
    if (isAnimating || items.length === 0) return;
    setIsAnimating(true);
    setAnimationDirection("next");

    const nextItems = [...items];
    const firstItem = nextItems.shift();
    const updatedItems = [...nextItems, firstItem];

    if (updatedItems[1]) {
      setActiveBackground(updatedItems[1].imageDesktop);
    }

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

    if (updatedItems[1]) {
      setActiveBackground(updatedItems[1].imageDesktop);
    }

    setTimeout(() => {
      setItems(updatedItems);
      setIsAnimating(false);
    }, 500);
  };

  if (items.length === 0) {
    return (
      <div className="relative w-full h-[800px] xl:h-[900px] 2xl:h-[950px] bg-gray-100 animate-pulse"></div>
    );
  }
const isVideo = (url) => url?.endsWith(".webm");

  return (
    <div className="mt-12 mx-4 md:mx-12 lg:mx-32 xl:mx-48 ">
      <div className="relative w-full h-[180px] md:h-[300px] xl:h-[500px] 2xl:h-[750px] overflow-hidden z-10">
    <div
  className={`slide h-full w-full relative bg-transparent ${animationDirection}-transition`}
>
  {items.map((item, index) => {
    const video = isVideo(item.imageDesktop);

    return (
      // <div
      //   key={item._id || index}
      //   className={`item overflow-hidden
      //     w-[200px] xl:w-[290px] 2xl:w-[320px]
      //     h-[150px]
      //     bg-center bg-no-repeat
      //     ${
      //       index === 0 || index === 1
      //         ? "top-0 left-0 transform-none rounded-[20px] w-full h-full"
      //         : index === 2
      //         ? "left-0"
      //         : index === 3
      //         ? "left-[calc(50%+220px)]"
      //         : index === 4
      //         ? "left-[calc(50%+440px)]"
      //         : "left-[calc(50%+660px)] opacity-0"
      //     }
      //   `}
      //   style={
      //     !video
      //       ? {
      //           backgroundImage: `url(${item.imageDesktop})`,
      //           backgroundSize: "cover",
      //           backgroundRepeat: "no-repeat",
      //           backgroundPosition: "center",
      //         }
      //       : undefined
      //   }
      // >
      //   {video && (
      //     <video
      //       src={item.imageDesktop}
      //       autoPlay
      //       muted
      //       loop
      //       playsInline
      //       className="w-full h-full object-contain"
      //     />
      //   )}
      // </div>
      <div
  key={item._id || index}
  className={`item relative overflow-hidden bg-transparent
    w-[200px] xl:w-[290px] 2xl:w-[320px]
    h-[150px]
    ${
      index === 0 || index === 1
        ? "w-full h-full rounded-[20px]"
        : ""
    }
  `}
>
  {/* Media layer */}
  {!video ? (
    <div
      className="absolute inset-0 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${item.imageDesktop})` }}
    />
  ) : (
    <video
      src={item.imageDesktop}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    />
  )}
</div>

    );
  })}
</div>

    
        {/* <div
          className={`slide h-full w-full relative bg-transparent ${animationDirection}-transition`}
        >
          {items.map((item, index) => (
            <div
              key={item._id || index}
              className={`item w-[200px] xl:w-[290px] 2xl:w-[320px] h-[150px] 2xl: bg-cover bg-center ${
                index === 0 || index === 1
                  ? "top-0 left-0 transform-none rounded-[20px] w-full h-full"
                  : index === 2
                  ? "left-0"
                  : index === 3
                  ? "left-[calc(50%+220px)]"
                  : index === 4
                  ? "left-[calc(50%+440px)]"
                  : "left-[calc(50%+660px)] opacity-0"
              }`}
         style={{
  backgroundImage: `url(${item.imageDesktop})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}}
            >
              
            </div>
          ))}
        </div> */}

        <div className="flex flex-row gap-5 items-center text-center absolute bottom-0 lg:bottom-5 left-1/2 -translate-x-1/2">
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="w-7 lg:w-10 h-7 lg:h-9 rounded-lg cursor-pointer border-2 border-black/75 bg-white/60 transition-all duration-300 hover:border-white/75 hover:scale-110 focus:scale-110 focus:bg-white active:scale-105 disabled:opacity-50 "
          >
            ◁
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="w-7 lg:w-10 h-7 lg:h-9 rounded-lg cursor-pointer border-2 border-black/75 bg-white/60 transition-all duration-300 hover:border-white/75 hover:scale-110 focus:scale-110 focus:bg-white active:scale-105 disabled:opacity-50 "
          >
            ▷
          </button>
        </div>
      </div>

      <style jsx>{`
        .item {
          position: absolute;
          top: 85%;
          transform: translate(0, -50%);
          border-radius: 8px;
          // box-shadow: 0 30px 50px #505050;
          background-position: 50% 50%;
          background-size: cover;
          display: inline-block;
        }

        .next-transition .item {
          transition: all 1.6s ease-in-out;
        }

        .prev-transition .item {
          transition: all 0.5s ease-in-out;
        }

        .slide .item:nth-child(1),
        .slide .item:nth-child(2) {
          top: 0;
          left: 0;
          transform: translate(0, 0);
          border-radius: 0;
          width: 100%;
          height: 100%;
        }

        .slide .item:nth-child(3) {
          left: 75%;
        }
        .slide .item:nth-child(4) {
          left: calc(80%);
        }
        .slide .item:nth-child(5) {
          left: calc(85%);
        }

        .slide .item:nth-child(n + 6) {
          left: calc(90%);
          opacity: 0;
        }

        .item .content {
          color: #eee;
          transform: translate(0, -50%);
          font-family: system-ui;
          display: none;
        }

        .slide .item:nth-child(2) .content {
          display: block;
        }

        .content .name {
          text-transform: uppercase;
          font-weight: bold;
          opacity: 0;
          animation: animate 1s ease-in-out 1 forwards;
        }

        .content .des {
          margin-top: 10px;
          margin-bottom: 20px;
          opacity: 0;
          animation: animate 1s ease-in-out 0.3s 1 forwards;
        }

        .content button {
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          opacity: 0;
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 0.673);
          transition: all 0.5s;
          animation: animate 1s ease-in-out 0.6s 1 forwards;
        }

        .content button:hover {
          background-color: rgb(255, 255, 255);
        }

        @keyframes animate {
          from {
            opacity: 0;
            transform: translate(0, 100px);
            filter: blur(33px);
          }
          to {
            opacity: 1;
            transform: translate(0);
            filter: blur(0);
          }
        }

        .next-transition .slide .item:nth-child(1) {
          animation: slideOutLeft 0.8s ease-in-out forwards;
        }

        .next-transition .slide .item:nth-child(2) {
          animation: slideInFromRight 0.8s ease-in-out forwards;
        }

        .prev-transition .slide .item:nth-child(1) {
          animation: slideOutRight 0.5s ease-in-out forwards;
        }

        .prev-transition .slide .item:nth-child(2) {
          animation: slideInFromLeft 0.5s ease-in-out forwards;
        }

        @keyframes slideOutLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutRight {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;