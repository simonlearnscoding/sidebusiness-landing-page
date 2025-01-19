import TeamMember from "./TeamMember";
// import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";
import TeamMembersData from "./data";

const TeamArea = () => {
  const scrollRef = useRef(null);

  // Initialize the scroll snap with the ref and a duration
  // useScrollSnap({ ref: scrollRef, duration: 50 });

  return (
    <div
      ref={scrollRef}
      className="flex   overflow-x-scroll  snap-x snap-mandatory lg:mt-4  sm:px-20 px-4 flex-1"
    >
      <div className="flex  min-w-fit h-full  items-center gap-3 w-full   md:gap-4">
        {TeamMembersData.map((member) => (
          <div
            key={member.name}
            className="snap-center flex flex-1 min-w-[250px]  md:min-w-0 h-full md:w-full"
          >
            <TeamMember key={member.name} data={member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamArea;
