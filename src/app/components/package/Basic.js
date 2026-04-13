import React from 'react'

function Basic() {
  return (
    <div>
    <div className='w-[400px] text-center border border-black '>
        <div className='bg-[#ee5757] text-white p-6'>
            <h3 className='bungeeHead text-3xl'>BASIC PACKAGE</h3>
            <p className='merriHead '>Best for Stepping into Digital Marketing</p>

        </div>
        <div className='bg-white text-gray-700 p-6 py-12 text-center'>
            <div className='flex items-start justify-center'>
                <p className='merriHead font-bold'>Rs</p>
                <h3 className='merriHead text-7xl font-bold'>14,999</h3>
            </div>
            <div className='merriHead text-gray-700 my-10'>Monthly</div>
        </div>
    </div>
    <div className='mt-8'>
        <div className='flex items-center justify-center gap-2 '>
            <div>Basic Package</div>
        </div>
    </div>
    </div>
  )
}

export default Basic