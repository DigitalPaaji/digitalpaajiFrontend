import Link from "next/link";
import React from "react";

function Why() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/Images/services/bg.webp)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-auto  "
      >
        <div className=" py-16">
          <div className="text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72">
            <h3 className="bungeeHead  text-[#e6e8eb]  text-4xl">
              Why Choose Digital Paaji?
            </h3>
            <h3 className="merriHead  text-white text-sm mt-6">
              The distinctive way that our digital marketing agency approaches
              social media marketing sets it apart. We are the best option for
              your social media marketing needs because of our devoted
              assistance, astute strategic insights, and dedication to
              quantifiable results.
            </h3>
          </div>

          <div className=" text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
              <div className="p-2 lg:p-8">
                <div className="my-2">
                  <h3 className="bungeeHead text-left  text-lg text-white">
                    Expertise:
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-sm text-white text-justify">
                    A group of seasoned individuals with a wealth of social
                    media marketing expertise makes up Digital Paaji. We are
                    aware that using social media effectively necessitates using
                    strategic thinking, paying attention to trends, and
                    analysing audience behaviour. Our experts are not just
                    knowledgeable; they are also creative and flexible. We
                    create effective advertising strategies, research market
                    trends, and spot openings. Brands may get a competitive edge
                    and turn their social media platforms into effective
                    instruments for expansion and success by partnering with
                    Digital Paaji.
                  </p>
                </div>
              </div>
              <div className="p-2 lg:p-8">
                <div className="my-2">
                  <h3 className="bungeeHead text-left  text-lg text-white">
                  Customization:
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-sm text-white text-justify">
                  Digital Paaji is all about understanding your target market, brand identity, and specific business goals and customising social media marketing methods to fit them. In order to guarantee a constant message, we develop unique content calendars that correspond with audience preferences and marketing goals. Digital Paaji are able to adjust to changing demands and social media trends because of our adaptability. Our tailored strategy amplifies brand awareness, cultivates authentic audience participation, and skillfully conveys your brand narrative, propelling expansion and patronage.
                  </p>
                </div>
              </div>{" "}
              <div className="p-2 lg:p-8">
                <div className="my-2">
                  <h3 className="bungeeHead text-left  text-lg text-white">
                  Transparency:
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-sm text-white text-justify">
                  Transparency and trust are given top priority by Digital Paaji in their relationships for digital marketing. We deliver campaign performance, audience engagement, and marketing effectiveness reports on a regular basis. Budget allocation and return on investment are also provided by them. This openness fosters comprehension and cooperative decision-making, guaranteeing that marketing plans complement the objectives and vision of clients. Being a trusted partner in the digital realm, Digital Paaji is known for their honesty and responsibility.
                  </p>
                </div>
              </div>{" "}
              <div className="p-2 lg:p-8">
                <div className="my-2">
                  <h3 className="bungeeHead text-left  text-lg text-white">
                  Results-Driven:
                  </h3>
                </div>
                <div className="text-center">
                  <p className="merriHead text-sm text-white text-justify">
                  Brand exposure and conversion rates are just two examples of the quantifiable outcomes that Digital Paaji, a results-driven social media marketing company, focuses on. Employing a data-driven methodology, we consistently track campaign outcomes to pinpoint effective tactics. We remain flexible to adjust to the ever-changing social media market by setting clear goals and KPIs. What distinguishes us from rivals is the dedication to achieving outcomes.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="text-center ">
              <Link
                href="tel:+918699640752"
                className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg "
              >
                Call Us Now
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
