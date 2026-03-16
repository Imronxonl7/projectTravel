import DestinatoinPageCards from "@/components/DestinatoinPageCards";
import getData from "@/utils/api";
import Image from "next/image";
import React from "react";

const DestinationPage = async () => {
  const destinations = await getData({ url: "destination" });
  return (
    <section className="w-full">
      <div className="relative w-full h-96 overflow-hidden">
        <Image
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-TVvoNzqQ0RhuKxSqZcFMtShNrZKTxR1Fg&s'
          alt="Footer Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1d1d1d,rgba(0,0,0,0)_100%)] z-10" />
        <div className="relative z-20 flex items-center justify-center h-full">
          <p className="text-[50px] font-bold text-white">Our Destination</p>
        </div>
      </div>
      <DestinatoinPageCards destinations={destinations} />
    </section>
  );
};

export default DestinationPage;
