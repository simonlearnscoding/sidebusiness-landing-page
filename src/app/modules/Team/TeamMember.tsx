type MemberProps = {
  name: string;
  role: string;
  icon?: any;
  description: string;
  image: string;
};
import Image from "next/image";

const TeamMember = ({ data }: { data: MemberProps }) => {
  return (
    <div className=" py-4 min-w-[340px] [perspective:1000px] sm:w-full h-full group">
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
            <h2 className="text-white text-4xl"> {data.name} </h2>
            <div className="ml-auto">
              <data.icon className="text-white w-8 h-8" />
            </div>
          </div>
          <h2 className="mt-auto ">{data.role} </h2>
        </div>
        {/* Back Side */}
        <div className="transform:rotateY(180deg)]  [backface-visibility:hidden]  inset-0 p-5  flex flex-col  w-full z-10  rounded-3xl absolute h-full">
          <h1 className="text-white text-4xl"> {data.name} </h1>
        </div>
      </div>
    </div>
  );
};
const TeamMemberOld = ({ data }: { data: MemberProps }) => {
  return (
    <div className="flex group flex-col p-[1px] bg-zinc-500 hover:bg-gradient-to-b  hover:from-zinc-300/80 hover:to-primary-500 rounded-3xl relative flex-1 items-center h-full min-w-[340px] sm:w-full">
      {/* Image Wrapper */}
      <div className="relative h-full w-full rounded-3xl">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover rounded-3xl"
        />
      </div>

      {/* Overlay with Transition on Hover */}
      <div className="absolute inset-0 flex justify-center items-center transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 w-full h-full rounded-3xl bg-gradient-to-t to-black/0 from-primary-500/75 z-10">
        <div className="flex flex-col mt-auto px-7 pb-9 justify-end">
          <div className="font-bebas text-6xl text-white transition-all duration-500 ease-in-out">
            {data.name}
          </div>
          <p
            className="font-sans  text-white transition-all  duration-500 ease-in-out"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
