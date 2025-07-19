"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

export default function AbtCoreValues() {
    const [isPackagingOpen, setIsPackagingOpen] = useState(true);
    const [isBrandingOpen, setIsBrandingOpen] = useState(false);

    return (
        <section className="bg-orange-50 py-8 md:py-16">
            <div className="w-[90%] mx-auto md:px-6 lg:px-4">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-amber-800 text-xs md:text-sm font-normal tracking-[2px] md:tracking-[4px] leading-6 md:leading-7 uppercase mb-4 md:mb-8">
                        THE CORE OFFERINGS AND THE EXACT METHOD ,<br/> APPROACH AND PROCESS AND DELIVERABLES:
                    </h2>
                </div>
                
                <div className="space-y-4 md:space-y-8">
                    {/* Branding Section */}
                    <div className="border-t border-amber-800 pt-4 pb-0 md:py-8">
                        {/* CHANGE 1: Use flex for main header and chevron alignment */}
                        <div className="flex justify-between items-center lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start">
                            <div className="lg:col-span-1">
                                <h3 className="text-3xl md:text-5xl font-light text-amber-800 mb-2 md:mb-4 mt-2 md:mt-4">
                                    /branding
                                </h3>
                            </div>
                            <div className="lg:col-span-2 flex justify-end"> {/* Ensure button stays right on desktop too */}
                                <div className="mb-2 md:mb-4">
                                    <button onClick={() => setIsBrandingOpen(!isBrandingOpen)} className="p-2 -mr-2">
                                        {isBrandingOpen ? (
                                            <ChevronUp className="w-6 h-6 md:w-8 md:h-8 text-amber-800" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-amber-800" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {isBrandingOpen && (
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 items-start -mt-4 lg:-mt-12">
                                {/* Left Column - Packaging Image */}
                                <div className="lg:col-span-1 mt-8 md:mt-20 lg:mt-40">
                                    <div className="w-48 h-48 md:w-64 md:h-64 bg-amber-100 rounded-lg overflow-hidden mx-auto lg:mx-0">
                                        <Image 
                                            src="/Mask-group.png" 
                                            alt="Packaging Design" 
                                            width={340}
                                            height={356}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                
                                {/* Right Column - Content sections for Branding */}
                                <div className="lg:col-span-2 space-y-4 md:space-y-6">
                                    {/* Approach Section */}
                                    {/* CHANGE 2: grid-cols-2 for mobile for subheadings and content */}
                                    <div className="grid grid-cols-2 items-start">
                                        <div className="col-span-1"> {/* Subheading takes 1 column */}
                                            <h4 className="text-base md:text-xl font-medium text-amber-800">
                                                /approach
                                            </h4>
                                        </div>
                                        <div className="col-span-1"> {/* Content takes 1 column on mobile, 2 on desktop */}
                                            <p className="text-sm md:text-base text-amber-800 leading-6 md:leading-7 pr-0 md:pr-16 -ml-6 md:-ml-28 tracking-tight">
                                                A data driven, brand narrative driven approach to position your brand as a leader in the space. A data driven, brand narrative driven approach to position your brand as a leader in the space.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Process Section */}
                                    <div className="pt-4 md:pt-6">
                                        <div className="border-t border-amber-800 mr-0 md:mr-20"></div>
                                        {/* CHANGE 2: grid-cols-2 for mobile for subheadings and content */}
                                        <div className="grid grid-cols-2 items-start pt-4 md:pt-6">
                                            <div className="col-span-1"> {/* Subheading takes 1 column */}
                                                <h4 className="text-base md:text-xl font-medium text-amber-800">
                                                    /process
                                                </h4>
                                            </div>
                                            <div className="col-span-1"> {/* Content takes 1 column on mobile, 2 on desktop */}
                                                <div className="relative pr-0 md:pr-20 -ml-6 md:-ml-28">
                                                    <div className="absolute left-0 top-2 md:top-3 w-px bg-amber-800" style={{ height: 'calc(100% - 1.25rem)' }}></div>
                                                    <div className="space-y-2 md:space-y-4 ml-4 md:ml-6 leading-6 md:leading-7">
                                                        <div className="flex items-center">
                                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-800 rounded-full -ml-5 md:-ml-7 mr-2 md:mr-4 relative z-10"></div>
                                                            <span className="text-sm md:text-base text-amber-800">Deliverable or step 1</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-800 rounded-full -ml-5 md:-ml-7 mr-2 md:mr-4 relative z-10"></div>
                                                            <span className="text-sm md:text-base text-amber-800">Deliverable or step 2</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-800 rounded-full -ml-5 md:-ml-7 mr-2 md:mr-4 relative z-10"></div>
                                                            <span className="text-sm md:text-base text-amber-800">Deliverable or step 3</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-800 rounded-full -ml-5 md:-ml-7 mr-2 md:mr-4 relative z-10"></div>
                                                            <span className="text-sm md:text-base text-amber-800">Deliverable or step 4</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Deliverables Section */}
                                    <div className="pt-4 md:pt-6">
                                        <div className="border-t border-amber-800 mr-0 md:mr-20"></div>
                                        {/* CHANGE 2: grid-cols-2 for mobile for subheadings and content */}
                                        <div className="grid grid-cols-2 items-start pt-4 md:pt-6">
                                            <div className="col-span-1"> {/* Subheading takes 1 column */}
                                                <h4 className="text-base md:text-xl font-medium text-amber-800">
                                                    /deliverables
                                                </h4>
                                            </div>
                                            <div className="col-span-1 mb-4 md:mb-8"> {/* Content takes 1 column on mobile, 2 on desktop */}
                                                <p className="text-sm md:text-base text-amber-800 pr-0 md:pr-16 -ml-6 md:-ml-28 leading-6 md:leading-7 tracking-tight">
                                                    Understanding the Product, Creative Direction, Structural Design Graphics, Sampling, Testing
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Packaging Section */}
                    <div className="border-t border-amber-800 pt-4 pb-0 md:py-8">
                        {/* CHANGE 1: Use flex for main header and chevron alignment */}
                        <div className="flex justify-between items-center lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start">
                            <div className="lg:col-span-1">
                                <h3 className="text-3xl md:text-5xl font-light text-amber-800 mb-2 md:mb-4 mt-2 md:mt-4">
                                    /packaging
                                </h3>
                            </div>
                            <div className="lg:col-span-2 flex justify-end"> {/* Ensure button stays right on desktop too */}
                                <div className="mb-2 md:mb-4">
                                    <button onClick={() => setIsPackagingOpen(!isPackagingOpen)} className="p-2 -mr-2">
                                        {isPackagingOpen ? (
                                            <ChevronUp className="w-6 h-6 md:w-8 md:h-8 text-amber-800" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-amber-800" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {isPackagingOpen && (
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 items-start -mt-4 lg:-mt-12">
                                {/* Left Column - Packaging Image */}
                                <div className="lg:col-span-1 mt-8 md:mt-20 lg:mt-40">
                                    <div className="w-48 h-48 md:w-64 md:h-64 bg-amber-100 rounded-lg overflow-hidden mx-auto lg:mx-0">
                                        <Image 
                                            src="/Mask-group.png" 
                                            alt="Packaging Design" 
                                            width={340}
                                            height={356}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                
                                {/* Right Column - Content sections */}
                                <div className="lg:col-span-2 space-y-4 md:space-y-6">
                                    {/* Approach Section */}
                                    {/* CHANGE 2: grid-cols-2 for mobile for subheadings and content */}
                                    <div className="grid grid-cols-2 items-start">
                                        <div className="col-span-1"> {/* Subheading takes 1 column */}
                                            <h4 className="text-base md:text-xl font-medium text-amber-800">
                                                /approach
                                            </h4>
                                        </div>
                                        <div className="col-span-1"> {/* Content takes 1 column on mobile, 2 on desktop */}
                                            <p className="text-sm md:text-base text-amber-800 leading-6 md:leading-7 pr-0 md:pr-16 -ml-6 md:-ml-28 tracking-tight">
                                                A data driven, brand narrative driven approach to position your brand as a leader in the space. A data driven, brand narrative driven approach to position your brand as a leader in the space.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Process Section */}
                                    <div className="pt-4 md:pt-6">
                                        <div className="border-t border-amber-800 mr-0 md:mr-20"></div>
                                        {/* CHANGE 2: grid-cols-2 for mobile for subheadings and content */}
                                        <div className="grid grid-cols-2 items-start pt-4 md:pt-6">
                                            <div className="col-span-1"> {/* Subheading takes 1 column */}
                                                <h4 className="text-base md:text-xl font-medium text-amber-800">
                                                    /process
                                                </h4>
                                            </div>
                                            <div className="col-span-1"> {/* Content takes 1 column on mobile, 2 on desktop */}
                                                <div className="relative pr-0 md:pr-20 -ml-6 md:-ml-28">
                                                    <div className="absolute left-0 top-2 md:top-3 w-px bg-amber-800" style={{ height: 'calc(100% - 1.25rem)' }}></div>
                                                    <div className="space-y-2 md:space-y-4 ml-4 md:ml-6 leading-6 md:leading-7">
                                                        <div className="flex items-center">
                                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-800 rounded-full -ml-5 md:-ml-7 mr-2 md:mr-4 relative z-10"></div>
                                                            <span className="text-sm md:text-base text-amber-800">Deliverable or step 1</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-800 rounded-full -ml-5 md:-ml-7 mr-2 md:mr-4 relative z-10"></div>
                                                            <span className="text-sm md:text-base text-amber-800">Deliverable or step 2</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-800 rounded-full -ml-5 md:-ml-7 mr-2 md:mr-4 relative z-10"></div>
                                                            <span className="text-sm md:text-base text-amber-800">Deliverable or step 3</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-800 rounded-full -ml-5 md:-ml-7 mr-2 md:mr-4 relative z-10"></div>
                                                            <span className="text-sm md:text-base text-amber-800">Deliverable or step 4</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Deliverables Section */}
                                    <div className="pt-4 md:pt-6">
                                        <div className="border-t border-amber-800 mr-0 md:mr-20"></div>
                                        {/* CHANGE 2: grid-cols-2 for mobile for subheadings and content */}
                                        <div className="grid grid-cols-2 items-start pt-4 md:pt-6">
                                            <div className="col-span-1"> {/* Subheading takes 1 column */}
                                                <h4 className="text-base md:text-xl font-medium text-amber-800">
                                                    /deliverables
                                                </h4>
                                            </div>
                                            <div className="col-span-1 mb-4 md:mb-8"> {/* Content takes 1 column on mobile, 2 on desktop */}
                                                <p className="text-sm md:text-base text-amber-800 pr-0 md:pr-16 -ml-6 md:-ml-28 leading-6 md:leading-7 tracking-tight">
                                                    Understanding the Product, Creative Direction, Structural Design Graphics, Sampling, Testing
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="border-t border-amber-800"></div>
                </div>
            </div>
        </section>
    );
}