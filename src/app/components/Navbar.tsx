import { Globe, ArrowRight, List } from "@phosphor-icons/react/dist/ssr";
import { Bebas_Neue } from "@next/font/google";
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => (
  <div className="flex top-10 px-10 z-50  sticky w-full">
    {/* LOGO */}
    <div className="font-sans text-xl w-full h-full font-normal text-zinc-50">
      LOGO
    </div>

    {/* MOBILE HAMBURGER ICON */}
    <div className="sm:hidden ml-auto">
      <List size={28} className={"text-zinc-100"} />
    </div>

    {/* DESKTOP MENU */}
    <div className="flex-grow z-50 hidden bg-zinc-900 sm:flex  border-solid border-[2px] py-4 px-5 rounded-sm border-zinc-100 items-center gap-4 text-zinc-100 ml-auto">
      <Globe size={24} />
      <div className={`${bebasNeue.className} whitespace-nowrap font-sans text-3xl  font-normal`}>
        START YOUR JOURNEY
      </div>
      <ArrowRight size={24} />
    </div>

    {/* MOBILE MENU */}
    <div className="fixed sm:hidden w-full z-40 bottom-4">
      <div className="box-border text-zinc-100  mx-4 whitespace-nowrap py-5 border-solid cursor-pointer bg-primary-500 z-20 font-sans border-[1px] flex border-zinc-400 justify-center text-xl font-normal">
        START YOUR JOURNEY
      </div>
    </div>
  </div>
);

export default Navbar;
