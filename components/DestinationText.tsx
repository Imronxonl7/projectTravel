import React from 'react'

const DestinationText = () => {
  

  return (
    <div className='py-5'>
      <div className='worldD flex flex-col gap-5'>
        <p className='reenie-beanie-regular text-[#1BBC9B] text-[30px]'>Dream Vacation Destination</p>
        <h1 className='max-w-[641px] w-full text-[50px] font-bold leading-[60px]'>Plan the Trip of a Lifetime <br /> with Ease</h1>
        <p className='max-w-[641px] w-full text-[16px] leading-[24px] '>Whether you&apos;re looking for a romantic getaway, a family-friendly adventure, or a
          solo journey to explore the world, a travel agency can provide you with a
          custom-tailored itinerary that exceeds your expectations.</p>
        <button className='max-w-[126px] w-full h-[44px] bg-[#1BBC9B] hover:bg-[#1BBC9B]/80 hover:scale-[1.1] duration-300 cursor-pointer rounded-[5px] font-bold text-[14px] text-white'>More Info</button>
      </div>
    </div>
  )
}

export default DestinationText
