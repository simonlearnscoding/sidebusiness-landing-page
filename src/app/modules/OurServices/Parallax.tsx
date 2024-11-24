import { useSectionStore } from "@/store/useSectionStore";
/* import useSectionOnScroll from "@/hooks/useSectionOnScroll"; */
{
  /* import useSectionObserver from "@/hooks/useSectionObserver"; */
}
import { ReactNode } from "react";
import Image from "next/image";
// import useScrollSnap from "react-use-scroll-snap";

import { useRef } from "react";
const Section = ({
  section,
  children,
}: {
  section: string;
  children: ReactNode;
}) => {
  return (
    <div id={section} className="h-full flex  items-center justify-center">
      {children}
    </div>
  );
};

{
  /* const sectionIds = ["first", "second"]; // IDs of all sections */
}

function Container({ children, bgColor }) {
  return (
    <div className="h-screen flex px-3 sm:px-10 pt-10 md:pt-24 pb-12  w-full">
      <div
        className={`h-full w-full bg-${bgColor} sm:px-8 px-4 sm:pt-12 pt-14  rounded-md sm:rounded-xl`}
      >
        {children}
      </div>
    </div>
  );
}
export default function ParallaxComponent() {
  // useSectionOnScroll();
  // useSectionObserver(sectionIds);
  const scrollToSection = useSectionStore((state) => state.scrollToSection);
  const scrollRef = useRef(null);
  //
  // useScrollSnap({ ref: scrollRef, duration: 50  });
  return (
    <div ref={scrollRef} className=" z-0">
      <Section section="first">
        <Container bgColor="">
          <div className="flex relative  h-full flex-col">
            <h1 className="text-zinc-500 lg:w-11/12 text-8xl md:text-9xl xl:text-[170px]">
              Your Vision, Our Mission
            </h1>

            <div className="mt-auto mb-8 flex flex-col gap-3">
              <div className="sm:flex hidden justify-start ">
                <div
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary-500 cursor-pointer text-xl font-sans text-white py-4 px-5"
                >
                  START YOUR JOURNEY
                </div>
              </div>
            </div>

            <div className="absolute z-10 lg:w-96 w-72 h-72 right-0 lg:right-60 lg:h-96 bottom-10 lg:bottom-0">
              <Image src="/HandArrow.svg" fill alt="Hand Arrow" />
            </div>
          </div>
        </Container>
      </Section>
      <Section section="second">
        <Container bgColor="primary-500">
          <h2 className="lg:w-11/12">
            Everything we see, experience, and benefit today is with thought the
            power of ideas.{" "}
          </h2>
        </Container>
      </Section>
      <div className="h-full bg-black w-full"> </div>
    </div>
  );
}
