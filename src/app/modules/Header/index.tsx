"use client";
import Header from "./Header";
import Footer from "./Footer";

const HeaderSection = ({ id }) => {
  return (
    <section id={id}>
      <div className="w-screen h-screen bg-zinc-900 overflow-x-hidden">
        <div className="absolute bottom-0 h-1/4 w-full z-10 sm:hidden bg-gradient-to-t from-zinc-900/80 to-zinc-900/0">
          {" "}
        </div>
        <Footer />
        <div className="flex flex-col overflow-x-hidden relative w-full h-full bg-noise-texture bg-cover bg-center bg-blend-overlay px-3 sm:px-10 z-10">
          <Header />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
