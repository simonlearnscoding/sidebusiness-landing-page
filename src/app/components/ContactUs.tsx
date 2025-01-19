import { CalendarCheck } from "@phosphor-icons/react";
export default function ContactUs() {
  return (
    <div className=" flex bg-gradient-to-br mt-10 from-gray-950 to-primary-500 mx-4 rounded-3xl  flex-col  ">
      <div className="flex md:items-center  px-4 md:px-0  items-start justify-start flex-col md:justify-center flex-1 ">
        <h1 className="md:text-center mt-16 text-white  md:mt-0 text-start max-w-2xl">
          Turn Clicks Into{" "}
          <span className="span">Customers With Seamless Web!</span>
        </h1>
        <div className="text-white mr-4 font-inter mt-3">
          {" "}
          At seamlessWeb you’ll be part of a team whose only goal is increasing
          your chances of success.{" "}
        </div>

        <div className=" mb-6 lg:text-5xl px-4 flex items-center mt-24 text-2xl font-sans lg:max-w-5xl  bg-zinc-100 text-center w-full text-zinc-700  py-5 rounded-xl lg:py-5">
          <div className="rounded-full bg-green-400 w-2 h-2 mr-2"> </div>

          <div className="mr-auto font-medium"> 2 Spots Left </div>
          <CalendarCheck weight="bold" size={24} />
        </div>
      </div>
    </div>
  );
}
