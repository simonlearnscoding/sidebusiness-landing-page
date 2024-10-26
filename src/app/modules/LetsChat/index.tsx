"use client";
import Image from "next/image";

const LetsChat = ({ id }: { id: string }) => {
  return (
    <section id={id}>
      <div className="  relative w-screen bg-white">
        <div className="top-16 right-20   h-[233px] absolute w-20">
          <Image fill src={"/meet-the-team.png"} alt={"svg"} />
        </div>

        <div className="bottom-12 left-1/2   translate-x-44    absolute w-96 h-96">
          <Image fill src={"/Arrow.svg"} alt={"svg"} />
        </div>

        <div className="top-28 left-1/2 translate-x-16    absolute w-72 h-72">
          <Image fill src={"/YellowSticker.svg"} alt={"svg"} />
        </div>

        <div className="flex h-full flex-col ">
          <div className="text-zinc-400 mt-36 ml-24 font-bebas text-9xl">
            HAVE SOME COOL IDEAS?{" "}
          </div>

          <div className="text-zinc-950  font-bebas mb-10 ml-24 text-[280px]">
            Let&apos;s HAVE A CHAT
          </div>
          <a
            href="https://calendly.com/simon-muscas"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto h-60 cursor-pointer w-full text-9xl bg-primary-500 flex items-center justify-start  pl-24"
          >
            BOOK A CALL
          </a>
        </div>
      </div>
    </section>
  );
};

export default LetsChat;
