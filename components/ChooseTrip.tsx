import Link from 'next/link'
import React from 'react'


const ChooseTrip = () => {
  return (
    <section className="bg-gray-100 py-30 flex items-center justify-center px-6">
      <div className="max-w-3xl w-full text-center">

        {/* Cursive subtitle */}
        <p
          className="text-emerald-400 text-[30px] mb-3"
          style={{ fontFamily: "'Reenie Beanie', cursive" }}
        >
          Choose your Trip
        </p>

        {/* Main heading */}
        <h1 className="max-w-160.25 w-full text-[35px] md:text-[40px] lg:text-[50px] font-bold leading-8.75 md:leading-10 lg:leading-15 mb-4 mx-auto">
          Start your Vacation Now
        </h1>

        {/* Description */}
        <p className="max-w-160.25 w-full text-[16px] leading-5 lg:leading-6 mb-10 mx-auto">
          Looking for your dream vacation destination but don&apos;t know where to start? With the help of
          experienced and knowledgeable travel agents, you can plan the trip of a lifetime with ease.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl w-full shadow-md flex flex-col md:flex-row items-start md:items-center px-6 py-4 gap-4">

          {/* Search */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <svg className="w-6 h-6 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">Search</p>
              <p className="text-xs text-gray-400">Insert keyword</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-10 hidden md:block bg-gray-200 shrink-0" />

          <hr className="md:hidden w-full text-gray-300" />

          {/* Destinations */}
          <Link href={"/destination"} className="flex items-center gap-3 flex-1 min-w-0">
            <svg className="w-6 h-6 text-orange-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">Destinations</p>
              <p className="text-xs text-gray-400">All Destinations</p>
            </div>
          </Link>

          {/* Divider */}
          <div className="w-px h-10 hidden md:block bg-gray-200 shrink-0" />

          <hr className="md:hidden w-full text-gray-300" />

          {/* Typologies */}
          <Link href={"/typologies"} className="flex items-center gap-3 flex-1 min-w-0">
            <svg className="w-6 h-6 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h10M4 14h16M4 18h10" />
            </svg>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">Typologies</p>
              <p className="text-xs text-gray-400">All Typologies</p>
            </div>
          </Link>

          {/* Search Button */}
          <Link href={"/search"} className="bg-red-400 w-full md:w-auto hover:bg-red-500 active:scale-95 transition-all text-white font-bold text-sm tracking-widest px-10 py-4 rounded-xl shrink-0">
            SEARCH
          </Link>

        </div>
      </div>

      {/* Google Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');
      `}</style>
    </section>
  )
}

export default ChooseTrip
