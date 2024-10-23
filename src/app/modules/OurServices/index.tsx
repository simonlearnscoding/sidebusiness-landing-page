"use client";

import { useState } from "react";
import Marquee from "react-fast-marquee";

const HeaderSection = () => {
  return (
    <div className="w-full flex items-center h-64 bg-primary-500">
      <Marquee
        autoFill={true}
        speed={120}
        className="overflow-hidden"
        gradient={false}
      >
        <div className="font-bebas h-full flex items-center text-9xl">
          <div className="">OUR SERVICES</div>
        </div>
      </Marquee>
    </div>
  );
};

const ServicesSection = ({
  title,
  Services,
  serviceNumber,
}: {
  title: string;
  Services: string[];
  serviceNumber: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full flex items-center p-screen h-44 ${isHovered ? "bg-secondary-500" : " bg-zinc-900"}`}
    >
      {!isHovered && (
        <div className="font-bebas text-zinc-50 text-8xl">
          0{serviceNumber}{" "}
        </div>
      )}
      {isHovered && (
        <div className="flex flex-cols w-full items-center justify-center">
          <div className="font-bebas text-zinc-400 text-8xl">
            0{serviceNumber}{" "}
          </div>

          <div className="font-bebas text-zinc-400 text-8xl">
            0{serviceNumber}{" "}
          </div>
        </div>
      )}
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
  return (
    <>
      <div className="flex w-screen flex-col">
        <HeaderSection />
        <div className="flex flex-col ">
          {services.map((service) => (
            <ServicesSection
              serviceNumber={services.indexOf(service)}
              key={service.title}
              title={service.title}
              Services={service.services}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServicesSection;
