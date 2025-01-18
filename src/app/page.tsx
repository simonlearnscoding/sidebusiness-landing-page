"use client";
import Image from "next/image";
import useScrollAndMousePosition from "@/hooks/useScrollAndMousePos";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MarqueeReusable from "./components/Marquee";
import Header from "./components/Header";
import BookAnAppointment from "./components/BookAnAppointment";
import Services from "./components/Services";
import WorkingWithUs from "./components/WorkingWithUs";
import FAQ from "./components/FAQ";

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
      <div className="flex flex-col bg-gray-950">
        <Services />
        <BookAnAppointment />
      </div>

      {/* <ParallaxComponent /> */}
      {/* <HeaderSection id="header" /> */}
      <MeetTheTeam id="team" />
      <MarqueeReusable inputText="LET'S WORK TOGETHER" />
      <FAQ />

      {/* <OurServicesSection id="services" /> */}

      {/* <LetsChat id="contact" /> */}
      {/* <ContactFormSection id="contact" /> */}
      {/* <Comet /> */}
      <ContactUs />
      <Footer />
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
