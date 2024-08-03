import React from "react";
import { PiMountains } from "react-icons/pi";
import { TbBuildingCommunity } from "react-icons/tb";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { FaHelmetSafety } from "react-icons/fa6";
import { SiRenovatebot } from "react-icons/si";

export const serviceItems = [
  {
    id: 1,
    icon: <PiMountains size={78} className="servicon" />,
    title: "Mountain Adventure",
    content:
      "Explore the majestic mountains and enjoy breathtaking views. Perfect for hiking enthusiasts and nature lovers.",
  },
  {
    id: 2,
    icon: <TbBuildingCommunity size={78} className="servicon" />,
    title: "Serene Landscapes",
    content:
      "Experience the tranquility of serene landscapes. Ideal for a peaceful retreat and unwinding from the daily hustle.",
  },
  {
    id: 3,
    icon: <HiWrenchScrewdriver size={78} className="servicon" />,
    title: "Wildlife Safari",
    content:
      "Join us on a thrilling wildlife safari. Get up close with nature and witness the beauty of diverse wildlife.",
  },
  {
    id: 4,
    icon: <SiRenovatebot size={78} className="servicon" />,
    title: "River Rafting",
    content:
      "Feel the adrenaline rush with our exciting river rafting adventures. Perfect for adventure seekers and water enthusiasts.",
  },
  {
    id: 5,
    icon: <FaHelmetSafety size={78} className="servicon" />,
    title: "Camping Under the Stars",
    content:
      "Enjoy a night under the stars with our camping packages. Experience the joy of outdoor living and connect with nature.",
  },
  {
    id: 6,
    icon: <PiMountains size={78} className="servicon" />,
    title: "Snowy Peaks",
    content:
      "Discover the beauty of snowy peaks and enjoy winter sports. Ideal for skiers, snowboarders, and winter lovers.",
  },
];
