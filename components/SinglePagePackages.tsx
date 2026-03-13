import React from 'react'
import PackageCard from './PackageCards'

function SinglePagePackages() {
    return (
        <div className='text-center'>
            <div className='flex flex-col items-center pb-10 justify-center'>
                <p className='reenie-beanie-regular text-[#1BBC9B] text-[30px]'>Check All</p>
                <h1 className='max-w-160.25 w-full text-[35px] md:text-[40px] lg:text-[50px] font-bold leading-8.75 md:leading-10 lg:leading-15'>Packages</h1>
            </div>
            <div>
                <PackageCard />
            </div>
        </div>
    )
}

export default SinglePagePackages