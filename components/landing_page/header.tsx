"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "/work", href: "/work" },
  { name: "/about", href: "/about" },
  { name: "/play", href: "/play" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const animationRange = [0, 400];

  const headerHeight = useTransform(scrollY, animationRange, ["80vh", "96px"]);

  const logoScale = useTransform(scrollY, animationRange, ["7vw", 2]);

  const navOpacity = useTransform(scrollY, [300, 400], [0, 1]);

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 flex my-9 justify-center items-center bg-[#FEFCE4]"
        style={{ height: headerHeight }}
      >
        <motion.div className="hidden md:block" style={{ scale: logoScale }}>
          <Link href="/" className="text-xl  text-[#2C2216] whitespace-nowrap">
            <span className="font-domine"> akshita</span>
            <span> agarwal</span><span className="font-domine">*</span>
          </Link>
        </motion.div>

        {/* Navigation & CTA: Absolutely positioned and fade in on scroll */}
        <motion.div
          className="hidden md:flex absolute top-0 left-0 w-full h-20 px-4 justify-between items-center"
          style={{ opacity: navOpacity }}
        >
          {/* Left: Nav links */}
          <nav className="flex space-x-6 text-[#2C2216] text-lg font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-[#2C2216] text-[#fdf8e2] px-4 py-2 text-sm  flex items-center gap-1"
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

        <div className="flex flex-col w-full md:hidden ">
          <div className="md:hidden w-full h-auto px-4  flex  items-end justify-end">
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
          <div className="text-[3.2rem]  items-center justify-center  flex    text-[#2C2216] md:hidden  whitespace-nowrap">
            <span className="font-domine  px-3 ">akshita</span> agarwal{" "}
            <span className="font-domine">*</span>
          </div>
        </div>
        {/* --- Mobile Menu --- */}
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-[#FEFCE4] z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <nav className="flex flex-col space-y-6 text-[#2C2216] text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
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
