import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function GalleryView({ item }) {
  const [selectedAsset, setSelectedAsset] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedAsset ? 'hidden' : 'unset';
  }, [selectedAsset]);

  if (!item) return null;

  const getModalVideoUrl = (url) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      // Handles both standard watch URLs and Shorts
      const videoId = url.includes('v=') ? url.split('v=')[1]?.split('&')[0] : url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1`;
    }
    if (url.includes("instagram.com")) {
      return `${url}embed/`;
    }
    return url;
  };

  return (
    <>
      <div className="w-full pb-20">
        {/* Adjusted grid to 2-3-4 columns depending on screen size to accommodate slim vertical reels */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {item.gallery?.map((asset, index) => {
            return (
              <div
                key={index}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                className="group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700 cursor-pointer "
                onClick={() => setSelectedAsset(asset)}
              >
                {asset.type === 'image' ? (
                  <div className="w-full ">
                    <img 
                      src={asset.url} 
                      className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 object-cover" 
                      alt="" 
                    />
                  </div>
                ) : (
                  /* REEL SIZE FOR GRID */
                  <div className="relative aspect-[9/16] ">
                    {asset.url.includes("youtube.com") || asset.url.includes("instagram.com") ? (
                      <iframe src={asset.url} className="w-full h-full pointer-events-none scale-[1.02]" tabIndex="-1" />
                    ) : (
                      <video src={asset.url} className="w-full h-full object-cover" muted playsInline />
                    )}

                  
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL (VERTICAL REEL LIGHTBOX) */}
      {selectedAsset && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center  backdrop-blur-xl p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedAsset(null)}
        >
          <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white/40 hover:text-white transition-colors z-[110] bg-white/10 p-2 rounded-full">
            <X size={32} strokeWidth={1.5} />
          </button>

          {/* REEL CONTAINER IN MODAL */}
          <div 
            className="relative h-full max-h-[85vh] p-4 md:px-6 lg:p-24 animate-in zoom-in-95 duration-300 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedAsset.type === 'image' ? (
              <img
                src={selectedAsset.url}
                className="w-full h-full object-cover"
                alt="Enlarged"
              />
            ) : (
              <div className="w-full h-full">
                {selectedAsset.url.includes("youtube.com") || selectedAsset.url.includes("instagram.com") ? (
                  <iframe 
                    src={getModalVideoUrl(selectedAsset.url)} 
                    className="w-full h-full" 
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen 
                  />
                ) : (
                  <video 
                    src={selectedAsset.url} 
                    controls 
                    autoPlay 
                    loop 
                    className="w-full h-full object-cover" 
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}