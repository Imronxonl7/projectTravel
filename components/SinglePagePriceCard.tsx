// components/BookingCard.jsx
"use client";
import { useState } from "react";
import { Package } from "@/types/Package";

export default function BookingCard({ packageData }: { packageData: Package }) {
    const [activeTab, setActiveTab] = useState("booking");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [healthInsurance, setHealthInsurance] = useState(false);
    const [medicalInsurance, setMedicalInsurance] = useState(false);

    const adultPrice = packageData.original_price || 0;
    const childPrice = Math.round(adultPrice * 0.3);
    const healthPrice = 220;
    const medicalPrice = 45;

    const total =
        adults * adultPrice +
        children * childPrice +
        (healthInsurance ? healthPrice : 0) +
        (medicalInsurance ? medicalPrice : 0);

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl duration-300 p-6 lg:w-85 w-full">
            {/* Price Header */}
            <div className="flex items-end justify-between mb-5">
                <div>
                    <p className="text-sm text-gray-400">Price</p>
                    <p className="text-xl font-bold text-gray-900">From</p>
                </div>
                <p className="text-4xl font-extrabold text-gray-900">
                    <span className="text-2xl font-bold mr-1">$</span>{total}
                </p>
            </div>

            <hr className="border-gray-200 mb-4" />

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-5">
                <button
                    onClick={() => setActiveTab("booking")}
                    className={`flex-1 pb-2 text-sm font-medium transition-colors ${activeTab === "booking"
                        ? "text-[#2bbfaa] border-b-2 border-[#2bbfaa]"
                        : "text-gray-500"
                        }`}
                >
                    Booking Form
                </button>
                <div className="w-px bg-gray-200 self-stretch" />
                <button
                    onClick={() => setActiveTab("enquiry")}
                    className={`flex-1 pb-2 text-sm font-medium transition-colors ${activeTab === "enquiry"
                        ? "text-[#2bbfaa] border-b-2 border-[#2bbfaa]"
                        : "text-gray-500"
                        }`}
                >
                    Enquiry Form
                </button>
            </div>

            {/* Date */}
            <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-sm font-bold text-gray-900 mb-1">Date</p>
                <p className="text-sm text-gray-500">{packageData.departure_date || "Flexible"}</p>
            </div>

            {/* Adults */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <div>
                    <p className="text-sm font-bold text-gray-900">Adults</p>
                    <p className="text-xs text-gray-400">Over 18 ( $ {adultPrice} )</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setAdults(Math.max(0, adults - 1))}
                        className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-700 text-lg leading-none"
                    >
                        −
                    </button>
                    <span className="text-lg font-bold text-gray-900 w-4 text-center">{adults}</span>
                    <button
                        onClick={() => setAdults(adults + 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-700 text-lg leading-none"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <div>
                    <p className="text-sm font-bold text-gray-900">Children</p>
                    <p className="text-xs text-gray-400">Under 18 ( $ {childPrice} )</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-700 text-lg leading-none"
                    >
                        −
                    </button>
                    <span className="text-lg font-bold text-gray-900 w-4 text-center">{children}</span>
                    <button
                        onClick={() => setChildren(children + 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-700 text-lg leading-none"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Extra Services */}
            <div className="mb-6">
                <p className="text-sm font-bold text-gray-900 mb-1">Extra Services</p>
                <p className="text-xs text-gray-400 mb-3">Add extra services on your reservation</p>

                <label className="flex items-center gap-2 mb-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={healthInsurance}
                        onChange={(e) => setHealthInsurance(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 accent-[#2bbfaa] cursor-pointer"
                    />
                    <span className="text-sm text-gray-600">Health Insurance ( $ {healthPrice} )</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={medicalInsurance}
                        onChange={(e) => setMedicalInsurance(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 accent-[#2bbfaa] cursor-pointer"
                    />
                    <span className="text-sm text-gray-600">Medical Insurance ( $ {medicalPrice} )</span>
                </label>
            </div>

            {/* Book Button */}
            <button className="w-full bg-[#2bbfaa] cursor-pointer duration-300 hover:scale-[1.05] hover:bg-[#25a896] transition-all active:scale-[1] text-white font-bold text-sm tracking-widest py-4 rounded-xl">
                BOOK NOW FOR $ {total}
            </button>
        </div>
    );
}