import Image from 'next/image'
import React from 'react'
import AboutBannerImage from "../assets/images/AboutUsBanner.jpg"

function AboutBanner() {
    return (
        <div>
            <div className='relative w-full h-[550px]'>
                <Image src={AboutBannerImage} alt="About Banner" width={1200} height={1200} className='w-full h-full object-cover' />
                <div className='absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#000000c5] to-transparent'></div>
                <div className='absolute text-[50px] font-bold text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>About Us</div>
            </div>
        </div>
    )
}

export default AboutBanner