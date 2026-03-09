"use client";
import { useState } from 'react';
import Sidebar from '../components/portfolio/Sidebar';
import ProductGrid from '../components/portfolio/ProductGrid';

const serviceItems = [
  // --- AI & MOTION ---
  { 
    id: 1, 
    category: 'AI Videos', 
    title: 'Neural Style Transfer Reel', 
    coverImg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1677442135703-1787eea5cecc?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 2, 
    category: 'Animation', 
    title: '2D Explainer For FinTech', 
    coverImg: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 3, 
    category: 'Reels Creation', 
    title: 'Streetwear Cinematic Edit', 
    coverImg: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'video', url: '/videos/streetwear-edit.mp4' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  
  // --- DESIGN & UI/UX ---
  { 
    id: 4, 
    category: 'Website Design UI/UX', 
    title: 'Fleetx Logistics Platform', 
       coverImg: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',

    gallery: [
      { type: 'image', url: '/Images/portfolio/website/fleetxlogistics.webp' }, // Main Full Page
      { type: 'image', url: '/Images/portfolio/website/fleetx-dashboard.webp' }, // Inner Screen 1
      { type: 'image', url: '/Images/portfolio/website/fleetx-mobile.webp' }    // Inner Screen 2
    ]
  },
  { 
    id: 5, 
    category: 'Visiting Cards', 
    title: 'Minimalist Letterpress Cards', 
    coverImg: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 6, 
    category: 'Packaging Designs', 
    title: 'Organic Skincare Line', 
    coverImg: 'https://images.unsplash.com/photo-1605615807251-1964f6916c60?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'image', url: '/Images/portfolio/packaging/1.webp' },
      { type: 'image', url: '/Images/portfolio/packaging/2.webp' },
      { type: 'image', url: '/Images/portfolio/packaging/3.webp' },
      { type: 'image', url: '/Images/portfolio/packaging/4.webp' },
      { type: 'image', url: '/Images/portfolio/packaging/5.webp' },
    ]
  },
  
  // --- PHOTOGRAPHY ---
  { 
    id: 7, 
    category: 'Product Shoot', 
    title: 'Technical Watch Macro', 
    coverImg: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
     gallery: [
      { type: 'image', url: '/Images/work/product1.jpeg' },
      { type: 'image', url: '/Images/work/product5.jpeg' },
      { type: 'image', url: '/Images/work/product2.jpeg' },
      { type: 'image', url: '/Images/work/product3.jpeg' },
      { type: 'image', url: '/Images/work/ds1.jpeg' },
      { type: 'image', url: '/Images/work/ds2.jpeg' }
    ]
  },
  { 
    id: 8, 
    category: 'Restraunt Food Shoot', 
    title: 'Gourmet Plating Series', 
    coverImg: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'image', url: '/Images/work/Restaurants4.jpeg' },
      { type: 'image', url: '/Images/work/Restaurants5.jpeg' },
      { type: 'image', url: '/Images/work/Restaurants6.jpeg' },
      { type: 'image', url: '/Images/work/Restaurants7.jpeg' },
      { type: 'image', url: '/Images/work/Restaurants8.jpeg' },
      { type: 'image', url: '/Images/work/Restaurants9.jpeg' },
      { type: 'image', url: '/Images/work/Restaurants1.jpeg' },
      { type: 'image', url: '/Images/work/Restaurants2.jpeg' },
      { type: 'image', url: '/Images/work/Restaurants3.jpeg' },
      { type: 'image', url: '/Images/work/2.webp' }
    ]
  },
  
  // --- MARKETING & SOCIAL ---
  { 
    id: 9, 
    category: 'Ad Results(Marketing)', 
    title: 'Meta Ads ROAS Showcase', 
    coverImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 10, 
    category: 'YouTube Thumbnails', 
    title: 'Tech Review Click-Magnet', 
    coverImg: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 11, 
    category: 'Insta Reel Designs', 
    title: 'Dynamic Kinetic Typography', 
    coverImg: 'https://images.unsplash.com/photo-1611162618071-b39a2dd7d5ef?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'video', url: '/videos/kinetic-typo.mp4' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
// --- GRAPHIC / EDITORIAL (The specific one you asked for) ---
  { 
    id: 12, 
    category: 'Graphic', 
    title: 'High-End Editorial Layout', 
    coverImg: '/Images/work/others2.jpeg',
    gallery: [
      { type: 'image', url: '/Images/work/others2.jpeg' },
      { type: 'image', url: '/Images/work/others3.jpeg' },
      { type: 'image', url: '/Images/work/others4.jpeg' },
      { type: 'image', url: '/Images/work/product6.jpeg' }
    ]
  },

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
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-[#cc5f4d] overflow-x-hidden font-sans">
      <style jsx global>{`
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(237, 231, 219, 0.3); border-radius: 10px; }
      `}</style>

      <Sidebar categories={categories} activeFilter={filter} setFilter={setFilter} />

      <main className="relative z-20 flex-1 p-6 lg:p-12 lg:ml-64 lg:h-screen lg:overflow-y-auto transition-all duration-500">
        <header className="mb-10 lg:mb-16">
          <button 
            onClick={() => setFilter('All')}
            className="text-[#ede7db]/70 text-[10px] lg:text-[12px] font-black uppercase tracking-[0.2em] hover:text-[#ede7db]"
          >
            Home / {filter === 'All' ? 'Creative Portfolio' : filter}
          </button>
          <div className="mt-4 flex items-baseline gap-4">
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-[#ede7db]">
              {filter === 'All' ? 'Work' : filter}
            </h1>
            <span className="text-[#ede7db] font-mono opacity-50 text-sm">({filteredItems.length})</span>
          </div>
        </header>

        {/* Passing the filter state to handle layout switching */}
        <ProductGrid items={filteredItems} setFilter={setFilter} isFiltered={filter !== 'All'} />
      </main>
    </div>
  );
}



// "use client";
// import { useState } from 'react';
// import Sidebar from '../components/portfolio/Sidebar';
// import ProductGrid from '../components/portfolio/ProductGrid';


// const serviceItems = [
//   // --- AI & MOTION ---
//   { id: 1, category: 'AI Videos', title: 'Neural Style Transfer Reel', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' },
//   { id: 2, category: 'Animation', title: '2D Explainer For FinTech', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' },
//   { id: 3, category: 'Reels Creation', title: 'Streetwear Cinematic Edit', img: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&q=80&w=800' },
  
//   // --- DESIGN & UI/UX ---
//   { id: 4, category: 'Website Design UI/UX', title: 'E-commerce Luxury Interface', img: '/Images/portfolio/website/fleetxlogistics.webp' },
//   { id: 5, category: 'Visiting Cards', title: 'Minimalist Letterpress Cards', img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800' },
//   { id: 6, category: 'Packaging Designs', title: 'Organic Skincare Line', img: 'https://images.unsplash.com/photo-1605615807251-1964f6916c60?auto=format&fit=crop&q=80&w=800' },
  
//   // --- PHOTOGRAPHY ---
//   { id: 7, category: 'Product Shoot', title: 'Technical Watch Macro', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
//   { id: 8, category: 'Restraunt Food Shoot', title: 'Gourmet Plating Series', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800' },
  
//   // --- MARKETING & SOCIAL ---
//   { id: 9, category: 'Ad Results(Marketing)', title: 'Meta Ads ROAS Showcase', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
//   { id: 10, category: 'YouTube Thumbnails', title: 'Tech Review Click-Magnet', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800' },
//   { id: 11, category: 'Insta Reel Designs', title: 'Dynamic Kinetic Typography', img: 'https://images.unsplash.com/photo-1611162618071-b39a2dd7d5ef?auto=format&fit=crop&q=80&w=800' },
//   { id: 12, category: 'Graphic', title: 'High-End Editorial Layout', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800' },
// ];

// const categories = [
//   'All', 
//   'AI Videos', 
//   'Reels Creation', 
//   'Animation', 
//   'Graphic', 
//   'Product Shoot', 
//   'Restraunt Food Shoot', 
//   'Website Design UI/UX', 
//   'Ad Results(Marketing)', 
//   'YouTube Thumbnails', 
//   'Visiting Cards', 
//   'Packaging Designs', 
//   'Insta Reel Designs'
// ];
// export default function AdminDashboard() {
//   const [filter, setFilter] = useState('All');

//   const filteredItems = serviceItems.filter(
//     (item) => filter === 'All' || item.category === filter
//   );

//   return (
//     /* We change overflow-hidden to overflow-y-auto on mobile */
//     <div className="relative flex flex-col lg:flex-row min-h-screen bg-[#cc5f4d] overflow-x-hidden">
      
//       {/* Global Scrollbar Styles */}
//       <style jsx global>{`
//         ::-webkit-scrollbar { width: 5px; }
//         ::-webkit-scrollbar-track { background: transparent; }
//         ::-webkit-scrollbar-thumb {
//           background: rgba(237, 231, 219, 0.3);
//           border-radius: 10px;
//         }
//         * {
//           scrollbar-width: thin;
//           scrollbar-color: rgba(237, 231, 219, 0.3) transparent;
//         }
//       `}</style>

//       {/* Background Overlays */}
//       <div className="pointer-events-none fixed inset-0 z-10 opacity-[0.15] mix-blend-soft-light" 
//            style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")` }} />
//       <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_100%)]" />

//       {/* Sidebar Component */}
//       <Sidebar 
//         categories={categories}
//         activeFilter={filter}
//         setFilter={setFilter}
//         onLogout={() => console.log("Logout")}
//       />

//       {/* Main Content Area */}
//       {/* lg:ml-64: Only pushes content on desktop. lg:h-screen lg:overflow-y-auto: Independent scroll on desktop. */}
//       <main className="relative z-20 flex-1 p-6 lg:p-12 lg:ml-64 lg:h-screen lg:overflow-y-auto">
//         <header className="mb-10 lg:mb-16 text-center lg:text-left">
//           <span className="text-[#ede7db]/70 text-[10px] lg:text-[12px] font-black uppercase tracking-[0.2em]">
//             Home / Creative Portfolio
//           </span>
//           <div className="mt-4 flex flex-col lg:flex-row items-center lg:items-baseline gap-2 lg:gap-4">
//             <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-[#ede7db]">
//               {filter === 'All' ? 'Work' : filter}
//             </h1>
//             <span className="text-[#ede7db] font-mono opacity-50 text-sm">({filteredItems.length})</span>
//           </div>
//         </header>

//         <ProductGrid items={filteredItems} setFilter={setFilter} />
//       </main>
//     </div>
//   );
// }