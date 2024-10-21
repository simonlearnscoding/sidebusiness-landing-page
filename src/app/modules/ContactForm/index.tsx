// components/ContactFormSection.tsx
import React from "react";
import ContactForm from "./ContactForm";
import { Bebas_Neue } from "@next/font/google";
import Image from "next/image";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

function LetsWorkTitle() {
  return (
    <div className="w-full h-fit sm:mt-8  flex z-10">
      <div className="min-h-full sm:block  bg-primary-500 w-[2px] mr-2 sm:mr-6"></div>
      <div className="flex flex-col gap-4">
        <h1 className="lg:text-9xl md:text-8xl sm:block  sm:text-7xl text-6xl">
          LETS WORK TOGETHER
        </h1>
      </div>
    </div>
  );
}

export default function ContactFormSection({ id }) {
  return (
    <section id={id}>
      <div
        className={`${bebasNeue.className} text-zinc-50 h-screen px-8 bg-zinc-900 sm:pb-10  pt-28  w-screen flex-1 flex-col flex`}
      >
        <div className="flex-1 relative w-full h-full p-2 gap-5 sm:flex-row flex-col-reverse flex">
          <div className="flex-1 flex flex-col items-start ">
            <LetsWorkTitle />
            <ContactForm />
          </div>
          <div className=" scale-125  lg:scale-100 hidden md:relative  z-0 translate-x-40 lg:translate-x-0 lg:flex justify-center items-center flex-1">
            <div className=" relative w-full h-full">
              <Image
                src="/mountain.png"
                alt="mountain"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
