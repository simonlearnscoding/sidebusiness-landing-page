// app/page.tsx
// app/page.tsx
"use client";
import useScrollAndMousePosition from "@/hooks/useScrollAndMousePos";
import Navbar from "./components/Navbar";
// import ContactFormSection from "./modules/ContactForm";
import HeaderSection from "./modules/Header";
import MobileCTA from "./components/MobileCTA";
import Comet from "./components/Comet";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import MeetTheTeam from "./modules/Team";
import OurServicesSection from "./modules/OurServices";
import LetsChat from "./modules/LetsChat";

export default function Home() {
  useScrollAndMousePosition();

  // List of section IDs
  useSectionObserver(["header", "contact", "comet"]);

  return (
    <div className="overflow-x-hidden bg-zinc-900">
      <Navbar />
      <MobileCTA />
      <HeaderSection id="header" />
      <MeetTheTeam id="team" />

      <OurServicesSection id="services" />

      <LetsChat id="contact" />
      {/* <ContactFormSection id="contact" /> */}
      <Comet />
    </div>
  );
}
