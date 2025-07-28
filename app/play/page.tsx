"use client"

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Navbar from './play_navbar'

export default function PlayPage() {
  const products = [
    {
      id: 1,
      name: "Yolo Roots Muesli",
      images: ["/play_1.png", "/proj4.png", "/work1.png"]
    },
    {
      id: 2,
      name: "ReThinQ Hydration Sticks",
      images: ["/play_2.png", "/proj4.png", "/work2.png"]
    },
    {
      id: 3,
      name: "BabLouie Cocktail Mixers",
      images: ["/play_3.png", "/proj4.png", "/work3.png"]
    },
    {
      id: 4,
      name: "Fitfeast Protein Chips",
      images: ["/play_4.png", "/proj2.png", "/proj3.png"]
    },
    {
      id: 5,
      name: "Reynolds Pens",
      images: ["/play_5.png", "/proj4.png", "/proj5.png"]
    },
    {
      id: 6,
      name: "Zuno Energy Gums",
      images: ["/play_6.png", "/test1.png", "/test2.png"],
      isLaunching: true
    }
  ]

  return (
    <>
    <Navbar />
    <div className="min-h-screen">
      {/* Hero Section - "loved by insiders" */}
      <section className="relative bg-[#2C2216] py-16 lg:py-24">
        <div className="lg:w-full mx-auto flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="text-[#AAC7FF] mt-8 lg:mt-16 lg:ml-36 z-10">
            <h1 className="text-[32px] lg:text-5xl text-center lg:text-left font-light leading-[109px] tracking-[-1px] mb-4">
              loved by <span className="font-domine">insiders</span>
            </h1>
            <p className="max-w-md leading-[25px] text-center lg:text-left text-sm lg:text-lg mx-[15px] lg:mx-0 lg:mr-18">
              A protein snacking brand based in India, redefining protein snacking in India as a 
              mission to protein. A protein snacking brand based in India, redefining protein 
              snacking in India as a mission to protein. A protein snacking brand based in India, 
              redefining protein.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end z-0 pt-18 lg:pt-0">
            <div className="relative right-0">
              <Image
                src="/side_pic.png"
                alt="Client book mockup with golden clip"
                width={1250}
                height={400}
                className="lg:max-w-full lg:max-h-full object-contain h-auto drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] lg:text-4xl text-center mb-12 lg:mb-16 text-gray-900 font-light">
            Shop products I designed
          </h2>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#2C2216]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

function ProductCard({ product }: { product: { id: number; name: string; images: string[]; isLaunching?: boolean } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <div 
      className="border-r border-b border-[#2C2216] p-8 pt-16 text-center relative cursor-pointer transition-all duration-300 [&:nth-child(3n)]:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(2n+1)]:border-r lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r [&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
    >
      {/* Launching Soon Badge */}
      {product.isLaunching && (
        <div className="absolute top-8 left-0 z-10">
          <span className="bg-[#DC7E55] text-[#2C2216] text-xs leading-[28px] tracking-[3px] px-3 py-2 font-medium">
            LAUNCHING SOON
          </span>
        </div>
      )}
      
      {/* Product Image with Smooth Transition */}
      <div className="mb-8 h-80 flex items-center justify-center relative overflow-hidden"
       onMouseEnter={() => setCurrentImageIndex(1)}
       onMouseLeave={() => setCurrentImageIndex(0)}
       onClick={() => setCurrentImageIndex((prev) => (prev + 1) % product.images.length)}
      >
        {product.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={product.name}
            width={250}
            height={250}
            className={`absolute max-w-full max-h-full object-contain transition-opacity duration-500 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      
      {/* Product Info */}
      <div className="pt-4">
        <button className="overflow-hidden inline-flex justify-center gap-2 lg:gap-4 items-center h-[40px] px-6 py-2 border border-[#51331B] text-[#51331B] hover:bg-[#51331B] hover:text-white hover:cursor-pointer transition-colors duration-200 group mt-8 lg:w-auto lg:h-[50px] lg:px-8 lg:py-3"> {/* Adjusted size and padding for mobile, preserved desktop */}
            <span className="text-base lg:text-xl leading-6 lg:leading-7 tracking-tight">{product.name}</span> {/* Adjusted text size for mobile, preserved desktop */}
            <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" /> {/* Adjusted icon size for mobile, preserved desktop */}
        </button>
      </div>
    </div>
  )
}
