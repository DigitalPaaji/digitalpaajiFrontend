"use client";
import { useState } from 'react';
import Sidebar from '../components/portfolio/Sidebar';
import ProductGrid from '../components/portfolio/ProductGrid';

const serviceItems = [

  { 
    id: 1, 
    category: 'AI Videos', 
    coverImg: '/Images/portfolio/ai/cover.gif',
    gallery: [
      { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1677442135703-1787eea5cecc?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 2, 
    category: 'Animation', 
    coverImg: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 3, 
    category: 'Reels Creation', 
    coverImg: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'video', url: '/videos/streetwear-edit.mp4' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  
  
  { 
    id: 4, 
    category: 'Website Design UI/UX', 
       coverImg: '/Images/portfolio/website/cover.webp',

    gallery: [
      { type: 'image', url: '/Images/portfolio/website/1.webp' }, // Main Full Page
      { type: 'image', url: '/Images/portfolio/website/2.webp' },
      { type: 'image', url: '/Images/portfolio/website/3.webp' },
      { type: 'image', url: '/Images/portfolio/website/4.webp' },
      { type: 'image', url: '/Images/portfolio/website/5.webp' },
          { type: 'image', url: '/Images/portfolio/website/6.webp' }, 
 
      { type: 'image', url: '/Images/portfolio/website/7.webp' },
    
    ]
  },
  { 
    id: 5, 
    category: 'Visiting Cards', 
    coverImg: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 6, 
    category: 'Packaging Designs', 
    coverImg: 'https://images.unsplash.com/photo-1605615807251-1964f6916c60?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'image', url: '/Images/portfolio/packaging/1.webp' },
      { type: 'image', url: '/Images/portfolio/packaging/2.webp' },
      { type: 'image', url: '/Images/portfolio/packaging/3.webp' },
      { type: 'image', url: '/Images/portfolio/packaging/4.webp' },
      { type: 'image', url: '/Images/portfolio/packaging/5.webp' },
    ]
  },

  { 
    id: 7, 
    category: 'Product Shoot', 
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
    coverImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 10, 
    category: 'YouTube Thumbnails', 
    coverImg: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 11, 
    category: 'Insta Reel Designs', 
    coverImg: 'https://images.unsplash.com/photo-1611162618071-b39a2dd7d5ef?auto=format&fit=crop&q=80&w=800',
    gallery: [
      { type: 'video', url: '/videos/kinetic-typo.mp4' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200' }
    ]
  },

  { 
    id: 12,    
    category: 'Graphic', 
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

        <ProductGrid items={filteredItems} setFilter={setFilter} isFiltered={filter !== 'All'} />
      </main>
    </div>
  );
}
