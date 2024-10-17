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
    <div className="w-full h-fit flex z-10">
      <div className="min-h-full sm:block hidden bg-violet-600 w-2 mr-6"></div>
      <div className="flex flex-col gap-4">
        <h1 className="sm:text-9xl sm:block hidden text-7xl">LETS WORK TOGETHER</h1>
        <div className="font-sans sm:block hidden text-xl leading-relaxed w-10/12">
          Lorem ipsum dolor sit amet consectetur. Condimentum congue penatibus
          fusce imperdiet quam ut. Amet tempor enim ultrices magna porttitor
          urna. A quisque et etiam morbi lectus eros sed diam quis. Integer
          pellentesque diam eu mollis nibh morbi.
        </div>
      </div>
    </div>
  );
}

export default function ContactFormSection() {
  return (
    <div
      className={`${bebasNeue.className} text-zinc-50 h-screen px-8 pb-10 pt-8 w-screen flex-1 flex-col flex`}
    >
      <div className="flex-1 relative w-full h-full p-2 gap-5 sm:flex-row flex-col-reverse flex">
        <div className="flex-1 flex flex-col items-start ">
          <LetsWorkTitle />
          <ContactForm />
        </div>
        <div className="flex justify-center items-center flex-1">
          <div className="sm:relative hidden sm:block  z-0 w-full h-full">
            <Image
              src="/mountain.png"
              alt="mountain"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
