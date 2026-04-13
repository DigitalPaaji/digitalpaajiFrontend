import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function GraphicGallery({ allItems, initialTab, setFilter }) {
  // 1. Hierarchy matches serviceItems category names exactly
  const subCategories = [
    "Graphic",
    "Product Shoot",
    "Restraunt Food Shoot",
    "YouTube Thumbnails",
    "Visiting Cards",
    "Packaging Designs",
    // "Logo Designs"
  ];

  const [selectedAsset, setSelectedAsset] = useState(null);

  // Sync body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedAsset ? 'hidden' : 'unset';
  }, [selectedAsset]);

  // 2. CRITICAL: We find the current item based on the "initialTab" (the global filter)
  const currentItem = allItems.find(item => item.category === initialTab);

  const getModalVideoUrl = (url) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.includes('v=') ? url.split('v=')[1]?.split('&')[0] : url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1`;
    }
    return url;
  };

  return (
    <div className="w-full animate-in fade-in duration-700">
      {/* INTERNAL SUB-NAV */}
      <div className="flex flex-wrap gap-4 md:gap-8 mb-12 justify-center border-b border-white/10 pb-6">
        {subCategories.map((tab) => (
          <button
            key={tab}
            // 3. Update global filter so parent knows which category we are looking at
            onClick={() => setFilter(tab)} 
            className={`text-[11px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
              initialTab === tab ? "text-white" : "text-white/60 hover:text-white"
            }`}
          >
            {tab}
            {initialTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white animate-in slide-in-from-left duration-300" />
            )}
          </button>
        ))}
      </div>

      {/* GRID VIEW - Key={initialTab} forces the grid to refresh images when tab changes */}
      <div key={initialTab} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {currentItem?.gallery?.map((asset, index) => (
          <div
            key={`${initialTab}-${index}`}
            style={{ animationDelay: `${index * 50}ms` }}
            className="group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 fill-mode-both cursor-pointer"
            onClick={() => setSelectedAsset(asset)}
          >
            {asset.type === 'image' ? (
              <div className="w-full ">
                <img 
                  src={asset.url} 
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 object-contain object-top" 
                  alt="" 
                />
              </div>
            ) : (
              <div className="relative aspect-[9/16] bg-black">
                <video src={asset.url} className="w-full h-full object-cover" muted playsInline />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                   <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
                   </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MODAL (LIGHTBOX) */}
      {selectedAsset && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-xl p-6 bg-black/60 animate-in fade-in duration-300" onClick={() => setSelectedAsset(null)}>
          <button className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-[110] bg-white/10 p-2 rounded-full">
            <X size={32} />
          </button>
          <div className="relative h-full max-h-[85vh] p-4 md:p-12 animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            {selectedAsset.type === 'image' ? (
              <img src={selectedAsset.url} className="w-full h-full object-contain" alt="Enlarged" />
            ) : (
              <div className="w-full h-full aspect-[9/16]">
                <iframe src={getModalVideoUrl(selectedAsset.url)} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}