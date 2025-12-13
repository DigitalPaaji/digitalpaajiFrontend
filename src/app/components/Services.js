"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const servicesData = [
  { id: "1", name: "DIGITAL MARKETING", link: "/digital-marketing", img: "/Images/DM.webp", gif: "/Images/navGif/DM.gif" },
  { id: "2", name: "SOCIAL MEDIA MARKETING", link: "/social-media-marketing", img: "/Images/1.webp", gif: "/Images/navGif/SMM.gif" },
  { id: "3", name: "GRAPHIC DESIGNING", link: "/graphic-designing", img: "/Images/GD.webp", gif: "/Images/navGif/GD.gif" },
  { id: "4", name: "SEO", link: "/search-engine-optimization", img: "/Images/SEO.webp", gif: "/Images/navGif/SEO.gif" },
  { id: "5", name: "VIDEO PRODUCTION", link: "/video-production", img: "/Images/VE.webp", gif: "/Images/navGif/VP.gif" },
  { id: "6", name: "WEB DEVELOPMENT", link: "/web-development", img: "/Images/WD.webp", gif: "/Images/navGif/WD.gif" },
];

function Services() {
  const [show, setShow] = useState(null);

  return (
    <div className="mx-12 lg:mx-24 xl:mx-60">
      <div className="text-center">
        <h1 className="merriHead text-[#302f2f] text-xl xl:text-2xl">
          Welcome to Digital Paaji - We mind your Business
        </h1>
        <p className="merriHead text-[#757474] mt-4 text-sm xl:text-[16px]">
        One of the top agencies with more than 15 years of expertise in
          digital marketing is Digital Paaji. For expansion and success, we
          think all companies should have access to the best marketing
          techniques. Web development, graphic design, SEO, video production,
          social media management, and digital marketing are all included in our
          extensive service offering. Utilising state-of-the-art marketing
          automation tools and professional insights, we successfully acquire
          and convert qualified prospects. For the purpose of optimising return
          on investment, our experts follow a data-driven strategy.
        </p>
      </div>
      
      <div className="text-center">
        <h2 className="bungeeHead my-12 text-[#cc5f4d] text-[30px] xl:text-[40px]">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {servicesData.map(({ id, name, link, img, gif }) => (
            <div key={id} className="border border-black" data-aos="fade-up" data-aos-delay={id * 200}>
              <div className="border-b border-black">
                <h3 className="services p-4 text-[#2e2d2d]">{name}</h3>
              </div>
              <div className="flex overflow-hidden h-[260px]">
                <div className="mx-auto w-[14rem] h-40">
                  <Link href={link} onMouseEnter={() => setShow(id)} onMouseLeave={() => setShow(null)}>
                    <li className={`heading text-[11px] font-bungee-inline text-center ${show === id ? "hidden" : "block"}`}>
                      <Image width={20} height={20} src={img} alt={name} className="w-full h-auto object-cover" />
                    </li>
                    <div className={`relative ${show === id ? "block" : "hidden"}`}>
                      <Image width={20} height={20} src={gif} alt={id} className="w-full h-auto object-cover" />
                      <Image width={20} height={20} src="/Images/services/hand.gif" alt="hand" className="absolute bottom-2 -right-9 md:-right-16 lg:-right-12 w-16 h-16 object-cover" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;




// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// function Services() {
//   const [show, setShow] = useState("5");

//   const handleMouseEnter = (elem) => setShow(elem);
//   const handleMouseLeave = () => setShow(null);
//   return (
//     <div className="mx-12 lg:mx-24 xl:mx-60 ">
//       <div className="text-center">
//         <h1 className="merriHead text-[#302f2f] text-xl xl:text-2xl">
//           Welcome to Digital Paaji - We mind your Business
//         </h1>
//         <p className="merriHead text-[#757474] mt-4 text-sm xl:text-[16px] ">
          // One of the top agencies with more than 15 years of expertise in
          // digital marketing is Digital Paaji. For expansion and success, we
          // think all companies should have access to the best marketing
          // techniques. Web development, graphic design, SEO, video production,
          // social media management, and digital marketing are all included in our
          // extensive service offering. Utilising state-of-the-art marketing
          // automation tools and professional insights, we successfully acquire
          // and convert qualified prospects. For the purpose of optimising return
          // on investment, our experts follow a data-driven strategy.
//         </p>
//       </div>
//       <div className=" text-center">
//         <h2 className="bungeeHead my-12 text-[#cc5f4d]  text-[30px] xl:text-[40px]">
//           OUR SERVICES
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
//           <div className="border border-black " data-aos="fade-up">
//             <div className="border-b border-black">
//               <h3 className="services p-4 text-[#2e2d2d]">DIGITAL MARKETING</h3>
//             </div>
//             <div className="flex overflow-hidden h-[260px]">
//               <div className="mx-auto  w-[14rem] h-40">
//                 <Link
//                   href={"/digital-marketing"}
//                   onMouseEnter={() => handleMouseEnter("1")}
//                   onMouseLeave={handleMouseLeave}
//                   className=""
//                 >
//                   <li
//                     className={`heading text-[11px] font-bungee-inline text-center ${
//                       show === "1" ? "hidden" : "block"
//                     }`}
//                   >
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/DM.webp"
//                       alt="img"
//                       className="w-full h-auto object-cover"
//                     />
//                   </li>
//                   <div
//                     className={` relative ${show === "1" ? "block" : "hidden"}`}
//                   >
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/navGif/DM.gif"
//                       alt="1"
//                       className={`w-full h-auto object-cover ${
//                         show === "1" ? "block" : "hidden"
//                       }`}
//                     />
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/services/hand.gif"
//                       alt="1"
//                       className={`absolute bottom-2 -right-9 md:-right-16 lg:-right-12 w-16 h-16 object-cover ${
//                         show === "1" ? "block" : "hidden"
//                       }`}
//                     />
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="border border-black " data-aos="fade-up" data-aos-delay={'200'}>
//             <div className="border-b border-black">
//               <h3 className="services p-4 text-[#2e2d2d]">
//                 SOCIAL MEDIA MARKETING
//               </h3>
//             </div>
//             <div className="flex overflow-hidden h-[260px]">
//               <div className="mx-auto  w-[14rem] h-40">
//                 <Link
//                   href={"/social-media-marketing"}
//                   onMouseEnter={() => handleMouseEnter("2")}
//                   onMouseLeave={handleMouseLeave}
//                   className=""
//                 >
//                   <li
//                     className={`heading text-[11px] font-bungee-inline text-center ${
//                       show === "2" ? "hidden" : "block"
//                     }`}
//                   >
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/1.webp"
//                       alt="img"
//                       className="w-full h-auto object-cover"
//                     />
//                   </li>
//                   <div
//                     className={` relative ${show === "2" ? "block" : "hidden"}`}
//                   >
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/navGif/SMM.gif"
//                       alt="2"
//                       className={`w-full h-auto object-cover ${
//                         show === "2" ? "block" : "hidden"
//                       }`}
//                     />
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/services/hand.gif"
//                       alt="2"
//                       className={`absolute bottom-2 -right-9 md:-right-16 lg:-right-12 w-16 h-16 object-cover${
//                         show === "2" ? "block" : "hidden"
//                       }`}
//                     />
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="border border-black " data-aos="fade-up" data-aos-delay={'400'}>
//             <div className="border-b border-black">
//               <h3 className="services p-4 text-[#2e2d2d]">GRAPHIC DESIGNING</h3>
//             </div>
//             <div className="flex overflow-hidden h-[260px]">
//               <div className="mx-auto  w-[14rem] h-40">
//                 <Link
//                   href={"/graphic-designing"}
//                   onMouseEnter={() => handleMouseEnter("3")}
//                   onMouseLeave={handleMouseLeave}
//                   className=""
//                 >
//                   <li
//                     className={`heading text-[11px] font-bungee-inline text-center ${
//                       show === "3" ? "hidden" : "block"
//                     }`}
//                   >
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/GD.webp"
//                       alt="img"
//                       className="w-full h-auto object-cover"
//                     />
//                   </li>
//                   <div
//                     className={` relative ${show === "3" ? "block" : "hidden"}`}
//                   >
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/navGif/GD.gif"
//                       alt="3"
//                       className={`w-full h-auto object-cover ${
//                         show === "3" ? "block" : "hidden"
//                       }`}
//                     />
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/services/hand.gif"
//                       alt="3"
//                       className={`absolute bottom-2 -right-9 md:-right-16 lg:-right-12 w-16 h-16 object-cover${
//                         show === "3" ? "block" : "hidden"
//                       }`}
//                     />
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="border border-black " data-aos="fade-up" data-aos-delay={'400'}>
//             <div className="border-b border-black">
//               <h3 className="services p-4 text-[#2e2d2d] ">SEO</h3>
//             </div>
//             <div className="flex overflow-hidden h-[260px]">
//               <div className="mx-auto  w-[14rem] h-40">
//                 <Link
//                   href={"/search-engine-optimization"}
//                   onMouseEnter={() => handleMouseEnter("4")}
//                   onMouseLeave={handleMouseLeave}
//                   className=""
//                 >
//                   <li
//                     className={`heading text-[11px] font-bungee-inline text-center ${
//                       show === "4" ? "hidden" : "block"
//                     }`}
//                   >
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/SEO.webp"
//                       alt="img"
//                       className="w-full h-auto object-cover"
//                     />
//                   </li>
//                   <div
//                     className={` relative ${show === "4" ? "block" : "hidden"}`}
//                   >
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/navGif/SEO.gif"
//                       alt="4"
//                       className={`w-full h-auto object-cover ${
//                         show === "4" ? "block" : "hidden"
//                       }`}
//                     />
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/services/hand.gif"
//                       alt="4"
//                       className={`absolute bottom-2 -right-9 md:-right-16 lg:-right-12 w-16 h-16 object-cover${
//                         show === "4" ? "block" : "hidden"
//                       }`}
//                     />
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="border border-black " data-aos="fade-up" data-aos-delay={'600'}>
//             <div className="border-b border-black">
//               <h3 className="services p-4 text-[#2e2d2d]">VIDEO PRODUCTION</h3>
//             </div>
//             <div className="flex overflow-hidden h-[260px]">
//               <div className="mx-auto  w-[14rem] h-40">
//                 <Link
//                   href={"/video-production"}
//                   onMouseEnter={() => handleMouseEnter("5")}
//                   onMouseLeave={handleMouseLeave}
//                   className=""
//                 >
//                   <li
//                     className={`heading text-[11px] font-bungee-inline text-center ${
//                       show === "5" ? "hidden" : "block"
//                     }`}
//                   >
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/VE.webp"
//                       alt="img"
//                       className="w-full h-auto object-cover"
//                     />
//                   </li>
//                   <div
//                     className={` relative ${show === "5" ? "block" : "hidden"}`}
//                   >
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/navGif/VP.gif"
//                       alt="5"
//                       className={`w-full h-auto object-cover ${
//                         show === "5" ? "block" : "hidden"
//                       }`}
//                     />
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/services/hand.gif"
//                       alt="5"
//                       className={`absolute bottom-2 -right-9 md:-right-16 lg:-right-12 w-16 h-16 object-cover ${
//                         show === "5" ? "block" : "hidden"
//                       }`}
//                     />
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="border border-black " data-aos="fade-up" data-aos-delay={'800'}>
//             <div className="border-b border-black">
//               <h3 className="services p-4 text-[#2e2d2d]">WEB DEVELOPMENT</h3>
//             </div>
//             <div className="flex overflow-hidden h-[260px]">
//               <div className="mx-auto  w-[14rem] h-40">
//                 <Link
//                   href={"/digital-marketing"}
//                   onMouseEnter={() => handleMouseEnter("6")}
//                   onMouseLeave={handleMouseLeave}
//                   className=""
//                 >
//                   <li
//                     className={`heading text-[11px] font-bungee-inline text-center ${
//                       show === "6" ? "hidden" : "block"
//                     }`}
//                   >
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/WD.webp"
//                       alt="img"
//                       className="w-full h-auto object-cover"
//                     />
//                   </li>
//                   <div
//                     className={` relative ${show === "6" ? "block" : "hidden"}`}
//                   >
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/navGif/WD.gif"
//                       alt="6"
//                       className={`w-full h-auto object-cover ${
//                         show === "6" ? "block" : "hidden"
//                       }`}
//                     />
//                     <Image
//                          width={20}
//                     height={20}
//                       src="/Images/services/hand.gif"
//                       alt="6"
//                       className={`absolute bottom-2 -right-9 md:-right-16 lg:-right-12 w-16 h-16 object-cover ${
//                         show === "6" ? "block" : "hidden"
//                       }`}
//                     />
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="text-center mt-12">
//           <Link
//             href="tel:+918699640752"
//             className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg "
//           >
//             Call Us Now
//           </Link>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default Services;
