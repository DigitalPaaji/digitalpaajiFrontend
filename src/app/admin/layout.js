"use client"
import React from 'react'
import Sidebar from '../components/Sidebar'
import { usePathname } from 'next/navigation'

const layout = ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathname = usePathname()
  return (

<div className='flex'>
    {!pathname.includes("/auth") && 
<Sidebar  />
    }
<div className='w-full'>

{ children }
</div>
</div>

  )
}

export default layout