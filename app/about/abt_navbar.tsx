"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { name: "/work", href: "/work" },
    { name: "/about", href: "/about" },
    { name: "/play", href: "/play" },
];

export default function Abt_header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const { scrollY } = useScroll();

    // const animationRange = [0, 400];

    // const headerHeight = useTransform(scrollY, animationRange, ["80vh", "96px"]);

    // const logoScale = useTransform(scrollY, animationRange, ["7vw", 2]);

    // const navOpacity = useTransform(scrollY, [300, 400], [0, 1]);

    return (
        <>
            <motion.header
                className=" top-0 z-50 flex justify-center items-center relative"
                // style={{ height: headerHeight }}
            >
                <motion.div
                    className="hidden md:flex absolute top-0 bg-[#FEFCE4] left-0 w-full h-24 px-8 justify-between items-center"
                    // style={{ opacity: navOpacity }}
                >
                    <nav className="flex space-x-6 text-[#2C2216] text-xl font-medium">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                <motion.div className="hidden md:block" >
                    <Link href="/" className="text-5xl  text-[#2C2216]  whitespace-nowrap">
                        <span className="font-domine"> akshita</span>
                        <span> agarwal</span><span className="font-domine">*</span>
                    </Link>
                </motion.div>

                {/* Navigation & CTA: Absolutely positioned and fade in on scroll */}
                    {/* Left: Nav links */}


                    {/* Right: CTA Button */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/contact"
                            className="bg-[#2C2216] text-[#fdf8e2] px-4 py-2 text-lg  flex items-center gap-1"
                        >
                            start a project{" "}
                            <span>
                                {" "}
                                <Image
                                    src="/buttonarrow.png"
                                    alt="bottom"
                                    width={15}
                                    height={15}
                                />{" "}
                            </span>
                        </Link>
                    </div>
                </motion.div>

                {/* --- Mobile Header (Static) --- */}

                <div className="flex flex-col  md:hidden ">
                    <div className="md:hidden   flex  items-center mr-1 justify-end bg-[#FEFCE4] p-2">
                    <div className="text-2xl  items-center justify-center flex  text-[#2C2216] md:hidden  whitespace-nowrap">
                        <span className="font-domine pr-2 ">akshita</span>
                        <span className="font-domine">agarwal*</span>
                    </div>
                        <div>

                            <Link
                                href="/"
                                className="bg-[#2C2216] text-[#fdf8e2] mx-2  px-1 py-2 text-xs flex items-end  gap-1 "
                            >
                                start a project{" "}
                                <span>
                                    <Image
                                        src="/buttonarrow.png"
                                        alt="bottom"
                                        width={15}
                                        height={15}
                                    />{" "}
                                </span>
                            </Link>
                        </div>

                        {/* Right: Menu Icon */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#675744]"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {/* --- Mobile Menu --- */}
                {isMenuOpen && (
                    <motion.div
                        className="absolute top-full left-0 w-full bg-[#FEFCE4] border-t border-[#2C2216]/10 shadow-lg z-40"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <nav className="flex flex-col py-4 px-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="py-3 text-[#2C2216] text-lg font-medium border-b border-[#2C2216]/10 last:border-b-0 hover:bg-[#2C2216]/5 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </motion.header>
        </>
    );
}
