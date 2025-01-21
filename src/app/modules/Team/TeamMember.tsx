import { useState } from "react";
import Image from "next/image";

type MemberProps = {
  name: string;
  role: string;
  icon?: any;
  description: string;
  image: string;
};

const TeamMember = ({ data }: { data: MemberProps }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      // Toggle flip for mobile
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className="py-4 min-w-[340px] flex-1 [perspective:1000px] sm:w-full h-full group"
      onClick={handleClick} // Click handling for mobile
    >
      <div
        className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-300 ease-out ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        } group-hover:[transform:rotateY(180deg)]`}
      >
        {/* Front Side */}
        <div
          className="absolute shadow-[-6px_-6px_33px_0px_rgba(255,_255,_255,_0.1)]
          shadow-md
          inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl border-zinc-300 border-solid border-[1px] overflow-hidden [transform:rotateY(0deg)] shadow-[0_0_20px_rgba(255,255,255,0.5)] animate-glow"
        >
          {/* Background Image */}
          <div className="absolute  inset-0">
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover"
            />
          </div>
          {/* Front Content */}
          <div className="p-5 flex flex-col h-full relative z-10">
            <div className="flex">
              <h1 className="text-white text-4xl">{data.name}</h1>
              <div className="ml-auto">
                <data.icon className="text-white w-8 h-8" />
              </div>
            </div>
            <h1 className="mt-auto text-white text-4xl">{data.role}</h1>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gray-800 rounded-3xl border-zinc-300 border-solid border-[1px]">
          <div className="p-5 lg:px-8 flex flex-col h-full">
            <div className="rounded-full lg:mt-4 h-28 w-28  mx-auto bg-blue-300 relative">
              {" "}
              <Image
                fill
                src={data.image}
                className="rounded-full"
                objectFit="cover"
                alt={data.name}
              />
            </div>
            <p className="my-auto text-white text-xl xl:text-2xl 2xl:text-3xl">
              {data.description}
            </p>
            <div className="mt-auto ml-auto pb-4">
              <data.icon className="text-white w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
