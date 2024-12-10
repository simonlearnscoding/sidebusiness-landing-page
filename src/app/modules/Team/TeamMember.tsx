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
      // Adjust breakpoint for mobile as needed
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className={`py-4 min-w-[340px] [perspective:1000px] sm:w-full h-full ${
        isFlipped ? "" : "group"
      }`}
      onClick={handleClick} // Enable flipping on click
    >
      <div
        className={`w-full h-full border-zinc-300 [transform-style:preserve-3d] transition-all duration-400 border-solid border-[1px] relative rounded-3xl ${
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "group-hover:[transform:rotateY(180deg)]"
        }`}
      >
        {/* Front Side */}
        <div className="absolute  inset-0 bg-zinc-800/30  p-5 flex flex-col rounded-3xl h-full w-full [backface-visibility:hidden]">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="  object-cover z-0 rounded-3xl"
          />
          <div className="flex  flex-col group-hover:z-0 z-10 justify-between h-full">
            <div className="flex">
              <h2 className="text-white text-4xl">{data.name}</h2>
              <div className="ml-auto">
                <data.icon className="text-white w-8 h-8" />
              </div>
            </div>
            <h2 className="mt-auto">{data.role}</h2>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 p-5 flex flex-col items-center rounded-3xl h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-zinc-900">
          <div className="rounded-full w-20 h-20  relative">
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <p className="text-white text-xl text-center mt-16">
            {data.description}
          </p>
          <div className="ml-auto mt-auto">
            {data.icon && <data.icon className="text-white w-12 h-12" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
