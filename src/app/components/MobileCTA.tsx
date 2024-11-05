import { Bebas_Neue } from "@next/font/google";
import { useSectionStore } from "@/store/useSectionStore";
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const MobileCTA = ({}) => {
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
    <div onClick={handleClick} className="fixed sm:hidden w-full z-40 bottom-0">
      <div
        className={`${bebasNeue.className} box-border text-zinc-100 whitespace-nowrap py-8  cursor-pointer ${activeSection == "header" ? "bg-primary-500" : "bg-violet-800"} z-20 transition-all font-sans  flex  justify-center text-3xl font-normal`}
      >
        {activeSection === "contact" ? "CONTACT US" : "START YOUR JOURNEY"}
      </div>
    </div>
  );
};

export default MobileCTA;
