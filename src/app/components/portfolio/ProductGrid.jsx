export default function ProductGrid({ items, setFilter, isFiltered }) {
  
  // Helper to determine width based on index for the "All" view
  // Row 1: 3 columns (31%), Row 2: 2 columns (48%), etc.
  const getFlexBasis = (index) => {
    const patternIndex = index % 5;
    if (patternIndex < 3) return 'lg:basis-[calc(33.333%-2rem)]'; // 3 in a row
    return 'lg:basis-[calc(50%-2rem)]'; // 2 in a row
  };

  // LAYOUT A: The Dynamic Flex Grid for "All" Tab
  if (!isFiltered) {
    return (
      <div className="flex flex-wrap gap-8 lg:gap-12 justify-start">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className={`flex-grow flex-shrink-0 basis-full ${getFlexBasis(index)} group relative cursor-pointer mb-8`}
            onClick={() => setFilter(item.category)}
          >
            <div className={`relative overflow-hidden bg-black/20 rounded-sm transition-all duration-500 ${
              item.category === 'Website Design UI/UX' ? 'aspect-[16/10]' : 'aspect-[16/10]'
            }`}>
              <img
                src={item.coverImg}
                alt={item.title}
                className="w-full h-full object-cover object-top grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white px-4 py-2">View Category</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-start text-[#ede7db]">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] opacity-60 mb-1">{item.category}</p>
                <h3 className="text-lg font-bold uppercase tracking-tight leading-none">{item.title}</h3>
              </div>
              <div className="h-[1px] w-8 bg-[#ede7db]/30 mt-3 group-hover:w-12 transition-all"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // LAYOUT B: Detailed Inner View (Flex Wrap with Auto Widths)

return (
  <div className="flex flex-col gap-32 pb-20">
    {items.map((item) => (
      <div key={item.id} className="w-full">


        {/* The 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {item.gallery?.map((asset, index) => {
            // Check if it's a website category for potential special handling
            const isWebsite = item.category === 'Website Design UI/UX';

            return (
              <div 
                key={index} 
                className="group overflow-hidden rounded-sm bg-black/10 self-start border border-white/5"
              >
                {asset.type === 'image' ? (
                  <div className={`relative w-full 
                  ${isWebsite ? 'h-auto' : ''}`}>
                    {/* item.category === 'Website Design UI/UX' ? 'aspect-[3/5]' : 'aspect-[16/10]' */}
                  
                    <img 
                      src={asset.url} 
                      alt={`${item.title} detail ${index + 1}`} 
                      className="w-full h-full  transition-transform duration-700 group-hover:scale-105" 
                    />
                    {/* Subtle Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                ) : (
                  <div className="relative aspect-video lg:aspect-[4/3] bg-black">
                    <video 
                      src={asset.url} 
                      controls 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
);
}
// export default function ProductGrid({ items, setFilter }) {
//   return (
//     <div className="columns-1 md:columns-2 2xl:columns-3 gap-12 space-y-12">
//       {items.map((item) => {
//         // Logic to determine if it's a "Tall" content type
//         const isTall = item.category === "Website Design UI/UX";

//         return (
//           <div 
//             key={item.id} 
//             className="break-inside-avoid group relative cursor-pointer"
//             onClick={() => setFilter(item.category)}
//           >
//             {/* Image Container with Dynamic Aspect Ratio */}
//             <div className={`relative overflow-hidden bg-black/20 rounded-sm transition-all duration-500
//               ${isTall ? 'aspect-[3/5]' : 'aspect-[16/10]'}
//             `}>
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full h-full object-cover object-top grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
//               />
              
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
//                  <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white px-4 py-2">
//                    View {item.category}
//                  </span>
//               </div>
//             </div>
            
//             <div className="mt-6 flex justify-between items-start">
//               <div>
//                 <p className="text-[9px] uppercase tracking-[0.2em] text-[#ede7db]/60 mb-1 group-hover:text-[#ede7db] transition-colors">
//                   {item.category}
//                 </p>
//                 <h3 className="text-lg font-bold uppercase tracking-tight text-[#ede7db]">
//                   {item.title}
//                 </h3>
//               </div>
//               <div className="h-[1px] w-8 bg-[#ede7db]/30 mt-3 group-hover:w-12 group-hover:bg-[#ede7db] transition-all"></div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
