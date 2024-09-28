import { Bebas_Neue } from "@next/font/google";
import Image from "next/image";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => (
  <div className="flex flex-col">
    <div
      className={`${bebasNeue.className} text-9xl max-w-4xl flex mt-16 text-zinc-100`}
    >
      Uniting BRANDS with their VISIONS
    </div>
    <div className="font-sans text-zinc-100 text-2xl mt-4 font-light leading-normal max-w-lg">
      WE BELIEVE THAT THOSE WHO DARE WILL FIND THEIR PATH
    </div>

    <Image
      alt={"arrow"}
      src={"/ArrowHeader.png"}
      width={160}
      height={160}
      className="relative ml-80 bottom-6"
    />
  </div>
);

export default Header;
