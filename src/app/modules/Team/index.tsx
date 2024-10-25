import Image from "next/image";

const TextArea = () => {
  return (
    <div className="bg-white flex w-full ">
      <div className="  flex-1 flex p-screen py-16  flex-col max-w-3xl">
        <h1 className=" text-zinc-600 font-bebas">MEET THE TEAM</h1>
        <p className="text-zinc-800">
          Lorem ipsum dolor sit amet consectetur. Condimentum congue penatibus
          fusce imperdiet quam ut. Amet tempor enim ultrices magna porttitor
          urna. A quisque et etiam morbi lectus eros sed diam quis. Integer
          pellentesque diam eu mollis nibh morbi.
        </p>
      </div>
      <div className="mr-24 ml-auto mt-12  h-[233px] relative w-20">
        <Image fill src={"/meet-the-team.png"} alt={"svg"} />
      </div>
    </div>
  );
};

type MemberProps = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const TeamMember = ({ data }: { data: MemberProps }) => {
  return (
    <div className="flex group flex-col p-[1px] bg-zinc-300 hover:bg-gradient-to-b hover:from-zinc-300/80 hover:to-primary-500 rounded-3xl relative flex-1 items-center h-[663px] w-full">
      {/* Image Wrapper */}
      <div className="relative h-full w-full rounded-3xl">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover rounded-3xl"
        />
      </div>

      {/* Overlay with Transition on Hover */}
      <div className="absolute inset-0 flex justify-center items-center transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 w-full h-full rounded-3xl bg-gradient-to-t to-black/0 from-primary-500/75 z-10">
        <div className="flex flex-col mt-auto px-7 pb-9 justify-end">
          <div className="font-bebas text-6xl text-white transition-all duration-500 ease-in-out">
            {data.name}
          </div>
          <p
            className="font-sans text-base text-white transition-all leading-5 duration-500 ease-in-out"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </div>
    </div>
  );
};
const TeamMembers = [
  {
    name: "Simon",
    role: "DEV",
    image: "/Team-simon.png",
    description: `
We customize your website for optimal performance that goes beyond what a typical design agency can offer.
No templates or pre-built solutions – instead, a proper tailor-made website that will help you achieve business needs and success.  <br /><br />
From complex features to integrated third-party systems, we deliver a smooth user experience that keeps customers on your site, creating more conversion opportunities.
    `,
  },
  {
    name: "Miracle",
    role: "DESIGN",
    image: "/Team-miracle.png",
    description: `
I help you stay in touch with your users' expectations of your product.<br /><br />
By delivering user-centric solutions, I explore what your users want and need, creating designs that are not only beautiful but also meaningful and pleasant to interact with.
    `,
  },
  {
    name: "James",
    role: "MARKETING",
    image: "/Team-james.png",

    description: `
We here at _(insert company name) create intelligent websites that are visible to the world.
This is done by creating a website with organic traffic and search engine ranking so people can actually find it.<br /><br />
A competitor analysis will be done, and your SEO campaign will be monitored, ensuring the website we create is competitive in its presentation with the most optimized keywords and Google Analytics.
    `,
  },
];
const TeamArea = () => {
  return (
    <div className="flex bg-zinc-900   px-20 py-16 flex-1">
      <div className="w-full flex-grow h-full gap-10 flex ">
        {TeamMembers.map((member) => (
          <TeamMember key={member.name} data={member} />
        ))}
      </div>
    </div>
  );
};

const MeetTheTeam = ({ id }: { id: string }) => {
  console.log(id);
  return (
    <div className="  flex flex-col flex-1    w-screen ">
      <TextArea />
      <TeamArea />
    </div>
  );
};

export default MeetTheTeam;
