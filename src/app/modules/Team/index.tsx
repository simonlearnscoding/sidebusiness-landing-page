type MeetTheTeamProps = {
  id: string;
};

const TextArea = ({}: {}) => {
  return (
    <div className=" bg-red-300 text-white flex-1 flex">
      <h1 className="font-bebas">MEET THE TEAM</h1>
    </div>
  );
};

const TeamArea = ({}: {}) => {
  return <div className="flex bg-red-200 flex-1"></div>;
};

const MeetTheTeam = ({ id }: { id: string }) => {
  return (
    <div className=" flex flex-col flex-1 h-screen w-screen ">
      <TextArea />
      <TeamArea />
    </div>
  );
};

export default MeetTheTeam;
