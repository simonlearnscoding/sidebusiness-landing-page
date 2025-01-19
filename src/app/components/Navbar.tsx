// Navbar Component
import { Phone, List } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useSectionStore } from "@/store/useSectionStore";

const Button = ({ name, handleClick, active }) => {
  return (
    <div
      onClick={handleClick}
      className={`font-sans flex transition-all hover:bg-gray-800 ${active ? "bg-gray-800" : "bg-inherit"} px-4 py-2 rounded-lg cursor-pointer text-xl  h-full font-medium text-gray-50`}
    >
      {name}
    </div>
  );
};

const CallCTA = ({ name }) => {
  return (
    <div className="font-sans flex transition-all border-solid border-[2px] border-blue-300 hover:bg-zinc-900 px-3 gap-1 py-2 rounded-md cursor-pointer bg-primary-500 text-xl  h-full font-semibold text-zinc-100">
      <div className=" flex justify-center items-center ">
        <Phone weight={"bold"} size={20} />
      </div>

      {name}
    </div>
  );
};

const TopLogo = () => {
  return (
    <div className="fixed top-4 font-sans  w-fit h-fit text-xl p-2 rounded-md bg-gray-900  sm:mx-10 lg:mx-20  z-50 h-fit  text-white font-normal">
      <Image src="/Logo.svg" alt="Logo" width={24} height={24} />
    </div>
  );
};

const BottomNavbar = ({ sections, scrollToSection, activeSection }) => {
  return (
    <div className="fixed flex bottom-4 items-center    left-1/2  hidden md:flex -translate-x-1/2 md:w-fit px-4   z-50  h-fit w-full">
      {/* BOTTOM NAVBAR */}
      <div className="font-sans items-center flex flex gap-2  shadow-sm rounded-xl   p-2     whitespace-nowrap   bg-gray-900 text-xl  h-full font-normal text-gray-50">
        <div className=" relative text-white bg-primary-500 rounded-lg w-12 flex items-center justify-center h-10">
          <Image src="/Logo.svg" alt="Logo" width={24} height={24} />
        </div>

        {sections.map((section, index) => (
          <Button
            active={activeSection === section}
            handleClick={() => scrollToSection(section)}
            key={section}
            name={section}
          />
        ))}
        <CallCTA name={"Book a call"} />
        {/* MOBILE HAMBURGER ICON */}
        <div className="sm:hidden ml-auto">
          <List size={28} className={"text-zinc-900"} />
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ sections }) => {
  const scrollToSection = useSectionStore((state) => state.scrollToSection);
  const activeSection = useSectionStore((state) => state.activeSection);

  return (
    <div className="">
      {/* LOGO */}
      <TopLogo />
      <BottomNavbar
        sections={sections}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
    </div>
  );
};

export default Navbar;
