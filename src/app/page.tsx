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

// import OurServicesSection from "./modules/OurServices";
// import LetsChat from "./modules/LetsChat";
// import ParallaxComponent from "./modules/OurServices/Parallax";
export default function Home() {
  useScrollAndMousePosition();

  const sections = ["About Us", "Our Services", "Team", "Contact Us"];
  // List of section IDs
  useSectionObserver(sections);

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
