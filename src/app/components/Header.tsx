import { useEffect, useState } from "react";

export default function Header({ id }: { id: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animation after component mounts
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 10);
  }, []);

  return (
    <section
      id={id}
      className={`flex text-center flex-col gap-4 h-fit mx-4 lg:mx-28 mt-24 lg:mt-32 ${
        isLoaded
          ? "blur-none opacity-100 scale-100"
          : " scale-y-105 opacity-50 blur-sm"
      } transition-all duration-1000 ease-out`}
    >
      <h1 className="z-10 mt-6 lg:mt-40">
        Creating a Website - Intimidating, Daunting?{" "}
        <span className="span">Not Anymore.</span>
      </h1>
      <p className="flex z-10 w-full md:text-3xl text-2xl font-sans flex-col">
        We craft beautiful websites that Convert and are Worth Visiting.
      </p>
    </section>
  );
}
