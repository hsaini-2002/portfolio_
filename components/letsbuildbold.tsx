"use client";
import React from "react";
import Image from "next/image";

const LetsBuildBold = () => {
  return (
    <section className="bg-[#FFF8E7] px-4 py-12 sm:py-16 md:py-20 lg:py-24 w-full relative flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Mobile-specific button: visit instagram */}
      <div className="md:hidden mb-8">
        {""}
        {/* Only visible on mobile, adds margin below */}

      </div>

      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto relative z-10 flex flex-col items-center justify-center">
        {/* Glasses Icon - Adjusted for responsive positioning */}
        <div
          className="absolute z-20"
          style={{
            top: "-20%", // Adjust based on visual
            left: "-5%", // Adjust based on visual
            width: "min(30%, 300px)", // Responsive width, max 150px
          }}
        >
          <Image
            src="/glasses.png"
            alt="glasses"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Label */}
        <p className="uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-[#51331B] mb-2 sm:mb-3 md:mb-4">
          Ready to do design right?
        </p>

        {/* Heading */}
        <div className="relative">
          <h2 className="text-[1.5rem] xs:text-[1.8rem] sm:text-[2rem]  md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.6rem] text-[#51331B] font-serif  leading-[1.1] sm:leading-tight">
            Let's build <span className="font-sans">/bold</span>
          </h2>

          {/* Stamp positioned relative to heading/main content, adjusted for responsiveness */}
          <div
            className="absolute z-20"
            style={{
              bottom: "-200%", // Adjust based on visual
              right: "-25%", // Adjust based on visual
              width: "min(40%, 180px)", // Responsive width, max 120px
            }}
          >
            <Image
              src="/stamp.png"
              alt="stamp"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Button */}
        <div className="relative inline-block mt-4 sm:mt-6 md:mt-8">
          <button className="px-3 py-2 xs:px-4 xs:py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:px-7 lg:py-4 border border-[#51331B] text-[#51331B] rounded-sm font-medium text-sm sm:text-base md:text-lg flex items-center gap-1 sm:gap-2 hover:scale-105 hover:bg-[#51331B] hover:text-white transition-all duration-300 ease-out">
            start a project
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">
              ↗
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LetsBuildBold;
