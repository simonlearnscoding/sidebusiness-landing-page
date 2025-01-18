import {
  Handshake,
  LineSegment,
  Target,
  ShoppingCart,
} from "@phosphor-icons/react";

function WorkWithUsCard({ Icon, name, explanation }) {
  return (
    <div className="font-sans text-gray-900 font-medium text-2xl bg-gray-100 flex  flex-col   p-5 rounded-3xl ">
      <Icon size={32} />
      <div className="mt-20">{name}</div>
      <div className="font-regular font-inter text-xl mt-5">
        {" "}
        {explanation}{" "}
      </div>
    </div>
  );
}
const explanations = [
  {
    name: "Simplicity",
    icon: LineSegment,
    explanation:
      "We make website creation so simple, you’ll wonder why it ever felt hard.",
  },
  {
    name: "Support",
    icon: Handshake,
    explanation:
      "Combine Vision and expertise —building great websites together, hassle-free.",
  },
  {
    name: "Success",
    icon: Target,
    explanation:
      "Turning clicks into customers —fast, smooth, and friction-free.",
  },
];

export default function WorkingWithUs() {
  return (
    <div className=" flex items-start mb-16 flex-col justify-center mx-4">
      <h1 className=" text-center ">
        Here's why you'll enjoy every step of the
        <span className="pl-2 span">Journey With Us.</span>
      </h1>
      <div className="flex gap-4 mt-10 flex-col">
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
