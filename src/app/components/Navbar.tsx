// Navbar Component
import { Phone, X, List } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useSectionStore } from "@/store/useSectionStore";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

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

const TopLogo = ({ isDarkMode, sections, scrollToSection }) => {
  return (
    <div className="">
      <div
        className={`fixed animate-all flex  duration-600 items-center top-0 py-4  z-50 ${!isDarkMode ? "bg-white" : "bg-gray-900"} w-full`}
      >
        <div
          className={`font-sans  animate-all  duration-600  w-fit  text-xl p-2   rounded-md ${!isDarkMode ? " bg-gray-900 text-gray-900" : " bg-gray-900 text-gray-50"}  sm:mx-10 mx-4 lg:mx-20   h-fit   font-normal`}
        >
          <Image src="/Logo.svg" alt="Logo" width={24} height={24} />
        </div>
        <div className="ml-auto sm:hidden mr-4">
          <MobileMenu
            isDarkMode={isDarkMode}
            sections={sections}
            scrollToSection={scrollToSection}
          />
        </div>
      </div>
    </div>
  );
};

const DrawerItem = ({ name, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="font-sans text-center text-gray-800 hover:text-primary-500 flex transition-all hover:bg-gray-200 px-4 py-4 rounded-lg cursor-pointer text-3xl   font-medium "
    >
      {name}
    </div>
  );
};

const MobileMenu = ({ sections, scrollToSection, isDarkMode }) => {
  return (
    <div className="">
      <Drawer direction="right">
        <DrawerTrigger>
          <List
            size={28}
            className={` ${isDarkMode ? "text-gray-50" : "text-gray-950"}`}
          />
        </DrawerTrigger>
        <DrawerContent className="h-screen flex flex-col ">
          <DrawerClose>
            <X size={40} className={"ml-auto  mr-4 cursor-pointer"} />
          </DrawerClose>
          <div className="flex  mb-10 justify-center gap-4 flex-1 flex-col items-center ">
            <DrawerClose>
              {sections.map((section: string) => (
                <DrawerItem
                  key={section}
                  name={section}
                  handleClick={() => {
                    setTimeout(() => {
                      scrollToSection(section);
                    }, 200);
                  }}
                />
              ))}
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
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
    <div className="fixed  bottom-4 items-center    left-1/2  hidden md:flex -translate-x-1/2 md:w-fit px-4   z-50  h-fit w-full">
      {/* BOTTOM NAVBAR */}
      <div
        className={`font-sans items-center flex gap-2  shadow-sm rounded-xl   p-2     whitespace-nowrap   ${isDarkMode ? "bg-gray-50" : "bg-gray-900"} text-xl  h-full font-normal `}
      >
        <div
          className={` relative ${isDarkMode ? "text-gray-900" : "    text-gray-50"} bg-primary-500 rounded-lg w-12 flex items-center justify-center h-10`}
        >
          <Image src="/Logo.svg" alt="Logo" width={24} height={24} />
        </div>

        {sections.map((section: string, index: number) => (
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
      </div>
    </div>
  );
};

const Navbar = ({ sections }) => {
  const scrollToSection = useSectionStore((state) => state.scrollToSection);
  const activeSection = useSectionStore((state) => state.activeSection);

  const isDarkMode = activeSection == "Our Services";

  return (
    <div className="">
      {/* LOGO */}
      <TopLogo
        sections={sections}
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
      />
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
