"use client";
import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative bg-[#C29776] text-white px-6 md:px-12 pt-10 pb-20 rounded-t-[2rem] overflow-hidden">
      <div className="relative z-10 ">
        <h1 className="text-[3rem] md:mx-5 justify-center flex px-4 md:text-[8rem] lg:text-[10rem]   leading-none text-[#FEFCE4]">
          <span className="font-domine  md:mx-4 mx-1 sm:text-[4rem] md:text-[5rem] lg:text-[10rem]   leading-none">
            akshita
          </span>{" "}
          <span className="sm:text-[4rem] md:mx-4 mx-1  md:text-[5rem] lg:text-[10rem]   leading-none">
            agarwal<span className="font-domine">*</span>
          </span>
        </h1>

        <div className="absolute left-1/2 top-[41%] min-[425px]:top-[38%] min-[625px]:top-[30%] md:top-[35%] transform -translate-x-1/2 -translate-y-37 z-2">
          <div className=" ">
            <Image
              src="/moniter.png"
              alt="Monitor"
              width={500}
              height={30}
              className="scale-200 min-[425px]:scale-150 min-[625px]:scale-140 md:scale-100"
            />
          </div>
        </div>

        <div className="mt-60 min-[625px]:mt-70 md:mt-40 flex flex-wrap md:mx-10 md:justify-between items-center text-black text-lg font-light px-2 md:px-0">
          <div className="flex max-[768px]:w-full max-[768px]:justify-between space-x-6">
            <a href="#">/work</a>
            <a href="#">/play</a>
            <a href="#">/about</a>
            <a href="#">/contact</a>
          </div>
          <div className="flex max-[768px]:w-full max-[768px]:justify-between space-x-6 mt-4 md:mt-0">
            <a href="#">/linkedin</a>
            <a href="#">/instagram</a>
            <a href="#">/behance</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
