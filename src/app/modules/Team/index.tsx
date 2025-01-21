import TextArea from "./TextArea";
import TeamArea from "./TeamArea";

const MeetTheTeam = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="flex lg:mt-4 mb-4 flex-col flex-1 2xl:h-screen h-[800px] xl:h-[1000px]  w-screen"
    >
      <TextArea />
      <TeamArea />
    </section>
  );
};

export default MeetTheTeam;
