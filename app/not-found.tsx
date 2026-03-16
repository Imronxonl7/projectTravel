import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NotFoundImage from "@/assets/images/images-removebg-preview.png"

const NotFound = () => {
  return (
    <div className='w-full  flex flex-col gap-5 justify-center p-10 items-center'>
      <div className='relative w-150 h-100'>
        <Image
        src={NotFoundImage}
        alt='404 Not Found'
        fill
        className='object-cover object-center'
        />
      </div>
        <p className='text-[36px] font-medium'>Bunday sahifa topilmadi😢</p>
        <Link href={'/'} className='text-center font-bold py-3 px-7 text-white text-2xl rounded-[10px] bg-[#1BBC9B] hover:bg-[#17a98b] transition-colors duration-200 whitespace-nowrap shadow-sm '>Bosh sahifaga</Link>
    </div>
  )
}

export default NotFound
