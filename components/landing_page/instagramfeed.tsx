"use client";

import React from "react";

const InstagramFeed = () => {
  // useEffect(() => {
  //  // Doesnt work
  //   const script = document.createElement("script");
  //   script.src = "https://www.powr.io/powr.js?platform=html";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     // Optional cleanup if needed
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div>
      <div className="flex justify-between items-center md:m-8 m-4">
        <h1 className="text-[1rem] xs:text-[1.8rem] sm:text-[2rem]   md:text-[1rem] lg:text-[2rem] xl:text-[3.6rem] text-[#51331B]   leading-[1.1] sm:leading-tight">
          /daily <span className="font-domine ">updates</span>
        </h1>
        <button className="border-2 border-[#2C2216] font-semi-bold text-[#2C2216] md:px-4 px-1 justify-center md:py-2 text-sm flex items-center gap-2 hover:bg-[#2C2216] hover:text-white transition-colors">
          view instagram <span>↗</span>
        </button>
      </div>
      <div className="powr-social-feed " id="aab29ce9_1750835854"></div>
    </div>
  );
};

export default InstagramFeed;
