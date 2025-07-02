"use client";
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import React from 'react';
import {useRef}   from 'react'

export default function Hero() {
    const imageRef = useRef<HTMLDivElement | null>(null);
  return (
    <section className="bg-[#FEFCE4] w-full  py-5">
      <div>
        {" "}
        <div className=" hidden md:flex text-xs md:text-sm text-[#2C2216] tracking-wider  uppercase border-t border-b border-[#2C2216] py-2 flex flex-wrap justify-center gap-4 ">
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
        <div className="md:hidden  text-xs text-[#2C2216] tracking-wider  uppercase border-t border-b border-[#2C2216] py-2  flex flex-wrap justify-center gap-8">
          <Marquee>
            <div>
              <ul className="flex flex-wrap gap-8">
                <li ></li>
                <li> Brand Strategy</li>
                <li>|</li>
                <li> Visual Identity </li>
                <li>|</li>
                <li> Brand Strategy </li>
                <li>|</li>
                <li> Packaging Design </li>
                <li>|</li>
                <li> Art Direction </li>
                <li>|</li>
                <li> UIUX </li>
                <li>|</li>
                <li> Publication </li>
                <li>|</li>

              </ul>
            </div>
          </Marquee>
        </div>
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

      <div className="mt-8 flex flex-row items-center justify-center mx-2  ">
        {/* Hero Content */}
        {/* Left Text Column (mobile stacked) */}
        <div className="flex text-[#2C2216] text-md leading-relaxed max-w-lg mx-1 lg:mx-4">
          <p>
            I help consumer brands turn ideas into design-driven success. As a
            design partner, I craft identities, packaging, and brand experiences
            that don’t just look good—they sell, connect, and last. For me,
            great design isn’t decoration; it’s strategy, storytelling, and
            impact.
          </p>
        </div>

        <div className="flex text-[#2C2216] text-md leading-relaxed max-w-lg mx-1 lg:mx-4">
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
