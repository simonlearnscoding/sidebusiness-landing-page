// app/page.tsx
"use client";
import Navbar from "./components/Navbar";
import ContactFormSection from "./modules/ContactForm";
import HeaderSection from "./modules/Header";

export default function Home() {
  return (
    <div className="bg-zinc-900">
      <Navbar />
      <HeaderSection />
      <ContactFormSection />
    </div>
  );
}
