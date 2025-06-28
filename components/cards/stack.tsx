"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { featuredWork } from "./data";
import WorkCard from "./card";


export default function FeaturedWorkStack() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end end"],
  });

  return (
    <>
      <main
        ref={containerRef}
        className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-center justify-center ">
          <div className="text-left z-10 relative">
            <h1 className="py-2 text-[#2C2216] text-2xl md:text-3xl font-bold lg:text-5xl font-serif">
              /featured{" "}
              <span className="relative inline-block">
                <span className="relative z-10">work</span>
                <img
                  src="/Vector.png"
                  alt="circle"
                  className="absolute inset-0 -top-0 left-0 w-full h-full z-0 pointer-events-none"
                />
              </span>
            </h1>
          </div>
          <div>
            {featuredWork.map((card, i) => {
              const targetScale = 1;

              return (
                <WorkCard
                  key={card.id}
                  i={i}
                  card={card}
                  progress={scrollYProgress}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
        </div>
        {/* Button Section */}
      </main>
    </>
  );
}
