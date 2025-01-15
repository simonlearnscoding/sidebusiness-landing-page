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
      className="flex  overflow-x-scroll bg-red-500 snap-x snap-mandatory  sm:px-20 px-4 flex-1"
    >
      <div className="flex  min-w-fit h-full  items-center gap-3 max-w-full bg-red-300  md:gap-4">
        {TeamMembersData.map((member) => (
          <div
            key={member.name}
            className="snap-center flex flex-1 min-w-[250px] md:min-w-0 h-full md:w-full"
          >
            <TeamMember data={member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamArea;
