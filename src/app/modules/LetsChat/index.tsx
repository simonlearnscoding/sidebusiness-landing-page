"use client";
import Image from "next/image";

const LetsChat = ({ id }: { id: string }) => {
  return (
    <section id={id}>
      <div className="relative w-screen h-screen bg-white">
        <div className=" hidden absolute sm:block top-16 right-20 h-[233px] w-20">
          <Image fill src={"/meet-the-team.png"} alt={"svg"} />
        </div>

        <div className="absolute z-10 bottom-20  left-1/2 translate-x-10 sm:translate-x-44 sm:h-96 h-36 w-36 sm:w-96">
          <Image fill src={"/Arrow.svg"} alt={"svg"} />
        </div>

        {/* <div className="absolute top-28 left-1/2 translate-x-16 h-72 w-72"> */}
        {/*   <Image fill src={"/YellowSticker.svg"} alt={"svg"} /> */}
        {/* </div> */}

        <div className="flex h-full flex-col ">
          <div className="flex flex-1 flex-col mx-4 sm:ml-24">
            <h2 className="sm:mt-36 mt-6   font-bebas text-lg sm:text-7xl text-zinc-400">
              HAVE SOME COOL IDEAS?{" "}
            </h2>

            <h1 className="sm:mb-10  text-5xl font-bebas  text-zinc-950">
              Let&apos;s HAVE A CHAT
            </h1>
            <p className="text-lg mt-4">
              {" "}
              We're open for business and collaboration{" "}
            </p>
            <div className="mt-2 block sm:hidden bg-indigo-200 flex-1 max-h-80 rounded-md">
              {" "}
            </div>
          </div>

          <a
            href="https://calendly.com/simon-muscas"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto py-10 cursor-pointer  bg-primary-500 w-full text-9xl sm:flex items-center justify-start pl-24 overflow-hidden relative hidden group"
          >
            <span className="absolute inset-0 bg-green-500 transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
            <span className="relative z-10 group-hover:text-zinc-800 animate-color  text-white">
              BOOK A CALL
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LetsChat;
