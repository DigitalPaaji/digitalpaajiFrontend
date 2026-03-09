"use client"
import React from 'react'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Icons from "./components/Icons";
import { usePathname } from 'next/navigation';

const LayoutCompo = ({ children }) => {
  const pathname = usePathname();

  const hideLayout = pathname.includes("admin") || pathname.startsWith("/portfolio");

  return (
    <div>
      {!hideLayout && <Navbar />}

      <main>{children}</main>

      {!hideLayout && <Footer />}
      {!hideLayout && <Icons />}
    </div>
  )
}

export default LayoutCompo


// "use client"
// import React from 'react'
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Icons from "./components/Icons";
// import { usePathname } from 'next/navigation';

// const LayoutCompo = ({children}) => {
//     const pathname = usePathname();

//   return (
//     <div>
// {!pathname.includes("admin") && 
//   <Navbar />
// }
//           <main>{children}</main>
//      {!pathname.includes("admin") &&      <Footer /> }
//       {!pathname.includes("admin") &&     <Icons /> }

//     </div>
//   )
// }

// export default LayoutCompo