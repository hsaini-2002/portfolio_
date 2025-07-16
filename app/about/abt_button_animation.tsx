"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="w-full h-screen font-sans text-white">
            {/* Desktop Layout */}
            <div className="hidden lg:flex">
                
                <div className="flex-1 bg-[#231f20] px-16 py-20 space-y-30">
                    <div className="border-amber-700 border-4">
                    <div>
                    <h1 className="text-[#b2b9ff] text-6xl leading-tight font-semibold">
                        the idea of design is <br /> shifting. it’s dynamic <br /> than ever.
                    </h1>
                    </div>
                    </div>
                    <div className="border-t border-gray-500 w-fit pt-4">
                        <div className="border-2 border-amber-400">
                        <h2 className="text-sm uppercase text-gray-400 tracking-widest">The Design Game</h2>
                        <p className="text-sm text-gray-300 max-w-md pt-2">
                            I help consumer brands turn ideas into design–driven success. I help consumer brands turn ideas into design–driven success.
                        </p>

                    <div className="grid grid-cols-2 gap-10 text-sm text-gray-300 max-w-5xl">
                        <p>
                            I create strategies that cut through the noise and make an impact. I believe great design isn’t just about looking good—it’s about telling a story that sticks.
                        </p>
                        </div>
                    </div>
                        <div className="border-2 border-emerald-800">
                        <p>
                            Passionate about fair creative practices and building a strong design community, I’m here to make brands look good and mean something. My industry connections and sharp eye for final output mean I know how to make ideas look good—and make sense.
                        </p>
                    </div>
                </div>
                </div>

                <div className="flex-[0.5] relative bg-[#2d2420] flex items-center justify-center">
                    <motion.div
                        className="absolute top-10 right-20 rotate-12 cursor-pointer"
                        animate={{ rotate: isHovered ? 180 : 0 }}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Image src="/rotating_button.png" alt="rotating" width={100} height={100} />
                    </motion.div>

                    <Image
                        src="/women_portrait.png"
                        alt="woman"

                        fill
                        className=""
                    />
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col w-full bg-[#231f20] text-white px-6 py-10 space-y-8">
                <h1 className="text-[#b2b9ff] text-3xl leading-snug font-semibold">
                    the idea of design is <br /> shifting. it’s dynamic <br /> than ever.
                </h1>

                <div className="border-t border-gray-500 w-fit pt-4">
                    <h2 className="text-sm uppercase text-gray-400 tracking-widest">The Design Game</h2>
                    <p className="text-sm text-gray-300 max-w-md pt-2">
                        I help consumer brands turn ideas into design–driven success. I help consumer brands turn ideas into design–driven success.
                    </p>
                </div>

                <div className="text-sm text-gray-300 space-y-6">
                    <p>
                        I create strategies that cut through the noise and make an impact. I believe great design isn’t just about looking good—it’s about telling a story that sticks.
                    </p>
                    <p>
                        Passionate about fair creative practices and building a strong design community, I’m here to make brands look good and mean something. My industry connections and sharp eye for final output mean I know how to make ideas look good—and make sense.
                    </p>
                </div>

                <div className="relative mt-6">
                    <motion.div
                        className="absolute -top-10 left-1/2 -translate-x-1/2 cursor-pointer"
                        animate={{ rotate: isHovered ? 180 : 0 }}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Image src="/rotate-sticker.png" alt="rotating" width={80} height={80} />
                    </motion.div>

                    <Image
                        src="/portrait.png"
                        alt="woman"
                        width={300}
                        height={400}
                        className="mx-auto rounded-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
}