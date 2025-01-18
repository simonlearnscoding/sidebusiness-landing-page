// Navbar Component
import { List } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useSectionStore } from "@/store/useSectionStore";

const Navbar = () => {
  const scrollToSection = useSectionStore((state) => state.scrollToSection);
  return (
    <div className="sticky flex top-4 items-center  md:w-fit px-4 sm:px-10  z-50  h-fit w-full">
      {/* LOGO */}
      <div className="font-sans relative w-fit h-fit text-xl p-2 rounded-md bg-zinc-900 font-normal">
        <Image src="/Logo.svg" alt="Logo" width={24} height={24} />
      </div>

      {/* MOBILE HAMBURGER ICON */}
      <div className="sm:hidden ml-auto">
        <List size={28} className={"text-zinc-900"} />
      </div>
    </div>
  );
};

export default Navbar;
