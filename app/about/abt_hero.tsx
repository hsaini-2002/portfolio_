'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="bg-[#E9DAB6] flex flex-col items-center justify-center h-screen border-2 border-amber-700">
      {/* Desktop View */}
      <section className="hidden max-h-screen  md:flex  flex-col items-center justify-center  px-12 pt-12">
        <div className="w-full max-w-8xl pl-12 pr-12  flex flex-row items-center justify-between">
          {/* Left Image */}
          <div className="relative w-[320px] h-[410px] -mb-28">
            <Image
              src="/aksgif2.png"
              alt="Working"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Center Text */}
          <div className="flex flex-col pl-16   justify-end space-around h-full   items-center    text-center max-w-2xl">
            <h1 className="text-6xl  font-domine font-light text-[#9F8267] leading-tight">
              design<span className="font-sans"> /details </span>that<br />
              feel like magic
            </h1>
            <p className=" text-base mt-12  items-center max-w-[420px] text-[#51331B]">
              Passionate about fair creative practices and building a strong design community.
              I’m here to make brands look good and mean something.
            </p>
            <div className="flex flex-col items-center mt-12 ">
              <Image
                src="/Vector 41.png"
                alt="arrow"
                width={8}
                height={0}
                className="mb-4"
              />
              <p className="text-2xl font-light  text-[#4a3b2f] italic">
                Hi, I&apos;m Akshita!
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative items-start mb-30">
            <Image
              src="/mobileinhand.png"
              alt="Phone call"
        width={460}
height={380}
className='object-fit'
            />
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className=" md:hidden flex-col items-start justify-end px-6 py-12">
        {/* Top Image */}
        <div className="relative  my-12  flex ">
          <Image
            src="/aksgif2.png"
            alt="Working"
           width={210}
           height={210}
            className='items-start justify-center '
          />
        </div>

        {/* Center Text */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-domine text-[#9F8267]">
            design<span className="font-sans"> /details </span>that<br />
            feel like magic
          </h1>
          <p className="mt-4 text-sm text-[#51331B] max-w-[310px] leading-6">
            Passionate about fair creative practices and building a strong design community.
            I’m here to make brands look good and mean something.
          </p>

        </div>

        {/* Arrow + Text */}
        <div className="relative  border-2  h-[320px] mx-auto mt-10 flex justify-between  ">
          {/* Arrow + Text Behind */}
          <div className="absolute top-10 border-2  justify-between   items-end h-auto  flex flex-col ">
            <Image
              src="/Vector 41.png"
              alt="arrow"
              width={8}
              height={80}
              className="mb-4 ri "
            />
            <p className="text-xl font-light w-full  text-[#4a3b2f] italic">
              Hi, I&apos;m Akshita!
            </p>
          </div>

          {/* Phone Image on Top */}
          <div className="absolute  right-0 border-2    w-[150px] h-[280px]">
<div className='border-2'>
            <Image
              src="/mobileinhand.png"
              alt="Phone call"
             width={350}
             height={350}
             />
            </div>
          </div>
        </div>

      </section>
        {/* Arrow + Text */}


    </div>
  );
}
