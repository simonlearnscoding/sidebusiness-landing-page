import Marquee from "react-fast-marquee";
export default function MarqueeReusable({ inputText }) {
  return (
    <div className="">
      <Marquee
        autoFill={true}
        speed={120}
        className="overflow-hidden"
        gradient={false}
      >
        <div className="font-sans  flex py-3  text-gray-900 bg-gray-100  text-semibold  items-center ">
          <div className=" text-base   ">{inputText}</div>
          <div className="w-1 h-1 mx-4 rounded-full bg-gray-500"> </div>
        </div>
      </Marquee>
    </div>
  );
}
