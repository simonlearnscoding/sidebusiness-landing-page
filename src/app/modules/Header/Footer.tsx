"use client";
import Marquee from "react-fast-marquee";

const Footer = ({}) => {
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
    <div className="select-none   absolute  bottom-14 w-full hidden py-2 bg-zinc-700/5 sm:block">
      <Marquee
        autoFill={true}
        speed={120}
        className="overflow-hidden"
        gradient={false}
      >
        <div className={"flex items-center font-bebas   text-zinc-50 text-6xl"}>
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
