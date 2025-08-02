"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  console.log(i, "i");

  const handleNavigateToProject = () => {
    // Create a URL-friendly slug from the card title
    const slug = `${card.title.toLowerCase().replace(/\s+/g, '-')}`;
    router.push(`/work/${slug}`);
  };

  return (
    <div className="w-full sm:w-xl md:w-3xl lg:w-6xl flex items-center justify-center sticky overflow-visible px-4 z-[5]" style={{ top: `${NAVBAR_HEIGHT_PX + i * 20}px` }}>
      <motion.div
        style={{
          scale,
          transformOrigin: "top",
        }}
        className="relative transform-gpu w-full"
      >
        <div
          className={`h-auto md:p-4 ${card.bgColor} relative px-3 pt-5 pb-3 md:p-5`}
        >
          <div className="items-start">
            <div>
              <div className="flex items-start justify-between">
                <p
                  className={`text-xs md:text-sm flex items-start ${card.fontColor}`}
                >
                  {card.category}
                </p>
                <p className={`text-xs md:text-sm ${card.fontColor}`}>
                  /{card.type}
                </p>
              </div>

              <div className={`${card.fontColor} border opacity-15 my-2`}></div>
              <div className="flex items-start justify-between">
                <h1
                  className={` text-3xl md:text-4xl flex items-start  mt-1 mb-5 ${card.fontColor}`}
                >
                  {card.title}
                </h1>
                <button 
                  className="p-2 mt-4 hover:bg-white/10 transition cursor-pointer"
                  onClick={handleNavigateToProject}
                >
                  <ArrowRight className={`${card.fontColor} h-5 w-5`} />
                </button>
              </div>
            </div>
            <div className=""></div>
          </div>

          <div className=" ">
            {/* Desktop */}
            <div className="hidden md:flex">
              <Image
                src={card.image}
                alt={card.title}
                width={1028}
                height={638}
              />
            </div>

            {/* Mobile */}
            <div className="md:hidden">
              <Image
                src={card.mobile_image}
                alt={card.title}
                width={400}
                height={436}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkCard;
