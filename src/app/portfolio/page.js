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
    coverImg: '/Images/portfolio/animation/cover.gif',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 3, 
    category: 'Reels Creation', 
    coverImg: '/Images/portfolio/reels/cover.gif',
    gallery: [
      { type: 'video', url: '/videos/streetwear-edit.mp4' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200' }
    ]
  },

   { 
    id: 4, 
    category: 'Product Shoot', 
    coverImg: '/Images/work/ds2.jpeg',
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
    id: 5, 
    category: 'Visiting Cards', 
    coverImg: '/Images/portfolio/visitingcard/3.webp',
    gallery: [
      {type:"image",url:"/Images/portfolio/visitingcard/1.webp"},
         {type:"image",url:"/Images/portfolio/visitingcard/2.webp"},
          {type:"image",url:"/Images/portfolio/visitingcard/3.webp"},
         {type:"image",url:"/Images/portfolio/visitingcard/4.webp"},
       ]
  },
    { 
    id: 6, 
    category: 'Website Design UI/UX', 
       coverImg: '/Images/portfolio/website/cover.webp',

    gallery: [
      { type: 'image', url: '/Images/portfolio/website/1.webp' }, // Main Full Page
      { type: 'image', url: '/Images/portfolio/website/2.webp' },
      { type: 'image', url: '/Images/portfolio/website/3.webp' },
      { type: 'image', url: '/Images/portfolio/website/4.webp' },
      { type: 'image', url: '/Images/portfolio/website/5.webp' },
          { type: 'image', url: '/Images/portfolio/website/6.webp' }, 
          { type: 'image', url: '/Images/portfolio/website/royal-palm.webp' }, 
 
      { type: 'image', url: '/Images/portfolio/website/7.webp' },
    
    ]
  },
  { 
    id: 7, 
    category: 'Packaging Designs', 
    coverImg: '/Images/portfolio/packaging/3.webp',
    gallery: [
      { type: 'image', url: '/Images/portfolio/packaging/1.webp' },
      { type: 'image', url: '/Images/portfolio/packaging/2.webp' },
      { type: 'image', url: '/Images/portfolio/packaging/3.webp' },
      { type: 'image', url: '/Images/portfolio/packaging/4.webp' },
      { type: 'image', url: '/Images/portfolio/packaging/5.webp' },
      { type: 'image', url: '/Images/packaging/1.webp' },
      { type: 'image', url: '/Images/packaging/2.webp' },
      { type: 'image', url: '/Images/packaging/3.webp' },
      { type: 'image', url: '/Images/packaging/4.webp' },
    ]
  },

  { 
    id: 8, 
    category: 'Restraunt Food Shoot', 
    coverImg: '/Images/work/Restaurants4.jpeg',
    gallery: [
      { type: 'image', url: '/Images/work/2.webp' },
       { type: 'image', url: '/Images/work/3.webp' },
         { type: 'image', url: '/Images/work/6.webp' },
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
    coverImg: '/Images/work/Restaurants5.jpeg',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  
  { 
    id: 11,    
    category: 'Graphic', 
    coverImg: '/Images/work/others2.jpeg',
    gallery: [
      { type: 'image', url: '/Images/work/4.webp' },
          { type: 'image', url: '/Images/work/5.webp' },
      { type: 'image', url: '/Images/work/others2.jpeg' },
      { type: 'image', url: '/Images/work/others3.jpeg' },
      { type: 'image', url: '/Images/work/others4.jpeg' },
        { type: 'image', url: '/Images/work/product6.jpeg' },
         { type: 'image', url: '/Images/graphic/5.webp' },


                 { type: 'image', url: '/Images/graphic/7.webp' },
        { type: 'image', url: '/Images/graphic/8.webp' },
        { type: 'image', url: '/Images/graphic/1.webp' },
        { type: 'image', url: '/Images/graphic/2.webp' },
         { type: 'image', url: '/Images/graphic/3.webp' },
      

        { type: 'image', url: '/Images/graphic/4.webp' },
         { type: 'image', url: '/Images/graphic/9.webp' },
       
         { type: 'image', url: '/Images/graphic/6.webp' },
      
        
      

    
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
