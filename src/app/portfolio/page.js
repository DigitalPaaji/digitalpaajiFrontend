"use client";
import { useState } from "react";
import Sidebar from "../components/portfolio/Sidebar";
import ProductGrid from "../components/portfolio/ProductGrid";

const serviceItems = [
 {
    id: 1,
    category: "AI Videos",
    coverImg: "/Images/portfolio/ai/cover.gif",
    gallery: [
    {type:"video",url:"https://www.youtube.com/embed/TpmoYQyJ2CQ",thumb:"ai1.webp"},
    // {type:"video",url:"https://www.youtube.com/embed/viqP3dH1uUY"},
    {type:"video",url:"https://www.youtube.com/embed/3DqIN3n3CO0", client:"ibanta",thumb:"ibnta1.webp"},
    {type:"video",url:"https://www.youtube.com/embed/tFGKkq4qOik", client:"ibanta",thumb:"ibnta2.webp"},
    {type:"video",url:"https://www.youtube.com/embed/JEh70PImLOM", client:"ibanta",thumb:"ibnta3.webp"},
    {type:"video",url:"https://www.youtube.com/embed/mHYycNYN954", client:"ibanta",thumb:"ibnta4.webp"},
    {type:"video",url:"https://www.youtube.com/embed/k5dYhWZDWiU", client:"fleetx",thumb:"fleetx1.webp"},
    {type:"video",url:"https://www.youtube.com/embed/YQ7cuNJwCQI", client:"fleetx",thumb:"fleetx2.webp"},
    ],
  },
  {
    id: 2,
    category: "Animation",
    coverImg: "/Images/portfolio/animation/cover.gif",
    gallery: [
      {type:"video",url:"https://www.youtube.com/embed/EUvXb7a6en8", thumb:"oasis.webp"},
      {type:"video",url:"https://www.youtube.com/embed/JUKXs1v7Y7E",thumb:"clarion1.webp"},
      {type:"video",url:"https://www.youtube.com/embed/t1Cb5dSz8-s",thumb:"oasis1.webp"},
      {type:"video",url:"https://www.youtube.com/embed/zzl9yiB2qqQ",thumb:"ibnta5.webp"},
      {type:"video",url:"https://www.youtube.com/embed/3iuLOyu6SFk",thumb:"shangz1.webp"},
      {type:"video",url:"https://www.youtube.com/embed/wrENWvcGpLM",thumb:"wedding1.webp"},
       {type:"video",url:"https://www.youtube.com/embed/WHcWzNiP40o",thumb:"ibnta6.webp"},

    ],
  },
  {
    id: 3,
    category: "Reels Creation",
    coverImg: "/Images/portfolio/reels/cover.gif",
    gallery: [
      //  {type:"video",url:"https://www.youtube.com/embed/uuxJIG1BdlQ"},
       {type:"video",url:"https://www.youtube.com/embed/wkzZgrQTddc"},
       {type:"video",url:"https://www.youtube.com/embed/cNCMM5vc_0k"},
       
       {type:"video",url:"https://www.youtube.com/embed/6jiW_UAvE38",thumb:"saajriwaj1.webp"},
      //  {type:"video",url:"https://www.youtube.com/embed/3CMHqcoftb0"},
       {type:"video",url:"https://www.youtube.com/embed/hleWBqF5F2M",thumb:"amber1.webp"},

    ],
  },

  {
    id: 4,
    category: "Product Shoot",
    coverImg: "/Images/work/ds2.jpeg",
    gallery: [
      { type: "image", url: "/Images/portfolio/graphic/product/ds2.jpeg" },
      { type: "image", url: "/Images/portfolio/graphic/product/25.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/11.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/5.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/12.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/23.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/24.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/product5.jpeg" },
      { type: "image", url: "/Images/portfolio/graphic/product/product4.jpeg" },
      { type: "image", url: "/Images/portfolio/graphic/product/product6.jpeg" },
      { type: "image", url: "/Images/portfolio/graphic/product/26.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/ds1.jpeg" },
    ],
  },
  {
    id: 5,
    category: "Visiting Cards",
    coverImg: "/Images/portfolio/visitingcard/3.webp",
    gallery: [
      { type: "image", url: "/Images/portfolio/graphic/label/11.webp" },
      { type: "image", url: "/Images/portfolio/graphic/visitingcard/1.webp" },
      { type: "image", url: "/Images/portfolio/graphic/visitingcard/2.webp" },
      { type: "image", url: "/Images/portfolio/graphic/visitingcard/5.webp" },
      { type: "image", url: "/Images/portfolio/graphic/visitingcard/4.webp" },
    ],
  },
  {
    id: 6,
    category: "Website Design UI/UX",
    coverImg: "/Images/portfolio/website/cover.webp",

    gallery: [
      { type: "image", url: "/Images/portfolio/website/1.webp" },
      { type: "image", url: "/Images/portfolio/website/7.webp" },
      { type: "image", url: "/Images/portfolio/website/8.webp" },
      { type: "image", url: "/Images/portfolio/website/9.webp" },
      { type: "image", url: "/Images/portfolio/website/10.webp" },
      { type: "image", url: "/Images/portfolio/website/11.webp" },
      { type: "image", url: "/Images/portfolio/website/12.webp" },
      { type: "image", url: "/Images/portfolio/website/13.webp" },
      { type: "image", url: "/Images/portfolio/website/2.webp" },
      { type: "image", url: "/Images/portfolio/website/3.webp" },
      { type: "image", url: "/Images/portfolio/website/4.webp" },
      { type: "image", url: "/Images/portfolio/website/5.webp" },
      { type: "image", url: "/Images/portfolio/website/6.webp" },
    ],
  },
  {
    id: 7,
    category: "Packaging Designs",
    coverImg: "/Images/portfolio/packaging/3.webp",
    gallery: [
      { type: "image", url: "/Images/portfolio/graphic/label/9.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/10.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/12.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/13.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/14.webp" },
      { type: "image", url: "/Images/portfolio/graphic/packaging/1.webp" },
      { type: "image", url: "/Images/portfolio/graphic/packaging/2.webp" },
      { type: "image", url: "/Images/portfolio/graphic/packaging/3.webp" },
      { type: "image", url: "/Images/portfolio/graphic/packaging/4.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/1.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/2.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/3.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/4.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/5.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/8.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/cover.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/label1.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/label2.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/label4.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/label5.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/label6.webp" },
    ],
  },

  {
    id: 9,
    category: "Ad Results(Marketing)",
    coverImg:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    gallery: [
      {
        type: "image",
        url: "/Images/portfolio/ad/1.webp",
      },
      {
        type: "image",
        url: "/Images/portfolio/ad/2.webp",
      },
      {
        type: "image",
        url: "/Images/portfolio/ad/3.webp",
      },

    ],
  },
  {
    id: 8,
    category: "Restraunt Food Shoot",
    coverImg: "/Images/work/Restaurants4.jpeg",
    gallery: [
      { type: "image", url: "/Images/portfolio/graphic/restraurant/0.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/18.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/19.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/20.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/Restaurants9.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/Restaurants8.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/1.gif" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/6.webp" },

    ],
  },
  {
    id: 10,
    category: "YouTube Thumbnails",
    coverImg: "/Images/portfolio/graphic/thumbnails/cover.webp",
    gallery: [
      {
        type: "image",
        url: "/Images/portfolio/graphic/thumbnails/1.webp",
      },
      {
        type: "image",
        url: "/Images/portfolio/graphic/thumbnails/2.webp",
      },  
      {
        type: "image",
        url: "/Images/portfolio/graphic/thumbnails/3.webp",
      },
      {
        type: "image",
        url: "/Images/portfolio/graphic/thumbnails/4.webp",
      },
      {
        type: "image",
        url: "/Images/portfolio/graphic/thumbnails/5.webp",
      },
    ],
  },

  {
    id: 11,
    category: "Graphic",
    coverImg: "/Images/work/1.gif",
    gallery: [
      { type: "image", url: "/Images/portfolio/graphic/food/3.webp" },
      { type: "image", url: "/Images/portfolio/graphic/food/Restaurants4.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/1.gif" },
      { type: "image", url: "/Images/portfolio/graphic/food/Restaurants3.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/0.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/18.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/19.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/20.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/6.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/Restaurants8.webp" },
      { type: "image", url: "/Images/portfolio/graphic/10.webp" },
      { type: "image", url: "/Images/portfolio/graphic/21.webp" },
      { type: "image", url: "/Images/portfolio/graphic/15.webp" },
      { type: "image", url: "/Images/portfolio/graphic/14.webp" },
      { type: "image", url: "/Images/portfolio/graphic/22.webp" },
      { type: "image", url: "/Images/portfolio/graphic/16.webp" },
      { type: "image", url: "/Images/portfolio/graphic/13.webp" },
      { type: "image", url: "/Images/portfolio/graphic/9.webp" },
      { type: "image", url: "/Images/portfolio/graphic/6.webp" },
    ],
  },
];

const categories = [
  "All",
  "AI Videos",
  "Reels Creation",
  "Animation",
  "Graphic", 
  "Website Design UI/UX",
  "Ad Results(Marketing)",
];
export default function AdminDashboard() {
  const [filter, setFilter] = useState("All");

  const filteredItems = serviceItems.filter(
    (item) => filter === "All" || item.category === filter,
  );

  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-[#cc5f4d] overflow-x-hidden font-sans">
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(237, 231, 219, 0.3);
          border-radius: 10px;
        }
      `}</style>

      <Sidebar
        categories={categories}
        activeFilter={filter}
        setFilter={setFilter}
      />

      <main className="relative z-20 flex-1 p-6 lg:p-12 lg:ml-64 lg:h-screen lg:overflow-y-auto transition-all duration-500">
        <header className="mb-10 lg:mb-16">
          <button
            onClick={() => setFilter("All")}
            className="text-[#ede7db]/70 text-[10px] lg:text-[12px] font-black uppercase tracking-[0.2em] hover:text-[#ede7db]"
          >
            Home / {filter === "All" ? "Creative Portfolio" : filter}
          </button>
          <div className="mt-4 flex items-baseline gap-4">
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-[#ede7db]">
              {filter === "All" ? "Work" : filter}
            </h1>
            <span className="text-[#ede7db] font-mono opacity-50 text-sm">
              ({filteredItems.length})
            </span>
          </div>
        </header>

      <ProductGrid
  items={filteredItems}
  allServiceItems={serviceItems} 
  setFilter={setFilter}
  isFiltered={filter}
/>
      </main>
    </div>
  );
}
