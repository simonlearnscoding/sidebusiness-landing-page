import { CalendarCheck } from "@phosphor-icons/react";
export default function BookAnAppointment() {
  return (
    <div className="flex mt-2 mb-8 mx-4 rounded-3xl bg-primary-600      flex-col ">
      <div className="mx-4 lg:mx-20">
        <h1 className=" text-dark mb-3 mt-14 text-4xl     ">
          Book an appointment for a free 45 min consultation call to discuss
          your <span className=" text-white span"> Dream Website.</span>
        </h1>
        <div className=" font-inter text-regular text-xl text-dark">
          Let’s put your business on the map!
        </div>
        <button className="mb-7 items-center gap-3 justify-center flex mt-14 bg-dark font-sans w-full text-2xl font-medium rounded-xl text-white py-5 px-5 ">
          <div className=""> SAVE ME A SPOT </div>
          <CalendarCheck weight="bold" size={24} />
        </button>
      </div>
    </div>
  );
}
