export default function ProductGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12">
      {items.map((item) => (
        <div key={item.id} className="group relative">
          <div className="relative aspect-[16/10] overflow-hidden bg-black/20 rounded-sm">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
            />
            {/* Minimalist Overlay on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
               <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white px-4 py-2">View Project</span>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between items-start">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#ede7db]/60 mb-1">{item.category}</p>
              <h3 className="text-lg font-bold uppercase tracking-tight text-[#ede7db]">{item.title}</h3>
            </div>
            <div className="h-[1px] w-8 bg-[#ede7db]/30 mt-3 group-hover:w-12 transition-all"></div>
          </div>
        </div>
      ))}
    </div>
  );
}