import TravelCards from '@/components/TravelCards'
import getData from '@/utils/api'
import Image from 'next/image'
import React from 'react'

const TravelPage = async() => {
  const allPackages = await getData({url:'package'})
  return (
    <section className='w-full'>
      <div className='relative w-full h-96 overflow-hidden'>
                    <Image
                    src="https://tgmresearch.com/templates/yootheme/cache/92/tourists-man-woman-couple-traveling-920c8d02.jpeg"
                      alt='Footer Background'
                      fill
                      className='object-cover object-center'
                      priority
                    />
                    <div className='absolute inset-0 bg-[linear-gradient(180deg,#1d1d1d,rgba(0,0,0,0)_100%)] z-10' />
                    <div className='relative z-20 flex items-center justify-center h-full'>
                      <p className='text-[50px] font-bold text-white'>Our Travel</p>
                    </div>
                  </div>
                  <TravelCards allPackages={allPackages}/>
    </section>
  )
}

export default TravelPage
