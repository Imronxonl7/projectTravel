import React from "react";
import Container from "./Container";
import Image from "next/image";
import IndiaImage from '../assets/images/India.svg'

const WanderingSouls = () => {
  return (
    <section className="py-[80px]">
      <Container className="">

        <div className="flex flex-col items-center lg:flex lg:flex-row items-center gap-[48px] lg:gap-[80px] items-center ">

          {/* left */}
          <div className="w-full max-w-[460px] mx-auto lg:mx-0">

            <p className="text-[30px] text-[#1BBC9B] mb-[10px] font-medium" style={{ fontFamily: "'Reenie Beanie', cursive" }}>
              Wandering Souls
            </p>

            <h2 className="text-[34px] leading-[42px] font-bold text-[#1f2937] mb-[14px]">
              Discover Your Next Adventure
            </h2>

            <p className="text-[14px] leading-[22px] text-gray-500 mb-[24px]">
              Whether youre planning a romantic honeymoon or a family
              vacation, our travel packages are designed to suit every
              traveler. Discover the perfect adventure and create
              unforgettable memories.
            </p>

            {/* input */}
            <div className="space-y-[12px] mb-[18px]">
              <input
                type="text"
                placeholder="Organized Group Tour"
                className="w-full border-b border-[#434A54] pb-[6px] outline-none text-[14px]"
              />

              <input
                type="text"
                placeholder="Single Customized Trip"
                className="w-full border-b border-[#434A54] pb-[6px] outline-none text-[14px]"
              />
            </div>

            <button className="bg-[#1BBC9B] text-white text-[13px] px-[22px] py-[10px] rounded-[6px] cursor-pointer">
              MORE INFO
            </button>

          </div>

          {/* right image */}
          <div className="flex justify-center w-full max-w-[610px] h-[300px] sm:h-[400px] lg:h-[500px] mx-auto">
            <Image
              src={IndiaImage}
              alt="india"
              className="rounded-[10px] w-full h-full"
            />
          </div>

        </div>

      </Container>
    </section>
  );
};

export default WanderingSouls;