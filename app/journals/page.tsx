"use client"

import { useState } from 'react'
import Image from 'next/image'
import Navbar from './jnl_navbar'

export default function JournalsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const articles = [
    {
      id: 1,
      date: "June, 2025",
      title: "Packaging Design - What makes it sell on shelves in retail",
      description: "An insight into the indian D2C space and what it is exactly thats moving the product",
      image: "placeholder1"
    },
    {
      id: 2,
      date: "June, 2025",
      title: "Packaging Design - What makes it sell on shelves in retail",
      description: "An insight into the indian D2C space and what it is exactly thats moving the product",
      image: "placeholder2"
    },
    {
      id: 3,
      date: "June, 2025",
      title: "Packaging Design - What makes it sell on shelves in retail",
      description: "An insight into the indian D2C space and what it is exactly thats moving the product",
      image: "placeholder3"
    },
    {
      id: 4,
      date: "July, 2025",
      title: "Brand Strategy - Building trust in competitive markets",
      description: "Understanding consumer behavior and brand positioning in the modern marketplace",
      image: "placeholder4"
    },
    {
      id: 5,
      date: "July, 2025",
      title: "Digital Marketing - ROI optimization techniques",
      description: "Data-driven approaches to maximize marketing effectiveness and conversion rates",
      image: "placeholder5"
    },
    {
      id: 6,
      date: "August, 2025",
      title: "User Experience - Design thinking principles",
      description: "Creating intuitive interfaces that enhance user engagement and satisfaction",
      image: "placeholder6"
    }
  ]

  const articlesPerPage = 3
  const totalSlides = Math.ceil(articles.length / articlesPerPage)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

//   const getCurrentArticles = () => {
//     const startIndex = currentSlide * articlesPerPage
//     return articles.slice(startIndex, startIndex + articlesPerPage)
//   }
  return (
    <>
    <Navbar />
    <div className="lg:pt-16 min-h-screen overflow-x-hidden">
      {/* Main Content Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-[1512px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left Sidebar Navigation */}
            <div className="lg:w-[35%] space-y-8">
              <div className="max-w-sm space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-5xl font-regular leading-[109px] tracking-[-1px] text-[#2C2216] ">
                    /journals
                  </h2>
                  <p className="text-[#2C2216] text-base lg:text-[18px] leading-relaxed">
                    A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. 
                    A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. 
                    A protein snacking brand based in india, redefining proteon
                  </p>
                </div>
                
                <div className="mt-16">
                  <h3 className="text-2xl lg:text-[32px] font-regular text-[#2C2216]">
                    /industry
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:w-[65%]">
              {/* Main Image */}
              <div className="mb-8">
                <div className="bg-gray-300 h-80 lg:h-110 rounded-lg overflow-hidden">
                  {/* Placeholder for the main image - replace with actual image */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                    Image Placeholder
                  </div>
                </div>
              </div>

              {/* Article Information */}
              <div className="max-w-[700px] space-y-6">
                <h1 className="text-2xl lg:text-3xl font-domine text-[#2C2216] leading-[45px] tracking-[-1px]">
                  Packaging Design - What makes it sell on shelves in retail shelves and carts
                </h1>
                
                <p className="text-[#2C2216] text-sm lg:text-base leading-relaxed">
                  An insight into the indian D2C space and what it is exactly thats moving the product
                </p>
              </div>
            </div>
          </div>
          {/* Bottom Navigation Bar */}
              <div className="mt-36 border-t border-b border-[#2C2216]">
                <div className="flex items-center py-4">
                  <div className="hidden lg:block flex-1 text-center text-sm lg:text-base text-[#2C2216] tracking-widest">
                    IRL INSIGHTS
                  </div>
                  
                  <div className="hidden lg:block w-px h-12 bg-[#2C2216]"></div>
                  
                  <div className="flex-1 text-center text-sm lg:text-[32px] text-[#2C2216] font-light lg:mx-32">
                    /archives from industry
                  </div>
                  
                  <div className="hidden lg:block w-px h-12 bg-[#2C2216]"></div>
                  
                  <div className="hidden lg:block flex-1 text-center text-sm lg:text-base text-[#2C2216] tracking-widest">
                    IRL INSIGHTS
                  </div>
                </div>
              </div>

              {/* Articles Carousel Section */}
              <div className="mt-16 relative">
                {/* Left Arrow */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-[-20px] lg:left-[-40px] top-[31%] -translate-y-1/2 z-10 p-2 lg:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 -translate-x-3 lg:-translate-x-6"
                  disabled={currentSlide === 0}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={currentSlide === 0 ? 'text-gray-300' : 'text-gray-700'}>
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>

                {/* Right Arrow */}
                <button 
                  onClick={nextSlide}
                  className="absolute right-[-20px] lg:right-[-40px] top-[31%] -translate-y-1/2 z-10 p-2 lg:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 translate-x-3 lg:translate-x-6"
                  disabled={currentSlide === totalSlides - 1}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={currentSlide === totalSlides - 1 ? 'text-gray-300' : 'text-gray-700'}>
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>

                {/* Articles Grid */}
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                          {articles
                            .slice(slideIndex * articlesPerPage, (slideIndex + 1) * articlesPerPage)
                            .map((article) => (
                              <div key={article.id} className="space-y-4">
                                <div className="h-100 bg-gray-300 rounded-[8px] overflow-hidden">

                                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                    {article.image}
                                  </div>
                                </div>
                                <div className="space-y-4 lg:space-y-2 max-w-sm mb-4 lg:mb-0">
                                  <p className="text-[13px] lg:text-base text-[#C19570]">{article.date}</p>
                                  <h3 className="text-base lg:text-xl font-domine text-[#2C2216] leading-tight">
                                    {article.title}
                                  </h3>
                                  <p className="text-xs lg:text-sm text-[#2C2216] leading-relaxed mt-4">
                                    {article.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentSlide ? 'bg-[#2C2216]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className='mt-16 border-[#2C2216] border-b'></div>
              </div>

              {/* Journal Articles Section */}
              <div className="mt-8 lg:mt-16">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                  
                  {/* Left Side - Image */}
                  <div className="hidden lg:block lg:w-[50%]">
                    <div className="relative lg:-top-30">
                      <Image
                        src="/journals3.png"
                        alt="Lorem Ipsum journal with binoculars"
                        className="w-full h-auto object-contain -rotate-4"
                        width={800}
                        height={400}
                      />
                    </div>
                  </div>

                  <div className='hidden lg:block border-[#2C2216] border-r -ml-20'></div>

                  {/* Right Side - Article List */}
                  <div className="lg:w-[65%] space-y-6 lg:space-y-8">
                    <div className="border-b border-[#2C2216] pb-4 lg:pb-6">
                      <div className="flex gap-4 lg:gap-6">
                        <div className="w-26 h-26 lg:w-61 lg:h-61 rounded-lg overflow-hidden bg-gray-300 flex-shrink-0">
                          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">
                            img
                          </div>
                        </div>
                        <div className="flex-1 space-y-1 lg:space-y-2 lg:mx-8">
                          <p className="text-[9px] lg:text-base text-[#C19570]">June, 2025</p>
                          <h3 className="text-xs lg:text-xl font-domine text-[#2C2216] leading-tight lg:leading-[30px] pt-3 lg:pt-8">
                            Packaging Design - What makes it sell on shelves in retail shelves and carts
                          </h3>
                          <p className="text-[8px] lg:text-sm text-[#2C2216] leading-relaxed pt-1 lg:pt-2">
                            An insight into the indian D2C space and what it is exactly thats moving the product
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-[#2C2216] pb-4 lg:pb-6">
                      <div className="flex gap-4 lg:gap-6">
                        <div className="w-26 h-26 lg:w-61 lg:h-61 rounded-lg overflow-hidden bg-gray-300 flex-shrink-0">
                          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">
                            img
                          </div>
                        </div>
                        <div className="flex-1 space-y-1 lg:space-y-2 lg:mx-8">
                          <p className="text-[9px] lg:text-base text-[#C19570]">June, 2025</p>
                          <h3 className="text-xs lg:text-xl font-domine text-[#2C2216] leading-tight lg:leading-[30px] pt-3 lg:pt-8">
                            Packaging Design - What makes it sell on shelves in retail shelves and carts
                          </h3>
                          <p className="text-[8px] lg:text-sm text-[#2C2216] leading-relaxed pt-1 lg:pt-2">
                            An insight into the indian D2C space and what it is exactly thats moving the product
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pb-4 lg:pb-6">
                      <div className="flex gap-4 lg:gap-6">
                        <div className="w-26 h-26 lg:w-61 lg:h-61 rounded-lg overflow-hidden bg-gray-300 flex-shrink-0">
                          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">
                            img
                          </div>
                        </div>
                        <div className="flex-1 space-y-1 lg:space-y-2 lg:mx-8">
                          <p className="text-[9px] lg:text-base text-[#C19570]">June, 2025</p>
                          <h3 className="text-xs lg:text-xl font-domine text-[#2C2216] leading-tight lg:leading-[30px] pt-3 lg:pt-8">
                            Packaging Design - What makes it sell on shelves in retail shelves and carts
                          </h3>
                          <p className="text-[8px] lg:text-sm text-[#2C2216] leading-relaxed pt-1 lg:pt-2">
                            An insight into the indian D2C space and what it is exactly thats moving the product
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </section>
    </div>
    </>
  )
}
