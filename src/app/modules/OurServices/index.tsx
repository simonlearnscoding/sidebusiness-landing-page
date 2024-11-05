"use client";
import { ArrowRight } from "@phosphor-icons/react";
import { useSectionStore } from "@/store/useSectionStore";
// import ParallaxComponent from "./Parallax.tsx";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const HeaderSection = () => {
  return (
    <div className="w-full flex items-center min-h-64 bg-primary-500">
      <Marquee
        autoFill={true}
        speed={120}
        className="overflow-hidden"
        gradient={false}
      >
        <div className="font-bebas h-full flex  items-center text-9xl">
          <div className="">OUR SERVICES</div>
          <div className="w-4 h-4 mx-8 bg-zinc-200"> </div>
        </div>
      </Marquee>
    </div>
  );
};

const ServicesSection = ({
  title,
  services,
  serviceNumber,
  isHovered,
  setIsHovered,
}: {
  title: string;
  serviceNumber: number;
  isHovered: boolean;
  setIsHovered: (hover: boolean) => void;
  services: string[];
}) => {
  const scrollToSection = useSectionStore((state) => state.scrollToSection);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full flex group items-center p-4 transition-all duration-500 transform ${
        isHovered ? "h-[600px] bg-secondary-500" : "h-48 bg-zinc-900"
      }`}
    >
      <div className="flex w-full group-hover:flex-col pl-28 group-hover:items-center group-hover:justify-center transition-all gap-10 group-hover:gap-2">
        <div className="font-bebas text-zinc-500 text-8xl transition-transform duration-700  group-hover:scale-110">
          0{serviceNumber}
        </div>
        <div className="font-bebas text-zinc-50 group-hover:text-zinc-900 transition-colors duration-700 text-8xl">
          {title}
        </div>
        <div className="font-bebas delay-1000 mt-14 hidden text-7xl gap-2 text-zinc-900 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-105 group-hover:flex transform translate-y-5">
          {services.map((service, index) => (
            <div
              key={service}
              className={`transition-all duration-${
                900 + index * 200
              } ease-out delay-${index * 200} transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100`}
            >
              {service}
            </div>
          ))}
        </div>

        <div
          onClick={() => scrollToSection("contact")}
          className="font-sans pointer-cursor cursor-pointer text-zinc-900 hover:bg-zinc-900 hover:text-zinc-50 transition-colors  border-[3px] items-center gap-3 mt-12 mb-8   border-zinc-900  group-hover:opacity-100 blur-lg group-hover:blur-0 opacity-100 hidden group-hover:flex duration-700 ease-out border-solid py-5 text-3xl font-medium px-3"
        >
          <div className="">TELL US ABOUT YOUR PROJECT</div>

          <ArrowRight size={32} />
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: `Development`,
    services: ["Web Development", "Mobile Development", "Desktop Development"],
  },
  {
    title: "Design",
    services: ["UI/UX Design", "Graphic Design", "3D Design"],
  },
  {
    title: "Marketing",
    services: ["SEO", "Social Media Marketing", "Content Marketing"],
  },
];

const OurServicesSection = ({ id }: { id: string }) => {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  // return <ParallaxComponent />;
  return (
    <Parallax pages={3}>
      <ParallaxLayer sticky={{ start: 2, end: 3 }} offset={0.7} speed={0.5}>
        <div
          className="w-full h-20 bg-red-300 relative"
          style={{ top: "66vh" }}
        >
          {/* Adjust top to control initial position */}
        </div>
      </ParallaxLayer>
    </Parallax>
  );
  {
    /* return ( */
  }
  {
    /*   <section id={id}> */
  }
  {
    /*     <div className="flex flex-col max-h-screen w-screen"> */
  }
  {
    /*       <HeaderSection /> */
  }
  {
    /*       {services.map((service, index) => ( */
  }
  {
    /*         <ServicesSection */
  }
  {
    /*           key={service.title} */
  }
  {
    /*           title={service.title} */
  }
  {
    /*           services={service.services} */
  }
  {
    /*           serviceNumber={index + 1} */
  }
  {
    /*           isHovered={hoveredSection === index} */
  }
  {
    /*           setIsHovered={(hover) => setHoveredSection(hover ? index : null)} */
  }
  {
    /*         /> */
  }
  {
    /*       ))} */
  }
  {
    /*     </div> */
  }
  {
    /* ); */
  }
};

export default OurServicesSection;
