"use client";

import React, { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
   // Doesnt work
    const script = document.createElement("script");
    script.src = "https://www.powr.io/powr.js?platform=html";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup if needed
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="powr-social-feed " id="aab29ce9_1750835854"></div>
    </div>
  );
};

export default InstagramFeed;
