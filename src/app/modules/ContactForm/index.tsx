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
    <div className=" w-full h-fit flex">
      <div className="min-h-full bg-violet-600 w-2 mr-6"></div>
      <div className="flex flex-col gap-4">
        <h1 className="text-9xl">LETS WORK TOGETHER</h1>
        <div className="font-sans text-xl leading-relaxed w-10/12">
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
      className={` ${bebasNeue.className} text-zinc-50 h-screen px-8 pb-10 pt-8 w-screen flex-1 flex-col flex`}
    >
      <div className="flex-1 w-full mt-8 h-full p-2 gap-5 flex">
        <div className="flex-1 flex flex-col items-start ">
          <LetsWorkTitle />
          <ContactForm />
        </div>
        <div className=" flex justify-center  items-center  flex-1">
          <div className=" relative  w-full h-full  ">
            <Image
              src="/mountain.png"
              alt="mountain"
              fill
              className="object-cover  rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
