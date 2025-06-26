
"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { featuredWork } from "./data";
import WorkCard from "./card";

export default function FeaturedWorkStack() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef} className="relative ">
      <div className="text-left ">
        <h1 className="text-xl md:text-2xl lg:text-3xl py-4 text-[#2C2216] font-bold font-serif">/featured work</h1>
      </div>

      {featuredWork.map((card, i) => {
        const targetScale = 1 - i * 0.05;

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
    </main>
  );
}
