import TextArea from "./TextArea";
import TeamArea from "./TeamArea";

const MeetTheTeam = ({ id }: { id: string }) => {
  return (
    <section id={id} className="flex flex-col flex-1  w-screen">
      <TextArea />
      <TeamArea />
    </section>
  );
};

export default MeetTheTeam;
