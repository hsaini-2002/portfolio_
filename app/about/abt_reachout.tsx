"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";

export default function AbtReachout() {
  // Text for the auto-scrolling strip
  const scrollText = "LET'S BUILD SOMETHING BOLD. REACH OUT FOR COMMISSIONS, COLLABS, OR CONSULTS. LET'S BUILD SOMETHING BOLD. REACH OUT FOR COMMISSIONS, COLLABS, OR CONSULTS.";

  return (
    <div className="">
      {/* Auto-scrolling angled text strip */}
      <div className="relative h-10 md:h-16 bg-[#AAC7FF] flex items-center overflow-hidden transform -rotate-[1.07deg] -mt-6 z-60">
        <div className="animate-scroll whitespace-nowrap">
          <span className="text-[#51331B] font-regular text-[11px] md:text-lg tracking-[2.7px] md:tracking-[4px]  leading-5 md:leading-8">
            {scrollText.repeat(1)}
          </span>
        </div>
      </div>
    
      <section className="relative z-50 py-10 lg:py-30 h-auto mb-20 pt-10"> {/* Reduced vertical padding for mobile, kept desktop */}
            {/* Main content container - Centers horizontally, acts as relative parent for absolute elements */}
            <div className="max-w-6xl mx-20 px-4 relative"> 
                
                {/* Container for Megaphone + Header/Button group. Stacks on mobile, row on large screens */}
                <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center">
                    
                    {/* Megaphone Icon */}
                    {/* Positioned slightly off-center left on mobile, part of flex row on desktop */}
                    <div className="relative w-[138px] h-[151px] -ml-56 -mb-10 lg:static lg:w-[274px] lg:h-[299px] lg:mr-8 lg:ml-0 lg:mb-0">
                        <Image 
                            src="/microphone.png"
                            alt="Megaphone Icon"
                            width={138} // Smaller default width for mobile
                            height={151} // Smaller default height for mobile
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Header and Button Group */}
                    <div className="flex flex-col items-center">
                        <div className="relative z-50 text-center"> {/* Added text-center for mobile alignment */}
                            <h2 className="text-[38px] lg:text-[64px] leading-[34px] md:leading-[109px] font-regular text-[#51331B] mb-4 lg:mb-0"> {/* Adjusted font size for mobile, preserved desktop */}
                                Reach out now
                            </h2>
                            
                            {/* Floral element overlapping */}
                            {/* Adjusted position and size for mobile to match image, reverted for desktop */}
                            <div className="absolute top-3 -right-10 w-[80px] h-[80px] -z-10 lg:top-7 lg:-right-[30%] lg:w-[161px] lg:h-[155px]">
                                <Image 
                                    src="/floral.png"
                                    alt="Floral decoration"
                                    width={80} // Smaller default width for mobile
                                    height={80} // Smaller default height for mobile
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        <button className="inline-flex justify-center gap-2 lg:gap-4 items-center w-[200px] h-[40px] px-6 py-2 border-2 border-[#51331B] text-[#51331B] hover:bg-[#51331B] hover:text-white transition-colors duration-200 group mt-8 lg:w-[260px] lg:h-[50px] lg:px-8 lg:py-3"> {/* Adjusted size and padding for mobile, preserved desktop */}
                            <span className="text-base lg:text-xl leading-6 lg:leading-7 tracking-tight">start a project</span> {/* Adjusted text size for mobile, preserved desktop */}
                            <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" /> {/* Adjusted icon size for mobile, preserved desktop */}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    {/* CSS for auto-scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
