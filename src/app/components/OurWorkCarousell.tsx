import Marquee from "react-fast-marquee";
import Image from "next/image";

const WorkItem = ({ image }: { image: string }) => {
  return (
    <div className="w-80 sm:w-96 lg:w-[640px] xl:w-[800px] xl:h-[540px] lg:h-[400px] relative h-64 sm:h-72 md:w-[500px] md:h-[320px] rounded-md shadow-2xl mx-4 flex-shrink-0 bg-cover bg-center">
      <Image
        src={image}
        alt="Work Item"
        fill
        className="object-cover rounded-md"
        style={{ width: "100%", height: "100%" }}
      />
      {/* Optional content over image */}
    </div>
  );
};

export const OurWorkCarousell = () => {
  const imageFilenames = [
    "Restro Hero.jpg",
    "Therapy.jpg",
    "Barbershop Hero.jpg",
  ];

  const imagePaths = imageFilenames.map((name) => `/DesignExamples/${name}`);

  return (
    <div className="w-full h-fit py-4  ">
      {" "}
      {/* Added light bg for visibility */}
      <div className="h-full overflow-hidden relative">
        <Marquee
          speed={50} // Reduced speed for smoother animation
          gradient={false}
          play={true}
          direction="left"
          className="h-full flex items-center"
        >
          {imagePaths.map((src, index) => (
            <WorkItem image={src} key={index} />
          ))}
          {/* Duplicate items for seamless looping */}
          {imagePaths.map((src, index) => (
            <WorkItem image={src} key={`dup-${index}`} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};
