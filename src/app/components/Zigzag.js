import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Image from 'next/image';

function Zigzag() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false}); // Initialize AOS with desired settings
  }, []);

  return (
    <div className='overflow-hidden'>
        <div className='zigzag-box '>
        </div>
        <div className='bg-[#cc5f4d]  py-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-8 lg:px-32 xl:px-56'>
            <div className='flex items-center justify-center gap-2' data-aos="fade-left">
                <div>
                    <Image width={200} height={200} src="/Images/zigzag/1.webp" alt="img" className='zoom w-32 h-24'/>
                </div>
                <div>
                    <h3 className='text-white text-2xl font-bold'>Creative Expression</h3>
                    <p className='text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit.</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2' data-aos="fade-right">
                <div>
                    <Image width={200} height={200} src="/Images/zigzag/2.webp" alt="img" className='zoom w-32 h-24'/>
                </div>
                <div>
                    <h3 className='text-white text-2xl font-bold'>Creative Expression</h3>
                    <p className='text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit.</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2' data-aos="fade-left">
                <div>
                    <Image width={200} height={200} src="/Images/zigzag/3.webp" alt="img" className='zoom w-32 h-24'/>
                </div>
                <div>
                    <h3 className='text-white text-2xl font-bold'>Creative Expression</h3>
                    <p className='text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit.</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2' data-aos="fade-right">
                <div>
                    <Image width={200} height={200} src="/Images/zigzag/1.webp" alt="img" className='zoom w-32 h-24'/>
                </div>
                <div>
                    <h3 className='text-white text-2xl font-bold'>Creative Expression</h3>
                    <p className='text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Zigzag
