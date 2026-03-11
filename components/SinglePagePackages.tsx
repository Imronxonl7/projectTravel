import React from 'react'
import PackageCard from './PackageCards'

function SinglePagePackages() {
    return (
        <div className='text-center'>
            <div className='flex flex-col items-center pb-10 justify-center'>
                <p className='reenie-beanie-regular text-[#1BBC9B] text-[30px]'>Check All</p>
                <h1 className='max-w-[641px] w-full text-[35px] md:text-[40px] lg:text-[50px] font-bold leading-[35px] md:leading-[40px] lg:leading-[60px]'>Packages</h1>
            </div>
            <div>
                <PackageCard />
            </div>
        </div>
    )
}

export default SinglePagePackages