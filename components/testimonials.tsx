"use client";
import React, { useState } from "react";
import Image from "next/image";

type Card = {
  id: number;
  url: string;
};

const cardData: Card[] = [
  { id: 1, url: "/test2.png" },
  { id: 2, url: "/test1.png" },
  { id: 3, url: "/test3.png" },
];

export default function SwipeCards() {
  const [current, setCurrent] = useState(1); // index of center card

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#40352F] py-20 px-6 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-serif mb-10">
        /letters from clients
      </h2>

      <div className="relative flex items-center justify-center gap-4 w-full max-w-5xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="text-white p-2 hover:scale-105 transition z-10"
        >
          <Image src="/arrow.png" alt="slider" width={30} height={30} />
        </button>

        {/* Cards */}
        <div className="relative sm:h-[300px] md:h-[400px] w-full flex items-center justify-center">
          {cardData.map((card, i) => {
            const position = (i - current + cardData.length) % cardData.length;

            const styles: { [key: number]: string } = {
              0: "rotate-[-6deg] -translate-x-[60%] z-0",
              1: "rotate-0 z-10", // center
              2: "rotate-[6deg] translate-x-[60%] z-0",
            };

            return (
              <div
                key={card.id}
                className={`absolute transition-all duration-500 ease-in-out transform ${
                  styles[position] || "opacity-0 scale-90"
                } w-[220px] sm:w-[300px] md:w-[400px] lg:w-[500px]`}
              >
                <Image
                  src={card.url}
                  alt={`Card ${card.id}`}
                  width={400}
                  height={500}
                  className="w-full h-auto"
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
                />
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="text-white p-2 hover:scale-105 transition z-10"
        >
          <Image src="/arrowr.png" alt="slider" width={30} height={30} />
        </button>
      </div>
    </div>
  );
}
