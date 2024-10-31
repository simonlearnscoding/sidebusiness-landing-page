import useSectionOnScroll from "@/hooks/useSectionOnScroll";
import useSectionObserver from "@/hooks/useSectionObserver";
import { ReactNode } from "react";
import Image from "next/image";

const Section = ({
  section,
  children,
}: {
  section: string;
  children: ReactNode;
}) => {
  return (
    <div id={section} className="h-screen  flex items-center justify-center">
      {children}
    </div>
  );
};

const sectionIds = ["first", "second"]; // IDs of all sections

function Container({ children, bgColor }) {
  return (
    <div className="h-full flex px-16 pt-24 pb-12 w-full">
      <div className={`h-full w-full bg-${bgColor} px-14 pt-12  rounded-xl`}>
        {children}
      </div>
    </div>
  );
}
export default function ParallaxComponent() {
  useSectionOnScroll();
  useSectionObserver(sectionIds);

  return (
    <div className="min-h-screen">
      <Section section="first">
        <Container bgColor="white">
          <div className="flex flex-col">
            <h1 className="text-zinc-500 w-11/12 text-[200px]">
              WE ARE Uniting <span className="text-primary-500">BRANDS</span>{" "}
              with their <span className="text-primary-500">VISION</span>
            </h1>
            <div className="font-sans text-zinc-700 max-w-md mt-10  text-xl">
              These ideas are what have made the beautiful world we have today.
            </div>

            <div className="flex justify-start mt-10">
              <div className="bg-primary-500 text-xl font-sans text-white py-4 px-5">
                START YOUR JOURNEY
              </div>
            </div>
            <div className="absolute w-96 right-80 h-96 bottom-0">
              <Image src="/HandArrow.svg" fill alt="Hand Arrow" />
            </div>
          </div>
        </Container>
      </Section>
      <Section section="second">
        <Container bgColor="primary-500">
          <h1 className="w-8/12">
            Everything we see, experience, and benefit today is with thought the
            power of ideas.{" "}
          </h1>
        </Container>
      </Section>
      <div className="h-full bg-black w-full"> </div>
    </div>
  );
}
