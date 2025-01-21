import Image from "next/image";
export default function SubHeader({ id }: { id: string }) {
  return (
    <section id={id} className=" w-full my-10  lg:my-36 h-fit">
      <div className="mx-4 lg:mx-20 relative rounded-lg bg-gray-400 h-96 lg:h-[737px] overflow-hidden">
        <Image
          src="/CITY LIGHT 1.jpg"
          fill
          objectFit="cover"
          className="rounded-lg scale-110 lg:scale-100"
          alt="hero"
        />
      </div>
    </section>
  );
}
