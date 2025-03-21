import { CalendarCheck } from "@phosphor-icons/react";
import Image from "next/image";
import { LINK_TO_APPOINTMENT } from "../constants";
export default function BookAnAppointment() {
  return (
    <div className="flex bg-gradient-to-br mt-2 relative via-[#3CAAE2] lg:mt-16 mb-8 lg:mb-20 mx-4 rounded-3xl from-primary-600 from-40% to-teal-400 lg:mx-20 flex-col shiny-hover">
      {/* Shiny effect will apply to this entire card */}
      <div className="w-10/12 right-0 h-full opacity-70 z-0 absolute">
        <Image className="" src="/map.svg" fill alt="map" />
      </div>

      <div className="mx-4 lg:mx-20 z-10">
        <h1 className="text-dark mb-3 mt-14 lg:mt-24 lg:w-10/12 xl:w-9/12">
          Book an appointment for a free consultation call to discuss your{" "}
          <span className="text-white span">Dream Website.</span>
        </h1>
        <div className="font-sans font-medium text-xl lg:text-3xl text-dark">
          Let’s put your business on the map!
        </div>
        <button
          onClick={() => window.open(LINK_TO_APPOINTMENT, "_blank")}
          className="mb-7  shadow-[inset_19px_19px_31px_0px_rgba(255,_255,_255,_0.10)]  shadow-[0px_44px_12px_0px_rgba(0,_0,_0,_0.01)]  shadow-[0px_28px_11px_0px_rgba(0,_0,_0,_0.05)]   shadow-[0px_15px_9px_0px_rgba(0,_0,_0,_0.17)]  shadow-[inset_-20px_-21px_19px_0px_rgba(0,_0,_0,_0.3)] lg:mb-24 items-center shadow-lg gap-3 justify-center flex mt-14 bg-dark hover:bg-primary-500 hover:text-dark animate-all border-solid border-dark border-[1px] font-sans w-full lg:w-fit shadow-lg text-2xl font-medium rounded-xl text-white py-5 px-5 "
        >
          <div className="z-10">SAVE ME A SPOT</div>
          <CalendarCheck weight="bold" size={24} className="z-10" />
        </button>
      </div>

      <style jsx>{`
        @keyframes shiny {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) rotate(45deg);
          }
        }

        .shiny-hover {
          position: relative;
          overflow: hidden;
        }

        .shiny-hover::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.1)
          );
          transform: rotate(45deg);
          animation: shiny 1.5s infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .shiny-hover:hover::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
