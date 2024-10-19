"use client";
import Header from "./Header";
import Footer from "./Footer";
import Comet from "./../../components/Comet"; // Import the separated Comet component

const HeaderSection = () => {
  return (
    <div className="w-screen h-screen bg-zinc-900 overflow-x-hidden">
      <div className="absolute bottom-0 h-1/4 w-full z-10 sm:hidden bg-gradient-to-t from-zinc-900/80 to-zinc-900/0">
        {" "}
      </div>
      <Footer />
      <div className="flex flex-col overflow-x-hidden relative w-full h-full bg-noise-texture bg-cover bg-center bg-blend-overlay px-5 sm:px-20 z-10">
        <Header />
      </div>
    </div>
  );
};

export default HeaderSection;
