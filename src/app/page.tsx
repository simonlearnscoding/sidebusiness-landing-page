// app/page.tsx
"use client";
import useScrollAndMousePosition from "@/hooks/useScrollAndMousePos";
import Navbar from "./components/Navbar";
import ContactFormSection from "./modules/ContactForm";
import HeaderSection from "./modules/Header";

export default function Home() {
  useScrollAndMousePosition();
  return (
    <div className=" overflow-x-hidden bg-zinc-900">
      <Navbar />
      <HeaderSection />
      <ContactFormSection />
    </div>
  );
}
