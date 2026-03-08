import Image from "next/image";
import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
const ContactUsPage = () => {
  return (
    <div className="w-full font-sans">
      {/* Hero */}
      <div className="relative w-full h-72 sm:h-96 overflow-hidden">
        <Image
          src="https://aperturejourneys.com/wp-content/uploads/2022/03/Greece_Aperture_Journeys_Tours_Athens-Greece-Inspection-Trip-2021-20211219_122039-5.jpg"
          alt="ContactUs Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,30,0.75),rgba(0,0,0,0.1))] z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full gap-2">
          
          <p
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Contact Us
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
              <MapPin className="text-emerald-500" size={22} />
            </div>
            <h3 className="font-bold text-gray-800 text-base">Location</h3>
            <div className="text-sm text-gray-500 leading-relaxed">
              <p className="font-medium text-gray-700 mb-1">Travel Agency</p>
              <p>123 Ocean Drive, Miami Beach</p>
              <p className="mt-3 font-medium text-gray-700 mb-1">
                Travel Operator
              </p>
              <p>456 Sunset Blvd, Los Angeles</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
              <Phone className="text-emerald-500" size={22} />
            </div>
            <h3 className="font-bold text-gray-800 text-base">
              Give us a call
            </h3>
            <div className="text-sm text-gray-500 leading-relaxed">
              <p className="font-medium text-gray-700 mb-1">Mobile Number</p>
              <p>+1 (800) 123-4567</p>
              <p className="mt-3 font-medium text-gray-700 mb-1">
                Office Number
              </p>
              <p>+1 (305) 987-6543</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
              <Mail className="text-emerald-500" size={22} />
            </div>
            <h3 className="font-bold text-gray-800 text-base">
              Write for anything
            </h3>
            <div className="text-sm text-gray-500 leading-relaxed">
              <p className="font-medium text-gray-700 mb-1">Quotes</p>
              <a
                href="mailto:quotes@travel.com"
                className="text-emerald-600 hover:underline"
              >
                quotes@travel.com
              </a>
              <p className="mt-3 font-medium text-gray-700 mb-1">Consulting</p>
              <a
                href="mailto:info@travel.com"
                className="text-emerald-600 hover:underline"
              >
                info@travel.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Form — Client Component */}
      <ContactForm />

      {/* Map */}
      {/* Map - formning tagiga kirib ketsin */}
      <div
      
       className="w-full h-150 -mt-62 relative z-0">
        <iframe
          src="https://maps.google.com/maps?q=Miami+Beach&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactUsPage;
