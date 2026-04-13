import Image from "next/image";
import Link from "next/link";
import React from "react";

function Why() {
  return (
    <div>
      <div className=""
       style={{
      backgroundImage: "url(/Images/services/bg.webp)"    }}
      >
        <div className="py-12">
          <div className="text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72">
            <h3 className="bungeeHead my-4 text-white  text-3xl ">
            Our Design Process at Digital Paaji
            </h3>
            <h3 className="merriHead  text-white text-sm my-4 mx-4 lg:mx-12">
            The design method used by Digital Paaji is painstakingly organized to satisfy requirements and produce desired outcomes. We encourage creativity and communication at all levels, guaranteeing that great design is a team effort.
            </h3>
          </div>

          <div className=" text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-12 ">
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-40 h-24">
                  <Image
                          width={200}
        height={200}
                    src="/Images/gd/consultation.webp"
                    alt="img"
                    className=" w-full h-[100%] object-contain"
                  />
                </div>
                <h3
                  className="bungeeHead text-md my-2 text-white"
                  style={{ letterSpacing: "2px" }}
                >
                 1. Consultation
                </h3>
                <div className="text-center">
                  <p className="servicePara text-gray-100 text-[14px]  text-justify">
                  A comprehensive consultation that helps us understand your objectives and needs is the cornerstone of any successful design job. To make sure our design approach satisfies your demands, we hold discussions about your goals, vision, and target market. Every design portrays your distinct brand narrative thanks to this collaborative spirit{" "}
                  </p>
                </div>
              </div>
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-40 h-24">
                  <Image
                          width={200}
        height={200}
                    src="/Images/gd/research.webp"
                    alt="img"
                    className=" w-full h-[100%] object-contain"
                  />
                </div>
                <h3
                  className="bungeeHead text-md my-2 text-white"
                  style={{ letterSpacing: "2px" }}
                >
                  2. Research
                </h3>
                <div className="text-center">
                  <p className="servicePara text-gray-100 text-[14px]  text-justify">
                  To make informed design decisions and guarantee a visually stunning and strategically sound final result, our team thoroughly investigates your industry, target market, and rivals. We make distinctive, eye-catching designs based on real-world dynamics and spot chances by examining trends and best practices.{" "}
                  </p>
                </div>
              </div>
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-40 h-24">
                  <Image
                          width={200}
        height={200}
                    src="/Images/gd/concept.webp"
                    alt="img"
                    className=" w-full h-[100%] object-contain"
                  />
                </div>
                <h3
                  className="bungeeHead text-md my-2 text-white"
                  style={{ letterSpacing: "2px" }}
                >
                  3. Concept Development
                </h3>
                <div className="text-center">
                  <p className="servicePara text-gray-100 text-[14px]  text-justify">
                  Our designers work with your needs and research findings to create preliminary design concepts. Feedback on these graphic representations is requested in order to refine and explore potential creative directions. For the designs to reflect your vision and be shaped accordingly, your input is essential.{" "}
                  </p>
                </div>
              </div>
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-40 h-24">
                  <Image
                          width={200}
        height={200}
                    src="/Images/gd/revision.webp"
                    alt="img"
                    className=" w-full h-[100%] object-contain"
                  />
                </div>
                <h3
                  className="bungeeHead text-md my-2 text-white"
                  style={{ letterSpacing: "2px" }}
                >
                  4. Revisions
                </h3>
                <div className="text-center">
                  <p className="servicePara text-gray-100 text-[14px]  text-justify">
                  Based on your feedback, we make changes to our design process. Assuring responsiveness and collaboration, our goal is to match your vision with the finished product. We make necessary adjustments to our designs until you are satisfied, guaranteeing a work of art.{" "}
                  </p>
                </div>
              </div>
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-40 h-24">
                  <Image
                          width={200}
        height={200}
                    src="/Images/gd/finalize.webp"
                    alt="img"
                    className=" w-full h-[100%] object-contain"
                  />
                </div>
                <h3
                  className="bungeeHead text-md my-2 text-white"
                  style={{ letterSpacing: "2px" }}
                >
                  5. Finalization
                </h3>
                <div className="text-center">
                  <p className="servicePara text-gray-100 text-[14px]  text-justify">
                  We make final adjustments and make sure the design satisfies requirements for both digital and print media before moving on to the next phase. To guarantee aesthetically beautiful and useful designs across all platforms, we carry out a final quality check, produce high-resolution files, and alter formats to suit your demands.{" "}
                  </p>
                </div>
              </div>
              <div className="p-2 lg:p-8">
                <div className="mx-auto w-40 h-24">
                  <Image
                          width={200}
        height={200}
                    src="/Images/gd/delivery.webp"
                    alt="img"
                    className=" w-full h-[100%] object-contain"
                  />
                </div>
                <h3
                  className="bungeeHead text-md my-2 text-white"
                  style={{ letterSpacing: "2px" }}
                >
                  6. Delivery
                </h3>
                <div className="text-center">
                  <p className="servicePara text-gray-100 text-[14px]  text-justify">
                  The distribution of completed files marks the conclusion of our design process and guarantees that everything is prepared for use. We provide extra help with online platforms and marketing materials, answering inquiries and resolving problems. Beyond the conclusion of the project, we remain dedicated to establishing lasting partnerships.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="text-center ">
              <Link   href="tel:+918699640752" className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg ">
                Call Us
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
