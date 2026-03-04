import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <p className='text-[36px] font-medium'>Bunday sahifa topilmadi😢</p>
        <Link href={'/'} className='text-center text-3xl bg-[#5D5FEF] py-2 px-3 font-bold text-white rounded-[10px] '>Bosh sahifaga</Link>
    </div>
  )
}

export default NotFound
