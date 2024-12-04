import Image from "next/image";
const TextArea = () => {
  return (
    <div className="bg-zinc-600 flex  w-full border-solid border-white border-[1px]">
      <div className="  flex-1 flex  items-center  lg:items-start p-screen lg:py-7 py-8 flex-col max-w-6xl">
        <h1 className=" text-zinc-200 font-bebas">MEET THE TEAM</h1>
        <p className="text-zinc-200  text-center lg:text-start mt-1 lg:mt-0 ">
          We are an international team with diverse expertise with a common
          goal: To Build Great Websites.
        </p>
      </div>
      {/* <div className="mr-24 md:block hidden ml-auto mt-1  h-[233px] relative w-20"> */}
      {/*   <Image fill src={"/meet-the-team.png"} alt={"svg"} /> */}
      {/* </div> */}
    </div>
  );
};

export default TextArea;
