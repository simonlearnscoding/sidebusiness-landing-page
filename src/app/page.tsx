import Image from "next/image";
import { Bebas_Neue } from "@next/font/google";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => (
  <div className="flex flex-col">
    <div
      className={`${bebasNeue.className} text-9xl max-w-4xl  flex mt-16  text-zinc-100`}
    >
      Uniting BRANDS with their VISIONS
    </div>
    <div className="font-sans text-zinc-100 text-3xl mt-4  font-light  max-w-sm ">
      {" "}
      WE BELIEVE THAT THOSE WHO DARE WILL FIND THEIR PATH
    </div>
  </div>
);

const Navbar = () => (
  <div className="py-6 flex my-4 w-full">
    <div className="text-sans text-xl w-full h-full font-regular text-zinc-50">
      LOGO
    </div>
    <div className="flex-grow flex items-center gap-4 text-zinc-100 ml-auto">
      <Globe size={24} />
      <div className="whitespace-nowrap font-sans text-xl font-regular">
        START YOUR JOURNEY
      </div>
      <ArrowRight size={24} />
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="w-screen h-screen relative overflow-x-hidden">
      {/* Background Overlay */}
      <Image
        alt={"noise"}
        src={"/noise.png"}
        fill
        className="absolute inset-0  opacity-70 z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="flex flex-col w-full h-full bg-zinc-900 bg-noise-texture bg-cover bg-center bg-blend-overlay px-20 z-10">
        <Navbar />
        <Header />
        <div className="absolute bottom-[-160px] right-[-40px]">
          <Image src={"/meteor.png"} alt={"meteor"} width={800} height={800} />
        </div>
      </div>
    </div>
  );
}
