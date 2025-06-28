"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { WorkCardData } from "./data";

interface WorkCardProps {
  i: number;
  card: WorkCardData;
  progress: MotionValue<number>;
  targetScale: number;
}

const NAVBAR_HEIGHT_PX = 96;

const WorkCard: React.FC<WorkCardProps> = ({
  i,
  card,
  progress,
  targetScale,
}) => {
  const scale = useTransform(progress, [0, 1], [1, targetScale]);
  console.log(i, "i");

  return (
    <div className=" sm:w-xl md:w-3xl lg:w-6xl flex items-center justify-center sticky  top-0 px-4 z-[5]">
      <motion.div
        style={{
          scale,
          transformOrigin: "top",
          top: `${NAVBAR_HEIGHT_PX }px`,
        }}
        className="relative transform-gpu"
      >
        <div className={`h-auto md:p-8 ${card.bgColor} relative p-5 `}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-xs md:text-sm flex items-start ${card.fontColor}`}>
                {card.category}
              </p>
              <h2
                className={`sm:text-2xl md:text-2xl lg:text-4xl flex items-start font-bold font-serif mt-1 ${card.fontColor}`}
              >
                {card.title}
              </h2>
            </div>
            <div className="text-right">
              <p className={`text-xs md:text-sm ${card.fontColor}`}>
                /{card.type}
              </p>
              <button className="hidden md:block p-2 mt-4 hover:bg-white/10 transition">
                <ArrowRight className={`${card.fontColor} h-5 w-5`} />
              </button>

            </div>
          </div>

          <hr className="my-4 border-[#ccc]/40" />

          <div className="relative w-full overflow-hidden ">
            <Image
              src={card.image}
              alt={card.title}
              className="object-cover"

              width={995}
              height={461}
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkCard;
