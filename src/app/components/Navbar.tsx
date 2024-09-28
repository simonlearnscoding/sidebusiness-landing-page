import { Globe, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const Navbar = () => (
  <div className="flex mt-10 w-full">
    <div className="text-sans text-xl w-full h-full font-regular text-zinc-50">
      LOGO
    </div>
    <div className="flex-grow flex border-solid border-[2px] py-4 px-5 rounded-sm border-zinc-100 items-center gap-4 text-zinc-100 ml-auto">
      <Globe size={24} />
      <div className="whitespace-nowrap font-sans text-xl font-regular">
        START YOUR JOURNEY
      </div>
      <ArrowRight size={24} />
    </div>
  </div>
);

export default Navbar;
