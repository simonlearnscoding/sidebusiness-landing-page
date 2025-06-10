"use client";
import useScrollAndMousePosition from "@/hooks/useScrollAndMousePos";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MarqueeReusable from "./components/Marquee";
import Header from "./components/Header";
import BookAnAppointment from "./components/BookAnAppointment";
import Services from "./components/Services";
import WorkingWithUs from "./components/WorkingWithUs";
import SubHeader from "./components/SubHeader";
import FAQ from "./components/FAQ";

import MobileCTA from "./components/MobileCTA";
import MeetTheTeam from "./modules/Team";
import useSectionObserver from "@/hooks/useSectionObserver";
import Cursor from "./components/Cursor";

function GradientOverlay() {
  return (
    <div className=" w-full overflow-x-hidden absolute -top-10 h-screen">
      {/* Gradient overlay 1 - made responsive */}
      <div className="w-[80vw] lg:max-w-[500px] max-w-screen top-80 blur-3xl absolute rounded-full opacity-20 h-64 sm:h-96 bg-gradient-to-br right-1/2 translate-x-1/2 from-pink-400 to-blue-500" />

      {/* Gradient overlay 2 - made responsive */}
      <div className="w-[80vw] lg:max-w-[500px] max-w-screen blur-3xl absolute rounded-full opacity-20 h-64 sm:h-96 bg-gradient-to-br translate-x-1/2 right-[20%] sm:right-40 from-violet-400 to-emerald-100" />
    </div>
  );
}

export default function Home() {
  useScrollAndMousePosition();

  const sections = ["About Us", "Our Services", "Team", "Contact Us"];
  // List of section IDs
  useSectionObserver(sections);

  // return <ParallaxComponent />;
  return (
    <div className=" relative h-fit ">
      <GradientOverlay />
      {/* <Cursor /> */}
      <Navbar sections={sections} />
      <Header id={"About Us"} />
      <MobileCTA />
      <SubHeader />
      <WorkingWithUs />

      <div className="flex flex-col bg-gradient-to-br from-gray-800 from-1% to-gray-950">
        <Services id={"Our Services"} />
        <BookAnAppointment />
      </div>

      {/* <ParallaxComponent /> */}
      {/* <HeaderSection id="header" /> */}
      <MeetTheTeam id="Team" />
      <MarqueeReusable inputText="LET'S WORK TOGETHER" />
      <FAQ />

      {/* <OurServicesSection id="services" /> */}

      {/* <LetsChat id="contact" /> */}
      {/* <ContactFormSection id="contact" /> */}
      {/* <Comet /> */}
      <ContactUs id={"Contact Us"} />
      <Footer />
    </div>
  );
}
