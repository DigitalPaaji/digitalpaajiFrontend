// ProductGrid.jsx
import CategoryView from "./CategoryView";
import GraphicGallery from "./GraphicGallery";
import GalleryView from "./GalleryView";

export default function ProductGrid({ items, setFilter, isFiltered, allServiceItems }) { // Add allServiceItems

  const graphicSubCategories = [
    "Graphic",
    "Product Shoot",
    "Restraunt Food Shoot",
    "YouTube Thumbnails",
    "Visiting Cards",
    "Packaging Designs"
  ];

  if (!isFiltered || isFiltered === "All") {
    return <CategoryView setFilter={setFilter} />;
  }

  // FIX: Pass the WHOLE array (allServiceItems) so the sub-tabs can find data
  if (graphicSubCategories.includes(isFiltered)) {
    return <GraphicGallery allItems={allServiceItems} initialTab={isFiltered} setFilter={setFilter} />;
  }

  const activeItem = items.find((item) => item.category === isFiltered);
  return <GalleryView item={activeItem} />;
}
// import { useState, useEffect } from 'react';
// import { X } from 'lucide-react';

// export default function ProductGrid({ items, setFilter, isFiltered }) {
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     if (selectedImage) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [selectedImage]);

//   const getFlexBasis = (index) => {
//     const patternIndex = index % 5;
//     if (patternIndex < 3) return 'lg:basis-[calc(33.333%-2rem)]';
//     return 'lg:basis-[calc(50%-2rem)]';
//   };


//   if (!isFiltered) {
//     return (
//       <div className="flex flex-wrap gap-8 lg:gap-12 justify-start animate-in fade-in duration-700">
//         {items.map((item, index) => (
//           <div
//             key={item.id}
//             className={`flex-grow flex-shrink-0 basis-full ${getFlexBasis(index)} group relative cursor-pointer mb-8`}
//             onClick={() => setFilter(item.category)}
//           >
//             <div className="relative overflow-hidden aspect-4/5 rounded-sm transition-all duration-500">
//               <img
//                 src={item.coverImg}
//                 alt={item.category}
//                 className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-black/20">
//                 <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white px-6 py-3">
//                   Explore Gallery
//                 </span>
//               </div>
//             </div>
//             <div className="mt-6 flex justify-between items-start text-[#ede7db]">
//               <h3 className="text-lg font-bold uppercase tracking-widest leading-none">
//                 {item.category}
//               </h3>
//               <div className="h-[1px] w-8 bg-[#ede7db]/30 mt-3 group-hover:w-16 transition-all duration-500"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="flex flex-col gap-32 pb-20">
//         {items.map((item) => (
//           <div key={item.id} className="w-full">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {item.gallery?.map((asset, index) => {
//                 const isWebsite = item.category === 'Website Design UI/UX';

//                 return (
//                   <div
//                     key={index}
//                     className="group overflow-hidden rounded-sm bg-black/10 self-start border border-white/5 cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
//                     // Inline style for staggered delay
//                     style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
//                     onClick={() => asset.type === 'image' && setSelectedImage(asset.url)}
//                   >
//                     {asset.type === 'image' ? (
//                       <div className={`relative w-full ${isWebsite ? 'h-auto' : 'aspect-[16/10]'}`}>
//                         <img
//                           src={asset.url}
//                           alt={`${item.title} detail ${index + 1}`}
//                           className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
//                         />
//                       </div>
//                     ) : (
//                       <div className="relative aspect-video lg:aspect-[4/3] bg-black">
//                         <video
//                           src={asset.url}
//                           controls
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* --- LIGHTBOX MODAL --- */}
//       {selectedImage && (
//         <div 
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-300"
//           onClick={() => setSelectedImage(null)}
//         >
//           <button 
//             className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
//             onClick={() => setSelectedImage(null)}
//           >
//             <X size={48} strokeWidth={1} />
//           </button>

//           <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300">
//             <img
//               src={selectedImage}
//               alt="Enlarged view"
//               className="max-w-full max-h-full object-contain"
//               onClick={(e) => e.stopPropagation()}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }