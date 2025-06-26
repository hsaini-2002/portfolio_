"use client";
import Image from "next/image";
import MarqueeItem from "./Marquee";

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  { url: "/carousel1.png", title: "branding strategy", id: 1 },
  { url: "/carousel2.png", title: "visual identity", id: 2 },
  { url: "/carousel3.png", title: "packaging design", id: 3 },
  { url: "/carousel4.png", title: "publication design", id: 4 },
  { url: "/carousel5.png", title: "uiux design", id: 5 },
];

const ScrollCarousel = () => {
  return (
    <section className="relative w-full">
      {/* Marquee */}
      <div className="sticky top-0 z-0">
        <div className="w-full flex items-center justify-center">
          <MarqueeItem />
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full z-10 px-4 pt-20 pb-40 bg-transparent mt-screen">
        <div className="flex flex-col items-center gap-10">
          {cards.map((card) => (
            <div
              key={card.id} // ✅ Added key here
              className="relative h-[450px] w-full max-w-[450px] overflow-hidden"
            >
              <Image
                src={card.url}
                alt={card.title}
                width={500}
                height={500}
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollCarousel;
