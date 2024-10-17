"use client";
import Marquee from "react-fast-marquee";
import { Bebas_Neue } from "@next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

type FooterProps = {
  setIsHovered: (isHovered: boolean) => void;
  setSelectedImageUrl: (url: string) => void;
};
const Footer = ({ setIsHovered, setSelectedImageUrl }: FooterProps) => {
  const skills = [
    {
      label: "DESIGN",
      image: "/HoverImages/Design.jpg",
    },
    {
      label: "DEVELOPMENT",
      image: "/HoverImages/Develop.jpg",
    },
    {
      label: "MARKETING",
      image: "/HoverImages/Marketing.jpg",
    },
  ];

  return (
    <div className="select-none cursor-pointer absolute bottom-14 w-full hidden sm:block">
      <Marquee pauseOnHover={true} autoFill={true} speed={50} gradient={false}>
        <div
          className={`flex items-center ${bebasNeue.className} text-zinc-50 text-7xl`}
        >
          {skills.map((skill, index) => (
            <div
              onMouseEnter={() => {
                setSelectedImageUrl(skill.image);
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
              key={index}
              className={`mx-8 hover:scale-125 hover:opacity-100  opacity-30 transition-all whitespace-nowrap`}
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
