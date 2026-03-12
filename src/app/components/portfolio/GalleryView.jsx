import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function GalleryView({ item }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'unset';
  }, [selectedImage]);

  if (!item) return null;

  return (
    <>
      <div className="w-full pb-20">

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {item.gallery?.map((asset, index) => {
            const isWebsite = item.category === 'Website Design UI/UX';
            
            return (
              <div
                key={index}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                className="group relative overflow-hidden rounded-sm bg-black/10 animate-in fade-in slide-in-from-bottom-4 duration-700 cursor-pointer"
                onClick={() => asset.type === 'image' && setSelectedImage(asset.url)}
              >
                {asset.type === 'image' ? (
                  <div className={`w-full ${isWebsite ? 'h-auto' : 'h-auto'}`}>
                    <img 
                      src={asset.url} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      alt="" 
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-black">
                    <video src={asset.url} controls className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
            <X size={40} />
          </button>
          <img
            src={selectedImage}
            className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}