import Image from "next/image";
const TextArea = () => {
  return (
    <div className="bg-white flex  w-full ">
      <div className="  flex-1 flex p-screen py-6   flex-col max-w-3xl">
        <h1 className=" text-zinc-600 font-bebas">MEET THE TEAM</h1>
        <p className="text-zinc-800   ">
          Lorem ipsum dolor sit amet consectetur. Condimentum congue penatibus
          fusce imperdiet quam ut.{" "}
        </p>
      </div>
      {/* <div className="mr-24 md:block hidden ml-auto mt-1  h-[233px] relative w-20"> */}
      {/*   <Image fill src={"/meet-the-team.png"} alt={"svg"} /> */}
      {/* </div> */}
    </div>
  );
};

export default TextArea;
