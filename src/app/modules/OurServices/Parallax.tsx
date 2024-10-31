import useSectionOnScroll from "@/hooks/useSectionOnScroll";
import useSectionObserver from "@/hooks/useSectionObserver";
import { ReactNode } from "react";

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
          <h1 className="text-zinc-600 w-8/12">
            WE ARE Uniting BRANDS with their VISION
          </h1>
        </Container>
      </Section>
      <Section section="second">
        <Container bgColor="primary-500">
          <h1>
            Everything we see, experience, and benefit today is with thought the
            power of ideas.{" "}
          </h1>
        </Container>
      </Section>
      <div className="h-full bg-black w-full"> </div>
    </div>
  );
}
