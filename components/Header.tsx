"use client"
import { useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import TravelImage from "../assets/images/TravelLogo.svg"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdOutlineMenu, MdClose } from 'react-icons/md'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Travel', href: '/travel' },
  { label: 'Pages', href: '/pages' },
  { label: 'Shop', href: '/shop' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

// Rasmdagi loyihadan ko'ringan barcha bo'limlar (VSCode explorer dan)
const mobileMenuSections = [
  {
    title: 'Asosiy',
    items: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Travel',
    items: [
      { label: 'Travel', href: '/travel' },
      { label: 'Destination', href: '/destination' },
      { label: 'Typologies', href: '/typologies' },
    ],
  },
  {
    title: 'Pages',
    items: [
      { label: 'Pages', href: '/pages' },
      { label: 'Pewview', href: '/pewview' },
      { label: 'Prices', href: '/prices' },
      { label: 'Services', href: '/services' },
    ],
  },
  {
    title: 'Shop & Blog',
    items: [
      { label: 'Shop', href: '/shop' },
      { label: 'Blog', href: '/blog' },
      { label: 'Search', href: '/search' },
    ],
  },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className='fixed top-0 w-full z-50 bg-[#F2F2F2] shadow-sm'>
      <Container className=''>
        <div className='flex items-center justify-between py-4'>

          {/* Logo */}
          <Link href='/' className='shrink-0'>
            <Image
              src={TravelImage}
              alt='Love Travel Agency Logo'
              style={{ height: '31px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className='hidden lg:flex items-center gap-6 xl:gap-8'>
            <ul className='flex items-center gap-1'>
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href

                return (
                  <li key={item.href} className='flex items-center'>
                    <Link
                      href={item.href}
                      className={`text-[15px] font-medium transition-colors duration-200 px-2 py-1 rounded hover:text-[#1BBC9B] ${
                        isActive ? 'text-[#1BBC9B]' : 'text-black'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {idx < navItems.length - 1 && (
                      <span className='text-gray-400 mx-1 select-none'>·</span>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Right actions */}
            <div className='relative flex items-center gap-3 ml-2'>
              <button
                aria-label='Menu'
                onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
                className={`text-gray-700 hover:text-[#1BBC9B] transition-colors p-1 ${desktopMenuOpen ? 'text-[#1BBC9B]' : ''}`}
              >
                {desktopMenuOpen ? <MdClose size={22} /> : <MdOutlineMenu size={22} />}
              </button>
              <Link
                href='/search'
                className='text-[14px] font-bold py-3 px-7 text-white rounded-[5px] bg-[#1BBC9B] hover:bg-[#17a98b] transition-colors duration-200 whitespace-nowrap shadow-sm'
              >
                Search
              </Link>

              {/* Desktop Dropdown */}
              {desktopMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className='fixed inset-0 z-40'
                    onClick={() => setDesktopMenuOpen(false)}
                  />
                  <div className='absolute right-0 top-12 z-50 bg-white rounded-xl shadow-xl border border-gray-100 p-5 w-120'>
                    <div className='grid grid-cols-2 gap-5'>
                      {mobileMenuSections.map((section) => (
                        <div key={section.title}>
                          <p className='text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2 px-2'>
                            {section.title}
                          </p>
                          <ul className='flex flex-col gap-0.5'>
                            {section.items.map((item) => {
                              const isActive = pathname === item.href
                              return (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={() => setDesktopMenuOpen(false)}
                                    className={`block text-[14px] font-medium transition-all duration-200 px-2 py-2 rounded-md hover:text-[#1BBC9B] hover:bg-gray-50 ${
                                      isActive ? 'text-[#1BBC9B]' : 'text-gray-700'
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Mobile: hamburger */}
          <div className='flex lg:hidden items-center gap-3'>
            <Link
              href='/search'
              className='text-[13px] font-bold py-2 px-5 text-white rounded-[5px] bg-[#1BBC9B] hover:bg-[#17a98b] transition-colors duration-200'
            >
              Search
            </Link>
            <button
              aria-label='Toggle menu'
              onClick={() => setMenuOpen(!menuOpen)}
              className='text-gray-700 hover:text-[#1BBC9B] transition-colors p-1'
            >
              {menuOpen ? <MdClose size={26} /> : <MdOutlineMenu size={26} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Dropdown Menu — barcha loyiha bo'limlari */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#F2F2F2] border-t border-gray-200 ${
          menuOpen ? 'max-h-150 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className='px-4 py-5'>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {mobileMenuSections.map((section) => (
              <div key={section.title}>
                <p className='text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2 px-2'>
                  {section.title}
                </p>
                <ul className='flex flex-col gap-0.5'>
                  {section.items.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`block text-[14px] font-medium transition-all duration-200 px-2 py-2 rounded-md hover:text-[#1BBC9B] hover:bg-white ${
                            isActive ? 'text-[#1BBC9B]' : 'text-gray-700'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header