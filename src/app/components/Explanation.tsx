import { ArrowRight } from "@phosphor-icons/react";
export default function Explanation() {
  return (
    <div className="flex mx-4 lg:mx-20 min-h-screen  justify-center  flex-col mb-16 lg:mb-32">
      <h2 className="flex  flex-col lg:w-8/12 mb-6 mt-4">
        we take the stress off of website building
      </h2>
      <div className="flex">
        <div className="flex gap-10 lg:gap-0  flex-1 flex-col">
          <p className="flex  font-sans   ">
            With an exceptional team of experts in website building, we will
            listen and implement every detail you have for your dream website.
            We dont force a cookie-cutter one size fits all template that lacks
            originality or any unique qualities that you get from Wix,
            Wordpress, and other page builders.
          </p>
          <div className="bg-gray-400 h-[297px] lg:hidden w-full"> </div>

          <p className="flex  font-sans   flex-col">
            You also won't be working alone, by yourself with an A.I. computer
            giving you generic suggestions on what would improve your website.
            Instead you be a part of a team that's cares about your success, who
            will work together every step of the way that isn't there just to
            collect a subscription purchase.
          </p>
          <div className="flex lg:gap-6 gap-1 lg:mt-16 mt-2 md:mt-6 mb-4 ">
            <div className=" flex justify-center items-center bg-zinc-800 p-5 rounded-full border-solid border-white/5 border-[2px]">
              <ArrowRight className="-rotate-45 lg:w-10 w-6 h-6 lg:h-10" />
            </div>

            <div className="font-sans lg:text-4xl  text-2xl md:text-3xl my-auto ml-4 text-white">
              {" "}
              LETS PUT YOUR BUSINESS ON THE MAP{" "}
            </div>
          </div>
        </div>
        <div className="justify-end items-center  hidden xl:flex flex-1  h-fill">
          <div className="h-full w-[425px]  xl:mr-24 bg-gray-300"> </div>
        </div>
      </div>
    </div>
  );
}
