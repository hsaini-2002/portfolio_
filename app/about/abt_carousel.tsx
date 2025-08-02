"use client";

import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function AbtCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Simple carousel items
  const carouselItems = [
    {
      id: 1,
      image: "/Mask-group.png",
    },
    {
      id: 2,
      image: "/Mask-group.png",
    },
    {
      id: 3,
      image: "/Mask-group.png",
    },
    {
      id: 4,
      image: "/Mask-group.png",
    },
    {
      id: 5,
      image: "/Mask-group.png",
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Determine swipe direction and threshold
    const threshold = 50;
    if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -threshold && currentIndex < carouselItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setTranslateX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Determine swipe direction and threshold
    const threshold = 50;
    if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -threshold && currentIndex < carouselItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setTranslateX(0);
  };

  return (
    <section className=" py-20 relative h-auto md:h-screen">
      <div className="w-full px-4">
        
        {/* Swipe Carousel Container */}
        <div className="overflow-hidden">
          <div 
            ref={containerRef}
            className="flex transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(${-currentIndex * 336 + translateX}px)`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {carouselItems.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 w-80 h-96 mr-7"
              >
                {/* Simple Image Card */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image}
                  alt={`Project ${item.id}`}
                  className="w-full h-full object-cover rounded-lg select-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* View Work Button */}
        <div className="text-center mt-18 md:mt-32 mb-32">
          <Link href="/work">
            <button className="inline-flex items-center px-8 py-3 border-2 border-[#51331B] text-[#51331B] hover:bg-[#51331B] hover:text-white transition-colors duration-200 group">
              <span className="mr-2 text-lg">view work</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
