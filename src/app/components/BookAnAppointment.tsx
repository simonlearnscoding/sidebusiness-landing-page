import { CalendarCheck } from "@phosphor-icons/react";
import Image from "next/image";
export default function BookAnAppointment() {
  return (
    <div className="flex bg-gradient-to-br mt-2  relative via-[#3CAAE2] lg:mt-16 mb-8 lg:mb-20 mx-4 rounded-3xl from-primary-600 from-40% to-teal-400 lg:mx-20      flex-col ">
      <div className=" w-10/12 right-0 h-full opacity-70 z-0 absolute ">
        <Image className="" src="/map.svg" fill alt="map" />
      </div>

      <div className="mx-4 lg:mx-20 z-10">
        <h1 className=" text-dark mb-3 mt-14 lg:mt-24 lg:w-10/12 xl:w-9/12">
          Book an appointment for a free consultation call to discuss your{" "}
          <span className=" text-white span"> Dream Website.</span>
        </h1>
        <div className=" font-inter text-regular text-xl lg:text-3xl text-dark">
          Let’s put your business on the map!
        </div>
        <button className="mb-7  shadow-[inset_19px_19px_31px_0px_rgba(255,_255,_255,_0.10)]  shadow-[0px_44px_12px_0px_rgba(0,_0,_0,_0.01)]  shadow-[0px_28px_11px_0px_rgba(0,_0,_0,_0.05)]   shadow-[0px_15px_9px_0px_rgba(0,_0,_0,_0.17)]  shadow-[inset_-20px_-21px_19px_0px_rgba(0,_0,_0,_0.3)] lg:mb-24 items-center shadow-lg gap-3 justify-center flex mt-14 bg-dark font-sans w-full lg:w-fit shadow-lg text-2xl font-medium rounded-xl text-white py-5 px-5 ">
          <div className=""> SAVE ME A SPOT </div>
          <CalendarCheck weight="bold" size={24} />
        </button>
      </div>
    </div>
  );
}
