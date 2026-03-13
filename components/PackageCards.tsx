// components/TravelCard.jsx

import { Package } from "@/types/Package";
import getData from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

const PackageCard = async () => {

    const packages = await getData({ url: "package" })

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    packages?.map((el: Package) => {
                        return (
                            <div key={el.id} className="max-w-[600px] w-full rounded-3xl overflow-hidden bg-white shadow-lg duration-300 hover:translate-y-[-10px] hover:shadow-2xl">
                                {/* Image */}
                                <div className="relative h-50 w-full">
                                    <Image width={400} height={400}
                                        src={el.cover_image}
                                        alt={el.title}
                                        className="w-full h-full object-cover hover:scale-[1.1] duration-300"
                                    />
                                </div>

                                {/* Body */}
                                <div className="px-5 py-4 overflow-hidden">
                                    {/* Duration + Icons Row */}
                                    <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-4 py-2.5 mb-4">
                                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                                            {/* Clock icon */}
                                            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <circle cx="12" cy="12" r="10" />
                                                <path strokeLinecap="round" d="M12 6v6l4 2" />
                                            </svg>
                                            {el.duration_days} days
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {/* Mail icon */}
                                            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            {/* Share icon */}
                                            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-[20px] line-clamp-1 font-bold text-gray-900 leading-tight">{el.title_uz}</h2>

                                    {/* Location */}
                                    <div className="flex items-center gap-1 mt-1 mb-3">
                                        <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                        <span className="text-sm text-emerald-400 font-medium">{el.departure_city}</span>
                                    </div>

                                    {/* Divider */}
                                    <hr className="border-gray-100 mb-3" />

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {el.description}                                </p>

                                    {/* Divider */}
                                    <hr className="border-gray-100 mb-4" />

                                    {/* Bottom Row */}
                                    <div className="flex items-center justify-between">
                                        <Link href={`/package/${el.id}`} className="bg-emerald-400 hover:bg-emerald-500 hover:scale-[1.1] cursor-pointer duration-300 active:scale-95 transition-all text-white font-semibold text-sm px-7 py-3 rounded-xl">
                                            Details
                                        </Link>
                                        <div className="text-right">
                                            <p className="text-xs text-gray-400 mb-0.5">From</p>
                                            <p className="text-[25px] font-bold text-gray-900">$ {el.original_price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default PackageCard;