import Image from "next/image";
import React from "react";

function Why() {
  return (
    <div>
      <div className=" ">
        <div className="zigzag-box "></div>
        <div className="py-16 bg-[#cc5f4d]">
          <div className="text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72">
            <h2
              className="bungeeHead my-4 text-white  text-3xl lg:text-5xl"
              style={{ fontWeight: "500" }}
            >
              Selecting Digital Paaji for web development Services Has Its
              Benefits
            </h2>
            <h3 className="merriHead  text-white text-sm my-4 mx-4 lg:mx-12 ">
              Working with the correct agency can make all the difference when
              it comes to SEO. We at Digital Paaji differentiate ourselves from
              the competition with a wide range of benefits. Here are a few of
              the main advantages of using us for your SEO requirements:
            </h3>
          </div>

          <div className=" text-center text-white mx-4 md:mx-12 lg:mx-32   my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  ">
              <div className=" ">
                <div className="p-2 lg:p-8">
                  <div className="p-4 flex items-center justify-start gap-3">
                    <div className="mx-auto w-32 h-auto">
                      <Image
                              width={200}
        height={200}
                        src="/Images/services/benefits1.webp"
                        alt="img"
                        className="zoom w-full h-[100%] object-cover"
                      />
                    </div>
                    <div className="">
                      <h3 className="bungeeHead text-base ">
                        Launch and Optimization
                      </h3>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="servicePara  text-sm  text-justify">
                      We launch the website to ensure a seamless transition
                      following thorough testing and quality verification.
                      Following launch, we track metrics, improve speed, and
                      strengthen SEO to improve user experience, boost search
                      engine rankings, and draw in organic visitors.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="p-2 lg:p-8">
                  <div className="p-4 flex items-center justify-start gap-3">
                    <div className="mx-auto w-32 h-auto">
                      <Image
                              width={200}
        height={200}
                        src="/Images/services/benefits2.webp"
                        alt="img"
                        className="zoom w-full h-auto object-cover"
                      />
                    </div>
                    <div className="">
                      <h3 className="bungeeHead text-base ">
                        
Custom Development
                      </h3>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="servicePara  text-sm  text-justify">
                    Front-end and back-end parts are coded during the development phase to guarantee cross-device and cross-screen responsiveness. There is also discussion of technical elements like CMS and databases. To defend against dangers, security measures are put in place. Throughout the entire procedure, transparency is upheld.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="p-2 lg:p-8">
                  <div className="p-4 flex items-center justify-start gap-3">
                    <div className="mx-auto w-32 h-auto">
                      <Image
                              width={200}
        height={200}
                        src="/Images/services/benefits3.webp"
                        alt="img"
                        className="zoom w-full h-auto object-cover"
                      />
                    </div>
                    <div className="">
                      <h3 className="bungeeHead text-base ">
                        
Exploration and Planning
                      </h3>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="servicePara  text-sm  text-justify">
                    Digital Paaji initiates web development projects with a discovery phase that entails detailed discussions about the company’s objectives, target market, and goals. This helps set deadlines, clearly define the project’s scope, and guarantee that the finished result satisfies business requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="p-2 lg:p-8">
                  <div className="p-4 flex items-center justify-start gap-3">
                    <div className="mx-auto w-32 h-auto">
                      <Image
                              width={200}
        height={200}
                        src="/Images/services/benefits1.webp"
                        alt="img"
                        className="zoom w-full h-auto object-cover"
                      />
                    </div>
                    <div className="">
                      <h3 className="bungeeHead text-base ">
                       
Design and Prototyping
                      </h3>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="servicePara  text-sm  text-justify">
                    We create wireframes for a website&apos;s structure and layout during the discovery phase and then concentrate on graphic design to improve user experience. Prototypes that are interactive are made to make sure they match your concept and to solicit feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
