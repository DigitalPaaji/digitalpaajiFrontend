"use client";
import React, { useState } from 'react';
import Sidebar from '../components/portfolio/Sidebar';
import ProductGrid from '../components/portfolio/ProductGrid';


const serviceItems = [
  // --- AI & MOTION ---
  { id: 1, category: 'AI Videos', title: 'Neural Style Transfer Reel', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Animation', title: '2D Explainer For FinTech', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Reels Creation', title: 'Streetwear Cinematic Edit', img: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&q=80&w=800' },
  
  // --- DESIGN & UI/UX ---
  { id: 4, category: 'Website Design UI/UX', title: 'E-commerce Luxury Interface', img: 'https://images.unsplash.com/photo-1581291518066-8e147672013d?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Visiting Cards', title: 'Minimalist Letterpress Cards', img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Packaging Designs', title: 'Organic Skincare Line', img: 'https://images.unsplash.com/photo-1605615807251-1964f6916c60?auto=format&fit=crop&q=80&w=800' },
  
  // --- PHOTOGRAPHY ---
  { id: 7, category: 'Product Shoot', title: 'Technical Watch Macro', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
  { id: 8, category: 'Restraunt Food Shoot', title: 'Gourmet Plating Series', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800' },
  
  // --- MARKETING & SOCIAL ---
  { id: 9, category: 'Ad Results(Marketing)', title: 'Meta Ads ROAS Showcase', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { id: 10, category: 'YouTube Thumbnails', title: 'Tech Review Click-Magnet', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800' },
  { id: 11, category: 'Insta Reel Designs', title: 'Dynamic Kinetic Typography', img: 'https://images.unsplash.com/photo-1611162618071-b39a2dd7d5ef?auto=format&fit=crop&q=80&w=800' },
  { id: 12, category: 'Graphic', title: 'High-End Editorial Layout', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800' },
];

const categories = [
  'All', 
  'AI Videos', 
  'Reels Creation', 
  'Animation', 
  'Graphic', 
  'Product Shoot', 
  'Restraunt Food Shoot', 
  'Website Design UI/UX', 
  'Ad Results(Marketing)', 
  'YouTube Thumbnails', 
  'Visiting Cards', 
  'Packaging Designs', 
  'Insta Reel Designs'
];
export default function AdminDashboard() {
  const [filter, setFilter] = useState('All');

  const filteredItems = serviceItems.filter(
    (item) => filter === 'All' || item.category === filter
  );

  return (
    /* We change overflow-hidden to overflow-y-auto on mobile */
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-[#cc5f4d] overflow-x-hidden">
      
      {/* Global Scrollbar Styles */}
      <style jsx global>{`
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb {
          background: rgba(237, 231, 219, 0.3);
          border-radius: 10px;
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(237, 231, 219, 0.3) transparent;
        }
      `}</style>

      {/* Background Overlays */}
      <div className="pointer-events-none fixed inset-0 z-10 opacity-[0.15] mix-blend-soft-light" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")` }} />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_100%)]" />

      {/* Sidebar Component */}
      <Sidebar 
        categories={categories}
        activeFilter={filter}
        setFilter={setFilter}
        onLogout={() => console.log("Logout")}
      />

      {/* Main Content Area */}
      {/* lg:ml-64: Only pushes content on desktop. lg:h-screen lg:overflow-y-auto: Independent scroll on desktop. */}
      <main className="relative z-20 flex-1 p-6 lg:p-12 lg:ml-64 lg:h-screen lg:overflow-y-auto">
        <header className="mb-10 lg:mb-16 text-center lg:text-left">
          <span className="text-[#ede7db]/70 text-[10px] lg:text-[12px] font-black uppercase tracking-[0.2em]">
            Home / Creative Portfolio
          </span>
          <div className="mt-4 flex flex-col lg:flex-row items-center lg:items-baseline gap-2 lg:gap-4">
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-[#ede7db]">
              {filter === 'All' ? 'Work' : filter}
            </h1>
            <span className="text-[#ede7db] font-mono opacity-50 text-sm">({filteredItems.length})</span>
          </div>
        </header>

        <ProductGrid items={filteredItems} />
      </main>
    </div>
  );
}


// "use client";
// import React, { useState } from 'react';
// import Sidebar from '../components/portfolio/Sidebar';
// import ProductGrid from '../components/portfolio/ProductGrid';

// const serviceItems = [
//   { id: 1, category: 'Graphic Designing', title: 'Brand Identity Concept', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800' },
//   { id: 2, category: 'YouTube Thumbnails', title: 'High-CTR Gaming Pack', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800' },
//   { id: 3, category: 'Reels Creation', title: 'Viral Fashion Edit', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800' },
//   { id: 4, category: 'Video Editing', title: 'Commercial Color Grade', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800' },
//   { id: 5, category: 'Digital Marketing', title: 'SaaS Growth Strategy', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
//   { id: 6, category: 'Graphic Designing', title: 'Minimalist Poster Series', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800' },
// ];

// const categories = ['All', 'Digital Marketing', 'YouTube Thumbnails', 'Reels Creation', 'Video Editing', 'Graphic Designing'];

// export default function AdminDashboard() {
//   const [filter, setFilter] = useState('All');

//   const filteredItems = serviceItems.filter(
//     (item) => filter === 'All' || item.category === filter
//   );

//   return (
//     <div className="relative flex min-h-screen bg-[#cc5f4d] overflow-hidden">
//       {/* Custom Scrollbar Styles */}
//       <style jsx global>{`
//         ::-webkit-scrollbar {
//           width: 5px;
//         }
//         ::-webkit-scrollbar-track {
//           background: transparent;
//         }
//         ::-webkit-scrollbar-thumb {
//           background: rgba(237, 231, 219, 0.3);
//           border-radius: 10px;
//         }
//         ::-webkit-scrollbar-thumb:hover {
//           background: rgba(237, 231, 219, 0.6);
//         }
//         /* Firefox */
//         * {
//           scrollbar-width: thin;
//           scrollbar-color: rgba(237, 231, 219, 0.3) transparent;
//         }
//       `}</style>

//       {/* Texture Overlay */}
//       <div 
//         className="pointer-events-none fixed inset-0 z-10 opacity-[0.15] mix-blend-soft-light" 
//         style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")` }}
//       />
      
//       {/* Background Gradient Detail */}
//       <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_100%)]" />

//       <Sidebar 
//         categories={categories}
//         activeFilter={filter}
//         setFilter={setFilter}
//       />

//       {/* Main Content Area - Overriding overflow-y to enable the custom scrollbar */}
//       <main className="relative z-20 ml-64 flex-1 p-12 h-screen overflow-y-auto overflow-x-hidden">
//         <header className="mb-16">
//           <span className="text-[#ede7db]/70 text-[12px] font-black uppercase tracking-[0.2em]">
//             Home / Creative Portfolio
//           </span>
//           <div className="mt-4 flex items-baseline gap-4">
//             <h1 className="text-6xl font-black uppercase tracking-tighter text-[#ede7db]">
//               {filter === 'All' ? 'Work' : filter}
//             </h1>
//             <span className="text-[#ede7db] font-mono opacity-50">({filteredItems.length})</span>
//           </div>
//         </header>

//         <ProductGrid items={filteredItems} />
//       </main>
//     </div>
//   );
// }