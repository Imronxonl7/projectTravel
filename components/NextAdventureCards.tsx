import { Destination } from '@/types/Destination';
import getData from '@/utils/api'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const NextAdventureCards = async () => {

  const destinations = await getData({ url: "destination" });
  console.log(destinations);


  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {
        destinations?.slice(0, 8)?.map((el: Destination) => {
          return (
            <Link href={`/destination/${el.id}`} className='relative group max-w-[350px] w-full h-100 bg-amber-300 rounded-[20px] overflow-hidden' key={el.id}>
              <div className='w-full h-full'>
                <Image className='h-full w-full object-cover group-hover:scale-[1.1] duration-300 cursor-pointer' width={400} height={400} src={el.cover_image} alt={el.name_uz} />
              </div>
              <div className='absolute bg-linear-to-t from-[#1d5148] bottom-0 h-full w-full'></div>
              <div className='absolute bottom-8 text-center'>
                <h1 className='text-[23px] pb-2 font-bold text-white'>{el.name_uz}</h1>
                <p className='line-clamp-2 text-[14px] px-6 text-[white]'>{el.description}</p>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default NextAdventureCards
