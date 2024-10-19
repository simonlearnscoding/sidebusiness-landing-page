import { Bebas_Neue } from "@next/font/google";
import Image from "next/image";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => (
  <div className="flex z-10 flex-col">
    <div
      className={`${bebasNeue.className} text-7xl leading-none sm:text-9xl max-w-4xl  flex mt-7 sm:mt-8 text-zinc-100`}
    >
      Uniting BRANDS with their VISIONS
    </div>
    <div className="font-sans text-zinc-100 text-lg sm:text-2xl  mt-3 sm:mt-1 font-light leading-normal max-w-lg">
      WE BELIEVE THAT THOSE WHO DARE WILL FIND THEIR PATH
    </div>
  </div>
);

export default Header;
