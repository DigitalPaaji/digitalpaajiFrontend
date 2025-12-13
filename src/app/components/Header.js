import React from 'react'

function Header({title,content}) {
  return (
    <div className='h-[240px] lg:h-[360px] w-full' 
    style={{backgroundImage:'url(/Images/services/bg.webp)'}}
    >
        <div className='text-center py-20 lg:py-32 mx-4'>
            <h3 className='bungeeHead text-3xl md:text-3xl lg:text-5xl text-white '>{title}</h3>
            <h5 className='merriHead mt-3 md:mt-6 text-sm text-white'>{content}</h5>
            
        </div>
    </div>
  )
}

export default Header