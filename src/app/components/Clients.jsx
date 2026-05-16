"use client";

import Image from "next/image";


export default function Clients() {
  const clients = [
    { name: "The Mad House", logo: "/logo/madhouse.webp" },
    { name: "Born16", logo: "/logo/born16.webp" },
    { name: "Nourish Mantra", logo: "/logo/nourish.webp" },
    { name: "Neemli Naturals", logo: "/logo/neemli.webp" },
    { name: "Secret Alchemist", logo: "/logo/wildwolf.webp" },
    { name: "Ayuvya", logo: "/logo/ayuvya.webp" },
    { name: "Softbird", logo: "/logo/softbird.png" },
    { name: "Ellement Co", logo: "/logo/ellementco.webp" },
  ];
  const allClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 overflow-hidden">
      <div className="mx-12 lg:mx-32 xl:mx-48">
        
<div className="text-center mb-16">
  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#cc5f4d] pb-2">
    Our Clients & Collaborations
  </span>

  <h2 className="text-3xl md:text-4xl font-medium mt-6">
    Trusted by <span className="italic">Growing Businesses & Brands</span>
  </h2>

  <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
    From digital marketing and SEO to website development, branding, and video production — Digital Paaji helps businesses build a strong digital presence and achieve measurable growth through creative, result-driven strategies.
  </p>
</div>
        
        <div className="relative">
          
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-gray-50 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-gray-50 to-transparent"></div>
          
          
          <div className="flex overflow-hidden">
            <div 
              className="flex whitespace-nowrap gap-6"
              style={{
                animation: 'marquee 30s linear infinite'
              }}
            >
              {allClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="shrink-0"
                >
                  <div className="p-6 w-[180px] h-[120px] flex items-center justify-center group hover:border-[#007e44]/20">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={140}
                      height={60}
                      className="object-contain max-h-15 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        div:hover > div > div[style*="animation"] {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}