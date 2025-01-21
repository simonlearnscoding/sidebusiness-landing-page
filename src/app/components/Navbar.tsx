// Navbar Component
import { Phone, List } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useSectionStore } from "@/store/useSectionStore";

const Button = ({ name, handleClick, active, isDarkMode }) => {
  return (
    <div
      onClick={handleClick}
      className={`font-sans flex transition-all ${isDarkMode ? "hover:bg-gray-200" : "  hover:bg-gray-800 text-gray-50"} ${active ? (isDarkMode ? "bg-gray-200" : "bg-gray-800") : "bg-inherit"} px-4 py-2 rounded-lg cursor-pointer text-xl  h-full font-medium `}
    >
      {name}
    </div>
  );
};

const CallCTA = ({ name, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="font-sans flex transition-all border-solid border-[2px] border-blue-300 hover:bg-zinc-900 px-3 gap-1 py-2 rounded-md cursor-pointer bg-primary-500 text-xl  h-full font-semibold text-zinc-100"
    >
      <div className=" flex justify-center items-center ">
        <Phone weight={"bold"} size={20} />
      </div>

      {name}
    </div>
  );
};

const TopLogo = ({ isDarkMode }) => {
  return (
    <div className="">
      <div
        className={`fixed animate-all  duration-600 top-0 py-4  z-50 ${!isDarkMode ? "bg-white" : "bg-gray-900"} w-full`}
      >
        <div
          className={`font-sans  animate-all  duration-600  w-fit  text-xl p-2 rounded-md ${!isDarkMode ? " bg-gray-900 text-gray-900" : " bg-gray-900 text-gray-50"}  sm:mx-10 lg:mx-20   h-fit   font-normal`}
        >
          <Image src="/Logo.svg" alt="Logo" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

const BottomNavbar = ({
  sections,
  scrollToSection,
  activeSection,
  isDarkMode,
}) => {
  return (
    <div className="fixed flex bottom-4 items-center    left-1/2  hidden md:flex -translate-x-1/2 md:w-fit px-4   z-50  h-fit w-full">
      {/* BOTTOM NAVBAR */}
      <div
        className={`font-sans items-center flex flex gap-2  shadow-sm rounded-xl   p-2     whitespace-nowrap   ${isDarkMode ? "bg-gray-50" : "bg-gray-900"} text-xl  h-full font-normal `}
      >
        <div
          className={` relative ${isDarkMode ? "text-gray-900" : "    text-gray-50"} bg-primary-500 rounded-lg w-12 flex items-center justify-center h-10`}
        >
          <Image src="/Logo.svg" alt="Logo" width={24} height={24} />
        </div>

        {sections.map((section, index) => (
          <Button
            isDarkMode={isDarkMode}
            active={activeSection === section}
            handleClick={() => scrollToSection(section)}
            key={section}
            name={section}
          />
        ))}
        <CallCTA
          onClick={() =>
            window.open("https://calendly.com/simon-muscas/30min", "_blank")
          }
          name={"Book a call"}
        />
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

  const isDarkMode = activeSection == "Our Services";
  console.log(isDarkMode);

  return (
    <div className="">
      {/* LOGO */}
      <TopLogo isDarkMode={isDarkMode} />
      <BottomNavbar
        isDarkMode={isDarkMode}
        sections={sections}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
    </div>
  );
};

export default Navbar;
