import { Bebas_Neue } from "@next/font/google";
import Image from "next/image";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => (
  <div className="flex z-10 flex-col">
    <div
      className={`${bebasNeue.className} text-8xl leading-none sm:text-9xl max-w-4xl  flex mt-7 sm:mt-8 text-zinc-100`}
    >
      Uniting BRANDS with their VISIONS
    </div>
    <div className="font-sans text-zinc-100 text-xl sm:text-2xl  mt-3 sm:mt-4 font-light leading-normal max-w-lg">
      WE BELIEVE THAT THOSE WHO DARE WILL FIND THEIR PATH
    </div>

    <Image
      alt={"arrow"}
      src={"/ArrowHeader.png"}
      width={160}
      height={160}
      className="relative opacity-60 hidden sm:block ml-[470px] bottom-12"
    />
  </div>
);

export default Header;
