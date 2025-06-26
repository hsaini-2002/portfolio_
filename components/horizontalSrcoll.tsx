"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type CardType = {
  url: string;
  title: string;
  id: number;
};

const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scroll progress mapped to horizontal x translation
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-80%"]);

  return (
    <section ref={sectionRef} className="relative h-[200vh]  ">
      {/* Sticky Heading */}
      <div className="sticky top-0 h-screen flex flex-col justify-between  p-20 z-0">
        <h1 className="text-[#51331B] font-serif text-6xl md:text-7xl leading-tight">
          /brand identities <br />
          that drive success
        </h1>
        <div className="mt-10">
          <button className="border m-10 border-[#51331B] text-[#51331B] px-4 py-2 text-sm flex items-center gap-2 hover:bg-[#51331B] hover:text-white transition-colors">
            view work <span>↗</span>
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div className="absolute top-0 h-full w-full  pointer-events-none">
        <div className="sticky top-0 h-screen flex  p-20  overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-12 px-20 pointer-events-auto relative"
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="relative"
                style={{
                  top: index % 2 === 0 ? "0px" : "300px", // stagger vertically
                }}
              >
                <Card card={card} index={index} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card, index }: { card: CardType; index: number }) => {
  // Define different sizes
  const sizes = [
    { h: 300, w: 300 },
    { h: 250, w: 300 },
    { h: 300, w: 250 },
    { h: 200, w: 200 },
    { h: 270, w: 270 },
  ];
  const { h, w } = sizes[index % sizes.length];

  return (
    <div
      className="rounded-xl overflow-hidden shadow-md bg-white"
      style={{ height: `${h}px`, width: `${w}px` }}
    >
      <Image
        src={card.url}
        alt={card.title}
        width={w}
        height={h}
        className="object-cover w-full h-full"
      />
    </div>
  );
};


const cards: CardType[] = [
  { url: "/Container1.png", title: "Title 1", id: 1 },
  { url: "/Container2.png", title: "Title 2", id: 2 },
  { url: "/Container3.png", title: "Title 3", id: 3 },
  { url: "/Container4.png", title: "Title 4", id: 4 },
  { url: "/Container2.png", title: "Title 5", id: 5 },
];

export default HorizontalScroll;
