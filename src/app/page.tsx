// app/page.tsx
"use client";
import useScrollAndMousePosition from "@/hooks/useScrollAndMousePos";
import Navbar from "./components/Navbar";
import ContactFormSection from "./modules/ContactForm";
import HeaderSection from "./modules/Header";

import Comet from "./components/Comet"; // Import the separated Comet component
export default function Home() {
  useScrollAndMousePosition();
  return (
    <div className=" overflow-x-hidden bg-zinc-900">
      <Navbar />
      <HeaderSection />
      <Comet />
      <ContactFormSection />
    </div>
  );
}
