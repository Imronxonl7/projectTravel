import React from 'react'
import Container from './Container'
import Image from 'next/image'
import FooterImage from "../assets/images/FooterBg.svg"
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='relative w-full overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={FooterImage}
          alt='Footer Background'
          fill
          className='object-cover object-center'
          priority
        />
        {/* Dark overlay */}
        <div className='absolute inset-0 bg-black/45' />
      </div>

      {/* Content */}
      <Container className=''>
        <div className='relative z-10 py-14 md:py-20'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 items-start'>

            {/* Left — Tagline */}
            <div className='sm:col-span-2 lg:col-span-1'>
              <h2 className='text-white font-extrabold text-3xl md:text-4xl leading-tight max-w-xs'>
                Travel beyond your imagination, with our Travel Agency!
              </h2>
            </div>

            {/* Middle — Address */}
            <div>
              <h4 className='text-white font-bold text-[15px] mb-4 tracking-wide'>
                Address
              </h4>
              <ul className='flex flex-col gap-2'>
                <li className='text-white/80 text-[14px]'>1080 Brickell Ave</li>
                <li className='text-white/80 text-[14px]'>Miami - Florida</li>
                <li className='text-white/80 text-[14px]'>U.S. of America</li>
              </ul>

              {/* Social Icons */}
              <div className='flex items-center gap-4 mt-6'>
                <Link
                  href='#'
                  aria-label='Facebook'
                  className='text-white/80 hover:text-[#1BBC9B] transition-colors duration-200'
                >
                  <FaFacebookF size={16} />
                </Link>
                <Link
                  href='#'
                  aria-label='Twitter'
                  className='text-white/80 hover:text-[#1BBC9B] transition-colors duration-200'
                >
                  <FaTwitter size={16} />
                </Link>
                <Link
                  href='#'
                  aria-label='YouTube'
                  className='text-white/80 hover:text-[#1BBC9B] transition-colors duration-200'
                >
                  <FaYoutube size={18} />
                </Link>
              </div>
            </div>

            {/* Right — Contact */}
            <div>
              <h4 className='text-white font-bold text-[15px] mb-4 tracking-wide'>
                Contact
              </h4>

              <Link
                href='mailto:info@travel.com'
                className='inline-block text-[13px] font-semibold text-white bg-[#1BBC9B] hover:bg-[#17a98b] transition-colors duration-200 px-5 py-2.5 rounded-[5px] mb-5'
              >
                info@travel.com
              </Link>

              <p className='text-white font-bold text-[20px] md:text-[22px] mt-2'>
                + 01 483 593 284
              </p>
            </div>

          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer