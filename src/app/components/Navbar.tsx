import { Globe, ArrowRight, List } from "@phosphor-icons/react/dist/ssr";
import { Bebas_Neue } from "@next/font/google";
import { useSectionStore } from "@/store/useSectionStore";
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const activeSection = useSectionStore((state) => state.activeSection);
  const scrollToSection = useSectionStore((state) => state.scrollToSection);
  return (
    <div className="flex top-6 sm:top-10 px-3 sm:px-10 z-50  sticky w-full">
      {/* LOGO */}
      <div className="font-sans text-xl w-full h-full font-normal text-zinc-50">
        LOGO
      </div>

      {/* MOBILE HAMBURGER ICON */}
      <div className="sm:hidden ml-auto">
        <List size={28} className={"text-zinc-100"} />
      </div>

      {/* DESKTOP MENU */}
      <div
        onClick={() => scrollToSection("contact")}
        className="flex-grow cursor-pointer z-50 hidden bg-zinc-900 sm:flex  border-solid border-[2px] py-4 px-5 rounded-sm border-zinc-100 items-center gap-4 text-zinc-100 ml-auto"
      >
        <Globe size={24} />
        <div
          className={`${bebasNeue.className} whitespace-nowrap font-sans text-3xl  font-normal`}
        >
          START YOUR JOURNEY
        </div>
        <ArrowRight size={24} />
      </div>
    </div>
  );
};

export default Navbar;
