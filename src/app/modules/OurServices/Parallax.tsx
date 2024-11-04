import useSectionOnScroll from "@/hooks/useSectionOnScroll";
import useSectionObserver from "@/hooks/useSectionObserver";
import { ReactNode } from "react";
import Image from "next/image";
import useScrollSnap from "react-use-scroll-snap";

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

const sectionIds = ["first", "second"]; // IDs of all sections

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
  const scrollRef = useRef(null);
  //
  useScrollSnap({ ref: scrollRef, duration: 50 });
  return (
    <div ref={scrollRef} className=" z-0">
      <Section section="first">
        <Container bgColor="white">
          <div className="flex  h-full flex-col">
            <h1 className="text-zinc-500 lg:w-11/12 text-8xl md:text-9xl xl:text-[170px]">
              WE ARE Uniting <span className="text-primary-500">BRANDS</span>{" "}
              with their <span className="text-primary-500">VISION</span>
            </h1>

            <div className="mt-auto mb-8 flex flex-col gap-3">
              <div className="sm:flex hidden justify-start ">
                <div className="bg-primary-500 text-xl font-sans text-white py-4 px-5">
                  START YOUR JOURNEY
                </div>
              </div>
            </div>

            <div className="absolute z-10 w-96 right-60 h-96 bottom-0">
              <Image src="/HandArrow.svg" fill alt="Hand Arrow" />
            </div>
          </div>
        </Container>
      </Section>
      <Section section="second">
        <Container bgColor="primary-500">
          <h1 className="xl:w-8/12">
            Everything we see, experience, and benefit today is with thought the
            power of ideas.{" "}
          </h1>
        </Container>
      </Section>
      <div className="h-full bg-black w-full"> </div>
    </div>
  );
}
