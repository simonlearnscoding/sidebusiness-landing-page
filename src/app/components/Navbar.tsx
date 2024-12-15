// Navbar Component
import { Phone, List } from "@phosphor-icons/react/dist/ssr";
import { useSectionStore } from "@/store/useSectionStore";

const Button = ({ name, handleClick, active }) => {
  return (
    <div
      onClick={handleClick}
      className={`font-sans flex transition-all hover:bg-zinc-100 ${active ? "bg-zinc-100" : "bg-inherit"} px-4 py-2 rounded-md cursor-pointer text-xl  h-full font-normal text-zinc-900`}
    >
      {name}
    </div>
  );
};

const CallCTA = ({ name }) => {
  return (
    <div className="font-sans flex transition-all border-solid border-[2px] border-zinc-600 hover:bg-zinc-900 px-3 gap-1 py-2 rounded-md cursor-pointer bg-zinc-800 text-xl  h-full font-normal text-zinc-100">
      <div className=" flex justify-center items-center ">
        <Phone size={20} />
      </div>

      {name}
    </div>
  );
};

const Navbar = ({ sections }) => {
  const scrollToSection = useSectionStore((state) => state.scrollToSection);
  const activeSection = useSectionStore((state) => state.activeSection);

  return (
    <div className="sticky select-none  justify-center   hidden md:flex md:top-6 items-center px-4 md:px-10  z-50  h-fit w-full">
      {/* LOGO */}
      <div className="font-sans flex gap-2   p-2 rounded-md   border-solid  border-gray-200 border-[1px]  bg-white text-xl  h-full font-normal text-zinc-50">
        {sections.map((section, index) => (
          <Button
            active={activeSection === section}
            handleClick={() => scrollToSection(section)}
            key={section}
            name={section}
          />
        ))}
        <CallCTA name={"Book a call"} />
      </div>

      {/* MOBILE HAMBURGER ICON */}
      <div className="sm:hidden ml-auto">
        <List size={28} className={"text-zinc-100"} />
      </div>

      {/* DESKTOP MENU */}
      {/* <div */}
      {/*   onClick={() => scrollToSection("contact")} */}
      {/*   className="flex-grow cursor-pointer z-50 hidden bg-zinc-900 sm:flex border-solid border-[2px] py-3 px-5 rounded-sm border-zinc-100 items-center gap-4 text-zinc-100 ml-auto" */}
      {/* > */}
      {/*   <Globe size={24} /> */}
      {/*   <div */}
      {/*     className={`${bebasNeue.className} whitespace-nowrap font-sans text-2xl font-normal`} */}
      {/*   > */}
      {/*     START YOUR JOURNEY */}
      {/*   </div> */}
      {/*   <ArrowRight size={24} /> */}
      {/* </div> */}
    </div>
  );
};

export default Navbar;
