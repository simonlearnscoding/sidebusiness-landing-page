// app/page.tsx
"use client";
import ContactFormSection from "./modules/ContactForm";
import HeaderSection from "./modules/Header";

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <ContactFormSection />
    </div>
  );
}
