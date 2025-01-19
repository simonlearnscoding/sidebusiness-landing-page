import { CalendarCheck } from "@phosphor-icons/react";
export default function ContactUs() {
  return (
    <div className=" flex bg-gradient-to-br mt-10 lg:mt-36 from-gray-950 to-primary-500 mx-4 lg:mx-20 rounded-3xl  flex-col  ">
      <div className="flex   px-4 md:px-6 lg:px-16 lg:py-20 md:py-6  items-start justify-start flex-col md:justify-center flex-1 ">
        <h1 className=" mt-16 text-white  md:mt-0 text-start max-w-2xl">
          Turn Clicks Into{" "}
          <span className="span">Customers With Seamless Web!</span>
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
