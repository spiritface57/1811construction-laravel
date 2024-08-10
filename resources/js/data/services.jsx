import React from "react";
import { PiMountains } from "react-icons/pi";
import { TbBuildingCommunity } from "react-icons/tb";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { FaHelmetSafety } from "react-icons/fa6";
import { SiRenovatebot } from "react-icons/si";

export const services = {
  mainSection: {
    title: "Our Services",
    description: "Providing high-quality renovation and construction services to transform your space and enhance your lifestyle."
  },
  items: [
    {
      id: 1,
      title: "Kitchen Renovations",
      description: "Transform your kitchen into the heart of your home with our custom renovation services. Whether you're dreaming of a sleek modern kitchen, a cozy farmhouse style, or a functional chef's paradise, our team will design and build a space that reflects your taste and enhances your lifestyle.",
      icon: <PiMountains size={78} className="servicon" /> // Update with relevant icon
    },
    {
      id: 2,
      title: "Home Additions",
      description: "Expand your living space with our home addition services. Whether you need an extra bedroom, a home office, or a larger living area, we manage the entire process from design to construction, ensuring seamless integration with your existing home.",
      icon: <TbBuildingCommunity size={78} className="servicon" /> // Update with relevant icon
    },
    {
      id: 3,
      title: "Basement Finishing",
      description: "Unlock the full potential of your home with our basement finishing services. Whether you envision a cozy family room, a stylish entertainment space, or a practical home office, we bring your ideas to life.",
      icon: <HiWrenchScrewdriver size={78} className="servicon" /> // Update with relevant icon
    },
    {
      id: 4,
      title: "Bathroom Remodeling",
      description: "Revitalize your bathroom with our comprehensive remodeling services. From luxurious spa-like retreats to modern and functional designs, we tailor each project to your needs and style preferences.",
      icon: <FaHelmetSafety size={78} className="servicon" /> // Update with relevant icon
    },
    {
      id: 5,
      title: "Painting",
      description: "Refresh your home's interior and exterior with our professional painting services. Our meticulous attention to detail ensures a flawless finish that enhances your home's aesthetic appeal.",
      icon: <SiRenovatebot size={78} className="servicon" /> // Update with relevant icon
    },
    {
      id: 6,
      title: "Flooring",
      description: "Upgrade your floors with our wide range of flooring options. From hardwood and laminate to tile and vinyl, we provide expert installation and superior craftsmanship.",
      icon: <PiMountains size={78} className="servicon" /> // Update with relevant icon
    },
    {
      id: 7,
      title: "General Contracting",
      description: "As experienced general contractors, we manage every aspect of your renovation project with precision and care. From project planning and scheduling to budget management and quality control, we ensure a seamless process from start to finish.",
      icon: <TbBuildingCommunity size={78} className="servicon" /> // Update with relevant icon
    },
  ]
};
