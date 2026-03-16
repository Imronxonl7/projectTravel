import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import MainImage from '../assets/images/AboutUsPicture1.png'
import BottomLeftImage from '../assets/images/AboutUsPicture2.png'
import BottomRightImage from '../assets/images/AboutUsPicture3.png'
import TopRightImage from '../assets/images/AboutUsPicture4.png'
import TopLeftImage from '../assets/images/AboutUsPicture5.png'

function AboutGuides() {
    return (
        <Container className='flex gap-10 py-20'>
            <div className='w-full lg:w-1/2 flex flex-col gap-5'>
                <p className='reenie-beanie-regular text-[#1BBC9B] text-[30px] leading-[45px]'>Explore the world with us, one adventure at a time.</p>
                <h1 className='text-[35px] md:text-[45px] lg:text-[50px] font-bold lg:leading-[60px]'>The perfect
                    come true with our
                    Travel Agency</h1>
                <p className='text-[16px] leading-[24px] text-[#666666]'>We are a team of experienced travel experts who specialize in planning and
                    organizing unforgettable travel experiences for our clients with a wide range
                    of travel services, including flight bookings, hotel reservations and more.</p>

                <div className="flex flex-col pt-5 gap-8">
                    {[
                        { label: "Local travel guides", href: "/search" },
                    ].map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            className="
        group relative text-gray-500 pb-2 w-fit text-[20px] font-medium
        hover:text-blue-500 transition-colors duration-300
      "
                        >
                            {label}
                            {/* Серая подложка */}
                            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-gray-300" />
                            {/* Синяя заливка слева направо */}
                            <span className="
        absolute bottom-0 left-0 h-[3px] w-0 bg-blue-500
        group-hover:w-full transition-all duration-500 ease-in-out
      " />
                        </Link>
                    ))}
                </div>

            </div>
            <div className='relative hover:scale-[1.1] transition duration-500 group z-20 w-1/2'>
                <Image className='z-20 ' src={MainImage} alt='' />
                <div className='absolute duration-500 transition-all -bottom-5 -left-5 group-hover:-translate-x-5 group-hover:translate-y-5 z-10'>
                    <Image src={BottomLeftImage} alt='' />
                </div>
                <div className='absolute -bottom-5 group-hover:translate-x-5 transition-all duration-500 group-hover:translate-y-5 right-30'>
                    <Image src={BottomRightImage} alt='' />
                </div>
                <div className='absolute -top-5 right-25 transition-all duration-500 group-hover:translate-x-5 group-hover:-translate-y-5'>
                    <Image src={TopRightImage} alt='' />
                </div>
                <div className='absolute -top-5 -left-5 transition-all duration-500 group-hover:-translate-x-5 group-hover:-translate-y-5'>
                    <Image src={TopLeftImage} alt='' />
                </div>
            </div>
        </Container>
    )
}

export default AboutGuides