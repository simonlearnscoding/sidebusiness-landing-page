import { useSectionStore } from "@/store/useSectionStore";

const MobileCTA = () => {
  const scrollToSection = useSectionStore((state) => state.scrollToSection);
  const activeSection = useSectionStore((state) => state.activeSection);

  const handleClick = () => {
    if (activeSection === "header") {
      scrollToSection("contact");
    } else if (activeSection === "contact") {
      console.log("send form");
    }
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      className="fixed sm:static w-full sm:w-auto  z-40 bottom-0 sm:bottom-auto sm:flex  sm:justify-center sm:items-center sm:mt-10"
    >
      <div
        className={`box-border px-10 hover:text-gray-900 hover:bg-gray-50 border-solid border-[2px] border-gray-900  font-sans  font-semibold shadow-md mx-4 mb-6 sm:mb-0 rounded-full text-white text-xl whitespace-nowrap py-4 sm:py-6 cursor-pointer ${
          activeSection === "header" ? "bg-primary-500" : "bg-gray-900"
        } z-20 transition-all flex justify-center text-3xl`}
      >
        {activeSection === "contact" ? "CONTACT US" : "RESERVE A SPOT"}
      </div>
    </div>
  );
};

export default MobileCTA;
