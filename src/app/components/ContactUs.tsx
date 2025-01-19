import { CalendarCheck } from "@phosphor-icons/react";
import Image from "next/image";
export default function ContactUs() {
  return (
    <div className=" flex bg-gradient-to-br mt-10 lg:mt-36 shadow-md from-gray-900 from-30% to-primary-500 mx-4 lg:mx-20 rounded-3xl  flex-col  ">
      <div className="flex   px-4 md:px-6 lg:px-16 lg:py-20 relative md:py-6  items-start justify-start flex-col md:justify-center flex-1 ">
        <div className="absolute hidden  lg:flex items-center justify-center opacity-80 w-64 h-96 rounded-2xl bg-gradient-to-b from-[#0188D7]/70 to-[#91D1F5] right-28 top-1/2 border-primary-500 border-solid border-4 -translate-y-1/2 rotate-6">
          <div className="flex items-center justify-center opacity-50">
            <Image src="/Logo.svg" alt="Logo" width={120} height={120} />
          </div>
        </div>
        <h1 className="mt-16 text-start max-w-2xl z-10 md:mt-0 bg-gradient-to-r from-blue-500 via-70% via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Turn Clicks Into
          <span className="lg:pl-3 pl-2">Customers With Seamless Web!</span>
        </h1>
        <div className="text-white lg:text-3xl md:text-xl  md:w-10/12 lg:w-8/12 mr-4 font-inter mt-3 lg:mt-6">
          {" "}
          At seamlessWeb you’ll be part of a team whose only goal is increasing
          your chances of success.{" "}
        </div>

        <div className="cursor-pointer mb-6 lg:text-5xl px-4 md:gap-2 flex items-center mt-24 text-2xl font-sans   bg-white text-center w-full lg:w-fit text-gray-900  py-5 rounded-xl lg:py-5">
          <div className="rounded-full bg-green-400 w-2 h-2 mr-2"> </div>
          <div className="mr-auto font-medium lg:text-3xl"> 2 Spots Left </div>
          <CalendarCheck
            weight="bold"
            className="text-xl sm:text-2xl lg:text-4xl"
          />
        </div>
      </div>
    </div>
  );
}
