"use client";
import React from "react";
import Image from "next/image";

const LetsBuildBold = () => {
  return (
    <section className=" py-24 px-4 md:px-10 w-full relative h-[80vh] flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        {/* Label */}
        <p className="uppercase tracking-widest text-md md:text-lg text-[#51331B] mb-2 z-10">
          Ready to do design right?
        </p>


        <div className="relative inline-block">

          <div className="absolute -top-14 -left-32 md:-top-20 md:-left-30 z-20">
            <Image
              src="/glasses.png"
              alt="glasses"
              width={220}
              height={100}
              className="object-contain"
            />
          </div>


          <h2 className="text-5xl md:text-6xl lg:text-8xl text-[#51331B] font-serif font-bold leading-tight z-10 relative">
            Let’s build <span className="font-sans">/bold</span>
          </h2>


          <div className="absolute -bottom-12 -right-18 md:-bottom-35 md:-right-32 z-20">
            <Image
              src="/stamp.png"
              alt="stamp"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsBuildBold;
