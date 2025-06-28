"use client";
import Image from 'next/image';
import React from 'react';
import {useRef}   from 'react'

export default function Hero() {
    const imageRef = useRef<HTMLDivElement | null>(null);
  return (
    <section className="bg-[#FEFCE4] w-full px-4 py-5">
      <div className="text-xs md:text-sm text-[#2C2216] tracking-wider uppercase border-t border-b border-[#2C2216] py-2 flex flex-wrap justify-center gap-4">
        <span>Brand Strategy</span>
        <span>|</span>
        <span>Visual Identity</span>
        <span>|</span>
        <span>Packaging Design</span>
        <span>|</span>
        <span>Art Direction</span>
        <span>|</span>
        <span>UIUX</span>
        <span>|</span>
        <span>Publication</span>
      </div>

      {/* Middle Image for large screens */}
      <div
        className="w-auto py-10 hidden sm:flex items-center justify-center text-[#2C2216] text-sm"
        ref={imageRef}
      >
        <Image src="/hero4x.png" alt="hero" width={1108} height={674} />
      </div>

      {/* Middle Image for mobile */}
      <div
        className="w-auto py-5 flex sm:hidden items-center justify-center text-[#2C2216] text-sm"
        ref={imageRef}
      >
        <Image src="/Hero_mobile.png" alt="hero" width={462} height={523} />
      </div>

      <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-20 ">
        {/* Hero Content */}
        {/* Left Text Column (mobile stacked) */}
        <div className="flex-1 text-[#2C2216] text-md leading-relaxed max-w-lg mx-10 lg:mx-4">
          <p>
            I help consumer brands turn ideas into design-driven success. As a
            design partner, I craft identities, packaging, and brand experiences
            that don’t just look good—they sell, connect, and last. For me,
            great design isn’t decoration; it’s strategy, storytelling, and
            impact.
          </p>
        </div>

        <div className="flex-1 text-[#2C2216] text-md leading-relaxed max-w-lg mx-10 lg:mx-4">
          <p>
            I help consumer brands turn ideas into design-driven success. As a
            design partner, I craft identities, packaging, and brand experiences
            that don’t just look good—they sell, connect, and last. For me,
            great design isn’t decoration; it’s strategy, storytelling, and
            impact.
          </p>
        </div>
      </div>
    </section>
  );
}
