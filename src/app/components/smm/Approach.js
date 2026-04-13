import Image from "next/image";
import React from "react";

function Why() {
  return (
    <div>
      <div className=" ">
        <div className="zigzag-box "></div>
        <div className="py-12 bg-[#cc5f4d]">
          <div className="text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72">
            <h3 className="bungeeHead my-4 text-white  text-3xl ">
              Our Approach to Social Media Marketing
            </h3>
            <h3 className="merriHead  text-white text-sm my-4 mx-4 lg:mx-12">
            At Digital Paaji, we think social media marketing should be approached uniquely. We are aware that your objectives and every business are distinct. Here’s how we collaborate with you to develop a winning approach.
            </h3>
          </div>

          <div className=" text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-12 ">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-40 h-24">
                  <Image
                          width={200}
        height={200}
                    src="/Images/smm/1.webp"
                    alt="img"
                    className=" w-full h-[100%] object-contain"
                  />
                </div>
                <h3
                  className="bungeeHead text-md my-2 text-white"
                  style={{ letterSpacing: "2px" }}
                >
                  Understanding Your Brand
                </h3>
                <div className="text-center">
                  <p className="servicePara text-gray-100 text-[14px]  text-justify">
                  In order to develop successful social media marketing tactics, Digital Paaji stresses how important it is to understand your brand. In order to pinpoint your target audience, we carry out in-depth research, examine their habits, tastes, and passions, and create customised messaging. In order to guarantee consistency across all platforms, we also examine your brand narrative and unique selling features. Through a thorough strategy, our experts create a unified online presence by matching your business goals with social media initiatives.{" "}
                  </p>
                </div>
              </div>
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-40 h-24">
                  <Image
                          width={200}
        height={200}
                    src="/Images/smm/2.webp"
                    alt="img"
                    className=" w-full h-[100%] object-contain"
                  />
                </div>
                <h3
                  className="bungeeHead text-md my-2 text-white"
                  style={{ letterSpacing: "2px" }}
                >
                 Creating Engaging Content
                </h3>
                <div className="text-center">
                  <p className="servicePara text-gray-100 text-[14px]  text-justify">
                  Digital Paaji concentrates on producing interesting material for tactics in social media marketing that work. To communicate the story of your brand, we employ a variety of mediums, including images, infographics, and films. We also promote community and credibility through the usage of user-generated content. Every piece of content is consistent with your brand’s voice and message plan, strengthening your connections and enhancing your identity. You can improve your content strategy by routinely examining engagement numbers.{" "}
                  </p>
                </div>
              </div>
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-40 h-24">
                  <Image
                          width={200}
        height={200}
                    src="/Images/smm/3.webp"
                    alt="img"
                    className=" w-full h-[100%] object-contain"
                  />
                </div>
                <h3
                  className="bungeeHead text-md my-2 text-white"
                  style={{ letterSpacing: "2px" }}
                >
                 Managing Your Social Media Accounts
                </h3>
                <div className="text-center">
                  <p className="servicePara text-gray-100 text-[14px]  text-justify">
                  All-inclusive social media management services are provided by Digital Paaji, guaranteeing that your accounts stay current, lively, and active. Our experts manage every aspect of it, including post creation, engagement tracking, metric analysis, and commenting. It’s important to maintain consistency, and routine audits can assist spot problem areas and spot new patterns. For improved outcomes, this data-driven strategy helps optimise future content and hone methods.{" "}
                  </p>
                </div>
              </div>
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-40 h-24">
                  <Image
                          width={200}
        height={200}
                    src="/Images/smm/4.webp"
                    alt="img"
                    className=" w-full h-[100%] object-contain"
                  />
                </div>
                <h3
                  className="bungeeHead text-md my-2 text-white"
                  style={{ letterSpacing: "2px" }}
                >
                 Running Targeted Ads
                </h3>
                <div className="text-center">
                  <p className="servicePara text-gray-100 text-[14px]  text-justify">
                  With an emphasis on audience analysis, captivating creatives, and the use of several formats, Digital Paaji is an expert in creating social media advertising campaigns that are effective. To maximise ad success, we employ A/B testing techniques, and keep a careful eye on campaigns to determine their efficacy. Through the use of tailored adverts, Digital Paaji guarantees that the proper people see your message, increasing website traffic and conversion rates.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="text-center ">
              <button className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg ">
                Contact Now
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
