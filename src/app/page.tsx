"use client";
import useScrollAndMousePosition from "@/hooks/useScrollAndMousePos";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MarqueeReusable from "./components/Marquee";
import RotatingShape from "./components/RotatingShape"; // Import the 3D shape
import Header from "./components/Header";
import BookAnAppointment from "./components/BookAnAppointment";
import Services from "./components/Services";
import WorkingWithUs from "./components/WorkingWithUs";
import SubHeader from "./components/SubHeader";
import FAQ from "./components/FAQ";

import MobileCTA from "./components/MobileCTA";
import MeetTheTeam from "./modules/Team";
import useSectionObserver from "@/hooks/useSectionObserver";

export default function Home() {
  useScrollAndMousePosition();

  const sections = ["About Us", "Our Services", "Team", "Contact Us"];
  // List of section IDs
  useSectionObserver(sections);

  // return <ParallaxComponent />;
  return (
    <div className=" relative h-fit bg-white">
      <Navbar sections={sections} />
      <Header />
      <MobileCTA />
      <SubHeader id={"About Us"} />
      <WorkingWithUs />

      {/* Add Rotating 3D Shape Here */}
      <div className="flex justify-center my-8">
        <RotatingShape />
      </div>
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
