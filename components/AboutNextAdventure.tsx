import React from 'react'
import Container from './Container'

const services = [
    {
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
                <circle cx="32" cy="32" r="18" stroke="#1BBC9B" strokeWidth="2.5" />
                <path d="M14 32 Q20 20 32 14 Q44 8 50 32" stroke="#1BBC9B" strokeWidth="2" fill="none" />
                <path d="M10 32 H54" stroke="#1BBC9B" strokeWidth="2" />
                <path d="M32 14 Q24 32 32 50" stroke="#1BBC9B" strokeWidth="2" fill="none" />
                <path d="M40 10 L28 22 L34 24 L30 38 L44 22 L38 20 Z" fill="#1BBC9B" stroke="#1BBC9B" strokeWidth="1" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Airline Tickets',
        description: 'Our travel agency specializes in providing our customers with the best deals on airline tickets.',
    },
    {
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
                <rect x="16" y="20" width="32" height="22" rx="4" stroke="#1BBC9B" strokeWidth="2.5" />
                <path d="M22 20 L22 16 Q32 12 42 16 L42 20" stroke="#1BBC9B" strokeWidth="2" fill="none" />
                <path d="M10 42 Q16 50 32 52 Q48 50 54 42" stroke="#1BBC9B" strokeWidth="2" fill="none" />
                <circle cx="22" cy="31" r="2" fill="#1BBC9B" />
                <circle cx="32" cy="31" r="2" fill="#1BBC9B" />
                <circle cx="42" cy="31" r="2" fill="#1BBC9B" />
            </svg>
        ),
        title: 'Ocean Cruises',
        description: 'Luxurious and comfortable way of travel, and passengers can enjoy stunning views of the sea.',
    },
    {
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
                <circle cx="20" cy="44" r="6" stroke="#1BBC9B" strokeWidth="2.5" />
                <circle cx="44" cy="44" r="6" stroke="#1BBC9B" strokeWidth="2.5" />
                <path d="M26 44 H38" stroke="#1BBC9B" strokeWidth="2" />
                <path d="M14 44 L12 32 L28 24 L44 28 L52 32 L52 44" stroke="#1BBC9B" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                <path d="M28 24 L30 36 L44 36 L44 28" stroke="#1BBC9B" strokeWidth="2" fill="none" />
                <circle cx="38" cy="18" r="6" stroke="#1BBC9B" strokeWidth="2" />
                <path d="M32 18 L38 12 L44 18" stroke="#1BBC9B" strokeWidth="1.5" fill="none" />
            </svg>
        ),
        title: 'Means of Transport',
        description: 'Our travel agency offers a variety of means of transport to get you around your destination safely.',
    },
    {
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
                <rect x="14" y="12" width="36" height="44" rx="3" stroke="#1BBC9B" strokeWidth="2.5" />
                <path d="M22 24 H42" stroke="#1BBC9B" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 32 H42" stroke="#1BBC9B" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 40 H34" stroke="#1BBC9B" strokeWidth="2" strokeLinecap="round" />
                <path d="M26 12 L26 8 L38 8 L38 12" stroke="#1BBC9B" strokeWidth="2" />
            </svg>
        ),
        title: 'Travel Itineraries',
        description: 'Our team of experts will take care of all the planning and logistics, providing you with a detailed itinerary.',
    },
    {
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
                <path d="M32 10 L20 20 L20 36 Q20 48 32 54 Q44 48 44 36 L44 20 Z" stroke="#1BBC9B" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                <path d="M26 32 L30 36 L38 26" stroke="#1BBC9B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Travel Insurance',
        description: 'Travel insurance is an essential part of any trip, providing peace of mind and protection.',
    },
    {
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
                <circle cx="32" cy="22" r="10" stroke="#1BBC9B" strokeWidth="2.5" />
                <path d="M18 52 Q18 38 32 38 Q46 38 46 52" stroke="#1BBC9B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M42 16 L48 10" stroke="#1BBC9B" strokeWidth="2" strokeLinecap="round" />
                <path d="M48 10 L52 6" stroke="#1BBC9B" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="50" cy="10" r="1.5" fill="#1BBC9B" />
            </svg>
        ),
        title: 'Local Guide',
        description: 'We can connect you with guides who will take you off the best path and show you their city.',
    },
]

function AboutNextAdventure() {
    return (
        <section className="py-20 bg-white">
            <Container className=''>
                {/* Top section */}
                <div className="flex flex-col lg:flex-row gap-10 mb-16">
                    {/* Left: Heading */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-3">
                        <p className="reenie-beanie-regular text-[#1BBC9B] text-[26px] leading-[40px]">
                            Let us help you plan your next adventure
                        </p>
                        <h2 className="text-[40px] md:text-[50px] font-bold leading-tight text-gray-900">
                            Perfect{' '}
                            <span className="bg-[#1BBC9B] text-white px-2 py-1 inline-block">
                                Vacation
                            </span>
                            <br />
                            come True
                        </h2>
                    </div>

                    {/* Right: Description */}
                    <div className="w-full lg:w-1/2 flex items-center">
                        <p className="text-[15px] leading-[26px] text-[#666666]">
                            Various destinations{' '}
                            <span className="underline">around the world</span>. With our knowledge and expertise in
                            the travel industry, we ensure that all aspects of your trip are tailored to your
                            preferences and budget and make it an experience of a lifetime.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
                    {services.map((service) => (
                        <div key={service.title} className="flex flex-col gap-3">
                            <div>{service.icon}</div>
                            <h3 className="text-[18px] font-bold text-gray-900">{service.title}</h3>
                            <p className="text-[14px] leading-[22px] text-[#666666]">{service.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default AboutNextAdventure