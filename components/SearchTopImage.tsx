import Image from 'next/image'
import React from 'react'

const SearchTopImage = () => {
  return (
    <div>
      <div className='relative w-full h-96 overflow-hidden'>
              <Image
                src='https://www.irishexaminer.com/cms_media/module_img/8956/4478389_3_org_iStock-1137373430.jpg'
                alt='Footer Background'
                fill
                className='object-cover scale-x-[-1] object-center'
                priority
              />
              <div className='absolute inset-0 bg-[linear-gradient(180deg,#1d1d1d,rgba(0,0,0,0)_100%)] z-10' />
              <div className='relative z-20 flex items-center justify-center h-full'>
                <p className='text-[50px] font-bold text-white'>Typologies</p>
              </div>
            </div>
    </div>
  )
}

export default SearchTopImage
