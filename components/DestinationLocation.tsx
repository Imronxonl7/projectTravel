import { Category } from '@/types/Category';
import getData from '@/utils/api'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const DestinationLocation = async () => {

  const category = await getData({ url: "category" })


  return (
    <div className='flex justify-center'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {category.map((item: Category) => (
          <Link href={`/destination/${item.id}`} className='mx-auto group duration-300 shadow-[0_5px_10px_0px] shadow-[#9a9a9a] relative max-w-[500px] w-full h-[120px] rounded-[15px] overflow-hidden' key={item.id}>
            <div className='w-full h-full'>
              <Image className='transition-transform duration-300 group-hover:scale-[1.1] w-full h-full object-cover' src={item.icon} alt={item.name_uz} width={400} height={400} />
            </div>
            <p className='absolute bottom-4 text-[18px] font-bold text-white max-w-[100px] left-4 z-10'>{item.name_uz}</p>
            <div className='transition-opacity duration-300 group-hover:opacity-0 absolute left-0 top-0 bg-linear-to-r from-[#305f56] to-transparent w-full h-full'></div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DestinationLocation
