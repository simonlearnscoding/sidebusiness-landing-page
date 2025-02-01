import RotatingShape from "./RotatingShape"; // Import the 3D shape

export default function SubHeader({ id }: { id: string }) {
  return (
    <section id={id} className="w-full my-10 lg:my-36 h-fit">
      <div className="mx-4 lg:mx-20 relative rounded-lg overflow-hidden shadow-2xl h-96 lg:h-[737px]">
        {/* Dark gradient background overlay for a moody ambience */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-blue-800 to-black opacity-90 z-0" />

        {/* Container for the 3D shape ensuring it appears above the overlay */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <RotatingShape />
        </div>
      </div>
    </section>
  );
}
