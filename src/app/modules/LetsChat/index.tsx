"use client";
import Image from "next/image";

const LetsChat = ({ id }: { id: string }) => {
  return (
    <section id={id}>
      <div className="relative w-screen bg-white">
        <div className="absolute top-16 right-20 h-[233px] w-20">
          <Image fill src={"/meet-the-team.png"} alt={"svg"} />
        </div>

        <div className="absolute z-10 bottom-12 left-1/2 translate-x-44 h-96 w-96">
          <Image fill src={"/Arrow.svg"} alt={"svg"} />
        </div>

        <div className="absolute top-28 left-1/2 translate-x-16 h-72 w-72">
          <Image fill src={"/YellowSticker.svg"} alt={"svg"} />
        </div>

        <div className="flex h-full flex-col">
          <div className="mt-36 ml-24 font-bebas text-9xl text-zinc-400">
            HAVE SOME COOL IDEAS?{" "}
          </div>

          <div className="mb-10 ml-24 font-bebas text-[280px] text-zinc-950">
            Let&apos;s HAVE A CHAT
          </div>

          <a
            href="https://calendly.com/simon-muscas"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto h-60 cursor-pointer  bg-primary-500 w-full text-9xl flex items-center justify-start pl-24 overflow-hidden relative group"
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
