import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon

function Popup({ handleMenu }) {
  const [hovered, setHovered] = useState(null); // Track which item is hovered
  const [show, setShow] = useState(null);
  const handleMouseEnter = (elem) => setShow(elem);
  const handleMouseLeave = () => setShow(null);
  // Image URLs for each list item
  const images = {
    Home: "/Images/popup/2.webp", // Replace with your image URL for Home
    About: "/Images/popup/3.webp", // Replace with your image URL for About
    Services: "/Images/popup/1.webp", // Replace with your image URL for Services
    "Our Work": "/Images/popup/4.webp", // Replace with your image URL for Our Work
    Contact: "/Images/popup/5.webp", // Replace with your image URL for Contact
  };

  // Mouse enter and leave handlers
  const handleMouseHover = (item) => {
    setHovered(item);
  };

  const handleMouseHoverLeave = () => {
    setHovered(null);
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="p-2 bg-white">
        <div className="  p-8  bg-[#ede7db] rounded-lg w-[300px] h-[500px] md:w-[500px] md:h-[600px] xl:w-[700px]  relative"
        // style={{backgroundImage:"url('/Images/popupbg.webp')"}}
        >
          {/* Close Icon in Top Right Corner */}
          <AiOutlineClose
            className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-600"
            onClick={handleMenu} // Close the menu when clicking the icon
          />

<div className="block xl:hidden">
    <div className="">
    <Image
    width={200} height={200} src="/Images/logo2.webp" alt="logo" className="w-full h-auto object-cover" />
    </div>
      <ul className="grid grid-cols-2 my-12 gap-6 ">
      <Link
              href={"/digital-marketing"}
              onMouseEnter={() => handleMouseEnter("1")}
              onClick={handleMenu}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto mx-auto"
            >
              <li
                className={`heading text-[12px] font-bungee-inline text-center h-20 ${
                  show === "1" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div className={`w-20 h-20  ${show === "1" ? "block" : "hidden"}`}>
                <Image
                width={200} height={200}
                src="/Images/navGif/DM.gif"
                  alt="1ykk"
                  className={`flip w-full h-20 object-cover ${show === "1" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 2 */}
            <Link
              href={"/social-media-marketing"}
              onMouseEnter={() => handleMouseEnter("2")}
              onClick={handleMenu}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto  mx-auto"
            >
              <li
                className={`heading text-[12px] font-bungee-inline text-center h-20 ${
                  show === "2" ? "hidden" : "block"
                }`}
              >
                Social Media <br /> Marketing
              </li>
              <div className={`w-20 h-20  ${show === "2" ? "block" : "hidden"}`}>
                <Image
                width={200} height={200}
                   src="/Images/navGif/SMM.gif"
                  alt="2"
                  className={`flip w-full h-20 object-cover ${show === "2" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 3 */}
            <Link
              href={"/search-engine-optimization"}
              onMouseEnter={() => handleMouseEnter("3")}
              onClick={handleMenu}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto mx-auto"
            >
              <li
                className={`heading text-[12px] font-bungee-inline text-center h-20 ${
                  show === "3" ? "hidden" : "block"
                }`}
              >
                Search Engine <br /> Optimization
              </li>
              <div className={`w-20 h-20  ${show === "3" ? "block" : "hidden"}`}>
                <Image
                width={200} height={200}
                   src="/Images/navGif/SEO.gif"

                  alt="3"
                  className={`flip w-full h-20 object-cover ${show === "3" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 4 */}
            <Link
              href={"/video-production"}
              onMouseEnter={() => handleMouseEnter("4")}
              onClick={handleMenu}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto mx-auto"
            >
              <li
                className={`heading text-[12px] font-bungee-inline text-center h-20 ${
                  show === "4" ? "hidden" : "block"
                }`}
              >
                Video <br /> Production
              </li>
              <div className={`w-20 h-20  ${show === "4" ? "block" : "hidden"}`}>
                <Image
                width={200} height={200}
                 src="/Images/navGif/VP.gif"
                  alt="4"
                  className={`flip w-full h-20 object-cover ${show === "4" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 5 */}
            <Link
              href={"/web-development"}
              onMouseEnter={() => handleMouseEnter("5")}
              onClick={handleMenu}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto mx-auto"
            >
              <li
                className={`heading text-[12px] font-bungee-inline text-center h-20 ${
                  show === "5" ? "hidden" : "block"
                }`}
              >
                Website <br /> Development
              </li>
              <div className={`w-20 h-20  ${show === "5" ? "block" : "hidden"}`}>
                <Image
                width={200} height={200}
                  src="/Images/navGif/WD.gif"
                  alt="5"
                  className={`flip w-full h-20 object-cover ${show === "5" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 6 */}
            <Link
              href={"/graphic-designing"}
              onMouseEnter={() => handleMouseEnter("6")}
              onClick={handleMenu}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto  mx-auto"
            >
              <li
                className={`heading text-[12px] font-bungee-inline text-center h-20 ${
                  show === "6" ? "hidden" : "block"
                }`}
              >
               Graphic <br /> Design
              </li>
              <div className={`w-20 h-20  ${show === "6" ? "block" : "hidden"}`}>
                <Image
                width={200} height={200}
                   src="/Images/navGif/GD.gif"
                  alt="6"
                  className={`flip w-full h-20 object-cover ${show === "6" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
      </ul>
</div>


          <div className="hidden xl:block">
            <ul className="text-[20px] xl:text-[60px] gap-4 flex flex-col overflow-x-hidden ">
              {["Home", "About", "Services", "Our Work", "Contact"].map(
                (item, index) => (
                  <Link 
                  href={`/${item.toLocaleLowerCase() === 'home' ? '' : item.toLocaleLowerCase() === 'our work' ? 'work' : item.toLocaleLowerCase()}`} 
                  key={index} 
                  onClick={handleMenu}
                  className=""
                >               
                  <li
                    className="stroke  cursor-pointer w-fit "
                    onMouseEnter={() => handleMouseHover(item)}
                    onMouseLeave={handleMouseHoverLeave}
                    
                  >
                    {/* If item is hovered, show marquee effect */}
                    {hovered === item ? (
                      <div className="animate-marquee text-[#833f3f] font-bold">
                        {Array(10).fill(item).join("  ")}{" "}
                        {/* Repeated text for marquee effect */}
                      </div>
                    ) : (
                      item // Simple text when not hovered
                    )}
                  </li>
                  </Link>
                )
              )}
            </ul>
          </div>

          {/* Image on bottom right when any item is hovered */}
          {hovered && (
              <Image
              width={200} height={200}
                src={images[hovered]} // Show the corresponding image based on the hovered item
                alt={hovered}
                className="image absolute bottom-2 right-4 w-80 h-80 object-cover"
              />
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
