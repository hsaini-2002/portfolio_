// data/work.ts

export interface WorkCardData {
  id: number;
  category: string;
  type: string;
  title: string;
  image: string;
  fontColor:string;
  bgColor: string;
}

export const featuredWork: WorkCardData[] = [
  {
    id: 1,
    category: "Farm-To-Table Restaurant",
    type: "Branding",
    title: "green oasis",
    image: "/card1.png",
    fontColor:"text-[#AAE786]",
    bgColor: "bg-[#183430]",
  },
  {
    id: 2,
    category: "Healthy Snacking",
    type: "Packaging",
    title: "fitfeast",
    image: "/card2.png",
    fontColor:"text-[#FFE643]",
    bgColor: "bg-[#BD5F18]",
  },
  {
    id: 3,
    category: "Hydration Supplements",
    type: "Packaging",
    title: "rethink hydration",
    image: "/card3.png",
    fontColor:"text-[#47C2E0]",
    bgColor: "bg-[#2A2356]",
  },

];
