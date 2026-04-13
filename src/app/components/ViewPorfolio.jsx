import Link from 'next/link'
import React from 'react'

const ViewPortfolio = () => {
  return (
    <div className='fixed top-1/2 -translate-y-1/2 left-0 z-50 group'>
      <Link 
        target='_blank' 
        href="https://portfolio.digitalpaaji.com/" 
        rel="noopener noreferrer" 
        className='
          relative flex items-center justify-center
          [writing-mode:vertical-rl]
          uppercase font-bold tracking-[0.2em] text-[10px]
          bg-[#cc5f4d] text-white px-1.5 md:px-3 py-4 md:py-8
          transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
         
          rounded-r-sm shadow-[-8px_0px_30px_rgba(204,95,77,0.3)]
    
          border-y border-l border-white/20
        '
      >
        {/* Animated Accent Line */}
        <span className="absolute inset-y-4 right-1 w-[1px] bg-white/40  transition-colors" />
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent opacity-0  transition-opacity" />

        <span className="transform transition-transform duration-500 ">
          Portfolio
        </span>

      
        {/* Subtle Shine Overlay */}
      </Link>
    </div>
  )
}

export default ViewPortfolio