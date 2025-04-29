import {
  Handshake,
  LineSegment,
  Target,
  ShoppingCart,
} from "@phosphor-icons/react";

function WorkWithUsCard({ Icon, name, explanation }) {
  return (
    <div className="font-sans text-gray-800   tracking-[-6%] z-10 text-2xl bg-gray-200/30 backdrop-blur-sm  shadow-sm flex flex-col flex-1 p-5 lg:p-14 rounded-3xl">
      <Icon weight={"duotone"} className="w-8 h-8 lg:w-12 lg:h-12" />{" "}
      {/* Responsive Icon */}
      <div className="mt-20 lg:mt-40 font-medium lg:text-5xl">{name}</div>
      <div className=" font-sans text-gray-800 tracking-[-6%] font-regular text-xl lg:text-3xl mt-5">
        {explanation}
      </div>
    </div>
  );
}
const explanations = [
  {
    name: "Simplicity",
    icon: LineSegment,
    explanation:
      "We make website creation so simple, you’ll wonder why it ever felt complicated",
  },
  {
    name: "Support",
    icon: Handshake,
    explanation:
      "Combine Vision and expertise —building great websites together, hassle-free",
  },
  {
    name: "Success",
    icon: Target,
    explanation:
      "Turning clicks into customers —fast, smooth, and friction-free",
  },
];

export default function WorkingWithUs() {
  return (
    <div className="flex items-center   mb-16 flex-col justify-center mx-4 lg:mx-20">
      <h1 className=" text-center  lg:max-w-4xl">
        Enjoy a smooth and rewarding
        <span className="pl-4 span">Journey With Us.</span>
      </h1>
      <div className="flex  gap-4 mt-10 lg:mt-16 flex-col lg:flex-row">
        {explanations.map((explanation) => (
          <WorkWithUsCard
            Icon={explanation.icon}
            name={explanation.name}
            explanation={explanation.explanation}
          />
        ))}
      </div>
    </div>
  );
}
