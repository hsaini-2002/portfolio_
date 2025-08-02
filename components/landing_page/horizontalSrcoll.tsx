"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
    <section ref={sectionRef} className="relative h-[200vh]   ">
      {/* Sticky Heading */}
      <div className="sticky top-0 md:h-screen flex flex-col justify-between mt-20 md:mt-0 p-5 md:p-20 z-0">
        <h1 className="text-[#51331B] text-[40px] md:text-7xl leading-tight">
          /brand identities <br />
          that drive <span className="font-domine"> success</span>
        </h1>
        <div className="md:mt-10">
          <Link href="/work">
            <button className="border m-10 border-[#51331B] text-[#51331B] px-4 py-2 text-sm flex items-center gap-2 hover:bg-[#51331B] hover:text-white transition-colors group z-20 cursor-pointer">
              <span className="mr-2 font-regular text-base md:text-xl leading-6 md:leading-7 tracking-tight">view work</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </Link>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div className="absolute top-0 h-full w-full pointer-events-none">
        <div className="sticky top-0 h-screen flex p-5 md:p-20 overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-4 md:gap-12 px-5 md:px-20 pointer-events-auto relative items-center md:items-start z-10"
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`relative mt-5 ${index % 2 === 0 ? 'md:top-0' : 'md:top-[300px]'}`}
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
  // Define different sizes for desktop
  const desktopSizes = [
    { h: 300, w: 300 },
    { h: 250, w: 300 },
    { h: 300, w: 500 },
    { h: 200, w: 200 },
    { h: 300, w: 300 },
  ];
  
  const { h, w } = desktopSizes[index % desktopSizes.length];

  return (
    <div 
      className="rounded-xl overflow-hidden shadow-md bg-white w-[180px] h-[180px] md:h-[var(--desktop-height)] md:w-[var(--desktop-width)]"
      style={{ 
        '--desktop-height': `${h}px`, 
        '--desktop-width': `${w}px` 
      } as React.CSSProperties}
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
  { url: "/living.png", title: "Title 1", id: 1 },
  { url: "/kissable.png", title: "Title 2", id: 2 },
  { url: "/solace.png", title: "Title 3", id: 3 },
  { url: "/naija.png", title: "Title 4", id: 4 },
  { url: "/label.png", title: "Title 5", id: 5 },
];

export default HorizontalScroll;
