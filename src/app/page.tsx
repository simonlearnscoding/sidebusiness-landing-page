"use client";
import { useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import { Bebas_Neue } from "@next/font/google";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Marquee from "react-fast-marquee";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => (
  <div className="flex flex-col">
    <div
      className={`${bebasNeue.className} text-9xl max-w-4xl  flex mt-16  text-zinc-100`}
    >
      Uniting BRANDS with their VISIONS
    </div>
    <div className="font-sans text-zinc-100 text-3xl mt-4  font-light  leading-normal max-w-lg ">
      {" "}
      WE BELIEVE THAT THOSE WHO DARE WILL FIND THEIR PATH
    </div>
  </div>
);

const Navbar = () => (
  <div className="py-6 flex my-4 w-full">
    <div className="text-sans text-xl w-full h-full font-regular text-zinc-50">
      LOGO
    </div>
    <div className="flex-grow flex items-center gap-4 text-zinc-100 ml-auto">
      <Globe size={24} />
      <div className="whitespace-nowrap font-sans text-xl font-regular">
        START YOUR JOURNEY
      </div>
      <ArrowRight size={24} />
    </div>
  </div>
);

const Footer = () => {
  const skills = ["DESIGN", "DEVELOPMENT", "MARKETING"];

  return (
    <div className="select-none cursor-pointer absolute bottom-28 w-full">
      <Marquee
        pauseOnHover={true}
        autoFill={true}
        //@ts-ignore
        speed={50}
        gradient={false}
      >
        <div
          className={`flex items-center   ${bebasNeue.className} text-zinc-50 text-7xl`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`mx-8 hover:scale-125  hover:opacity-100 opacity-30 transition-all whitespace-nowrap`}
            >
              {skill}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default function Home() {
  // Function to handle mouse movement
  const [mouseXPos, setMouseX] = useState(0);
  const [mouseYPos, setMouseY] = useState(0);
  const animationFrameId = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-screen h-screen relative overflow-hidden"
    >
      {/* Background Overlay */}
      <Image
        alt={"noise"}
        src={"/noise.png"}
        fill
        className="absolute inset-0  opacity-70 z-0 pointer-events-none"
      />

      {/* Content */}
      <Footer />
      <div className="flex flex-col w-full h-full bg-zinc-900 bg-noise-texture bg-cover bg-center bg-blend-overlay px-20 z-10">
        <Navbar />
        <Header />

        <div
          className="absolute bottom-[-160px]"
          style={{
            right: `${mouseXPos / 18 - 120}px`,
            bottom: `${mouseYPos / 18 - 120}px`,
          }} // Use inline style here
        >
          <Image src={"/meteor.png"} alt={"meteor"} width={800} height={800} />
        </div>
      </div>
    </div>
  );
}
