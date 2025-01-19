import Image from "next/image";
const TextArea = () => {
  return (
    <div className=" flex  w-full ">
      <div className="  flex-1 flex  items-center  lg:items-start p-screen lg:py-7 py-8 flex-col max-w-6xl">
        <h1 className="flex flex-col text-center ">
          The Dreamers & Doers <span className="span pl-2">At Seamless...</span>{" "}
        </h1>
      </div>
      {/* <div className="mr-24 md:block hidden ml-auto mt-1  h-[233px] relative w-20"> */}
      {/*   <Image fill src={"/meet-the-team.png"} alt={"svg"} /> */}
      {/* </div> */}
    </div>
  );
};

export default TextArea;
