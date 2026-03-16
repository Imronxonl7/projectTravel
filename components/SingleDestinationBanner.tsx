// components/TravelInfoBar.jsx

export default function TravelInfoBar() {
    return (
        <div className="w-full bg-white rounded-2xl shadow-lg px-4 md:px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between">
            {/* Packages */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2h-1A1.5 1.5 0 0 0 9 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L12 19v-5.5l9 2.5z" />
                    </svg>
                </div>
                <div>
                    <p className="text-sm text-gray-400 font-medium">Packages</p>
                    <p className="text-base font-bold text-gray-800">3 Available</p>
                </div>
            </div>

            {/* Divider */}
            <div className="h-6 md:h-12 w-px bg-gray-100" />

            {/* Contact Person */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14c-3.86 0-7 1.79-7 4v1h14v-1c0-2.21-3.14-4-7-4zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 0" />
                        <path d="M9 12a3 3 0 1 1 6 0" />
                        <circle cx="12" cy="8" r="3" />
                        <path d="M19 11l-1.5-1.5M19 11l1.5-1.5M19 11v-3" />
                    </svg>

                </div>
                <div>
                    <p className="text-sm text-gray-400 font-medium">Sue Black</p>
                    <p className="text-base font-bold text-gray-800">+ 485 257 294</p>
                </div>
            </div>

            {/* Divider */}
            <div className="h-6 md:h-12 w-px bg-gray-100" />

            {/* Contact Us */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                </div>
                <div>
                    <p className="text-sm text-gray-400 font-medium">Contact Us</p>
                    <p className="text-base font-bold text-gray-800">travel@info.com</p>
                </div>
            </div>
        </div>
    );
}