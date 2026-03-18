import React from 'react'
import Container from './Container'

const ClearPriceCards = () => {
  return (
    <div>
      <section className="">
        <Container className="">

          {/* cards */}
          <div className="grid grid-cols-1 gap-[28px] sm:grid-cols-2 lg:grid-cols-3 justify-items-center">

            {/* card 1 */}
            <div className="w-full max-w-[440px] min-h-[440px]
bg-[#F2F2F2] rounded-[16px] p-[32px] text-center
shadow-md
transition-all duration-500 ease-out
hover:scale-[1.06] hover:shadow-2xl
">

              <p className="text-[14px] font-semibold text-gray-700 mb-[16px]">
                Half Board
              </p>

              <h3 className="text-[50px] font-bold mb-[6px]">$50 <span className='text-[20px]'>/ Day</span></h3>


              <ul className="text-[14px] text-gray-500 space-y-[8px] mb-[28px]">
                <li>Transfers from Airport</li>
                <li>Minimum 3 Star Hotel</li>
                <li>Alcoholic beverages</li>
                <li>Incl. Museum Tickets</li>
                <li>Meals in Restaurants</li>
              </ul>

              <button className="bg-[#22c3a6] text-white text-[13px]
            px-[22px] py-[10px] rounded-[6px] cursor-pointer">
                VIEW TRIPS
              </button>
            </div>

            {/* card 2 */}
            <div className="w-full max-w-[440px] min-h-[440px]
bg-[#1BBC9B] rounded-[16px] p-[32px] text-center
shadow-md
transition-all duration-500 ease-out
hover:scale-[1.06] hover:shadow-2xl
">

              <p className="text-[14px] font-semibold mb-[16px] text-white">
                All Inclusive
              </p>

              <h3 className="text-[50px] font-bold mb-[6px] text-white">$32 <span className='text-[20px]'>/ Day</span></h3>

              <ul className="text-[14px] opacity-90 text-white space-y-[8px] mb-[28px]">
                <li>Meals in Restaurants</li>
                <li>Alcoholic beverages</li>
                <li>Minimum 3 Star Hotel</li>
                <li>Transfers from Airport</li>
                <li>Incl. Museum Tickets</li>
              </ul>

              <button className="bg-[#1f2937] text-white text-[13px]
            px-[22px] py-[10px] rounded-[6px] cursor-pointer">
                VIEW ALL
              </button>
            </div>

            {/* card 3 */}
            <div className="w-full max-w-[440px] min-h-[440px]
bg-[#434A54] rounded-[16px] p-[32px] text-center
shadow-md
transition-all duration-500 ease-out
hover:scale-[1.06] hover:shadow-2xl
">

              <p className="text-[14px] text-white font-semibold mb-[16px]">
                Excursions Included
              </p>

              <h3 className="text-[50px] font-bold mb-[6px] text-white">$68 <span className='text-[20px]'>/ Day</span></h3>


              <ul className="text-[14px] opacity-90 space-y-[8px] mb-[28px] text-white">
                <li>Minimum 3 Star Hotel</li>
                <li>Meals in Restaurants</li>
                <li>Incl. Museum Tickets</li>
                <li>Meals in Restaurants</li>
                <li>Alcoholic beverages</li>
              </ul>

              <button className="bg-[#22c3a6] text-white text-[13px]
            px-[22px] py-[10px] rounded-[6px] cursor-pointer">
                BUTTON
              </button>
            </div>

          </div>

        </Container>
      </section>
    </div>
  )
}

export default ClearPriceCards