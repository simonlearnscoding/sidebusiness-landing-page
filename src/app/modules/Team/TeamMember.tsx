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
    <div className="py-4 min-w-[340px] flex-1 [perspective:1000px] sm:w-full h-full group">
      <div className="w-full h-full [backface-visibility:hidden] border-zinc-300 [transform-style:preserve-3d] transition-all duration-400 group-hover:[transform:rotateY(180deg)] border-solid border-[1px]  relative rounded-3xl">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover rounded-3xl"
        />
        {/* Front side */}
        <div className=" p-5  flex flex-col  w-full z-10 bg-zinc-800/30 rounded-3xl absolute h-full">
          <div className="flex">
            <h1 className="text-white text-4xl"> {data.name} </h1>
            <div className="ml-auto">
              <data.icon className="text-white w-8 h-8" />
            </div>
            <h2 className="mt-auto">{data.role}</h2>
          </div>
          <h1 className="mt-auto text-white text-4xl ">{data.role} </h1>
        </div>

        {/* Back Side */}
        <div className="transform:rotateY(180deg)]  [backface-visibility:hidden]  inset-0 p-5  flex flex-col  w-full z-10  rounded-3xl absolute h-full">
          <h1 className="text-white text-4xl"> {data.name} </h1>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
