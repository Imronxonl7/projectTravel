import Image from 'next/image'
import React from 'react'

const SearchTopImage = () => {
  return (
    <div className='w-full'>
       <div className="relative w-full h-72 sm:h-96 overflow-hidden">
              <Image
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__wR3q9XaKxPI_2z7me4oEhNUx5WXrFDqaZGFDg9T7OAeV2Ug'
                alt="ContactUs Background"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,30,0.75),rgba(0,0,0,0.1))] z-10" />
              <div className="relative z-20 flex flex-col items-center justify-center h-full gap-2">
                
                <p
                  className="text-4xl sm:text-5xl font-bold text-white"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Our packages
                </p>
              </div>
            </div>
    </div>
  )
}

export default SearchTopImage
