import Image from "next/image";
import Hero from "../components/hero";
import FeaturedWorkStack from "../components/cards/stack";
import Link from "next/link";
import AboutSection from "../components/about";
import InstagramFeed from "@/components/instagramfeed";
import LetsBuildBold from "../components/letsbuildbold";
import HeroBanner from "../components/footer";
import Header from "../components/header";
import ScrollCarousel from "../components/scrollcarousel";
import HorizontalSrcoll from "@/components/horizontalSrcoll";
import SwipeCards from "@/components/testimonials";

export default function Home() {
  return (
    <>

      <Header />

      <div>
        <Hero />
        <div className="flex flex-col items-center justify-center text-center pt-10 pb-0">
          <FeaturedWorkStack />
        </div>
        <div className="flex justify-center items-center  mt-8">
          <Link href="/work" className="inline-block">
            <button className="border border-[#2C2216] text-[#2C2216] px-4  text-sm flex items-center gap-2 hover:bg-[#2C2216] hover:text-white transition-colors">
              view work <span>↗</span>
            </button>
          </Link>
        </div>
        <div className=" mt-20  md:mt-10">
          <AboutSection />
          <ScrollCarousel />
        </div>
        {/* <Video/> */}
        <div className="">
          <Image src="/gif2.png" alt="gif" width={1550} height={750}></Image>
        </div>
      </div>
      <div className="">
        <HorizontalSrcoll />
      </div>
      <SwipeCards />
      <InstagramFeed />
      <LetsBuildBold />
      <HeroBanner />
    </>
  );
}
