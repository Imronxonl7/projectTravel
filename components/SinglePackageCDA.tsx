// components/TripHeader.jsx

import { Package } from "@/types/Package";
import Container from "./Container";

export default function TripHeader({ packageData }: { packageData: Package }) {
    return (
        <div className="w-full bg-[#f0f2f5] px-8 py-10">
            <Container className="flex items-center justify-between">

                {/* Left: Destination */}
                <div>
                    <h1 className="text-[25px] font-bold text-[#25a896] leading-tight">
                        {packageData.title_uz}
                    </h1>
                    <div className="flex items-center gap-1 mt-1">
                        <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                        </svg>
                        <span className="text-xs text-gray-400 font-medium">{packageData.departure_city}</span>
                    </div>
                </div>

                {/* Right: Stats */}
                <div className="flex items-center gap-12">

                    {/* Duration */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10">
                            <svg className="w-full h-full" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="25" fill="#1BBC9B" />
                                <path d="M25.175 13.0156C31.8645 13.0156 37.2844 18.4355 37.2844 25.125C37.2844 31.8145 31.8645 37.2344 25.175 37.2344C18.4855 37.2344 13.0656 31.8145 13.0656 25.125C13.0656 18.4355 18.4855 13.0156 25.175 13.0156ZM29.6672 28.2988C29.7648 28.2012 29.8625 28.0059 29.8625 27.8105C29.8625 27.5664 29.716 27.3711 29.5695 27.2246L26.7375 25.125V18.0938C26.7375 17.7031 26.3469 17.3125 25.9563 17.3125H24.3938C23.9543 17.3125 23.6125 17.7031 23.6125 18.0938V25.7109C23.6125 26.3457 23.8566 26.8828 24.3449 27.2246L27.6164 29.666C27.7141 29.7637 27.9094 29.8613 28.0559 29.8613C28.3488 29.8613 28.5441 29.7148 28.6906 29.5195L29.6672 28.2988Z" fill="white" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 leading-none mb-0.5">Durations</p>
                            <p className="text-sm font-bold text-gray-900">{packageData.duration_days} days</p>
                        </div>
                    </div>

                    {/* Difficulty */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10">
                            <svg className="w-full h-full" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="25" fill="#1BBC9B" />
                                <path d="M39.1072 32.3027C39.5467 33.3281 38.8142 34.5 37.74 34.5H28.1209L27.6326 29.7637C27.5838 29.373 27.242 29.0312 26.8513 29.0312H23.4822C23.0916 29.0312 22.7498 29.373 22.701 29.7637L22.2127 34.5H12.5935C11.5193 34.5 10.7869 33.3281 11.2263 32.3027L18.0623 16.6777C18.3064 16.1406 18.8435 15.75 19.4295 15.75H24.1658L24.0681 16.9219C24.0193 17.1172 24.2146 17.3125 24.4588 17.3125H25.8748C26.1189 17.3125 26.3142 17.1172 26.2654 16.9219L26.1678 15.75H30.9041C31.49 15.75 32.0271 16.1406 32.2713 16.6777L39.1072 32.3027ZM23.824 19.2656L23.5799 21.3652C23.5799 21.707 23.824 22 24.1658 22H26.1678C26.5095 22 26.7537 21.707 26.7537 21.3652L26.5095 19.2656C26.5095 19.0703 26.3142 18.875 26.1189 18.875H24.2146V18.9238C24.0193 18.9238 23.824 19.0703 23.824 19.2656ZM26.5095 27.4688C26.9978 27.4688 27.3396 27.0781 27.2908 26.6387L27.0467 24.2949C26.9978 23.9043 26.656 23.5625 26.2654 23.5625H24.0681C23.6775 23.5625 23.3357 23.9043 23.2869 24.2949L23.0428 26.6387C22.9939 27.0781 23.3357 27.4688 23.824 27.4688H26.5095Z" fill="white" />
                            </svg>

                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 leading-none mb-0.5">Difficulty</p>
                            <p className="text-sm font-bold text-gray-900">Easy</p>
                        </div>
                    </div>

                    {/* Min Age */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10">
                            <svg className="w-full h-full" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="25" fill="#1BBC9B" />
                                <path d="M21.6359 16.1406C21.6359 14.2363 23.1984 12.625 25.1516 12.625C27.0559 12.625 28.6672 14.2363 28.6672 16.1406C28.6672 18.0938 27.0559 19.6562 25.1516 19.6562C23.1984 19.6562 21.6359 18.0938 21.6359 16.1406ZM34.0383 16.2383C34.673 16.8242 34.673 17.8496 34.0383 18.4355L29.4484 23.0742V36.0625C29.4484 36.9414 28.716 37.625 27.8859 37.625H27.1047C26.2258 37.625 25.5422 36.9414 25.5422 36.0625V30.5938H24.7609V36.0625C24.7609 36.9414 24.0285 37.625 23.1984 37.625H22.4172C21.5383 37.625 20.8547 36.9414 20.8547 36.0625V23.0742L16.216 18.4355C15.5813 17.8496 15.5813 16.8242 16.216 16.2383C16.802 15.6035 17.8273 15.6035 18.4133 16.2383L22.6613 20.4375H27.593L31.841 16.2383C32.427 15.6035 33.4523 15.6035 34.0383 16.2383Z" fill="white" />
                            </svg>

                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 leading-none mb-0.5">Min Age</p>
                            <p className="text-sm font-bold text-gray-900">0</p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
}