import { Globe, ArrowRight, List } from "@phosphor-icons/react/dist/ssr";

const Navbar = () => (
  <div className="flex mt-10 w-full">
    <div className="text-sans text-xl w-full h-full font-regular text-zinc-50">
      LOGO
    </div>
    <div className="sm:hidden ml-auto  ">
      <List size={28} className={"text-zinc-100"} />
    </div>

    {/* DESKTOP */}
    <div className="flex-grow hidden sm:flex  border-solid border-[2px] py-4 px-5 rounded-sm border-zinc-100 items-center gap-4 text-zinc-100 ml-auto">
      <Globe size={24} />
      <div className="whitespace-nowrap font-sans text-xl font-regular">
        START YOUR JOURNEY
      </div>
      <ArrowRight size={24} />
    </div>

    {/* Mobile */}
    <div className="fixed sm:hidden w-full z-40 -mx-5 bottom-4   ">
      <div className="box-border text-zinc-100 font-medium  mx-4 whitespace-nowrap py-5 border-solid cursor-pointer bg-zinc-900 z-20 font-sans border-[1px] flex border-zinc-400 justify-center text-xl font-regular">
        START YOUR JOURNEY
      </div>
    </div>
  </div>
);

export default Navbar;
