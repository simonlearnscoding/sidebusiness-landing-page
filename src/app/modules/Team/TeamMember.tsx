type MemberProps = {
  name: string;
  role: string;
  description: string;
  image: string;
};
import Image from "next/image";
const TeamMember = ({ data }: { data: MemberProps }) => {
  return (
    <div className="flex group flex-col p-[1px] bg-zinc-300 hover:bg-gradient-to-b my-5 hover:from-zinc-300/80 hover:to-primary-500 rounded-3xl relative flex-1 items-center h-[480px] min-w-[340px] sm:w-full">
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
