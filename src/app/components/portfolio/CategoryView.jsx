export default function CategoryView({ setFilter }) {
  // Local helper for the tile UI
  const Tile = ({ title, img, category, className = "" }) => (
    <div 
      onClick={() => setFilter(category)}
      className={`group relative cursor-pointer overflow-hidden rounded-sm bg-black/20 ${className}`}
    >
      <div className="w-full h-auto overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover " />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-all">
        <h3 className="text-white text-lg font-bold uppercase tracking-widest">{title}</h3>
        <div className="h-[1px] w-8 bg-white/50 mt-2 group-hover:w-16 transition-all duration-500"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-[2px]">
         <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white px-4 py-2">Explore Work</span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
      {/* ROW 1: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Tile title="AI Videos" category="AI Videos" img="/Images/portfolio/ai/cover.gif" />
        <Tile title="Reels" category="Reels Creation" img="/Images/portfolio/reels/cover.gif" />
        <Tile title="Animation" category="Animation" img="/Images/portfolio/animation/cover.gif" />
      </div>

 
      {/* ROW 3: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Tile title="Graphic Design" category="Graphic" img="/Images/work/1.gif" />
        <Tile title="UI/UX Design" category="Website Design UI/UX" img="/Images/portfolio/website/cover2.webp" />

        <Tile title="Marketing" category="Ad Results(Marketing)" img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" />
      </div>

           {/* ROW 2: 2 Columns (Highlighting Big Work) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Tile title="Product Shoot" category="Product Shoot" img="/Images/work/ds2.jpeg" />
              <Tile title="Packaging" category="Packaging Designs" img="/Images/packaging/4.webp" />
      </div>

      {/* ROW 4: Extra items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <Tile title="Food Shoot" category="Restraunt Food Shoot" img="/Images/work/Restaurants4.jpeg" />
         <Tile title="Thumbnails" category="YouTube Thumbnails" img="/Images/work/Restaurants5.jpeg" />
         <Tile title="Visiting Cards" category="Visiting Cards" img="/Images/portfolio/visitingcard/3.webp" />
      </div>
    </div>
  );
}