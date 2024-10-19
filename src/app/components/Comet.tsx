export const Comet = ({}) => {
  return (
    <div
      className="absolute opacity-80 right-0  sm:scale-100 scale-150 top-20 z-0 translate-x-80 translate-y-40 sm:-translate-y-[400px] xs:bottom-[-160px]"
      style={{
        opacity: 1 - scrollPos / 1000, // Fade out as user scrolls
        filter: `blur(${scrollPos / 200}px)`, // Apply blur effect based on scroll position
        transform: `translate(${mouseXPos / 30 - 80}px, ${
          scrollPos / 10 + mouseYPos / 30
        }px) scale(${1 + scrollPos / 2 / 1000})`, // Combine scale with translate
      }}
    >
      <Image src={"/Comet.png"} alt={"meteor"} width={800} height={800} />
    </div>
  );
};
