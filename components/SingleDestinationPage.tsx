import { Destination } from '@/types/Destination'

import React from 'react'
import Container from './Container'
import SinglePagePackages from './SinglePagePackages'
import TravelInfoBar from './SingleDestinationBanner'
import SimpleMap from './SingleDestinationMap'
import Link from 'next/link'

function SingleDestinationPage({ destinationData }: { destinationData: Destination }) {
    return (
        <div className=" mx-auto ">
            <div style={{ backgroundImage: (`url(${destinationData.cover_image})`), backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }} className='relative h-80 sm:h-100 md:h-150 w-full bg-[#196dea] '>
                <div className='absolute bg-linear-to-b from-[#0b0b0bc9] to-transparent w-full h-full top-0 z-10'></div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
                    <h1 className='text-white text-3xl md:text-5xl font-bold'>{destinationData.name_uz}</h1>
                </div>
                <Container className=' absolute -bottom-60 md:-bottom-22 w-full left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
                    <TravelInfoBar />
                </Container>
            </div>

            <Container className='pt-40 md:pt-30'>
                <div className='flex flex-col-reverse lg:flex-row gap-10'>
                    <div className='w-full lg:w-1/2'>
                        <SimpleMap destinationData={destinationData} />
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col gap-5'>
                        <p className='reenie-beanie-regular text-[#5D5FEF] text-[30px] leading-[45px]'>A Guide to Your Next Adventure</p>
                        <h1 className='text-[35px] md:text-[45px] lg:text-[50px] font-bold lg:leading-[60px]'>Discover Your Dream
                            Destination</h1>
                        <p className='text-[16px] leading-[24px] text-[#666666]'>To find good deals on flights and accommodations, there are several tips
                            and tricks that can be followed. Firstly, it is important to know the typical
                            prices for flights and hotels for the desired destinations.</p>

                        <div className="flex flex-col pt-5 gap-8">
                            {[
                                { label: "Review and Payment", href: "/price" },
                                { label: "Activities and Transportation", href: "/services" },
                                { label: "Destination and Travel Dates", href: "/search" },
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
                </div>
                <div className='py-20'>
                    <SinglePagePackages />
                </div>
            </Container>
        </div >
    )
}

export default SingleDestinationPage