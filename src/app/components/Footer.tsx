"use client";
import Marquee from "react-fast-marquee";
import { Bebas_Neue } from "@next/font/google";
import { useState } from "react";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  const skills = ["DESIGN", "DEVELOPMENT", "MARKETING"];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="select-none cursor-pointer absolute bottom-14 w-full"
    >
      <Marquee pauseOnHover={true} autoFill={true} speed={50} gradient={false}>
        <div
          className={`flex items-center ${bebasNeue.className} text-zinc-50 text-7xl`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`mx-8 hover:scale-125 hover:opacity-100 opacity-30 transition-all whitespace-nowrap`}
            >
              {skill}
            </div>
          ))}
        </div>
      </Marquee>
      {isHovered && <div className="absolute w-40 h-40 bg-red-300"> </div>}
    </div>
  );
};

export default Footer;
