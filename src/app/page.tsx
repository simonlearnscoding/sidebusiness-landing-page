"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import useScrollAndMousePosition from "@/hooks/useScrollAndMousePos";
import Navbar from "./components/Navbar";
import { Code, TrendUp, PenNib, ShoppingCart } from "@phosphor-icons/react";
import Header from "./components/Header";

import MobileCTA from "./components/MobileCTA";
import MeetTheTeam from "./modules/Team";
// import OurServicesSection from "./modules/OurServices";
// import LetsChat from "./modules/LetsChat";
// import ParallaxComponent from "./modules/OurServices/Parallax";
export default function Home() {
  useScrollAndMousePosition();

  // List of section IDs
  // useSectionObserver(["header", "contact", "comet"]);

  // return <ParallaxComponent />;
  return (
    <div className=" relative h-fit bg-white">
      <Navbar />
      <Header />
      <MobileCTA />
      <SubHeader />
      <WorkingWithUs />
      <Services />
      <BookAnAppointment />
      {/* <ParallaxComponent /> */}
      {/* <HeaderSection id="header" /> */}
      <MeetTheTeam id="team" />

      {/* <OurServicesSection id="services" /> */}

      {/* <LetsChat id="contact" /> */}
      {/* <ContactFormSection id="contact" /> */}
      {/* <Comet /> */}
      <ContactUs />
    </div>
  );
}

function ContactUs() {
  return (
    <div className="min-h-screen flex  flex-col h-screen ">
      <Marquee
        autoFill={true}
        speed={120}
        className="overflow-hidden"
        gradient={false}
      >
        <div className="font-sans  flex py-3 bg-zinc-400  items-center ">
          <div className=" text-base font-sans text-zinc-900">
            LETS WORK TOGETHER
          </div>

          <div className="w-1 h-1 mx-4 rounded-full bg-zinc-200"> </div>
        </div>
      </Marquee>
      <div className="flex md:items-center  px-4 md:px-0  items-start justify-start flex-col md:justify-center flex-1 ">
        <h2 className="md:text-center mt-20  md:mt-0 text-start max-w-2xl">
          DONT LET YOUR WEBSITE BECOME A WHAT IF
        </h2>
        <div className="md:hidden w-full h-64 mt-14 rounded-xl bg-gray-300">
          {" "}
        </div>

        <div className="w-full flex  px-4 lg:px-0   flex-col items-center mt-14 justify-center  ">
          <div className=" lg:text-5xl text-3xl font-sans lg:max-w-5xl  bg-zinc-100 text-center w-full text-zinc-700  py-2 lg:py-5">
            Book A Call
          </div>
          <div className="font-sans lg:mt-5 mt-4 text-lg lg:text-2xl">
            {" "}
            **TWO SPOTS LEFT**{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

function SubHeader() {
  return (
    <div className=" w-full my-10  lg:my-36 h-fit">
      <div className="mx-4 lg:mx-20 relative rounded-lg bg-gray-400 h-96 lg:h-[737px] overflow-hidden">
        <Image
          src="/CITY LIGHT 1.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded-lg scale-110"
          alt="hero"
        />
      </div>
    </div>
  );
}
function WorkingWithUs() {
  return (
    <div className="flex flex-col justify-center mx-4">
      <h1 className=" text-center ">
        Here's why you'll enjoy every step of the
        <span className="pl-2 span">Journey With Us.</span>
      </h1>
    </div>
  );
}

function Service({ Icon, name, bullets }) {
  return (
    <div className="flex px-3 lg:flex-1 h-full  xl:pl-8 xl:pt-10  xl:pb-20 border-solid border-[1px]  border-white py-10  flex-col">
      <div className="flex lg:flex-col  items-start gap-2 lg:gap-6 ">
        <Icon size={32} />
        <h2 className="md:text-6xl xl:text-7xl">{name}</h2>
      </div>
      <ul className=" list-disc pl-8 mt-4 lg:mt-6">
        {bullets.map((bullet, index) => (
          <li key={index} className="font-sans text-white text-2xl">
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
    <div className="flex min-h-screen h-screen my-12 gap-12    lg:items-center lg:flex-row-reverse flex-col ">
      <div className="bg-zinc-600 border-solid border-[2px] border-zinc-300 w-full h-96  lg:h-full">
        {" "}
      </div>
      <div className="mx-4 lg:mx-20">
        <h2 className="flex mb-3   w-11/12 flex-col">
          Book an appointment for a free 45 min consultation call to discuss
          your dream website.
        </h2>
        <p className="mb-6">Let’s put your business on the map!</p>
        <button className="bg-white font-sans text-2xl text-black py-4 px-5 ">
          SAVE A SPOT
        </button>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      name: "Code",
      icon: Code,
      bullets: [
        "Web Applications",
        "Mobile Apps",
        "AI Integration",
        "Cloud Integration",
        "CMS Integration",
        "Custom Solutions",
      ],
    },

    {
      name: "Design",
      icon: PenNib,
      bullets: [
        "User Interface - UI",
        "User Experience - UX",
        "Custom Webdesign",
        "Design Assets",
        "MVP Prototypes",
        "Design Audit",
      ],
    },
    {
      name: "Marketing",

      icon: TrendUp,
      bullets: [
        "SEO",
        "Branding",
        "Social Media Management",
        "Email Marketing",
        "Google Analytics",
        "CRO",
      ],
    },
    {
      name: "E-commerce",
      icon: ShoppingCart,
      bullets: [
        "Webflow",
        "Wordpress",
        "Shopify",
        "Copywriting",
        "Landing Page",
        "Web Application",
      ],
    },
  ];
  return (
    <div className="flex  border-solid min-h-screen  flex-col">
      <div className="py-4 px-4  bg-zinc-800 lg:px-20   border-solid border-[1px] border-white ">
        <h1 className=" w-full  ">OUR SERVICES</h1>
      </div>

      <div className=" w-full px-2 flex flex-col  h-full lg:px-20 lg:flex-row gap-2 py-8 mt-4 lg:mt-20">
        {services.map((service) => (
          <Service
            Icon={service.icon}
            name={service.name}
            bullets={service.bullets}
          />
        ))}
      </div>
    </div>
  );
}
