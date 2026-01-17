"use client"
import React from 'react'
import Sidebar from '../components/Sidebar'
import { usePathname } from 'next/navigation'

const layout = ({ children }) => {
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