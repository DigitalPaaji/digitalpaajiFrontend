"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Services() {
  const [show, setShow] = useState(null);

  const handleMouseEnter = (elem) => setShow(elem);
  const handleMouseLeave = () => setShow(null);
  return (
    <div className="mx-12 lg:mx-32 xl:mx-60 ">
      <div className="text-center">
        <h3 className="merriHead text-black text-xl xl:text-2xl">Services</h3>
      </div>
      <div className=" text-center">
        <h3 className="bungeeHead my-12 text-[#cc5f4d]  text-[30px] xl:text-[40px]">
          Crafting Compelling Content
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          <div className="border border-black " data-aos="slide-up" data-aos-delay={'100'}>
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Digital Marketing</h3>
            </div>
            <div className="my-4">
              <div className="flex overflow-hidden h-[260px]">
                <div className="mx-auto  w-[14rem] h-40">
                  <Link
                    href={"/digital-marketing"}
                    onMouseEnter={() => handleMouseEnter("1")}
                    onMouseLeave={handleMouseLeave}
                    className=""
                  >
                    <li
                      className={`heading text-[11px] font-bungee-inline text-center ${
                        show === "1" ? "hidden" : "block"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/DM.webp"
                        alt="img"
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "1" ? "block" : "hidden"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/navGif/DM.gif"
                        alt="1"
                        className={`w-full h-auto object-cover ${
                          show === "1" ? "block" : "hidden"
                        }`}
                      />
                      {/* <Image width={200} height={200}
                        src="/Images/services/hand.gif"
                        alt="1"
                        className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover ${
                          show === "1" ? "block" : "hidden"
                        }`}
                      /> */}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  To increase website traffic and your brand’s online
                  visibility, Digital Paaji provides digital marketing services.
                  We employ content marketing, PPC advertising, and email
                  marketing techniques, utilising data analytics to create
                  campaigns that appeal to your target market. In order to
                  create individualised experiences and streamline procedures,
                  our experts employed sophisticated marketing automation
                  systems. For the best outcomes, we make data-driven
                  adjustments based on ongoing campaign performance monitoring.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <Link
                  href={"/digital-marketing"}
                  className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg "
                >
                  Get Service
                </Link>
                <Link
                  href={"/digital-marketing"}
                  className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg "
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="slide-up" data-aos-delay={'200'}>
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">
                Social Media marketing
              </h3>
            </div>
            <div className="my-4">
              <div className="flex overflow-hidden h-[260px]">
                <div className="mx-auto  w-[14rem] h-40">
                  <Link
                    href={"/social-media-marketing"}
                    onMouseEnter={() => handleMouseEnter("2")}
                    onMouseLeave={handleMouseLeave}
                    className=""
                  >
                    <li
                      className={`heading text-[11px] font-bungee-inline text-center ${
                        show === "2" ? "hidden" : "block"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/1.webp"
                        alt="img"
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "2" ? "block" : "hidden"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/navGif/SMM.gif"
                        alt="2"
                        className={`w-full h-auto object-cover ${
                          show === "2" ? "block" : "hidden"
                        }`}
                      />
                      {/* <Image width={200} height={200}
                        src="/Images/services/hand.gif"
                        alt="2"
                        className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover ${
                          show === "2" ? "block" : "hidden"
                        }`}
                      /> */}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  In order to engage consumers and increase company visibility,
                  Digital Paaji specialises in developing dynamic social media
                  marketing campaigns. Creating personalised content and
                  fostering sincere connections, we oversee profiles on social
                  media sites including Facebook, Instagram, Twitter, and
                  LinkedIn. To achieve the best outcomes, our experts conduct
                  audience behaviour and engagement metrics analysis while
                  implementing tailored advertising campaigns.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <Link
                  href={"/social-media-marketing"}
                  className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg "
                >
                  Get Service
                </Link>
                <Link
                  href={"/social-media-marketing"}
                  className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg "
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="slide-up" data-aos-delay={'300'}>
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Graphic designing</h3>
            </div>
            <div className="my-4">
              <div className="flex overflow-hidden h-[260px]">
                <div className="mx-auto  w-[14rem] h-40">
                  <Link
                    href={"/graphic-designing"}
                    onMouseEnter={() => handleMouseEnter("3")}
                    onMouseLeave={handleMouseLeave}
                    className=""
                  >
                    <li
                      className={`heading text-[11px] font-bungee-inline text-center ${
                        show === "3" ? "hidden" : "block"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/GD.webp"
                        alt="img"
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "3" ? "block" : "hidden"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/navGif/GD.gif"
                        alt="3"
                        className={`w-full h-auto object-cover ${
                          show === "3" ? "block" : "hidden"
                        }`}
                      />
                      {/* <Image width={200} height={200}
                        src="/Images/services/hand.gif"
                        alt="3"
                        className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover ${
                          show === "3" ? "block" : "hidden"
                        }`}
                      /> */}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  Digital Paaji provides graphic design services that can help
                  you convey the personality, values, and message of your
                  company. Digital graphics, marketing materials, brand
                  identities, and logos are all custom-designed by our creative
                  designers. We guarantee that each design component is
                  consistent with your vision and makes an impact. We assist
                  companies improve brand awareness by applying contemporary
                  design ideas.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <Link
                  href={"/graphic-designing"}
                  className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg "
                >
                  Get Service
                </Link>
                <Link
                  href={"/graphic-designing"}
                  className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg "
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="slide-up" data-aos-delay={'400'}>
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">SEO</h3>
            </div>
            <div className="my-4">
              <div className="flex overflow-hidden h-[260px]">
                <div className="mx-auto  w-[14rem] h-40">
                  <Link
                    href={"/search-engine-optimization"}
                    onMouseEnter={() => handleMouseEnter("4")}
                    onMouseLeave={handleMouseLeave}
                    className=""
                  >
                    <li
                      className={`heading text-[11px] font-bungee-inline text-center ${
                        show === "4" ? "hidden" : "block"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/SEO.webp"
                        alt="img"
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "4" ? "block" : "hidden"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/navGif/SEO.gif"
                        alt="4"
                        className={`w-full h-auto object-cover ${
                          show === "4" ? "block" : "hidden"
                        }`}
                      />
                      {/* <Image width={200} height={200}
                        src="/Images/services/hand.gif"
                        alt="4"
                        className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover ${
                          show === "4" ? "block" : "hidden"
                        }`}
                      /> */}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  SEO services are provided by Digital Paaji to increase a
                  website’s exposure and natural traffic. Our all-encompassing
                  strategy involves studying site structure and performance,
                  optimizing on-page features, and doing keyword research.
                  Additionally, we concentrate on link-building, creating solid
                  backlinks from reliable sites. Continuous monitoring is made
                  possible by our data-driven strategy, which also offers
                  insights and suggestions for additional optimization.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <Link
                  href={"/search-engine-optimization"}
                  className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg "
                >
                  Get Service
                </Link>
                <Link
                  href={"/search-engine-optimization"}
                  className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg "
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="slide-up" data-aos-delay={'500'}>
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Video Production</h3>
            </div>
            <div className="my-4">
              <div className="flex overflow-hidden h-[260px]">
                <div className="mx-auto  w-[14rem] h-40">
                  <Link
                    href={"/video-production"}
                    onMouseEnter={() => handleMouseEnter("5")}
                    onMouseLeave={handleMouseLeave}
                    className=""
                  >
                    <li
                      className={`heading text-[11px] font-bungee-inline text-center ${
                        show === "5" ? "hidden" : "block"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/VE.webp"
                        alt="img"
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "5" ? "block" : "hidden"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/navGif/VP.gif"
                        alt="5"
                        className={`w-full h-auto object-cover ${
                          show === "5" ? "block" : "hidden"
                        }`}
                      />
                      {/* <Image width={200} height={200}
                        src="/Images/services/hand.gif"
                        alt="5"
                        className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover ${
                          show === "5" ? "block" : "hidden"
                        }`}
                      /> */}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  With an emphasis on concept creation and post-production,
                  Digital Paaji provides video production services to assist
                  brands in telling their story. To draw viewers in and provide
                  captivating content, our experts employ top-notch graphics in
                  business presentations, explainer animations, social media
                  clips, and promotional films. Equipped with cutting-edge
                  equipment and editing tools, we collaborate with customers to
                  understand their goals, brand identity, and target audience.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <Link
                  href={"/video-production"}
                  className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg "
                >
                  Get Service
                </Link>
                <Link
                  href={"/video-production"}
                  className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg "
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="slide-up" data-aos-delay={'600'}>
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Web development</h3>
            </div>
            <div className="my-4">
              <div className="flex overflow-hidden h-[260px]">
                <div className="mx-auto  w-[14rem] h-40">
                  <Link
                    href={"/web-development"}
                    onMouseEnter={() => handleMouseEnter("6")}
                    onMouseLeave={handleMouseLeave}
                    className=""
                  >
                    <li
                      className={`heading text-[11px] font-bungee-inline text-center ${
                        show === "6" ? "hidden" : "block"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/1.webp"
                        alt="img"
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "6" ? "block" : "hidden"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/navGif/SMM.gif"
                        alt="6"
                        className={`w-full h-auto object-cover ${
                          show === "6" ? "block" : "hidden"
                        }`}
                      />
                      {/* <Image width={200} height={200}
                        src="/Images/services/hand.gif"
                        alt="6"
                        className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover ${
                          show === "6" ? "block" : "hidden"
                        }`}
                      /> */}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  E-commerce solutions, content management systems, and custom
                  website design are our specialties. Our team of talented
                  developers works with clients to comprehend their unique needs
                  and objectives. We put strong security measures in place and
                  give priority to responsive design, speed, and performance. To
                  guarantee that your website is current and functional, our
                  experts also provide continuing support and maintenance
                  services.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <Link
                  href={"/web-development"}
                  className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg "
                >
                  Get Service
                </Link>
                <Link
                  href={"/web-development"}
                  className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg "
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="slide-up" data-aos-delay={'700'}>
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">
                Software Development
              </h3>
            </div>
            <div className="my-4">
              <div className="flex overflow-hidden h-[260px]">
                <div className="mx-auto  w-[14rem] h-40">
                  <div
                    
                    onMouseEnter={() => handleMouseEnter("7")}
                    onMouseLeave={handleMouseLeave}
                    className=""
                  >
                    <li
                      className={`heading text-[11px] font-bungee-inline text-center ${
                        show === "7" ? "hidden" : "block"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/1.webp"
                        alt="img"
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "7" ? "block" : "hidden"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/navGif/SMM.gif"
                        alt="7"
                        className={`w-full h-auto object-cover ${
                          show === "7" ? "block" : "hidden"
                        }`}
                      />
                      {/* <Image width={200} height={200}
                        src="/Images/services/hand.gif"
                        alt="7"
                        className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover ${
                          show === "7" ? "block" : "hidden"
                        }`}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  In order to realise innovative business concepts through
                  specialised, reliable solutions, Digital Paaji provides
                  software development services. Building secure, scalable, and
                  effective software for a range of sectors is our team’s area
                  of expertise and specialty. Our thorough software development
                  process, which includes project understanding, planning,
                  development, testing, and deployment, guarantees that the
                  finished product will meet your goals.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <div
                  
                  className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg "
                >
                  Get Service
                </div>
                <div
                  
                  className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg "
                >
                  Learn More
                </div>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="slide-up" data-aos-delay={'800'}>
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">App Development</h3>
            </div>
            <div className="my-4">
              <div className="flex overflow-hidden h-[260px]">
                <div className="mx-auto  w-[14rem] h-40">
                  <div
                    
                    onMouseEnter={() => handleMouseEnter("8")}
                    onMouseLeave={handleMouseLeave}
                    className=""
                  >
                    <li
                      className={`heading text-[11px] font-bungee-inline text-center ${
                        show === "8" ? "hidden" : "block"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/1.webp"
                        alt="img"
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "8" ? "block" : "hidden"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/navGif/SMM.gif"
                        alt="8"
                        className={`w-full h-auto object-cover ${
                          show === "8" ? "block" : "hidden"
                        }`}
                      />
                      {/* <Image width={200} height={200}
                        src="/Images/services/hand.gif"
                        alt="8"
                        className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover ${
                          show === "8" ? "block" : "hidden"
                        }`}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  Digital Paaji provides web and mobile app development services
                  with an emphasis on brand experiences and user engagement. For
                  the iOS and Android platforms, we design user-friendly,
                  intuitive apps while assisting clients with concept,
                  wireframing, development, and launch. Our experts incorporate
                  contemporary elements that make your app stand out in the
                  crowded digital market, such as in-app purchases and real-time
                  updates.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <div
                  
                  className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg "
                >
                  Get Service
                </div>
                <div
                  
                  className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg "
                >
                  Learn More
                </div>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="slide-up" data-aos-delay={'900'}>
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Google Ads</h3>
            </div>
            <div className="my-4">
              <div className="flex overflow-hidden h-[260px]">
                <div className="mx-auto  w-[14rem] h-40">
                  <div
                    
                    onMouseEnter={() => handleMouseEnter("9")}
                    onMouseLeave={handleMouseLeave}
                    className=""
                  >
                    <li
                      className={`heading text-[11px] font-bungee-inline text-center ${
                        show === "9" ? "hidden" : "block"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/AD.webp"
                        alt="img"
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "9" ? "block" : "hidden"
                      }`}
                    >
                      <Image width={200} height={200}
                        src="/Images/AD.webp"
                        alt="9"
                        className={`zoom w-full h-auto object-cover ${
                          show === "9" ? "block" : "hidden"
                        }`}
                      />
                      {/* <Image width={200} height={200}
                        src="/Images/services/hand.gif"
                        alt="9"
                        className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover ${
                          show === "9" ? "block" : "hidden"
                        }`}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  To boost targeted traffic and conversions, Digital Paaji
                  provides Google Ads management services. Our qualified experts
                  develop and refine campaigns, optimising return on investment
                  through data-driven tactics, attractive ad text, and accurate
                  targeting. We carry out in-depth keyword research, create
                  unique ad creatives, and track results frequently to modify
                  bids and tactics.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <div
                  
                  className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg "
                >
                  Get Service
                </div>
                <div
                  
                  className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg "
                >
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
