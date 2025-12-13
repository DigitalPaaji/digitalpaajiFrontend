import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const features = [
  { src: '/Images/zigzag/1.webp', title: 'Creative Expression' },
  { src: '/Images/zigzag/4.webp', title: 'Diverse Opportunities' },
  { src: '/Images/zigzag/2.webp', title: 'Impact and Reach' },
  { src: '/Images/zigzag/3.webp', title: 'Monetization Potential' },
];

function Zigzag() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className='overflow-hidden'>
      <div className='bg-[#cc5f4d] py-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-8 lg:px-32 xl:px-56'>
        {features.map(({ src, title }, index) => (
          <div key={index} className='flex items-center justify-center gap-2'>
            <div className='w-20 h-20'>
              <Image width={200} height={200} src={src} alt='img' className='w-full h-full object-contain' />
            </div>
            <div>
              <h3 className='text-white text-xl xl:text-2xl font-bold'>{title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className='zigzag-down' style={{ color: 'white' }}></div>
    </div>
  );
}

export default Zigzag;



// import React, { useEffect } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// import Image from 'next/image';

// function Zigzag() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: false}); // Initialize AOS with desired settings
//   }, []);

//   return (
    
//     <div className='overflow-hidden'>
       
//         <div className='bg-[#cc5f4d]  py-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-8 lg:px-32 xl:px-56'>
//             <div className='flex items-center justify-center gap-2'>
//                 <div className='w-20 h-20'>
//                     <Image width={200} height={200} src="/Images/zigzag/1.webp" alt="img" className='w-full h-[100%] object-contain'/>
//                 </div>
//                 <div>
//                     <h3 className='text-white text-xl xl:text-2xl font-bold'>Creative Expression</h3>
//                     {/* <p className='text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit.</p> */}
//                 </div>
//             </div>
//             <div className='flex items-center justify-center gap-2'>
//                 <div className='w-20 h-20'>
//                     <Image width={200} height={200} src="/Images/zigzag/4.webp" alt="img" className='w-full h-[100%] object-contain'/>
//                 </div>
//                 <div>
//                     <h3 className='text-white text-xl xl:text-2xl font-bold'>
//                     Diverse Opportunities</h3>
//                     {/* <p className='text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit.</p> */}
//                 </div>
//             </div>
//             <div className='flex items-center justify-center gap-2'>
//                 <div className='w-20 h-20'>
//                     <Image width={200} height={200} src="/Images/zigzag/2.webp" alt="img" className='w-full h-[100%] object-contain'/>
//                 </div>
//                 <div>
//                     <h3 className='text-white text-xl xl:text-2xl font-bold'>
//                     Impact and Reach</h3>
//                     {/* <p className='text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit.</p> */}
//                 </div>
//             </div>
//             <div className='flex items-center justify-center gap-2'>
//                 <div className='w-20 h-20'>
//                     <Image width={200} height={200} src="/Images/zigzag/3.webp" alt="img" className='w-full h-[100%] object-contain'/>
//                 </div>
//                 <div>
//                     <h3 className='text-white text-xl xl:text-2xl font-bold'>Monetization Potential</h3>
//                     {/* <p className='text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit.</p> */}
//                 </div>
//             </div>
//         </div>
//         <div className='zigzag-down ' style={{color:'white'}}>
//         </div>
//     </div>
//   )
// }

// export default Zigzag
