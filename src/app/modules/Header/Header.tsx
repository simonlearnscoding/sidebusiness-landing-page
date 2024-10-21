import { Bebas_Neue } from "@next/font/google";
import Image from "next/image";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => (
  <div className="flex gap-3 mt-12 ">
    <div className="w-1 bg-primary-500 h-full"> </div>
    <div className="flex z-10 flex-col">
      <div
        className={`${bebasNeue.className} text-7xl   leading-none md:text-8xl lg:text-9xl max-w-4xl  flex   sm:mt-4 text-zinc-100`}
      >
        Uniting BRANDS with their VISIONS
      </div>
      <div className="font-sans text-zinc-100 text-lg sm:text-2xl  mt-1 font-light leading-normal max-w-lg">
        WE BELIEVE THAT THOSE WHO DARE WILL FIND THEIR PATH
      </div>
    </div>
  </div>
);

export default Header;
