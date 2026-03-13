import Container from '@/components/Container';
import TripHeader from '@/components/SinglePackageCDA';
import SinglePageInfoTextMap from '@/components/SinglePageInfoTextMap';
import SinglePagePackages from '@/components/SinglePagePackages';
import BookingCard from '@/components/SinglePagePriceCard';
import getData from '@/utils/api'
import Image from 'next/image';
import React, { JSX } from 'react'

const PackageSinglePage = async ({ params }: { params: Promise<{ SingleId: string }> }): Promise<JSX.Element> => {
    const { SingleId } = await params;

    const packageData = await getData({ url: `package/${SingleId}` })

    if (!packageData) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-500 text-xl">Package not found.</p>
            </div>
        )
    }

    return (
        <div className=" mx-auto ">
            <div style={{ backgroundImage: (`url(${packageData.cover_image})`), backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }} className='relative h-[600px] w-full bg-[#196dea] '>
                <div className='absolute bg-[#484848c0] w-full h-full top-0 left-0 z-10'></div>
                <div className='absolute top-0 p-10 overflow-hidden rounded-2xl left-0 w-full h-full z-20'>
                    <Image className='h-full w-full rounded-[20px] object-cover  container mx-auto opacity-100 z-20' src={packageData.cover_image} alt={packageData.title_uz} width={1200} height={1200} />
                </div>
            </div>
            <TripHeader packageData={packageData} />
            <Container className='flex gap-10 items-start my-10'>
                <SinglePageInfoTextMap packageData={packageData} />
                <div className='w-1/3'>
                    <BookingCard packageData={packageData} />
                </div>

            </Container>
            <Container className=''>
                <div className='py-20'>
                    <SinglePagePackages/>
                </div>
            </Container>
        </div>
    )
}

export default PackageSinglePage
