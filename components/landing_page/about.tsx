import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="text-[#2C2216]  sm:py-8 px-4 sm:px-8 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-y-8">
          <div className="flex items-center justify-center pt-4">
            <button className="border border-[#2C2216] text-[#2C2216] px-4 py-2 text-sm flex items-center gap-2 hover:bg-[#2C2216] hover:text-white transition-colors">
              view work <span>↗</span>
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap max-h-2xl items-center">
            <div>
              <h1 className="text-4xl md:text-5xl text-[#51331B] leading-tight ">
                your design partner in{" "}
                <span className="font-domine">building</span>/brands that sell,
                scale &<span className="font-domine"> stand out*.</span>
              </h1>
            </div>

            <div className="w-full h-auto mt-8 lg:mt-0">
              <Image
                src="/loremipsum.png"
                alt="A magnifying glass over a piece of paper"
                width={513}
                height={378}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-center md:items-st">
            <div>
              <p className="  text-center md:text-left  md:text-base md:text-lg">
                I help consumer brands turn ideas into design-driven success. As
                a design partner, I craft identities, packaging, and brand
                experiences that don&#39;t just look good&#8212;they sell,
                connect, and last. For me, great design isn&#39;t decoration;
                it&#39;s strategy, storytelling, and impact.
              </p>
            </div>

            <div className="flex flex-col items-center  md:items-start">
              <p className="md:text-base md:text-md uppercase mb-6 text-center md:text-left font-bold">
                I HELP CONSUMER BRANDS TURN IDEAS INTO DESIGN-DRIVEN SUCCESS. AS
                A DESIGN PARTNER, I CRAFT IDENTITIES, PACKAGING, AND
              </p>
              <div className="flex items-center justify-center">
                <Link href="/about">
                  <button className="border-2 border-[#2C2216] font-semi-bold text-[#2C2216] px-4 py-2 text-sm flex items-center gap-2 md:gap-4 hover:bg-[#2C2216] group hover:text-white transition-colors">
                    <span className="mr-2 font-regular text-base md:text-xl leading-6 md:leading-7 tracking-tight">about</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
