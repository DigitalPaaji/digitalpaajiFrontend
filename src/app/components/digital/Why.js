import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Why() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Background Section */}
      <div
        style={{
          backgroundImage: "url(/Images/services/bg.webp)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative overflow-hidden w-full h-auto pt-24"
      >
        <div className="mx-8 xl:mx-60 relative">
          {/* Title */}
          <div className="text-center relative">
            <h3 className="bungeeHead my-8 text-[#e6e8eb] text-3xl md:text-5xl lg:text-7xl relative">
              Why Choose Digital Paaji?
            </h3>
            {/* GIF placed on the title */}
            <div
              className="absolute w-20 lg:w-28 h-28 lg:h-24  md:-left-40 "
              style={{
                top: `-24%`, // Center vertically on text
                transform: `translate(-60%, -60%) translateX(${
                  scrollY * 0.3
                }px)`, // Parallax effect for left-right movement
                transition: "transform 0.2s ease-out",
              }}
            >
              <Image width={200} height={200} className="w-full h-[100%] object-cover" src="/Images/services/run.gif" alt="Animated GIF" />
            </div>
          </div>
        </div>
        <div className="dense-zigzag -mb-[4px] "></div>
      </div>

      {/* Content Section */}
      <div className="bg-[#cc5f4d] py-12 px-4 lg:px-0">
        <div className="text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72">
          <h3 className="merriHead text-white text-sm my-4">
          For a variety of reasons, businesses select Digital Paaji over other digital marketing services because of its dedication to openness, personalization, and ongoing growth.
          </h3>
        </div>

        {/* Feature Grid */}
        <div className="text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {[
      {
        title: "Tailored Strategies:",
        subtitle: "Marketing Plans Designed for You",
        description:
"To meet the specific goals of every company, Digital Paaji provides customised marketing strategies. We determine which channels will yield the most outcomes by analysing target markets. Because of our emphasis on personalization, campaigns are developed with a specific goal in mind—to help businesses thrive by raising brand awareness, enhancing conversions, and generating leads. With this method, there is no room for speculation and the finest outcomes are guaranteed."
      },
      {
        title: "Results-Driven Approach:",
        subtitle: "Maximising ROI",
        description:
"Optimising campaigns for optimum Return on Investment (ROI) is the primary emphasis of results-driven marketing agency Digital Paaji. In order to make well-informed adjustments to paid advertising targeting, SEO efforts, and content strategies, we employ data-driven decision-making to monitor and analyse performance metrics. Our objective is to optimise outcomes and produce quantifiable results, guaranteeing that marketing expenditures yield benefits over the short and long terms."
      },
      {
        title: "Continuous Support:",
        subtitle: "Building Long-Term Partnerships",
        description:
          "Ongoing support for marketing campaigns and long-term client relationships are of utmost importance to Digital Paaji. Our experts provide timely performance reports and proactive suggestions to improve strategy. We adjust to shifting objectives and match marketing initiatives with present company requirements, setting themselves up for future expansion and guaranteeing the campaign’s success.",
      },
      {
        title: "Transparent Communication:",
        subtitle: "Keeping You Informed",
        description:
          "The success of Digital Paaji is credited to our dedication to open communication, making sure customers are aware of every stage of the procedure. Regular campaign performance reports are given, along with an explanation of how each initiative fits into the larger plan. When decisions are made collaboratively, tweaks or optimizations can be made based on feedback from clients. This transparency fosters confidence and creates trust.",
      },
    ].map((content, index) => (
      <div key={index}>
        <div className="my-2">
          <div className="my-4">
            <h3 className="bungeeHead text-lg text-white">{content.title}</h3>
            <h3 className="bungeeHead text-lg text-white">{content.subtitle}</h3>
          </div>
          <p className="merriHead text-sm text-white text-justify">
            {content.description}
          </p>
        </div>
      </div>
    ))}
  </div>
  {/* <div className="text-center mt-4">
    <Link
      href="tel:+918699640752"
      className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg"
    >
      Call Us
    </Link>
  </div> */}
</div>

      </div>
    </div>
  );
}

export default Why;
