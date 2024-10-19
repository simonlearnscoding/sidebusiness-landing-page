"use client";
import Marquee from "react-fast-marquee";
import { Bebas_Neue } from "@next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const Footer = ({ }) => {
  const skills = [
    {
      label: "DESIGN",
    },
    {
      label: "DEVELOPMENT",
    },
    {
      label: "MARKETING",
    },
  ];

  return (
    <div className="select-none  absolute bottom-14 w-full hidden sm:block">
      <Marquee autoFill={true} speed={120} gradient={false}>
        <div
          className={`flex items-center ${bebasNeue.className} text-zinc-50 text-7xl`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={"mx-8   opacity-30 transition-all whitespace-nowrap"}
            >
              {skill.label}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Footer;
