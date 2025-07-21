"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '../work_navbar';
import { notFound } from 'next/navigation';

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  images: {
    hero: string;
    gallery: string[];
  };
  details: {
    challenge: string;
    solution: string;
    outcome: string;
  };
}

// Sample project data - in a real app, this would come from a CMS or API
const projectsData: Record<string, ProjectData> = {
  'green-oasis-1': {
    id: 'green-oasis-1',
    title: 'Green Oasis',
    subtitle: 'Farm To Table Restaurant Serving Fresh Experiences',
    description: 'A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. ',
    category: 'Branding',
    images: {
      hero: '/prod1.png',
      gallery: [
        '/prod2.png',
        '/prod3.png',
        '/card2.png',
        '/proj5.png'
      ]
    },
    details: {
      challenge: 'Create a brand identity that communicates freshness, sustainability, and premium quality while appealing to health-conscious consumers.',
      solution: 'Developed a clean, nature-inspired visual identity with earthy tones and organic shapes. The logo incorporates botanical elements that reflect the farm-to-table concept.',
      outcome: 'Successfully launched brand identity that increased customer recognition by 150% and helped establish the restaurant as a premium dining destination.'
    }
  },
  'fitfeast': {
    id: 'fitfeast',
    title: 'FitFeast',
    subtitle: 'Protein Packaging that stands out',
    description: 'A protein snacking brand based in India, combining premium packaging in shiny & dull coatings with bold messaging to capture attention in a crowded marketplace. Positioned positioning against competitors, we built a brand that speaks to both healthy snacking and indulgence, reflecting nutrient richness & indulgence in a crisp.',
    category: 'Packaging',
    images: {
      hero: '/proj2.png',
      gallery: [
        '/fitfeast_mobile.png',
        '/card1.png',
        '/card2.png',
        '/card3.png'
      ]
    },
    details: {
      challenge: 'Design packaging that appeals to fitness enthusiasts while standing out on crowded retail shelves.',
      solution: 'Created vibrant, high-energy packaging with bold typography and dynamic color schemes that communicate strength and vitality.',
      outcome: 'Achieved 40% increase in shelf visibility and 25% boost in sales within the first quarter of launch.'
    }
  },
  'rethink': {
    id: 'rethink',
    title: 'Rethink!',
    subtitle: 'A bold take on hydration',
    description: 'UI/UX design for an innovative hydration tracking app that encourages healthy drinking habits through gamification and social features.',
    category: 'UI/UX',
    images: {
      hero: '/rethink.png',
      gallery: [
        '/proj4.png',
        '/uiux.png',
        '/uiux.1.1.png'
      ]
    },
    details: {
      challenge: 'Create an engaging app experience that motivates users to maintain consistent hydration habits.',
      solution: 'Designed an intuitive interface with gamification elements, progress tracking, and social sharing features to make hydration fun and rewarding.',
      outcome: 'App achieved 4.8-star rating with over 100K downloads in the first six months, with 85% user retention rate.'
    }
  },
  'green-oasis-2': {
    id: 'green-oasis-2',
    title: 'Green Oasis',
    subtitle: 'Farm To Table Restaurant Serving Fresh Experiences',
    description: 'A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. ',
    category: 'Branding',
    images: {
      hero: '/prod1.png',
      gallery: [
        '/prod2.png',
        '/prod3.png',
        '/card2.png',
        '/proj5.png'
      ]
    },
    details: {
      challenge: 'Create a brand identity that communicates freshness, sustainability, and premium quality while appealing to health-conscious consumers.',
      solution: 'Developed a clean, nature-inspired visual identity with earthy tones and organic shapes. The logo incorporates botanical elements that reflect the farm-to-table concept.',
      outcome: 'Successfully launched brand identity that increased customer recognition by 150% and helped establish the restaurant as a premium dining destination.'
    }
   }
};

export default function ProjectDetailPage({ params }: { params: { projectId: string } }) {
  const project = projectsData[params.projectId];

  if (!project) {
    notFound();
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#FEFCE4]">
      {/* Hero Image */}
      <div className="relative rounded-lg bg-white mb-16">
          <Image
            src={project.images.hero}
            alt={project.title}
            width={1280}
            height={800}
            className="w-full h-[915px] object-cover"
          />
        </div>
      {/* Hero Section */}
      <div className="mx-auto pl-20 pr-20 ">
        {/* Brand Name Section */}
        <div className="flex flex-col md:flex-row gap-16 mt-28 mb-20">
          {/* Left Column - Brand Name & Details */}
          <div className="flex flex-col gap-8 md:w-1/2">
            <div className="flex flex-col gap-4">
              <h1 className="text-6xl md:text-[85px] font-regular tracking-[-1px] leading-27 text-[#51331B] -mt-6">
                {project.title}
              </h1>
              <div className="grid grid-cols-2 gap-8 mt-14">
                <div className="flex flex-col gap-2">
                  <div
                    className="absolute w-[152px] h-0 border-t border-[#2C2216]"
                  />
                  <h4 className="text-[32px] text-[#51331B] leading-14 tracking-[-1px] mt-4 ">/services</h4>
                  <p className="text-[18px] text-[#51331B] leading-[25px] pr-10">Brand Identity, Packaging, Publication Design</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div
                        className="absolute w-[152px] h-0 border-t border-[#2C2216]"        
                    />
                  <h4 className="text-[32px] text-[#51331B] leading-14 tracking-[-1px] mt-4 ">/industry</h4>
                  <p className="text-[18px] text-[#51331B] leading-[25px] pr-10">Health & Nutrition</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col gap-6 md:w-1/2">
            <p className="text-lg text-[#51331B] leading-relaxed pr-15">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Gallery */}
      <div className="max-w-[1512px] mx-auto px-6 py-16">
        <div className="flex flex-col gap-6">
          {/* First Row - Two Images Side by Side */}
          {project.images.gallery.length > 1 && (
            <div className="flex gap-6">
              <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
                <Image
                  src={project.images.gallery[0]}
                  alt={`${project.title} gallery image 1`}
                  width={664}
                  height={539}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
                <Image
                  src={project.images.gallery[1]}
                  alt={`${project.title} gallery image 2`}
                  width={664}
                  height={539}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Single Large Image */}
          {project.images.gallery.length > 2 && (
            <div className="flex">
              <div className="w-full relative overflow-hidden rounded-lg bg-white">
                <Image
                  src={project.images.gallery[2]}
                  alt={`${project.title} gallery image 3`}
                  width={1346}
                  height={639}
                  className="w-full h-[650px] object-cover"
                />
              </div>
            </div>
          )}

          {/* Text Section */}
          <div className="flex flex-col md:flex-row gap-16 py-16">
            <div className="flex flex-col gap-6 md:w-1/2">
              <p className="text-lg  text-[#51331B] leading-[38px] pr-20">
                A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. 
                A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. 
                A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. 
              </p>
            </div>
            <div className="flex flex-col gap-6 md:w-1/2">
              <p className="text-lg text-[#51331B] leading-[38px] pr-20">
                A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. 
                A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. 
                A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. 
              </p>
            </div>
          </div>


          {/* Bottom Row - Mixed Layout */}
          <div className="flex gap-6">
            {/* Left Side - Two Stacked Images */}
            <div className="flex flex-col gap-6 w-1/2">
              <div className="relative overflow-hidden rounded-lg bg-white">
                <Image
                  src="/card1.png"
                  alt="Product detail 1"
                  width={664}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg bg-white">
                <Image
                  src="/card2.png"
                  alt="Product detail 2"
                  width={664}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Right Side - Large Image with Text Overlay */}
            <div className="w-1/2 relative">
              <div className="relative overflow-hidden rounded-lg bg-white h-full">
                <Image
                  src="/card3.png"
                  alt="Product showcase"
                  width={664}
                  height={816}
                  className="w-full h-full object-cover"
                />
                {/* Text Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-green-600 text-white p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">CRAVE THE CRUNCH</h3>
                    <h4 className="text-xl">LOVE THE protein!</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Row - Two More Images */}
          <div className="flex gap-6">
            <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
              <Image
                src="/proj2.png"
                alt="Final showcase 1"
                width={664}
                height={539}
                className="w-full h-[539px] object-cover"
              />
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg bg-white">
              <Image
                src="/fitfeast_mobile.png"
                alt="Final showcase 2"
                width={664}
                height={539}
                className="w-full h-[539px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}
