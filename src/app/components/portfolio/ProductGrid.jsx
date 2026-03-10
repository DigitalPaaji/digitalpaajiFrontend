export default function ProductGrid({ items, setFilter, isFiltered }) {
  
  // Helper to determine width based on index for the "All" view
  // Row 1: 3 columns (31%), Row 2: 2 columns (48%), etc.
  const getFlexBasis = (index) => {
    const patternIndex = index % 5;
    if (patternIndex < 3) return 'lg:basis-[calc(33.333%-2rem)]'; // 3 in a row
    return 'lg:basis-[calc(50%-2rem)]'; // 2 in a row
  };
 
 
  if (!isFiltered) {
    return (
      <div className="flex flex-wrap gap-8 lg:gap-12 justify-start">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className={`flex-grow flex-shrink-0 basis-full ${getFlexBasis(index)} group relative cursor-pointer mb-8`}
            onClick={() => setFilter(item.category)}
          >
            <div className={`relative overflow-hidden rounded-sm transition-all duration-500 ${
              item.category === 'Website Design UI/UX' ? 'aspect-[16/10]  ' : 'aspect-[16/10] bg-black/20 '
            }`}>
              <img
                src={item.coverImg}
                alt={item.title}
                className={`w-full h-full ${
              item.category === 'Website Design UI/UX' ? ' object-contain ' : ' object-cover'
            }`}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity  backdrop-blur-[2px]">
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white px-4 py-2">View Category</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-start text-[#ede7db]">
              <div>
                <p className="text-lg font-bold uppercase tracking-[0.2em] op"></p>
               <h3 className="text-lg font-bold uppercase tracking-tight leading-none">{item.category}</h3> 
              </div>
              <div className="h-[1px] w-8 bg-[#ede7db]/30 mt-3 group-hover:w-12 transition-all"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }



return (
  <div className="flex flex-col gap-32 pb-20">
    {items.map((item) => (
      <div key={item.id} className="w-full">


  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {item.gallery?.map((asset, index) => {
   
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