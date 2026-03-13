import Image from 'next/image'
import React from 'react'

const SearchTopImage = () => {
  return (
    <div>
      <div className='relative w-full h-96 overflow-hidden'>
              <Image
                src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvvF4iLAvf-kS2PTd3SX0aD6irPeE04_1JBZX1Thxjr7swd8fT'
                alt='Footer Background'
                fill
                className='object-cover scale-x-[-1] object-center'
                priority
              />
              <div className='absolute inset-0 bg-[linear-gradient(180deg,#1d1d1d,rgba(0,0,0,0)_100%)] z-10' />
              <div className='relative z-20 flex items-center justify-center h-full'>
                <p className='text-[50px] font-bold text-white'>Our packages</p>
              </div>
            </div>
    </div>
  )
}

export default SearchTopImage
