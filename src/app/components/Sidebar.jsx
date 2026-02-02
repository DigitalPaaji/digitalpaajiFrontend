'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
// import { useGlobalContext } from './context/GlobalContext'
import {

  Package,
  PlusSquare,
 GraduationCap ,
  Menu,
 Building2 ,
  LogOut,
} from 'lucide-react'
import PopupModal from './ConfirmPopup'
import Image from 'next/image'

// Updated nav items with correct icons
const navItems = [

  { name: 'All Blogs', href: '/admin', icon: Package },
  { name: 'Add Blogs', href: '/admin/add', icon: PlusSquare },
   { name: 'Company Blogs', href: '/admin/company', icon: Building2  },
   { name: 'Academy Blogs', href: '/admin/academy', icon: GraduationCap  },

]

function Sidebar() {

  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showLogoutPopup, setShowLogoutPopup] = useState(false)
const route= useRouter()


  const fetchAdmin = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_PORT}/api/admin`,
      {
        method: "GET",
        credentials: "include", 
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch admin");
    }

    const data = await response.json();
  if(data.success){

  }else{
    route.push('/admin/auth/login')
  }
  
} catch (error) {
  route.push('/admin/auth/login');
  }
};




  useEffect(() => {
    fetchAdmin()
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setCollapsed(true) // auto collapse on mobile
      }
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const logoutAdmin= async()=>{
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_PORT}/api/admin/logout`,{
         credentials: "include",
      })
      const data = await response.json();
      if(data.success){
        route.push("/admin/auth/login")
      }
    } catch (error) {
      
    }
  }

  return (
    <div>
      <aside
        className={`
          sticky min-h-screen z-50 top-0 left-0
          ${collapsed ? 'w-20' : 'w-64'}
          transition-all duration-300
          px-4 py-8  flex shadow-md flex-col justify-between
          bg-[#faf8f8]
          ${isMobile && !collapsed ? 'absolute' : ''}
        `}
      >
        {/* Top Section */}
        <div>
          <div className="flex items-center justify-between mb-6  ">
            {!collapsed && (
              <Link href="/admin" className="shrink-0 group font-medium text-3xl text-[#d66e6e]">
              <Image
              width={20}
              height={20}
                  src="/Images/logo2.png"
                  alt="Logo"
                className='w-36 h-auto '
                /> 
                
              </Link>
            )}
<button
  onClick={() => setCollapsed(!collapsed)}
  className={`${collapsed ? 'w-full' : 'w-fit'} p-2 rounded-lg   flex items-center justify-center`}
>
  <Menu size={20} />
</button>
          </div>

          {/* Nav Links */}
          <nav className="space-y-2  ">
            {navItems.map((item) => {
              const Icon = item.icon
            
              return (
                <Link
                  key={item.name}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setCollapsed(true)
                    }
                  }}
                  href={item.href}
            className={`flex items-center py-3 rounded-lg text-sm font-medium transition-all merriHead text-[#302f2f]
    ${collapsed ? 'justify-center' : 'justify-start '}
  `}
                >
                  <Icon size={18} />
                  {!collapsed && <span className='ml-3'>{item.name}</span>}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div>
          <button
            onClick={() => setShowLogoutPopup(true)}
            className="bg-[#153291]  text-white px-6 py-2  shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-semibold group"
          >
            <LogOut size={18} />
            {!collapsed && 'Logout'}
          </button>
        </div>
      </aside>

      {showLogoutPopup && (
        <PopupModal
          title="Are you sure you want to logout?"
          onCancel={() => setShowLogoutPopup(false)}
          onConfirm={() => {
            // setShowLogoutPopup(false)
            logoutAdmin()
          }}
          confirmText="Logout"
          cancelText="Cancel"
          type="delete"
        />
      )}
    </div>
  )
}

export default Sidebar