"use client";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ categories, activeFilter, setFilter, onLogout }) {
  return (
    <aside className="
      /* Mobile Styles: Top Header */
      relative w-full p-6 flex flex-col items-center border-b border-white/10 bg-[#cc5f4d] z-50
      /* Desktop Styles: Fixed Left Sidebar */
      lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:p-8 lg:items-start lg:justify-between lg:border-r lg:border-b-0
    ">
      <div className="relative z-10 w-full flex flex-col items-center lg:items-start">
        {/* Logo Section - Centered on Mobile */}
        <div className="mb-8 lg:mb-20 w-48 lg:w-full">
          <Link href="/portfolio" className="block">
            <Image
              src="/Images/banner/logoWhite.webp"
              alt="Logo"
              width={2648}
              height={984}
              className="w-full h-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation - Wrapped on Mobile, Vertical on Desktop */}
        <nav className="w-full text-center lg:text-left">
          <p className="hidden lg:block text-[12px] uppercase tracking-[0.3em] text-[#ede7db]/70 mb-8 font-bold">
            Services
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 lg:flex-col lg:items-start lg:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[11px] lg:text-xs transition-all uppercase tracking-widest leading-relaxed whitespace-nowrap ${
                  activeFilter === cat 
                    ? 'text-[#ede7db] font-bold border-b border-[#ede7db]' 
                    : 'text-[#ede7db]/80 hover:text-[#eee2c9] lg:hover:translate-x-2'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>
      </div>

     
    </aside>
  );
}
// import Image from "next/image";
// import Link from "next/link";

// export default function Sidebar({ categories, activeFilter, setFilter, onLogout }) {
//   return (
//     <aside className="fixed left-0 top-0 h-screen w-64 p-8 flex flex-col justify-between border-r border-white/10 bg-[#cc5f4d] z-50">
//       <div className="relative z-10">
//         <div className="mb-20">
            
//                <div className="mb-20">
//            <Link href="/portfolio" className="block">
//              <Image
//                src="/Images/banner/logoWhite.webp"
//                alt="Logo"
//                width={2648}
//                height={984}
//                className="w-full h-auto"
//                priority
//              />
//            </Link>
//          </div>
//           {/* Logo with slight glow */}
//           {/* <div className="w-16 h-16 bg-[#ede7db] rounded-full flex items-center justify-center shadow-2xl">
//             <span className="text-[#cc5f4d] font-black text-2xl tracking-tighter">DP</span>
//           </div> */}
//         </div>

//         <nav>
//           <p className="text-[12px] uppercase tracking-[0.3em] text-[#ede7db]/70 mb-8 font-bold">Services</p>
//           <div className="flex flex-col items-start gap-4">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setFilter(cat)}
//                 className={`text-xs transition-all uppercase tracking-widest text-left leading-relaxed ${
//                   activeFilter === cat 
//                     ? 'text-[#ede7db] font-bold border-b border-[#ede7db]' 
//                     : 'text-[#ede7db] hover:text-[#eee2c9] hover:translate-x-2'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </nav>
//       </div>

//       <div className="pt-6 border-t border-white/10">
//         <button onClick={onLogout} className="text-[10px] font-black uppercase tracking-widest text-[#ede7db] hover:opacity-70">
//           Log Out
//         </button>
//       </div>
//     </aside>
//   );
// }