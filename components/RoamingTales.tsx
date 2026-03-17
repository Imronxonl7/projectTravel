import React from "react";
import Container from "./Container";
import Image from "next/image";
import Symbol from '../assets/images/symbol (1).svg'
import Symbol2 from '../assets/images/symbol (2).svg'
import Symbol3 from '../assets/images/symbol (3).svg'
import Symbol4 from '../assets/images/symbol (4).svg'
import Symbol5 from '../assets/images/symbol (5).svg'


const TravelBlog = () => {
    return (
        <section className="py-20 bg-white">
            <Container className="">

                {/* header */}
                <div className="text-center mb-12">
                    <p className="text-2xl text-[#1BBC9B] mb-2 font-medium" style={{ fontFamily: "'Reenie Beanie', cursive" }}>
                        Roaming Tales
                    </p>
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">Travel Blog</h2>
                    <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
                        We share our experiences, tips and travel stories to inspire and guide our readers
                        in their own wanderlust adventures. From hidden gems to popular destinations
                    </p>
                </div>

                {/* blog grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* left — featured */}
                    <div>
                        <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden mb-4">
                            <Image
                                src={Symbol}
                                alt="Plan the Perfect Vacation"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="inline-block bg-[#434A54] text-white text-xs px-3 py-1 rounded mb-3">
                            April 7, 2023
                        </span>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Plan the Perfect Vacation</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-4">
                            Planning a vacation can be overwhelming, but this post offers a step-by-step guide
                            to help readers create a comprehensive travel itinerary. From choosing a destination
                            to booking accommodations and activities, readers will learn how to plan a stress-free trip.
                        </p>
                        <button className="bg-[#1BBC9B] text-white text-sm px-5 py-2 rounded cursor-pointer">
                            Read More
                        </button>
                    </div>

                    {/* right — small posts */}
                    <div className="flex flex-col gap-5">

                        {/* post 1 */}
                        <div className="flex gap-4 items-start">
                            <div className="relative w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                <Image
                                    src={Symbol2}
                                    alt="Discover the Hidden Gems"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <span className="inline-block bg-[#1BBC9B] text-white text-xs px-2 py-0.5 rounded mb-1">April 7, 2023</span>
                                <h4 className="text-sm font-bold text-gray-800 mb-1">Discover the Hidden Gems</h4>
                                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">Benefits of traveling alone, from the freedom to discover new places with new friends.</p>
                            </div>
                        </div>

                        {/* post 2 */}
                        <div className="flex gap-4 items-start">
                            <div className="relative w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                <Image
                                    src={Symbol3}
                                    alt="Must-See Landmarks"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <span className="inline-block bg-[#1BBC9B] text-white text-xs px-2 py-0.5 rounded mb-1">April 7, 2023</span>
                                <h4 className="text-sm font-bold text-gray-800 mb-1">Must-See Landmarks</h4>
                                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">Iconic landmarks that make Europe one of the worlds most popular travel destinations.</p>
                            </div>
                        </div>

                        {/* post 3 */}
                        <div className="flex gap-4 items-start">
                            <div className="relative w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                <Image
                                    src={Symbol4}
                                    alt="Traveling on a Budget"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <span className="inline-block bg-[#1BBC9B] text-white text-xs px-2 py-0.5 rounded mb-1">April 7, 2023</span>
                                <h4 className="text-sm font-bold text-gray-800 mb-1">Traveling on a Budget</h4>
                                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">Practical advice for travelers who want to see the world without breaking the bank.</p>
                            </div>
                        </div>

                        {/* post 4 */}
                        <div className="flex gap-4 items-start">
                            <div className="relative w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                <Image
                                    src={Symbol5}
                                    alt="Explore the Wonders"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <span className="inline-block bg-[#1BBC9B] text-white text-xs px-2 py-0.5 rounded mb-1">April 7, 2023</span>
                                <h4 className="text-sm font-bold text-gray-800 mb-1">Explore the Wonders</h4>
                                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">Must-see destinations and experiences, including wildlife and cultural experiences.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TravelBlog;