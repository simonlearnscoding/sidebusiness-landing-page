import { useState, useEffect } from "react";
import TeamMember from "./TeamMember";
import TeamMembersData from "./data";

export default function TeamArea() {
  const [flippedName, setFlippedName] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Improved mobile detection with debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const onResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth <= 768);
        // Reset flip state on orientation change
        setFlippedName(null);
      }, 100);
    };

    // Initial check
    setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleCardFlip = (name: string) => {
    if (!isMobile) return;
    console.log("flippedName", flippedName);
    console.log("name", name);
    setFlippedName((prev) => (prev === name ? null : name));
  };

  return (
    <div className="flex xl:overflow-x-hidden overflow-x-scroll snap-x snap-mandatory lg:mt-4 sm:px-5 lg:px-20 px-4 flex-1">
      <div className="flex min-w-fit h-full items-center gap-3 w-full md:gap-4">
        {TeamMembersData.map((member) => (
          <div
            key={member.name}
            className="snap-center flex flex-1 min-w-[250px] md:min-w-0 h-full md:w-full"
          >
            <TeamMember
              data={member}
              isFlipped={flippedName === member.name}
              onFlip={handleCardFlip}
              isMobile={isMobile}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
