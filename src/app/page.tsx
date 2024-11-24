"use client";
import useScrollAndMousePosition from "@/hooks/useScrollAndMousePos";
import Navbar from "./components/Navbar";
import { Code } from "@phosphor-icons/react";
// import ContactFormSection from "./modules/ContactForm";
// import HeaderSection from "./modules/Header";
import MobileCTA from "./components/MobileCTA";
// import Comet from "./components/Comet";
// import { useSectionObserver } from "@/hooks/useSectionObserver";
import MeetTheTeam from "./modules/Team";
import OurServicesSection from "./modules/OurServices";
import LetsChat from "./modules/LetsChat";
import ParallaxComponent from "./modules/OurServices/Parallax";
export default function Home() {
  useScrollAndMousePosition();

  // List of section IDs
  // useSectionObserver(["header", "contact", "comet"]);

  // return <ParallaxComponent />;
  return (
    <div className=" relative h-fit bg-zinc-900">
      <Navbar />
      <MobileCTA />
      <Header />
      <SubHeader />
      <Explanation />
      <Services />
      <BookAnAppointment />
      {/* <ParallaxComponent /> */}
      {/* <HeaderSection id="header" /> */}
      {/* <MeetTheTeam id="team" /> */}

      {/* <OurServicesSection id="services" /> */}

      {/* <LetsChat id="contact" /> */}
      {/* <ContactFormSection id="contact" /> */}
      {/* <Comet /> */}
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col gap-10 mx-4 mt-28">
      <h1 className="flex  flex-col">YOUR VISION, OUR MISSION</h1>
      <p className="flex text-2xl font-sans  w-9/12 flex-col">
        At Zuesite We Make Your Vision Into Reality
      </p>
      <button className="bg-white font-sans text-2xl text-black py-4 px-5 ">
        START YOUR JOURNEY
      </button>
    </div>
  );
}

function SubHeader() {
  return (
    <div className=" w-full my-10">
      <div className="mx-4  rounded-lg bg-gray-800 h-96"> </div>
    </div>
  );
}

function Explanation() {
  return (
    <div className="flex mx-4 gap-10 flex-col mb-16 ">
      <h1 className="flex  flex-col">
        we take the stress off of website building
      </h1>
      <p className="flex  font-sans   flex-col">
        With an exceptional team of experts in website building, we will listen
        and implement every detail you have for your dream website. We don't
        force a cookie-cutter one size fits all template that lacks originality
        or any unique qualities that you get from Wix, Wordpress, and other page
        builders.
      </p>
    </div>
  );
}

function Service({ name, bullets }) {
  return (
    <div className="flex px-3  border-solid border-[1px]  border-white py-10 flex-col">
      <div className="flex items-center gap-2 ">
        <Code size={32} />
        <h2 className="   ">{name}</h2>
      </div>
      <ul className=" list-disc pl-8 mt-4">
        {bullets.map((bullet, index) => (
          <li key={index} className="font-sans text-2xl">
            {" "}
            {bullet}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
function BookAnAppointment() {
  return (
    <div className="flex my-12 px-4  flex-col ">
      <h2 className="flex mb-3   flex-col">
        Book an appointment for a free 45 min consultation call to discuss your
        dream website.
      </h2>
      <p className="mb-6">Let’s put your business on the map!</p>
      <button className="bg-white font-sans text-2xl text-black py-4 px-5 ">
        SAVE A SPOT
      </button>
    </div>
  );
}

function Services() {
  const services = [
    {
      name: "Web Development",
      bullets: [
        "Custom Websites",
        "E-commerce",
        "Blog",
        "Portfolio",
        "Landing Page",
        "Web Application",
      ],
    },

    {
      name: "Code",
      bullets: [
        "Custom Websites",
        "E-commerce",
        "Blog",
        "Portfolio",
        "Landing Page",
        "Web Application",
      ],
    },

    {
      name: "Design",
      bullets: [
        "Custom Websites",
        "E-commerce",
        "Blog",
        "Portfolio",
        "Landing Page",
        "Web Application",
      ],
    },
  ];
  return (
    <div className="flex bg-zinc-800 border-solid  flex-col">
      <div className="py-4 px-4   border-solid border-[1px] border-white ">
        <h1 className=" w-full  ">OUR SERVICES</h1>
      </div>

      <div className=" w-full px-4 flex flex-col gap-4 py-8">
        {services.map((service) => (
          <Service name={service.name} bullets={service.bullets} />
        ))}
      </div>
    </div>
  );
}
